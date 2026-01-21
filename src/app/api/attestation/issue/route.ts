export const runtime = "nodejs";

import Stripe from "stripe";
import QRCode from "qrcode";
import { signCanonicalPayload, makeAttestationId } from "@/lib/sign";
import {
  ATTESTATION_I18N,
  AttestationLocale,
} from "@/lib/attestation-i18n";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

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
    if (!process.env.PDFSHIFT_API_KEY) {
      return new Response("PDFSHIFT_API_KEY missing", { status: 500 });
    }

    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");
    if (!sessionId) return new Response("Missing session_id", { status: 400 });

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") {
      return new Response("Payment not completed", { status: 403 });
    }

    const metadataRaw = session.metadata || {};

    // 2️⃣ LIRE LA LANGUE CHOISIE DANS STRIPE
    const locale = (metadataRaw.attestationLocale as AttestationLocale) || "en";
    const i18n = ATTESTATION_I18N[locale] || ATTESTATION_I18N.en;

    const required = ["companyName", "totalCO2e", "year"];
    const missing = required.filter((k) => {
      const v = metadataRaw[k];
      return v === undefined || v === null || String(v).trim() === "";
    });
    if (missing.length) {
      return new Response(`Missing metadata: ${missing.join(", ")}`, { status: 400 });
    }

    const totalCO2eNum = Number(String(metadataRaw.totalCO2e).replace(",", "."));
    if (Number.isNaN(totalCO2eNum)) {
      return new Response("Invalid metadata: totalCO2e must be a number", { status: 400 });
    }

    // 3️⃣ GÉNÉRER L’ID et SIGNER
    const issuedDate = new Date().toISOString().slice(0, 10);

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

    const metadata = {
      attestationId: attestationId,
      issuerName: escapeHtml(String(metadataRaw.issuerName || "Certif-Scope")),
      issuerSite: escapeHtml(String(metadataRaw.issuerSite || "https://certif-scope.com")),
      companyName: escapeHtml(String(metadataRaw.companyName)),
      companySector: escapeHtml(String(metadataRaw.companySector || "—")),
      entityIdentifier: escapeHtml(String(metadataRaw.entityIdentifier || "—")),
      country: escapeHtml(String(metadataRaw.country || "—")),
      year: escapeHtml(String(metadataRaw.year)),
      totalCO2e: escapeHtml(String(totalCO2eNum)),
      methodology: escapeHtml(String(metadataRaw.methodology || "Certif-Scope deterministic spend-based methodology v1.0")),
      issuedDate: escapeHtml(issuedDate),
      validUntil: "",
      validityMonths: escapeHtml(String(metadataRaw.validityMonths || "12")),
      standardRef: escapeHtml(String(metadataRaw.standardRef || "Certif-Scope CS-SB-v1")),
      signature: signatureResult.signatureBase64,
      hash: signatureResult.hashHex,
      algorithm: signatureResult.algorithm,
    };

    const verifyUrl = `https://certif-scope.com/verify?id=${encodeURIComponent(metadata.attestationId)}`;
    const qrDataUrl = await QRCode.toDataURL(verifyUrl, { width: 120, margin: 1 });

    const html = `
<!doctype html>
<html lang="${locale}">
<head>
<meta charset="utf-8"/>
<title>${metadata.issuerName} — Attestation</title>
<style>
  /* ✅ FIX 1 : Marges ajustées. 
     Bottom 25mm laisse de la place au footer fixe sans déclencher de saut de page intempestif.
  */
  @page {
    size: A4;
    margin: 14mm 14mm 25mm 14mm; 
  }

  body {
    font-family: Inter, "Helvetica Neue", Arial, Helvetica, sans-serif;
    font-size: 10.5px; /* Légèrement réduit pour être sûr que ça rentre */
    line-height: 1.45;
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

  /* Footer Fixe */
  .footer-fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 15mm; /* Hauteur explicite */
    font-size: 9px;
    color: #666;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ddd;
    padding-top: 5px;
    background: white; /* Évite la transparence sur le texte */
  }

  /* Keep page-break-inside avoidance */
  .result-box,
  .verify-block,
  .final-stamp {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  /* Header */
  header {
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    border-bottom:3px solid var(--accent);
    padding-bottom: 6px;
    margin-bottom: 10px;
  }

  .issuer { max-width:68%; display:flex; flex-direction:column; justify-content:flex-start; }
  .issuer-logo {
    height: 80px; /* Réduit un peu pour gagner de la place */
    max-width: 340px;
    display: block;
    margin-bottom: 6px;
    object-fit: contain;
  }
  .issuer-site { font-size:10px; color:var(--muted); margin-bottom:4px; }
  .issuer-meta { font-size:10px; color:var(--muted); }

  /* QR */
  .qr { text-align:center; font-size:9px; }
  .qr img { width:90px; height:90px; border:1px solid #ddd; padding:4px; background:#fff; }

  /* Title */
  .title {
    text-align:center;
    margin: 10px 0 10px; /* Marges réduites */
    font-family:var(--serif);
  }
  .title h1 { font-size:20px; margin:0; font-weight:700; letter-spacing:0.8px; text-transform:uppercase; color:var(--accent); }
  .title .formal-line { margin-top:4px; font-size:11px; color:#222; font-weight:600; font-family: Inter, Arial, sans-serif; }
  .title .subtitle { margin-top:4px; font-size:10px; color:var(--muted); }
  .title .standard-ref { margin-top:4px; font-size:10px; color:var(--accent); font-weight:600; }

  /* Result Panel */
  .result-panel {
    margin: 4px 0 14px; /* Marge basse réduite */
    display:flex;
    justify-content:center;
  }
  
  .result-box {
    width:100%;
    max-width:600px;
    background:#ffffff;
    border:3px solid var(--accent);
    padding:8px 16px; /* Padding vertical réduit */
    box-shadow: 0 4px 12px rgba(11,43,74,0.06);
    text-align:center;
  }
  .result-label { font-size:10px; font-weight:700; color:#222; margin-bottom:4px; font-family: Inter, Arial, sans-serif; text-transform: uppercase; letter-spacing: 0.5px; }
  .result-value { font-family:var(--serif); font-size:26px; font-weight:800; color:var(--accent); margin:2px 0; letter-spacing:1px; }

  /* Layout PDF SAFE (FLOAT - NO GRID) */
  .two-col {
    width: 100%;
  }

  .two-col > div {
    float: left;
    width: calc(100% - 310px); /* Ajusté */
  }

  .two-col > aside {
    float: right;
    width: 290px; /* Ajusté */
    margin-top: 0;
  }

  .clearfix::after {
    content: "";
    display: block;
    clear: both;
  }

  /* ✅ FIX 2 : Marges des sections réduites pour remonter le contenu */
  section { margin-bottom: 8px; padding-right:2px; }

  .section-title { font-family:var(--serif); font-size:11px; margin-bottom:4px; font-weight:700; color:var(--accent); text-transform:uppercase; font-variant:small-caps; border-bottom: 1px solid #eee; padding-bottom: 2px; display: inline-block; min-width: 100%; }

  .meta-list { font-size:10.5px; color:#222; }

  .meta-list ul {
    margin-top: 2px;
    margin-bottom: 2px; padding-left: 16px;
  }
  .meta-list li {
    margin-bottom: 2px;
  }
  .row { margin-bottom: 2px; }

  /* Verify blocks */
  .verify-block { 
    border:1px solid var(--border-light); 
    padding:10px; 
    background: var(--bg-light);
    font-size:10px;
    margin-top:6px;
    border-radius: 2px;
  }
  .verify-title { font-weight:700; color:var(--accent); font-size:10.5px; margin-bottom:4px; text-transform: uppercase; letter-spacing: 0.5px; }

  /* Aside micro-block */
  .scope-summary { margin-top:10px; border-left:3px solid var(--border-light); padding-left:10px; font-size:10px; color:#222; }

  /* Final clauses */
  .final-box {
    border-top:1px solid #ddd;
    margin-top:10px;
    padding-top:8px;
  }
  .final-stamp {
    border:1px solid #e0e0e0;
    padding:12px;
    font-style:italic;
    color:#222;
    background:#fff;
    font-size:10.5px;
  }

  .muted { color:var(--muted); font-size:10px; }
  .small { font-size:10px; color:var(--muted); line-height: 1.3; }

  @media print {
    .issuer-logo { height: 80px; max-width: 340px; }
  }
</style>
</head>
<body>
<div class="container">

  <header>
    <div class="issuer">
      ${CERTIF_SCOPE_LOGO_BASE64 ? `<img src="data:image/png;base64,${CERTIF_SCOPE_LOGO_BASE64}" class="issuer-logo" alt="Issuer logo" />` : ""}
      <div class="issuer-site">${metadata.issuerSite}</div>
      <div class="issuer-meta small">Automated issuance · Standardized indicative attestation</div>
    </div>

    <div class="qr">
      <img src="${qrDataUrl}" alt="QR verification" />
      <div class="small">Scan to verify</div>
    </div>
  </header>

  <div class="title">
    <h1>${i18n.title}</h1>
    <div class="formal-line">${i18n.standardReference}</div>
    <div class="standard-ref">Standard reference: ${metadata.standardRef}</div>
    <div class="subtitle">Non-regulatory · Methodology-based · Indicative attestation</div>
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
          <div class="row"><strong>Issuer:</strong> ${metadata.issuerName}</div>
          <div class="row"><strong>Website:</strong> ${metadata.issuerSite}</div>
          <div class="row"><strong>Attestation reference:</strong> ${metadata.attestationId} <span class="small"> (Unique document identifier)</span></div>
          <div class="row"><strong>Issued date:</strong> ${metadata.issuedDate}</div>
          ${metadata.validUntil ? `<div class="row"><strong>Valid until:</strong> ${metadata.validUntil}</div>` : `<div class="row"><strong>Validity period:</strong> ${metadata.validityMonths} months</div>`}
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
          <div class="row"><strong>Entity name:</strong> ${metadata.companyName}</div>
          <div class="row"><strong>Activity sector:</strong> ${metadata.companySector}</div>
          <div class="row"><strong>Entity identifier (optional):</strong> ${metadata.entityIdentifier}</div>
          <div class="row"><strong>Country:</strong> ${metadata.country}</div>
          <div class="row"><strong>Reporting year:</strong> ${metadata.year}</div>
        </div>
      </section>

      <section aria-labelledby="s4">
        <div class="section-title" id="s4">${i18n.scopeSectionTitle}</div>
        <div class="meta-list">
          <div><strong>${i18n.scopeSectionTitle}:</strong> ${i18n.scopeText}</div>
          <div style="margin-top:6px; font-size:10.5px; color:var(--muted);"><strong>Note:</strong> ${i18n.scopeNote}</div>
        </div>
      </section>

      <section aria-labelledby="s5">
        <div class="section-title" id="s5">${i18n.referencesSectionTitle}</div>
        <div class="meta-list">
          <div style="margin-bottom:6px;"><em>The following standards and frameworks are referenced for methodological alignment and contextual consistency.</em></div>
          <ul>
            <li>GHG Protocol – Scope 3 (spend-based)</li>
            <li>ISO 14064-1 (reference)</li>
            <li>ISO 14083 (reference)</li>
            <li>CSRD / ESRS / EU Taxonomy (context)</li>
          </ul>
        </div>
      </section>
    </div>

    <aside>
      <div class="verify-block" style="margin-top:0;">
        <div class="verify-title">Authenticity overview</div>
        <div class="small">
          This attestation is cryptographically signed and can be verified
          independently without access to Certif-Scope systems.
        </div>
      </div>

      <div class="verify-block">
        <div class="verify-title">Nature of the attestation</div>
        <div class="small">
          This document is an indicative carbon emissions attestation
          issued using a standardized deterministic methodology.
          It does not constitute a regulatory disclosure or audit report.
        </div>
      </div>

      <div class="verify-block">
        <div class="verify-title">Document scope summary</div>
        <div style="font-size:10.5px; color:#222; margin-top:6px;">
          – Indicative estimation<br/>
          – Spend-based methodology<br/>
          – Aggregated result only
        </div>
      </div>

      <div class="verify-block">
        <div class="verify-title">Document validity</div>
        <div class="small">
          This attestation is valid for a fixed period of ${metadata.validityMonths} months,
          reflecting the temporal relevance of the underlying data and methodology.
        </div>
      </div>
    </aside>
  </div>

  <div class="two-col clearfix" style="page-break-before: always;">
    <div>
      <section aria-labelledby="s6">
        <div class="section-title" id="s6">${i18n.declarationSectionTitle}</div>
        <div class="meta-list">
          <div style="font-style:italic; margin-bottom:4px;">Formal declaration</div>
          <div class="row"><strong>Declaration:</strong> ${i18n.declarationText}</div>
        </div>
      </section>

      <section aria-labelledby="s7">
        <div class="section-title" id="s7">${i18n.methodologySectionTitle}</div>
        <div class="meta-list">
          <ul>
            <li><strong>Methodology:</strong> ${metadata.methodology}</li>
            <li><strong>Limitations:</strong> No physical activity data; no Scope 1 or 2; indicative model only.</li>
            <li><strong>Transferability:</strong> Non-transferable.</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="s8">
        <div class="section-title" id="s8">${i18n.verificationSectionTitle}</div>
        <div class="verify-block">
          <div class="verify-title">Verification & Integrity</div>

          <div style="margin-top:8px;"><strong>Privacy by design:</strong> This attestation is generated without storage of underlying financial data by Certif-Scope. Verification relies solely on the attestation identifier and cryptographic integrity mechanisms.</div>

          <div class="small" style="margin-top:8px;">
            The PDF document itself is the only verifiable object.
          </div>

          <div style="margin-top:8px;"><strong>Verification information page:</strong><br/>
            <a href="${verifyUrl}"
               style="color:var(--accent); text-decoration:none; word-break:break-all;">
              ${verifyUrl}
            </a>
          </div>

          <div class="small" style="margin-top:12px; border-top:1px solid #e0e0e0; padding-top:8px;">
            <em>The following elements allow independent technical verification. No action is required from the reader.</em>
          </div>

          <div class="small" style="margin-top:8px;">
            <strong>Cryptographic integrity:</strong><br/>
            Algorithm: ${metadata.algorithm}<br/>
            Signed payload hash (SHA-256):<br/>
            <span style="word-break:break-all;">${metadata.hash}</span><br/>
            Signature (Base64):<br/>
            <span style="word-break:break-all;">${metadata.signature}</span>
          </div>

          <div class="small" style="margin-top:8px;">
            <strong>Issuer public verification key (Ed25519):</strong><br/>
            <span class="small">
              This public key allows any third party to verify the authenticity
              and integrity of this document independently.
            </span><br/>
            <span style="word-break:break-all;">
              MCowBQYDK2VwAyEAbKp2pg4wmzE5Kqo9tEwv7JJjxQyT2cBmwiLLHp4cSac=
            </span>
          </div>

        </div>
      </section>

      <section aria-labelledby="s9" style="margin-top:12px;">
        <div class="section-title" id="s9">${i18n.finalClausesTitle}</div>
        <div class="final-box">
          <div class="final-stamp">
            <div><strong>Issued pursuant to the Certif-Scope internal standard CS-SB-v1.</strong></div>
            <div style="margin-top:6px;"><strong>Legal effect:</strong> ${i18n.legalEffectLabel}</div>
            
            <div style="margin-top:6px;">
              <strong>Liability:</strong> ${i18n.liabilityLabel}
            </div>
            
            <div style="margin-top:6px;">
              <strong>Validity:</strong> ${i18n.validityExplanationLabel}
            </div>

            <div class="small" style="margin-top:8px; font-weight:bold;">
              ${i18n.englishPrevailsNotice}
            </div>

            <div style="margin-top:8px; color:var(--muted); font-size:10px;"><strong>Certif-Scope does not perform audit, validation, verification, or assurance services.</strong></div>
            <div style="margin-top:8px; color:var(--muted); font-size:10px;"><em>CS-SB-v1 is an internal standardized methodology maintained by Certif-Scope.</em></div>
          </div>
        </div>
      </section>
    </div>

    <aside>
      </aside>
  </div>

  <div class="footer-fixed">
    <div>Indicative carbon emissions attestation · Issued by Certif-Scope · certif-scope.com</div>
    <div>Page <span class="pageNumber"></span> / <span class="totalPages"></span></div>
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
    
    const safeIssuerName = metadata.issuerName.toLowerCase().replace(/[^a-z0-9\-]/g, "");
    
    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${safeIssuerName}-${metadata.attestationId}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("Internal error", { status: 500 });
  }
}
