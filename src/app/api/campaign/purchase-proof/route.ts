import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

let stripeClient: Stripe | null = null;
function getStripeClient() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  stripeClient ??= new Stripe(key);
  return stripeClient;
}

export async function GET(req: Request) {
  const stripe = getStripeClient();
  if (!stripe) return NextResponse.json({ ok:false,error:"MISSING_STRIPE_SECRET_KEY" },{status:500});

  const url = new URL(req.url);
  const sessionId = String(url.searchParams.get("session_id") || "").trim();
  const campaignRef = String(url.searchParams.get("cs_ref") || "").trim();
  if (!sessionId.startsWith("cs_") || !campaignRef) {
    return NextResponse.json({ ok:false,error:"INVALID_PURCHASE_PROOF_REQUEST" },{status:400});
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const paid = session.payment_status === "paid";
    const matches = String(session.metadata?.campaignRef || "") === campaignRef;
    const product = String(session.metadata?.product || "");
    if (!paid || !matches || product !== "certif-scope-attestation") {
      return NextResponse.json({ ok:false,verified:false },{status:404});
    }

    return NextResponse.json({
      ok:true,
      verified:true,
      session_id:session.id,
      payment_status:session.payment_status,
      amount_total:Number(session.amount_total || 0),
      currency:String(session.currency || "eur").toUpperCase(),
      customer_email:session.customer_details?.email || session.customer_email || session.metadata?.emailForDelivery || null,
      campaign_ref:campaignRef,
    },{headers:{"cache-control":"no-store"}});
  } catch (error) {
    console.error("CAMPAIGN_PURCHASE_PROOF_ERROR",error);
    return NextResponse.json({ok:false,error:"PURCHASE_PROOF_FAILED"},{status:500});
  }
}
