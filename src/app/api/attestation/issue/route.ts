import { renderAttestationPdfHtml } from "@/lib/attestation-pdf-template";
import { getLocaleCopy } from "@/lib/attestation-pdf-copy";
export const runtime = "nodejs";

import Stripe from "stripe";
import QRCode from "qrcode";
import { paths, sectorLabel } from "@/lib/site-locales";
import { signCanonicalPayload, makeAttestationId } from "@/lib/sign";
import { isEuNonCoreLocale } from "@/lib/eu-flow";
import { buildEuAttestationPdf } from "@/lib/eu-attestation-pdf";
import { isAuthorizedKeyDownload } from "@/lib/key-download";
import {
  ATTESTATION_I18N,
  type AttestationLocale,
  DEFAULT_ATTESTATION_LOCALE,
} from "@/lib/attestation-i18n/index";

let stripeClient: Stripe | null = null;

function getStripeClient() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) return null;

  stripeClient ??= new Stripe(stripeSecretKey);
  return stripeClient;
}

type I18nDictionary = Record<string, unknown>;

function escapeHtml(input: string) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function toBase64Url(input: string) {
  return Buffer.from(input, "utf8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function addMonthsToISODate(date: string, months: number) {
  const parsed = new Date(`${date}T00:00:00.000Z`);
  if (Number.isNaN(parsed.getTime())) return "";
  parsed.setUTCMonth(parsed.getUTCMonth() + months);
  return parsed.toISOString().slice(0, 10);
}

function resolveLocale(input: unknown): AttestationLocale {
  const value = String(input || DEFAULT_ATTESTATION_LOCALE).toLowerCase();
  if (value === "fr" || value === "de" || value === "en") {
    return value as AttestationLocale;
  }
  return DEFAULT_ATTESTATION_LOCALE;
}

function formatNumberForLocale(value: number, locale: AttestationLocale) {
  const localeTag =
    locale === "fr" ? "fr-FR" : locale === "de" ? "de-DE" : "en-US";

  return new Intl.NumberFormat(localeTag, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

export async function GET(req: Request) {
  try {
    const pdfShiftApiKey = process.env.PDFSHIFT_API_KEY;
    const signingKey = process.env.CERTIFSCOPE_SIGNING_KEY;

    if (!pdfShiftApiKey) {
      return new Response("PDFSHIFT_API_KEY missing", { status: 500 });
    }

    if (!signingKey) {
      return new Response("CERTIFSCOPE_SIGNING_KEY missing", { status: 500 });
    }

    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return new Response("Missing session_id", { status: 400 });
    }

    let metadataRaw: Record<string, unknown> = {};

    if (sessionId.startsWith("key_")) {
      if (!isAuthorizedKeyDownload(searchParams)) return new Response("Invalid download authorization", { status: 403 });
      metadataRaw = Object.fromEntries(searchParams.entries());
    } else {
      const stripe = getStripeClient();

      if (!stripe) {
        return new Response("STRIPE_SECRET_KEY missing", { status: 500 });
      }

      const session = await stripe.checkout.sessions.retrieve(sessionId);

      if (session.payment_status !== "paid") {
        return new Response("Payment not completed", { status: 403 });
      }

      metadataRaw = (session.metadata || {}) as Record<string, unknown>;
    }

    const documentLocale = String(metadataRaw.attestationLocale || "").toLowerCase();
    if (isEuNonCoreLocale(documentLocale)) {
      const totalCO2e = Number(String(metadataRaw.totalCO2e ?? "").replace(",", "."));
      if (!metadataRaw.companyName || !metadataRaw.companySector || !metadataRaw.year || !metadataRaw.country || !Number.isFinite(totalCO2e) || totalCO2e < 0) {
        return new Response("Invalid attestation metadata", { status: 400 });
      }
      const { buffer, filename } = await buildEuAttestationPdf({
        companyName: String(metadataRaw.companyName),
        companySector: String(metadataRaw.companySector),
        entityIdentifier: String(metadataRaw.entityIdentifier || ""),
        year: String(metadataRaw.year),
        country: String(metadataRaw.country),
        totalCO2e,
        factorVersion: String(metadataRaw.factorVersion || "Certif-Scope factors v1"),
      }, documentLocale);
      return new Response(buffer, { headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      } });
    }
    const locale = resolveLocale(metadataRaw.attestationLocale);
    const externalI18n = {
      ...(((ATTESTATION_I18N[locale] ||
        ATTESTATION_I18N.en ||
        {}) as unknown) as I18nDictionary),
    };
    const copy = getLocaleCopy(locale);

    Object.assign(externalI18n, {
      standardReference: copy.standardReference,
      pageTwoIntro: copy.pageTwoIntro,
      methodologySectionTitle: copy.methodologySectionTitle,
      referencesTitle: copy.referencesTitle,
      normativeText: copy.normativeText,
      intendedUseText: copy.intendedUseText,
      explicitExclusionsText: copy.explicitExclusionsText,
    });

    const required = ["companyName", "totalCO2e", "year"];
    const missing = required.filter((key) => {
      const value = metadataRaw[key];
      return (
        value === undefined || value === null || String(value).trim() === ""
      );
    });

    if (missing.length > 0) {
      return new Response(`Missing metadata: ${missing.join(", ")}`, {
        status: 400,
      });
    }

    const totalCO2eNum = Number(String(metadataRaw.totalCO2e).replace(",", "."));
    if (Number.isNaN(totalCO2eNum)) {
      return new Response("Invalid metadata: totalCO2e must be a number", {
        status: 400,
      });
    }

    const issuerNameRaw = String(metadataRaw.issuerName || "Certif-Scope");
    const issuerSiteRaw = String(
      metadataRaw.issuerSite || "https://www.certif-scope.com"
    );
    const companyNameRaw = String(metadataRaw.companyName || "");
    const companySectorRaw = sectorLabel(String(metadataRaw.companySector || "—"), locale);
    const entityIdentifierRaw = String(metadataRaw.entityIdentifier || "—");
    const countryRaw = String(metadataRaw.country || "—");
    const yearRaw = String(metadataRaw.year || "");
    const issuedDateIso = new Date().toISOString();
    const issuedDate = issuedDateIso.slice(0, 10);
    const validityMonths = Number(metadataRaw.validityMonths || 12);
    const validUntilRaw =
      String(metadataRaw.validUntil || "").trim() ||
      addMonthsToISODate(
        issuedDate,
        Number.isFinite(validityMonths) ? validityMonths : 12
      );

    const standardRefRaw = String(
      metadataRaw.standardRef || "Certif-Scope CS-SB-v1"
    );
    const methodologyRaw = locale === "en"
      ? "Certif-Scope deterministic spend-based methodology v1.0"
      : locale === "de" ? "Deterministische ausgabenbasierte Certif-Scope-Methodik v1.0"
      : "Méthodologie déterministe Certif-Scope fondée sur les dépenses v1.0";
    const factorVersionRaw = String(
      metadataRaw.factorVersion ||
        metadataRaw.emissionFactorVersion ||
        "Certif-Scope factors v1"
    );

    const canonicalPayload = {
      issuer: "Certif-Scope" as const,
      standard: "CS-SB-v1" as const,
      attestationId: "",
      companyName: companyNameRaw,
      country: countryRaw,
      year: yearRaw,
      totalCO2e: String(totalCO2eNum),
      issuedDate: issuedDateIso,
    };

    const tempSignature = signCanonicalPayload({
      ...canonicalPayload,
      attestationId: "TEMP",
    });

    const attestationId = makeAttestationId(
      canonicalPayload.year,
      tempSignature.hashHex
    );

    const signatureResult = signCanonicalPayload({
      ...canonicalPayload,
      attestationId,
    });

    const verificationPayload = {
      certificateId: attestationId,
      issuer: "Certif-Scope",
      issuedAt: issuedDate,
      validUntil: validUntilRaw,
      methodVersion: "CS-SB-v1",
      factorVersion: factorVersionRaw,
      algorithm: signatureResult.algorithm,
      hash: signatureResult.hashHex,
      signature: signatureResult.signatureBase64,
    };

    const verificationToken = toBase64Url(JSON.stringify(verificationPayload));
    const verifyUrl = `https://www.certif-scope.com${paths[locale].verify}?v=${verificationToken}#verification-qr`;

    const verificationDisplayUrl = `https://www.certif-scope.com${paths[locale].verify}`;

    const qrDataUrl = await QRCode.toDataURL(verifyUrl, {
      errorCorrectionLevel: "H",
      width: 600,
      margin: 4,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    });

    const metadata = {
      issuerName: escapeHtml(issuerNameRaw),
      issuerSite: escapeHtml(issuerSiteRaw),
      companyName: escapeHtml(companyNameRaw),
      companySector: escapeHtml(companySectorRaw),
      entityIdentifier: escapeHtml(entityIdentifierRaw),
      country: escapeHtml(countryRaw),
      year: escapeHtml(yearRaw),
      totalCO2e: escapeHtml(formatNumberForLocale(totalCO2eNum, locale)),
      attestationId: escapeHtml(attestationId),
      issuedDate: escapeHtml(issuedDate),
      validUntil: escapeHtml(validUntilRaw),
      standardRef: escapeHtml(standardRefRaw),
      methodology: escapeHtml(methodologyRaw),
      factorVersion: escapeHtml(factorVersionRaw),
      algorithm: escapeHtml(signatureResult.algorithm),
      hash: escapeHtml(signatureResult.hashHex),
      signature: escapeHtml(signatureResult.signatureBase64),
      publicKey: escapeHtml(
        "MCowBQYDK2VwAyEAbKp2pg4wmzE5Kqo9tEwv7JJjxQyT2cBmwiLLHp4cSac="
      ),
      verificationDisplayUrl: escapeHtml(verificationDisplayUrl),
    };

    const html = renderAttestationPdfHtml({ locale, copy, externalI18n, metadata, qrDataUrl });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    const pdfResponse = await fetch("https://api.pdfshift.io/v3/convert/pdf", {
      method: "POST",
      headers: {
        "X-API-Key": pdfShiftApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: html,
        format: "A4",
        use_print: true,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!pdfResponse.ok) {
      const errorText = await pdfResponse.text();
      return new Response(errorText, { status: pdfResponse.status });
    }

    const pdfBuffer = Buffer.from(await pdfResponse.arrayBuffer());

    const safeIssuerName =
      issuerNameRaw
        .toLowerCase()
        .replace(/[^a-z0-9-]+/g, "-")
        .replace(/^-+|-+$/g, "") || "certif-scope";

    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${safeIssuerName}-${attestationId}.pdf"`,
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }

    return new Response("Internal Server Error", { status: 500 });
  }
    }
