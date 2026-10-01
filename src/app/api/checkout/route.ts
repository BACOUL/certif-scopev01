import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import Stripe from "stripe";
import { SITE_LOCALES, paths, siteLocale as resolveSiteLocale, sectorLabel } from "@/lib/site-locales";

export const runtime = "nodejs";

let stripeClient: Stripe | null = null;
function getStripeClient() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) return null;
  stripeClient ??= new Stripe(stripeSecretKey);
  return stripeClient;
}

const ALLOWED_ATTESTATION_LOCALES = SITE_LOCALES;
type AttestationLocale = (typeof ALLOWED_ATTESTATION_LOCALES)[number];

export async function POST(req: Request) {
  try {
    const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID;
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    if (!STRIPE_PRICE_ID) return NextResponse.json({ error: "MISSING_STRIPE_PRICE_ID" }, { status: 500 });
    if (!BASE_URL) return NextResponse.json({ error: "MISSING_BASE_URL" }, { status: 500 });

    const stripe = getStripeClient();
    if (!stripe) return NextResponse.json({ error: "MISSING_STRIPE_SECRET_KEY" }, { status: 500 });

    const body = await req.json();
    const {
      companyName, companySector, entityIdentifier, year, country, totalCO2e,
      methodology, attestationLocale, emailForDelivery, siteLocale,
    } = body;

    if (!companyName || !companySector || !year || !country) {
      return NextResponse.json({ error: "MISSING_REQUIRED_FIELDS" }, { status: 400 });
    }
    if (totalCO2e === undefined || Number.isNaN(Number(totalCO2e)) || !methodology) {
      return NextResponse.json({ error: "INVALID_CO2_RESULT" }, { status: 400 });
    }
    if (!attestationLocale || !ALLOWED_ATTESTATION_LOCALES.includes(attestationLocale as AttestationLocale)) {
      return NextResponse.json({ error: "INVALID_LOCALE" }, { status: 400 });
    }

    const cookieStore = await cookies();
    const uiLocale = resolveSiteLocale(siteLocale);
    const campaignRef = String(cookieStore.get("certif_scope_ref")?.value || "").slice(0, 500);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_creation: "always",
      invoice_creation: { enabled: true },
      line_items: [{ price: STRIPE_PRICE_ID, quantity: 1 }],
      metadata: {
        product: "certif-scope-attestation",
        companyName: String(companyName),
        companySector: sectorLabel(String(companySector), attestationLocale),
        entityIdentifier: String(entityIdentifier || ""),
        year: String(year),
        country: String(country),
        totalCO2e: String(totalCO2e),
        methodology: String(methodology),
        attestationLocale: String(attestationLocale),
        referenceLocale: "en",
        siteLocale: uiLocale,
        ...(emailForDelivery && { emailForDelivery: String(emailForDelivery) }),
        ...(campaignRef && { campaignRef }),
      },
      locale: uiLocale,
      success_url: `${BASE_URL.replace(/\/$/, "")}${paths[uiLocale].success}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL.replace(/\/$/, "")}${paths[uiLocale].generate}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("STRIPE_CHECKOUT_ERROR", err);
    return NextResponse.json({ error: "STRIPE_CHECKOUT_FAILED" }, { status: 500 });
  }
}
