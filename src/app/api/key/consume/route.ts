import { NextResponse } from "next/server";

export const runtime = "nodejs";

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID!;
const NAMESPACE_ID = process.env.CLOUDFLARE_KV_NAMESPACE_ID!;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN!;

if (!ACCOUNT_ID || !NAMESPACE_ID || !API_TOKEN) {
  throw new Error("Missing Cloudflare env vars");
}

const KV_URL = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/storage/kv/namespaces/${NAMESPACE_ID}/values`;

export async function POST(req: Request) {
  const { key } = await req.json();

  if (!key || typeof key !== "string") {
    return NextResponse.json(
      { error: "MISSING_KEY" },
      { status: 400 }
    );
  }

  /* 1️⃣ READ KEY */
  const readRes = await fetch(`${KV_URL}/${key}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  if (readRes.status === 404) {
    return NextResponse.json(
      { error: "INVALID_KEY" },
      { status: 403 }
    );
  }

  if (!readRes.ok) {
    const txt = await readRes.text();
    return NextResponse.json(
      { error: "KV_READ_ERROR", details: txt },
      { status: 500 }
    );
  }

  const raw = await readRes.text();
  let data: any;

  try {
    data = JSON.parse(raw);
  } catch {
    return NextResponse.json(
      { error: "CORRUPTED_KEY_DATA" },
      { status: 500 }
    );
  }

  /* 2️⃣ CHECK USAGE */
  if (data.used === true) {
    return NextResponse.json(
      { error: "KEY_ALREADY_USED" },
      { status: 403 }
    );
  }

  /* 3️⃣ CONSUME KEY */
  const writeRes = await fetch(`${KV_URL}/${key}`, {
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

  if (!writeRes.ok) {
    const txt = await writeRes.text();
    return NextResponse.json(
      { error: "KV_WRITE_ERROR", details: txt },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    key,
  });
      }
