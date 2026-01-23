import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs"; // required for Stripe

// ======================================================
// STRIPE CLIENT
// ======================================================
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// ======================================================
// CONFIG — SOURCE DE VÉRITÉ
// ======================================================
const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID!;

if (!STRIPE_PRICE_ID) {
  throw new Error("Missing STRIPE_PRICE_ID env variable");
}

// ======================================================
// LANGUES AUTORISÉES (ISO 639-1)
// ======================================================
const ALLOWED_ATTESTATION_LOCALES = [
  "en",
  "fr",
  "de",
  "es",
  "it",
  "pt",
  "nl",
  "pl",
  "cs",
  "sk",
  "hu",
  "ro",
  "bg",
  "hr",
  "sl",
  "et",
  "lv",
  "lt",
  "mt",
  "el",
  "fi",
  "sv",
  "da",
  "ga",
] as const;

type AttestationLocale = (typeof ALLOWED_ATTESTATION_LOCALES)[number];

// ======================================================
// CHECKOUT ENDPOINT
// ======================================================
export async function POST(req: Request) {
  try {
    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "http://localhost:3000";

    const body = await req.json();

    /**
     * EXPECTED PAYLOAD (frontend)
     * {
     *   companyName: string
     *   companySector: string
     *   entityIdentifier?: string
     *   year: string
     *   country: string
     *   totalCO2e: number
     *   methodology: string
     *   attestationLocale: AttestationLocale
     * }
     */
    const {
      companyName,
      companySector,
      entityIdentifier,
      year,
      country,
      totalCO2e,
      methodology,
      attestationLocale,
    } = body;

    // ==================================================
    // VALIDATION STRICTE
    // ==================================================
    if (!companyName) {
      return NextResponse.json(
        { error: "Missing company name" },
        { status: 400 }
      );
    }

    if (!companySector) {
      return NextResponse.json(
        { error: "Missing company sector" },
        { status: 400 }
      );
    }

    if (!year || !country) {
      return NextResponse.json(
        { error: "Missing contextual information" },
        { status: 400 }
      );
    }

    if (
      totalCO2e === undefined ||
      totalCO2e === null ||
      Number.isNaN(Number(totalCO2e)) ||
      !methodology
    ) {
      return NextResponse.json(
        { error: "Missing or invalid calculation result" },
        { status: 400 }
      );
    }

    if (
      !attestationLocale ||
      !ALLOWED_ATTESTATION_LOCALES.includes(attestationLocale)
    ) {
      return NextResponse.json(
        { error: "Invalid or missing attestation language" },
        { status: 400 }
      );
    }

    // ==================================================
    // CONTEXTE NON PERSISTANT
    // ==================================================
    const draftId = `draft_${Date.now()}`;

    // ==================================================
    // STRIPE CHECKOUT (SOURCE DE VÉRITÉ UNIQUE)
    // ==================================================
    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price: STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],

      metadata: {
        // interne
        draftId,

        // entité
        companyName: String(companyName),
        companySector: String(companySector),
        entityIdentifier: String(entityIdentifier || ""),

        // contexte
        year: String(year),
        country: String(country),

        // résultat
        totalCO2e: String(totalCO2e),
        methodology: String(methodology),

        // langues
        attestationLocale,
        referenceLocale: "en",
      },

      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/generate`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe checkout error:", error);

    return NextResponse.json(
      { error: error?.message || "Stripe checkout failed" },
      { status: 500 }
    );
  }
  }
