import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs"; // required (Stripe)

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

/**
 * Langues autorisées pour l’attestation
 * (ISO 639-1 – UE + anglais)
 */
const ALLOWED_ATTESTATION_LOCALES = [
  "en", // English (reference)
  "fr", // French
  "de", // German
  "es", // Spanish
  "it", // Italian
  "pt", // Portuguese
  "nl", // Dutch
  "pl", // Polish
  "cs", // Czech
  "sk", // Slovak
  "hu", // Hungarian
  "ro", // Romanian
  "bg", // Bulgarian
  "hr", // Croatian
  "sl", // Slovenian
  "et", // Estonian
  "lv", // Latvian
  "lt", // Lithuanian
  "mt", // Maltese
  "el", // Greek
  "fi", // Finnish
  "sv", // Swedish
  "da", // Danish
  "ga", // Irish
] as const;

type AttestationLocale = (typeof ALLOWED_ATTESTATION_LOCALES)[number];

export async function POST(req: Request) {
  try {
    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "http://localhost:3000";

    const body = await req.json();

    const {
      company,
      year,
      country,
      result, // fixed calculation result
      attestationLocale, // ⬅️ CHOISI PAR L’UTILISATEUR
    } = body;

    // ─────────────────────────────────────────────
    // VALIDATION
    // ─────────────────────────────────────────────
    if (!company?.name) {
      return NextResponse.json(
        { error: "Missing company name" },
        { status: 400 }
      );
    }

    if (!company?.sector) {
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
      result?.totalCO2e === undefined ||
      result?.totalCO2e === null ||
      !result?.methodology
    ) {
      return NextResponse.json(
        { error: "Missing calculation result" },
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

      metadata: {
        // internal context
        draftId,

        // entity identification (lightweight)
        companyName: String(company.name),
        companySector: String(company.sector),
        companyId: String(company.id || ""),

        // contextual data
        year: String(year),
        country: String(country),

        // attested result (immutable)
        totalCO2e: String(result.totalCO2e),
        methodology: String(result.methodology),

        // 🌍 attestation language (USER-SELECTED)
        attestationLocale: attestationLocale,

        // legal reference language (explicit)
        referenceLocale: "en",
      },

      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: 8900,
            product_data: {
              name: "CO₂e Attestation — Certif-Scope",
              description:
                "Indicative spend-based CO₂e attestation (PDF, non-audited, one-time issuance)",
            },
          },
          quantity: 1,
        },
      ],

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
