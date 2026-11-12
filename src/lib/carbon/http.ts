import { NextResponse } from "next/server";
import { ZodError } from "zod";
export function json(data:unknown,status=200){return NextResponse.json(data,{status,headers:{"Cache-Control":"no-store"}});}
export async function body(req:Request,limit=32768){
 if(req.headers.get("origin")!==new URL(req.url).origin)throw new Error("ORIGIN");
 if(!req.headers.get("content-type")?.startsWith("application/json"))throw new Error("CONTENT_TYPE");
 const reader=req.body?.getReader();if(!reader)throw new Error("BODY");let size=0;const chunks=[];
 while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>limit){await reader.cancel();throw new Error("BODY_TOO_LARGE");}chunks.push(value);}
 return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}
export function failure(e:unknown){
 if(e instanceof ZodError)return json({error:"INVALID_INPUT",fields:e.issues.map(i=>({path:i.path.join("."),message:i.message}))},400);
 const code=e instanceof Error?e.message:"ERROR";
 const publicCodes=["ORIGIN","CONTENT_TYPE","BODY","BODY_TOO_LARGE","SOURCE_CONFLICT","INELIGIBLE","UNAUTHORIZED","PAYMENT_PENDING","REVOKED","RATE_LIMIT","SALES_DISABLED"];
 return json({error:publicCodes.includes(code)?code:"SERVICE_UNAVAILABLE"},code==="RATE_LIMIT"?429:code==="UNAUTHORIZED"||code==="ORIGIN"?403:code==="PAYMENT_PENDING"?409:code==="SALES_DISABLED"||!publicCodes.includes(code)?503:400);
}
