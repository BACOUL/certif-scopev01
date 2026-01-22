export const runtime = "nodejs";

import QRCode from "qrcode";
import {
  ATTESTATION_I18N,
  AttestationLocale,
  DEFAULT_ATTESTATION_LOCALE,
} from "@/lib/attestation-i18n/index";

// 1️⃣ MODE SAMPLE ACTIVÉ
const IS_SAMPLE = true;

// Paste only the base64 content of your logo here (no data: prefix, no newlines)
const CERTIF_SCOPE_LOGO_BASE64 = "";

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function GET(req: Request) {
  try {
    // 1️⃣ VERROU DE SÉCURITÉ SAMPLE
    if (!IS_SAMPLE) {
      return new Response("Sample mode disabled", { status: 403 });
    }

    if (!process.env.PDFSHIFT_API_KEY) {
      return new Response("PDFSHIFT_API_KEY missing", { status: 500 });
    }

    // 2️⃣ STRIPE NEUTRALISÉ (Simulation de session)
    const session = {
      metadata: {
        companyName: "Example Company Ltd (Fictional)",
        companySector: "Example Sector",
        entityIdentifier: "N/A",
        country: "EU (Example)",
        year: "20XX",
        totalCO2e: "123.4",
        methodology: "Sample methodology — illustrative only",
        attestationLocale: "en",
        issuerName: "Certif-Scope (Sample)",
        issuerSite: "https://certif-scope.com/sample",
        validityMonths: "N/A",
        standardRef: "SAMPLE — CS-SB-v1"
      },
    };

    const metadataRaw = session.metadata;

    // 3️⃣ LANGUE
    const locale =
      (metadataRaw.attestationLocale as AttestationLocale) ||
      DEFAULT_ATTESTATION_LOCALE;

    const i18n = ATTESTATION_I18N[locale] || ATTESTATION_I18N.en;

    // 4️⃣ CRYPTO NEUTRALISÉE
    const issuedDate = "20XX-XX-XX"; // Date fictive
    const attestationId = "SAMPLE-000000";

    const signatureResult = {
      signatureBase64: "SAMPLE — NO CRYPTOGRAPHIC SIGNATURE",
      hashHex: "SAMPLE — INVALID HASH",
      algorithm: "N/A",
    };

    // 5️⃣ MÉTADONNÉES SAMPLE
    const metadata = {
      attestationId: attestationId,
      issuerName: escapeHtml(metadataRaw.issuerName),
      issuerSite: escapeHtml(metadataRaw.issuerSite),
      companyName: escapeHtml(metadataRaw.companyName),
      companySector: escapeHtml(metadataRaw.companySector),
      entityIdentifier: escapeHtml(metadataRaw.entityIdentifier),
      country: escapeHtml(metadataRaw.country),
      year: escapeHtml(metadataRaw.year),
      totalCO2e: escapeHtml(metadataRaw.totalCO2e),
      methodology: escapeHtml(metadataRaw.methodology),
      issuedDate: escapeHtml(issuedDate),
      validUntil: "Not applicable — sample document",
      validityMonths: escapeHtml(metadataRaw.validityMonths),
      standardRef: escapeHtml(metadataRaw.standardRef),
      // Injections Sample
      signature: signatureResult.signatureBase64,
      hash: signatureResult.hashHex,
      algorithm: signatureResult.algorithm,
    };

    // 6️⃣ QR CODE NEUTRALISÉ
    const verifyUrl = "https://certif-scope.com/sample";
    const qrDataUrl = await QRCode.toDataURL(verifyUrl, { width: 120, margin: 1 });

    // HTML SAMPLE
    const html = `
<!doctype html>
<html lang="${locale}">
<head>
<meta charset="utf-8"/>
<title>SAMPLE — ${metadata.issuerName}</title>
<style>
  @page {
    size: A4;
    margin: 12mm 14mm 12mm 14mm; 
  }

  body {
    font-family: Inter, "Helvetica Neue", Arial, Helvetica, sans-serif;
    font-size: 10px;
    line-height: 1.4;
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

  /* 8️⃣ WATERMARK AJOUTÉ */
  .watermark {
    position: fixed;
    top: 40%;
    left: 10%;
    width: 80%;
    text-align: center;
    font-size: 60px;
    color: rgba(200, 0, 0, 0.1); /* Rouge très léger */
    transform: rotate(-30deg);
    z-index: 9999;
    pointer-events: none;
    font-weight: bold;
    text-transform: uppercase;
  }

  /* Footer Flow */
  .footer-static {
    width: 100%;
    font-size: 9px;
    color: #666;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ddd;
    padding-top: 8px;
    margin-top: 20px;
    clear: both;
  }

  /* Header */
  header {
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    border-bottom:3px solid var(--accent);
    padding-bottom: 5px;
    margin-bottom: 8px;
  }

  .issuer { max-width:68%; display:flex; flex-direction:column; justify-content:flex-start; }
  .issuer-logo {
    height: 75px;
    max-width: 300px;
    display: block;
    margin-bottom: 5px;
    object-fit: contain;
  }
  .issuer-site { font-size:9px; color:var(--muted); margin-bottom:4px; }
  .issuer-meta { font-size:9px; color:var(--muted); }

  /* QR */
  .qr { text-align:center; font-size:9px; }
  .qr img { width:90px; height:90px; border:1px solid #ddd; padding:4px; background:#fff; }

  /* Title */
  .title {
    text-align:center;
    margin: 8px 0 10px;
    font-family:var(--serif);
  }
  .title h1 { font-size:20px; margin:0; font-weight:700; letter-spacing:0.8px; text-transform:uppercase; color:var(--accent); }
  .title .formal-line { margin-top:4px; font-size:10px; color:#222; font-weight:600; font-family: Inter, Arial, sans-serif; }
  /* 7️⃣ SOUS-TITRE AJOUTÉ */
  .title .subtitle { margin-top:4px; font-size:10px; color:#c00; font-weight:bold; text-transform: uppercase; } 
  .title .standard-ref { margin-top:4px; font-size:9px; color:var(--accent); font-weight:600; }

  /* Result Panel */
  .result-panel {
    margin: 4px 0 14px;
    display:flex;
    justify-content:center;
  }
  
  .result-box {
    width:100%;
    max-width:600px;
    background:#ffffff;
    border:3px solid var(--accent);
    padding:8px 14px;
    box-shadow: 0 4px 12px rgba(11,43,74,0.06);
    text-align:center;
  }
  .result-label { font-size:9px; font-weight:700; color:#222; margin-bottom:4px; font-family: Inter, Arial, sans-serif; text-transform: uppercase; letter-spacing: 0.5px; }
  .result-value { font-family:var(--serif); font-size:26px; font-weight:800; color:var(--accent); margin:2px 0; letter-spacing:1px; }

  /* Layout */
  .two-col { width: 100%; }
  .two-col > div { float: left; width: calc(100% - 310px); }
  .two-col > aside { float: right; width: 300px; margin-top: 0; }
  .clearfix::after { content: ""; display: block; clear: both; }

  /* Sections */
  section { margin-bottom: 8px; padding-right:2px; }
  .section-title { font-family:var(--serif); font-size:11px; margin-bottom:4px; font-weight:700; color:var(--accent); text-transform:uppercase; font-variant:small-caps; border-bottom: 1px solid #eee; padding-bottom: 2px; display: inline-block; min-width: 100%; }

  .meta-list { font-size:10px; color:#222; }
  .meta-list ul { margin-top: 2px; margin-bottom: 2px; padding-left: 14px; }
  .meta-list li { margin-bottom: 2px; }
  .row { margin-bottom: 2px; }

  /* Blocks */
  .verify-block { 
    border:1px solid var(--border-light); 
    padding:10px; 
    background: var(--bg-light);
    font-size:9.5px;
    margin-top:6px;
    border-radius: 2px;
  }
  .verify-title { font-weight:700; color:var(--accent); font-size:10px; margin-bottom:4px; text-transform: uppercase; letter-spacing: 0.5px; }
  .scope-summary { margin-top:8px; border-left:3px solid var(--border-light); padding-left:10px; font-size:9.5px; color:#222; }

  /* Final clauses */
  .final-box { border-top:1px solid #ddd; margin-top:10px; padding-top:8px; }
  .final-stamp { border:1px solid #e0e0e0; padding:10px; font-style:italic; color:#222; background:#fff; font-size:10px; }

  .muted { color:var(--muted); font-size:9px; }
  .small { font-size:9px; color:var(--muted); line-height: 1.3; }

  .result-box, .verify-block, .final-stamp { page-break-inside: avoid; break-inside: avoid; }
  @media print { .issuer-logo { height: 75px; max-width: 300px; } }
</style>
</head>
<body>
<div class="watermark">SAMPLE — NO LEGAL VALUE</div>

<div class="container">

  <header>
    <div class="issuer">
      ${CERTIF_SCOPE_LOGO_BASE64 ? `<img src="data:image/png;base64,${CERTIF_SCOPE_LOGO_BASE64}" class="issuer-logo" alt="Issuer logo" />` : ""}
      <div class="issuer-site">${metadata.issuerSite}</div>
      <div class="issuer-meta small">${i18n.headerTagline}</div>
    </div>

    <div class="qr">
      <img src="${qrDataUrl}" alt="QR verification" />
      <div class="small">Verification disabled</div>
    </div>
  </header>

  <div class="title">
    <h1>SAMPLE — ${i18n.title}</h1>
    <div class="formal-line">${i18n.standardReference}</div>
    <div class="standard-ref">${i18n.standardReferenceLabel} ${metadata.standardRef}</div>
    <div class="subtitle">Example document — no legal or regulatory value</div>
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
          <div class="row"><strong>${i18n.attestationReferenceLabel}:</strong> ${metadata.attestationId} <span class="small"> (${i18n.uniqueIdentifierLabel})</span></div>
          <div class="row"><strong>${i18n.issuedDateLabel}:</strong> ${metadata.issuedDate}</div>
          <div class="row"><strong>${i18n.validUntilLabel}:</strong> Not applicable</div>
        </div>
      </section>

      <section aria-labelledby="s2">
        <div class="section-title" id="s2">${i18n.documentNatureSectionTitle}</div>
        <div class="meta-list">
          <div><strong>SAMPLE DOCUMENT — This text is illustrative only and does not describe a real attestation.</strong></div>
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
          <div style="margin-top:6px; font-size:10px; color:var(--muted);"><strong>${i18n.noteLabel}:</strong> ${i18n.scopeNote}</div>
        </div>
      </section>

      <section aria-labelledby="s5">
        <div class="section-title" id="s5">${i18n.referencesSectionTitle}</div>
        <div class="meta-list">
          <div style="margin-bottom:4px;"><em>${i18n.normativeText}</em></div>
          <ul>
            <li>References shown for illustration only</li>
            <li>No normative or regulatory alignment applies</li>
          </ul>
        </div>
      </section>
    </div>

    <aside>
      <div class="verify-block" style="margin-top:0;">
        <div class="verify-title">${i18n.authenticityOverviewTitle}</div>
        <div class="small">
          This section is disabled for sample documents. No authenticity or verification applies.
        </div>
      </div>

      <div class="verify-block">
        <div class="verify-title">${i18n.natureOfAttestationTitle}</div>
        <div class="small">
          ${i18n.natureOfAttestationText}
        </div>
      </div>

      <div class="verify-block">
        <div class="verify-title">${i18n.documentScopeSummaryTitle}</div>
        <div style="font-size:9.5px; color:#222; margin-top:4px;">
          ${i18n.documentScopeSummaryText}
        </div>
      </div>

      <div class="verify-block">
        <div class="verify-title">${i18n.documentValidityTitle}</div>
        <div class="small">
          ${i18n.documentValidityText}
        </div>
      </div>
    </aside>
  </div>

  <div class="footer-static">
    <div>SAMPLE DOCUMENT - INVALID</div>
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
            <li>${i18n.limitationsText}</li>
            <li>${i18n.transferabilityText}</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="s8">
        <div class="section-title" id="s8">${i18n.verificationSectionTitle}</div>
        <div class="verify-block">
          <div class="verify-title">${i18n.verificationBoxTitle}</div>

          <div style="margin-top:8px;"><strong>${i18n.privacyLabel}:</strong> ${i18n.privacyText}</div>

          <div class="small" style="margin-top:8px;">
            ${i18n.pdfObjectText}
          </div>

          <div style="margin-top:8px;"><strong>${i18n.verificationPageLabel}:</strong><br/>
            <span style="color:#666;">Verification disabled for sample documents</span>
          </div>

          <div class="small" style="margin-top:10px; border-top:1px solid #e0e0e0; padding-top:6px;">
            <em>${i18n.technicalVerificationNote}</em>
          </div>

          <div class="small" style="margin-top:6px;">
            <strong>${i18n.cryptographicIntegrityLabel}:</strong><br/>
            ${i18n.algorithmLabel}: N/A<br/>
            ${i18n.hashLabel}:<br/>
            <span style="word-break:break-all;">SAMPLE — INVALID HASH</span><br/>
            ${i18n.signatureLabel}:<br/>
            <span style="word-break:break-all;">SAMPLE — NO CRYPTOGRAPHIC SIGNATURE</span>
          </div>

          <div class="small" style="margin-top:6px;">
            <strong>${i18n.publicKeyLabel}:</strong><br/>
            <span class="small">
              Not applicable for sample documents
            </span>
          </div>

        </div>
      </section>

      <section aria-labelledby="s9" style="margin-top:10px;">
        <div class="section-title" id="s9">${i18n.finalClausesTitle}</div>
        <div class="final-box">
          <div class="final-stamp">
            <div style="color:#c00; font-weight:bold; margin-bottom:8px;">
              THIS DOCUMENT IS A NON-VALID SAMPLE PROVIDED FOR DEMONSTRATION PURPOSES ONLY.
              IT HAS NO LEGAL, REGULATORY, CONTRACTUAL, OR EVIDENTIARY VALUE.
              IT MUST NOT BE USED OR PRESENTED AS AN OFFICIAL ATTESTATION.
            </div>
            
            <div><strong>${i18n.issuedPursuantText}</strong></div>
            
            <div style="margin-top:6px;"><strong>${i18n.legalEffectLabel}:</strong> ${i18n.legalEffectText}</div>
            
            <div style="margin-top:6px;">
              <strong>${i18n.liabilityLabel}:</strong> ${i18n.liabilityText}
            </div>
            
            <div style="margin-top:6px;">
              <strong>${i18n.validityPeriodLabel}:</strong> Not applicable
            </div>

            <div style="margin-top:8px; color:var(--muted); font-size:9px;"><strong>${i18n.noAuditText}</strong></div>
            <div style="margin-top:4px; color:var(--muted); font-size:9px;"><em>${i18n.methodologyNote}</em></div>
          </div>
        </div>
      </section>
    </div>

    <aside>
      </aside>
  </div>

  <div class="footer-static">
    <div>SAMPLE DOCUMENT - INVALID</div>
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
    
    // 1️⃣1️⃣ FILENAME MODIFIÉ
    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="sample-attestation.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("Internal error", { status: 500 });
  }
        }
