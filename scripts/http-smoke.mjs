import {spawn} from "node:child_process";
import {setTimeout as delay} from "node:timers/promises";
import assert from "node:assert/strict";

const port="35871";
const root="http://127.0.0.1:"+port;
// No connected database, no live Stripe, no deployment and no customer data.
const server=spawn(process.execPath,["node_modules/next/dist/bin/next","start","-p",port,"-H","127.0.0.1"],{
 stdio:["ignore","pipe","pipe"],
 env:{...process.env,NEXT_TELEMETRY_DISABLED:"1",CARBON_TEST_CHECKOUT:"false",CARBON_STRIPE_KEY:"",CARBON_DATABASE_URL:"",CARBON_SIGNING_KEY:""},
});
let stderr="";
server.stdout.on("data",data=>{stderr+=data.toString().slice(-2000);});
server.stderr.on("data",data=>{stderr+=data.toString().slice(-2000);});
async function request(path){
 const res=await fetch(root+path,{signal:AbortSignal.timeout(15000),redirect:"follow"});
 return res;
}
try{
 let ready=false;
 for(let attempt=0;attempt<35;attempt++){
  if(server.exitCode!==null)break;
  try{const res=await request("/fr");if(res.status===200){ready=true;break;}}catch{}
  await delay(350);
 }
 assert.ok(ready,"Next.js server did not start. "+stderr.slice(-1500));
 let count=0;
 for(const locale of ["fr","en","de"]){
  for(const path of ["/"+locale,"/"+locale+"/generate","/"+locale+"/pricing","/"+locale+"/verify","/"+locale+"/methodology","/"+locale+"/privacy"]){
   const res=await request(path);
   assert.equal(res.status,200,path+": "+res.status);
   assert.match(res.headers.get("content-type")||"",/text\/html/,path);
   const html=await res.text();
   assert.ok(html.length>1000,path+": unexpectedly short HTML");
   if(path==="/"+locale)assert.ok(html.includes("2026/1560"),path+": EU basis absent");
   count++;
  }
  const pdf=await request("/api/sample?locale="+locale);
  assert.equal(pdf.status,200,"sample PDF "+locale+": "+pdf.status);
  assert.match(pdf.headers.get("content-type")||"",/application\/pdf/);
  const bytes=Buffer.from(await pdf.arrayBuffer());
  assert.equal(bytes.subarray(0,4).toString(),"%PDF");
  assert.ok(bytes.length>3000,"empty sample PDF "+locale);
  count++;
 }
 const noProduct=await request("/fr/this-route-does-not-exist-1234");
 assert.equal(noProduct.status,404,"missing routes must not silently redirect to a misleading page");
 count++;
 console.log("HTTP smoke checks passed:",count,"pages/PDFs; no checkout or production access");
}finally{
 server.kill("SIGTERM");
 await Promise.race([new Promise(resolve=>server.once("exit",resolve)),delay(2500)]);
 if(server.exitCode===null)server.kill("SIGKILL");
}
