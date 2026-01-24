import { NextResponse } from "next/server";
import Stripe from "stripe";
import crypto from "crypto";
import { Resend } from "resend";

export const runtime = "nodejs";

/* ======================================================
   CLIENTS
====================================================== */

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);

/* ======================================================
   I18N EMAILS (FR / DE)
====================================================== */

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
<pre style="font-size:14px;line-height:1.6;">${keys.join("\n")}</pre>
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
<pre style="font-size:14px;line-height:1.6;">${keys.join("\n")}</pre>
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

/* ======================================================
   KEY GENERATION + SIGNATURE
====================================================== */

function sign(body: string, secret: string): string {
  return crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex")
    .slice(0, 8)
    .toUpperCase();
}

function generateKey(secret: string): string {
  const p = () => crypto.randomBytes(2).toString("hex").toUpperCase();
  const body = `CS-${p()}-${p()}-${p()}-${p()}`;
  return `${body}-${sign(body, secret)}`;
}

/* ======================================================
   CLOUDFLARE KV
====================================================== */

async function putKV(params: {
  accountId: string;
  namespaceId: string;
  apiToken: string;
  key: string;
  value: unknown;
}) {
  const { accountId, namespaceId, apiToken, key, value } = params;

  const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/values/${key}`;

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${apiToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }
}

/* ======================================================
   STRIPE WEBHOOK
====================================================== */

export async function POST(req: Request) {
  const rawBody = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return new NextResponse("Missing signature", { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("STRIPE_SIGNATURE_ERROR", err.message);
    return new NextResponse("Invalid signature", { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const metadata = session.metadata || {};

  const locale: Locale =
    metadata.attestationLocale === "de" ? "de" : "fr";
  const i18n = EMAIL_I18N[locale];

  const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID!;
  const NAMESPACE_ID = process.env.CF_KV_NAMESPACE_ID!;
  const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN!;
  const KEY_SECRET = process.env.KEY_SECRET!;

  /* ===================================================
     PACK DE CLÉS
  =================================================== */

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

    const keys: string[] = [];

    for (let i = 0; i < credits; i++) {
      const key = generateKey(KEY_SECRET);

      await putKV({
        accountId: ACCOUNT_ID,
        namespaceId: NAMESPACE_ID,
        apiToken: API_TOKEN,
        key,
        value: {
          used: false,
          createdAt: new Date().toISOString(),
          pack,
          stripeSessionId: session.id,
        },
      });

      keys.push(key);
    }

    await resend.emails.send({
      from: "Certif-Scope <no-reply@certif-scope.com>",
      replyTo: "contact@certif-scope.com",
      to: email,
      subject: i18n.packSubject(pack),
      html: i18n.packBody(credits, keys),
    });
  }

  /* ===================================================
     ATTESTATION UNIQUE
  =================================================== */

  if (metadata.product === "certif-scope-attestation") {
    const email =
      metadata.emailForDelivery ||
      session.customer_details?.email ||
      session.customer_email ||
      null;

    if (!email) {
      return NextResponse.json({ received: true });
    }

    const proto = req.headers.get("x-forwarded-proto");
    const host = req.headers.get("host");
    const origin = proto && host ? `${proto}://${host}` : null;

    if (!origin) {
      console.error("ORIGIN_RESOLUTION_FAILED");
      return NextResponse.json({ received: true });
    }

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
  }

  return NextResponse.json({ received: true });
}
