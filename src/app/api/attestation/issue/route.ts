import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    // 1️⃣ Lire le session_id envoyé par le bouton
    const { sessionId } = await req.json();

    if (!sessionId) {
      return new Response("Missing sessionId", { status: 400 });
    }

    // 2️⃣ Stripe = source de vérité
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return new Response("Payment not completed", { status: 403 });
    }

    const metadata = session.metadata || {};

    // 3️⃣ Construire les données EXACTES attendues par template.ts
    const payload = {
      attestationId: `CS-${session.id}`,
      companyName: metadata.companyName || "—",
      country: metadata.country || "—",
      year: metadata.year || "—",
      totalCO2e: Number(metadata.totalCO2e ?? 0),
      methodology:
        metadata.methodology || "Spend-based deterministic estimation",
      hash: undefined,
    };

    // 4️⃣ Appeler le moteur PDF (HTML → PDFShift)
    const pdfResponse = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/generate-pdf`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!pdfResponse.ok) {
      const error = await pdfResponse.text();
      return new Response(error, { status: 500 });
    }

    const pdfBuffer = await pdfResponse.arrayBuffer();

    // 5️⃣ Renvoyer le PDF au navigateur
    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="certif-scope-${payload.attestationId}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("Issue PDF error:", err);
    return new Response("Failed to issue attestation", { status: 500 });
  }
}
