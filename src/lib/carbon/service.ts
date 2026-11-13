import { randomUUID, createHmac } from "node:crypto";
import {calculateSpend} from "../spend/calculate";
import {SPEND_COPY} from "../spend/copy";
import { calculate } from "./calculate";
import { digest, secret, signReport, verifyReport, trustedVerificationKeys } from "./crypto";
import { db as defaultDb, PAID_SQL, CREDIT_SQL, ATTACH_SESSION_SQL } from "./store";
import { stripe as defaultStripe, isPaidSession, isCapturedTestPayment, PRODUCT, PRICE } from "./payment";
import { COPY } from "./copy";
export function createCarbonService(db=defaultDb,stripe=defaultStripe){
async function createCheckout(input:unknown, origin:string,product="supplier-carbon-v1"){
 if(process.env.CARBON_TEST_CHECKOUT!=="true")throw new Error("SALES_DISABLED");
 if(origin!==process.env.CARBON_BASE_URL)throw new Error("ORIGIN");
 if(!process.env.CARBON_SIGNING_KEY)throw new Error("SIGNING_UNAVAILABLE");
 // The historic spend-based report is a legacy credit-only service.
 // Never create a new Stripe sale for a retired product.
 if(product!==PRODUCT)throw new Error("INELIGIBLE");
 const snapshot=product===PRODUCT?calculate(input):calculateSpend(input);if(!snapshot.saleEligible)throw new Error("INELIGIBLE");
 const id=randomUUID(),token=secret(),hash=digest(snapshot);
 const sql=db();
 await sql.query("INSERT INTO carbon_reports(id,secret_hash,snapshot,snapshot_hash) VALUES($1,$2,$3,$4)",[id,digest(token),JSON.stringify(snapshot),hash]);
 const session=await stripe().checkout.sessions.create({mode:"payment",locale:snapshot.assessment.locale,customer_creation:"always",invoice_creation:{enabled:true},
 line_items:[{price_data:{currency:"eur",unit_amount:PRICE,product_data:{name:(product===PRODUCT?COPY:SPEND_COPY)[snapshot.assessment.locale].title}},quantity:1}],
 metadata:{product,reportId:id,snapshotHash:hash},client_reference_id:id,
 integration_identifier:"certif_scope_review_qmtvsnbx",
 success_url:`${origin}/${snapshot.assessment.locale}/success?report=${id}`,cancel_url:`${origin}/${snapshot.assessment.locale}/${product===PRODUCT?"generate":"spend"}`,
 },{idempotencyKey:`carbon-${id}`});
 if(!session.id || !session.url)throw new Error("CHECKOUT_UNAVAILABLE");
 await sql.query("UPDATE carbon_reports SET session_id=$2 WHERE id=$1 AND status='draft'",[id,session.id]);
 return {url:session.url,id,token};
}
async function fulfill(sessionId:string){
 const s=await stripe().checkout.sessions.retrieve(sessionId);
 let r=await db().query("SELECT * FROM carbon_reports WHERE session_id=$1 AND expires_at>now()",[s.id]);let row=r.rows[0];
 // A Stripe test Checkout can be created successfully while the subsequent
 // database UPDATE fails. Re-associate only a *paid, authentic, server-retrieved*
 // session with the exact previously created report and immutable snapshot hash.
 // Never create a report from untrusted webhook metadata.
 if(!row &&
    s.livemode===false && s.mode==="payment" && s.status==="complete" &&
    s.payment_status==="paid" && s.currency==="eur" && s.amount_total===PRICE &&
    typeof s.payment_intent==="string" &&
    typeof s.metadata?.reportId==="string" && typeof s.metadata?.snapshotHash==="string" &&
    s.client_reference_id===s.metadata.reportId &&
    s.metadata.reportId.length===36 && /^[a-f0-9]{64}$/.test(s.metadata.snapshotHash)){
  const pending=await db().query("SELECT id,session_id,status,snapshot,snapshot_hash FROM carbon_reports WHERE id=$1 AND expires_at>now()",[s.metadata.reportId]);
  const orphan=pending.rows[0];
  if(orphan && orphan.status==="draft" && !orphan.session_id &&
     orphan.snapshot_hash===s.metadata.snapshotHash &&
     (orphan.snapshot.product||PRODUCT)===s.metadata.product){
   await db().query(ATTACH_SESSION_SQL,[s.id,orphan.id,orphan.snapshot_hash]);
  }
  // Concurrent webhook and success-page callbacks may race. The conditional
  // SQL above is single-winner; always re-read the authoritative row.
  r=await db().query("SELECT * FROM carbon_reports WHERE session_id=$1 AND expires_at>now()",[s.id]);
  row=r.rows[0];
 }
 if(!row || !isPaidSession(s,row))throw new Error("PAYMENT_PENDING");
 const pi=await stripe().paymentIntents.retrieve(String(s.payment_intent),{expand:["latest_charge"]});
 const charge=pi.latest_charge;
 // A payment in processing state or a charge not yet expanded is pending;
 // transient Stripe API propagation must not revoke a genuine order.
 if(pi.status!=="succeeded" || !charge || typeof charge==="string")throw new Error("PAYMENT_PENDING");
 if(charge.refunded || charge.amount_refunded>0 || charge.disputed){
  await db().query("UPDATE carbon_reports SET status='revoked' WHERE id=$1",[row.id]);throw new Error("REVOKED");
 }
 if(!isCapturedTestPayment(s,pi))throw new Error("PAYMENT_PENDING");
 await db().query(PAID_SQL,[row.id,s.payment_intent,new Date(),s.id,row.snapshot_hash]);
}
async function issue(id:string,token:string){
 if(!/^[0-9a-f-]{36}$/.test(id)||!token||token.length>128)throw new Error("UNAUTHORIZED");
 let r=await db().query("SELECT * FROM carbon_reports WHERE id=$1 AND secret_hash=$2 AND expires_at>now()",[id,digest(token)]);
 if(!r.rows[0])throw new Error("UNAUTHORIZED");
 if(r.rows[0].status==="revoked")throw new Error("REVOKED");
 if(r.rows[0].session_id)await fulfill(r.rows[0].session_id);
 r=await db().query("SELECT * FROM carbon_reports WHERE id=$1 AND status='paid'",[id]);
 const row=r.rows[0];if(!row)throw new Error("PAYMENT_PENDING");
 // Check every delivery, including cached signed files. An immutable hash must
 // match the record and the cached envelope must authenticate under an
 // operator-trusted current or archived key, never a user-supplied public key.
 if(digest(row.snapshot)!==row.snapshot_hash)throw new Error("SNAPSHOT_CORRUPT");
 if(row.document){
  const envelope=row.document;
  const report=envelope?.report;
  const keys=trustedVerificationKeys(process.env.CARBON_SIGNING_KEY,process.env.CARBON_VERIFY_PUBLIC_KEYS_JSON);
  if(report?.id!==row.id || digest(report?.calculation)!==row.snapshot_hash ||
     !keys.some(publicKey=>verifyReport(envelope,publicKey))){
   throw new Error("DOCUMENT_CORRUPT");
  }
  return envelope;
 }
 // The factor version is immutable: issue exactly the reviewed, server-calculated snapshot.
 const report={id:row.id,issuedAt:new Date(row.paid_at).toISOString(),calculation:row.snapshot};
 const envelope=signReport(report);
 const updated=await db().query("UPDATE carbon_reports SET document=COALESCE(document,$2::jsonb) WHERE id=$1 RETURNING document",[id,JSON.stringify(envelope)]);
 return updated.rows[0].document;
}
// New credits only. Legacy Cloudflare keys must be migrated with reconciled balances.
async function redeem(id:string,token:string,key:string){
 if(!/^[a-zA-Z0-9_-]{24,128}$/.test(key))throw new Error("UNAUTHORIZED");
 const c=await db().connect();try{await c.query("BEGIN");
 const r=await c.query("SELECT * FROM carbon_reports WHERE id=$1 AND secret_hash=$2 AND expires_at>now() FOR UPDATE",[id,digest(token)]);
 const row=r.rows[0];if(!row || row.session_id || row.status==="revoked" || !row.snapshot.saleEligible)throw new Error("UNAUTHORIZED");
 const old=await c.query("SELECT key_hash FROM carbon_redemptions WHERE report_id=$1",[id]);
 if(old.rowCount){if(old.rows[0].key_hash!==digest(key))throw new Error("UNAUTHORIZED");await c.query("COMMIT");return;}
 const credit=await c.query(CREDIT_SQL,[digest(key),row.snapshot.product||PRODUCT]);if(!credit.rowCount)throw new Error("UNAUTHORIZED");
 await c.query("INSERT INTO carbon_redemptions(report_id,key_hash) VALUES($1,$2)",[id,digest(key)]);
 await c.query("UPDATE carbon_reports SET status='paid',paid_at=COALESCE(paid_at,now()),expires_at=GREATEST(expires_at,now()+interval '30 days') WHERE id=$1 AND status='draft'",[id]);
 await c.query("COMMIT");
 }catch(e){await c.query("ROLLBACK");throw e;}finally{c.release();}
}

async function creditOrder(input:unknown,product:string,key:string,requestId:string){
 if(process.env.CARBON_TEST_CHECKOUT!=="true")throw new Error("SALES_DISABLED");
 const signingKey=process.env.CARBON_SIGNING_KEY;if(!signingKey)throw new Error("SIGNING_UNAVAILABLE");
 if(!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(requestId)||!/^[a-zA-Z0-9_-]{24,128}$/.test(key))throw new Error("UNAUTHORIZED");
 if(![PRODUCT,"spend-indicative-v2"].includes(product))throw new Error("INELIGIBLE");
 const snapshot=product===PRODUCT?calculate(input):calculateSpend(input);if(!snapshot.saleEligible)throw new Error("INELIGIBLE");
 const token=createHmac("sha256",signingKey).update(JSON.stringify([requestId,key,product])).digest("base64url"),hash=digest(snapshot);
 await db().query("INSERT INTO carbon_reports(id,secret_hash,snapshot,snapshot_hash) VALUES($1,$2,$3,$4) ON CONFLICT(id) DO NOTHING",[requestId,digest(token),JSON.stringify(snapshot),hash]);
 const r=await db().query("SELECT snapshot_hash,secret_hash FROM carbon_reports WHERE id=$1",[requestId]);
 if(r.rows[0]?.snapshot_hash!==hash||r.rows[0]?.secret_hash!==digest(token))throw new Error("UNAUTHORIZED");
 await redeem(requestId,token,key);return {id:requestId,token};
}
return {createCheckout,fulfill,issue,redeem,creditOrder};
}
export const {createCheckout,fulfill,issue,redeem,creditOrder}=createCarbonService();
