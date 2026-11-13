import {test} from "node:test";
import assert from "node:assert/strict";
import {spawnSync} from "node:child_process";
import {mkdtempSync,rmSync} from "node:fs";
import {tmpdir} from "node:os";
import {join,resolve} from "node:path";

test("release gate refuses launch when independent evidence is not present",()=>{
 const isolated=mkdtempSync(join(tmpdir(),"certif-scope-release-"));
 try{
  const r=spawnSync(process.execPath,[resolve("scripts/release-gate.mjs")],{
   cwd:isolated,encoding:"utf8",timeout:10000
  });
  assert.equal(r.status,1,r.stderr);
  assert.match(r.stderr,/RELEASE BLOCKED/);
  assert.match(r.stderr,/ademe_23_11_licensed_export_verified/);
  assert.match(r.stderr,/stripe_real_sandbox_e2e_and_webhook_verified/);
  assert.match(r.stderr,/owner_explicit_release_approval/);
 }finally{rmSync(isolated,{recursive:true,force:true});}
});
