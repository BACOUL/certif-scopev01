import { NextResponse } from "next/server";
import Stripe from "stripe";
import crypto from "crypto";
import { Resend } from "resend";

export const runtime = "nodejs";

// ======================================================
// STRIPE CLIENT
// ======================================================
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);

// ======================================================
// UTIL — ACCESS KEY GENERATOR
// Format: CS-XXXX-XXXX-XXXX
// ======================================================
function generateAccessKey(): string {
  const raw = crypto.randomBytes(9).toString("hex").toUpperCase();
  return `CS-${raw.slice(0, 4)}-${raw.slice(4, 8)}-${raw.slice(8, 12)}`;
}

// ======================================================
// STRIPE WEBHOOK
// ======================================================
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
  // CHECKOUT COMPLETED
  // =====================================================
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata = session.metadata || {};

    console.log("✅ Payment confirmed:", session.id);

    // ===================================================
    // PACK DE CRÉDITS
    // ===================================================
    if (metadata.product === "certif-scope-pack") {
      const credits = Number(metadata.credits || 0);
      const pack = metadata.pack || "unknown";
      const email =
        session.customer_details?.email || session.customer_email;

      if (!credits || !email) {
        console.error("❌ Pack delivery failed: missing credits or email");
        return NextResponse.json({ received: true });
      }

      // 🔑 Generate keys (stateless)
      const keys = Array.from({ length: credits }, generateAccessKey);

      console.log("🔑 Generated keys:", keys);

      // ✉️ Send email (fail-safe)
      try {
        await resend.emails.send({
          from: "Certif-Scope <no-reply@certif-scope.com>",
          replyTo: "contact@certif-scope.com",
          to: email,
          subject: `Your Certif-Scope access keys (${pack})`,
          html: `
<p>Hello,</p>

<p>Thank you for your purchase.</p>

<p>Here are your <strong>${credits} access keys</strong>:</p>

<pre style="font-size:14px; line-height:1.6;">
${keys.join("\n")}
</pre>

<p>
Each key allows the generation of
<strong>one CO₂e attestation</strong>.
</p>

<p style="font-size:12px;color:#666;">
Keys are not stored by Certif-Scope.<br/>
Please keep them safe — lost keys cannot be recovered.
</p>

<p>— Certif-Scope</p>
          `,
        });
      } catch (err) {
        console.error("❌ Email send failed:", err);
        // ❗ Never block Stripe webhook
      }
    }

    // ===================================================
    // ATTESTATION UNIQUE (PDF envoyé après paiement)
    // ===================================================
    if (metadata.product === "certif-scope-attestation") {
      const email =
        session.customer_details?.email ||
        session.customer_email ||
        metadata.emailForDelivery ||
        null;

      if (!email) {
        console.error("❌ Attestation email missing");
        return NextResponse.json({ received: true });
      }

      try {
        // 🔁 Appel interne à l’API d’émission PDF (stateless)
        const issueUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/attestation/issue?session_id=${session.id}`;
        const pdfRes = await fetch(issueUrl);

        if (!pdfRes.ok) {
          console.error("❌ PDF generation failed");
          return NextResponse.json({ received: true });
        }

        const pdfBuffer = Buffer.from(await pdfRes.arrayBuffer());

        await resend.emails.send({
          from: "Certif-Scope <no-reply@certif-scope.com>",
          replyTo: "contact@certif-scope.com",
          to: email,
          subject: "Your CO₂e Attestation (PDF) – Certif-Scope",
          text: `
Your CO₂e attestation is attached to this email.

Important:
- This document is issued once
- Certif-Scope does not store a copy
- Please archive it securely

Certif-Scope
`,
          attachments: [
            {
              filename: `certif-scope-attestation-${session.id}.pdf`,
              content: pdfBuffer, // ✅ BUFFER DIRECT — CORRECT
            },
          ],
        });
      } catch (err) {
        console.error("❌ Attestation email failed:", err);
      }
    }
  }

  // ⚠️ Always return 200 to Stripe
  return NextResponse.json({ received: true });
}
