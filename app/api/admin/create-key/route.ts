import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

/**
 * ADMIN — CREATE ACCESS KEY
 *
 * Objectif :
 * - Générer une clé d’accès unique
 * - Associer un nombre de crédits
 * - ZÉRO stockage obligatoire (compatible V1)
 *
 * IMPORTANT :
 * - Cette route est ADMIN ONLY
 * - À protéger plus tard (IP / secret header)
 */

export async function POST(req: Request) {
  try {
    const body = await req.json();

    /**
     * Expected payload:
     * {
     *   credits: number
     *   note?: string
     * }
     */
    const { credits, note } = body;

    if (!credits || credits <= 0) {
      return NextResponse.json(
        { error: "Invalid credits amount" },
        { status: 400 }
      );
    }

    // ─────────────────────────────────────────────
    // KEY GENERATION
    // ─────────────────────────────────────────────
    const rawKey = crypto.randomBytes(16).toString("hex").toUpperCase();

    // Format: XXXX-XXXX-XXXX
    const accessKey = `${rawKey.slice(0, 4)}-${rawKey.slice(4, 8)}-${rawKey.slice(8, 12)}`;

    // ─────────────────────────────────────────────
    // RESPONSE (NO STORAGE — YOU COPY IT)
    // ─────────────────────────────────────────────
    return NextResponse.json({
      accessKey,
      credits,
      note: note || null,
      issuedAt: new Date().toISOString(),
      warning:
        "This key is NOT stored. You must record it manually or send it immediately.",
    });
  } catch (error: any) {
    console.error("ADMIN KEY GENERATION ERROR:", error);

    return NextResponse.json(
      { error: "Key generation failed" },
      { status: 500 }
    );
  }
}
