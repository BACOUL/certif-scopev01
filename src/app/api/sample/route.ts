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
      issuerSite: "https://www.certif-scope.com",
      issuerName: "Certif-Scope",
      companyName: "Entreprise Exemple SAS",
      companySector: "Services aux entreprises",
      entityIdentifier: "—",
      country: "FR",
      year: "2026",
      totalCO2e: "15",
      attestationId: "CS-SAMPLE-2026-0001",
      issuedDate: "2026-05-20",
      validUntil: "2027-05-20",
      methodology: "Certif-Scope deterministic spend-based methodology v1.0",
      factorVersion: "Certif-Scope factors v1",
      algorithm: "EXEMPLE — NON SIGNÉ",
      hash: "SAMPLE_HASH_NOT_VALID",
      signature: "SAMPLE_SIGNATURE_NOT_VALID",
      publicKey: "SAMPLE_PUBLIC_KEY_NOT_VALID",
      verificationDisplayUrl: "https://www.certif-scope.com/fr/verify/demo",
    };

    const qrDataUrl = await QRCode.toDataURL(sample.verificationDisplayUrl, {
      errorCorrectionLevel: "H",
      width: 600,
      margin: 4,
      color: { dark: "#000000", light: "#FFFFFF" },
    });

    const metadata = Object.fromEntries(
      Object.entries(sample).map(([key, value]) => [key, escapeHtml(value)])
    ) as Record<keyof typeof sample, string>;

    const footerText =
      "Attestation indicative d’émissions de carbone · Émise par Certif-Scope · certif-scope.com";

    const html = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <title>ATTESTATION INDICATIVE D’ÉMISSIONS DE CARBONE</title>
  <style>
    @page { size: A4; margin: 7mm 10mm; }
    :root {
      --ink:#223243; --heading:#0B3A63; --accent:#1FB6C1;
      --line:#d6e0e7; --line-strong:#c5d3dc; --panel-soft:#f7fafc;
      --panel-tint:#eef7f8; --muted:#6f7e8b; --muted-2:#81909d;
      --serif:"Times New Roman", Georgia, serif;
    }
    * { box-sizing:border-box; }
    html, body { margin:0; padding:0; background:#fff; color:var(--ink); font-family:Inter, Arial, Helvetica, sans-serif; font-size:9.3px; line-height:1.36; -webkit-font-smoothing:antialiased; }
    .page { height:283mm; min-height:283mm; max-height:283mm; display:flex; flex-direction:column; overflow:hidden; position:relative; background:#fff; }
    .page-one { page-break-after:always; }
    .page::before { content:"EXEMPLE GRATUIT"; position:absolute; top:48%; left:50%; transform:translate(-50%,-50%) rotate(-28deg); color:rgba(11,58,99,.075); font-size:48px; font-weight:800; letter-spacing:2px; white-space:nowrap; pointer-events:none; z-index:50; }
    .page::after { content:"NE CONSTITUE PAS UNE ATTESTATION ÉMISE"; position:absolute; top:55%; left:50%; transform:translate(-50%,-50%) rotate(-28deg); color:rgba(11,58,99,.095); font-size:18px; font-weight:800; letter-spacing:1px; white-space:nowrap; pointer-events:none; z-index:50; }
    .content { flex:1; display:flex; flex-direction:column; min-height:0; }
    .page-one-flow { flex:1; display:flex; flex-direction:column; justify-content:space-around; gap:8px; min-height:0; padding-bottom:6px; }
    .page-two-flow { display:flex; flex-direction:column; gap:8px; min-height:0; }
    .footer { flex:0 0 auto; margin-top:6px; padding-top:4px; border-top:1px solid var(--line); display:flex; justify-content:space-between; color:var(--muted); font-size:7.3px; }
    .header { display:flex; justify-content:space-between; align-items:flex-start; gap:18px; padding-bottom:6px; border-bottom:2px solid var(--heading); break-inside:avoid; }
    .header-left { flex:1; display:flex; flex-direction:column; align-items:flex-start; gap:3px; }
    .logo { height:78px; width:auto; max-width:340px; object-fit:contain; display:block; }
    .issuer-site,.header-tagline { color:var(--muted); font-size:7.6px; line-height:1.18; }
    .issuer-site a { color:inherit; text-decoration:none; }
    .qr-block { width:46mm; text-align:center; flex:0 0 auto; }
    .qr { width:40mm; height:40mm; display:block; margin:0 auto; border:1px solid var(--line); padding:2mm; border-radius:4px; background:#fff; }
    .qr-caption { margin-top:3px; font-size:6.4px; line-height:1.1; color:var(--ink); }
    .title-zone { text-align:center; padding-top:1px; break-inside:avoid; }
    .eyebrow { color:var(--accent); font-size:7.3px; font-weight:800; letter-spacing:.95px; text-transform:uppercase; margin-bottom:4px; }
    h1 { margin:0; color:var(--heading); font-size:17px; line-height:1.05; font-weight:800; text-transform:uppercase; letter-spacing:.14px; }
    .title-formal { margin-top:4px; color:var(--ink); font-size:8.3px; font-weight:700; }
    .title-sub { margin-top:2px; color:var(--muted); font-size:7.5px; }
    .result-wrap { display:flex; justify-content:center; break-inside:avoid; }
    .result-box { width:74%; border:2px solid var(--heading); border-radius:10px; background:linear-gradient(180deg,#fff 0%,#fbfdff 100%); padding:13px 15px 14px; text-align:center; break-inside:avoid; }
    .result-label { color:var(--muted); font-size:7.35px; font-weight:800; letter-spacing:.68px; text-transform:uppercase; margin-bottom:5px; }
    .result-value { color:var(--heading); font-family:var(--serif); font-size:22px; line-height:1; font-weight:800; margin-bottom:4px; }
    .result-subline { color:var(--muted); font-size:7.45px; margin-bottom:3px; }
    .result-bottomline { color:var(--ink); font-size:7.3px; font-weight:700; }
    .summary-grid,.status-strip { display:grid; grid-template-columns:repeat(4,1fr); border:1px solid var(--line-strong); border-radius:6px; overflow:hidden; break-inside:avoid; }
    .summary-cell { background:#fff; padding:7px 9px; border-right:1px solid var(--line-strong); min-height:38px; }
    .summary-cell:last-child { border-right:none; }
    .label,.summary-label,.status-label,.mini-label,.tech-label { display:block; color:var(--muted-2); font-size:6.5px; font-weight:800; letter-spacing:.42px; text-transform:uppercase; margin-bottom:3px; }
    .value,.summary-value,.status-value,.mini-value { display:block; color:var(--ink); font-size:8.35px; font-weight:700; line-height:1.25; word-break:break-word; }
    .card { border:1px solid var(--line); border-radius:6px; background:#fff; padding:10px 12px; break-inside:avoid; }
    .soft { background:var(--panel-soft); } .tint { background:var(--panel-tint); }
    .card-title { margin:0 0 5px; color:var(--heading); font-size:8.6px; line-height:1.13; font-weight:800; letter-spacing:.3px; text-transform:uppercase; }
    .card-text { margin:0; color:var(--ink); font-size:8.25px; line-height:1.34; }
    .entity-card { min-height:98px; padding-top:11px; padding-bottom:11px; }
    .entity-grid,.two-col,.verification-grid,.limit-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px 30px; }
    .two-col,.verification-grid { gap:9px; }
    .two-col .card { min-height:78px; padding-top:11px; padding-bottom:11px; }
    .wide-card { min-height:70px; padding-top:11px; padding-bottom:11px; }
    .features { display:grid; grid-template-columns:repeat(3,1fr); gap:9px; break-inside:avoid; }
    .feature-card { border:1px solid var(--line); border-radius:6px; padding:13px 11px; background:var(--panel-soft); min-height:104px; break-inside:avoid; }
    .feature-title,.verification-card h3,.limit-subtitle { margin:0 0 5px; color:var(--heading); font-size:8.45px; line-height:1.12; font-weight:800; text-transform:uppercase; letter-spacing:.3px; }
    .feature-text,.limit-text { color:var(--ink); font-size:8.15px; line-height:1.32; }
    .status-strip { grid-template-columns:repeat(3,1fr); min-height:52px; }
    .status-cell { padding:10px 12px; min-height:52px; border-right:1px solid var(--line-strong); display:flex; flex-direction:column; justify-content:center; }
    .status-cell:last-child { border-right:none; }
    .status-value { color:var(--heading); }
    .page-two-top { display:flex; justify-content:space-between; align-items:flex-start; gap:12px; break-inside:avoid; }
    .page-two-head-left { flex:1; min-width:0; }
    .page-two-title { margin:0; color:var(--heading); font-size:14.4px; font-weight:800; line-height:1.08; text-transform:uppercase; letter-spacing:.18px; }
    .page-two-intro { margin-top:4px; color:var(--muted); font-size:7.9px; line-height:1.3; }
    .page-two-ref { flex:0 0 185px; text-align:right; color:var(--muted); font-size:7.5px; line-height:1.3; }
    .method-card { min-height:132px; }
    .section-grid-2 { display:grid; grid-template-columns:1.55fr 1fr; gap:8px; margin-top:8px; }
    .formula-box,.mini-box { border:1px solid var(--line); border-radius:5px; background:var(--panel-soft); padding:8px 9px; }
    .formula-box { min-height:53px; display:flex; align-items:center; justify-content:center; text-align:center; background:#eef7f8; color:var(--heading); font-size:8.45px; font-weight:700; line-height:1.28; }
    .references-card { min-height:98px; }
    .reference-list { margin:6px 0 0; padding-left:15px; columns:2; column-gap:24px; }
    .reference-list li { margin-bottom:3px; break-inside:avoid; color:var(--ink); font-size:8.25px; line-height:1.3; }
    .small-note { margin-top:5px; color:var(--muted); font-size:7.45px; line-height:1.3; }
    .verification-card { border:1px solid var(--line); border-radius:6px; background:var(--panel-soft); padding:10px 11px; min-height:135px; break-inside:avoid; }
    .verification-card.primary { background:#edf7f8; border-left:4px solid var(--accent); padding-left:9px; }
    .verification-card p { margin:0 0 6px; color:var(--ink); font-size:8.25px; line-height:1.34; }
    .verification-card ul { margin:0; padding-left:13px; } .verification-card li { margin:0 0 2px 0; font-size:8.15px; line-height:1.28; }
    .verification-link { color:var(--heading); font-weight:700; text-decoration:none; word-break:break-all; }
    .tech-card { min-height:107px; } .tech-card .small-note { margin-top:0; margin-bottom:7px; }
    .technical-grid { display:grid; grid-template-columns:142px 1fr; gap:6px 10px; margin-top:4px; }
    .tech-value { color:var(--ink); font-size:6.85px; line-height:1.22; word-break:break-all; }
    .limits-card { min-height:127px; } .limit-grid { gap:13px; margin-top:8px; }
    .language-note { margin-top:8px; color:var(--ink); font-size:7.75px; font-weight:700; line-height:1.25; }
    .doc-standard { margin-top:4px; color:var(--muted); font-size:7.2px; line-height:1.25; }
    .final-card { border-color:var(--heading); min-height:58px; padding-top:11px; padding-bottom:11px; }
    .final-card .card-text { font-size:8.45px; line-height:1.34; }
  </style>
</head>
<body>
  <div class="page page-one">
    <div class="content">
      <div class="page-one-flow">
        <div class="header"><div class="header-left"><img src="https://www.certif-scope.com/logo.png" alt="Certif-Scope" class="logo"/><div class="issuer-site"><a href="${metadata.issuerSite}">${metadata.issuerSite}</a></div><div class="header-tagline">Émission automatisée · Attestation indicative standardisée</div></div><div class="qr-block"><img src="${qrDataUrl}" alt="QR demonstration" class="qr"/><div class="qr-caption">Scanner le QR code pour vérifier</div></div></div>
        <div class="title-zone"><div class="eyebrow">DOCUMENT CO₂E INDICATIF · STANDARDISÉ · VÉRIFIABLE</div><h1>ATTESTATION INDICATIVE D’ÉMISSIONS DE CARBONE</h1><div class="title-formal">Émise selon la méthodologie standardisée interne Certif-Scope CS-SB-v1</div><div class="title-sub">Non réglementaire · Fondée sur une méthodologie · Attestation indicative</div></div>
        <div class="result-wrap"><div class="result-box"><div class="result-label">ÉMISSIONS INDICATIVES AGRÉGÉES DÉCLARÉES</div><div class="result-value">${metadata.totalCO2e} tCO₂e</div><div class="result-subline">Estimation documentaire fondée sur des dépenses agrégées déclarées.</div><div class="result-bottomline">Base documentaire carbone simple, datée et vérifiable, destinée aux échanges professionnels.</div></div></div>
        <div class="summary-grid"><div class="summary-cell"><span class="summary-label">RÉFÉRENCE DE L’ATTESTATION</span><span class="summary-value">${metadata.attestationId}</span></div><div class="summary-cell"><span class="summary-label">DATE D’ÉMISSION</span><span class="summary-value">${metadata.issuedDate}</span></div><div class="summary-cell"><span class="summary-label">VALABLE JUSQU’AU</span><span class="summary-value">${metadata.validUntil}</span></div><div class="summary-cell"><span class="summary-label">ÉMETTEUR</span><span class="summary-value">${metadata.issuerName}</span></div></div>
        <div class="card entity-card"><h2 class="card-title">1. IDENTIFICATION DE L’ENTITÉ</h2><div class="entity-grid"><div><span class="label">NOM DE L’ENTITÉ</span><span class="value">${metadata.companyName}</span></div><div><span class="label">PAYS</span><span class="value">${metadata.country}</span></div><div><span class="label">SECTEUR D’ACTIVITÉ</span><span class="value">${metadata.companySector}</span></div><div><span class="label">ANNÉE DE RÉFÉRENCE</span><span class="value">${metadata.year}</span></div><div><span class="label">IDENTIFIANT DE L’ENTITÉ</span><span class="value">${metadata.entityIdentifier}</span></div><div><span class="label">RÉFÉRENCE DE L’ATTESTATION</span><span class="value">${metadata.attestationId}</span></div></div></div>
        <div class="two-col"><div class="card soft"><h2 class="card-title">2. NATURE DU DOCUMENT</h2><p class="card-text">Ce document constitue une attestation indicative d’émissions de carbone, émise exclusivement à des fins d’information, d’aide à la décision et d’évaluation préliminaire.</p></div><div class="card soft"><h2 class="card-title">3. PÉRIMÈTRE</h2><p class="card-text">Cette attestation fournit une estimation indicative des émissions de gaz à effet de serre, dérivée exclusivement de données de dépenses agrégées, selon une méthodologie basée sur les dépenses (spend-based).</p></div></div>
        <div class="card tint wide-card"><h2 class="card-title">4. USAGE PRÉVU DU DOCUMENT</h2><p class="card-text">Cette attestation peut être utilisée comme pièce carbone indicative dans un dossier fournisseur, une demande client, un appel d’offres, une demande bancaire, une demande d’assurance ou une démarche interne. Elle est adaptée aux situations où aucun audit carbone complet, aucune vérification externe et aucun référentiel réglementaire spécifique ne sont explicitement exigés.</p></div>
        <div class="card tint wide-card"><h2 class="card-title">5. LECTURE PAR UN TIERS</h2><p class="card-text">Un lecteur externe peut contrôler la cohérence documentaire de l’attestation à partir de son identifiant, de sa date d’émission, de sa période de validité, de son résultat agrégé et de la page de vérification.</p></div>
        <div class="features"><div class="feature-card"><div class="feature-title">CONFIDENTIALITÉ RENFORCÉE</div><div class="feature-text">Aucune donnée financière détaillée n’est affichée dans cette attestation. Seul le résultat CO₂e agrégé est présenté afin de faciliter une transmission externe sans divulguer les dépenses internes détaillées.</div></div><div class="feature-card"><div class="feature-title">VÉRIFICATION DOCUMENTAIRE</div><div class="feature-text">L’attestation comporte une référence unique, un QR code et des éléments de contrôle permettant une vérification documentaire indépendante.</div></div><div class="feature-card"><div class="feature-title">VALIDITÉ ENCADRÉE</div><div class="feature-text">La période de validité reflète la pertinence temporelle des données et de la méthodologie.</div></div></div>
      </div>
      <div class="status-strip"><div class="status-cell"><div class="status-label">STATUT DOCUMENTAIRE</div><div class="status-value">Indicatif · Agrégé · Vérifiable</div></div><div class="status-cell"><div class="status-label">DONNÉES AFFICHÉES</div><div class="status-value">Résultat CO₂e uniquement</div></div><div class="status-cell"><div class="status-label">USAGE RECOMMANDÉ</div><div class="status-value">Dossier fournisseur · Client · Banque · Assurance</div></div></div>
    </div>
    <div class="footer"><div>${footerText}</div><div>Page 1 / 2</div></div>
  </div>
  <div class="page page-two">
    <div class="content">
      <div class="page-two-flow">
        <div class="page-two-top"><div class="page-two-head-left"><h2 class="page-two-title">MÉTHODOLOGIE, VÉRIFICATION ET LIMITES</h2><div class="page-two-intro">Cette page précise la méthode utilisée, les références de contexte, les éléments de vérification et les limites documentaires de l’attestation.</div></div><div class="page-two-ref"><div><strong>Référence de l’attestation</strong><br/>${metadata.attestationId}</div><div style="margin-top:4px;"><strong>Émetteur</strong><br/>${metadata.issuerName}</div></div></div>
        <div class="card method-card"><h2 class="card-title">6. PRINCIPE MÉTHODOLOGIQUE</h2><p class="card-text"><strong>Méthodologie</strong><br/>${metadata.methodology}</p><p class="card-text" style="margin-top:5px;">L’estimation repose sur une approche monétaire dite spend-based. Les dépenses agrégées déclarées par l’entité sont associées à des facteurs d’émission monétaires afin d’obtenir une estimation CO₂e indicative.</p><div class="section-grid-2"><div class="formula-box">Dépenses agrégées déclarées × facteurs d’émission monétaires = estimation CO₂e indicative</div><div><div class="mini-box" style="margin-bottom:8px;"><span class="mini-label">VERSION DES FACTEURS</span><span class="mini-value">${metadata.factorVersion}</span></div><div class="mini-box"><span class="mini-label">TRANSFÉRABILITÉ</span><span class="mini-value">Non transférable.</span></div></div></div></div>
        <div class="card soft references-card"><h2 class="card-title">7. CADRES DE RÉFÉRENCE CITÉS À TITRE DE CONTEXTE</h2><p class="card-text">Les cadres suivants sont cités uniquement pour situer la méthode spend-based dans son contexte méthodologique. Ils ne constituent pas une validation, une certification ou une conformité réglementaire de l’attestation.</p><ul class="reference-list"><li>GHG Protocol — Scope 3 (méthode basée sur les dépenses)</li><li>ISO 14064-1 (référence)</li><li>ISO 14083 (référence)</li><li>CSRD / ESRS / Taxonomie UE (contexte)</li></ul><div class="small-note">Ce document ne constitue ni un inventaire de gaz à effet de serre, ni un audit, ni une vérification, ni une déclaration réglementaire au sens de la CSRD, des ESRS ou de tout cadre équivalent.</div></div>
        <div class="verification-grid"><div class="verification-card primary"><h3>VÉRIFICATION SIMPLE</h3><p>Scanner le QR code ou utiliser la référence d’attestation sur la page officielle de vérification. La vérification permet de contrôler l’identifiant, l’émetteur, la date, la période de validité et les éléments d’intégrité documentaire.</p><p style="margin-top:6px;"><strong>Contrôle rapide possible</strong></p><ul><li>Référence</li><li>Date</li><li>Validité</li><li>Résultat agrégé</li><li>Page de vérification</li></ul><p style="margin-top:6px;"><strong>Page de vérification documentaire</strong><br/><a href="${metadata.verificationDisplayUrl}" class="verification-link">${metadata.verificationDisplayUrl}</a><br/><span class="small-note">Référence de l’attestation : ${metadata.attestationId}</span></p></div><div class="verification-card"><h3>OBJET VÉRIFIABLE</h3><p>Le PDF signé, son identifiant, son QR code et ses éléments d’intégrité constituent les éléments de contrôle documentaire.</p><ul><li>Identifiant unique</li><li>Émetteur déclaré</li><li>Date d’émission</li><li>Période de validité</li><li>Résultat CO₂e agrégé</li><li>Éléments d’intégrité</li></ul></div></div>
        <div class="card tech-card"><h2 class="card-title">8. ANNEXE TECHNIQUE DE VÉRIFICATION</h2><p class="small-note">Les éléments ci-dessous permettent une vérification documentaire avancée. Ils sont fournis à titre technique et ne nécessitent aucune action de la part d’un lecteur standard. Pour ce document exemple, ils sont volontairement fictifs et non vérifiables.</p><div class="technical-grid"><div class="tech-label">ALGORITHME</div><div class="tech-value">${metadata.algorithm}</div><div class="tech-label">EMPREINTE DU CONTENU SIGNÉ (SHA-256)</div><div class="tech-value">${metadata.hash}</div><div class="tech-label">SIGNATURE (BASE64)</div><div class="tech-value">${metadata.signature}</div><div class="tech-label">CLÉ PUBLIQUE DE VÉRIFICATION DE L’ÉMETTEUR</div><div class="tech-value">${metadata.publicKey}</div></div></div>
        <div class="card tint limits-card"><h2 class="card-title">9. PÉRIMÈTRE ET LIMITES</h2><p class="card-text">Aucune donnée d’activité physique. Aucune émission de Scope 1 ou de Scope 2. Modèle strictement indicatif.</p><div class="limit-grid"><div><div class="limit-subtitle">EXCLUSIONS EXPLICITES</div><div class="limit-text">Aucune donnée physique détaillée, aucun calcul direct des émissions de Scope 1 ou Scope 2, aucun inventaire Scope 3 exhaustif, aucune certification et aucune validation externe ne sont inclus dans le périmètre de ce document.</div></div><div><div class="limit-subtitle">RESPONSABILITÉ</div><div class="limit-text">Les résultats sont exclusivement dérivés de données fictives d’exemple et ne constituent pas une attestation émise à une entité réelle.</div></div></div><div class="language-note">Ce document est émis en langue française.</div><div class="doc-standard">CS-SB-v1 est une méthodologie standardisée interne maintenue par Certif-Scope.</div></div>
      </div>
      <div class="card final-card"><h2 class="card-title">10. SYNTHÈSE DE VALIDITÉ DOCUMENTAIRE</h2><p class="card-text">Cette attestation présente un exemple CO₂e indicatif, agrégé, daté et standardisé. Ce PDF est un exemple gratuit, non valable, non signé et ne constitue pas une attestation émise après achat.</p></div>
    </div>
    <div class="footer"><div>${footerText}</div><div>Page 2 / 2</div></div>
  </div>
</body>
</html>`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    const pdfResponse = await fetch("https://api.pdfshift.io/v3/convert/pdf", {
      method: "POST",
      headers: {
        "X-API-Key": pdfShiftApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ source: html, format: "A4", use_print: true }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!pdfResponse.ok) {
      const errorText = await pdfResponse.text();
      return new Response(errorText, { status: pdfResponse.status });
    }

    const pdfBuffer = Buffer.from(await pdfResponse.arrayBuffer());

    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="certif-scope-exemple-attestation.pdf"',
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
