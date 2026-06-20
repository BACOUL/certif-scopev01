import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

let stripeClient: Stripe | null = null;

function getStripeClient() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) return null;

  stripeClient ??= new Stripe(stripeSecretKey);
  return stripeClient;
}

/**
 * SOURCE DE VÉRITÉ — TYPE DE SESSION STRIPE
 * Utilisé par /success pour décider :
 * - pack (envoi de clés par email)
 * - attestation (PDF téléchargeable)
 */
export async function POST(req: Request) {
  try {
    const { session_id } = await req.json();

    if (!session_id || typeof session_id !== "string") {
      return NextResponse.json(
        { error: "MISSING_SESSION_ID" },
        { status: 400 }
      );
    }

    const stripe = getStripeClient();

    if (!stripe) {
      return NextResponse.json(
        { error: "MISSING_STRIPE_SECRET_KEY" },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(session_id);

    const metadata = session.metadata || {};
    const product = metadata.product || null;

    if (
      product !== "certif-scope-pack" &&
      product !== "certif-scope-attestation"
    ) {
      return NextResponse.json(
        { error: "UNKNOWN_SESSION_TYPE" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      ok: true,
      product,
    });
  } catch (err: any) {
    console.error("SESSION_TYPE_ERROR", err.message);
    return NextResponse.json(
      { error: "SESSION_LOOKUP_FAILED" },
      { status: 500 }
    );
  }
}
