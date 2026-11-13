import Stripe from "stripe";
export const PRODUCT="supplier-carbon-v1";
export const PRICE=8900;
export function stripe(){
 const key=process.env.CARBON_STRIPE_KEY;
 // Deliberately test-only on this review branch. No inherited production credentials.
 if(!key || !/^(sk|rk)_test_/.test(key))throw new Error("SALES_DISABLED");
 return new Stripe(key,{maxNetworkRetries:2,timeout:10000});
}
export function isPaidSession(s:Stripe.Checkout.Session, row:{id:string;snapshot_hash:string;session_id:string;snapshot?:{product?:string}}){
 return s.id===row.session_id && s.mode==="payment" && s.status==="complete" && s.payment_status==="paid" && s.livemode===false && s.currency==="eur" && s.amount_total===PRICE && s.metadata?.product===(row.snapshot?.product||PRODUCT) && s.metadata?.reportId===row.id && s.metadata?.snapshotHash===row.snapshot_hash && typeof s.payment_intent==="string";
}
