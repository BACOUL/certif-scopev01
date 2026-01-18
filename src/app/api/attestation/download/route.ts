import Stripe from "stripe";
import { pdf } from "@react-pdf/renderer";
import QRCode from "qrcode";
import crypto from "crypto";
import { AttestationPdf } from "@/lib/AttestationPdf";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(req: Request) {
  try {
    // 1. session_id
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return new Response("Missing session_id", { status: 400 });
    }

    // 2. Stripe = vérité absolue
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return new Response("Payment not completed", { status: 403 });
    }

    const metadata = session.metadata || {};
    const attestationId = `CS-${session.id}`;

    const companyName = metadata.companyName || "—";
    const country = metadata.country || "—";
    const year = metadata.year || "—";
    const totalCO2e = Number(metadata.totalCO2e ?? 0);
    const methodology =
      metadata.methodology || "Spend-based deterministic estimation";

    // 3. QR code
    const qrDataUrl = await QRCode.toDataURL(
      `https://certif-scope.io/verify?id=${attestationId}`,
      { width: 72, margin: 1 }
    );

    // 4. PDF (SANS LOGO EN PARAMÈTRE)
    const doc = AttestationPdf({
      attestationId,
      companyName,
      country,
      year,
      qrDataUrl,
      totalCO2e,
      methodology,
    });

    const buffer = Buffer.from(
      (await pdf(doc).toBuffer()) as unknown as Uint8Array
    );

    // 5. Réponse
    return new Response(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="certif-scope-${attestationId}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("PDF error:", err);
    return new Response("Failed to generate attestation", { status: 500 });
  }
}
