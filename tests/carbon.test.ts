import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {generateKeyPairSync} from 'node:crypto';
import {PGlite} from '@electric-sql/pglite';
import {calculate} from '../src/lib/carbon/calculate';
import {FACTORS,ADEME_FACTORS,CATEGORIES,firstSupportedKind} from '../src/lib/carbon/factors';
import {PURE_F_GASES, EU_F_GAS_SOURCE, EU_F_GAS_VERSION} from '../src/lib/carbon/refrigerants';
import {sample} from '../src/lib/carbon/sample';
import {digest,signReport,verifyReport,canonical,trustedVerificationKeys} from '../src/lib/carbon/crypto';
import {csv,pdf} from '../src/lib/carbon/document';
import {isPaidSession,isCapturedTestPayment,PRODUCT,PRICE,stripe} from '../src/lib/carbon/payment';
import {PAID_SQL,CREDIT_SQL,ATTACH_SESSION_SQL} from '../src/lib/carbon/store';
import {POST as preview} from '../src/app/api/carbon/preview/route';
import {POST as checkout} from '../src/app/api/checkout/route';
import {POST as webhook} from '../src/app/api/stripe/webhook/route';
const base=()=>structuredClone(sample().calculation.assessment);
const close=(a:number,b:number)=>assert.ok(Math.abs(a-b)<1e-9,`${a} != ${b}`);
const request=(data:unknown,origin='http://localhost:3000')=>new Request('http://localhost:3000/api/carbon/preview',{method:'POST',headers:{origin,'content-type':'application/json'},body:JSON.stringify(data)});

