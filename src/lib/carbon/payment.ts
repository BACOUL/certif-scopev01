import Stripe from "stripe";
export const PRODUCT="supplier-carbon-v1";
export const SPEND_PRODUCT="spend-indicative-v2";
export const PRICE=8900;
/** Whitelist of billable products. Stripe metadata must not be trusted without fulfill() checks. */
export function isSupportedProduct(value: unknown): value is typeof PRODUCT | typeof SPEND_PRODUCT {
 return value===PRODUCT || value===SPEND_PRODUCT;
}
export function stripe(){
 const key=process.env.CARBON_STRIPE_KEY;
 // Deliberately test-only on this review branch. No inherited production credentials.
 if(!key || !/^(sk|rk)_test_/.test(key))throw new Error("SALES_DISABLED");
 return new Stripe(key,{maxNetworkRetries:2,timeout:10000});
}
export function isPaidSession(s:Stripe.Checkout.Session, row:{id:string;snapshot_hash:string;session_id:string;snapshot?:{product?:string}}){
 return s.id===row.session_id && s.mode==="payment" && s.status==="complete" && s.payment_status==="paid" && s.livemode===false && s.currency==="eur" && s.amount_total===PRICE && s.metadata?.product===(row.snapshot?.product||PRODUCT) && s.metadata?.reportId===row.id && s.client_reference_id===row.id && s.metadata?.snapshotHash===row.snapshot_hash && typeof s.payment_intent==="string";
}

/**
 * A paid Checkout session alone is not proof of captured funds.
 * Independently inspect the Stripe PaymentIntent and expanded Charge.
 * All amounts use euro cents. Review branch is test mode only.
 */
export function isCapturedTestPayment(s:Stripe.Checkout.Session,pi:Stripe.PaymentIntent){
 const charge=pi.latest_charge;
 return pi.id===s.payment_intent && pi.livemode===false && pi.currency==="eur" &&
  pi.amount===PRICE && pi.amount_received===PRICE && pi.status==="succeeded" &&
  !!charge && typeof charge!=="string" && charge.livemode===false &&
  charge.payment_intent===pi.id && charge.paid===true && charge.captured===true &&
  charge.status==="succeeded" && charge.currency==="eur" &&
  charge.amount===PRICE && charge.refunded!==true && charge.amount_refunded===0 &&
  charge.disputed!==true;
}
