import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

/* ======================================================
   HELPERS
====================================================== */

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} missing`);
  }
  return value;
}

function sign(body: string, secret: string): string {
  return crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex")
    .slice(0, 8)
    .toUpperCase();
}

/* ======================================================
   POST /api/redeem-key
====================================================== */

export async function POST(req: Request) {
  try {
    // ✅ ENV VARS — ALIGNÉES PARTOUT
    const CLOUDFLARE_ACCOUNT_ID = getEnv("CLOUDFLARE_ACCOUNT_ID");
    const CF_KV_NAMESPACE_ID = getEnv("CF_KV_NAMESPACE_ID");
    const CLOUDFLARE_API_TOKEN = getEnv("CLOUDFLARE_API_TOKEN");
    const KEY_SECRET = getEnv("KEY_SECRET");

    // ✅ PAYLOAD — le client envoie accessKey
    const { accessKey: key } = await req.json();

    if (!key || typeof key !== "string") {
      return NextResponse.json(
        { error: "MISSING_KEY" },
        { status: 400 }
      );
    }

    /* ==================================================
       1️⃣ FORMAT STRICT
       CS-XXXX-XXXX-XXXX-XXXX-SIGN
    ================================================== */

    const parts = key.split("-");
    if (parts.length !== 6 || parts[0] !== "CS") {
      return NextResponse.json(
        { error: "INVALID_KEY_FORMAT" },
        { status: 400 }
      );
    }

    const body = parts.slice(0, 5).join("-");
    const providedSig = parts[5];
    const expectedSig = sign(body, KEY_SECRET);

    /* ==================================================
       2️⃣ SIGNATURE CHECK
    ================================================== */

    if (providedSig !== expectedSig) {
      return NextResponse.json(
        { error: "INVALID_KEY_SIGNATURE" },
        { status: 403 }
      );
    }

    /* ==================================================
       3️⃣ FETCH KEY FROM CLOUDFLARE KV
    ================================================== */

    const kvRes = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/storage/kv/namespaces/${CF_KV_NAMESPACE_ID}/values/${key}`,
      {
        headers: {
          Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
        },
      }
    );

    if (kvRes.status === 404) {
      return NextResponse.json(
        { error: "KEY_NOT_FOUND" },
        { status: 403 }
      );
    }

    if (!kvRes.ok) {
      return NextResponse.json(
        { error: "KV_READ_FAILED" },
        { status: 500 }
      );
    }

    const data = await kvRes.json();

    /* ==================================================
       4️⃣ USAGE CHECK
    ================================================== */

    if (data.used === true) {
      return NextResponse.json(
        { error: "KEY_ALREADY_USED" },
        { status: 403 }
      );
    }

    /* ==================================================
       5️⃣ MARK AS USED (ATOMIC)
    ================================================== */

    await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/storage/kv/namespaces/${CF_KV_NAMESPACE_ID}/values/${key}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          used: true,
          usedAt: new Date().toISOString(),
        }),
      }
    );

    /* ==================================================
       6️⃣ SESSION ID COMPATIBLE SUCCESS PAGE
    ================================================== */

    const sessionId = `key_${crypto.randomUUID()}`;

    const proto = req.headers.get("x-forwarded-proto");
    const host = req.headers.get("host");
    const origin = proto && host ? `${proto}://${host}` : null;

    if (!origin) {
      return NextResponse.json(
        { error: "ORIGIN_NOT_RESOLVED" },
        { status: 500 }
      );
    }

    /* ==================================================
       ✅ FINAL RESPONSE — STRICT CONTRACT
    ================================================== */

    return NextResponse.json({
      redeemed: true,
      session_id: sessionId,
      url: `${origin}/success?session_id=${sessionId}`,
    });

  } catch (err: any) {
    console.error("REDEEM_KEY_ERROR", err.message);
    return NextResponse.json(
      { error: "SERVER_ERROR" },
      { status: 500 }
    );
  }
      }
