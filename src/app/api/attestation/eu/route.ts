export const runtime = "nodejs";

import Stripe from "stripe";
import { isEuNonCoreLocale } from "@/lib/eu-flow";
import { buildEuAttestationPdf } from "@/lib/eu-attestation-pdf";

let stripeClient: Stripe | null = null;
function getStripeClient() {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) return null;
  stripeClient ??= new Stripe(secret);
  return stripeClient;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");
    if (!sessionId) return new Response("Missing session_id", { status: 400 });

    let metadata: Record<string, unknown>;
    if (sessionId.startsWith("key_")) {
      metadata = Object.fromEntries(searchParams.entries());
    } else {
      const stripe = getStripeClient();
      if (!stripe) return new Response("STRIPE_SECRET_KEY missing", { status: 500 });
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      if (session.payment_status !== "paid") {
        return new Response("Payment not completed", { status: 403 });
      }
      metadata = (session.metadata || {}) as Record<string, unknown>;
    }

    const locale = String(metadata.attestationLocale || "").toLowerCase();
    if (!isEuNonCoreLocale(locale)) {
      return new Response("Unsupported attestation locale", { status: 400 });
    }

    const companyName = String(metadata.companyName || "").trim();
    const companySector = String(metadata.companySector || "").trim();
    const entityIdentifier = String(metadata.entityIdentifier || "").trim();
    const year = String(metadata.year || "").trim();
    const country = String(metadata.country || "").trim();
    const totalCO2e = Number(String(metadata.totalCO2e || "").replace(",", "."));

    if (!companyName || !companySector || !year || !country || !Number.isFinite(totalCO2e) || totalCO2e < 0) {
      return new Response("Invalid attestation metadata", { status: 400 });
    }

    const { buffer, filename } = await buildEuAttestationPdf(
      {
        companyName,
        companySector,
        entityIdentifier,
        year,
        country,
        totalCO2e,
        factorVersion: String(metadata.factorVersion || "Certif-Scope factors v1"),
      },
      locale,
    );

    return new Response(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
