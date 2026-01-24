import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

/* ======================================================
   HELPERS
====================================================== */

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} missing`);
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
    const CLOUDFLARE_ACCOUNT_ID = getEnv("CLOUDFLARE_ACCOUNT_ID");
    const CF_KV_NAMESPACE_ID = getEnv("CF_KV_NAMESPACE_ID");
    const CLOUDFLARE_API_TOKEN = getEnv("CLOUDFLARE_API_TOKEN");
    const KEY_SECRET = getEnv("KEY_SECRET");

    const payload = await req.json();
    const {
      accessKey: key,
      companyName,
      companySector,
      entityIdentifier,
      year,
      country,
      totalCO2e,
      methodology,
      attestationLocale,
    } = payload;

    /* ==================================================
       0️⃣ METADATA STRICT — OBLIGATOIRE
    ================================================== */

    if (!companyName || !year || totalCO2e === undefined) {
      return NextResponse.json(
        { error: "MISSING_METADATA" },
        { status: 400 }
      );
    }

    /* ==================================================
       1️⃣ FORMAT & SIGNATURE
    ================================================== */

    const parts = key?.split("-");
    if (!parts || parts.length !== 6 || parts[0] !== "CS") {
      return NextResponse.json(
        { error: "INVALID_KEY_FORMAT" },
        { status: 400 }
      );
    }

    const body = parts.slice(0, 5).join("-");
    const expectedSig = sign(body, KEY_SECRET);

    if (parts[5] !== expectedSig) {
      return NextResponse.json(
        { error: "INVALID_KEY_SIGNATURE" },
        { status: 403 }
      );
    }

    /* ==================================================
       2️⃣ READ KEY
    ================================================== */

    const kvUrl = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/storage/kv/namespaces/${CF_KV_NAMESPACE_ID}/values/${key}`;

    const kvRes = await fetch(kvUrl, {
      headers: { Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}` },
    });

    if (kvRes.status === 404) {
      return NextResponse.json({ error: "KEY_NOT_FOUND" }, { status: 403 });
    }

    const data = await kvRes.json();

    if (data.used === true) {
      return NextResponse.json(
        { error: "KEY_ALREADY_USED" },
        { status: 403 }
      );
    }

    /* ==================================================
       3️⃣ CONSUME KEY (ATOMIC)
    ================================================== */

    await fetch(kvUrl, {
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
    });

    /* ==================================================
       4️⃣ REDIRECT → PDF DIRECT
    ================================================== */

    const proto = req.headers.get("x-forwarded-proto");
    const host = req.headers.get("host");
    const origin = proto && host ? `${proto}://${host}` : null;

    if (!origin) {
      return NextResponse.json(
        { error: "ORIGIN_NOT_RESOLVED" },
        { status: 500 }
      );
    }

    const params = new URLSearchParams({
      session_id: `key_${crypto.randomUUID()}`,
      companyName,
      companySector: companySector || "",
      entityIdentifier: entityIdentifier || "",
      year: String(year),
      country: country || "",
      totalCO2e: String(totalCO2e),
      methodology,
      attestationLocale,
    });

    return NextResponse.json({
      url: `${origin}/api/attestation/issue?${params.toString()}`,
    });

  } catch (err: any) {
    console.error("REDEEM_KEY_ERROR", err);
    return NextResponse.json(
      { error: "SERVER_ERROR" },
      { status: 500 }
    );
  }
       }
