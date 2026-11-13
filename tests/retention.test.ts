import {test} from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {PGlite} from "@electric-sql/pglite";
import {purgeExpiredRecords} from "../src/lib/carbon/retention";
import {GET as purgeRoute} from "../src/app/api/internal/purge/route";

test("cron purge is disabled without configured 32+ character secret and refuses wrong Bearer",async()=>{
 const before=process.env.CRON_SECRET;delete process.env.CRON_SECRET;
 try{
  const url="https://test.invalid/api/internal/purge";
  assert.equal((await purgeRoute(new Request(url))).status,503);
  process.env.CRON_SECRET="short";
  assert.equal((await purgeRoute(new Request(url,{headers:{authorization:"Bearer short"}}))).status,503);
  process.env.CRON_SECRET="x".repeat(40);
  assert.equal((await purgeRoute(new Request(url))).status,401);
  assert.equal((await purgeRoute(new Request(url,{headers:{authorization:"Bearer "+"y".repeat(40)}}))).status,401);
 }finally{if(before===undefined)delete process.env.CRON_SECRET;else process.env.CRON_SECRET=before;}
});

test("purge removes expired reports, linked redemptions and stale limits only",async()=>{
 const pg=new PGlite();await pg.exec(readFileSync("migrations/001_carbon.sql","utf8"));
 const expired="00000000-0000-4000-8000-000000000031";
 const active="00000000-0000-4000-8000-000000000032";
 const later="00000000-0000-4000-8000-000000000033";
 try{
  for(const id of [expired,active,later]){
   await pg.query("INSERT INTO carbon_reports(id,secret_hash,snapshot,snapshot_hash) VALUES($1,'secret','{}','hash')",[id]);
  }
  await pg.query("UPDATE carbon_reports SET expires_at=now()-interval '1 second' WHERE id=$1",[expired]);
  await pg.query("UPDATE carbon_reports SET expires_at=now()+interval '20 days' WHERE id=$1",[active]);
  await pg.query("UPDATE carbon_reports SET expires_at=now()+interval '1 day' WHERE id=$1",[later]);
  await pg.query("INSERT INTO carbon_redemptions(report_id,key_hash) VALUES($1,'old')",[expired]);
  await pg.query("INSERT INTO carbon_redemptions(report_id,key_hash) VALUES($1,'valid')",[active]);
  await pg.query("INSERT INTO carbon_events(id,created_at) VALUES('stale',now()-interval '31 days'),('new',now())");
  await pg.query("INSERT INTO carbon_limits(key,hits,expires_at) VALUES('old',2,now()-interval '1 hour'),('new',1,now()+interval '1 hour')");
  const adapter:any={connect:async()=>({query:(sql:string,args?:any[])=>pg.query(sql,args),release(){}})};
  const before=await pg.query("SELECT count(*)::int AS count FROM carbon_reports");
  assert.equal(before.rows[0].count,3);
  const result=await purgeExpiredRecords(()=>adapter);
  assert.equal(result.reports,1);assert.equal(result.redemptions,1);assert.equal(result.events,1);assert.equal(result.limits,1);
  assert.deepEqual((await pg.query("SELECT id FROM carbon_reports ORDER BY id")).rows.map(r=>r.id),[active,later]);
  assert.deepEqual((await pg.query("SELECT key_hash FROM carbon_redemptions")).rows.map(r=>r.key_hash),["valid"]);
  assert.deepEqual((await pg.query("SELECT id FROM carbon_events")).rows.map(r=>r.id),["new"]);
  assert.deepEqual((await pg.query("SELECT key FROM carbon_limits")).rows.map(r=>r.key),["new"]);
  const repeat=await purgeExpiredRecords(()=>adapter);
  assert.equal(repeat.reports,0);
 }finally{await pg.close();}
});
