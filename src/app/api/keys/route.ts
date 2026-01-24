import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

/* ======================================================
   KEY GENERATION
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
  const part = () => crypto.randomBytes(2).toString("hex").toUpperCase();
  const body = `CS-${part()}-${part()}-${part()}-${part()}`;
  return `${body}-${sign(body, secret)}`;
}

async function putKV(params: {
  accountId: string;
  namespaceId: string;
  apiToken: string;
  key: string;
  value: unknown;
}): Promise<void> {
  const { accountId, namespaceId, apiToken, key, value } = params;

  const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/values/${key}`;

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${apiToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });

  if (!res.ok) {
    const txt = await res.text();
    console.error("CLOUDFLARE_KV_ERROR", {
      status: res.status,
      body: txt,
    });
    throw new Error(txt);
  }
}

/* ======================================================
   API ROUTE — DIAGNOSTIC MODE
====================================================== */

export async function POST(req: Request) {
  const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
  const NAMESPACE_ID = process.env.CF_KV_NAMESPACE_ID;
  const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
  const KEY_SECRET = process.env.KEY_SECRET;

  /* ===== ENV DIAGNOSTIC ===== */
  console.log("ENV_DIAGNOSTIC", {
    CLOUDFLARE_ACCOUNT_ID: ACCOUNT_ID ? "OK" : "MISSING",
    CF_KV_NAMESPACE_ID: NAMESPACE_ID ? "OK" : "MISSING",
    CLOUDFLARE_API_TOKEN: API_TOKEN ? "OK" : "MISSING",
    KEY_SECRET: KEY_SECRET ? "OK" : "MISSING",
    NODE_ENV: process.env.NODE_ENV,
  });

  if (!ACCOUNT_ID || !NAMESPACE_ID || !API_TOKEN || !KEY_SECRET) {
    return NextResponse.json(
      {
        error: "Server misconfigured",
        diagnostic: {
          CLOUDFLARE_ACCOUNT_ID: !!ACCOUNT_ID,
          CF_KV_NAMESPACE_ID: !!NAMESPACE_ID,
          CLOUDFLARE_API_TOKEN: !!API_TOKEN,
          KEY_SECRET: !!KEY_SECRET,
        },
      },
      { status: 500 }
    );
  }

  let payload: any;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const quantity = Number(payload.quantity);

  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 100) {
    return NextResponse.json(
      { error: "Invalid quantity (1–100)" },
      { status: 400 }
    );
  }

  const keys: string[] = [];

  try {
    for (let i = 0; i < quantity; i++) {
      const key = generateKey(KEY_SECRET);

      await putKV({
        accountId: ACCOUNT_ID,
        namespaceId: NAMESPACE_ID,
        apiToken: API_TOKEN,
        key,
        value: {
          used: false,
          createdAt: new Date().toISOString(),
        },
      });

      keys.push(key);
    }
  } catch (e: any) {
    console.error("KEY_GENERATION_FAILED", e?.message);
    return NextResponse.json(
      {
        error: "KV write failed",
        details: e?.message ?? "unknown",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    count: keys.length,
    keys,
  });
}
