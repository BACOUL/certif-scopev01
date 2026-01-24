import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

// ======================================================
// HELPERS
// ======================================================
function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} missing`);
  }
  return value;
}

function sign(body: string, secret: string) {
  return crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex")
    .slice(0, 8)
    .toUpperCase();
}

// ======================================================
// POST
// ======================================================
export async function POST(req: Request) {
  try {
    const {
      CF_ACCOUNT_ID,
      CF_KV_NAMESPACE_ID,
      CF_API_TOKEN,
      KEY_SECRET,
    } = {
      CF_ACCOUNT_ID: getEnv("CF_ACCOUNT_ID"),
      CF_KV_NAMESPACE_ID: getEnv("CF_KV_NAMESPACE_ID"),
      CF_API_TOKEN: getEnv("CF_API_TOKEN"),
      KEY_SECRET: getEnv("KEY_SECRET"),
    };

    const { key } = await req.json();

    if (!key) {
      return NextResponse.json(
        { error: "MISSING_KEY" },
        { status: 400 }
      );
    }

    // 🔐 Vérification signature
    const parts = key.split("-");
    if (parts.length !== 6) {
      return NextResponse.json(
        { error: "INVALID_KEY_FORMAT" },
        { status: 400 }
      );
    }

    const body = parts.slice(0, 5).join("-");
    const sig = parts[5];
    const expected = sign(body, KEY_SECRET);

    if (sig !== expected) {
      return NextResponse.json(
        { error: "INVALID_KEY_SIGNATURE" },
        { status: 403 }
      );
    }

    // 🔎 Vérification KV Cloudflare
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${CF_KV_NAMESPACE_ID}/values/${key}`,
      {
        headers: {
          Authorization: `Bearer ${CF_API_TOKEN}`,
        },
      }
    );

    if (res.status === 404) {
      return NextResponse.json(
        { error: "KEY_NOT_FOUND" },
        { status: 403 }
      );
    }

    const data = await res.json();

    if (data.used === true) {
      return NextResponse.json(
        { error: "KEY_ALREADY_USED" },
        { status: 403 }
      );
    }

    // 🔒 Marque la clé comme utilisée
    await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${CF_KV_NAMESPACE_ID}/values/${key}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${CF_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          used: true,
          usedAt: new Date().toISOString(),
        }),
      }
    );

    const sessionId = `key_${crypto.randomUUID()}`;

    const origin =
      req.headers.get("origin") ||
      (req.headers.get("x-forwarded-proto") &&
        req.headers.get("host") &&
        `${req.headers.get("x-forwarded-proto")}://${req.headers.get("host")}`) ||
      null;

    if (!origin) {
      return NextResponse.json(
        { error: "ORIGIN_NOT_RESOLVED" },
        { status: 500 }
      );
    }

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
