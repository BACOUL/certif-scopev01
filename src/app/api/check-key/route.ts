import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

/**
 * FORMAT OFFICIEL STRICT
 * CS-XXXX-XXXX-XXXX-XXXX-SIGN
 *
 * MODÈLE KV ATTENDU :
 * {
 *   credits: number,
 *   usedCredits: number,
 *   createdAt: ISOString,
 *   expiresAt: ISOString,
 *   used?: boolean,          // legacy compat
 *   source: string
 * }
 */

/* ======================================================
   SIGNATURE
====================================================== */

function computeSignature(body: string, secret: string): string {
  return crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex")
    .slice(0, 8)
    .toUpperCase();
}

/* ======================================================
   CHECK KEY
====================================================== */

export async function POST(req: Request) {
  try {
    const { key } = await req.json();

    if (!key || typeof key !== "string") {
      return NextResponse.json(
        { valid: false, error: "MISSING_KEY" },
        { status: 400 }
      );
    }

    const KEY_SECRET = process.env.KEY_SECRET;
    const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
    const NAMESPACE_ID = process.env.CF_KV_NAMESPACE_ID;
    const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

    if (!KEY_SECRET || !ACCOUNT_ID || !NAMESPACE_ID || !API_TOKEN) {
      return NextResponse.json(
        { valid: false, error: "SERVER_MISCONFIGURED" },
        { status: 500 }
      );
    }

    /* ==================================================
       1️⃣ FORMAT STRICT
    ================================================== */

    const parts = key.split("-");
    if (parts.length !== 6 || parts[0] !== "CS") {
      return NextResponse.json(
        { valid: false, error: "INVALID_KEY_FORMAT" },
        { status: 400 }
      );
    }

    const body = parts.slice(0, 5).join("-");
    const providedSignature = parts[5];

    /* ==================================================
       2️⃣ SIGNATURE CHECK
    ================================================== */

    const expectedSignature = computeSignature(body, KEY_SECRET);

    if (providedSignature !== expectedSignature) {
      return NextResponse.json(
        { valid: false, error: "INVALID_KEY_SIGNATURE" },
        { status: 403 }
      );
    }

    /* ==================================================
       3️⃣ READ CLOUDFLARE KV
    ================================================== */

    const kvRes = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/storage/kv/namespaces/${NAMESPACE_ID}/values/${key}`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );

    if (kvRes.status === 404) {
      return NextResponse.json(
        { valid: false, error: "KEY_NOT_FOUND" },
        { status: 403 }
      );
    }

    if (!kvRes.ok) {
      return NextResponse.json(
        { valid: false, error: "KV_READ_FAILED" },
        { status: 500 }
      );
    }

    const data = await kvRes.json();

    /* ==================================================
       4️⃣ EXPIRATION CHECK
    ================================================== */

    if (data.expiresAt) {
      const expiresAt = Date.parse(data.expiresAt);
      if (!Number.isNaN(expiresAt) && Date.now() > expiresAt) {
        return NextResponse.json(
          { valid: false, error: "KEY_EXPIRED" },
          { status: 403 }
        );
      }
    }

    /* ==================================================
       5️⃣ CREDIT CHECK (LEGACY + MULTI)
    ================================================== */

    // 🔒 Legacy clé à usage unique
    if (data.used === true) {
      return NextResponse.json(
        { valid: true, remainingCredits: 0 },
        { status: 200 }
      );
    }

    const credits = Number(data.credits);
    const usedCredits = Number(data.usedCredits);

    if (
      !Number.isInteger(credits) ||
      credits <= 0 ||
      !Number.isInteger(usedCredits) ||
      usedCredits < 0
    ) {
      return NextResponse.json(
        { valid: false, error: "INVALID_KEY_STATE" },
        { status: 500 }
      );
    }

    const remainingCredits = Math.max(0, credits - usedCredits);

    return NextResponse.json(
      {
        valid: true,
        remainingCredits,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("CHECK_KEY_ERROR", err);
    return NextResponse.json(
      { valid: false, error: "CHECK_FAILED" },
      { status: 500 }
    );
  }
                             }
