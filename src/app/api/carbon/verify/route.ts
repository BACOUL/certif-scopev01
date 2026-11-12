import {createPrivateKey,createPublicKey} from "node:crypto";
import {body,json,failure} from "@/lib/carbon/http";
import {verifyReport} from "@/lib/carbon/crypto";
export async function POST(req:Request){try{const b=await body(req,262144);const key=process.env.CARBON_SIGNING_KEY;if(!key)throw new Error("SIGNING_UNAVAILABLE");const publicKey=createPublicKey(createPrivateKey(key)).export({type:"spki",format:"pem"}).toString();return json({valid:verifyReport(b,publicKey),publicKey});}catch(e){return failure(e);}}
