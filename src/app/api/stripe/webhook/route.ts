import { NextResponse } from "next/server";
import Stripe from "stripe";
import crypto from "crypto";
import { Resend } from "resend";
import { getEuFlowCopy, isEuNonCoreLocale } from "@/lib/eu-flow";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type WebhookEnv = {
  STRIPE_SECRET_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
  RESEND_API_KEY: string;
  CLOUDFLARE_ACCOUNT_ID: string;
  CF_KV_NAMESPACE_ID: string;
  CLOUDFLARE_API_TOKEN: string;
  KEY_SECRET: string;
};

function getWebhookEnv(): WebhookEnv {
  const env = {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID,
    CF_KV_NAMESPACE_ID: process.env.CF_KV_NAMESPACE_ID,
    CLOUDFLARE_API_TOKEN: process.env.CLOUDFLARE_API_TOKEN,
    KEY_SECRET: process.env.KEY_SECRET,
  };
  if (Object.values(env).some((value) => !value)) {
    throw new Error("Missing required webhook environment variables");
  }
  return env as WebhookEnv;
}

const KEY_VALIDITY_DAYS = 365;
type CoreLocale = "fr" | "de" | "en";

const EMAIL_I18N: Record<
  CoreLocale,
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
<p>Bonjour,</p><p>Merci pour votre achat.</p>
<p>Voici vos <strong>${credits} clés d’accès</strong> :</p><pre>${keys.join("\n")}</pre>
<p>Chaque clé permet de générer <strong>une attestation CO₂e</strong>.</p><p>— Certif-Scope</p>`,
    attestationSubject: "Votre attestation CO₂e — Certif-Scope",
    attestationBody: `<p>Votre attestation CO₂e est jointe à cet email.</p><ul><li>Document émis une seule fois</li><li>Aucune conservation côté Certif-Scope</li><li>Archivage à votre charge</li></ul><p>— Certif-Scope</p>`,
  },
  de: {
    packSubject: (pack) => `Ihre Certif-Scope-Zugangsschlüssel (${pack})`,
    packBody: (credits, keys) => `<p>Guten Tag,</p><p>Vielen Dank für Ihren Kauf.</p><p>Hier sind Ihre <strong>${credits} Zugangsschlüssel</strong>:</p><pre>${keys.join("\n")}</pre><p>Jeder Schlüssel ermöglicht <strong>eine CO₂e-Bescheinigung</strong>.</p><p>— Certif-Scope</p>`,
    attestationSubject: "Ihre CO₂e-Bescheinigung — Certif-Scope",
    attestationBody: `<p>Ihre CO₂e-Bescheinigung ist beigefügt.</p><ul><li>Einmalige Ausstellung</li><li>Keine Speicherung</li><li>Bitte sicher archivieren</li></ul><p>— Certif-Scope</p>`,
  },
  en: {
    packSubject: (pack) => `Your Certif-Scope access keys (${pack})`,
    packBody: (credits, keys) => `<p>Hello,</p><p>Thank you for your purchase.</p><p>Here are your <strong>${credits} access keys</strong>:</p><pre>${keys.join("\n")}</pre><p>Each key allows the generation of <strong>one CO₂e attestation</strong>.</p><p>— Certif-Scope</p>`,
    attestationSubject: "Your CO₂e Attestation — Certif-Scope",
    attestationBody: `<p>Your CO₂e attestation is attached to this email.</p><ul><li>Issued once</li><li>No storage by Certif-Scope</li><li>Please archive it securely</li></ul><p>— Certif-Scope</p>`,
  },
};

function coreLocale(input: unknown): CoreLocale {
  return input === "de" ? "de" : input === "en" ? "en" : "fr";
}

function html(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function attestationEmail(locale: string) {
  if (isEuNonCoreLocale(locale)) {
    const copy = getEuFlowCopy(locale).success;
    return {
      subject: `${copy.ready} — Certif-Scope`,
      body: `<p>${html(copy.ready)}</p><p>${html(copy.archive)}</p><p>— Certif-Scope</p>`,
    };
  }
  const copy = EMAIL_I18N[coreLocale(locale)];
  return { subject: copy.attestationSubject, body: copy.attestationBody };
}

function sign(body: string, keySecret: string): string {
  return crypto
    .createHmac("sha256", keySecret)
    .update(body)
    .digest("hex")
    .slice(0, 8)
    .toUpperCase();
}

function generateAccessKey(keySecret: string): string {
  const raw = crypto.randomBytes(8).toString("hex").toUpperCase();
  const body =
    `CS-${raw.slice(0, 4)}` +
    `-${raw.slice(4, 8)}` +
    `-${raw.slice(8, 12)}` +
    `-${raw.slice(12, 16)}`;
  return `${body}-${sign(body, keySecret)}`;
}

function computeExpiryDate(): string {
  const d = new Date();
  d.setDate(d.getDate() + KEY_VALIDITY_DAYS);
  return d.toISOString();
}

function getKvBase(env: WebhookEnv): string {
  return `https://api.cloudflare.com/client/v4/accounts/${env.CLOUDFLARE_ACCOUNT_ID}/storage/kv/namespaces/${env.CF_KV_NAMESPACE_ID}/values`;
}