test('office manual reference: 10,000 × .0394 / 1000 = .394 t; 10 MWh',()=>{const r=calculate(base());close(r.scope1T,0);close(r.scope2LocationT,.394);close(r.energyMwh,10);assert.equal(r.coverage,'declared_sources_covered');});
test('gas and fleet manual reference; separate biogenic CO2 and PCI',()=>{const b=base();b.sources.gas='known';b.sources.diesel_b7='known';b.sources.petrol_e10='known';b.activities.push({id:'gas',kind:'gas_pcs',quantity:20000,unit:'kWh PCS',quality:'invoice',evidence:'gas bill'},{id:'fleet',kind:'diesel_b7',quantity:1000,unit:'L',energyKwh:10000,quality:'invoice',evidence:'diesel ledger'},{id:'petrol',kind:'petrol_e10',quantity:100,unit:'L',energyKwh:900,quality:'invoice',evidence:'petrol ledger'});const r=calculate(b);close(r.scope1T,6.329);close(r.totalT,6.723);close(r.energyMwh,38.9);close(r.biogenicCO2T,.1710859);});
test('gas PCI quantity is not converted a second time',()=>{const b=base();b.sources.gas='known';b.activities.push({id:'g',kind:'gas_pci',quantity:1000,unit:'kWh PCI',quality:'invoice',evidence:'gas'});const r=calculate(b);close(r.scope1T,.201);close(r.energyMwh,11);});
test('industrial case remains partial and cannot be sold',()=>{const b=base();b.sources.processes='known';const r=calculate(b);assert.equal(r.saleEligible,false);assert.ok(r.missing.includes('processes'));});
test('missing does not silently become zero',()=>{const b=base();b.sources.electricity='unknown';b.activities=[];const r=calculate(b);assert.equal(r.coverage,'partial');assert.equal(r.saleEligible,false);});
test('explicit zero with evidence is accepted',()=>{const b=base();b.activities[0].quantity=0;assert.equal(calculate(b).totalT,0);});
test('known source without line is incomplete',()=>{const b=base();b.activities=[];assert.equal(calculate(b).saleEligible,false);});
test('not applicable source cannot have rows',()=>{const b=base();b.sources.electricity='not_applicable';assert.throws(()=>calculate(b),/SOURCE_CONFLICT/);});
for(const value of [-1,NaN,Infinity,1e10,'1000',null,undefined])test(`reject invalid quantity ${String(value)}`,()=>{const b:any=base();b.activities[0].quantity=value;assert.throws(()=>calculate(b));});
test('reject client supplied total and factors',()=>{assert.throws(()=>calculate({...base(),totalCO2e:0}));const b:any=base();b.activities[0].factor=0;assert.throws(()=>calculate(b));});
test('reject unsupported country and future reporting year',()=>{assert.throws(()=>calculate({...base(),country:'DE'}));assert.throws(()=>calculate({...base(),year:2027}));});
test('reject mismatched units',()=>{const b=base();b.activities[0].unit='L';assert.throws(()=>calculate(b));});
test('reject duplicate ids and duplicate source evidence',()=>{const b=base();b.activities.push({...b.activities[0]});assert.throws(()=>calculate(b));b.activities[1].id='new';assert.throws(()=>calculate(b));});
test('fuel energy required, no invented litre conversion',()=>{const b=base();b.sources.diesel_b7='known';b.activities.push({id:'d',kind:'diesel_b7',quantity:1,unit:'L',quality:'invoice',evidence:'d'});assert.throws(()=>calculate(b));});
test('period validation includes nonexistent dates and cross-year input',()=>{for(const start of ['2025-02-30','2024-01-01','2025-12-31'])assert.throws(()=>calculate({...base(),start,end:'2025-06-01'}));});
test('partial period explicitly blocks sale and is not annualised',()=>{const r=calculate({...base(),start:'2025-06-01'});assert.equal(r.saleEligible,false);assert.ok(r.warnings.includes('PARTIAL_YEAR'));close(r.totalT,.394);});
test('exclusions always yield partial coverage',()=>assert.equal(calculate({...base(),exclusions:'remote site'}).coverage,'partial'));
test('unconfirmed declaration rejected',()=>assert.throws(()=>calculate({...base(),confirmed:false})));
test('all nine sources required explicitly',()=>{const b:any=base();delete b.sources.refrigerants;assert.throws(()=>calculate(b));});
test('factor values, boundaries, record IDs and biogenic values match official saved records',()=>{const rows=JSON.parse(readFileSync('docs/refonte/evidence/ademe-records.json','utf8'));for(const f of Object.values(ADEME_FACTORS)){const r=rows.find(r=>r._id===f.row);assert.ok(r);assert.equal(r["Identifiant_de_l'élément"],f.id);assert.equal(r.Total_poste_non_décomposé,f.value);assert.equal(r.Type_poste,f.boundary);assert.equal(r.CO2b||0,f.biogenic);assert.equal(r.Localisation_géographique,'France continentale');}});
test('canonical JSON independent of key order',()=>assert.equal(canonical({b:1,a:{d:2,c:3}}),canonical({a:{c:3,d:2},b:1})));
const keys=generateKeyPairSync('ed25519');const privateKey=keys.privateKey.export({format:'pem',type:'pkcs8'}).toString();const publicKey=keys.publicKey.export({format:'pem',type:'spki'}).toString();
test('signature covers identity, sources, factors, results and limitations',()=>{const signed=signReport(sample(),privateKey);assert.ok(verifyReport(signed,publicKey));for(const mutate of [(r:any)=>r.calculation.assessment.company='fake',(r:any)=>r.calculation.lines[0].factor.value=0,(r:any)=>r.calculation.totalT=0,(r:any)=>r.calculation.warnings=[]]){const changed=structuredClone(signed);mutate(changed.report);assert.equal(verifyReport(changed,publicKey),false);}});
test('wrong signature/key and unsigned object are rejected',()=>{const s=signReport(sample(),privateKey);assert.equal(verifyReport({...s,signature:'garbage'},publicKey),false);assert.equal(verifyReport(s,generateKeyPairSync('ed25519').publicKey.export({format:'pem',type:'spki'}).toString()),false);});
test('CSV cannot execute spreadsheet formula from declared company',()=>{const s=sample();s.calculation.assessment.company='=HYPERLINK("https://evil")';const out=csv(s);assert.ok(!out.includes('HYPERLINK'));assert.ok(out.includes('scope2_location_tco2e'));});
const row={id:'report',snapshot_hash:'hash',session_id:'cs_test_A'};
const paid:any={id:'cs_test_A',created:1794480000,mode:'payment',status:'complete',payment_status:'paid',livemode:false,currency:'eur',amount_total:PRICE,metadata:{product:PRODUCT,reportId:'report',snapshotHash:'hash'},client_reference_id:'report',payment_intent:'pi_test'};
test('accept only matching paid checkout session',()=>assert.ok(isPaidSession(paid,row)));
for(const patch of [{payment_status:'unpaid'},{status:'expired'},{livemode:true},{currency:'usd'},{amount_total:1},{id:'cs_test_B'},{mode:'subscription'},{metadata:{...paid.metadata,snapshotHash:'tampered'}},{metadata:{...paid.metadata,product:'old-attestation'}},{client_reference_id:'other-report'},{payment_intent:null}])test(`reject payment mismatch ${JSON.stringify(patch)}`,()=>assert.equal(isPaidSession({...paid,...patch},row),false));
test('live Stripe key never enabled on review branch',()=>{const old=process.env.CARBON_STRIPE_KEY;process.env.CARBON_STRIPE_KEY='sk_live_fake';assert.throws(()=>stripe(),/SALES_DISABLED/);if(old)process.env.CARBON_STRIPE_KEY=old;else delete process.env.CARBON_STRIPE_KEY;});
test('API preview calculates server-side and rejects cross-origin',async()=>{const ok=await preview(request(base()));assert.equal(ok.status,200);close((await ok.json()).totalT,.394);assert.equal((await preview(request(base(),'https://evil.example'))).status,403);});
test('API rejects oversized request without exposing internals',async()=>{const r=await preview(request({x:'a'.repeat(33000)}));assert.equal(r.status,400);assert.ok(!(await r.text()).includes('stack'));});
test('checkout disabled by default, no provider called',async()=>{delete process.env.CARBON_TEST_CHECKOUT;const r=await checkout(request({assessment:base(),acceptTerms:true}));assert.equal(r.status,503);assert.equal((await r.json()).error,'SALES_DISABLED');});
test('webhook rejects missing or invalid signature',async()=>{process.env.CARBON_WEBHOOK_SECRET='whsec_test';process.env.CARBON_STRIPE_KEY='sk_test_not_real';const r=await webhook(new Request('http://localhost/api/stripe/webhook',{method:'POST',body:'{}'}));assert.equal(r.status,400);delete process.env.CARBON_WEBHOOK_SECRET;delete process.env.CARBON_STRIPE_KEY;});
test('PostgreSQL migration, conditional fulfillment, unique document, atomic last credit and rollback',async()=>{
 const db=new PGlite();await db.exec(readFileSync('migrations/001_carbon.sql','utf8'));const id='00000000-0000-4000-8000-000000000001';
 await db.query("INSERT INTO carbon_reports(id,secret_hash,snapshot,snapshot_hash,session_id) VALUES($1,'secret','{}','hash','session')",[id]);
 let r=await db.query(PAID_SQL,[id,'pi',new Date(),'wrong','hash']);assert.equal(r.rows.length,0);
 r=await db.query(PAID_SQL,[id,'pi',new Date(),'session','hash']);assert.equal(r.rows.length,1);
 r=await db.query(PAID_SQL,[id,'pi',new Date(),'session','hash']);assert.equal(r.rows.length,0);
 await db.query("UPDATE carbon_reports SET document=COALESCE(document,$2::jsonb) WHERE id=$1",[id,'{"version":1}']);await db.query("UPDATE carbon_reports SET document=COALESCE(document,$2::jsonb) WHERE id=$1",[id,'{"version":2}']);assert.deepEqual((await db.query<any>('SELECT document FROM carbon_reports')).rows[0].document,{version:1});
 await db.exec("INSERT INTO carbon_credits(key_hash,remaining,expires_at) VALUES('key',1,now()+interval '1 day')");
 const attempts=await Promise.all(Array.from({length:10},()=>db.query(CREDIT_SQL,['key',PRODUCT])));assert.equal(attempts.reduce((n,r)=>n+r.rows.length,0),1);
 await db.exec("BEGIN; UPDATE carbon_credits SET remaining=10 WHERE key_hash='key'; ROLLBACK;");assert.equal((await db.query<any>('SELECT remaining FROM carbon_credits')).rows[0].remaining,0);
 await db.exec("UPDATE carbon_reports SET status='revoked'");assert.equal((await db.query(PAID_SQL,[id,'pi',new Date(),'session','hash'])).rows.length,0);
 await db.close();
});
test('render actual PDF and CSV for FR EN DE (three pages minimum)',async()=>{mkdirSync('docs/refonte/evidence',{recursive:true});for(const locale of ['fr','en','de'] as const){const report=sample(locale);const buffer=await pdf(report,true);assert.equal(buffer.subarray(0,4).toString(),'%PDF');assert.ok(buffer.length>3000);const pageCount=(buffer.toString('latin1').match(/\/Type\s*\/Page\b/g)||[]).length;assert.equal(pageCount,3,`Unexpected overflow in ${locale} PDF: ${pageCount} pages`);writeFileSync(`docs/refonte/evidence/specimen-${locale}.pdf`,buffer);writeFileSync(`docs/refonte/evidence/specimen-${locale}.csv`,csv(report));writeFileSync(`docs/refonte/evidence/specimen-${locale}.json`,JSON.stringify(signReport(report,privateKey),null,2));}writeFileSync('docs/refonte/evidence/specimen-test-public-key.pem',publicKey);});

