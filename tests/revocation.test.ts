import {test} from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {PGlite} from "@electric-sql/pglite";
import {PAID_SQL} from "../src/lib/carbon/store";
import {recordPaymentRevocation} from "../src/lib/carbon/revocation";

const schema=readFileSync("migrations/001_carbon.sql","utf8");
function adapterFor(pg:PGlite){
 const query=(sql:string,args?:unknown[])=>pg.query(sql,args as unknown[]);
 return {connect:async()=>({query,release(){}}),query};
}

test("early Stripe refund blocks a later paid Checkout; replay cannot re-grant report",async()=>{
 const pg=new PGlite();
 try{
  await pg.exec(schema);
  const id="00000000-0000-4000-8000-000000000041";
  await pg.query("INSERT INTO carbon_reports(id,secret_hash,snapshot,snapshot_hash,session_id) VALUES($1,'secret','{}','hash','cs_early')",[id]);
  const db=adapterFor(pg);
  assert.deepEqual(await recordPaymentRevocation("pi_early_01","evt_early_01","refund",()=>db),{revokedReports:0});
  assert.equal((await pg.query("SELECT reason FROM carbon_payment_blocks WHERE payment_intent='pi_early_01'")).rows[0].reason,"refund");
  assert.equal((await pg.query(PAID_SQL,[id,"pi_early_01",new Date(),"cs_early","hash"])).rows.length,0);
  assert.equal((await pg.query("SELECT status FROM carbon_reports WHERE id=$1",[id])).rows[0].status,"draft");
  assert.deepEqual(await recordPaymentRevocation("pi_early_01","evt_early_01","refund",()=>db),{revokedReports:0});
  assert.equal((await pg.query("SELECT count(*)::int AS n FROM carbon_payment_blocks")).rows[0].n,1);
  assert.equal((await pg.query("SELECT count(*)::int AS n FROM carbon_events")).rows[0].n,1);
 }finally{await pg.close();}
});

test("refund or dispute arriving after fulfillment revokes access and stays revoked",async()=>{
 const pg=new PGlite();
 try{
  await pg.exec(schema);
  const db=adapterFor(pg);
  const id="00000000-0000-4000-8000-000000000042";
  await pg.query("INSERT INTO carbon_reports(id,secret_hash,snapshot,snapshot_hash,session_id) VALUES($1,'secret','{}','hash','cs_late')",[id]);
  assert.equal((await pg.query(PAID_SQL,[id,"pi_late_01",new Date(),"cs_late","hash"])).rows.length,1);
  assert.deepEqual(await recordPaymentRevocation("pi_late_01","evt_late_01","dispute",()=>db),{revokedReports:1});
  assert.equal((await pg.query("SELECT status FROM carbon_reports WHERE id=$1",[id])).rows[0].status,"revoked");
  assert.deepEqual(await recordPaymentRevocation("pi_late_01","evt_late_01","dispute",()=>db),{revokedReports:0});
  assert.equal((await pg.query(PAID_SQL,[id,"pi_late_01",new Date(),"cs_late","hash"])).rows.length,0);
 }finally{await pg.close();}
});

test("failed refund transaction rolls back payment veto and event, allowing signed webhook retry",async()=>{
 const pg=new PGlite();
 try{
  await pg.exec(schema);
  const db=adapterFor(pg);
  const faulty:any={connect:async()=>({query:async(sql:string,args?:unknown[])=>{
   if(sql.startsWith("UPDATE carbon_reports"))throw Error("database failure");
   return db.query(sql,args);
  },release(){}})};
  await assert.rejects(()=>recordPaymentRevocation("pi_fail_01","evt_fail_01","refund",()=>faulty),/database failure/);
  assert.equal((await pg.query("SELECT count(*)::int AS n FROM carbon_payment_blocks")).rows[0].n,0);
  assert.equal((await pg.query("SELECT count(*)::int AS n FROM carbon_events")).rows[0].n,0);
  await recordPaymentRevocation("pi_fail_01","evt_fail_01","refund",()=>db);
  assert.equal((await pg.query("SELECT count(*)::int AS n FROM carbon_payment_blocks")).rows[0].n,1);
 }finally{await pg.close();}
});

test("reject malformed payment event references before any database access",async()=>{
 const never=()=>{throw Error("unexpected DB call")};
 for(const pi of ["", "ch_only", "pi_!", "pi_", "pi_"+"a".repeat(200)]){
  await assert.rejects(()=>recordPaymentRevocation(pi,"evt_valid_01","refund",never),/INVALID_PAYMENT_EVENT/);
 }
 await assert.rejects(()=>recordPaymentRevocation("pi_valid_01","invalid","refund",never),/INVALID_PAYMENT_EVENT/);
});
