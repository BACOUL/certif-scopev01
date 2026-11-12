import puppeteer from 'puppeteer-core';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const browser=await puppeteer.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox','--disable-dev-shm-usage','--no-process-singleton','--no-zygote','--single-process']});
const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
const base='http://127.0.0.1:3000';const reports=[];
try{
for(const locale of ['fr','en','de']){
 await page.setViewport({width:1440,height:1000});
 for(const route of ['', '/methodology','/pricing','/legal','/terms','/privacy','/verify']){
 const r=await page.goto(`${base}/${locale}${route}`,{waitUntil:'networkidle0'});assert.equal(r.status(),200);assert.ok(await page.$('h1'));assert.ok((await page.content()).includes('noindex'));reports.push(`${locale}${route}: HTTP 200`);
 }
 await page.goto(`${base}/${locale}`,{waitUntil:'networkidle0'});await page.screenshot({path:`docs/refonte/evidence/home-${locale}.png`,fullPage:true});
}
await page.setViewport({width:390,height:844});await page.goto(base+'/fr',{waitUntil:'networkidle0'});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:'docs/refonte/evidence/home-mobile.png',fullPage:true});
await page.goto(base+'/fr/generate',{waitUntil:'networkidle0'});
const inputs=await page.$$('input');await inputs[0].type('Bureau Test');await inputs[1].type('TEST-123');await inputs[4].type('Bureau unique France continentale');await inputs[5].type('Alice — responsable');
async function button(text){const buttons=await page.$$('button');for(const b of buttons)if((await b.evaluate(e=>e.textContent)).includes(text)){await b.click();return;}throw Error('button missing '+text);}
await button('Continuer');await page.waitForSelector('select');let selects=await page.$$('select');await selects[0].select('known');for(const sel of selects.slice(1))await sel.select('not_applicable');await button('Continuer');
await page.waitForSelector('input[type=number]');await page.type('input[type=number]','10000');await page.type('fieldset input:not([type=number])','Factures annuelles 2025');await page.click('input[type=checkbox]');await button('Calculer');await page.waitForSelector('table');
assert.ok((await page.evaluate(()=>document.body.textContent)).includes('0,394'));await page.screenshot({path:'docs/refonte/evidence/preview-mobile.png',fullPage:true});
await button('Continuer');assert.ok(await page.$('button[disabled]'));assert.ok((await page.evaluate(()=>document.body.textContent)).includes('aucun paiement réel'));
for(const path of ['/api/redeem-key','/api/checkout-pack','/api/attestation/eu']){const r=await fetch(base+path);assert.equal(r.status,410);reports.push(path+': HTTP 410');}
const sample=await fetch(base+'/api/sample?locale=fr');assert.equal(sample.status,200);assert.equal(sample.headers.get('content-type'),'application/pdf');fs.writeFileSync('docs/refonte/evidence/http-specimen-fr.pdf',Buffer.from(await sample.arrayBuffer()));
const unknown=await fetch(base+'/fr/not-a-real-route');assert.equal(unknown.status,404);
for(const locale of ['es','it','pt','nl','pl','cs','sk','hu','ro','bg','hr','sl','et','lv','lt','mt','el','fi','sv','da','ga']){const r=await fetch(base+'/'+locale);assert.equal(r.status,200);const html=await r.text();assert.ok(!html.includes('spend-based'));reports.push(locale+': localized availability notice (not full translation)');}
assert.deepEqual(errors,[]);reports.push('Mobile overflow: none; form -> server preview -> gated payment: PASS; sample PDF over HTTP: PASS; unknown route: 404; JS errors: 0');fs.writeFileSync('docs/refonte/evidence/browser-tests.txt',reports.join('\n')+'\n');
console.log(reports.join('\n'));
}finally{await browser.close();}
