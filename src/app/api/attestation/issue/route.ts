export const runtime = "nodejs";

import Stripe from "stripe";
import QRCode from "qrcode";
import { signCanonicalPayload, makeAttestationId } from "@/lib/sign";
import {
  ATTESTATION_I18N,
  type AttestationLocale,
  DEFAULT_ATTESTATION_LOCALE,
} from "@/lib/attestation-i18n/index";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

/**
 * ======================================================
 * CERTIF-SCOPE — LOGO BASE64
 * ======================================================
 *
 * COLLE ICI TON BASE64 COMPLET DU LOGO CERTIF-SCOPE.
 *
 * Tu dois remplacer uniquement :
 * COLLE_ICI_LE_BASE64_COMPLET_DU_LOGO_CERTIF_SCOPE
 *
 * Ne modifie pas :
 * - les backticks `
 * - le .replace(/\s+/g, "")
 * - le reste du fichier
 */
const RAW_CERTIF_SCOPE_LOGO_BASE64 = `
COLLE_ICI_LE_BASE64_COMPLET_DU_LOGO_CERTIF_SCOPE
`.replace(/\s+/g, "");

const CERTIF_SCOPE_LOGO_BASE64 = RAW_CERTIF_SCOPE_LOGO_BASE64;

type I18nDictionary = Record<string, unknown>;

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
  if (Number.isNaN(parsed.getTime())) return "";

  const day = parsed.getUTCDate();
  parsed.setUTCMonth(parsed.getUTCMonth() + months);

  if (parsed.getUTCDate() !== day) {
    parsed.setUTCDate(0);
  }

  return parsed.toISOString().slice(0, 10);
}

function resolveLocale(input: unknown): AttestationLocale {
  const value = String(input || DEFAULT_ATTESTATION_LOCALE).toLowerCase();

  if (value === "fr" || value === "de" || value === "en") {
    return value as AttestationLocale;
  }

  return DEFAULT_ATTESTATION_LOCALE;
}

function getText(i18n: I18nDictionary, key: string, fallback: string): string {
  const value = i18n[key];

  if (typeof value === "string" && value.trim().length > 0) {
    return value;
  }

  return fallback;
}

function getList(
  i18n: I18nDictionary,
  key: string,
  fallback: string[]
): string[] {
  const value = i18n[key];

  if (Array.isArray(value)) {
    return value.map((item) => String(item));
  }

  return fallback;
}

