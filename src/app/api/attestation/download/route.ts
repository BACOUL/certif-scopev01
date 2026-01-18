import { NextResponse } from "next/server";
import Stripe from "stripe";
import { pdf } from "@react-pdf/renderer";
import QRCode from "qrcode";
import { AttestationPdf } from "@/lib/AttestationPdf";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return new NextResponse("Missing session_id", { status: 400 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return new NextResponse("Payment not completed", { status: 403 });
    }

    const metadata = session.metadata || {};
    const attestationId = `CS-${session.id}`;

    const verificationUrl =
      `${process.env.NEXT_PUBLIC_BASE_URL}/verify?id=${attestationId}`;

    const qrDataUrl = await QRCode.toDataURL(verificationUrl);

    const doc = AttestationPdf({
      attestationId,
      companyName: metadata.companyName || "—",
      country: metadata.country || "—",
      year: metadata.year || "—",
      verificationUrl,
      qrDataUrl,
    });

    const buffer = await pdf(doc).toBuffer();

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="certif-scope-${attestationId}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("PDF ERROR:", err);
    return new NextResponse("Failed to generate attestation", { status: 500 });
  }
}
