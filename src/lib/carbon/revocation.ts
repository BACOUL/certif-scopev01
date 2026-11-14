import {db as defaultDb} from "./store";

export type PaymentRevocationReason="refund"|"dispute";

/**
 * The Stripe signature and livemode are checked by the webhook before calling
 * this function. Store the PaymentIntent veto BEFORE acknowledging its event.
 * A separate SQL condition in PAID_SQL prevents a late checkout completion
 * from granting an entitlement for a known refunded/disputed PaymentIntent.
 *
 * An event that reaches us before the report is attached still creates a veto.
 * Do not rely only on UPDATE carbon_reports WHERE payment_intent=...: early
 * checkout records have payment_intent=NULL until successful fulfillment.
 */
export async function recordPaymentRevocation(
 paymentIntent:string,eventId:string,reason:PaymentRevocationReason,db=defaultDb
){
 if(!/^pi_[a-zA-Z0-9_]{2,128}$/.test(paymentIntent) ||
    !/^evt_[a-zA-Z0-9_]{2,128}$/.test(eventId) ||
    (reason!=="refund" && reason!=="dispute"))throw new Error("INVALID_PAYMENT_EVENT");
 const c=await db().connect();
 let committed=false;
 try{
  await c.query("BEGIN");
  await c.query(
   "INSERT INTO carbon_payment_blocks(payment_intent,reason) VALUES($1,$2) ON CONFLICT(payment_intent) DO NOTHING",
   [paymentIntent,reason]);
  const revoked=await c.query(
   "UPDATE carbon_reports SET status='revoked' WHERE payment_intent=$1 AND status<>'revoked' RETURNING id",
   [paymentIntent]);
  await c.query("INSERT INTO carbon_events(id) VALUES($1) ON CONFLICT(id) DO NOTHING",[eventId]);
  await c.query("COMMIT");
  committed=true;
  return {revokedReports:revoked.rows.length};
 }catch(e){
  if(!committed)try{await c.query("ROLLBACK");}catch{}
  throw e;
 }finally{c.release();}
}
