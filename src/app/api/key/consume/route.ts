import { NextResponse } from "next/server";

export const runtime = "nodejs";

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

  return NextResponse.json({ ok: true });
}
