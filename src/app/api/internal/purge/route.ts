import {timingSafeEqual} from "node:crypto";
import {purgeExpiredRecords} from "@/lib/carbon/retention";
import {json} from "@/lib/carbon/http";

/**
 * Vercel Cron runs only on production deployment. Disabled until explicitly
 * deployed with a configured CRON_SECRET. No manual public purge.
 */
export async function GET(req:Request){
 const secret=process.env.CRON_SECRET;
 if(!secret || Buffer.byteLength(secret,"utf8")<32)return json({error:"UNAVAILABLE"},503);
 const expected=Buffer.from(`Bearer ${secret}`,"utf8");
 const actual=Buffer.from(req.headers.get("authorization")||"","utf8");
 if(actual.length!==expected.length || !timingSafeEqual(actual,expected))return json({error:"UNAUTHORIZED"},401);
 try{
  const removed=await purgeExpiredRecords();
  return json({ok:true,removed});
 }catch{
  return json({error:"RETRY_REQUIRED"},503);
 }
}
