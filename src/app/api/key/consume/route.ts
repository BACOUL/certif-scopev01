import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

/* ======================================================
   UTILS
====================================================== */

function generateSessionId() {
  return `key_${crypto.randomUUID()}`;
}

function isValidKeyFormat(key: string) {
  return /^CS-[A-Z0-9-]+$/.test(key);
}

/* ======================================================
   API ROUTE — CONSUME KEY
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

  if (!key) {
    return NextResponse.json(
      { error: "MISSING_KEY" },
      { status: 400 }
    );
  }

  if (!isValidKeyFormat(key)) {
    return NextResponse.json(
      { error: "INVALID_KEY_FORMAT" },
      { status: 400 }
    );
  }

  const kvUrl = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/storage/kv/namespaces/${NAMESPACE_ID}/values/${key}`;

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

  const text = await getRes.text();

  let data: { used?: boolean; createdAt?: string };

  try {
    data = JSON.parse(text);
  } catch {
    return NextResponse.json(
      { error: "KV_CORRUPTED_VALUE" },
      { status: 500 }
    );
  }

  if (data.used === true) {
    return NextResponse.json(
      { error: "KEY_ALREADY_USED" },
      { status: 409 }
    );
  }

  const putRes = await fetch(kvUrl, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      used: true,
      usedAt: new Date().toISOString(),
    }),
  });

  if (!putRes.ok) {
    return NextResponse.json(
      { error: "KV_WRITE_FAILED" },
      { status: 500 }
    );
  }

  const sessionId = generateSessionId();

  const origin =
    req.headers.get("origin") ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    "http://localhost:3000";

  return NextResponse.json({
    redeemed: true,
    session_id: sessionId,
    url: `${origin}/success?session_id=${sessionId}`,
  });
    }
