import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs"; // required (Stripe)

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

/**
 * Langues autorisées pour l’attestation
 * (ISO 639-1 – UE + anglais)
 */
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

export async function POST(req: Request) {
  try {
    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "http://localhost:3000";

    const body = await req.json();

    /**
     * EXPECTED PAYLOAD (FLAT — aligned with frontend)
     * {
     *   priceId: string                // Stripe price_id (source of truth)
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
      priceId,
      companyName,
      companySector,
      entityIdentifier,
      year,
      country,
      totalCO2e,
      methodology,
      attestationLocale,
    } = body;

    // ─────────────────────────────────────────────
    // VALIDATION
    // ─────────────────────────────────────────────
    if (!priceId) {
      return NextResponse.json(
        { error: "Missing Stripe priceId" },
        { status: 400 }
      );
    }

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

    // ─────────────────────────────────────────────
    // BUSINESS CONTEXT (NON-PERSISTENT)
    // ─────────────────────────────────────────────
    const draftId = `draft_${Date.now()}`;

    // ─────────────────────────────────────────────
    // STRIPE CHECKOUT (SOURCE OF TRUTH)
    // ─────────────────────────────────────────────
    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price: priceId, // Stripe product/price defines type (single vs pack)
          quantity: 1,
        },
      ],

      metadata: {
        // internal
        draftId,

        // entity
        companyName: String(companyName),
        companySector: String(companySector),
        entityIdentifier: String(entityIdentifier || ""),

        // context
        year: String(year),
        country: String(country),

        // result
        totalCO2e: String(totalCO2e),
        methodology: String(methodology),

        // language
        attestationLocale: attestationLocale,
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
