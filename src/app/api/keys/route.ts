import { NextResponse } from "next/server";
import crypto from "crypto";

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID!;
const NAMESPACE_ID = process.env.CLOUDFLARE_KV_NAMESPACE_ID!;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN!;
const KEY_SECRET = process.env.KEY_SECRET!;

if (!ACCOUNT_ID || !NAMESPACE_ID || !API_TOKEN || !KEY_SECRET) {
  throw new Error("Missing Cloudflare / Key env vars");
}

function sign(body: string) {
  return crypto
    .createHmac("sha256", KEY_SECRET)
    .update(body)
    .digest("hex")
    .slice(0, 8)
    .toUpperCase();
}

function generateKey() {
  const p = () => crypto.randomBytes(2).toString("hex").toUpperCase();
  const body = `CS-${p()}-${p()}-${p()}-${p()}`;
  return `${body}-${sign(body)}`;
}

async function putKV(key: string, value: any) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/storage/kv/namespaces/${NAMESPACE_ID}/values/${key}`;

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(txt);
  }
}

export async function POST(req: Request) {
  const { quantity } = await req.json();

  if (!quantity || quantity < 1 || quantity > 100) {
    return NextResponse.json(
      { error: "Invalid quantity" },
      { status: 400 }
    );
  }

  const keys: string[] = [];

  for (let i = 0; i < quantity; i++) {
    const key = generateKey();
    await putKV(key, {
      used: false,
      createdAt: new Date().toISOString(),
    });
    keys.push(key);
  }

  return NextResponse.json({
    count: keys.length,
    keys,
  });
}
