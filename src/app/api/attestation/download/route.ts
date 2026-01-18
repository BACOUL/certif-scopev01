import Stripe from "stripe";
import { pdf } from "@react-pdf/renderer";
import QRCode from "qrcode";
import crypto from "crypto";
import { AttestationPdf } from "@/lib/AttestationPdf";

export const runtime = "nodejs";

// Stripe = source de vérité unique
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

/**
 * Détermination robuste de l’URL de base
 */
function getBaseUrl(req: Request): string {
  const proto = req.headers.get("x-forwarded-proto");
  const host = req.headers.get("x-forwarded-host");

  if (proto && host) {
    return `${proto}://${host}`;
  }

  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }

  throw new Error("Unable to determine base URL");
}

export async function GET(req: Request) {
  try {
    // ─────────────────────────────────────────────
    // 1. Lecture du session_id
    // ─────────────────────────────────────────────
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return new Response("Missing session_id", { status: 400 });
    }

    // ─────────────────────────────────────────────
    // 2. Stripe = vérité absolue du paiement
    // ─────────────────────────────────────────────
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return new Response("Payment not completed", { status: 403 });
    }

    // ─────────────────────────────────────────────
    // 3. Reconstruction déterministe (stateless)
    //    → calcul déjà fait côté client
    // ─────────────────────────────────────────────
    const metadata = session.metadata || {};
    const attestationId = `CS-${session.id}`;

    const companyName = metadata.companyName || "—";
    const country = metadata.country || "—";
    const year = metadata.year || "—";

    const totalCO2e = String(metadata.totalCO2e || "—");
    const methodology =
      metadata.methodology || "Spend-based deterministic estimation";

    const baseUrl = getBaseUrl(req);

    // QR temporaire (obligatoire pour la 1ʳᵉ passe PDF)
    const dummyQr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+X2ZkAAAAASUVORK5CYII=";

    // ─────────────────────────────────────────────
    // 4. Génération PDF — PREMIÈRE PASSE
    // ─────────────────────────────────────────────
    const draftDoc = AttestationPdf({
      attestationId,
      companyName,
      country,
      year,
      totalCO2e,
      methodology,
      qrDataUrl: dummyQr,
      hash: "",
    });

    const draftOutput = await pdf(draftDoc).toBuffer();

    // ⚠️ Normalisation CRITIQUE
    const draftBuffer = Buffer.isBuffer(draftOutput)
      ? draftOutput
      : Buffer.from(draftOutput);

    // ─────────────────────────────────────────────
    // 5. Calcul de l’empreinte cryptographique
    // ─────────────────────────────────────────────
    const hash = crypto
      .createHash("sha256")
      .update(draftBuffer)
      .digest("hex");

    // ─────────────────────────────────────────────
    // 6. Génération URL de vérification + QR final
    // ─────────────────────────────────────────────
    const verificationUrl = `${baseUrl}/verify?id=${attestationId}`;

    const qrDataUrl = await QRCode.toDataURL(verificationUrl, {
      width: 72,
      margin: 1,
    });

    // ─────────────────────────────────────────────
    // 7. Génération PDF FINAL (figé)
    // ─────────────────────────────────────────────
    const finalDoc = AttestationPdf({
      attestationId,
      companyName,
      country,
      year,
      totalCO2e,
      methodology,
      hash,
      qrDataUrl,
    });

    const finalOutput = await pdf(finalDoc).toBuffer();
    const finalBuffer = Buffer.isBuffer(finalOutput)
      ? finalOutput
      : Buffer.from(finalOutput);

    // ─────────────────────────────────────────────
    // 8. Réponse HTTP
    // ─────────────────────────────────────────────
    return new Response(finalBuffer as any, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="certif-scope-${attestationId}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("❌ Attestation PDF error:", err);
    return new Response("Failed to generate attestation", { status: 500 });
  }
      }
