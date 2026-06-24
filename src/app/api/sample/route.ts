export const runtime = "nodejs";

import QRCode from "qrcode";
import {
  type AttestationLocale,
  DEFAULT_ATTESTATION_LOCALE,
} from "@/lib/attestation-i18n/index";

const IS_SAMPLE = true;

const SUPPORTED_LOCALES: AttestationLocale[] = ["en", "fr", "de"];

type SampleContent = {
  filename: string;
  lang: string;
  issuerSite: string;
  qrUrl: string;
  headerTagline: string;
  qrCaption: string;
  topKicker: string;
  title: string;
  standardLine: string;
  subtitle: string;
  resultLabel: string;
  resultValue: string;
  resultNote: string;
  resultSubnote: string;
  referenceLabel: string;
  reference: string;
  issuedAtLabel: string;
  issuedAt: string;
  validUntilLabel: string;
  validUntil: string;
  issuerLabel: string;
  issuer: string;
  entityTitle: string;
  entityNameLabel: string;
  entityName: string;
  countryLabel: string;
  country: string;
  sectorLabel: string;
  sector: string;
  yearLabel: string;
  year: string;
  entityIdLabel: string;
  entityId: string;
  documentNatureTitle: string;
  documentNatureText: string;
  scopeTitle: string;
  scopeText: string;
  intendedUseTitle: string;
  intendedUseText: string;
  thirdPartyTitle: string;
  thirdPartyText: string;
  privacyTitle: string;
  privacyText: string;
  documentaryCheckTitle: string;
  documentaryCheckText: string;
  limitedValidityTitle: string;
  limitedValidityText: string;
  statusLabel: string;
  statusValue: string;
  displayedDataLabel: string;
  displayedDataValue: string;
  recommendedUseLabel: string;
  recommendedUseValue: string;
  pageOneFooter: string;
  pageTwoTitle: string;
  pageTwoIntro: string;
  methodTitle: string;
  methodLabel: string;
  methodName: string;
  methodText: string;
  formula: string;
  factorVersionLabel: string;
  factorVersion: string;
  transferabilityLabel: string;
  transferability: string;
  referencesTitle: string;
  referencesText: string;
  references: string[];
  referencesLimit: string;
  simpleCheckTitle: string;
  simpleCheckText: string;
  quickCheckLabel: string;
  quickCheckItems: string[];
  checkPageLabel: string;
  checkPageUrl: string;
  checkPageReferenceLabel: string;
  verifiableObjectTitle: string;
  verifiableObjectText: string;
  verifiableObjectItems: string[];
  technicalTitle: string;
  technicalText: string;
  technicalRows: [string, string][];
  limitsTitle: string;
  limitsText: string;
  exclusionsTitle: string;
  exclusionsText: string;
  responsibilityTitle: string;
  responsibilityText: string;
  languageNotice: string;
  methodologyNote: string;
  summaryTitle: string;
  summaryText: string;
  pageTwoFooter: string;
  watermarkMain: string;
  watermarkSub: string;
};

function isSupportedLocale(value: string | null): value is AttestationLocale {
  return SUPPORTED_LOCALES.includes(value as AttestationLocale);
}

