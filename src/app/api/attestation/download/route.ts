import { NextResponse } from "next/server";
import Stripe from "stripe";
import { generateAttestationPdf } from "@/lib/generateAttestationPdf";

export const runtime = "nodejs"; // obligatoire (Stripe + Puppeteer)

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return new NextResponse("Missing session_id", { status: 400 });
    }

    // 🔒 Revalidation du paiement côté Stripe (source de vérité unique)
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return new NextResponse("Payment not completed", { status: 403 });
    }

    const metadata = session.metadata || {};
    const attestationId = `CS-${session.id}`;

    const pdf = await generateAttestationPdf({
      attestationId,
      companyName: metadata.companyName || "—",
      country: metadata.country || "—",
      year: metadata.year || "—",
      totalEmissions: Number(metadata.totalEmissions || 0),
      verificationUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/verify?id=${attestationId}`,
    });

    return new NextResponse(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="certif-scope-${attestationId}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error: any) {
    console.error("❌ Attestation download error:", error);
    return new NextResponse("Failed to generate attestation", { status: 500 });
  }
}
