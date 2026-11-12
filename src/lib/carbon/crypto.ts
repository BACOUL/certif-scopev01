import {createHash, createPrivateKey, createPublicKey, sign, verify, randomBytes} from "node:crypto";
export function canonical(value: unknown): string {
 if(Array.isArray(value))return `[${value.map(canonical).join(",")}]`;
 if(value && typeof value==="object")return `{${Object.keys(value).sort().map(k=>`${JSON.stringify(k)}:${canonical((value as Record<string,unknown>)[k])}`).join(",")}}`;
 return JSON.stringify(value);
}
export const digest=(value:unknown)=>createHash("sha256").update(canonical(value)).digest("hex");
export const secret=()=>randomBytes(32).toString("base64url");
export function signReport(report:unknown, pem=process.env.CARBON_SIGNING_KEY){
 if(!pem)throw new Error("SIGNING_UNAVAILABLE");
 const key=createPrivateKey(pem);
 if(key.asymmetricKeyType!=="ed25519")throw new Error("WRONG_KEY_TYPE");
 return {report,hash:digest(report),algorithm:"Ed25519",signature:sign(null,Buffer.from(canonical(report)),key).toString("base64"),keyId:digest(createPublicKey(key).export({type:"spki",format:"pem"}).toString()).slice(0,16)};
}
export function verifyReport(envelope:{report:unknown;signature:string;hash:string}, publicPem:string){
 try{return envelope.hash===digest(envelope.report) && verify(null,Buffer.from(canonical(envelope.report)),createPublicKey(publicPem),Buffer.from(envelope.signature,"base64"));}catch{return false;}
}
