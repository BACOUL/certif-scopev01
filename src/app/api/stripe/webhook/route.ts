import { NextResponse } from "next/server";
import Stripe from "stripe";
import crypto from "crypto";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

/**
 * Génère une clé lisible et robuste
 * Format: CS-XXXX-XXXX-XXXX
 */
function generateAccessKey() {
  const raw = crypto.randomBytes(9).toString("hex").toUpperCase();
  return `CS-${raw.slice(0,4)}-${raw.slice(4,8)}-${raw.slice(8,12)}`;
}

export async function POST(req: Request) {
  let body: string;

  try {
    body = await req.text();
  } catch {
    return new NextResponse("Invalid body", { status: 400 });
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return new NextResponse("Missing signature", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("❌ Webhook signature error:", err.message);
    return new NextResponse("Invalid signature", { status: 400 });
  }

  // =====================================================
  // STRIPE CHECKOUT COMPLETED
  // =====================================================
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    console.log("✅ Payment confirmed:", session.id);

    const metadata = session.metadata || {};

    // ===================================================
    // CAS 1 — PACK
    // ===================================================
    if (metadata.product === "certif-scope-pack") {
      const credits = Number(metadata.credits || 0);
      const pack = metadata.pack;
      const email = session.customer_details?.email;

      if (!credits || !email) {
        console.error("❌ Pack delivery failed: missing credits or email");
        return NextResponse.json({ received: true });
      }

      // 🔑 Génération des clés
      const keys = Array.from({ length: credits }, () =>
        generateAccessKey()
      );

      console.log("🔑 Generated keys:", keys);

      // ✉️ Envoi email (stateless)
      // 👉 À brancher sur ton provider (Resend / Postmark / SMTP)
      // Pour l’instant: log only (conforme privacy-by-design)

      console.log("📧 Send email to:", email);
      console.log(`
Subject: Your Certif-Scope access keys (${pack})

Hello,

Thank you for your purchase.

Here are your ${credits} access keys:

${keys.join("\n")}

Each key allows the generation of one CO₂e attestation.
Keys are not stored by Certif-Scope. Please keep them safe.

— Certif-Scope
`);

      // ❗ AUCUN STOCKAGE
      // ❗ AUCUNE RÉCUPÉRATION POSSIBLE
    }
  }

  // ⚠️ Toujours répondre 200 à Stripe
  return NextResponse.json({ received: true });
}
