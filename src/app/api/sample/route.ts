export const runtime = "nodejs";

import QRCode from "qrcode";

function escapeHtml(input: string) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function GET() {
  try {
    const pdfShiftApiKey = process.env.PDFSHIFT_API_KEY;

    if (!pdfShiftApiKey) {
      return new Response("PDFSHIFT_API_KEY missing", { status: 500 });
    }

    const sample = {
      companyName: "Entreprise Exemple SAS",
      country: "FR",
      activitySector: "Services aux entreprises",
      reportingYear: "2026",
      entityIdentifier: "—",
      attestationId: "CS-SAMPLE-2026-0001",
      issuedDate: "2026-05-20",
      validUntil: "2027-05-20",
      issuer: "Certif-Scope",
      totalCO2e: "15",
      methodology: "Certif-Scope deterministic spend-based methodology v1.0",
      factorVersion: "Certif-Scope factors v1",
      verificationUrl: "https://www.certif-scope.com/fr/verify/demo",
      publicVerificationUrl: "https://www.certif-scope.com/fr/verify",
      algorithm: "Exemple — non signé",
      hash: "EXEMPLE_NON_VALABLE_HASH_NON_VERIFIABLE",
      signature: "EXEMPLE_NON_VALABLE_SIGNATURE_NON_VERIFIABLE",
      publicKey: "Exemple — aucune clé de production utilisée",
    };

    const qrDataUrl = await QRCode.toDataURL(sample.verificationUrl, {
      errorCorrectionLevel: "H",
      width: 600,
      margin: 4,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    });

    const html = `
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <title>Exemple d’attestation CO₂e indicative Certif-Scope</title>
  <style>
    @page {
      size: A4;
      margin: 0;
    }

    :root {
      --ink: #223243;
      --heading: #0B3A63;
      --accent: #1FB6C1;
      --accent-soft: #e8f8fa;
      --line: #d6e0e7;
      --line-strong: #c5d3dc;
      --line-soft: #edf3f7;
      --panel: #ffffff;
      --panel-soft: #f7fafc;
      --panel-tint: #eef7f8;
      --muted: #66788a;
      --muted-2: #81909d;
    }

    * {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      padding: 0;
      background: #ffffff;
      color: var(--ink);
      font-family: Inter, Arial, Helvetica, sans-serif;
      font-size: 9.2px;
      line-height: 1.34;
      -webkit-font-smoothing: antialiased;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .page {
      width: 210mm;
      min-height: 297mm;
      padding: 10mm;
      background: #ffffff;
      display: flex;
      flex-direction: column;
      page-break-after: always;
      overflow: hidden;
    }

    .page:last-child {
      page-break-after: auto;
    }

    .content {
      flex: 1;
      min-height: 0;
    }

    .header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 18px;
      padding-bottom: 5mm;
      border-bottom: 2px solid var(--heading);
    }

    .brand {
      display: flex;
      flex-direction: column;
      gap: 7px;
      min-width: 0;
    }

    .brand-row {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo-mark {
      width: 30px;
      height: 30px;
      border: 4px solid var(--accent);
      border-top-color: var(--heading);
      border-radius: 999px;
      position: relative;
    }

    .logo-mark::after {
      content: "";
      position: absolute;
      left: 7px;
      top: 5px;
      width: 11px;
      height: 6px;
      border-left: 3px solid var(--heading);
      border-bottom: 3px solid var(--heading);
      transform: rotate(-45deg);
    }

    .brand-name {
      font-size: 15px;
      font-weight: 800;
      color: var(--heading);
      letter-spacing: -0.02em;
    }

    .brand-url {
      margin-top: 8px;
      color: var(--muted);
      font-size: 8.8px;
    }

    .brand-tagline {
      color: var(--muted);
      font-size: 8.8px;
      font-weight: 500;
    }

    .sample-badge {
      display: inline-flex;
      width: fit-content;
      align-items: center;
      border: 1px solid #f3b6b6;
      background: #fff4f4;
      color: #9f1d1d;
      border-radius: 999px;
      padding: 4px 9px;
      font-size: 8.3px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .qr {
      width: 36mm;
      text-align: center;
      color: var(--heading);
      font-size: 7.5px;
      font-weight: 700;
      flex: 0 0 auto;
    }

    .qr img {
      display: block;
      width: 34mm;
      height: 34mm;
      padding: 3px;
      border: 1px solid var(--line);
      border-radius: 4px;
      background: #ffffff;
    }

    .qr-label {
      margin-top: 4px;
      white-space: pre-line;
    }

    .title {
      margin: 7mm 0 5mm;
      text-align: center;
      color: var(--heading);
    }

    .eyebrow {
      color: var(--accent);
      font-size: 8.5px;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 2mm;
    }

    h1 {
      margin: 0;
      color: var(--heading);
      font-size: 16px;
      line-height: 1.1;
      font-weight: 900;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .standard-line {
      margin-top: 2mm;
      font-size: 8.8px;
      font-weight: 800;
      color: var(--heading);
    }

    .subtitle {
      margin-top: 1mm;
      font-size: 8.2px;
      color: var(--muted);
      font-weight: 700;
    }

    .result-box {
      margin: 0 auto 5mm;
      max-width: 146mm;
      border: 2px solid var(--heading);
      border-radius: 10px;
      padding: 5mm 8mm;
      text-align: center;
      background: #ffffff;
      box-shadow: 0 8px 18px rgba(11, 58, 99, 0.05);
    }

    .result-label {
      color: var(--muted-2);
      font-size: 8.2px;
      font-weight: 900;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .result-value {
      margin-top: 2mm;
      color: var(--heading);
      font-size: 24px;
      font-weight: 900;
      letter-spacing: -0.02em;
    }

    .result-subline {
      margin-top: 1mm;
      color: var(--muted);
      font-size: 8.6px;
      font-weight: 600;
    }

    .result-bottom {
      margin-top: 1mm;
      color: var(--heading);
      font-size: 8.7px;
      font-weight: 800;
    }

    .meta-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      border: 1px solid var(--line);
      border-radius: 7px;
      overflow: hidden;
      margin-bottom: 5mm;
      background: #ffffff;
    }

    .meta-card {
      min-height: 14mm;
      padding: 3mm;
      border-right: 1px solid var(--line);
    }

    .meta-card:last-child {
      border-right: 0;
    }

    .label {
      color: var(--muted-2);
      font-size: 7.2px;
      line-height: 1.15;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .value {
      margin-top: 1.5mm;
      color: var(--heading);
      font-size: 9.2px;
      font-weight: 900;
      word-break: break-word;
    }

    .card {
      border: 1px solid var(--line);
      border-radius: 7px;
      background: var(--panel);
      padding: 3.2mm;
      margin-bottom: 4mm;
    }

    .card.soft {
      background: var(--panel-soft);
    }

    .card.tint {
      background: var(--panel-tint);
    }

    .section-title {
      margin: 0 0 2mm;
      color: var(--heading);
      font-size: 9.4px;
      line-height: 1.18;
      font-weight: 900;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .text {
      margin: 0;
      font-size: 8.6px;
      color: var(--ink);
    }

    .entity-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4mm 9mm;
    }

    .two-cols {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3mm;
      margin-bottom: 4mm;
    }

    .three-cols {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3mm;
      margin-bottom: 4mm;
    }

    .status-strip {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      border: 1px solid var(--line);
      border-radius: 7px;
      overflow: hidden;
      margin-top: 1mm;
    }

    .status-item {
      padding: 3mm;
      border-right: 1px solid var(--line);
      min-height: 13mm;
    }

    .status-item:last-child {
      border-right: 0;
    }

    .page-two-header {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 5mm;
    }

    .page-two-header h2 {
      margin: 0;
      color: var(--heading);
      font-size: 16px;
      line-height: 1.12;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }

    .page-two-intro {
      margin-top: 1.5mm;
      color: var(--muted);
      font-size: 8.6px;
      font-weight: 600;
    }

    .page-two-ref {
      min-width: 42mm;
      color: var(--heading);
      text-align: right;
      font-size: 8px;
      font-weight: 700;
    }

    .method-grid {
      display: grid;
      grid-template-columns: 1.45fr 0.9fr;
      gap: 3mm;
      align-items: stretch;
      margin-top: 3mm;
    }

    .formula-box {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 18mm;
      border: 1px solid #b9e5e9;
      border-radius: 7px;
      background: var(--accent-soft);
      color: var(--heading);
      font-weight: 900;
      text-align: center;
      padding: 3mm;
    }

    .stack {
      display: flex;
      flex-direction: column;
      gap: 3mm;
    }

    ul {
      margin: 2mm 0 0;
      padding-left: 4mm;
    }

    li {
      margin-bottom: 1mm;
    }

    .reference-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 8mm;
    }

    .verification-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3mm;
      margin-bottom: 4mm;
    }

    .verification-card {
      border-left: 3px solid var(--accent);
    }

    .technical-grid {
      display: grid;
      grid-template-columns: 40mm 1fr;
      gap: 1.5mm 4mm;
      font-size: 7.8px;
      align-items: start;
      word-break: break-word;
    }

    .limits-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4mm;
      margin-top: 3mm;
    }

    .synthesis {
      margin-top: auto;
      border: 1.5px solid var(--heading);
      border-radius: 7px;
      padding: 3.2mm;
      background: #ffffff;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid var(--line);
      padding-top: 2mm;
      margin-top: 3mm;
      color: var(--muted);
      font-size: 7.8px;
      font-weight: 600;
    }

    .muted {
      color: var(--muted);
    }

    .strong {
      font-weight: 900;
      color: var(--heading);
    }

    .nowrap {
      white-space: nowrap;
    }
  </style>
</head>
<body>
  <section class="page">
    <div class="content">
      <header class="header">
        <div class="brand">
          <div class="brand-row">
            <div class="logo-mark" aria-hidden="true"></div>
            <div class="brand-name">Certif-Scope</div>
          </div>
          <div>
            <div class="brand-url">https://www.certif-scope.com</div>
            <div class="brand-tagline">Émission automatisée · Attestation indicative standardisée</div>
          </div>
          <div class="sample-badge">Exemple — document non valable</div>
        </div>

        <div class="qr">
          <img src="${qrDataUrl}" alt="QR code de démonstration" />
          <div class="qr-label">Scanner le QR code pour vérifier</div>
        </div>
      </header>

      <div class="title">
        <div class="eyebrow">Document CO₂e indicatif · Standardisé · Vérifiable</div>
        <h1>Attestation indicative d’émissions de carbone</h1>
        <div class="standard-line">Émise selon la méthodologie standardisée interne Certif-Scope CS-SB-v1</div>
        <div class="subtitle">Non réglementaire · Fondée sur une méthodologie · Attestation indicative · Exemple non valable</div>
      </div>

      <div class="result-box">
        <div class="result-label">Émissions indicatives agrégées déclarées</div>
        <div class="result-value">${escapeHtml(sample.totalCO2e)} tCO₂e</div>
        <div class="result-subline">Estimation documentaire fondée sur des dépenses agrégées déclarées.</div>
        <div class="result-bottom">Base documentaire carbone simple, datée et vérifiable, destinée aux échanges professionnels.</div>
      </div>

      <div class="meta-grid">
        <div class="meta-card">
          <div class="label">Référence de l’attestation</div>
          <div class="value">${escapeHtml(sample.attestationId)}</div>
        </div>
        <div class="meta-card">
          <div class="label">Date d’émission</div>
          <div class="value">${escapeHtml(sample.issuedDate)}</div>
        </div>
        <div class="meta-card">
          <div class="label">Valable jusqu’au</div>
          <div class="value">${escapeHtml(sample.validUntil)}</div>
        </div>
        <div class="meta-card">
          <div class="label">Émetteur</div>
          <div class="value">${escapeHtml(sample.issuer)}</div>
        </div>
      </div>

      <div class="card">
        <h3 class="section-title">1. Identification de l’entité</h3>
        <div class="entity-grid">
          <div>
            <div class="label">Nom de l’entité</div>
            <div class="value">${escapeHtml(sample.companyName)}</div>
          </div>
          <div>
            <div class="label">Pays</div>
            <div class="value">${escapeHtml(sample.country)}</div>
          </div>
          <div>
            <div class="label">Secteur d’activité</div>
            <div class="value">${escapeHtml(sample.activitySector)}</div>
          </div>
          <div>
            <div class="label">Année de référence</div>
            <div class="value">${escapeHtml(sample.reportingYear)}</div>
          </div>
          <div>
            <div class="label">Identifiant de l’entité</div>
            <div class="value">${escapeHtml(sample.entityIdentifier)}</div>
          </div>
          <div>
            <div class="label">Référence de l’attestation</div>
            <div class="value">${escapeHtml(sample.attestationId)}</div>
          </div>
        </div>
      </div>

      <div class="two-cols">
        <div class="card soft">
          <h3 class="section-title">2. Nature du document</h3>
          <p class="text">Ce document constitue une attestation indicative d’émissions de carbone, émise exclusivement à des fins d’information, d’aide à la décision et d’évaluation préliminaire.</p>
        </div>
        <div class="card soft">
          <h3 class="section-title">3. Périmètre</h3>
          <p class="text">Cette attestation fournit une estimation indicative des émissions de gaz à effet de serre, dérivée exclusivement de données de dépenses agrégées, selon une méthodologie basée sur les dépenses (spend-based).</p>
        </div>
      </div>

      <div class="card">
        <h3 class="section-title">4. Usage prévu du document</h3>
        <p class="text">Cette attestation peut être utilisée comme pièce carbone indicative dans un dossier fournisseur, une demande client, un appel d’offres, une demande bancaire, une demande d’assurance ou une démarche interne. Elle est adaptée aux situations où aucun audit carbone complet, aucune vérification externe et aucun référentiel réglementaire spécifique ne sont explicitement exigés.</p>
      </div>

      <div class="card tint">
        <h3 class="section-title">5. Lecture par un tiers</h3>
        <p class="text">Un lecteur externe peut contrôler la cohérence documentaire de l’attestation à partir de son identifiant, de sa date d’émission, de sa période de validité, de son résultat agrégé et de la page de vérification.</p>
      </div>

      <div class="three-cols">
        <div class="card soft">
          <h3 class="section-title">Confidentialité renforcée</h3>
          <p class="text">Aucune donnée financière détaillée n’est affichée dans cette attestation. Seul le résultat CO₂e agrégé est présenté afin de faciliter une transmission externe sans divulguer les dépenses internes détaillées.</p>
        </div>
        <div class="card soft">
          <h3 class="section-title">Vérification documentaire</h3>
          <p class="text">L’attestation comporte une référence unique, un QR code et des éléments de contrôle permettant une vérification documentaire indépendante.</p>
        </div>
        <div class="card soft">
          <h3 class="section-title">Validité encadrée</h3>
          <p class="text">La période de validité reflète la pertinence temporelle des données et de la méthodologie.</p>
        </div>
      </div>

      <div class="status-strip">
        <div class="status-item">
          <div class="label">Statut documentaire</div>
          <div class="value">Indicatif · Agrégé · Vérifiable</div>
        </div>
        <div class="status-item">
          <div class="label">Données affichées</div>
          <div class="value">Résultat CO₂e uniquement</div>
        </div>
        <div class="status-item">
          <div class="label">Usage recommandé</div>
          <div class="value">Dossier fournisseur · Client · Banque · Assurance</div>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div>Attestation indicative d’émissions de carbone · Émise par Certif-Scope · certif-scope.com</div>
      <div>Page 1 / 2</div>
    </footer>
  </section>

  <section class="page">
    <div class="content">
      <div class="page-two-header">
        <div>
          <h2>Méthodologie, vérification et limites</h2>
          <div class="page-two-intro">Cette page précise la méthode utilisée, les références de contexte, les éléments de vérification et les limites documentaires de l’attestation.</div>
          <div class="sample-badge" style="margin-top: 3mm;">Exemple gratuit — ne constitue pas une attestation émise</div>
        </div>
        <div class="page-two-ref">
          <div>Référence de l’attestation</div>
          <div class="strong">${escapeHtml(sample.attestationId)}</div>
          <div style="margin-top: 2mm;">Émetteur</div>
          <div class="strong">${escapeHtml(sample.issuer)}</div>
        </div>
      </div>

      <div class="card">
        <h3 class="section-title">6. Principe méthodologique</h3>
        <p class="text"><span class="strong">Méthodologie</span><br />${escapeHtml(sample.methodology)}</p>
        <p class="text" style="margin-top: 2mm;">L’estimation repose sur une approche monétaire dite spend-based. Les dépenses agrégées déclarées par l’entité sont associées à des facteurs d’émission monétaires afin d’obtenir une estimation CO₂e indicative.</p>

        <div class="method-grid">
          <div class="formula-box">Dépenses agrégées déclarées × facteurs d’émission monétaires = estimation CO₂e indicative</div>
          <div class="stack">
            <div class="card soft" style="margin: 0;">
              <div class="label">Version des facteurs</div>
              <div class="value">${escapeHtml(sample.factorVersion)}</div>
            </div>
            <div class="card soft" style="margin: 0;">
              <div class="label">Transférabilité</div>
              <div class="value">Non transférable.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="card soft">
        <h3 class="section-title">7. Cadres de référence cités à titre de contexte</h3>
        <p class="text">Les cadres suivants sont cités uniquement pour situer la méthode spend-based dans son contexte méthodologique. Ils ne constituent pas une validation, une certification ou une conformité réglementaire de l’attestation.</p>
        <div class="reference-grid">
          <ul>
            <li>GHG Protocol — Scope 3 (méthode basée sur les dépenses)</li>
            <li>ISO 14064-1 (référence)</li>
          </ul>
          <ul>
            <li>ISO 14083 (référence)</li>
            <li>CSRD / ESRS / Taxonomie UE (contexte)</li>
          </ul>
        </div>
        <p class="text muted" style="font-size: 7.8px;">Ce document ne constitue ni un inventaire de gaz à effet de serre, ni un audit, ni une vérification, ni une déclaration réglementaire au sens de la CSRD, des ESRS ou de tout cadre équivalent.</p>
      </div>

      <div class="verification-grid">
        <div class="card tint verification-card">
          <h3 class="section-title">Vérification simple</h3>
          <p class="text">Scanner le QR code ou utiliser la référence d’attestation sur la page officielle de vérification. La vérification permet de contrôler l’identifiant, l’émetteur, la date, la période de validité et les éléments d’intégrité documentaire.</p>
          <p class="text" style="margin-top: 2mm;"><span class="strong">Contrôle rapide possible</span></p>
          <ul>
            <li>Référence</li>
            <li>Date</li>
            <li>Validité</li>
            <li>Résultat agrégé</li>
            <li>Page de vérification</li>
          </ul>
          <p class="text" style="margin-top: 2mm;"><span class="strong">Page de vérification documentaire</span><br />${escapeHtml(sample.publicVerificationUrl)}</p>
          <p class="text muted" style="font-size: 7.8px;">Référence de l’attestation : ${escapeHtml(sample.attestationId)}</p>
        </div>

        <div class="card soft">
          <h3 class="section-title">Objet vérifiable</h3>
          <p class="text">Le PDF signé, son identifiant, son QR code et ses éléments d’intégrité constituent les éléments de contrôle documentaire.</p>
          <ul>
            <li>Identifiant unique</li>
            <li>Émetteur déclaré</li>
            <li>Date d’émission</li>
            <li>Période de validité</li>
            <li>Résultat CO₂e agrégé</li>
            <li>Éléments d’intégrité</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <h3 class="section-title">8. Annexe technique de vérification</h3>
        <p class="text muted">Les éléments ci-dessous permettent une vérification documentaire avancée. Ils sont fournis à titre technique et ne nécessitent aucune action de la part d’un lecteur standard. Dans cet exemple gratuit, les éléments techniques sont volontairement non valables.</p>

        <div class="technical-grid" style="margin-top: 3mm;">
          <div class="label">Algorithme</div>
          <div>${escapeHtml(sample.algorithm)}</div>

          <div class="label">Empreinte du contenu signé (SHA-256)</div>
          <div>${escapeHtml(sample.hash)}</div>

          <div class="label">Signature (base64)</div>
          <div>${escapeHtml(sample.signature)}</div>

          <div class="label">Clé publique de vérification de l’émetteur</div>
          <div>${escapeHtml(sample.publicKey)}</div>
        </div>
      </div>

      <div class="card tint">
        <h3 class="section-title">9. Périmètre et limites</h3>
        <p class="text">Aucune donnée d’activité physique. Aucune émission de Scope 1 ou de Scope 2. Modèle strictement indicatif.</p>

        <div class="limits-grid">
          <div>
            <h4 class="section-title" style="font-size: 8.8px;">Exclusions explicites</h4>
            <p class="text">Aucune donnée physique détaillée, aucun calcul direct des émissions de Scope 1 ou Scope 2, aucun inventaire Scope 3 exhaustif, aucune certification et aucune validation externe ne sont inclus dans le périmètre de ce document.</p>
          </div>
          <div>
            <h4 class="section-title" style="font-size: 8.8px;">Responsabilité</h4>
            <p class="text">Les résultats sont exclusivement dérivés des données fournies par l’entité, sous sa seule responsabilité.</p>
          </div>
        </div>

        <p class="text" style="margin-top: 2mm;"><span class="strong">Ce document est émis en langue française.</span></p>
        <p class="text muted" style="font-size: 7.8px;">CS-SB-v1 est une méthodologie standardisée interne maintenue par Certif-Scope.</p>
      </div>

      <div class="synthesis">
        <h3 class="section-title">10. Synthèse de validité documentaire</h3>
        <p class="text">Cette attestation présente une estimation CO₂e indicative, agrégée, datée, standardisée et vérifiable. Elle constitue un support documentaire destiné à faciliter la transmission d’une information carbone simple, sans divulgation des données financières détaillées.</p>
        <p class="text" style="margin-top: 2mm;"><span class="strong">Mention exemple :</span> ce PDF est un exemple gratuit non valable et ne constitue pas une attestation émise après achat.</p>
      </div>
    </div>

    <footer class="footer">
      <div>Attestation indicative d’émissions de carbone · Émise par Certif-Scope · certif-scope.com</div>
      <div>Page 2 / 2</div>
    </footer>
  </section>
</body>
</html>
`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

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
      const error = await pdfResponse.text();
      return new Response(error, { status: pdfResponse.status });
    }

    const pdfBuffer = Buffer.from(await pdfResponse.arrayBuffer());

    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="certif-scope-exemple-attestation.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("Internal error", { status: 500 });
  }
}
