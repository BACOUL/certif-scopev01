import { NextResponse } from "next/server";
import Stripe from "stripe";
import crypto from "crypto";
import { Resend } from "resend";

export const runtime = "nodejs";

// ======================================================
// CLIENTS
// ======================================================
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);

// ======================================================
// I18N EMAILS (STRICT MINIMAL V1)
// ======================================================
type Locale = "en" | "fr";

const EMAIL_I18N: Record<
  Locale,
  {
    packSubject: (pack: string) => string;
    packBody: (credits: number, keys: string[]) => string;
    attestationSubject: string;
    attestationBody: string;
  }
> = {
  en: {
    packSubject: (pack) => `Your Certif-Scope access keys (${pack})`,
    packBody: (credits, keys) => `
<p>Hello,</p>
<p>Thank you for your purchase.</p>
<p>Here are your <strong>${credits} access keys</strong>:</p>
<pre style="font-size:14px; line-height:1.6;">${keys.join("\n")}</pre>
<p>Each key allows the generation of <strong>one CO₂e attestation</strong>.</p>
<p style="font-size:12px;color:#666;">
Keys are not stored by Certif-Scope.<br/>
Please keep them safe — lost keys cannot be recovered.
</p>
<p>— Certif-Scope</p>
`,
    attestationSubject: "Your CO₂e Attestation (PDF) – Certif-Scope",
    attestationBody: `
<p>Your CO₂e attestation is attached to this email.</p>
<p><strong>Important:</strong></p>
<ul>
  <li>This document is issued once</li>
  <li>Certif-Scope does not store a copy</li>
  <li>Please archive it securely</li>
</ul>
<p>— Certif-Scope</p>
`,
  },
  fr: {
    packSubject: (pack) => `Vos clés d’accès Certif-Scope (${pack})`,
    packBody: (credits, keys) => `
<p>Bonjour,</p>
<p>Merci pour votre achat.</p>
<p>Voici vos <strong>${credits} clés d’accès</strong> :</p>
<pre style="font-size:14px; line-height:1.6;">${keys.join("\n")}</pre>
<p>Chaque clé permet de générer <strong>une attestation CO₂e</strong>.</p>
<p style="font-size:12px;color:#666;">
Les clés ne sont pas stockées par Certif-Scope.<br/>
Veuillez les conserver soigneusement — aucune récupération possible.
</p>
<p>— Certif-Scope</p>
`,
    attestationSubject: "Votre attestation CO₂e (PDF) – Certif-Scope",
    attestationBody: `
<p>Votre attestation CO₂e est jointe à cet email.</p>
<p><strong>Important :</strong></p>
<ul>
  <li>Ce document est émis une seule fois</li>
  <li>Certif-Scope n’en conserve aucune copie</li>
  <li>Veuillez l’archiver de manière sécurisée</li>
</ul>
<p>— Certif-Scope</p>
`,
  },
};

// ======================================================
// UTIL — ACCESS KEY GENERATOR
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
    console.error("WEBHOOK_SIGNATURE_ERROR", err.message);
    return new NextResponse("Invalid signature", { status: 400 });
  }

  // =====================================================
  // CHECKOUT COMPLETED
  // =====================================================
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata = session.metadata || {};

    const locale: Locale =
      metadata.attestationLocale === "fr" ? "fr" : "en";
    const i18n = EMAIL_I18N[locale];

    // ===================================================
    // PACK DE CRÉDITS
    // ===================================================
    if (metadata.product === "certif-scope-pack") {
      const credits = Number(metadata.credits || 0);
      const pack = metadata.pack || "standard";
      const email =
        session.customer_details?.email ||
        session.customer_email ||
        null;

      if (!credits || !email) {
        console.error("PACK_EMAIL_SKIPPED_MISSING_DATA", {
          sessionId: session.id,
        });
        return NextResponse.json({ received: true });
      }

      const keys = Array.from({ length: credits }, generateAccessKey);

      try {
        await resend.emails.send({
          from: "Certif-Scope <no-reply@certif-scope.com>",
          replyTo: "contact@certif-scope.com",
          to: email,
          subject: i18n.packSubject(pack),
          html: i18n.packBody(credits, keys),
        });

        console.log("PACK_EMAIL_SENT", { sessionId: session.id });
      } catch (err) {
        console.error("PACK_EMAIL_FAILED", err);
      }
    }

    // ===================================================
    // ATTESTATION UNIQUE — EMAIL APRÈS PAIEMENT
    // ===================================================
    if (metadata.product === "certif-scope-attestation") {
      const email =
        metadata.emailForDelivery ||
        session.customer_details?.email ||
        session.customer_email ||
        null;

      if (!email) {
        console.error("ATTESTATION_EMAIL_MISSING", {
          sessionId: session.id,
        });
        return NextResponse.json({ received: true });
      }

      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      if (!baseUrl) {
        console.error("BASE_URL_MISSING");
        return NextResponse.json({ received: true });
      }

      try {
        const issueUrl = `${baseUrl}/api/attestation/issue?session_id=${session.id}`;
        const pdfRes = await fetch(issueUrl);

        if (!pdfRes.ok) {
          console.error("PDF_GENERATION_FAILED", {
            sessionId: session.id,
          });
          return NextResponse.json({ received: true });
        }

        const pdfBuffer = Buffer.from(await pdfRes.arrayBuffer());

        await resend.emails.send({
          from: "Certif-Scope <no-reply@certif-scope.com>",
          replyTo: "contact@certif-scope.com",
          to: email,
          subject: i18n.attestationSubject,
          html: i18n.attestationBody,
          attachments: [
            {
              filename: `certif-scope-attestation-${session.id}.pdf`,
              content: pdfBuffer,
              contentType: "application/pdf",
            },
          ],
        });

        console.log("ATTESTATION_EMAIL_SENT", { sessionId: session.id });
      } catch (err) {
        console.error("ATTESTATION_EMAIL_FAILED", err);
      }
    }
  }

  // ⚠️ Always acknowledge Stripe
  return NextResponse.json({ received: true });
      }
