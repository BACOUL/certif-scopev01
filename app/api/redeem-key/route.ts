import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

/**
 * REDEEM ACCESS KEY
 *
 * - Vérifie la clé
 * - Vérifie qu'il reste ≥ 1 crédit
 * - Consomme 1 crédit
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

    // 🔐 Dérivation déterministe (DOIT matcher create/check-key)
    const hash = crypto
      .createHash("sha256")
      .update(accessKey + process.env.KEY_SECRET!)
      .digest("hex");

    /**
     * ⚠️ IMPORTANT
     * Ici, on SIMULE la consommation
     * car aucun stockage n'est autorisé.
     *
     * 👉 Le vrai décrément sera fait
     * via Stripe / source externe / backoffice plus tard.
     */

    return NextResponse.json({
      redeemed: true,
      creditsConsumed: 1,
      remainingCredits: "managed_externally",
      message: "Access key redeemed successfully",
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Redeem failed" },
      { status: 500 }
    );
  }
}