test('service integration: draft -> checkout stub -> unpaid -> paid -> stable issuance -> tamper/refund/expiry rejection',async()=>{
 const {createCarbonService}=await import('../src/lib/carbon/service');
 const db=new PGlite();await db.exec(readFileSync('migrations/001_carbon.sql','utf8'));
 const query=async(sql:string,args?:any[])=>{const r=await db.query(sql,args);return {...r,rowCount:r.rows.length || r.affectedRows || 0};};
 const adapter:any={query,connect:async()=>({query,release(){}})};
 let session:any,refunded=false,providerError=false,checkoutArgs:any;
 const fakeStripe:any={checkout:{sessions:{create:async(args:any)=>{checkoutArgs=args;session={...paid,id:'cs_test_integrated',metadata:args.metadata,client_reference_id:args.client_reference_id,payment_status:'unpaid'};return {...session,url:'https://checkout.stripe.com/test'};},retrieve:async()=>{if(providerError)throw Error('provider failed');return session;}}},paymentIntents:{retrieve:async()=>({id:'pi_test',livemode:false,currency:'eur',amount:PRICE,amount_received:PRICE,status:'succeeded',latest_charge:{payment_intent:'pi_test',livemode:false,currency:'eur',amount:PRICE,paid:true,captured:true,status:'succeeded',refunded,amount_refunded:refunded?8900:0,disputed:false}})}};
 const svc=createCarbonService(()=>adapter,()=>fakeStripe);
 process.env.CARBON_TEST_CHECKOUT='true';process.env.CARBON_BASE_URL='http://localhost:3000';process.env.CARBON_SIGNING_KEY=privateKey;
 try{
 const order=await svc.createCheckout(base(),'http://localhost:3000');assert.equal(checkoutArgs.line_items[0].price_data.unit_amount,8900);assert.equal(checkoutArgs.metadata.totalCO2e,undefined);assert.equal(checkoutArgs.metadata.company,undefined);assert.equal(JSON.stringify(checkoutArgs).includes(order.token),false);
 // Simulate the session_id write being lost after Stripe created a valid session.
 await db.query('UPDATE carbon_reports SET session_id=NULL WHERE id=$1',[order.id]);
 await assert.rejects(()=>svc.issue(order.id,'wrong'),/UNAUTHORIZED/);
 await assert.rejects(()=>svc.issue(order.id,order.token),/PAYMENT_PENDING/);
 session.payment_status='paid';
 const originalMetadata=session.metadata;
 session.metadata={...originalMetadata,snapshotHash:'0'.repeat(64)};
 await assert.rejects(()=>svc.fulfill(session.id),/PAYMENT_PENDING/);
 assert.equal((await db.query<any>('SELECT session_id FROM carbon_reports WHERE id=$1',[order.id])).rows[0].session_id,null);
 session.metadata=originalMetadata;
 session.client_reference_id='a-different-report';
 await assert.rejects(()=>svc.fulfill(session.id),/PAYMENT_PENDING/);
 session.client_reference_id=order.id;
 await svc.fulfill(session.id);await svc.fulfill(session.id);
 assert.equal((await db.query<any>('SELECT session_id FROM carbon_reports WHERE id=$1',[order.id])).rows[0].session_id,session.id);
 const docs=await Promise.all(Array.from({length:5},()=>svc.issue(order.id,order.token)));assert.ok(docs.every(d=>digest(d)===digest(docs[0])));assert.ok(verifyReport(docs[0],publicKey));
 const corrupt=structuredClone(docs[0]);corrupt.report.calculation.totalT=999;
 await db.query("UPDATE carbon_reports SET document=$2::jsonb WHERE id=$1",[order.id,JSON.stringify(corrupt)]);
 await assert.rejects(()=>svc.issue(order.id,order.token),/DOCUMENT_CORRUPT/);
 await db.query("UPDATE carbon_reports SET document=$2::jsonb WHERE id=$1",[order.id,JSON.stringify(docs[0])]);
 const oldSnapshot=(await db.query<any>("SELECT snapshot FROM carbon_reports WHERE id=$1",[order.id])).rows[0].snapshot;
 await db.query("UPDATE carbon_reports SET snapshot=$2::jsonb WHERE id=$1",[order.id,JSON.stringify({...oldSnapshot,totalT:999})]);
 await assert.rejects(()=>svc.issue(order.id,order.token),/SNAPSHOT_CORRUPT/);
 await db.query("UPDATE carbon_reports SET snapshot=$2::jsonb WHERE id=$1",[order.id,JSON.stringify(oldSnapshot)]);
 providerError=true;await assert.rejects(()=>svc.issue(order.id,order.token));providerError=false;
 refunded=true;await assert.rejects(()=>svc.issue(order.id,order.token),/REVOKED/);refunded=false;await assert.rejects(()=>svc.issue(order.id,order.token),/REVOKED/);
 await db.query("UPDATE carbon_reports SET expires_at=now()-interval '1 day' WHERE id=$1",[order.id]);await assert.rejects(()=>svc.issue(order.id,order.token),/UNAUTHORIZED/);
 }finally{delete process.env.CARBON_TEST_CHECKOUT;delete process.env.CARBON_BASE_URL;delete process.env.CARBON_SIGNING_KEY;await db.close();}
});

