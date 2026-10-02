export const runtime = "nodejs";

import { buildEuAttestationPdf } from "@/lib/eu-attestation-pdf";
import {
  DEFAULT_COUNTRY_BY_LOCALE,
  getEuFlowCopy,
  isEuNonCoreLocale,
  localizedCountryName,
} from "@/lib/eu-flow";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const locale = String(searchParams.get("lang") || "").toLowerCase();
    if (!isEuNonCoreLocale(locale)) {
      return new Response("Unsupported sample locale", { status: 400 });
    }

    const c = getEuFlowCopy(locale);
    const year = String(new Date().getFullYear() - 1);
    const countryCode = DEFAULT_COUNTRY_BY_LOCALE[locale];
    const { buffer, filename } = await buildEuAttestationPdf(
      {
        companyName: "Example Company",
        companySector: c.sectors.professional_services,
        entityIdentifier: "DEMO-001",
        year,
        country: localizedCountryName(locale, countryCode),
        totalCO2e: 12.4,
      },
      locale,
      { sample: true },
    );

    return new Response(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${filename}"`,
        "Cache-Control": "public, max-age=3600",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
