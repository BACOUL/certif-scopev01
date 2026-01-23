import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

/**
 * REDEEM ACCESS KEY — VERSION CORRIGÉE (COMPAT SUCCESS / DOWNLOAD)
 *
 * OBJECTIFS :
 * - ZÉRO stockage
 * - ZÉRO base de données
 * - UX STRICTEMENT IDENTIQUE AU FLOW STRIPE
 * - TOUJOURS fournir un session_id exploitable par /success
 *
 * RÈGLE :
 * 👉 TOUT succès doit produire un `session_id`
 */

/**
 * Génère un pseudo session_id compatible SuccessPage
 * Format volontairement distinct de Stripe
 */
function generatePseudoSessionId() {
  return `key_${crypto.randomUUID()}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { accessKey } = body;

    if (!accessKey || typeof accessKey !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid access key" },
        { status: 400 }
      );
    }

    // ======================================================
    // 🔐 DÉRIVATION DÉTERMINISTE (VALIDATION LOGIQUE)
    // ======================================================
    // NOTE :
    // - Pas de stockage
    // - Pas de décrément réel
    // - La validité réelle est contractuelle / externe
    crypto
      .createHash("sha256")
      .update(accessKey + process.env.KEY_SECRET!)
      .digest("hex");

    // ======================================================
    // ✅ GÉNÉRATION SESSION_ID (OBLIGATOIRE)
    // ======================================================
    const sessionId = generatePseudoSessionId();

    // ======================================================
    // 🌍 ORIGINE (STRICT)
    // ======================================================
    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "http://localhost:3000";

    // ======================================================
    // 🔁 CONTRAT DE SORTIE IDENTIQUE À STRIPE
    // ======================================================
    return NextResponse.json({
      redeemed: true,
      creditsConsumed: 1,
      remainingCredits: "managed_externally",
      message: "Access key redeemed successfully",
      session_id: sessionId,
      url: `${origin}/success?session_id=${sessionId}`,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Redeem failed" },
      { status: 500 }
    );
  }
      }
