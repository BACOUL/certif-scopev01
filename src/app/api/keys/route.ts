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

/* ======================================================
   CLOUDFLARE KV
====================================================== */

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
    throw new Error(await res.text());
  }
}

/* ======================================================
   API ROUTE
====================================================== */

export async function POST(req: Request) {
  const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID!;
  const NAMESPACE_ID = process.env.CF_KV_NAMESPACE_ID!;
  const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN!;
  const KEY_SECRET = process.env.KEY_SECRET!;

  if (!ACCOUNT_ID || !NAMESPACE_ID || !API_TOKEN || !KEY_SECRET) {
    return NextResponse.json(
      { error: "Server misconfigured" },
      { status: 500 }
    );
  }

  let payload: { quantity?: number };

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

  return NextResponse.json({
    count: keys.length,
    keys,
  });
      }