test('service credits: rollback on invalid key, idempotent redemption and exhausted balance',async()=>{
 const {createCarbonService}=await import('../src/lib/carbon/service');const db=new PGlite();await db.exec(readFileSync('migrations/001_carbon.sql','utf8'));const query=async(sql:string,args?:any[])=>{const r=await db.query(sql,args);return {...r,rowCount:r.rows.length || r.affectedRows || 0};};const adapter:any={query,connect:async()=>({query,release(){}})};const svc=createCarbonService(()=>adapter);
 const token='test-access',key='a'.repeat(40),id='00000000-0000-4000-8000-000000000002';
 await db.query("INSERT INTO carbon_reports(id,secret_hash,snapshot,snapshot_hash) VALUES($1,$2,$3,$4)",[id,digest(token),JSON.stringify(sample().calculation),digest(sample().calculation)]);await db.query("INSERT INTO carbon_credits(key_hash,remaining,expires_at) VALUES($1,1,now()+interval '1 day')",[digest(key)]);
 await assert.rejects(()=>svc.redeem(id,'wrong',key),/UNAUTHORIZED/);assert.equal((await db.query<any>('SELECT remaining FROM carbon_credits')).rows[0].remaining,1);
 // A customer can redeem a credit near the end of the draft's 30-day life.
 // The newly issued document must remain accessible for at least 30 days.
 await db.query("UPDATE carbon_reports SET expires_at=now()+interval '2 minutes' WHERE id=$1",[id]);
 await svc.redeem(id,token,key);
 const first=(await db.query<any>("SELECT paid_at,expires_at FROM carbon_reports WHERE id=$1",[id])).rows[0];
 assert.ok(new Date(first.expires_at).getTime()-new Date(first.paid_at).getTime()>=30*86400000-1000);
 await svc.redeem(id,token,key);
 const second=(await db.query<any>("SELECT paid_at,expires_at FROM carbon_reports WHERE id=$1",[id])).rows[0];
 assert.equal(new Date(first.paid_at).getTime(),new Date(second.paid_at).getTime());
 assert.equal(new Date(first.expires_at).getTime(),new Date(second.expires_at).getTime());
 assert.equal((await db.query<any>('SELECT remaining FROM carbon_credits')).rows[0].remaining,0);assert.equal((await db.query('SELECT * FROM carbon_redemptions')).rows.length,1);
 await assert.rejects(()=>svc.redeem(id,token,'b'.repeat(40)),/UNAUTHORIZED/);await db.close();
});

