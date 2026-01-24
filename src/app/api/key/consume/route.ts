import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

// Génère un session_id compatible SuccessPage
function generateSessionId() {
  return `key_${crypto.randomUUID()}`;
}

export async function POST(req: Request) {
  const { key } = await req.json();

  if (!key) {
    return NextResponse.json(
      { error: "MISSING_KEY" },
      { status: 400 }
    );
  }

  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ACCOUNT_ID}/storage/kv/namespaces/${process.env.CF_KV_NAMESPACE_ID}/values/${key}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.CF_API_TOKEN}`,
      },
    }
  );

  if (res.status === 404) {
    return NextResponse.json(
      { error: "INVALID_KEY" },
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

  // 🔒 Marque la clé comme consommée
  await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ACCOUNT_ID}/storage/kv/namespaces/${process.env.CF_KV_NAMESPACE_ID}/values/${key}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${process.env.CF_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        used: true,
        usedAt: new Date().toISOString(),
      }),
    }
  );

  // ✅ Génération session_id
  const sessionId = generateSessionId();

  const origin =
    req.headers.get("origin") ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    "http://localhost:3000";

  // 🔁 CONTRAT IDENTIQUE À STRIPE
  return NextResponse.json({
    redeemed: true,
    session_id: sessionId,
    url: `${origin}/success?session_id=${sessionId}`,
  });
}
