import { NextResponse } from "next/server";
import Stripe from "stripe";
import crypto from "crypto";
import { sendEmail } from "@/lib/mailer";

export const runtime = "nodejs";

// ======================================================
// STRIPE CLIENT
// ======================================================
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

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

    const email =
      session.customer_details?.email ||
      session.customer_email ||
      null;

    // ===================================================
    // CASE 1 — PACK DE CRÉDITS
    // ===================================================
    if (metadata.product === "certif-scope-pack") {
      const credits = Number(metadata.credits || 0);
      const pack = metadata.pack || "unknown";

      if (!credits || !email) {
        console.error("❌ Pack delivery failed: missing credits or email");
        return NextResponse.json({ received: true });
      }

      const keys = Array.from({ length: credits }, generateAccessKey);

      try {
        await sendEmail({
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
        console.error("❌ Pack email send failed:", err);
      }
    }

    // ===================================================
    // CASE 2 — ATTESTATION UNIQUE (PDF)
    // ===================================================
    if (metadata.product === "certif-scope-attestation") {
      if (!email) {
        console.error("❌ Attestation delivery failed: missing email");
        return NextResponse.json({ received: true });
      }

      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        if (!baseUrl) {
          throw new Error("Missing NEXT_PUBLIC_BASE_URL");
        }

        const issueUrl = `${baseUrl}/api/attestation/issue?session_id=${session.id}`;

        const pdfResponse = await fetch(issueUrl);
        if (!pdfResponse.ok) {
          throw new Error("PDF generation failed");
        }

        const pdfBuffer = Buffer.from(await pdfResponse.arrayBuffer());

        await sendEmail({
          to: email,
          subject: "Your CO₂e Attestation (PDF) – Certif-Scope",
          text: `
Your CO₂e attestation is attached to this email.

Important:
- This document is issued once
- Certif-Scope does not store a copy
- Please archive it securely

— Certif-Scope
          `,
          attachments: [
            {
              filename: `certif-scope-attestation-${session.id}.pdf`,
              content: pdfBuffer.toString("base64"),
            },
          ],
        });
      } catch (err) {
        console.error("❌ Attestation email flow failed:", err);
      }
    }
  }

  // ⚠️ Always acknowledge Stripe
  return NextResponse.json({ received: true });
        }