test('B3 energy: renewable share supplied with evidence does not alter location-based scope 2',()=>{
 const b=base();b.activities[0].renewableEnergyKwh=4000;
 const r=calculate(b);close(r.energyBreakdown.electricity.totalMwh,10);
 close(r.energyBreakdown.electricity.renewableMwh!,4);
 close(r.energyBreakdown.electricity.nonRenewableMwh!,6);
 close(r.energyBreakdown.total.renewableMwh!,4);
 close(r.scope2LocationT,.394);
});
test('B3 energy: unknown is not silently zero, including among multiple lines',()=>{
 const b=base();b.sources.gas='known';b.activities[0].renewableEnergyKwh=4000;
 b.activities.push({id:'gas',kind:'gas_pci',quantity:1000,unit:'kWh PCI',quality:'invoice',evidence:'gas invoice'});
 const r=calculate(b);close(r.energyBreakdown.electricity.renewableMwh!,4);
 assert.equal(r.energyBreakdown.fuels.renewableMwh,null);
 assert.equal(r.energyBreakdown.total.renewableMwh,null);
 assert.ok(r.warnings.includes('ENERGY_SPLIT_NOT_AVAILABLE'));
});
test('B3 energy: explicit zero supported; reject renewable quantities exceeding energy',()=>{
 const b=base();b.activities[0].renewableEnergyKwh=0;
 assert.equal(calculate(b).energyBreakdown.total.nonRenewableMwh,10);
 b.activities[0].renewableEnergyKwh=10001;
 assert.throws(()=>calculate(b));
});
test('2026 preliminary energy preview allowed until today, but cannot be sold',()=>{
 const b=base();b.year=2026;b.start='2026-01-01';b.end='2026-10-31';
 const r=calculate(b);assert.equal(r.saleEligible,false);assert.ok(r.warnings.includes('2026_PROVISIONAL'));
 assert.throws(()=>calculate({...b,end:'2026-12-31'}));
});

