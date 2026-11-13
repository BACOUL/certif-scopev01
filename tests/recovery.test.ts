import {test} from "node:test";
import assert from "node:assert/strict";
import {randomBytes} from "node:crypto";
import {recoveryCode,parseRecoveryCode} from "../src/lib/carbon/recovery";

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