async function kvPut(env: WebhookEnv, key: string, value: unknown) {
  const res = await fetch(`${getKvBase(env)}/${key}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${env.CLOUDFLARE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });
  if (!res.ok) throw new Error(await res.text());
}

async function kvGet(env: WebhookEnv, key: string) {
  const res = await fetch(`${getKvBase(env)}/${key}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${env.CLOUDFLARE_API_TOKEN}` },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function POST(req: Request) {
  let env: WebhookEnv;
  try {
    env = getWebhookEnv();
  } catch {
    console.error("Missing required webhook environment variables");
    return NextResponse.json(
      { error: "Missing required webhook environment variables" },
      { status: 500 },
    );
  }

  const stripe = new Stripe(env.STRIPE_SECRET_KEY);
  const resend = new Resend(env.RESEND_API_KEY);
  const rawBody = await req.text();
  const sig = req.headers.get("stripe-signature");
  if (!sig) return new NextResponse("Missing signature", { status: 400 });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, env.STRIPE_WEBHOOK_SECRET);
  } catch {
    return new NextResponse("Invalid signature", { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const metadata = session.metadata || {};
  const processedKey = `processed:${session.id}`;
  if (await kvGet(env, processedKey)) {
    return NextResponse.json({ received: true });
  }

  const email =
    session.customer_details?.email ||
    session.customer_email ||
    metadata.emailForDelivery ||
    null;
  if (!email) throw new Error("MISSING_EMAIL");

  if (metadata.product === "certif-scope-pack") {
    const packLocale = coreLocale(metadata.siteLocale || metadata.attestationLocale);
    const i18n = EMAIL_I18N[packLocale];
    const credits = Number(metadata.credits || 0);
    const pack = metadata.pack || "standard";
    if (credits <= 0) throw new Error("INVALID_PACK_METADATA");

    const keys: string[] = [];
    for (let i = 0; i < credits; i++) {
      const key = generateAccessKey(env.KEY_SECRET);
      await kvPut(env, key, {
        credits: 1,
        usedCredits: 0,
        createdAt: new Date().toISOString(),
        expiresAt: computeExpiryDate(),
        stripeSessionId: session.id,
        version: "v1",
      });
      keys.push(key);
    }

    await resend.emails.send({
      from: "Certif-Scope <no-reply@certif-scope.com>",
      to: email,
      subject: i18n.packSubject(pack),
      html: i18n.packBody(keys.length, keys),
    });
  }

  if (metadata.product === "certif-scope-attestation") {
    const proto = req.headers.get("x-forwarded-proto");
    const host = req.headers.get("host");
    if (!proto || !host) throw new Error("INVALID_ORIGIN");

    const requestedLocale = String(metadata.attestationLocale || "fr").toLowerCase();
    const issuePath = isEuNonCoreLocale(requestedLocale)
      ? "/api/attestation/eu"
      : "/api/attestation/issue";
    const issueUrl = `${proto}://${host}${issuePath}?session_id=${session.id}`;
    const pdfRes = await fetch(issueUrl);
    if (!pdfRes.ok || !pdfRes.headers.get("content-type")?.includes("application/pdf")) {
      throw new Error("PDF_GENERATION_FAILED");
    }

    const pdfBuffer = Buffer.from(await pdfRes.arrayBuffer());
    const mail = attestationEmail(requestedLocale);
    await resend.emails.send({
      from: "Certif-Scope <no-reply@certif-scope.com>",
      to: email,
      subject: mail.subject,
      html: mail.body,
      attachments: [
        {
          filename: `certif-scope-attestation-${session.id}-${requestedLocale}.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    });
  }

  await kvPut(env, processedKey, {
    processedAt: new Date().toISOString(),
    product: metadata.product || "unknown",
  });

  return NextResponse.json({ received: true });
}