test('renewable B3 classification requires documentary-grade activity data',()=>{
 const b=base();b.activities[0].renewableEnergyKwh=2000;b.activities[0].quality='declaration';
 assert.throws(()=>calculate(b));
 b.activities[0].quality='estimate';
 assert.throws(()=>calculate(b));
});
test('B3 CSV retains unknowns as blanks, not misleading zeros',()=>{
 const r=sample();const content=csv(r);
 assert.match(content,/electricity_mwh,fuels_mwh,renewable_energy_mwh,nonrenewable_energy_mwh,energy_split_complete/);
 assert.match(content,/,false,/);
});

test('B3 source mapping: unsupported category has no activity kind; no form crash when marked relevant',()=>{
 assert.equal(firstSupportedKind("refrigerants"),"refrigerant_hfc32");
 assert.equal(firstSupportedKind("purchased_heat"),undefined);
 assert.equal(firstSupportedKind("other_fuels"),undefined);
 assert.equal(firstSupportedKind("electricity"),"electricity");
 assert.equal(firstSupportedKind("gas"),"gas_pcs");
});
test('B3 energy: unknown electricity or fuel is not silently shown as 0 renewable',()=>{
 const a=base();a.sources.electricity="unknown";a.activities=[];
 let r=calculate(a);
 assert.equal(r.energyBreakdown.electricity.renewableMwh,null);
 assert.equal(r.energyBreakdown.total.nonRenewableMwh,null);
 assert.equal(r.saleEligible,false);
 const b=base();b.activities[0].renewableEnergyKwh=1000;
 b.sources.diesel_b7="unknown";
 r=calculate(b);
 assert.equal(r.energyBreakdown.electricity.renewableMwh,1);
 assert.equal(r.energyBreakdown.fuels.nonRenewableMwh,null);
 assert.equal(r.energyBreakdown.total.renewableMwh,null);
});
test('B3 sale: empty completely excluded inventory cannot be issued as a zero-emission company',()=>{
 const a=base();a.activities=[];
 a.sources=Object.fromEntries(CATEGORIES.map(c=>[c,"not_applicable"])) as typeof a.sources;
 assert.equal(calculate(a).saleEligible,false);
});

// An activity row must never contradict the declared applicability of its source.
test('reject recorded energy source marked unknown instead of known',()=>{
 const a=base();a.sources.electricity='unknown';
 assert.throws(()=>calculate(a),/SOURCE_CONFLICT/);
});

// Delivery access is anchored to actual payment confirmation, not checkout session creation.
test('confirmed checkout grants at least 30 days of access after payment',async()=>{
 const db=new PGlite();
 await db.exec(readFileSync('migrations/001_carbon.sql','utf8'));
 try{
  const id='00000000-0000-4000-8000-00000000a030';
  await db.query("INSERT INTO carbon_reports(id,secret_hash,snapshot,snapshot_hash,session_id,expires_at) VALUES($1,'secret','{}','hash','session',now()+interval '1 day')",[id]);
  const confirmation=new Date();
  const paid=await db.query(PAID_SQL,[id,'pi-30',confirmation,'session','hash']);
  assert.equal(paid.rows.length,1);
  const {rows}=await db.query<{paid_at:Date;expires_at:Date}>("SELECT paid_at,expires_at FROM carbon_reports WHERE id=$1",[id]);
  assert.ok(new Date(rows[0].expires_at).getTime()-new Date(rows[0].paid_at).getTime()>=30*24*60*60*1000-1000);
  const repeated=await db.query(PAID_SQL,[id,'pi-30',new Date(confirmation.getTime()+1000),'session','hash']);
  assert.equal(repeated.rows.length,0);
 }finally{await db.close();}
});

