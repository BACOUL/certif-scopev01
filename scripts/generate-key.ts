import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

/**
 * CONFIG
 * ➜ DOIT être IDENTIQUE côté génération
 */
const KEY_SECRET = process.env.KEY_SECRET!;
if (!KEY_SECRET) {
  throw new Error("Missing KEY_SECRET");
}

/**
 * Recalcule la signature officielle
 */
function computeSignature(keyBody: string): string {
  return crypto
    .createHmac("sha256", KEY_SECRET)
    .update(keyBody)
    .digest("hex")
    .slice(0, 8)
    .toUpperCase();
}

function generatePseudoSessionId() {
  return `key_${crypto.randomUUID()}`;
}

export async function POST(req: Request) {
  try {
    const { accessKey } = await req.json();

    if (!accessKey || typeof accessKey !== "string") {
      return NextResponse.json({ error: "Invalid key" }, { status: 400 });
    }

    const parts = accessKey.split("-");
    if (parts.length !== 6 || parts[0] !== "CS") {
      return NextResponse.json({ error: "Invalid key format" }, { status: 403 });
    }

    const keyBody = parts.slice(0, 5).join("-");
    const providedSignature = parts[5];

    const expectedSignature = computeSignature(keyBody);

    if (providedSignature !== expectedSignature) {
      return NextResponse.json({ error: "Invalid key signature" }, { status: 403 });
    }

    // ✅ CLÉ VALIDE
    const sessionId = generatePseudoSessionId();

    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "http://localhost:3000";

    return NextResponse.json({
      redeemed: true,
      creditsConsumed: 1,
      remainingCredits: "managed_externally",
      session_id: sessionId,
      url: `${origin}/success?session_id=${sessionId}`,
    });
  } catch {
    return NextResponse.json({ error: "Redeem failed" }, { status: 500 });
  }
}
