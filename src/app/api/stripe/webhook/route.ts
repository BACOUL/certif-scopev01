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
   CONFIG — ENV OBLIGATOIRES
====================================================== */

const {
  STRIPE_WEBHOOK_SECRET,
  CLOUDFLARE_ACCOUNT_ID,
  CF_KV_NAMESPACE_ID,
  CLOUDFLARE_API_TOKEN,
  KEY_SECRET,
} = process.env;

if (
  !STRIPE_WEBHOOK_SECRET ||
  !CLOUDFLARE_ACCOUNT_ID ||
  !CF_KV_NAMESPACE_ID ||
  !CLOUDFLARE_API_TOKEN ||
  !KEY_SECRET
) {
  throw new Error("Missing ENV variables");
}

const KEY_VALIDITY_DAYS = 365;

/* ======================================================
   I18N EMAILS
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
Chaque clé est valide <strong>12 mois</strong>.<br/>
Certif-Scope ne conserve aucune copie des clés.<br/>
Aucune récupération n’est possible.
</p>
<p>— Certif-Scope</p>
`,
    attestationSubject: "Votre attestation CO₂e (PDF) — Certif-Scope",
    attestationBody: `
<p>Votre attestation CO₂e est jointe à cet email.</p>
<p><strong>Informations importantes :</strong></p>
<ul>
  <li>Document émis une seule fois</li>
  <li>Aucune conservation côté Certif-Scope</li>
  <li>Archivage à votre charge</li>
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
<p>Jeder Schlüssel ermöglicht <strong>eine CO₂e-Bescheinigung</strong>.</p>
<p style="font-size:12px;color:#666;">
Gültigkeit <strong>12 Monate</strong>.<br/>
Keine Speicherung durch Certif-Scope.<br/>
Keine Wiederherstellung möglich.
</p>
<p>— Certif-Scope</p>
`,
    attestationSubject: "Ihre CO₂e-Bescheinigung (PDF) — Certif-Scope",
    attestationBody: `
<p>Ihre CO₂e-Bescheinigung ist beigefügt.</p>
<ul>
  <li>Einmalige Ausstellung</li>
  <li>Keine Speicherung</li>
  <li>Bitte sicher archivieren</li>
</ul>
<p>— Certif-Scope</p>
`,
  },
};

/* ======================================================
   HELPERS — KEYS
====================================================== */

function sign(body: string): string {
  return crypto
    .createHmac("sha256", KEY_SECRET!)
    .update(body)
    .digest("hex")
    .slice(0, 8)
    .toUpperCase();
}

function generateAccessKey(): string {
  const raw = crypto.randomBytes(8).toString("hex").toUpperCase();
  const formatted =
    `CS-${raw.slice(0, 4)}` +
    `-${raw.slice(4, 8)}` +
    `-${raw.slice(8, 12)}` +
    `-${raw.slice(12, 16)}`;
  return `${formatted}-${sign(formatted)}`;
}

function computeExpiryDate(): string {
  const d = new Date();
  d.setDate(d.getDate() + KEY_VALIDITY_DAYS);
  return d.toISOString();
}

/* ======================================================
   CLOUDFLARE KV
====================================================== */

const KV_BASE = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/storage/kv/namespaces/${CF_KV_NAMESPACE_ID}/values`;

async function kvPut(key: string, value: unknown) {
  const res = await fetch(`${KV_BASE}/${key}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });
  if (!res.ok) throw new Error(await res.text());
}

async function kvGet(key: string) {
  const res = await fetch(`${KV_BASE}/${key}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
    },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

/* ======================================================
   STRIPE WEBHOOK (IDEMPOTENT)
====================================================== */

export async function POST(req: Request) {
  const rawBody = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) return new NextResponse("Missing signature", { status: 400 });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      STRIPE_WEBHOOK_SECRET
    );
  } catch {
    return new NextResponse("Invalid signature", { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const metadata = session.metadata || {};

  /* ---------- IDEMPOTENCE ---------- */

  const processedKey = `processed:${session.id}`;
  if (await kvGet(processedKey)) {
    return NextResponse.json({ received: true });
  }

  const locale: Locale = metadata.attestationLocale === "de" ? "de" : "fr";
  const i18n = EMAIL_I18N[locale];

  /* ---------- PACK DE CLÉS ---------- */

  if (metadata.product === "certif-scope-pack") {
    const credits = Number(metadata.credits || 0);
    const pack = metadata.pack || "standard";
    const email =
      session.customer_details?.email || session.customer_email || null;

    if (credits && email) {
      const keys: string[] = [];

      for (let i = 0; i < credits; i++) {
        const key = generateAccessKey();
        await kvPut(key, {
          credits: 1,
          usedCredits: 0,
          createdAt: new Date().toISOString(),
          expiresAt: computeExpiryDate(),
          used: false,
          source: "stripe",
          pack,
          stripeSessionId: session.id,
          version: "v1",
        });
        keys.push(key);
      }

      await resend.emails.send({
        from: "Certif-Scope <no-reply@certif-scope.com>",
        replyTo: "contact@certif-scope.com",
        to: email,
        subject: i18n.packSubject(pack),
        html: i18n.packBody(keys.length, keys),
      });
    }
  }

  /* ---------- ATTESTATION ---------- */

  if (metadata.product === "certif-scope-attestation") {
    const email =
      metadata.emailForDelivery ||
      session.customer_details?.email ||
      session.customer_email ||
      null;

    if (email) {
      const proto = req.headers.get("x-forwarded-proto");
      const host = req.headers.get("host");
      const origin = proto && host ? `${proto}://${host}` : null;

      if (origin) {
        const issueUrl = `${origin}/api/attestation/issue?session_id=${session.id}`;
        const pdfRes = await fetch(issueUrl);

        if (pdfRes.ok) {
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
      }
    }
  }

  /* ---------- MARQUAGE TRAITÉ ---------- */

  await kvPut(processedKey, {
    processedAt: new Date().toISOString(),
    product: metadata.product || "unknown",
  });

  return NextResponse.json({ received: true });
}
