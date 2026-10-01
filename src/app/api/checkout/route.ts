import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import Stripe from "stripe";
import {
  SITE_LOCALES,
  paths,
  sectorLabel,
  type SiteLocale,
} from "@/lib/site-locales";
import { isEuLocale, type EuLocale } from "@/lib/eu-locales-core";

export const runtime = "nodejs";

let stripeClient: Stripe | null = null;
function getStripeClient() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) return null;
  stripeClient ??= new Stripe(stripeSecretKey);
  return stripeClient;
}

function isCoreLocale(locale: string): locale is SiteLocale {
  return SITE_LOCALES.includes(locale as SiteLocale);
}

function successPath(locale: EuLocale): string {
  return isCoreLocale(locale) ? paths[locale].success : `/${locale}/success/`;
}

function generatePath(locale: EuLocale): string {
  return isCoreLocale(locale) ? paths[locale].generate : `/${locale}/generate/`;
}

export async function POST(req: Request) {
  try {
    const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID;
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    if (!STRIPE_PRICE_ID) {
      return NextResponse.json({ error: "MISSING_STRIPE_PRICE_ID" }, { status: 500 });
    }
    if (!BASE_URL) {
      return NextResponse.json({ error: "MISSING_BASE_URL" }, { status: 500 });
    }

    const stripe = getStripeClient();
    if (!stripe) {
      return NextResponse.json({ error: "MISSING_STRIPE_SECRET_KEY" }, { status: 500 });
    }

    const body = await req.json();
    const {
      companyName,
      companySector,
      entityIdentifier,
      year,
      country,
      countryCode,
      totalCO2e,
      methodology,
      attestationLocale,
      emailForDelivery,
      siteLocale,
    } = body;

    if (!companyName || !companySector || !year || !country) {
      return NextResponse.json({ error: "MISSING_REQUIRED_FIELDS" }, { status: 400 });
    }
    if (totalCO2e === undefined || Number.isNaN(Number(totalCO2e)) || !methodology) {
      return NextResponse.json({ error: "INVALID_CO2_RESULT" }, { status: 400 });
    }

    const requestedAttestationLocale = String(attestationLocale || "").toLowerCase();
    if (!isEuLocale(requestedAttestationLocale)) {
      return NextResponse.json({ error: "INVALID_LOCALE" }, { status: 400 });
    }

    const requestedSiteLocale = String(siteLocale || "").toLowerCase();
    const uiLocale: EuLocale = isEuLocale(requestedSiteLocale)
      ? requestedSiteLocale
      : "fr";

    const metadataSector = isCoreLocale(requestedAttestationLocale)
      ? sectorLabel(String(companySector), requestedAttestationLocale)
      : String(companySector);

    const cookieStore = await cookies();
    const campaignRef = String(
      cookieStore.get("certif_scope_ref")?.value || "",
    ).slice(0, 500);
    const base = BASE_URL.replace(/\/$/, "");

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_creation: "always",
      invoice_creation: { enabled: true },
      line_items: [{ price: STRIPE_PRICE_ID, quantity: 1 }],
      metadata: {
        product: "certif-scope-attestation",
        companyName: String(companyName),
        companySector: metadataSector,
        entityIdentifier: String(entityIdentifier || ""),
        year: String(year),
        country: String(country),
        ...(countryCode && { countryCode: String(countryCode) }),
        totalCO2e: String(totalCO2e),
        methodology: String(methodology),
        attestationLocale: requestedAttestationLocale,
        referenceLocale: "en",
        siteLocale: uiLocale,
        ...(emailForDelivery && { emailForDelivery: String(emailForDelivery) }),
        ...(campaignRef && { campaignRef }),
      },
      // Stripe supports 23 EU languages; Irish uses the English payment UI.
      locale: uiLocale === "ga" ? "en" : uiLocale,
      success_url: `${base}${successPath(uiLocale)}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${base}${generatePath(uiLocale)}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("STRIPE_CHECKOUT_ERROR", err);
    return NextResponse.json({ error: "STRIPE_CHECKOUT_FAILED" }, { status: 500 });
  }
}
