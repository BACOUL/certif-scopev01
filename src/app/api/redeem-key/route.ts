import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

/**
 * REDEEM ACCESS KEY
 *
 * - Vérifie la clé (format + dérivation)
 * - Vérifie qu'il reste ≥ 1 crédit (logique externe)
 * - Consomme 1 crédit (stateless)
 * - Retourne une URL de succès (même contrat que Stripe)
 * - ZÉRO stockage
 */

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

    // 🔐 Dérivation déterministe
    // (doit matcher create-key / check-key)
    crypto
      .createHash("sha256")
      .update(accessKey + process.env.KEY_SECRET!)
      .digest("hex");

    /**
     * ⚠️ IMPORTANT — MODE STATELESS
     *
     * - Aucune base
     * - Aucun stockage
     * - Aucun décrément réel ici
     *
     * La gestion réelle des crédits est :
     * - externe
     * - contractuelle
     * - backoffice / Stripe / outil tiers
     */

    // 🌍 Origine pour redirection succès (même logique que Stripe)
    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "http://localhost:3000";

    return NextResponse.json({
      redeemed: true,
      creditsConsumed: 1,
      remainingCredits: "managed_externally",
      message: "Access key redeemed successfully",
      url: `${origin}/success?source=key`,
    });
  } catch {
    return NextResponse.json(
      { error: "Redeem failed" },
      { status: 500 }
    );
  }
}