test('archive of trusted public signing keys survives a signer rotation',()=>{
 const old=generateKeyPairSync('ed25519'),current=generateKeyPairSync('ed25519'),untrusted=generateKeyPairSync('ed25519');
 const privOld=old.privateKey.export({type:'pkcs8',format:'pem'}).toString();
 const privNow=current.privateKey.export({type:'pkcs8',format:'pem'}).toString();
 const pubOld=old.publicKey.export({type:'spki',format:'pem'}).toString();
 const pubNow=current.publicKey.export({type:'spki',format:'pem'}).toString();
 const report=sample();
 const first=signReport(report,privOld),next=signReport(report,privNow);
 const keys=trustedVerificationKeys(privNow,JSON.stringify([pubOld,pubOld]));
 assert.equal(keys.length,2);
 assert.ok(keys.some(k=>verifyReport(first,k)));
 assert.ok(keys.some(k=>verifyReport(next,k)));
 const forged=signReport(report,untrusted.privateKey.export({type:'pkcs8',format:'pem'}).toString());
 assert.equal(keys.some(k=>verifyReport(forged,k)),false);
 assert.throws(()=>trustedVerificationKeys(privNow,JSON.stringify(['not-a-public-key'])));
 assert.throws(()=>trustedVerificationKeys(privNow,JSON.stringify(Array(13).fill(pubOld))));
 assert.deepEqual(trustedVerificationKeys(undefined,JSON.stringify([pubOld])),[pubOld]);
 assert.ok(pubNow.includes('BEGIN PUBLIC KEY'));
});

test('EU F-gas pure HFC factors exactly match Regulation 2024/573 Annex I 100-year GWP',()=>{
 assert.deepEqual(PURE_F_GASES,{refrigerant_hfc32:{id:"HFC-32",value:675},refrigerant_hfc134a:{id:"HFC-134a",value:1430},refrigerant_hfc125:{id:"HFC-125",value:3500},refrigerant_hfc143a:{id:"HFC-143a",value:4470}});
 assert.equal(EU_F_GAS_SOURCE,"https://eur-lex.europa.eu/eli/reg/2024/573/oj");
 assert.equal(EU_F_GAS_VERSION,"EU-2024-573-ANNEX-I-GWP100");
});
test('pure HFC-32 leakage 0.5 kg is 0.3375 tCO2e scope 1, without adding energy',()=>{
 const b=base();
 b.sources.refrigerants="known";
 b.activities.push({id:"leak",kind:"refrigerant_hfc32",quantity:0.5,unit:"kg",quality:"invoice",evidence:"service record mass released"});
 const r=calculate(b);
 close(r.scope1T,0.3375);close(r.scope2LocationT,0.394);close(r.energyMwh,10);
 close(r.energyBreakdown.total.totalMwh,10);
 assert.equal(r.lines[1].factor.source,EU_F_GAS_SOURCE);
 assert.equal(r.lines[1].factor.version,EU_F_GAS_VERSION);
 assert.ok(r.warnings.includes("PURE_F_GAS_ONLY_MASS_RELEASE_NOT_CHARGE"));
});
test('refrigerant kg/litre mismatch, invented energy and renewable fields rejected',()=>{
 const b:any=base();b.sources.refrigerants="known";
 b.activities.push({id:"leak",kind:"refrigerant_hfc134a",quantity:1,unit:"kg",quality:"invoice",evidence:"maintenance record"});
 close(calculate(b).scope1T,1.43);
 b.activities[1].unit="L";assert.throws(()=>calculate(b));
 b.activities[1].unit="kg";b.activities[1].energyKwh=100;assert.throws(()=>calculate(b));
 delete b.activities[1].energyKwh;b.activities[1].renewableEnergyKwh=0;assert.throws(()=>calculate(b));
});

// Guard against double counting one gas invoice in both PCS and PCI units.
test('same gas invoice cannot be reported twice as PCS and PCI',()=>{
 const a=base();a.sources.gas="known";
 a.activities.push(
  {id:"gas1",kind:"gas_pcs",quantity:1000,unit:"kWh PCS",quality:"invoice",evidence:"Invoice 0101"},
  {id:"gas2",kind:"gas_pci",quantity:900,unit:"kWh PCI",quality:"invoice",evidence:"  invoice 0101  "}
 );
 assert.throws(()=>calculate(a),/DUPLICATE_EVIDENCE/);
});
test('pure refrigerant documented release PDF and CSV still generate',async()=>{
 const a=base();a.sources.refrigerants="known";
 a.activities.push({id:"leak",kind:"refrigerant_hfc134a",quantity:2,unit:"kg",quality:"invoice",evidence:"documented service leakage"});
 const report={...sample(),calculation:calculate(a)};
 const bytes=await pdf(report,true);
 assert.equal(bytes.subarray(0,4).toString(),"%PDF");
 const pages=(bytes.toString("latin1").match(/\/Type\s*\/Page\b/g)||[]).length;
 assert.equal(pages,3,"HFC specimen should preserve three-page PDF");
 assert.match(csv(report),/scope1_tco2e/);
});

