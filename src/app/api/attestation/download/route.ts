import Stripe from "stripe";
import { pdf } from "@react-pdf/renderer";
import QRCode from "qrcode";
import { AttestationPdf } from "@/lib/AttestationPdf";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(req: Request) {
  try {
    // ─────────────────────────────────────────────
    // 1. Lecture du session_id depuis l’URL
    // ─────────────────────────────────────────────
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return new Response("Missing session_id", { status: 400 });
    }

    // ─────────────────────────────────────────────
    // 2. Stripe = source de vérité absolue
    // ─────────────────────────────────────────────
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return new Response("Payment not completed", { status: 403 });
    }

    // ─────────────────────────────────────────────
    // 3. Reconstruction déterministe (sans stockage)
    // ─────────────────────────────────────────────
    const metadata = session.metadata || {};
    const attestationId = `CS-${session.id}`;

    const verificationUrl =
      `${process.env.NEXT_PUBLIC_BASE_URL}/verify?id=${attestationId}`;

    // QR code généré à la volée (aucune persistance)
    const qrDataUrl = await QRCode.toDataURL(verificationUrl, {
      margin: 1,
      width: 200,
    });

    // ─────────────────────────────────────────────
    // 4. Génération du document PDF
    // ─────────────────────────────────────────────
    const doc = AttestationPdf({
      attestationId,
      companyName: metadata.companyName || "—",
      country: metadata.country || "—",
      year: metadata.year || "—",
      verificationUrl,
      qrDataUrl,
    });

    const buffer = await pdf(doc).toBuffer();

    // ─────────────────────────────────────────────
    // 5. Réponse HTTP CORRECTE (pas NextResponse)
    // ─────────────────────────────────────────────
    return new Response(buffer as any, {
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
