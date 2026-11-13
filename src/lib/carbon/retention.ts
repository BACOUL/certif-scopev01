import {db as defaultDb} from "./store";

/**
 * Removes only report data past its configured retention period.
 * Execute inside a transaction: report redemptions reference reports by FK.
 * This function does not remove Stripe invoices, tax records or backed-up data;
 * those are separate operational/legal retention responsibilities.
 */
export async function purgeExpiredRecords(db=defaultDb){
 const connection=await db().connect();
 let finished=false;
 try {
  await connection.query("BEGIN");
  const redemptions=await connection.query("DELETE FROM carbon_redemptions WHERE report_id IN (SELECT id FROM carbon_reports WHERE expires_at<=now())");
  const reports=await connection.query("DELETE FROM carbon_reports WHERE expires_at<=now()");
  const events=await connection.query("DELETE FROM carbon_events WHERE created_at<now()-interval '30 days'");
  const limits=await connection.query("DELETE FROM carbon_limits WHERE expires_at<=now()");
  await connection.query("COMMIT");finished=true;
  const count=(r:{rowCount?:number|null;affectedRows?:number|null;rows?:unknown[]})=>r.rowCount??r.affectedRows??r.rows?.length??0;
  return {reports:count(reports),redemptions:count(redemptions),events:count(events),limits:count(limits)};
 }catch(e){
  if(!finished)try{await connection.query("ROLLBACK");}catch{}
  throw e;
 }finally{connection.release();}
}
