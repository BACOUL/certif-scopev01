import {test} from "node:test";
import assert from "node:assert/strict";
import {randomBytes} from "node:crypto";
import {recoveryCode,parseRecoveryCode,parseStandaloneRecoveryCode} from "../src/lib/carbon/recovery";
import React from "react";
import {renderToStaticMarkup} from "react-dom/server";
import Download from "../src/components/Download";

const id="00000000-0000-4000-8000-000000000001";
const other="00000000-0000-4000-8000-000000000002";
const token=randomBytes(32).toString("base64url");

test("user-held recovery code makes a complete roundtrip without a URL",()=>{
 const code=recoveryCode(id,token);
 assert.match(code,/^CS1\.[0-9a-f-]{36}\.[A-Za-z0-9_-]{43}$/);
 assert.equal(parseRecoveryCode(id,code),token);
 assert.equal(parseRecoveryCode(id,"  "+code+"  "),token);
 assert.equal(code.includes("https://"),false);
});
test("recovery code refuses wrong order even with matching valid token",()=>{
 assert.equal(parseRecoveryCode(other,recoveryCode(id,token)),null);
 assert.equal(parseRecoveryCode(id,recoveryCode(other,token)),null);
});
test("reject malformed or truncated access capability",()=>{
 const valid=recoveryCode(id,token);
 for(const s of [
  token,id+"."+token,valid.slice(0,-1),valid+".extra",
  "CS2."+id+"."+token,"CS1."+other+"."+token,
  "https://certif-scope.com/fr/success?code="+valid,
  "CS1."+id+"."+"a".repeat(800),
  "CS1."+id+"."+"*".repeat(43),"", "\n"+valid+"\n"+valid
 ])assert.equal(parseRecoveryCode(id,s),null,s);
 assert.throws(()=>recoveryCode(id,"weak"),/INVALID_RECOVERY_CODE/);
 assert.throws(()=>recoveryCode("not-a-uuid",token),/INVALID_RECOVERY_CODE/);
});

test("full private code recovers report ID on another device without a success URL",()=>{
 const code=recoveryCode(id,token);
 assert.deepEqual(parseStandaloneRecoveryCode(code),{id,token});
 assert.deepEqual(parseStandaloneRecoveryCode("  "+code+"  "),{id,token});
 assert.equal(parseRecoveryCode(id,code),token);
 assert.equal(parseRecoveryCode(other,code),null);
});

test("standalone recovery rejects malformed, other-version and URL-embedded capabilities",()=>{
 const valid=recoveryCode(id,token);
 for(const code of [
  token,id+"."+token,valid.slice(0,-1),valid+".extra",
  "CS2."+id+"."+token,
  "CS1."+id+"."+"x".repeat(44),
  "https://example.com/success?code="+valid,
  "CS1."+id.toUpperCase()+"."+token,
  "CS1."+id+"."+token+"\\n"+valid,""
 ])assert.equal(parseStandaloneRecoveryCode(code),null,String(code));
});

test("download form renders without a report ID so code-only recovery remains possible",()=>{
 for(const locale of ["fr","en","de"] as const){
  const html=renderToStaticMarkup(React.createElement(Download,{locale,id:""}));
  assert.match(html,/type="password"/);
  assert.match(html,/CS1/);
  assert.equal(html.includes(token),false);
  assert.equal(html.includes("success?code="),false);
 }
});
