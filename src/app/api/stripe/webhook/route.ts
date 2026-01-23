import { NextResponse } from "next/server";
import Stripe from "stripe";
import crypto from "crypto";
import { sendEmail } from "@/lib/mailer";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

/**
 * Génère une clé lisible et robuste
 * Format: CS-XXXX-XXXX-XXXX
 */
function generateAccessKey() {
  const raw = crypto.randomBytes(9).toString("hex").toUpperCase();
  return `CS-${raw.slice(0, 4)}-${raw.slice(4, 8)}-${raw.slice(8, 12)}`;
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
    // CAS — PACK DE CRÉDITS
    // ===================================================
    if (metadata.product === "certif-scope-pack") {
      const credits = Number(metadata.credits || 0);
      const pack = metadata.pack;
      const email =
        session.customer_details?.email || session.customer_email;

      if (!credits || !email) {
        console.error("❌ Pack delivery failed: missing credits or email");
        return NextResponse.json({ received: true });
      }

      // 🔑 Génération des clés (stateless)
      const keys = Array.from({ length: credits }, () =>
        generateAccessKey()
      );

      console.log("🔑 Generated keys:", keys);

      // ✉️ Envoi email via Resend
      try {
        await sendEmail({
          to: email,
          subject: `Your Certif-Scope access keys (${pack})`,
          html: `
            <p>Hello,</p>

            <p>Thank you for your purchase.</p>

            <p>
              Here are your <strong>${credits} access keys</strong>:
            </p>

            <pre style="font-size:14px; line-height:1.6;">
${keys.join("\n")}
            </pre>

            <p>
              Each key allows the generation of <strong>one CO₂e attestation</strong>.
            </p>

            <p style="font-size:12px;color:#666;">
              Keys are not stored by Certif-Scope.<br/>
              Please keep them safe — lost keys cannot be recovered.
            </p>

            <p>
              — Certif-Scope
            </p>
          `,
        });
      } catch (err) {
        // Fail-safe : on ne bloque JAMAIS Stripe
        console.error("❌ Email send failed:", err);
      }

      // ❗ AUCUN STOCKAGE
      // ❗ AUCUNE RÉCUPÉRATION POSSIBLE
    }
  }

  // ⚠️ Toujours répondre 200 à Stripe
  return NextResponse.json({ received: true });
    }
