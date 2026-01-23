import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

/* ======================================================
   ACCESS KEY — VALIDATION SIGNÉE (SANS DB)
   ======================================================

FORMAT CLÉ (STRICT) :
CS-{TYPE}-{PAYLOAD}-{SIGNATURE}

TYPE :
- PACK   → crédits limités
- ADMIN  → illimité

PAYLOAD :
- PACK  → nombre de crédits (ex: 10, 50)
- ADMIN → UNLIMITED

SIGNATURE :
HMAC-SHA256(secret, `${TYPE}:${PAYLOAD}`) tronqué

====================================================== */

const KEY_PREFIX = "CS";
const SIGNATURE_LENGTH = 16; // hex chars
const KEY_SECRET = process.env.KEY_SECRET!;

if (!KEY_SECRET) {
  throw new Error("KEY_SECRET is missing");
}

// ======================================================
// UTILS
// ======================================================
function sign(type: string, payload: string) {
  return crypto
    .createHmac("sha256", KEY_SECRET)
    .update(`${type}:${payload}`)
    .digest("hex")
    .slice(0, SIGNATURE_LENGTH)
    .toUpperCase();
}

function generateSessionId() {
  return `key_${crypto.randomUUID()}`;
}

type ParsedKey =
  | { valid: true; type: "ADMIN"; credits: "unlimited" }
  | { valid: true; type: "PACK"; credits: number }
  | { valid: false };

// ======================================================
// KEY PARSER / VALIDATOR
// ======================================================
function validateAccessKey(key: string): ParsedKey {
  if (!key || typeof key !== "string") return { valid: false };

  const parts = key.split("-");
  if (parts.length !== 4) return { valid: false };

  const [prefix, type, payload, signature] = parts;

  if (prefix !== KEY_PREFIX) return { valid: false };

  const expectedSig = sign(type, payload);
  if (signature !== expectedSig) return { valid: false };

  if (type === "ADMIN" && payload === "UNLIMITED") {
    return { valid: true, type: "ADMIN", credits: "unlimited" };
  }

  if (type === "PACK") {
    const credits = Number(payload);
    if (!Number.isInteger(credits) || credits <= 0) {
      return { valid: false };
    }
    return { valid: true, type: "PACK", credits };
  }

  return { valid: false };
}

// ======================================================
// REDEEM ENDPOINT
// ======================================================
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { accessKey } = body;

    const parsed = validateAccessKey(accessKey);

    if (!parsed.valid) {
      return NextResponse.json(
        { error: "Invalid access key" },
        { status: 403 }
      );
    }

    const session_id = generateSessionId();

    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "http://localhost:3000";

    return NextResponse.json({
      redeemed: true,
      keyType: parsed.type,
      credits:
        parsed.type === "ADMIN" ? "unlimited" : parsed.credits,
      session_id,
      url: `${origin}/success?session_id=${session_id}`,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Redeem failed" },
      { status: 500 }
    );
  }
}