test('Stripe recovery: recovery SQL cannot replace a linked, revoked or expired session',async()=>{
 const db=new PGlite();await db.exec(readFileSync('migrations/001_carbon.sql','utf8'));
 const id='00000000-0000-4000-8000-000000000021';
 await db.query("INSERT INTO carbon_reports(id,secret_hash,snapshot,snapshot_hash) VALUES($1,'secret','{}','hash')",[id]);
 const first=await db.query(ATTACH_SESSION_SQL,['cs_test_first',id,'hash']);assert.equal(first.rows.length,1);
 assert.equal((await db.query(ATTACH_SESSION_SQL,['cs_test_replace',id,'hash'])).rows.length,0);
 assert.equal((await db.query(ATTACH_SESSION_SQL,['cs_test_replace',id,'different'])).rows.length,0);
 await db.query("UPDATE carbon_reports SET session_id=NULL,status='revoked' WHERE id=$1",[id]);
 assert.equal((await db.query(ATTACH_SESSION_SQL,['cs_test_revoked',id,'hash'])).rows.length,0);
 await db.query("UPDATE carbon_reports SET status='draft',expires_at=now()-interval '1 day' WHERE id=$1",[id]);
 assert.equal((await db.query(ATTACH_SESSION_SQL,['cs_test_expired',id,'hash'])).rows.length,0);
 await db.close();
});

test('Stripe test payment: intent and captured charge must match paid session and EUR 89',()=>{
 const intent:any={id:'pi_test',livemode:false,currency:'eur',amount:PRICE,amount_received:PRICE,status:'succeeded',
  latest_charge:{payment_intent:'pi_test',livemode:false,currency:'eur',amount:PRICE,paid:true,captured:true,status:'succeeded',refunded:false,amount_refunded:0,disputed:false}};
 assert.equal(isCapturedTestPayment(paid,intent),true);
 for(const change of [{id:'pi_wrong'},{livemode:true},{currency:'usd'},{amount:1},{amount_received:0},{status:'processing'},{latest_charge:null}]){
  assert.equal(isCapturedTestPayment(paid,{...intent,...change}),false,JSON.stringify(change));
 }
 for(const change of [{payment_intent:'pi_wrong'},{livemode:true},{currency:'usd'},{amount:0},{paid:false},{captured:false},{status:'pending'},{refunded:true},{amount_refunded:1},{disputed:true}]){
  assert.equal(isCapturedTestPayment(paid,{...intent,latest_charge:{...intent.latest_charge,...change}}),false,JSON.stringify(change));
 }
});

test('partial B3 inventory never presents recorded MWh as the complete company energy total',()=>{
 const b=base();b.sources.gas="unknown";
 const r=calculate(b);
 assert.equal(r.energyMwh,10); // Known measurement, not full energy consumption.
 assert.equal(r.energyTotalComplete,false);
 assert.equal(r.energyBreakdown.electricity.totalComplete,true);
 assert.equal(r.energyBreakdown.fuels.totalComplete,false);
 assert.equal(r.energyBreakdown.total.totalComplete,false);
 assert.ok(r.warnings.includes("ENERGY_TOTAL_INCOMPLETE"));
 assert.equal(r.saleEligible,false);
 const fields=csv({id:"TEST-PARTIAL",issuedAt:"2026-11-13T12:00:00Z",calculation:r}).trim().split("\r\n");
 const head=fields[0].split(","),row=fields[1].split(",");
 assert.equal(row[head.indexOf("energy_mwh")],"");
 assert.equal(row[head.indexOf("electricity_mwh")],"10");
 assert.equal(row[head.indexOf("fuels_mwh")],"");
 assert.equal(row[head.indexOf("reported_energy_mwh")],"10");
 assert.equal(row[head.indexOf("energy_total_complete")],"false");
});
test('unknown purchased heat blocks full energy total, but must not be incorrectly classed as fuel',()=>{
 const b=base();b.sources.purchased_heat="unknown";
 const r=calculate(b);
 assert.equal(r.energyBreakdown.fuels.totalComplete,true);
 assert.equal(r.energyTotalComplete,false);
 assert.equal(r.coverage,"partial");
});
test('complete energy total can be known even when its renewable split is unknown',()=>{
 const r=calculate(base());
 assert.equal(r.energyTotalComplete,true);
 assert.equal(r.energyBreakdown.total.complete,false);
 const fields=csv({id:"TEST-COMPLETE",issuedAt:"2026-11-13T12:00:00Z",calculation:r}).trim().split("\r\n");
 const head=fields[0].split(","),row=fields[1].split(",");
 assert.equal(row[head.indexOf("energy_mwh")],"10");
 assert.equal(row[head.indexOf("energy_total_complete")],"true");
 assert.equal(row[head.indexOf("renewable_energy_mwh")],"");
});
