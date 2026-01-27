import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

/* ======================================================
   ADMIN — CREATE ACCESS KEY (FREE / MANUAL)
   1 key = 1 attestation
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
  const raw = crypto.randomBytes(8).toString("hex").toUpperCase();
  const body =
    `CS-${raw.slice(0, 4)}` +
    `-${raw.slice(4, 8)}` +
    `-${raw.slice(8, 12)}` +
    `-${raw.slice(12, 16)}`;
  return `${body}-${sign(body, secret)}`;
}

export async function POST(req: Request) {
  const {
    CLOUDFLARE_ACCOUNT_ID,
    CF_KV_NAMESPACE_ID,
    CLOUDFLARE_API_TOKEN,
    KEY_SECRET,
  } = process.env;

  if (
    !CLOUDFLARE_ACCOUNT_ID ||
    !CF_KV_NAMESPACE_ID ||
    !CLOUDFLARE_API_TOKEN ||
    !KEY_SECRET
  ) {
    return NextResponse.json(
      { error: "SERVER_MISCONFIGURED" },
      { status: 500 }
    );
  }

  let payload: { note?: string };

  try {
    payload = await req.json();
  } catch {
    payload = {};
  }

  const key = generateKey(KEY_SECRET);

  const value = {
    credits: 1,
    usedCredits: 0,
    createdAt: new Date().toISOString(),
    source: "admin",
    note: payload.note || null,
  };

  const kvUrl = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/storage/kv/namespaces/${CF_KV_NAMESPACE_ID}/values/${key}`;

  const res = await fetch(kvUrl, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "KV_WRITE_FAILED" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    key,
    credits: 1,
    createdAt: value.createdAt,
    warning: "Admin-generated key. One-time use.",
  });
}
