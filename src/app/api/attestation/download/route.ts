import Stripe from "stripe";
import { pdf } from "@react-pdf/renderer";
import QRCode from "qrcode";
import crypto from "crypto";
import { AttestationPdf } from "@/lib/AttestationPdf";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

/**
 * Base URL robuste (Vercel / prod / local)
 */
function getBaseUrl(req: Request): string {
  const proto = req.headers.get("x-forwarded-proto");
  const host = req.headers.get("x-forwarded-host");

  if (proto && host) return `${proto}://${host}`;
  if (process.env.NEXT_PUBLIC_BASE_URL) return process.env.NEXT_PUBLIC_BASE_URL;

  throw new Error("Base URL not resolvable");
}

export async function GET(req: Request) {
  try {
    /* ─────────────────────────────────────────────
       1. session_id
    ───────────────────────────────────────────── */
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return new Response("Missing session_id", { status: 400 });
    }

    /* ─────────────────────────────────────────────
       2. Stripe = source de vérité
    ───────────────────────────────────────────── */
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return new Response("Payment not completed", { status: 403 });
    }

    /* ─────────────────────────────────────────────
       3. Reconstruction déterministe
    ───────────────────────────────────────────── */
    const metadata = session.metadata || {};

    const attestationId = `CS-${session.id}`;
    const companyName = metadata.companyName || "—";
    const country = metadata.country || "—";
    const year = metadata.year || "—";

    const totalCO2e = Number(metadata.totalCO2e ?? 0);
    const methodology =
      metadata.methodology || "Spend-based deterministic estimation";

    const baseUrl = getBaseUrl(req);
    const verificationUrl = `${baseUrl}/verify?id=${attestationId}`;

    /* ─────────────────────────────────────────────
       4. Hash déterministe (SANS PDF)
    ───────────────────────────────────────────── */
    const hashSource = JSON.stringify({
      attestationId,
      companyName,
      country,
      year,
      totalCO2e,
      methodology,
    });

    const hash = crypto
      .createHash("sha256")
      .update(hashSource)
      .digest("hex");

    /* ─────────────────────────────────────────────
       5. QR code
    ───────────────────────────────────────────── */
    const qrDataUrl = await QRCode.toDataURL(verificationUrl, {
      width: 72,
      margin: 1,
    });

    /* ─────────────────────────────────────────────
       6. PDF (UN SEUL RENDU)
    ───────────────────────────────────────────── */
    const doc = AttestationPdf({
      attestationId,
      companyName,
      country,
      year,
      totalCO2e,
      methodology,
      hash,
      qrDataUrl,
    });

    const buffer = (await pdf(doc).toBuffer()) as unknown as Uint8Array;

    /* ─────────────────────────────────────────────
       7. Réponse HTTP
    ───────────────────────────────────────────── */
    return new Response(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="certif-scope-${attestationId}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("❌ Attestation generation failed:", err);
    return new Response("Failed to generate attestation", { status: 500 });
  }
}
