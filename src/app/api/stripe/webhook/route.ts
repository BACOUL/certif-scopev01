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
// I18N EMAILS (FR / DE — V1 STRICT)
// ======================================================
type Locale = "fr" | "de";

const EMAIL_I18N: Record<
  Locale,
  {
    packSubject: (pack: string) => string;
    packBody: (credits: number, keys: string[]) => string;
    attestationSubject: string;
    attestationBody: string;
  }
> = {
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
<p><strong>Informations importantes :</strong></p>
<ul>
  <li>Ce document est émis une seule fois</li>
  <li>Certif-Scope n’en conserve aucune copie</li>
  <li>Veuillez l’archiver de manière sécurisée</li>
</ul>
<p>— Certif-Scope</p>
`,
  },

  de: {
    packSubject: (pack) => `Ihre Certif-Scope-Zugangsschlüssel (${pack})`,
    packBody: (credits, keys) => `
<p>Guten Tag,</p>
<p>Vielen Dank für Ihren Kauf.</p>
<p>Hier sind Ihre <strong>${credits} Zugangsschlüssel</strong>:</p>
<pre style="font-size:14px; line-height:1.6;">${keys.join("\n")}</pre>
<p>Jeder Schlüssel ermöglicht die Erstellung <strong>einer CO₂e-Bescheinigung</strong>.</p>
<p style="font-size:12px;color:#666;">
Die Schlüssel werden nicht von Certif-Scope gespeichert.<br/>
Bitte bewahren Sie sie sicher auf — eine Wiederherstellung ist nicht möglich.
</p>
<p>— Certif-Scope</p>
`,
    attestationSubject: "Ihre CO₂e-Bescheinigung (PDF) – Certif-Scope",
    attestationBody: `
<p>Ihre CO₂e-Bescheinigung ist dieser E-Mail beigefügt.</p>
<p><strong>Wichtige Hinweise:</strong></p>
<ul>
  <li>Dieses Dokument wird nur einmal ausgestellt</li>
  <li>Certif-Scope speichert keine Kopie</li>
  <li>Bitte archivieren Sie es sicher</li>
</ul>
<p>— Certif-Scope</p>
`,
  },
};

// ======================================================
// UTIL — ACCESS KEY GENERATOR (PACKS)
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
      metadata.attestationLocale === "de" ? "de" : "fr";
    const i18n = EMAIL_I18N[locale];

    // ===================================================
    // PACK DE CLÉS — EMAIL SEUL
    // ===================================================
    if (metadata.product === "certif-scope-pack") {
      const credits = Number(metadata.credits || 0);
      const pack = metadata.pack || "standard";
      const email =
        session.customer_details?.email ||
        session.customer_email ||
        null;

      if (!credits || !email) {
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
      } catch (err) {
        console.error("PACK_EMAIL_FAILED", err);
      }
    }

    // ===================================================
    // ATTESTATION UNIQUE — PDF + EMAIL
    // ===================================================
    if (metadata.product === "certif-scope-attestation") {
      const email =
        metadata.emailForDelivery ||
        session.customer_details?.email ||
        session.customer_email ||
        null;

      if (!email) {
        return NextResponse.json({ received: true });
      }

      /**
       * 🔑 CORRECTION CRITIQUE
       * → on n’utilise PLUS NEXT_PUBLIC_BASE_URL
       * → on dérive l’origin réel (Preview / Prod / Local)
       */
      const origin =
        req.headers.get("origin") ||
        req.headers.get("x-forwarded-proto") && req.headers.get("host")
          ? `${req.headers.get("x-forwarded-proto")}://${req.headers.get("host")}`
          : null;

      if (!origin) {
        console.error("ORIGIN_NOT_RESOLVED");
        return NextResponse.json({ received: true });
      }

      try {
        const issueUrl = `${origin}/api/attestation/issue?session_id=${session.id}`;
        const pdfRes = await fetch(issueUrl);

        if (!pdfRes.ok) {
          console.error("PDF_ISSUE_FAILED", await pdfRes.text());
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
      } catch (err) {
        console.error("ATTESTATION_EMAIL_FAILED", err);
      }
    }
  }

  // ⚠️ Toujours répondre 200 à Stripe
  return NextResponse.json({ received: true });
}
