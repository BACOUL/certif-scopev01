export const runtime = "nodejs";

import Stripe from "stripe";
import QRCode from "qrcode";
import { signCanonicalPayload, makeAttestationId } from "@/lib/sign";
import {
  ATTESTATION_I18N,
  AttestationLocale,
  DEFAULT_ATTESTATION_LOCALE,
} from "@/lib/attestation-i18n/index";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

/**
 * Logo Certif-Scope en base64.
 *
 * IMPORTANT :
 * - Tu peux coller ton base64 complet ici.
 * - Tu peux le coller sur plusieurs lignes.
 * - Ne mets PAS "data:image/png;base64,".
 * - Le .replace(/\s+/g, "") supprime automatiquement les retours à la ligne.
 */
const RAW_CERTIF_SCOPE_LOGO_BASE64 = `
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
`.replace(/\s+/g, "");

const CERTIF_SCOPE_LOGO_BASE64 = RAW_CERTIF_SCOPE_LOGO_BASE64;

function escapeHtml(input: string) {
  return input
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

  if (Number.isNaN(parsed.getTime())) {
    return "";
  }

  parsed.setUTCMonth(parsed.getUTCMonth() + months);

  return parsed.toISOString().slice(0, 10);
}

export async function GET(req: Request) {
  try {
    if (!process.env.PDFSHIFT_API_KEY) {
      return new Response("PDFSHIFT_API_KEY missing", { status: 500 });
    }

    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return new Response("Missing session_id", { status: 400 });
    }

    let metadataRaw: Record<string, any> = {};

    if (sessionId.startsWith("key_")) {
      metadataRaw = Object.fromEntries(searchParams.entries());
    } else {
      const session = await stripe.checkout.sessions.retrieve(sessionId);

      if (session.payment_status !== "paid") {
        return new Response("Payment not completed", { status: 403 });
      }

      metadataRaw = session.metadata || {};
    }

    const locale =
      (metadataRaw.attestationLocale as AttestationLocale) ||
      DEFAULT_ATTESTATION_LOCALE;

    const i18n = ATTESTATION_I18N[locale] || ATTESTATION_I18N.en;

    const required = ["companyName", "totalCO2e", "year"];
    const missing = required.filter((k) => {
      const v = metadataRaw[k];
      return v === undefined || v === null || String(v).trim() === "";
    });

    if (missing.length) {
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

    const issuedDate = new Date().toISOString();

    const canonicalPayload = {
      issuer: "Certif-Scope" as const,
      standard: "CS-SB-v1" as const,
      attestationId: "",
      companyName: String(metadataRaw.companyName),
      country: String(metadataRaw.country || "—"),
      year: String(metadataRaw.year),
      totalCO2e: String(totalCO2eNum),
      issuedDate,
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

    const issuedDateForDisplay = issuedDate.slice(0, 10);
    const validityMonths = String(metadataRaw.validityMonths || "12");
    const validUntil =
      String(metadataRaw.validUntil || "").trim() ||
      addMonthsToISODate(issuedDateForDisplay, Number(validityMonths) || 12);

    const metadata = {
      attestationId,
      issuerName: escapeHtml(String(metadataRaw.issuerName || "Certif-Scope")),
      issuerSite: escapeHtml(
        String(metadataRaw.issuerSite || "https://www.certif-scope.com")
      ),
      companyName: escapeHtml(String(metadataRaw.companyName)),
      companySector: escapeHtml(String(metadataRaw.companySector || "—")),
      entityIdentifier: escapeHtml(String(metadataRaw.entityIdentifier || "—")),
      country: escapeHtml(String(metadataRaw.country || "—")),
      year: escapeHtml(String(metadataRaw.year)),
      totalCO2e: escapeHtml(String(totalCO2eNum)),
      methodology: escapeHtml(
        String(
          metadataRaw.methodology ||
            "Certif-Scope deterministic spend-based methodology v1.0"
        )
      ),
      issuedDate: escapeHtml(issuedDateForDisplay),
      validUntil: escapeHtml(validUntil),
      validityMonths: escapeHtml(validityMonths),
      standardRef: escapeHtml(
        String(metadataRaw.standardRef || "Certif-Scope CS-SB-v1")
      ),
      signature: signatureResult.signatureBase64,
      hash: signatureResult.hashHex,
      algorithm: signatureResult.algorithm,
    };

    const verificationPayload = {
      certificateId: metadata.attestationId,
      issuer: "Certif-Scope",
      issuedAt: metadata.issuedDate,
      validUntil: metadata.validUntil,
      methodVersion: "CS-SB-v1",
      factorVersion: String(
        metadataRaw.factorVersion ||
          metadataRaw.emissionFactorVersion ||
          "Certif-Scope factors v1"
      ),
      algorithm: metadata.algorithm,
      hash: metadata.hash,
      signature: metadata.signature,
    };

    const verificationToken = toBase64Url(JSON.stringify(verificationPayload));

    const verifyUrl =
      locale === "fr"
        ? `https://www.certif-scope.com/fr/verify/?v=${verificationToken}`
        : `https://www.certif-scope.com/verify/?v=${verificationToken}`;

    const verificationDisplayUrl =
      locale === "fr"
        ? "https://www.certif-scope.com/fr/verify"
        : "https://www.certif-scope.com/verify";

    const qrDataUrl = await QRCode.toDataURL(verifyUrl, {
      width: 140,
      margin: 1,
    });

    const html = `
<!doctype html>
<html lang="${locale}">
<head>
<meta charset="utf-8"/>
<title>${metadata.issuerName} — Attestation</title>
<style>
  @page {
    size: A4;
    margin: 14mm 14mm 12mm 14mm;
  }

  body {
    font-family: Inter, "Helvetica Neue", Arial, Helvetica, sans-serif;
    font-size: 9.5px;
    line-height: 1.34;
    margin: 0;
    color: #111;
    -webkit-font-smoothing: antialiased;
  }

  :root {
    --serif: "Times New Roman", Georgia, "Garamond", serif;
    --muted: #666;
    --accent: #0b2b4a;
    --border-light: #cfd8e3;
    --bg-light: #f8fafc;
  }

  .container { padding: 0; }

  .footer-static {
    width: 100%;
    font-size: 8.5px;
    color: #666;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ddd;
    padding-top: 6px;
    margin-top: 10px;
    clear: both;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 18px;
    border-bottom: 3px solid var(--accent);
    padding-bottom: 8px;
    margin-bottom: 10px;
  }

  .issuer {
    max-width: 72%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  
  .issuer-logo {
    height: 42px;
    max-width: 220px;
    width: auto;
    display: block;
    margin-bottom: 5px;
    object-fit: contain;
  }

  .issuer-site {
    font-size: 8px;
    color: var(--muted);
    margin-bottom: 3px;
  }

  .issuer-meta {
    font-size: 8px;
    color: var(--muted);
  }

  .qr {
    text-align: center;
    font-size: 8px;
    flex: 0 0 auto;
  }

  .qr img { 
    width: 82px;
    height: 82px;
    border: 1px solid #ccc;
    padding: 4px;
    background: #fff;
  }

  .title {
    text-align: center;
    margin: 7px 0 8px;
    font-family: var(--serif);
  }

  .title h1 { 
    font-size: 20px; 
    margin: 0; 
    font-weight: 700; 
    letter-spacing: 0.8px; 
    text-transform: uppercase; 
    color: var(--accent); 
  }

  .title .formal-line {
    margin-top: 3px;
    font-size: 9.5px;
    color: #222;
    font-weight: 600;
    font-family: Inter, Arial, sans-serif;
  }

  .title .subtitle {
    margin-top: 3px;
    font-size: 8.5px;
    color: var(--muted);
  }

  .title .standard-ref {
    margin-top: 3px;
    font-size: 8.5px;
    color: var(--accent);
    font-weight: 600;
  }

  .result-panel {
    margin: 3px 0 10px;
    display: flex;
    justify-content: center;
  }
  
  .result-box {
    width: 100%;
    max-width: 580px;
    background: #ffffff;
    border: 2px solid var(--accent);
    padding: 8px 14px;
    text-align: center;
  }

  .result-label {
    font-size: 8.5px;
    font-weight: 700;
    color: #222;
    margin-bottom: 3px;
    font-family: Inter, Arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .result-value {
    font-family: var(--serif);
    font-size: 24px;
    font-weight: 800;
    color: var(--accent);
    margin: 1px 0;
    letter-spacing: 1px;
  }

  .two-col {
    width: 100%;
  }

  .two-col > div {
    float: left;
    width: calc(100% - 270px);
  }

  .two-col > aside {
    float: right;
    width: 255px;
    margin-top: 0;
  }

  .clearfix::after {
    content: "";
    display: block;
    clear: both;
  }

  section {
    margin-bottom: 8px;
    padding-right: 2px;
  }
  
  .section-title {
    font-family: var(--serif);
    font-size: 10px;
    margin-bottom: 3px;
    font-weight: 700;
    color: var(--accent);
    text-transform: uppercase;
    font-variant: small-caps;
    border-bottom: 1px solid #eee;
    padding-bottom: 2px;
    display: inline-block;
    min-width: 100%;
  }

  .meta-list {
    font-size: 9.5px;
    color: #222;
  }

  .meta-list ul {
    margin-top: 2px;
    margin-bottom: 2px;
    padding-left: 13px;
  }

  .meta-list li {
    margin-bottom: 1px;
  }

  .row {
    margin-bottom: 1px;
  }

  .verify-block { 
    border: 1px solid var(--border-light); 
    padding: 8px; 
    background: var(--bg-light);
    font-size: 9px;
    margin-top: 5px;
    border-radius: 2px;
  }

  .verify-title {
    font-weight: 700;
    color: var(--accent);
    font-size: 9.5px;
    margin-bottom: 3px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
  }

  .final-box {
    border-top: 1px solid #ddd;
    margin-top: 8px;
    padding-top: 6px;
  }

  .final-stamp {
    border: 1px solid #e0e0e0;
    padding: 8px;
    font-style: italic;
    color: #222;
    background: #fff;
    font-size: 9.5px;
  }

  .muted {
    color: var(--muted);
    font-size: 8.5px;
  }

  .small {
    font-size: 8.5px;
    color: var(--muted);
    line-height: 1.25;
  }

  .result-box,
  .verify-block,
  .final-stamp {
    page-break-inside: avoid;
    break-inside: avoid;
  }
</style>
</head>
<body>
<div class="container">
  <header>
    <div class="issuer">
      ${
        CERTIF_SCOPE_LOGO_BASE64
          ? `<img src="data:image/png;base64,${CERTIF_SCOPE_LOGO_BASE64}" class="issuer-logo" alt="Issuer logo" />`
          : ""
      }
      
      <div class="issuer-site">
        <a href="${metadata.issuerSite}" target="_blank" style="color:inherit; text-decoration:none;">
          ${metadata.issuerSite}
        </a>
      </div>
      
      <div class="issuer-meta small">${i18n.headerTagline}</div>
    </div>

    <div class="qr">
      <img src="${qrDataUrl}" alt="QR verification" />
      <div class="small">${i18n.scanToVerifyLabel}</div>
    </div>
  </header>

  <div class="title">
    <h1>${i18n.title}</h1>
    <div class="formal-line">${i18n.standardReference}</div>
    <div class="standard-ref">${i18n.standardReferenceLabel} ${metadata.standardRef}</div>
    <div class="subtitle">${i18n.subtitle}</div>
  </div>

  <div class="result-panel" role="region" aria-label="Estimated emissions result">
    <div class="result-box" role="figure" aria-labelledby="result-label">
      <div id="result-label" class="result-label">${i18n.resultLabel}</div>
      <div class="result-value">${metadata.totalCO2e} tCO₂e</div>
    </div>
  </div>

  <div class="two-col clearfix">
    <div>
      <section aria-labelledby="s1">
        <div class="section-title" id="s1">${i18n.issuerSectionTitle}</div>
        <div class="meta-list">
          <div class="row"><strong>${i18n.issuerLabel}:</strong> ${metadata.issuerName}</div>
          <div class="row"><strong>${i18n.websiteLabel}:</strong> ${metadata.issuerSite}</div>
          <div class="row"><strong>${i18n.attestationReferenceLabel}:</strong> ${metadata.attestationId} <span class="small">(${i18n.uniqueIdentifierLabel})</span></div>
          <div class="row"><strong>${i18n.issuedDateLabel}:</strong> ${metadata.issuedDate}</div>
          <div class="row"><strong>${i18n.validUntilLabel}:</strong> ${metadata.validUntil}</div>
        </div>
      </section>

      <section aria-labelledby="s2">
        <div class="section-title" id="s2">${i18n.documentNatureSectionTitle}</div>
        <div class="meta-list">
          <div><strong>${i18n.documentNatureText}</strong></div>
        </div>
      </section>

      <section aria-labelledby="s3">
        <div class="section-title" id="s3">${i18n.entitySectionTitle}</div>
        <div class="meta-list">
          <div class="row"><strong>${i18n.entityNameLabel}:</strong> ${metadata.companyName}</div>
          <div class="row"><strong>${i18n.activitySectorLabel}:</strong> ${metadata.companySector}</div>
          <div class="row"><strong>${i18n.entityIdentifierLabel}:</strong> ${metadata.entityIdentifier}</div>
          <div class="row"><strong>${i18n.countryLabel}:</strong> ${metadata.country}</div>
          <div class="row"><strong>${i18n.reportingYearLabel}:</strong> ${metadata.year}</div>
        </div>
      </section>

      <section aria-labelledby="s4">
        <div class="section-title" id="s4">${i18n.scopeSectionTitle}</div>
        <div class="meta-list">
          <div><strong>${i18n.scopeDescriptionLabel}:</strong> ${i18n.scopeText}</div>
          <div style="margin-top:6px; font-size:9px; color:var(--muted);"><strong>${i18n.noteLabel}:</strong> ${i18n.scopeNote}</div>
        </div>
      </section>

      <section aria-labelledby="s5">
        <div class="section-title" id="s5">${i18n.referencesSectionTitle}</div>
        <div class="meta-list">
          <div style="margin-bottom:4px;"><em>${i18n.normativeText}</em></div>
          <ul>
            ${i18n.referencesList.map((ref: string) => `<li>${ref}</li>`).join("")}
          </ul>
        </div>
      </section>
    </div>

    <aside>
      <div class="verify-block" style="margin-top:0;">
        <div class="verify-title">${i18n.authenticityOverviewTitle}</div>
        <div class="small">${i18n.authenticityOverviewText}</div>
      </div>

      <div class="verify-block">
        <div class="verify-title">${i18n.natureOfAttestationTitle}</div>
        <div class="small">${i18n.natureOfAttestationText}</div>
      </div>

      <div class="verify-block">
        <div class="verify-title">${i18n.documentScopeSummaryTitle}</div>
        <div style="font-size:9px; color:#222; margin-top:4px;">
          ${i18n.documentScopeSummaryText}
        </div>
      </div>

      <div class="verify-block">
        <div class="verify-title">${i18n.documentValidityTitle}</div>
        <div class="small">${i18n.documentValidityText}</div>
      </div>
    </aside>
  </div>

  <div class="footer-static">
    <div>${i18n.footerText}</div>
    <div>${i18n.pageLabel} 1 / 2</div>
  </div>

  <div style="page-break-after: always;"></div>

  <div class="two-col clearfix">
    <div>
      <section aria-labelledby="s6">
        <div class="section-title" id="s6">${i18n.declarationSectionTitle}</div>
        <div class="meta-list">
          <div style="font-style:italic; margin-bottom:4px;">${i18n.formalDeclarationLabel}</div>
          <div class="row"><strong>${i18n.declarationLabel}:</strong> ${i18n.declarationText}</div>
        </div>
      </section>

      <section aria-labelledby="s7">
        <div class="section-title" id="s7">${i18n.methodologySectionTitle}</div>
        <div class="meta-list">
          <ul>
            <li><strong>${i18n.methodologyLabel}:</strong> ${metadata.methodology}</li>
            <li><strong>${i18n.limitationsLabel}:</strong> ${i18n.limitationsText}</li>
            <li><strong>${i18n.transferabilityLabel}:</strong> ${i18n.transferabilityText}</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="s8">
        <div class="section-title" id="s8">${i18n.verificationSectionTitle}</div>
        <div class="verify-block">
          <div class="verify-title">${i18n.verificationBoxTitle}</div>

          <div style="margin-top:6px;"><strong>${i18n.privacyLabel}:</strong> ${i18n.privacyText}</div>

          <div class="small" style="margin-top:6px;">
            ${i18n.pdfObjectText}
          </div>

          <div style="margin-top:6px;"><strong>${i18n.verificationPageLabel}:</strong><br/>
            <a href="${verificationDisplayUrl}"
               style="color:var(--accent); text-decoration:none; word-break:break-all;">
              ${verificationDisplayUrl}
            </a>
            <div class="small" style="margin-top:3px;">
              Utiliser le QR code ou la référence d’attestation : ${metadata.attestationId}
            </div>
          </div>

          <div class="small" style="margin-top:8px; border-top:1px solid #e0e0e0; padding-top:5px;">
            <em>${i18n.technicalVerificationNote}</em>
          </div>

          <div class="small" style="margin-top:5px;">
            <strong>${i18n.cryptographicIntegrityLabel}:</strong><br/>
            ${i18n.algorithmLabel}: ${metadata.algorithm}<br/>
            ${i18n.hashLabel}:<br/>
            <span style="word-break:break-all;">${metadata.hash}</span><br/>
            ${i18n.signatureLabel}:<br/>
            <span style="word-break:break-all;">${metadata.signature}</span>
          </div>

          <div class="small" style="margin-top:5px;">
            <strong>${i18n.publicKeyLabel}:</strong><br/>
            <span class="small">${i18n.publicKeyNote}</span><br/>
            <span style="word-break:break-all;">
              MCowBQYDK2VwAyEAbKp2pg4wmzE5Kqo9tEwv7JJjxQyT2cBmwiLLHp4cSac=
            </span>
          </div>
        </div>
      </section>

      <section aria-labelledby="s9" style="margin-top:8px;">
        <div class="section-title" id="s9">${i18n.finalClausesTitle}</div>
        <div class="final-box">
          <div class="final-stamp">
            <div><strong>${i18n.issuedPursuantText}</strong></div>
            <div style="margin-top:5px;"><strong>${i18n.legalEffectLabel}:</strong> ${i18n.legalEffectText}</div>
            <div style="margin-top:5px;"><strong>${i18n.liabilityLabel}:</strong> ${i18n.liabilityText}</div>
            <div style="margin-top:5px;"><strong>${i18n.validityPeriodLabel}:</strong> ${i18n.documentValidityText}</div>
            <div class="small" style="margin-top:6px; font-weight:bold;">${i18n.englishPrevailsNotice}</div>
            <div style="margin-top:6px; color:var(--muted); font-size:8.5px;"><strong>${i18n.noAuditText}</strong></div>
            <div style="margin-top:3px; color:var(--muted); font-size:8.5px;"><em>${i18n.methodologyNote}</em></div>
          </div>
        </div>
      </section>
    </div>

    <aside></aside>
  </div>

  <div class="footer-static">
    <div>${i18n.footerText}</div>
    <div>${i18n.pageLabel} 2 / 2</div>
  </div>
</div>
</body>
</html>
`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const pdfResponse = await fetch("https://api.pdfshift.io/v3/convert/pdf", {
      method: "POST",
      headers: {
        "X-API-Key": process.env.PDFSHIFT_API_KEY!,
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
      const error = await pdfResponse.text();
      return new Response(error, { status: pdfResponse.status });
    }

    const pdfBuffer = Buffer.from(await pdfResponse.arrayBuffer());

    const safeIssuerName = metadata.issuerName
      .toLowerCase()
      .replace(/[^a-z0-9\-]/g, "");

    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${safeIssuerName}-${metadata.attestationId}.pdf"`,
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.error(err);
    }

    return new Response("Internal Server Error", { status: 500 });
  }
      }
