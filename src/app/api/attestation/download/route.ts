import Stripe from "stripe";
import { pdf } from "@react-pdf/renderer";
import QRCode from "qrcode";
import crypto from "crypto";
import { Readable } from "stream";
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
       2. Stripe = vérité absolue du paiement
    ───────────────────────────────────────────── */
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return new Response("Payment not completed", { status: 403 });
    }

    /* ─────────────────────────────────────────────
       3. Reconstruction déterministe (stateless)
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

    /* ─────────────────────────────────────────────
       4. LOGO — URL ABSOLUE (SOLUTION OFFICIELLE)
    ───────────────────────────────────────────── */
    const logoUrl = `${baseUrl}/pdf/logo.png`;

    /* ─────────────────────────────────────────────
       5. QR factice (première passe)
    ───────────────────────────────────────────── */
    const dummyQr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+X2ZkAAAAASUVORK5CYII=";

    /* ─────────────────────────────────────────────
       6. PDF — PREMIÈRE PASSE (pour le hash)
    ───────────────────────────────────────────── */
    const draftDoc = AttestationPdf({
      attestationId,
      companyName,
      country,
      year,
      totalCO2e,
      methodology,
      qrDataUrl: dummyQr,
      logoUrl,
      hash: "",
    });

    const draftBuffer = Buffer.from(
      (await pdf(draftDoc).toBuffer()) as unknown as Uint8Array
    );

    /* ─────────────────────────────────────────────
       7. Hash cryptographique
    ───────────────────────────────────────────── */
    const hash = crypto
      .createHash("sha256")
      .update(draftBuffer)
      .digest("hex");

    /* ─────────────────────────────────────────────
       8. QR final
    ───────────────────────────────────────────── */
    const verificationUrl = `${baseUrl}/verify?id=${attestationId}`;
    const qrDataUrl = await QRCode.toDataURL(verificationUrl, {
      width: 72,
      margin: 1,
    });

    /* ─────────────────────────────────────────────
       9. PDF FINAL (figé)
    ───────────────────────────────────────────── */
    const finalDoc = AttestationPdf({
      attestationId,
      companyName,
      country,
      year,
      totalCO2e,
      methodology,
      qrDataUrl,
      logoUrl,
      hash,
    });

    const finalBuffer = Buffer.from(
      (await pdf(finalDoc).toBuffer()) as unknown as Uint8Array
    );

    const stream = Readable.from(finalBuffer);

    /* ─────────────────────────────────────────────
       10. Réponse HTTP
    ───────────────────────────────────────────── */
    return new Response(stream as any, {
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