function formatNumberForLocale(value: number, locale: AttestationLocale) {
  const localeTag =
    locale === "fr" ? "fr-FR" : locale === "de" ? "de-DE" : "en-US";

  return new Intl.NumberFormat(localeTag, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

function getLocaleCopy(locale: AttestationLocale) {
  if (locale === "fr") {
    return {
      lang: "fr",
      headerTagline: "Émission automatisée · Document CO₂e standardisé",
      eyebrow: "DOCUMENT CO₂e INDICATIF · STANDARDISÉ · VÉRIFIABLE",
      title: "ATTESTATION INDICATIVE D’ÉMISSIONS DE CARBONE",
      standardReference:
        "Émise selon la méthodologie standardisée Certif-Scope CS-SB-v1",
      subtitle:
        "Document non réglementaire · Non substitutif à un audit carbone · Résultat agrégé indicatif",
      resultLabel: "Résultat CO₂e indicatif agrégé",
      resultNote:
        "Estimation documentaire fondée sur des dépenses agrégées déclarées.",
      resultSubNote:
        "Base documentaire carbone simple, datée et vérifiable, destinée aux échanges professionnels.",
      scanToVerifyLabel: "Scanner le QR code\npour vérifier",
      attestationReferenceLabel: "Référence",
      issuedDateLabel: "Date d’émission",
      validUntilLabel: "Valable jusqu’au",
      issuerLabel: "Émetteur",
      entitySectionTitle: "Identification de l’entité",
      entityNameLabel: "Nom de l’entité",
      countryLabel: "Pays",
      activitySectorLabel: "Secteur d’activité",
      reportingYearLabel: "Année de référence",
      entityIdentifierLabel: "Identifiant de l’entité",
      documentNatureSectionTitle: "Nature du document",
      documentNatureText:
        "Ce document constitue une attestation indicative d’émissions de carbone, émise à des fins d’information, de transmission documentaire, d’aide à la décision et d’évaluation préliminaire.",
      scopeSectionTitle: "Périmètre déclaré",
      scopeText:
        "L’estimation est dérivée exclusivement de données de dépenses agrégées déclarées par l’entité. Elle ne repose pas sur des données physiques détaillées et ne constitue pas un inventaire GES complet.",
      intendedUseTitle: "Usage prévu du document",
      intendedUseText:
        "Cette attestation peut être utilisée comme pièce carbone indicative dans un dossier fournisseur, une demande client, un appel d’offres, une demande bancaire, une demande d’assurance ou une démarche interne, lorsque aucun audit carbone complet, aucune vérification externe et aucun référentiel réglementaire spécifique ne sont explicitement exigés.",
      institutionalReadingTitle: "Lecture par un tiers",
      institutionalReadingText:
        "Un lecteur externe peut contrôler la cohérence documentaire de l’attestation à partir de son identifiant, de sa date d’émission, de sa période de validité, de son résultat agrégé et de la page de vérification.",
      confidentialityTitle: "Confidentialité renforcée",
      confidentialityText:
        "Aucune donnée financière détaillée n’est affichée dans cette attestation. Seul le résultat CO₂e agrégé est présenté afin de faciliter une transmission externe sans divulguer les dépenses internes détaillées.",
      verifiabilityTitle: "Vérification documentaire",
      verifiabilityText:
        "L’attestation comporte une référence unique, un QR code et des éléments de contrôle permettant une vérification documentaire indépendante.",
      validityTitle: "Validité encadrée",
      validityText:
        "La validité documentaire est limitée à la période indiquée et dépend de la stabilité des données déclarées et de la méthodologie applicable.",
      pageTwoTitle: "Méthodologie, vérification et limites",
      pageTwoIntro:
        "Cette page précise la méthode utilisée, les références de cohérence, les éléments de vérification et les limites documentaires de l’attestation.",
      pageTwoReferenceLabel: "Référence",
      pageTwoIssuerLabel: "Émetteur",
      methodologyTitle: "Principe méthodologique",
      methodologyLabel: "Méthodologie",
      methodologyValue: "Certif-Scope deterministic spend-based methodology v1.0",
      methodologyExplanation:
        "L’estimation repose sur une approche monétaire dite spend-based. Les dépenses agrégées déclarées par l’entité sont associées à des facteurs d’émission monétaires afin d’obtenir une estimation CO₂e indicative.",
      formulaText:
        "Dépenses agrégées déclarées × facteurs d’émission monétaires = estimation CO₂e indicative",
      factorVersionLabel: "Version des facteurs",
      transferabilityLabel: "Transférabilité",
      transferabilityText: "Non transférable.",
      referencesTitle: "Références de cohérence méthodologique",
      normativeText:
        "Les références ci-dessous sont mentionnées comme cadres de cohérence, de vocabulaire et d’alignement documentaire :",
      referencesList: [
        "GHG Protocol — Scope 3, méthode basée sur les dépenses",
        "ISO 14064-1 — quantification et reporting des émissions de gaz à effet de serre",
        "ISO 14083 — quantification des émissions liées aux chaînes de transport",
        "CSRD / ESRS — contexte européen de transparence extra-financière",
        "Taxonomie européenne — contexte général de durabilité",
      ],
      scopeNote:
        "Ces références ne confèrent pas à cette attestation le statut d’audit, d’inventaire GES réglementaire, de certification environnementale, de rapport CSRD/ESRS ou de vérification par tiers indépendant.",
      verificationSimpleTitle: "Vérification simple",
      verificationText:
        "Scanner le QR code ou utiliser la référence d’attestation sur la page officielle de vérification. La vérification permet de contrôler l’identifiant, l’émetteur, la date, la période de validité et les éléments d’intégrité documentaire.",
      quickCheckTitle: "Contrôle rapide possible",
      quickCheckItems: [
        "Référence",
        "Date",
        "Validité",
        "Résultat agrégé",
        "Page de vérification",
      ],
      pageVerificationLabel: "Page de vérification documentaire",
      verifiableObjectTitle: "Objet vérifiable",
      verifiableObjectText:
        "Le PDF signé, son identifiant, son QR code et ses éléments d’intégrité constituent les éléments de contrôle documentaire.",
      technicalElementsTitle: "Annexe technique de vérification",
      technicalElementsIntro:
        "Les éléments ci-dessous permettent une vérification documentaire avancée. Ils sont fournis à titre technique et ne nécessitent aucune action de la part d’un lecteur standard.",
      algorithmLabel: "Algorithme",
      hashLabel: "Empreinte du contenu signé",
      signatureLabel: "Signature",
      publicKeyLabel: "Clé publique de vérification de l’émetteur",
      perimeterLimitsTitle: "Périmètre et limites",
      limitationsText:
        "Cette attestation est indicative. Elle repose sur les données déclarées par l’entité et sur une méthodologie spend-based. Elle ne remplace pas un audit carbone, un inventaire GES complet, une vérification par tiers indépendant, un Bilan Carbone® ou un reporting réglementaire lorsque ceux-ci sont explicitement exigés.",
      exclusionsTitle: "Exclusions explicites",
      exclusionsText:
        "Aucune donnée physique détaillée, aucun calcul direct des émissions de Scope 1 ou Scope 2, aucun Scope 3 exhaustif, aucune certification et aucune validation externe ne sont inclus dans le périmètre de ce document.",
      liabilityLabel: "Responsabilité des données",
      liabilityText:
        "Les résultats dépendent exclusivement de l’exactitude, de la complétude et de la cohérence des données déclarées par l’entité.",
      conclusionTitle: "Synthèse de validité documentaire",
      conclusionText:
        "Cette attestation présente une estimation CO₂e indicative, agrégée, datée, standardisée et vérifiable. Elle constitue un support documentaire destiné à faciliter la transmission d’une information carbone simple, sans divulgation des données financières détaillées.",
      languageNotice:
        "Langue du document : en cas de divergence entre les versions linguistiques, la version anglaise prévaut.",
      methodologyNote:
        "CS-SB-v1 est une méthodologie standardisée interne maintenue par Certif-Scope.",
      footerText:
        "Attestation indicative d’émissions de carbone · Émise par Certif-Scope · certif-scope.com",
      footerPageLabel: "Page",
    };
  }

  if (locale === "de") {
    return {
      lang: "de",
      headerTagline:
        "Automatisierte Ausstellung · Standardisiertes CO₂e-Dokument",
      eyebrow: "INDIKATIVES CO₂e-DOKUMENT · STANDARDISIERT · VERIFIZIERBAR",
      title: "INDIKATIVE BESCHEINIGUNG ZU CO₂e-EMISSIONEN",
      standardReference:
        "Ausgestellt nach der standardisierten Certif-Scope-Methodik CS-SB-v1",
      subtitle:
        "Nicht regulatorisch · Kein Ersatz für ein CO₂-Audit · Aggregiertes indikatives Ergebnis",
      resultLabel: "Aggregiertes indikatives CO₂e-Ergebnis",
      resultNote:
        "Dokumentarische Schätzung auf Basis deklarierter aggregierter Ausgaben.",
      resultSubNote:
        "Einfache, datierte und verifizierbare CO₂e-Dokumentationsgrundlage für geschäftliche Austauschprozesse.",
      scanToVerifyLabel: "QR-Code scannen\nzur Verifizierung",
      attestationReferenceLabel: "Referenz",
      issuedDateLabel: "Ausstellungsdatum",
      validUntilLabel: "Gültig bis",
      issuerLabel: "Aussteller",
      entitySectionTitle: "Identifikation der Einheit",
      entityNameLabel: "Name der Einheit",
      countryLabel: "Land",
      activitySectorLabel: "Tätigkeitsbereich",
      reportingYearLabel: "Bezugsjahr",
      entityIdentifierLabel: "Identifikator der Einheit",
      documentNatureSectionTitle: "Art des Dokuments",
      documentNatureText:
        "Dieses Dokument ist eine indikative Bescheinigung zu CO₂e-Emissionen und dient der Information, Dokumentation, Entscheidungsunterstützung und Vorbewertung.",
      scopeSectionTitle: "Deklarierter Umfang",
      scopeText:
        "Die Schätzung wird ausschließlich aus aggregierten Ausgabendaten abgeleitet, die von der Einheit deklariert wurden. Sie basiert nicht auf detaillierten physischen Daten und stellt kein vollständiges THG-Inventar dar.",
      intendedUseTitle: "Vorgesehene Verwendung",
      intendedUseText:
        "Diese Bescheinigung kann als indikatives CO₂e-Dokument in Lieferantenunterlagen, Kundenanfragen, Ausschreibungen, Bank- oder Versicherungsanfragen oder internen Verfahren verwendet werden, wenn kein vollständiges CO₂-Audit, keine externe Prüfung und kein spezifischer regulatorischer Referenzrahmen ausdrücklich verlangt werden.",
      institutionalReadingTitle: "Lesbarkeit durch Dritte",
      institutionalReadingText:
        "Ein externer Leser kann die dokumentarische Kohärenz anhand der Referenz, des Ausstellungsdatums, der Gültigkeitsdauer, des aggregierten Ergebnisses und der Verifikationsseite prüfen.",
      confidentialityTitle: "Erhöhte Vertraulichkeit",
      confidentialityText:
        "In dieser Bescheinigung werden keine detaillierten Finanzdaten angezeigt. Es wird ausschließlich das aggregierte CO₂e-Ergebnis dargestellt, um eine externe Weitergabe ohne Offenlegung interner Ausgabendaten zu ermöglichen.",
      verifiabilityTitle: "Dokumentarische Verifikation",
      verifiabilityText:
        "Die Bescheinigung enthält eine eindeutige Referenz, einen QR-Code und Kontrollelemente für eine unabhängige dokumentarische Verifikation.",
      validityTitle: "Begrenzte Gültigkeit",
      validityText:
        "Die dokumentarische Gültigkeit ist auf den angegebenen Zeitraum begrenzt und hängt von der Stabilität der deklarierten Daten und der anwendbaren Methodik ab.",
      pageTwoTitle: "Methodik, Verifikation und Grenzen",
      pageTwoIntro:
        "Diese Seite erläutert die verwendete Methode, die Kohärenzreferenzen, die Verifikationselemente und die dokumentarischen Grenzen der Bescheinigung.",
      pageTwoReferenceLabel: "Referenz",
      pageTwoIssuerLabel: "Aussteller",
      methodologyTitle: "Methodisches Prinzip",
      methodologyLabel: "Methodik",
      methodologyValue: "Certif-Scope deterministic spend-based methodology v1.0",
      methodologyExplanation:
        "Die Schätzung basiert auf einem monetären spend-based Ansatz. Die deklarierten aggregierten Ausgaben werden mit monetären Emissionsfaktoren verknüpft, um eine indikative CO₂e-Schätzung zu erhalten.",
      formulaText:
        "Deklarierte aggregierte Ausgaben × monetäre Emissionsfaktoren = indikative CO₂e-Schätzung",
      factorVersionLabel: "Faktorversion",
      transferabilityLabel: "Übertragbarkeit",
      transferabilityText: "Nicht übertragbar.",
      referencesTitle: "Methodische Kohärenzreferenzen",
      normativeText:
        "Die folgenden Referenzen werden als Rahmen für Kohärenz, Terminologie und dokumentarische Ausrichtung genannt:",
      referencesList: [
        "GHG Protocol — Scope 3, spend-based Methode",
        "ISO 14064-1 — Quantifizierung und Berichterstattung von Treibhausgasemissionen",
        "ISO 14083 — Quantifizierung transportbezogener Emissionen",
        "CSRD / ESRS — europäischer Kontext der nichtfinanziellen Transparenz",
        "EU-Taxonomie — allgemeiner Nachhaltigkeitskontext",
      ],
      scopeNote:
        "Diese Referenzen verleihen dieser Bescheinigung nicht den Status eines Audits, eines regulatorischen THG-Inventars, einer Umweltzertifizierung, eines CSRD/ESRS-Berichts oder einer unabhängigen Drittprüfung.",
      verificationSimpleTitle: "Einfache Verifikation",
      verificationText:
        "Scannen Sie den QR-Code oder verwenden Sie die Bescheinigungsreferenz auf der offiziellen Verifikationsseite. Die Verifikation ermöglicht die Kontrolle von Identifikator, Aussteller, Datum, Gültigkeit und Integritätselementen.",
      quickCheckTitle: "Schnellprüfung möglich",
      quickCheckItems: [
        "Referenz",
        "Datum",
        "Gültigkeit",
        "Aggregiertes Ergebnis",
        "Verifikationsseite",
      ],
      pageVerificationLabel: "Dokumentarische Verifikationsseite",
      verifiableObjectTitle: "Verifizierbares Objekt",
      verifiableObjectText:
        "Das signierte PDF, seine Kennung, sein QR-Code und seine Integritätselemente bilden die dokumentarischen Kontrollelemente.",
      technicalElementsTitle: "Technischer Verifikationsanhang",
      technicalElementsIntro:
        "Die folgenden Elemente ermöglichen eine fortgeschrittene dokumentarische Verifikation. Sie werden technisch bereitgestellt und erfordern keine Aktion durch einen Standardleser.",
      algorithmLabel: "Algorithmus",
      hashLabel: "Fingerabdruck des signierten Inhalts",
      signatureLabel: "Signatur",
      publicKeyLabel: "Öffentlicher Verifikationsschlüssel des Ausstellers",
      perimeterLimitsTitle: "Umfang und Grenzen",
      limitationsText:
        "Diese Bescheinigung ist indikativ. Sie beruht auf den von der Einheit deklarierten Daten und auf einer spend-based Methodik. Sie ersetzt kein CO₂-Audit, kein vollständiges THG-Inventar, keine unabhängige Drittprüfung, kein Bilan Carbone® und kein regulatorisches Reporting, wenn diese ausdrücklich verlangt werden.",
      exclusionsTitle: "Ausdrückliche Ausschlüsse",
      exclusionsText:
        "Detaillierte physische Daten, direkte Scope-1- oder Scope-2-Berechnungen, ein vollständiger Scope 3, Zertifizierung und externe Validierung sind nicht Bestandteil dieses Dokuments.",
      liabilityLabel: "Verantwortung für die Daten",
      liabilityText:
        "Die Ergebnisse hängen ausschließlich von der Genauigkeit, Vollständigkeit und Kohärenz der von der Einheit deklarierten Daten ab.",
      conclusionTitle: "Zusammenfassung der dokumentarischen Gültigkeit",
      conclusionText:
        "Diese Bescheinigung stellt eine indikative, aggregierte, datierte, standardisierte und verifizierbare CO₂e-Schätzung dar. Sie dient der einfachen Weitergabe von CO₂e-Informationen ohne Offenlegung detaillierter Finanzdaten.",
      languageNotice:
        "Dokumentsprache: Bei Abweichungen zwischen Sprachversionen hat die englische Version Vorrang.",
      methodologyNote:
        "CS-SB-v1 ist eine interne standardisierte Methodik, die von Certif-Scope gepflegt wird.",
      footerText:
        "Indikative Bescheinigung zu Kohlenstoffemissionen · Ausgestellt von Certif-Scope · certif-scope.com",
      footerPageLabel: "Seite",
    };
  }

  return {
    lang: "en",
    headerTagline: "Automated issuance · Standardized CO₂e document",
    eyebrow: "INDICATIVE CO₂e DOCUMENT · STANDARDIZED · VERIFIABLE",
    title: "INDICATIVE CARBON EMISSIONS ATTESTATION",
    standardReference:
      "Issued according to the standardized Certif-Scope methodology CS-SB-v1",
    subtitle:
      "Non-regulatory document · Not a substitute for a carbon audit · Aggregated indicative result",
    resultLabel: "Aggregated indicative CO₂e result",
    resultNote:
      "Documentary estimate based on declared aggregated expenditure data.",
    resultSubNote:
      "Simple, dated and verifiable carbon documentation basis for professional exchanges.",
    scanToVerifyLabel: "Scan QR code\nto verify",
    attestationReferenceLabel: "Reference",
    issuedDateLabel: "Issued on",
    validUntilLabel: "Valid until",
    issuerLabel: "Issuer",
    entitySectionTitle: "Entity identification",
    entityNameLabel: "Entity name",
    countryLabel: "Country",
    activitySectorLabel: "Activity sector",
    reportingYearLabel: "Reference year",
    entityIdentifierLabel: "Entity identifier",
    documentNatureSectionTitle: "Nature of the document",
    documentNatureText:
      "This document is an indicative carbon emissions attestation issued for information, documentary transmission, decision-support and preliminary assessment purposes.",
    scopeSectionTitle: "Declared scope",
    scopeText:
      "The estimate is derived exclusively from aggregated expenditure data declared by the entity. It does not rely on detailed physical data and does not constitute a full GHG inventory.",
    intendedUseTitle: "Intended use of the document",
    intendedUseText:
      "This attestation may be used as an indicative carbon document in supplier files, client requests, tenders, banking requests, insurance requests or internal procedures, when no full carbon audit, external verification or specific regulatory framework is explicitly required.",
    institutionalReadingTitle: "Third-party reading",
    institutionalReadingText:
      "An external reader may check the documentary consistency of the attestation using its identifier, issue date, validity period, aggregated result and verification page.",
    confidentialityTitle: "Enhanced confidentiality",
    confidentialityText:
      "No detailed financial data is displayed in this attestation. Only the aggregated CO₂e result is presented to enable external transmission without disclosing detailed internal expenditures.",
    verifiabilityTitle: "Document verification",
    verifiabilityText:
      "The attestation includes a unique reference, a QR code and control elements enabling independent documentary verification.",
    validityTitle: "Controlled validity",
    validityText:
      "Document validity is limited to the stated period and depends on the stability of the declared data and applicable methodology.",
    pageTwoTitle: "Methodology, verification and limitations",
    pageTwoIntro:
      "This page specifies the method used, the consistency references, the verification elements and the documentary limitations of the attestation.",
    pageTwoReferenceLabel: "Reference",
    pageTwoIssuerLabel: "Issuer",
    methodologyTitle: "Methodological principle",
    methodologyLabel: "Methodology",
    methodologyValue: "Certif-Scope deterministic spend-based methodology v1.0",
    methodologyExplanation:
      "The estimate relies on a monetary spend-based approach. The aggregated expenditures declared by the entity are associated with monetary emission factors to obtain an indicative CO₂e estimate.",
    formulaText:
      "Declared aggregated expenditures × monetary emission factors = indicative CO₂e estimate",
    factorVersionLabel: "Factor version",
    transferabilityLabel: "Transferability",
    transferabilityText: "Non-transferable.",
    referencesTitle: "Methodological consistency references",
    normativeText:
      "The references below are mentioned as frameworks for consistency, vocabulary and documentary alignment:",
    referencesList: [
      "GHG Protocol — Scope 3, spend-based method",
      "ISO 14064-1 — quantification and reporting of greenhouse gas emissions",
      "ISO 14083 — quantification of transport-chain emissions",
      "CSRD / ESRS — European extra-financial transparency context",
      "EU Taxonomy — general sustainability context",
    ],
    scopeNote:
      "These references do not give this attestation the status of an audit, regulatory GHG inventory, environmental certification, CSRD/ESRS report or independent third-party verification.",
    verificationSimpleTitle: "Simple verification",
    verificationText:
      "Scan the QR code or use the attestation reference on the official verification page. Verification allows the identifier, issuer, date, validity period and documentary integrity elements to be checked.",
    quickCheckTitle: "Quick check available",
    quickCheckItems: [
      "Reference",
      "Date",
      "Validity",
      "Aggregated result",
      "Verification page",
    ],
    pageVerificationLabel: "Document verification page",
    verifiableObjectTitle: "Verifiable object",
    verifiableObjectText:
      "The signed PDF, its identifier, its QR code and its integrity elements form the documentary control elements.",
    technicalElementsTitle: "Technical verification annex",
    technicalElementsIntro:
      "The elements below enable advanced documentary verification. They are provided for technical purposes and require no action from a standard reader.",
    algorithmLabel: "Algorithm",
    hashLabel: "Signed content fingerprint",
    signatureLabel: "Signature",
    publicKeyLabel: "Issuer public verification key",
    perimeterLimitsTitle: "Scope and limitations",
    limitationsText:
      "This attestation is indicative. It relies on the data declared by the entity and on a spend-based methodology. It does not replace a carbon audit, a full GHG inventory, an independent third-party verification, a Bilan Carbone® or regulatory reporting when these are explicitly required.",
    exclusionsTitle: "Explicit exclusions",
    exclusionsText:
      "Detailed physical data, direct Scope 1 or Scope 2 calculations, exhaustive Scope 3, certification and external validation are not included in the scope of this document.",
    liabilityLabel: "Data responsibility",
    liabilityText:
      "The results depend exclusively on the accuracy, completeness and consistency of the data declared by the entity.",
    conclusionTitle: "Document validity summary",
    conclusionText:
      "This attestation presents an indicative, aggregated, dated, standardized and verifiable CO₂e estimate. It is a documentary support designed to facilitate simple carbon information transmission without disclosure of detailed financial data.",
    languageNotice:
      "Document language: In case of divergence between language versions, the English version shall prevail.",
    methodologyNote:
      "CS-SB-v1 is an internal standardized methodology maintained by Certif-Scope.",
    footerText:
      "Indicative carbon emissions attestation · Issued by Certif-Scope · certif-scope.com",
    footerPageLabel: "Page",
  };
}

export async function GET(req: Request) {
  try {
    if (!process.env.PDFSHIFT_API_KEY) {
      return new Response("PDFSHIFT_API_KEY missing", { status: 500 });
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return new Response("STRIPE_SECRET_KEY missing", { status: 500 });
    }

    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return new Response("Missing session_id", { status: 400 });
    }

    let metadataRaw: Record<string, unknown> = {};

    if (sessionId.startsWith("key_")) {
      metadataRaw = Object.fromEntries(searchParams.entries());
    } else {
      const session = await stripe.checkout.sessions.retrieve(sessionId);

      if (session.payment_status !== "paid") {
        return new Response("Payment not completed", { status: 403 });
      }

      metadataRaw = (session.metadata || {}) as Record<string, unknown>;
    }

    const locale = resolveLocale(metadataRaw.attestationLocale);
    const i18n = (ATTESTATION_I18N[locale] ||
      ATTESTATION_I18N.en) as unknown as I18nDictionary;
    const copy = getLocaleCopy(locale);

    const required = ["companyName", "totalCO2e", "year"];
    const missing = required.filter((key) => {
      const value = metadataRaw[key];
      return value === undefined || value === null || String(value).trim() === "";
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
    const companySectorRaw = String(metadataRaw.companySector || "—");
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

    const methodologyRaw = String(
      metadataRaw.methodology || copy.methodologyValue
    );

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

    const verifyUrl =
      locale === "fr"
        ? `https://www.certif-scope.com/fr/verify/?v=${verificationToken}`
        : `https://www.certif-scope.com/verify/?v=${verificationToken}`;

    const verificationDisplayUrl =
      locale === "fr"
        ? "https://www.certif-scope.com/fr/verify"
        : "https://www.certif-scope.com/verify";

    const qrDataUrl = await QRCode.toDataURL(verifyUrl, {
      width: 170,
      margin: 1,
      errorCorrectionLevel: "M",
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
    };

    const referencesList = getList(i18n, "referencesList", copy.referencesList);
    const quickCheckItems = getList(
      i18n,
      "quickCheckItems",
      copy.quickCheckItems
    );

    const html = `
<!doctype html>
<html lang="${locale}">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(getText(i18n, "title", copy.title))}</title>
  <style>
    @page {
      size: A4;
      margin: 9mm 11mm 9mm 11mm;
    }

    :root {
      --blue: #0B3A63;
      --accent: #1FB6C1;
      --ink: #1F2F3D;
      --muted: #667789;
      --muted-2: #8292A3;
      --line: #D7E1E8;
      --line-strong: #BFD0DC;
      --bg: #F8FAFC;
      --tint: #EEF8F9;
      --tint-2: #F3FBFC;
      --white: #FFFFFF;
      --shadow: rgba(11, 58, 99, 0.08);
      --serif: "Times New Roman", Georgia, serif;
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
      font-family: Arial, Helvetica, sans-serif;
      font-size: 8.85px;
      line-height: 1.35;
      -webkit-font-smoothing: antialiased;
    }

    body {
      width: 100%;
    }

    .page {
      min-height: 260mm;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .page-one {
      page-break-after: always;
    }

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .footer {
      margin-top: auto;
      padding-top: 5px;
      border-top: 1px solid var(--line);
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--muted);
      font-size: 7.2px;
      line-height: 1.1;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 5px;
      padding-bottom: 5px;
      border-bottom: 1.6px solid var(--blue);
    }

    .header-left {
      flex: 1;
      min-width: 0;
    }

    .logo {
      display: block;
      width: 235px;
      height: auto;
      max-height: 72px;
      object-fit: contain;
      object-position: left center;
      margin-bottom: 4px;
    }

    .issuer-site {
      color: var(--muted);
      font-size: 7.4px;
      line-height: 1.15;
      margin-bottom: 2px;
    }

    .issuer-site a {
      color: inherit;
      text-decoration: none;
    }

    .header-tagline {
      color: var(--muted);
      font-size: 7.5px;
      line-height: 1.15;
    }

    .qr-block {
      width: 70px;
      text-align: center;
      flex: 0 0 70px;
    }

    .qr {
      width: 64px;
      height: 64px;
      border: 1px solid var(--line);
      padding: 3px;
      background: #fff;
      border-radius: 4px;
      display: block;
      margin: 0 auto;
    }

    .qr-caption {
      margin-top: 3px;
      color: var(--ink);
      font-size: 6.6px;
      line-height: 1.08;
    }

    .title-zone {
      text-align: center;
      margin: 0 0 9px;
      padding: 0 18px;
    }

    .eyebrow {
      color: var(--accent);
      font-size: 7px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1.15px;
      margin-bottom: 3px;
    }

    h1 {
      margin: 0;
      color: var(--blue);
      font-size: 18.5px;
      line-height: 1.06;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1px;
    }

    .title-formal {
      margin-top: 4px;
      color: var(--ink);
      font-size: 8.5px;
      font-weight: 700;
    }

    .title-sub {
      margin-top: 2px;
      color: var(--muted);
      font-size: 7.3px;
      font-weight: 600;
    }

    .result-shell {
      display: flex;
      justify-content: center;
      margin-bottom: 7px;
    }

    .result-box {
      width: 70%;
      border: 2px solid var(--blue);
      border-radius: 10px;
      background: linear-gradient(180deg, #ffffff 0%, #F7FCFD 100%);
      padding: 11px 18px 12px;
      text-align: center;
      box-shadow: 0 5px 14px var(--shadow);
      page-break-inside: avoid;
    }

    .result-label {
      color: var(--muted);
      font-size: 7.8px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.7px;
      margin-bottom: 4px;
    }

    .result-value {
      color: var(--blue);
      font-family: var(--serif);
      font-size: 26px;
      line-height: 1;
      font-weight: 800;
      margin-bottom: 4px;
    }

    .result-note {
      color: var(--muted);
      font-size: 7.7px;
      font-weight: 600;
    }

    .result-subnote {
      margin-top: 3px;
      color: var(--blue);
      font-size: 7.6px;
      font-weight: 700;
    }

    .summary-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      border: 1px solid var(--line-strong);
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 7px;
      page-break-inside: avoid;
    }

    .summary-cell {
      padding: 6px 8px 7px;
      border-right: 1px solid var(--line-strong);
      background: #fff;
      min-height: 34px;
    }

    .summary-cell:last-child {
      border-right: none;
    }

    .summary-label {
      display: block;
      margin-bottom: 3px;
      color: var(--muted-2);
      font-size: 6.5px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.45px;
    }

    .summary-value {
      display: block;
      color: var(--ink);
      font-size: 8.2px;
      font-weight: 800;
      line-height: 1.2;
    }

    .card {
      border: 1px solid var(--line);
      border-radius: 6px;
      background: #fff;
      padding: 8px 10px;
      margin-bottom: 7px;
      page-break-inside: avoid;
    }

    .card.tint {
      background: var(--tint);
      border-color: #D4E9ED;
    }

    .card.soft {
      background: var(--bg);
    }

    .card.important {
      border-left: 4px solid var(--accent);
      padding-left: 9px;
      background: #F4FBFC;
    }

    .card.final {
      border: 1.5px solid var(--blue);
      border-left: 5px solid var(--accent);
      background: linear-gradient(180deg, #ffffff 0%, #F3FBFC 100%);
      padding: 9px 11px;
    }

    .card-title {
      margin: 0 0 4px;
      color: var(--blue);
      font-size: 8.5px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.35px;
      line-height: 1.12;
    }

    .card-text {
      margin: 0;
      color: var(--ink);
      font-size: 8.6px;
      line-height: 1.42;
    }

    .entity-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 7px 26px;
    }

    .entity-label {
      display: block;
      margin-bottom: 2px;
      color: var(--muted-2);
      font-size: 6.5px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.45px;
    }

    .entity-value {
      display: block;
      color: var(--ink);
      font-size: 8.3px;
      line-height: 1.22;
      font-weight: 800;
    }

    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 7px;
      margin-bottom: 0;
    }

    .proof-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 7px;
      margin-top: 0;
    }

    .proof-card {
      border: 1px solid var(--line);
      border-radius: 6px;
      background: var(--bg);
      padding: 9px 10px;
      min-height: 92px;
      page-break-inside: avoid;
    }

    .proof-title {
      margin: 0 0 4px;
      color: var(--blue);
      font-size: 8.2px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.3px;
      line-height: 1.12;
    }

    .proof-text {
      color: var(--ink);
      font-size: 8.25px;
      line-height: 1.36;
    }

    .page-two-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 14px;
      margin-bottom: 7px;
      padding-bottom: 6px;
      border-bottom: 1.4px solid var(--blue);
    }

    .page-two-title {
      margin: 0;
      color: var(--blue);
      font-size: 14.5px;
      line-height: 1.1;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.15px;
    }

    .page-two-intro {
      margin-top: 4px;
      color: var(--muted);
      font-size: 8px;
      line-height: 1.35;
      max-width: 460px;
    }

    .page-two-ref {
      text-align: right;
      color: var(--muted);
      font-size: 7.2px;
      line-height: 1.25;
      padding-top: 2px;
      min-width: 170px;
    }

    .method-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 7px;
    }

    .formula-box {
      margin-top: 6px;
      border: 1px solid #D4E9ED;
      border-radius: 5px;
      background: #EEF8F9;
      padding: 6px 8px;
      text-align: center;
      color: var(--blue);
      font-size: 8.15px;
      font-weight: 800;
    }

    .mini-stack {
      display: grid;
      grid-template-columns: 1fr;
      gap: 6px;
    }

    .mini-box {
      border: 1px solid var(--line);
      border-radius: 5px;
      background: var(--bg);
      padding: 7px 8px;
    }

    .mini-label {
      display: block;
      margin-bottom: 3px;
      color: var(--muted-2);
      font-size: 6.5px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.45px;
    }

    .mini-value {
      display: block;
      color: var(--ink);
      font-size: 8px;
      line-height: 1.25;
      font-weight: 800;
    }

    .reference-list {
      margin: 4px 0 0;
      padding-left: 14px;
      columns: 2;
      column-gap: 22px;
    }

    .reference-list li {
      margin-bottom: 2px;
      color: var(--ink);
      font-size: 8.15px;
      line-height: 1.32;
      break-inside: avoid;
    }

    .small-note {
      margin-top: 5px;
      color: var(--muted);
      font-size: 7.35px;
      line-height: 1.28;
    }

    .verification-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 7px;
    }

    .verification-card {
      border: 1px solid var(--line);
      border-radius: 6px;
      background: var(--bg);
      padding: 8px 9px;
      min-height: 82px;
      page-break-inside: avoid;
    }

    .verification-card.primary {
      border-left: 4px solid var(--accent);
      background: #F1FAFB;
      padding-left: 8px;
    }

    .verification-card h3 {
      margin: 0 0 4px;
      color: var(--blue);
      font-size: 8.3px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.3px;
      line-height: 1.12;
    }

    .verification-card p {
      margin: 0 0 4px;
      color: var(--ink);
      font-size: 7.85px;
      line-height: 1.3;
    }

    .verification-link {
      color: var(--blue);
      text-decoration: none;
      font-weight: 800;
      word-break: break-all;
    }

    .quick-check {
      margin-top: 5px;
      color: var(--ink);
      font-size: 7.6px;
      line-height: 1.25;
    }

    .quick-check strong {
      color: var(--blue);
      font-weight: 800;
    }

    .quick-check-list {
      margin-top: 3px;
      color: var(--ink);
      font-size: 7.6px;
      font-weight: 700;
      line-height: 1.25;
    }

    .technical-grid {
      display: grid;
      grid-template-columns: 118px 1fr;
      gap: 5px 10px;
      margin-top: 4px;
    }

    .tech-label {
      color: var(--muted-2);
      font-size: 6.15px;
      font-weight: 800;
      line-height: 1.2;
      text-transform: uppercase;
      letter-spacing: 0.35px;
    }

    .tech-value {
      color: #607080;
      font-size: 6.15px;
      line-height: 1.18;
      word-break: break-all;
    }

    .limit-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-top: 6px;
    }

    .limit-title {
      margin: 0 0 3px;
      color: var(--blue);
      font-size: 8px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.25px;
    }

    .language-note {
      margin-top: 6px;
      color: var(--ink);
      font-size: 7.45px;
      font-weight: 800;
    }

    .doc-standard {
      margin-top: 2px;
      color: var(--muted);
      font-size: 7.15px;
    }

    .section-number {
      color: var(--accent);
      font-weight: 900;
      margin-right: 3px;
    }
  </style>
</head>
<body>
  <div class="page page-one">
    <div class="content">
      <div class="header">
        <div class="header-left">
          ${
            CERTIF_SCOPE_LOGO_BASE64 &&
            !CERTIF_SCOPE_LOGO_BASE64.includes("COLLE_ICI")
              ? `<img src="data:image/png;base64,${CERTIF_SCOPE_LOGO_BASE64}" alt="Certif-Scope" class="logo" />`
              : ""
          }
          <div class="issuer-site"><a href="${metadata.issuerSite}">${metadata.issuerSite}</a></div>
          <div class="header-tagline">${escapeHtml(
            getText(i18n, "headerTagline", copy.headerTagline)
          )}</div>
        </div>

        <div class="qr-block">
          <img src="${qrDataUrl}" alt="QR verification" class="qr" />
          <div class="qr-caption">${escapeHtml(
            getText(i18n, "scanToVerifyLabel", copy.scanToVerifyLabel)
          ).replace(/\n/g, "<br/>")}</div>
        </div>
      </div>

      <div class="title-zone">
        <div class="eyebrow">${escapeHtml(copy.eyebrow)}</div>
        <h1>${escapeHtml(getText(i18n, "title", copy.title))}</h1>
        <div class="title-formal">${escapeHtml(
          getText(i18n, "standardReference", copy.standardReference)
        )}</div>
        <div class="title-sub">${escapeHtml(
          getText(i18n, "subtitle", copy.subtitle)
        )}</div>
      </div>

      <div class="result-shell">
        <div class="result-box">
          <div class="result-label">${escapeHtml(
            getText(i18n, "resultLabel", copy.resultLabel)
          )}</div>
          <div class="result-value">${metadata.totalCO2e} tCO₂e</div>
          <div class="result-note">${escapeHtml(
            getText(i18n, "resultNote", copy.resultNote)
          )}</div>
          <div class="result-subnote">${escapeHtml(
            getText(i18n, "resultSubNote", copy.resultSubNote)
          )}</div>
        </div>
      </div>

      <div class="summary-grid">
        <div class="summary-cell">
          <span class="summary-label">${escapeHtml(
            copy.attestationReferenceLabel
          )}</span>
          <span class="summary-value">${metadata.attestationId}</span>
        </div>
        <div class="summary-cell">
          <span class="summary-label">${escapeHtml(copy.issuedDateLabel)}</span>
          <span class="summary-value">${metadata.issuedDate}</span>
        </div>
        <div class="summary-cell">
          <span class="summary-label">${escapeHtml(copy.validUntilLabel)}</span>
          <span class="summary-value">${metadata.validUntil}</span>
        </div>
        <div class="summary-cell">
          <span class="summary-label">${escapeHtml(copy.issuerLabel)}</span>
          <span class="summary-value">${metadata.issuerName}</span>
        </div>
      </div>

      <div class="card">
        <h2 class="card-title"><span class="section-number">1.</span>${escapeHtml(
          copy.entitySectionTitle
        )}</h2>
        <div class="entity-grid">
          <div>
            <span class="entity-label">${escapeHtml(copy.entityNameLabel)}</span>
            <span class="entity-value">${metadata.companyName}</span>
          </div>
          <div>
            <span class="entity-label">${escapeHtml(copy.countryLabel)}</span>
            <span class="entity-value">${metadata.country}</span>
          </div>
          <div>
            <span class="entity-label">${escapeHtml(
              copy.activitySectorLabel
            )}</span>
            <span class="entity-value">${metadata.companySector}</span>
          </div>
          <div>
            <span class="entity-label">${escapeHtml(copy.reportingYearLabel)}</span>
            <span class="entity-value">${metadata.year}</span>
          </div>
          <div>
            <span class="entity-label">${escapeHtml(
              copy.entityIdentifierLabel
            )}</span>
            <span class="entity-value">${metadata.entityIdentifier}</span>
          </div>
          <div>
            <span class="entity-label">${escapeHtml(
              copy.attestationReferenceLabel
            )}</span>
            <span class="entity-value">${metadata.attestationId}</span>
          </div>
        </div>
      </div>

      <div class="two-col">
        <div class="card soft">
          <h2 class="card-title"><span class="section-number">2.</span>${escapeHtml(
            copy.documentNatureSectionTitle
          )}</h2>
          <p class="card-text">${escapeHtml(
            getText(i18n, "documentNatureText", copy.documentNatureText)
          )}</p>
        </div>

        <div class="card soft">
          <h2 class="card-title"><span class="section-number">3.</span>${escapeHtml(
            copy.scopeSectionTitle
          )}</h2>
          <p class="card-text">${escapeHtml(
            getText(i18n, "scopeText", copy.scopeText)
          )}</p>
        </div>
      </div>

      <div class="card important">
        <h2 class="card-title"><span class="section-number">4.</span>${escapeHtml(
          getText(i18n, "intendedUseTitle", copy.intendedUseTitle)
        )}</h2>
        <p class="card-text">${escapeHtml(
          getText(i18n, "intendedUseText", copy.intendedUseText)
        )}</p>
      </div>

      <div class="card tint">
        <h2 class="card-title"><span class="section-number">5.</span>${escapeHtml(
          getText(
            i18n,
            "institutionalReadingTitle",
            copy.institutionalReadingTitle
          )
        )}</h2>
        <p class="card-text">${escapeHtml(
          getText(
            i18n,
            "institutionalReadingText",
            copy.institutionalReadingText
          )
        )}</p>
      </div>

      <div class="proof-grid">
        <div class="proof-card">
          <h3 class="proof-title">${escapeHtml(copy.confidentialityTitle)}</h3>
          <div class="proof-text">${escapeHtml(
            getText(i18n, "confidentialityText", copy.confidentialityText)
          )}</div>
        </div>

        <div class="proof-card">
          <h3 class="proof-title">${escapeHtml(copy.verifiabilityTitle)}</h3>
          <div class="proof-text">${escapeHtml(
            getText(i18n, "verifiabilityText", copy.verifiabilityText)
          )}</div>
        </div>

        <div class="proof-card">
          <h3 class="proof-title">${escapeHtml(copy.validityTitle)}</h3>
          <div class="proof-text">${escapeHtml(
            getText(i18n, "validityText", copy.validityText)
          )}</div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div>${escapeHtml(copy.footerText)}</div>
      <div>${escapeHtml(copy.footerPageLabel)} 1 / 2</div>
    </div>
  </div>

  <div class="page page-two">
    <div class="content">
      <div class="page-two-header">
        <div>
          <h2 class="page-two-title">${escapeHtml(copy.pageTwoTitle)}</h2>
          <div class="page-two-intro">${escapeHtml(
            getText(i18n, "pageTwoIntro", copy.pageTwoIntro)
          )}</div>
        </div>

        <div class="page-two-ref">
          <div><strong>${escapeHtml(copy.pageTwoReferenceLabel)} :</strong> ${
            metadata.attestationId
          }</div>
          <div><strong>${escapeHtml(copy.pageTwoIssuerLabel)} :</strong> ${
            metadata.issuerName
          }</div>
        </div>
      </div>

      <div class="card">
        <h2 class="card-title"><span class="section-number">6.</span>${escapeHtml(
          copy.methodologyTitle
        )}</h2>

        <div class="method-grid">
          <div>
            <p class="card-text"><strong>${escapeHtml(
              copy.methodologyLabel
            )}</strong><br/>${metadata.methodology}</p>
            <p class="card-text" style="margin-top:5px;">${escapeHtml(
              getText(
                i18n,
                "methodologyExplanation",
                copy.methodologyExplanation
              )
            )}</p>
            <div class="formula-box">${escapeHtml(copy.formulaText)}</div>
          </div>

          <div class="mini-stack">
            <div class="mini-box">
              <span class="mini-label">${escapeHtml(
                copy.factorVersionLabel
              )}</span>
              <span class="mini-value">${metadata.factorVersion}</span>
            </div>
            <div class="mini-box">
              <span class="mini-label">${escapeHtml(
                copy.transferabilityLabel
              )}</span>
              <span class="mini-value">${escapeHtml(
                copy.transferabilityText
              )}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="card soft">
        <h2 class="card-title"><span class="section-number">7.</span>${escapeHtml(
          copy.referencesTitle
        )}</h2>
        <p class="card-text">${escapeHtml(
          getText(i18n, "normativeText", copy.normativeText)
        )}</p>
        <ul class="reference-list">
          ${referencesList.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
        <div class="small-note">${escapeHtml(
          getText(i18n, "scopeNote", copy.scopeNote)
        )}</div>
      </div>

      <div class="verification-grid">
        <div class="verification-card primary">
          <h3><span class="section-number">8.</span>${escapeHtml(
            copy.verificationSimpleTitle
          )}</h3>
          <p>${escapeHtml(
            getText(i18n, "verificationText", copy.verificationText)
          )}</p>

          <div class="quick-check">
            <strong>${escapeHtml(
              getText(i18n, "quickCheckTitle", copy.quickCheckTitle)
            )}</strong>
            <div class="quick-check-list">
              ${quickCheckItems.map((item) => escapeHtml(item)).join(" · ")}
            </div>
          </div>

          <p style="margin-top:5px;">
            <strong>${escapeHtml(copy.pageVerificationLabel)}</strong><br/>
            <a href="${verificationDisplayUrl}" class="verification-link">${verificationDisplayUrl}</a><br/>
            <span class="small-note">${escapeHtml(
              copy.pageTwoReferenceLabel
            )} : ${metadata.attestationId}</span>
          </p>
        </div>

        <div class="verification-card">
          <h3>${escapeHtml(copy.verifiableObjectTitle)}</h3>
          <p>${escapeHtml(
            getText(i18n, "verifiableObjectText", copy.verifiableObjectText)
          )}</p>
        </div>
      </div>

      <div class="card">
        <h2 class="card-title">${escapeHtml(copy.technicalElementsTitle)}</h2>
        <p class="small-note">${escapeHtml(
          getText(i18n, "technicalElementsIntro", copy.technicalElementsIntro)
        )}</p>

        <div class="technical-grid">
          <div class="tech-label">${escapeHtml(copy.algorithmLabel)}</div>
          <div class="tech-value">${metadata.algorithm}</div>

          <div class="tech-label">${escapeHtml(copy.hashLabel)}</div>
          <div class="tech-value">${metadata.hash}</div>

          <div class="tech-label">${escapeHtml(copy.signatureLabel)}</div>
          <div class="tech-value">${metadata.signature}</div>

          <div class="tech-label">${escapeHtml(copy.publicKeyLabel)}</div>
          <div class="tech-value">${metadata.publicKey}</div>
        </div>
      </div>

      <div class="card tint">
        <h2 class="card-title"><span class="section-number">9.</span>${escapeHtml(
          copy.perimeterLimitsTitle
        )}</h2>
        <p class="card-text">${escapeHtml(
          getText(i18n, "limitationsText", copy.limitationsText)
        )}</p>

        <div class="limit-grid">
          <div>
            <h3 class="limit-title">${escapeHtml(copy.exclusionsTitle)}</h3>
            <p class="card-text">${escapeHtml(
              getText(i18n, "exclusionsText", copy.exclusionsText)
            )}</p>
          </div>

          <div>
            <h3 class="limit-title">${escapeHtml(copy.liabilityLabel)}</h3>
            <p class="card-text">${escapeHtml(
              getText(i18n, "liabilityText", copy.liabilityText)
            )}</p>
          </div>
        </div>

        <div class="language-note">${escapeHtml(copy.languageNotice)}</div>
        <div class="doc-standard">${metadata.standardRef} · ${escapeHtml(
          copy.methodologyNote
        )}</div>
      </div>

      <div class="card final">
        <h2 class="card-title"><span class="section-number">10.</span>${escapeHtml(
          copy.conclusionTitle
        )}</h2>
        <p class="card-text">${escapeHtml(
          getText(i18n, "conclusionText", copy.conclusionText)
        )}</p>
      </div>
    </div>

    <div class="footer">
      <div>${escapeHtml(copy.footerText)}</div>
      <div>${escapeHtml(copy.footerPageLabel)} 2 / 2</div>
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
