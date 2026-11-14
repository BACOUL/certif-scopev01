import {body,json,failure} from "@/lib/carbon/http";
import {verifyReport,trustedVerificationKeys} from "@/lib/carbon/crypto";
export const runtime="nodejs";
/** The request cannot choose its own verification key. All keys are operator-trusted. */
export async function POST(req:Request){
 try {
  const envelope=await body(req,262144);
  const keys=trustedVerificationKeys(process.env.CARBON_SIGNING_KEY,process.env.CARBON_VERIFY_PUBLIC_KEYS_JSON);
  const matchingKey=keys.find(key=>verifyReport(envelope,key));
  return json({valid:Boolean(matchingKey),publicKey:matchingKey||null});
 } catch(e) {return failure(e);}
}
