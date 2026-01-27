import { NextResponse } from "next/server";

export const runtime = "nodejs";

/* ======================================================
   API ROUTE — CONSUME KEY (V1 — MULTI CREDITS SAFE)
====================================================== */

export async function POST(req: Request) {
  const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
  const NAMESPACE_ID = process.env.CF_KV_NAMESPACE_ID;
  const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

  if (!ACCOUNT_ID || !NAMESPACE_ID || !API_TOKEN) {
    return NextResponse.json(
      { error: "SERVER_MISCONFIGURED" },
      { status: 500 }
    );
  }

  let payload: { key?: string };

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { error: "INVALID_JSON" },
      { status: 400 }
    );
  }

  const key = payload.key;

  if (!key || typeof key !== "string") {
    return NextResponse.json(
      { error: "MISSING_KEY" },
      { status: 400 }
    );
  }

  const kvUrl = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/storage/kv/namespaces/${NAMESPACE_ID}/values/${key}`;

  /* ==================================================
     READ KEY
  ================================================== */

  const getRes = await fetch(kvUrl, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  if (getRes.status === 404) {
    return NextResponse.json(
      { error: "KEY_NOT_FOUND" },
      { status: 404 }
    );
  }

  if (!getRes.ok) {
    return NextResponse.json(
      { error: "KV_READ_FAILED" },
      { status: 500 }
    );
  }

  let data: {
    credits?: number;
    usedCredits?: number;
    expiresAt?: string;
  };

  try {
    data = await getRes.json();
  } catch {
    return NextResponse.json(
      { error: "KV_CORRUPTED_VALUE" },
      { status: 500 }
    );
  }

  const credits = Number(data.credits);
  const usedCredits = Number.isInteger(Number(data.usedCredits))
    ? Number(data.usedCredits)
    : 0;

  if (!Number.isInteger(credits) || credits <= 0) {
    return NextResponse.json(
      { error: "INVALID_KEY_STATE" },
      { status: 500 }
    );
  }

  if (usedCredits >= credits) {
    return NextResponse.json(
      { error: "NO_REMAINING_CREDITS" },
      { status: 409 }
    );
  }

  /* ==================================================
     CONSUME ONE CREDIT (ATOMIC LOGIC)
  ================================================== */

  const putRes = await fetch(kvUrl, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      credits,
      usedCredits: usedCredits + 1,
      lastUsedAt: new Date().toISOString(),
    }),
  });

  if (!putRes.ok) {
    return NextResponse.json(
      { error: "KV_WRITE_FAILED" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    redeemed: true,
    remainingCredits: Math.max(0, credits - (usedCredits + 1)),
  });
     }
