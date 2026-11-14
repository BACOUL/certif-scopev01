import {stripe,isSupportedProduct} from "@/lib/carbon/payment";
import {fulfill} from "@/lib/carbon/service";
import {db} from "@/lib/carbon/store";
import {recordPaymentRevocation} from "@/lib/carbon/revocation";
import {json} from "@/lib/carbon/http";
import type Stripe from "stripe";
export async function POST(req:Request){
 if(!process.env.CARBON_WEBHOOK_SECRET)return json({error:"UNAVAILABLE"},503);
 const raw=await req.text();if(raw.length>1000000)return json({error:"TOO_LARGE"},413);
 let event:Stripe.Event;try{event=stripe().webhooks.constructEvent(raw,req.headers.get("stripe-signature")||"",process.env.CARBON_WEBHOOK_SECRET);}catch{return json({error:"INVALID_SIGNATURE"},400);}
 if(event.livemode)return json({error:"LIVE_MODE_DISABLED"},400);
 try{
 if(["checkout.session.completed","checkout.session.async_payment_succeeded"].includes(event.type)){
 const s=event.data.object as Stripe.Checkout.Session;
 // Only supported products are processed; fulfill() rechecks the paid session,
 // price, product, report ID and immutable snapshot before granting access.
 if(isSupportedProduct(s.metadata?.product) && s.payment_status==="paid")await fulfill(s.id);
 }else if(event.type==="charge.refunded" || event.type==="charge.dispute.created"){
 const obj=event.data.object as {payment_intent?:string | null};
 if(typeof obj.payment_intent==="string"){
  // Commit the durable veto and report revocation together. The veto also
  // covers a refund/dispute that arrives before the checkout is fulfilled.
  await recordPaymentRevocation(obj.payment_intent,event.id,event.type==="charge.refunded"?"refund":"dispute");
  return json({received:true});
 }
 }
 // No external side effect before entitlement; duplicate delivery is safe (conditional UPDATE).
 await db().query("INSERT INTO carbon_events(id) VALUES($1) ON CONFLICT DO NOTHING",[event.id]);
 return json({received:true});
 }catch{return json({error:"RETRY_REQUIRED"},503);}
}
