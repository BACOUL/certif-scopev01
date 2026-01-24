import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const ENV = {
    CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID,
    CF_KV_NAMESPACE_ID: process.env.CF_KV_NAMESPACE_ID,
    CLOUDFLARE_API_TOKEN: process.env.CLOUDFLARE_API_TOKEN,
    KEY_SECRET: process.env.KEY_SECRET,
    NODE_ENV: process.env.NODE_ENV,
  };

  const diagnostic = Object.fromEntries(
    Object.entries(ENV).map(([k, v]) => [k, v ? "OK" : "MISSING"])
  );

  // 👉 ON RETOURNE LE DIAGNOSTIC DIRECTEMENT
  return NextResponse.json({
    error: "DIAGNOSTIC_MODE",
    diagnostic,
  });
}
