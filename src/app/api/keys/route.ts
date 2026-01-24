import { NextResponse } from "next/server";
import crypto from "crypto";

/* ======================================================
   KEY GENERATION (PURE / NO ENV AT LOAD TIME)
====================================================== */

function sign(body: string, secret: string) {
  return crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex")
    .slice(0, 8)
    .toUpperCase();
}

function generateKey(secret: string) {
  const p = () => crypto.randomBytes(2).toString("hex").toUpperCase();
  const body = `CS-${p()}-${p()}-${p()}-${p()}`;
  return `${body}-${sign(body, secret)}`;
}

async function putKV(params: {
  accountId: string;
  namespaceId: string;
  apiToken: string;
  key: string;
  value: any;
}) {
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
    throw new Error(txt);
  }
}

/* ======================================================
   API ROUTE
====================================================== */

export async function POST(req: Request) {
  const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
  const NAMESPACE_ID = process.env.CLOUDFLARE_KV_NAMESPACE_ID;
  const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
  const KEY_SECRET = process.env.KEY_SECRET;

  if (
    !ACCOUNT_ID ||
    !NAMESPACE_ID ||
    !API_TOKEN ||
    !KEY_SECRET
  ) {
    return NextResponse.json(
      { error: "Server misconfigured" },
      { status: 500 }
    );
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const quantity = Number(body.quantity);

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