function resolveSampleLocale(req: Request): AttestationLocale {
  const url = new URL(req.url);
  const queryLocale = url.searchParams.get("lang")?.toLowerCase() || null;

  if (isSupportedLocale(queryLocale)) {
    return queryLocale;
  }

  const referer = req.headers.get("referer") || "";

  if (referer.includes("/de")) {
    return "de";
  }

  if (referer.includes("/fr")) {
    return "fr";
  }

  return DEFAULT_ATTESTATION_LOCALE;
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function listItems(items: string[]) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function technicalRows(rows: [string, string][]) {
  return rows
    .map(
      ([label, value]) => `
        <div class="tech-label">${escapeHtml(label)}</div>
        <div class="tech-value">${escapeHtml(value)}</div>
      `,
    )
    .join("");
}

const DE_SAMPLE: SampleContent = {
  filename: "certif-scope-beispiel-bescheinigung.pdf",
  lang: "de",
  issuerSite: "https://www.certif-scope.com",
  qrUrl: "https://www.certif-scope.com/de/pruefen/demo",
  headerTagline: "Automatisierte Ausstellung · Standardisierte indikative Bescheinigung",
  qrCaption: "QR-Code scannen, um die Demo zu prüfen",
  topKicker: "INDIKATIVES CO₂E-DOKUMENT · STANDARDISIERT · KONTROLLIERBAR",
  title: "INDIKATIVE BESCHEINIGUNG ZU CO₂E-EMISSIONEN",
  standardLine: "Ausgestellt nach der internen standardisierten Methodik Certif-Scope CS-SB-v1",
  subtitle: "Nicht regulatorisch · Methodikbasiert · Indikative Bescheinigung",
  resultLabel: "ANGEGEBENE AGGREGIERTE INDIKATIVE EMISSIONEN",
  resultValue: "15 tCO₂e",
  resultNote: "Dokumentarische Schätzung auf Basis aggregierter angegebener Ausgaben.",
  resultSubnote: "Einfache, datierte und kontrollierbare CO₂e-Dokumentation für geschäftliche Unterlagen.",
  referenceLabel: "REFERENZ DER BESCHEINIGUNG",
  reference: "CS-SAMPLE-DE-2026-0001",
  issuedAtLabel: "AUSSTELLUNGSDATUM",
  issuedAt: "2026-05-20",
  validUntilLabel: "GÜLTIG BIS",
  validUntil: "2027-05-20",
  issuerLabel: "AUSSTELLER",
  issuer: "Certif-Scope",
  entityTitle: "1. IDENTIFIKATION DER EINHEIT",
  entityNameLabel: "NAME DER EINHEIT",
  entityName: "Beispielunternehmen GmbH",
  countryLabel: "LAND",
  country: "DE",
  sectorLabel: "TÄTIGKEITSBEREICH",
  sector: "Unternehmensdienstleistungen",
  yearLabel: "REFERENZJAHR",
  year: "2026",
  entityIdLabel: "KENNUNG DER EINHEIT",
  entityId: "—",
  documentNatureTitle: "2. ART DES DOKUMENTS",
  documentNatureText:
    "Dieses Dokument ist eine indikative CO₂e-Bescheinigung und dient ausschließlich der Information, der Vorprüfung und der Entscheidungsunterstützung.",
  scopeTitle: "3. UMFANG",
  scopeText:
    "Diese Bescheinigung liefert eine indikative Schätzung von Treibhausgasemissionen, abgeleitet ausschließlich aus aggregierten Ausgabedaten nach einer ausgabenbasierten Methodik (spend-based).",
  intendedUseTitle: "4. VORGESEHENE VERWENDUNG",
  intendedUseText:
    "Diese Bescheinigung kann als indikatives CO₂e-Dokument in Lieferantenunterlagen, Kundenanfragen, Ausschreibungen, Bankunterlagen, Versicherungsanfragen oder internen Vorgängen verwendet werden. Sie eignet sich für Situationen, in denen kein vollständiges CO₂-Audit, keine externe Prüfung und kein spezifischer regulatorischer Rahmen ausdrücklich verlangt werden.",
  thirdPartyTitle: "5. LESART DURCH DRITTE",
  thirdPartyText:
    "Ein externer Leser kann die dokumentarische Kohärenz der Bescheinigung anhand der Referenz, des Ausstellungsdatums, der Gültigkeit, des aggregierten Ergebnisses und der Prüfseite kontrollieren.",
  privacyTitle: "ERHÖHTE VERTRAULICHKEIT",
  privacyText:
    "In dieser Bescheinigung werden keine detaillierten Finanzdaten angezeigt. Es wird nur das aggregierte CO₂e-Ergebnis dargestellt, um eine externe Weitergabe ohne Offenlegung interner Ausgabendetails zu erleichtern.",
  documentaryCheckTitle: "DOKUMENTARISCHE PRÜFUNG",
  documentaryCheckText:
    "Die Bescheinigung enthält eine eindeutige Referenz, einen QR-Code und Kontrollelemente für eine unabhängige dokumentarische Prüfung.",
  limitedValidityTitle: "BEGRENZTE GÜLTIGKEIT",
  limitedValidityText:
    "Die Gültigkeitsdauer spiegelt die zeitliche Relevanz der Daten und der Methodik wider.",
  statusLabel: "DOKUMENTSTATUS",
  statusValue: "Indikativ · Aggregiert · Kontrollierbar",
  displayedDataLabel: "ANGEZEIGTE DATEN",
  displayedDataValue: "Nur CO₂e-Ergebnis",
  recommendedUseLabel: "EMPFOHLENE VERWENDUNG",
  recommendedUseValue: "Lieferant · Kunde · Bank · Versicherung",
  pageOneFooter: "Indikative CO₂e-Bescheinigung · Ausgestellt von Certif-Scope · certif-scope.com",
  pageTwoTitle: "METHODIK, PRÜFUNG UND GRENZEN",
  pageTwoIntro:
    "Diese Seite erläutert die verwendete Methodik, Kontextreferenzen, Prüfelemente und dokumentarische Grenzen der Bescheinigung.",
  methodTitle: "6. METHODISCHES PRINZIP",
  methodLabel: "Methodik",
  methodName: "Certif-Scope deterministic spend-based methodology v1.0",
  methodText:
    "Die Schätzung beruht auf einem monetären, ausgabenbasierten Ansatz. Die von der Einheit angegebenen aggregierten Ausgaben werden mit monetären Emissionsfaktoren verknüpft, um eine indikative CO₂e-Schätzung zu erhalten.",
  formula: "Aggregierte angegebene Ausgaben × monetäre Emissionsfaktoren = indikative CO₂e-Schätzung",
  factorVersionLabel: "FAKTORENVERSION",
  factorVersion: "Certif-Scope factors v1",
  transferabilityLabel: "ÜBERTRAGBARKEIT",
  transferability: "Nicht übertragbar.",
  referencesTitle: "7. REFERENZRAHMEN ZUR EINORDNUNG",
  referencesText:
    "Die folgenden Rahmen werden nur genannt, um die spend-based Methodik methodisch einzuordnen. Sie stellen keine Validierung, Zertifizierung oder regulatorische Konformität der Bescheinigung dar.",
  references: [
    "GHG Protocol — Scope 3 (spend-based)",
    "ISO 14064-1",
    "ISO 14083",
    "CSRD / ESRS / EU Taxonomy",
  ],
  referencesLimit:
    "Dieses Dokument ist weder ein Treibhausgasinventar noch ein Audit, keine Verifizierung und keine regulatorische Erklärung im Sinne von CSRD, ESRS oder einem vergleichbaren Rahmen.",
  simpleCheckTitle: "EINFACHE PRÜFUNG",
  simpleCheckText:
    "Den QR-Code scannen oder die Bescheinigungsreferenz auf der offiziellen Prüfseite verwenden. Die Prüfung erlaubt die Kontrolle von Kennung, Aussteller, Datum, Gültigkeitszeitraum und Integritätselementen.",
  quickCheckLabel: "Schnellprüfung möglich",
  quickCheckItems: ["Referenz", "Datum", "Gültigkeit", "Aggregiertes Ergebnis", "Prüfseite"],
  checkPageLabel: "Dokumentarische Prüfseite",
  checkPageUrl: "https://www.certif-scope.com/de/pruefen/demo",
  checkPageReferenceLabel: "REFERENZ DER BESCHEINIGUNG",
  verifiableObjectTitle: "PRÜFBARES OBJEKT",
  verifiableObjectText:
    "Das PDF, seine Kennung, der QR-Code und seine Integritätselemente bilden die dokumentarischen Kontrollelemente.",
  verifiableObjectItems: [
    "Eindeutige Kennung",
    "Angegebener Aussteller",
    "Ausstellungsdatum",
    "Gültigkeitszeitraum",
    "Aggregiertes CO₂e-Ergebnis",
    "Integritätselemente",
  ],
  technicalTitle: "8. TECHNISCHER PRÜFANHANG",
  technicalText:
    "Die folgenden Elemente ermöglichen eine erweiterte dokumentarische Prüfung. Sie dienen technischen Zwecken und erfordern keine Aktion durch einen Standardleser. Bei diesem Beispieldokument sind sie absichtlich fiktiv und nicht verifizierbar.",
  technicalRows: [
    ["ALGORITHMUS", "BEISPIEL — NICHT SIGNIERT"],
    ["FINGERABDRUCK DES SIGNIERTEN INHALTS (SHA-256)", "BEISPIEL_HASH_NICHT_GUELTIG"],
    ["SIGNATUR (BASE64)", "BEISPIEL_SIGNATURE_NICHT_GUELTIG"],
    ["ÖFFENTLICHER PRÜFSCHLÜSSEL DES AUSSTELLERS", "BEISPIEL_PUBLIC_KEY_NICHT_GUELTIG"],
  ],
  limitsTitle: "9. UMFANG UND GRENZEN",
  limitsText: "Keine physischen Aktivitätsdaten. Keine Scope-1- oder Scope-2-Emissionen. Streng indikatives Modell.",
  exclusionsTitle: "AUSDRÜCKLICHE AUSSCHLÜSSE",
  exclusionsText:
    "Detaillierte physische Daten, eine direkte Berechnung von Scope-1- oder Scope-2-Emissionen, ein vollständiges Scope-3-Inventar, eine Zertifizierung und eine externe Validierung sind nicht Bestandteil dieses Dokuments.",
  responsibilityTitle: "VERANTWORTUNG",
  responsibilityText:
    "Die Ergebnisse beruhen ausschließlich auf fiktiven Beispieldaten und stellen keine für eine reale Einheit ausgestellte Bescheinigung dar.",
  languageNotice: "Dieses Dokument wird in deutscher Sprache ausgestellt.",
  methodologyNote: "CS-SB-v1 ist eine von Certif-Scope gepflegte interne standardisierte Methodik.",
  summaryTitle: "10. ZUSAMMENFASSUNG DER DOKUMENTARISCHEN GÜLTIGKEIT",
  summaryText:
    "Diese Bescheinigung zeigt ein indikatives, aggregiertes, datiertes und standardisiertes CO₂e-Beispiel. Dieses PDF ist ein kostenloses, ungültiges und nicht signiertes Beispiel und stellt keine nach einem Kauf ausgestellte Bescheinigung dar.",
  pageTwoFooter: "Indikative CO₂e-Bescheinigung · Ausgestellt von Certif-Scope · certif-scope.com",
  watermarkMain: "KOSTENLOSES BEISPIEL",
  watermarkSub: "KEINE AUSGESTELLTE BESCHEINIGUNG",
};

const SAMPLE_CONTENT: Record<AttestationLocale, SampleContent> = {
  de: DE_SAMPLE,
  en: {
    ...DE_SAMPLE,
    filename: "certif-scope-sample-attestation.pdf",
    lang: "en",
    issuerSite: "https://www.certif-scope.com",
    qrUrl: "https://www.certif-scope.com/sample",
    qrCaption: "Scan the QR code to open the demo",
    title: "INDICATIVE CO₂E ATTESTATION",
    resultValue: "15 tCO₂e",
    reference: "CS-SAMPLE-EN-2026-0001",
    entityName: "Example Company Ltd",
    country: "EU",
    watermarkMain: "FREE SAMPLE",
    watermarkSub: "NOT AN ISSUED ATTESTATION",
  },
  fr: {
    ...DE_SAMPLE,
    filename: "certif-scope-exemple-attestation.pdf",
    lang: "fr",
    issuerSite: "https://www.certif-scope.com",
    qrUrl: "https://www.certif-scope.com/fr/verify/demo",
    qrCaption: "Scanner le QR code pour ouvrir la démo",
    title: "ATTESTATION INDICATIVE D'ÉMISSIONS CO₂E",
    resultValue: "15 tCO₂e",
    reference: "CS-SAMPLE-FR-2026-0001",
    entityName: "Entreprise Exemple SAS",
    country: "FR",
    watermarkMain: "EXEMPLE GRATUIT",
    watermarkSub: "AUCUNE ATTESTATION ÉMISE",
  },
};

function buildLogo() {
  return `
    <div class="brand">
      <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="35" cy="35" r="27" fill="none" stroke="#0B3A63" stroke-width="7" stroke-linecap="round" stroke-dasharray="125 45" />
        <circle cx="35" cy="35" r="27" fill="none" stroke="#1FB6C1" stroke-width="7" stroke-linecap="round" stroke-dasharray="55 115" transform="rotate(105 35 35)" />
        <path d="M22 36.5 31 45 49 24" fill="none" stroke="#0B3A63" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <div class="brand-name"><span>Certif-</span><strong>Scope</strong></div>
    </div>
  `;
}

function buildHtml(content: SampleContent, qrDataUrl: string) {
  const c = Object.fromEntries(
    Object.entries(content).map(([key, value]) => [
      key,
      typeof value === "string" ? escapeHtml(value) : value,
    ]),
  ) as unknown as SampleContent;

  return `<!doctype html>
<html lang="${c.lang}">
<head>
<meta charset="utf-8" />
<title>${c.title}</title>
<style>
  @page { size: A4; margin: 10mm 12mm; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    color: #102033;
    font-family: Inter, Arial, Helvetica, sans-serif;
    font-size: 9.2px;
    line-height: 1.35;
    -webkit-font-smoothing: antialiased;
  }
  .page {
    position: relative;
    min-height: 277mm;
    padding: 8mm 2mm 9mm;
    overflow: hidden;
  }
  .page-break { page-break-after: always; }
  .watermark {
    position: fixed;
    left: 15%;
    top: 43%;
    width: 70%;
    transform: rotate(-28deg);
    text-align: center;
    color: rgba(11, 58, 99, 0.08);
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    z-index: 0;
    pointer-events: none;
  }
  .watermark-main { font-size: 46px; }
  .watermark-sub { margin-top: 8px; font-size: 22px; }
  .content { position: relative; z-index: 1; }
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 3mm 6mm;
    border-bottom: 3px solid #0B3A63;
  }
  .brand { display: flex; align-items: center; gap: 10px; margin-bottom: 10mm; }
  .brand-name { font-size: 18px; font-weight: 800; color: #0B3A63; }
  .brand-name strong { color: #1FB6C1; }
  .site { color: #64748B; font-size: 9px; margin-left: 3px; }
  .tagline { color: #64748B; font-size: 9px; margin-left: 3px; margin-top: 3px; }
  .qr-box { text-align: center; }
  .qr-frame { border: 1px solid #D5E2EA; border-radius: 4px; padding: 8px; width: 138px; height: 138px; display: flex; align-items: center; justify-content: center; }
  .qr-frame img { width: 118px; height: 118px; }
  .qr-caption { margin-top: 5px; font-size: 7.5px; color: #31435A; }
  .title-block { text-align: center; padding: 8mm 12mm 5mm; }
  .kicker { color: #1FB6C1; font-size: 9px; font-weight: 800; letter-spacing: 0.22em; }
  h1 { margin: 4px 0 3px; color: #0B3A63; font-size: 22px; line-height: 1.1; letter-spacing: 0.02em; }
  .standard { color: #12253C; font-size: 9px; font-weight: 700; }
  .subtitle { color: #64748B; font-size: 9px; margin-top: 2px; }
  .result-box {
    width: 75%;
    margin: 4mm auto 7mm;
    border: 3px solid #0B3A63;
    border-radius: 11px;
    padding: 14px 18px 13px;
    text-align: center;
    background: rgba(255,255,255,0.92);
  }
  .result-label { color: #7B8796; font-size: 9px; font-weight: 800; letter-spacing: 0.16em; }
  .result-value { color: #0B3A63; font-size: 28px; font-weight: 900; margin-top: 3px; }
  .result-note { color: #64748B; margin-top: 4px; }
  .result-subnote { color: #102033; font-weight: 800; margin-top: 2px; }
  .meta-grid { display: grid; grid-template-columns: repeat(4, 1fr); border: 1px solid #CFE0EA; border-radius: 7px; overflow: hidden; margin: 0 3mm 7mm; }
  .meta-item { padding: 9px 13px; border-right: 1px solid #CFE0EA; min-height: 42px; background: rgba(255,255,255,0.9); }
  .meta-item:last-child { border-right: 0; }
  .label { color: #8A97A8; font-size: 7.5px; font-weight: 900; letter-spacing: 0.13em; text-transform: uppercase; }
  .value { color: #0B3A63; font-weight: 900; margin-top: 4px; }
  .card { border: 1px solid #CFE0EA; border-radius: 7px; padding: 12px 14px; background: rgba(255,255,255,0.9); }
  .soft { background: #F3FAFC; }
  .soft-blue { background: #EEF9FA; }
  h2, h3 { margin: 0 0 8px; color: #0B3A63; font-size: 12px; letter-spacing: 0.03em; }
  p { margin: 0; }
  .entity-card { margin: 0 3mm 6mm; }
  .entity-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px 90px; }
  .entity-grid .block { margin-bottom: 5px; }
  .two-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 6mm; margin: 0 3mm 6mm; }
  .full { margin: 0 3mm 6mm; }
  .three-cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5mm; margin: 0 3mm 6mm; }
  .status-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; margin: 0 3mm; border: 1px solid #CFE0EA; border-radius: 7px; overflow: hidden; }
  .status-grid > div { padding: 10px 14px; border-right: 1px solid #CFE0EA; background: rgba(255,255,255,0.92); }
  .status-grid > div:last-child { border-right: 0; }
  .footer { position: absolute; left: 5mm; right: 5mm; bottom: 4mm; border-top: 1px solid #D5E2EA; padding-top: 4px; color: #64748B; font-size: 8px; display: flex; justify-content: space-between; }
  .page2-header { display: flex; justify-content: space-between; align-items: flex-start; margin: 0 3mm 7mm; }
  .page2-title h1 { color: #0B3A63; font-size: 20px; margin: 0 0 4px; }
  .side-ref { text-align: right; color: #64748B; font-size: 8.5px; }
  .method-card { margin: 0 3mm 5mm; }
  .formula-grid { display: grid; grid-template-columns: 1.6fr 1fr; gap: 4mm; margin-top: 10px; }
  .formula { min-height: 62px; display: flex; align-items: center; color: #0B3A63; font-weight: 900; background: #EAF8FA; border: 1px solid #CFE0EA; border-radius: 6px; padding: 15px 18px; }
  .small-stack { display: grid; gap: 4mm; }
  .refs ul, .check-card ul, .object-card ul { margin: 6px 0 0 14px; padding: 0; }
  .refs li, .check-card li, .object-card li { margin-bottom: 3px; }
  .refs-list { columns: 2; }
  .check-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5mm; margin: 0 3mm 5mm; }
  .check-card { border-left: 5px solid #1FB6C1; background: #EAF8FA; }
  .object-card { background: #F6FAFC; }
  .tech { margin: 0 3mm 5mm; }
  .tech-grid { display: grid; grid-template-columns: 220px 1fr; gap: 7px 12px; margin-top: 8px; }
  .tech-label { color: #7B8796; font-size: 7.5px; font-weight: 900; letter-spacing: 0.12em; text-transform: uppercase; }
  .tech-value { color: #0B3A63; font-weight: 800; word-break: break-all; }
  .limits { margin: 0 3mm 5mm; background: #EAF8FA; }
  .limits-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8mm; margin-top: 8px; }
  .summary { margin: 0 3mm; border: 2px solid #0B3A63; }
</style>
</head>
<body>
  <div class="watermark"><div class="watermark-main">${c.watermarkMain}</div><div class="watermark-sub">${c.watermarkSub}</div></div>

  <section class="page page-break">
    <div class="content">
      <header class="topbar">
        <div>
          ${buildLogo()}
          <div class="site">${c.issuerSite}</div>
          <div class="tagline">${c.headerTagline}</div>
        </div>
        <div class="qr-box">
          <div class="qr-frame"><img src="${qrDataUrl}" alt="QR code" /></div>
          <div class="qr-caption">${c.qrCaption}</div>
        </div>
      </header>

      <div class="title-block">
        <div class="kicker">${c.topKicker}</div>
        <h1>${c.title}</h1>
        <div class="standard">${c.standardLine}</div>
        <div class="subtitle">${c.subtitle}</div>
      </div>

      <div class="result-box">
        <div class="result-label">${c.resultLabel}</div>
        <div class="result-value">${c.resultValue}</div>
        <div class="result-note">${c.resultNote}</div>
        <div class="result-subnote">${c.resultSubnote}</div>
      </div>

      <div class="meta-grid">
        <div class="meta-item"><div class="label">${c.referenceLabel}</div><div class="value">${c.reference}</div></div>
        <div class="meta-item"><div class="label">${c.issuedAtLabel}</div><div class="value">${c.issuedAt}</div></div>
        <div class="meta-item"><div class="label">${c.validUntilLabel}</div><div class="value">${c.validUntil}</div></div>
        <div class="meta-item"><div class="label">${c.issuerLabel}</div><div class="value">${c.issuer}</div></div>
      </div>

      <div class="card entity-card">
        <h2>${c.entityTitle}</h2>
        <div class="entity-grid">
          <div class="block"><div class="label">${c.entityNameLabel}</div><div class="value">${c.entityName}</div></div>
          <div class="block"><div class="label">${c.countryLabel}</div><div class="value">${c.country}</div></div>
          <div class="block"><div class="label">${c.sectorLabel}</div><div class="value">${c.sector}</div></div>
          <div class="block"><div class="label">${c.yearLabel}</div><div class="value">${c.year}</div></div>
          <div class="block"><div class="label">${c.entityIdLabel}</div><div class="value">${c.entityId}</div></div>
          <div class="block"><div class="label">${c.referenceLabel}</div><div class="value">${c.reference}</div></div>
        </div>
      </div>

      <div class="two-cols">
        <div class="card"><h2>${c.documentNatureTitle}</h2><p>${c.documentNatureText}</p></div>
        <div class="card soft"><h2>${c.scopeTitle}</h2><p>${c.scopeText}</p></div>
      </div>

      <div class="card full soft-blue"><h2>${c.intendedUseTitle}</h2><p>${c.intendedUseText}</p></div>
      <div class="card full soft-blue"><h2>${c.thirdPartyTitle}</h2><p>${c.thirdPartyText}</p></div>

      <div class="three-cols">
        <div class="card"><h3>${c.privacyTitle}</h3><p>${c.privacyText}</p></div>
        <div class="card"><h3>${c.documentaryCheckTitle}</h3><p>${c.documentaryCheckText}</p></div>
        <div class="card"><h3>${c.limitedValidityTitle}</h3><p>${c.limitedValidityText}</p></div>
      </div>

      <div class="status-grid">
        <div><div class="label">${c.statusLabel}</div><div class="value">${c.statusValue}</div></div>
        <div><div class="label">${c.displayedDataLabel}</div><div class="value">${c.displayedDataValue}</div></div>
        <div><div class="label">${c.recommendedUseLabel}</div><div class="value">${c.recommendedUseValue}</div></div>
      </div>
    </div>
    <footer class="footer"><span>${c.pageOneFooter}</span><span>Seite 1 / 2</span></footer>
  </section>

  <section class="page">
    <div class="content">
      <header class="page2-header">
        <div class="page2-title">
          <h1>${c.pageTwoTitle}</h1>
          <p>${c.pageTwoIntro}</p>
        </div>
        <div class="side-ref">
          <strong>${c.referenceLabel}</strong><br />${c.reference}<br /><br />
          <strong>${c.issuerLabel}</strong><br />${c.issuer}
        </div>
      </header>

      <div class="card method-card">
        <h2>${c.methodTitle}</h2>
        <p><strong>${c.methodLabel}</strong><br />${c.methodName}</p>
        <p style="margin-top:8px;">${c.methodText}</p>
        <div class="formula-grid">
          <div class="formula">${c.formula}</div>
          <div class="small-stack">
            <div class="card"><div class="label">${c.factorVersionLabel}</div><div class="value">${c.factorVersion}</div></div>
            <div class="card"><div class="label">${c.transferabilityLabel}</div><div class="value">${c.transferability}</div></div>
          </div>
        </div>
      </div>

      <div class="card full refs">
        <h2>${c.referencesTitle}</h2>
        <p>${c.referencesText}</p>
        <ul class="refs-list">${listItems(c.references)}</ul>
        <p style="margin-top:8px;color:#64748B;">${c.referencesLimit}</p>
      </div>

      <div class="check-grid">
        <div class="card check-card">
          <h2>${c.simpleCheckTitle}</h2>
          <p>${c.simpleCheckText}</p>
          <p style="margin-top:8px;"><strong>${c.quickCheckLabel}</strong></p>
          <ul>${listItems(c.quickCheckItems)}</ul>
          <p style="margin-top:8px;"><strong>${c.checkPageLabel}</strong><br /><span style="color:#0B3A63;font-weight:900;">${c.checkPageUrl}</span></p>
          <p style="margin-top:2px;color:#64748B;">${c.checkPageReferenceLabel} : ${c.reference}</p>
        </div>
        <div class="card object-card">
          <h2>${c.verifiableObjectTitle}</h2>
          <p>${c.verifiableObjectText}</p>
          <ul>${listItems(c.verifiableObjectItems)}</ul>
        </div>
      </div>

      <div class="card tech">
        <h2>${c.technicalTitle}</h2>
        <p style="color:#64748B;">${c.technicalText}</p>
        <div class="tech-grid">${technicalRows(c.technicalRows)}</div>
      </div>

      <div class="card limits">
        <h2>${c.limitsTitle}</h2>
        <p>${c.limitsText}</p>
        <div class="limits-grid">
          <div><h3>${c.exclusionsTitle}</h3><p>${c.exclusionsText}</p></div>
          <div><h3>${c.responsibilityTitle}</h3><p>${c.responsibilityText}</p></div>
        </div>
        <p style="margin-top:10px;"><strong>${c.languageNotice}</strong></p>
        <p style="margin-top:4px;color:#64748B;">${c.methodologyNote}</p>
      </div>

      <div class="card summary">
        <h2>${c.summaryTitle}</h2>
        <p>${c.summaryText}</p>
      </div>
    </div>
    <footer class="footer"><span>${c.pageTwoFooter}</span><span>Seite 2 / 2</span></footer>
  </section>
</body>
</html>`;
}

export async function GET(req: Request) {
  try {
    if (!IS_SAMPLE) {
      return new Response("Sample mode disabled", { status: 403 });
    }

    if (!process.env.PDFSHIFT_API_KEY) {
      return new Response("PDFSHIFT_API_KEY missing", { status: 500 });
    }

    const locale = resolveSampleLocale(req);
    const content = SAMPLE_CONTENT[locale] || SAMPLE_CONTENT.de;
    const qrDataUrl = await QRCode.toDataURL(content.qrUrl, { width: 150, margin: 1 });
    const html = buildHtml(content, qrDataUrl);

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

    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${content.filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("Internal error", { status: 500 });
  }
}
