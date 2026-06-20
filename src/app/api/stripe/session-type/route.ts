import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

let stripeClient: Stripe | null = null;

function getStripeClient() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) return null;

  stripeClient ??= new Stripe(stripeSecretKey);
  return stripeClient;
}

/**
 * Détermine le type de succès
 * - pack
 * - attestation
 *
 * Règles :
 * - session_id commençant par "key_" => attestation (redeem key)
 * - sinon => session Stripe (pack ou attestation)
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "MISSING_SESSION_ID" },
        { status: 400 }
      );
    }

    // ✅ CAS CLÉ (PAS STRIPE)
    if (sessionId.startsWith("key_")) {
      return NextResponse.json({ type: "attestation" });
    }

    // ✅ CAS STRIPE
    const stripe = getStripeClient();

    if (!stripe) {
      return NextResponse.json(
        { error: "MISSING_STRIPE_SECRET_KEY" },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const product = session.metadata?.product;

    if (product === "certif-scope-pack") {
      return NextResponse.json({ type: "pack" });
    }

    // Par défaut : attestation Stripe
    return NextResponse.json({ type: "attestation" });

  } catch (err) {
    console.error("SESSION_TYPE_ERROR", err);
    return NextResponse.json(
      { error: "SESSION_LOOKUP_FAILED" },
      { status: 500 }
    );
  }
}
