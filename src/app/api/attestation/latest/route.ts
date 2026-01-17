import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET() {
  try {
    // 1️⃣ Récupérer la dernière session Stripe complétée
    const sessions = await stripe.checkout.sessions.list({
      limit: 1,
      status: "complete",
    });

    if (!sessions.data.length) {
      return NextResponse.json(
        { status: "pending" },
        { status: 200 }
      );
    }

    const session = sessions.data[0];
    const metadata = session.metadata || {};

    const attestationId = metadata.attestationId;

    if (!attestationId) {
      return NextResponse.json(
        { status: "pending" },
        { status: 200 }
      );
    }

    // 2️⃣ Réponse standardisée
    return NextResponse.json({
      status: "ready",
      attestationId,
      verifyUrl: `/verify/${attestationId}`,
    });
  } catch (error: any) {
    console.error("Attestation lookup error:", error.message);
    return NextResponse.json(
      { status: "error" },
      { status: 500 }
    );
  }
}
