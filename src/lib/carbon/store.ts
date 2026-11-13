import { Pool } from "pg";
let pool: Pool;
export function db(){
 if(!process.env.CARBON_DATABASE_URL)throw new Error("DATABASE_UNAVAILABLE");
 return pool??=new Pool({connectionString:process.env.CARBON_DATABASE_URL,max:4,connectionTimeoutMillis:5000,statement_timeout:10000});
}
export const PAID_SQL=`UPDATE carbon_reports SET status='paid',payment_intent=$2,paid_at=COALESCE(paid_at,$3),expires_at=GREATEST(expires_at,$3::timestamptz + interval '30 days') WHERE id=$1 AND session_id=$4 AND snapshot_hash=$5 AND status='draft' RETURNING id`;
export const CREDIT_SQL=`UPDATE carbon_credits SET remaining=remaining-1 WHERE key_hash=$1 AND product=$2 AND remaining>0 AND expires_at>now() RETURNING key_hash`;
export async function rateLimit(key:string,max=30){
 const r=await db().query(`INSERT INTO carbon_limits(key,hits,expires_at) VALUES($1,1,now()+interval '1 hour') ON CONFLICT(key) DO UPDATE SET hits=CASE WHEN carbon_limits.expires_at<now() THEN 1 ELSE carbon_limits.hits+1 END, expires_at=CASE WHEN carbon_limits.expires_at<now() THEN now()+interval '1 hour' ELSE carbon_limits.expires_at END RETURNING hits`,[key]);
 if(r.rows[0].hits>max)throw new Error("RATE_LIMIT");
}
