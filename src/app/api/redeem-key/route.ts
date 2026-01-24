import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

/* ======================================================
   CONFIG
====================================================== */
const KEY_SECRET = process.env.KEY_SECRET!;
const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID!;
const CF_KV_NAMESPACE_ID = process.env.CF_KV_NAMESPACE_ID!;
const CF_API_TOKEN = process.env.CF_API_TOKEN!;

if (!KEY_SECRET) throw new Error("KEY_SECRET missing");
if (!CF_ACCOUNT_ID) throw new Error("CF_ACCOUNT_ID missing");
if (!CF_KV_NAMESPACE_ID) throw new Error("CF_KV_NAMESPACE_ID missing");
if (!CF_API_TOKEN) throw new Error("CF_API_TOKEN missing");

/* ======================================================
   SIGNATURE
====================================================== */
function sign(body: string) {
  return crypto
    .createHmac("sha256", KEY_SECRET)
    .update(body)
    .digest("hex")
    .slice(0, 8)
    .toUpperCase();
}

/* ======================================================
   SESSION ID
====================================================== */
function generateSessionId() {
  return `key_${crypto.randomUUID()}`;
}

/* ======================================================
   POST /api/redeem-key
====================================================== */
export async function POST(req: Request) {
  let payload: { key?: string };

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "INVALID_JSON" }, { status: 400 });
  }

  const key = payload.key;
  if (!key) {
    return NextResponse.json({ error: "MISSING_KEY" }, { status: 400 });
  }

  // Format attendu : CS-XXXX-XXXX-XXXX-XXXX-SIGN
  const match = key.match(
    /^CS-([A-F0-9]{4})-([A-F0-9]{4})-([A-F0-9]{4})-([A-F0-9]{4})-([A-F0-9]{8})$/
  );

  if (!match) {
    return NextResponse.json({ error: "INVALID_KEY_FORMAT" }, { status: 400 });
  }

  const body = `CS-${match[1]}-${match[2]}-${match[3]}-${match[4]}`;
  const expectedSig = sign(body);

  if (expectedSig !== match[5]) {
    return NextResponse.json({ error: "INVALID_SIGNATURE" }, { status: 403 });
  }

  /* ======================================================
     KV — READ
  ====================================================== */
  const kvUrl = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${CF_KV_NAMESPACE_ID}/values/${key}`;

  const kvRes = await fetch(kvUrl, {
    headers: {
      Authorization: `Bearer ${CF_API_TOKEN}`,
    },
  });

  if (kvRes.status === 404) {
    return NextResponse.json({ error: "KEY_NOT_FOUND" }, { status: 403 });
  }

  const record = await kvRes.json();

  if (record.used === true) {
    return NextResponse.json({ error: "KEY_ALREADY_USED" }, { status: 403 });
  }

  /* ======================================================
     KV — MARK USED
  ====================================================== */
  await fetch(kvUrl, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${CF_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...record,
      used: true,
      usedAt: new Date().toISOString(),
    }),
  });

  /* ======================================================
     SUCCESS
  ====================================================== */
  const sessionId = generateSessionId();

  const origin =
    req.headers.get("origin") ||
    (req.headers.get("x-forwarded-proto") && req.headers.get("host")
      ? `${req.headers.get("x-forwarded-proto")}://${req.headers.get("host")}`
      : null);

  if (!origin) {
    return NextResponse.json({ error: "ORIGIN_NOT_RESOLVED" }, { status: 500 });
  }

  return NextResponse.json({
    redeemed: true,
    session_id: sessionId,
    url: `${origin}/success?session_id=${sessionId}`,
  });
      }
