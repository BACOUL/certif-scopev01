import {body,failure} from "@/lib/carbon/http";
import {issue} from "@/lib/carbon/service";
import {pdf,csv} from "@/lib/carbon/document";
import {rateLimit} from "@/lib/carbon/store";
import {digest} from "@/lib/carbon/crypto";
export const runtime="nodejs";
export async function POST(req:Request){try{const b=await body(req);await rateLimit(digest(["issue",String(b.id)]),60);const envelope=await issue(String(b.id),String(b.token));
 const format=b.format;let bytes:BodyInit,mime:string;
 if(format==="pdf"){bytes=new Uint8Array(await pdf(envelope.report));mime="application/pdf";}
 else if(format==="csv"){bytes=csv(envelope.report);mime="text/csv; charset=utf-8";}
 else if(format==="json"){bytes=JSON.stringify(envelope,null,2);mime="application/json";}
 else throw new Error("BODY");
 return new Response(bytes,{headers:{"Content-Type":mime,"Cache-Control":"no-store","Content-Disposition":`attachment; filename="carbon-${b.id}.${format}"`}});
 }catch(e){return failure(e);}}
