export const runtime = "nodejs";

import QRCode from "qrcode";
import type { AttestationLocale } from "@/lib/attestation-i18n/index";

const IS_SAMPLE = true;
const SUPPORTED_LOCALES: AttestationLocale[] = ["en", "fr", "de"];

function isSupportedLocale(value: string | null): value is AttestationLocale {
  return SUPPORTED_LOCALES.includes(value as AttestationLocale);
}

function resolveSampleLocale(req: Request): AttestationLocale {
  const url = new URL(req.url);
  const queryLocale = url.searchParams.get("lang")?.toLowerCase() || null;

  if (isSupportedLocale(queryLocale)) return queryLocale;

  const referer = req.headers.get("referer") || "";
  if (referer.includes("/de")) return "de";
  if (referer.includes("/fr")) return "fr";

  return "fr";
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function htmlList(items: string[]) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

type Copy = {
  lang: string;
  filename: string;
  issuerSite: string;
  headerTagline: string;
  scanToVerifyLabel: string;
  eyebrow: string;
  title: string;
  standardReference: string;
  subtitle: string;
  resultLabel: string;
  resultSubline: string;
  resultBottomLine: string;
  attestationReferenceLabel: string;
  issuedDateLabel: string;
  validUntilLabel: string;
  issuerLabel: string;
  entitySectionTitle: string;
  entityNameLabel: string;
  countryLabel: string;
  activitySectorLabel: string;
  reportingYearLabel: string;
  entityIdentifierLabel: string;
  documentNatureSectionTitle: string;
  documentNatureText: string;
  scopeSectionTitle: string;
  scopeText: string;
  intendedUseSectionTitle: string;
  intendedUseText: string;
  thirdPartyReadingTitle: string;
  thirdPartyReadingText: string;
  confidentialityTitle: string;
  confidentialityText: string;
  verificationTitle: string;
  verificationText: string;
  validityTitle: string;
  validityText: string;
  statusStripDocumentTitle: string;
  statusStripDocumentValue: string;
  statusStripDataTitle: string;
  statusStripDataValue: string;
  statusStripUseTitle: string;
  statusStripUseValue: string;
  pageTwoTitle: string;
  pageTwoIntro: string;
  methodologySectionTitle: string;
  methodologyLabel: string;
  methodologyValue: string;
  methodologyText: string;
  formulaText: string;
  factorVersionLabel: string;
  transferabilityLabel: string;
  transferabilityText: string;
  referencesTitle: string;
  normativeText: string;
  referencesList: string[];
  scopeNote: string;
  verificationSimpleTitle: string;
  verificationSimpleText: string;
  quickCheckTitle: string;
  quickCheckItems: string[];
  pageVerificationLabel: string;
  verifiableObjectTitle: string;
  verifiableObjectText: string;
  verifiableObjectItems: string[];
  technicalElementsTitle: string;
  technicalElementsIntro: string;
  algorithmLabel: string;
  hashLabel: string;
  signatureLabel: string;
  publicKeyLabel: string;
  perimeterLimitsTitle: string;
  perimeterLimitsIntro: string;
  explicitExclusionsTitle: string;
  explicitExclusionsText: string;
  responsibilityTitle: string;
  responsibilityText: string;
  languageNotice: string;
  methodologyNote: string;
  finalSynthesisTitle: string;
  finalSynthesisText: string;
  footerText: string;
  footerPageLabel: string;
  watermark: string;
  invalidStatus: string;
};

type SampleData = {
  companyName: string;
  country: string;
  companySector: string;
  year: string;
  entityIdentifier: string;
  attestationId: string;
  issuedDate: string;
  validUntil: string;
  totalCO2e: string;
  issuerName: string;
  factorVersion: string;
  algorithm: string;
  hash: string;
  signature: string;
  publicKey: string;
  verificationDisplayUrl: string;
};

const COPY: Record<AttestationLocale, Copy> = {
  fr: {
    lang: "fr",
    filename: "certif-scope-exemple-attestation.pdf",
    issuerSite: "https://www.certif-scope.com",
    headerTagline: "Émission automatisée · Attestation indicative standardisée",
    scanToVerifyLabel: "Scanner le QR code pour vérifier",
    eyebrow: "DOCUMENT CO₂E INDICATIF · STANDARDISÉ · VÉRIFIABLE",
    title: "ATTESTATION INDICATIVE D’ÉMISSIONS DE CARBONE",
    standardReference:
      "Émise selon la méthodologie standardisée interne Certif-Scope CS-SB-v1",
    subtitle: "Non réglementaire · Fondée sur une méthodologie · Attestation indicative",
    resultLabel: "ÉMISSIONS INDICATIVES AGRÉGÉES DÉCLARÉES",
    resultSubline: "Estimation documentaire fondée sur des dépenses agrégées déclarées.",
    resultBottomLine:
      "Base documentaire carbone simple, datée et vérifiable, destinée aux échanges professionnels.",
    attestationReferenceLabel: "RÉFÉRENCE DE L’ATTESTATION",
    issuedDateLabel: "DATE D’ÉMISSION",
    validUntilLabel: "VALABLE JUSQU’AU",
    issuerLabel: "ÉMETTEUR",
    entitySectionTitle: "IDENTIFICATION DE L’ENTITÉ",
    entityNameLabel: "NOM DE L’ENTITÉ",
    countryLabel: "PAYS",
    activitySectorLabel: "SECTEUR D’ACTIVITÉ",
    reportingYearLabel: "ANNÉE DE RÉFÉRENCE",
    entityIdentifierLabel: "IDENTIFIANT DE L’ENTITÉ",
    documentNatureSectionTitle: "NATURE DU DOCUMENT",
    documentNatureText:
      "Ce document constitue une attestation indicative d’émissions de carbone, émise exclusivement à des fins d’information, d’aide à la décision et d’évaluation préliminaire.",
    scopeSectionTitle: "PÉRIMÈTRE",
    scopeText:
      "Cette attestation fournit une estimation indicative des émissions de gaz à effet de serre, dérivée exclusivement de données de dépenses agrégées, selon une méthodologie basée sur les dépenses (spend-based).",
    intendedUseSectionTitle: "USAGE PRÉVU DU DOCUMENT",
    intendedUseText:
      "Cette attestation peut être utilisée comme pièce carbone indicative dans un dossier fournisseur, une demande client, un appel d’offres, une demande bancaire, une demande d’assurance ou une démarche interne. Elle est adaptée aux situations où aucun audit carbone complet, aucune vérification externe et aucun référentiel réglementaire spécifique ne sont explicitement exigés.",
    thirdPartyReadingTitle: "LECTURE PAR UN TIERS",
    thirdPartyReadingText:
      "Un lecteur externe peut contrôler la cohérence documentaire de l’attestation à partir de son identifiant, de sa date d’émission, de sa période de validité, de son résultat agrégé et de la page de vérification.",
    confidentialityTitle: "CONFIDENTIALITÉ RENFORCÉE",
    confidentialityText:
      "Aucune donnée financière détaillée n’est affichée dans cette attestation. Seul le résultat CO₂e agrégé est présenté afin de faciliter une transmission externe sans divulguer les dépenses internes détaillées.",
    verificationTitle: "VÉRIFICATION DOCUMENTAIRE",
    verificationText:
      "L’attestation comporte une référence unique, un QR code et des éléments de contrôle permettant une vérification documentaire indépendante.",
    validityTitle: "VALIDITÉ ENCADRÉE",
    validityText:
      "La période de validité reflète la pertinence temporelle des données et de la méthodologie.",
    statusStripDocumentTitle: "STATUT DOCUMENTAIRE",
    statusStripDocumentValue: "Indicatif · Agrégé · Vérifiable",
    statusStripDataTitle: "DONNÉES AFFICHÉES",
    statusStripDataValue: "Résultat CO₂e uniquement",
    statusStripUseTitle: "USAGE RECOMMANDÉ",
    statusStripUseValue: "Dossier fournisseur · Client · Banque · Assurance",
    pageTwoTitle: "MÉTHODOLOGIE, VÉRIFICATION ET LIMITES",
    pageTwoIntro:
      "Cette page précise la méthode utilisée, les références de contexte, les éléments de vérification et les limites documentaires de l’attestation.",
    methodologySectionTitle: "PRINCIPE MÉTHODOLOGIQUE",
    methodologyLabel: "Méthodologie",
    methodologyValue: "Certif-Scope deterministic spend-based methodology v1.0",
    methodologyText:
      "L’estimation repose sur une approche monétaire dite spend-based. Les dépenses agrégées déclarées par l’entité sont associées à des facteurs d’émission monétaires afin d’obtenir une estimation CO₂e indicative.",
    formulaText:
      "Dépenses agrégées déclarées × facteurs d’émission monétaires = estimation CO₂e indicative",
    factorVersionLabel: "VERSION DES FACTEURS",
    transferabilityLabel: "TRANSFÉRABILITÉ",
    transferabilityText: "Non transférable.",
    referencesTitle: "CADRES DE RÉFÉRENCE CITÉS À TITRE DE CONTEXTE",
    normativeText:
      "Les cadres suivants sont cités uniquement pour situer la méthode spend-based dans son contexte méthodologique. Ils ne constituent pas une validation, une certification ou une conformité réglementaire de l’attestation.",
    referencesList: [
      "GHG Protocol – Scope 3 (méthode basée sur les dépenses)",
      "ISO 14064-1 (référence)",
      "ISO 14083 (référence)",
      "CSRD / ESRS / Taxonomie UE (contexte)",
    ],
    scopeNote:
      "Ce document ne constitue ni un inventaire de gaz à effet de serre, ni un audit, ni une vérification, ni une déclaration réglementaire au sens de la CSRD, des ESRS ou de tout cadre équivalent.",
    verificationSimpleTitle: "VÉRIFICATION SIMPLE",
    verificationSimpleText:
      "Scanner le QR code ou utiliser la référence d’attestation sur la page officielle de vérification. La vérification permet de contrôler l’identifiant, l’émetteur, la date, la période de validité et les éléments d’intégrité documentaire.",
    quickCheckTitle: "Contrôle rapide possible",
    quickCheckItems: ["Référence", "Date", "Validité", "Résultat agrégé", "Page de vérification"],
    pageVerificationLabel: "Page de vérification documentaire",
    verifiableObjectTitle: "OBJET VÉRIFIABLE",
    verifiableObjectText:
      "Le PDF signé, son identifiant, son QR code et ses éléments d’intégrité constituent les éléments de contrôle documentaire.",
    verifiableObjectItems: [
      "Identifiant unique",
      "Émetteur déclaré",
      "Date d’émission",
      "Période de validité",
      "Résultat CO₂e agrégé",
      "Éléments d’intégrité",
    ],
    technicalElementsTitle: "ANNEXE TECHNIQUE DE VÉRIFICATION",
    technicalElementsIntro:
      "Les éléments ci-dessous permettent une vérification documentaire avancée. Ils sont fournis à titre technique et ne nécessitent aucune action de la part d’un lecteur standard.",
    algorithmLabel: "ALGORITHME",
    hashLabel: "EMPREINTE DU CONTENU SIGNÉ (SHA-256)",
    signatureLabel: "SIGNATURE (BASE64)",
    publicKeyLabel: "CLÉ PUBLIQUE DE VÉRIFICATION DE L’ÉMETTEUR",
    perimeterLimitsTitle: "PÉRIMÈTRE ET LIMITES",
    perimeterLimitsIntro:
      "Aucune donnée d’activité physique. Aucune émission de Scope 1 ou de Scope 2. Modèle strictement indicatif.",
    explicitExclusionsTitle: "EXCLUSIONS EXPLICITES",
    explicitExclusionsText:
      "Aucune donnée physique détaillée, aucun calcul direct des émissions de Scope 1 ou Scope 2, aucun inventaire Scope 3 exhaustif, aucune certification et aucune validation externe ne sont inclus dans le périmètre de ce document.",
    responsibilityTitle: "RESPONSABILITÉ",
    responsibilityText:
      "Les résultats sont exclusivement dérivés de données fictives d’exemple et ne correspondent à aucune entité réelle.",
    languageNotice: "Ce document est émis en langue française.",
    methodologyNote:
      "CS-SB-v1 est une méthodologie standardisée interne maintenue par Certif-Scope.",
    finalSynthesisTitle: "SYNTHÈSE DE VALIDITÉ DOCUMENTAIRE",
    finalSynthesisText:
      "Cette attestation présente une estimation CO₂e indicative, agrégée, datée, standardisée et vérifiable. Cet exemple gratuit n’est pas une attestation émise et ne doit pas être présenté comme un document officiel.",
    footerText:
      "Attestation indicative d’émissions de carbone · Exemple non valable · certif-scope.com",
    footerPageLabel: "Page",
    watermark: "EXEMPLE GRATUIT · NON VALABLE",
    invalidStatus: "EXEMPLE NON VALABLE",
  },
  de: {
    lang: "de",
    filename: "certif-scope-beispiel-bescheinigung.pdf",
    issuerSite: "https://www.certif-scope.com",
    headerTagline:
      "Automatisierte Ausstellung · Standardisierte indikative Bescheinigung",
    scanToVerifyLabel: "QR-Code scannen zur Verifizierung",
    eyebrow: "INDIKATIVES CO₂E-DOKUMENT · STANDARDISIERT · VERIFIZIERBAR",
    title: "INDIKATIVE BESCHEINIGUNG ZU CO₂E-EMISSIONEN",
    standardReference:
      "Ausgestellt nach der internen standardisierten Certif-Scope-Methodik CS-SB-v1",
    subtitle: "Nicht regulatorisch · Methodikbasiert · Indikative Bescheinigung",
    resultLabel: "DEKLARIERTE AGGREGIERTE INDIKATIVE EMISSIONEN",
    resultSubline:
      "Dokumentarische Schätzung auf Basis deklarierter aggregierter Ausgaben.",
    resultBottomLine:
      "Einfaches, datiertes und verifizierbares CO₂e-Dokument für geschäftliche Unterlagen.",
    attestationReferenceLabel: "REFERENZ DER BESCHEINIGUNG",
    issuedDateLabel: "AUSSTELLUNGSDATUM",
    validUntilLabel: "GÜLTIG BIS",
    issuerLabel: "AUSSTELLER",
    entitySectionTitle: "IDENTIFIKATION DER EINHEIT",
    entityNameLabel: "NAME DER EINHEIT",
    countryLabel: "LAND",
    activitySectorLabel: "TÄTIGKEITSBEREICH",
    reportingYearLabel: "REFERENZJAHR",
    entityIdentifierLabel: "KENNUNG DER EINHEIT",
    documentNatureSectionTitle: "ART DES DOKUMENTS",
    documentNatureText:
      "Dieses Dokument stellt eine indikative Bescheinigung zu CO₂e-Emissionen dar und wird ausschließlich zu Informations-, Entscheidungsunterstützungs- und vorläufigen Bewertungszwecken ausgestellt.",
    scopeSectionTitle: "UMFANG",
    scopeText:
      "Diese Bescheinigung liefert eine indikative Schätzung der Treibhausgasemissionen, die ausschließlich aus aggregierten Ausgabendaten nach einer ausgabenbasierten Methodik (spend-based) abgeleitet wird.",
    intendedUseSectionTitle: "VORGESEHENE VERWENDUNG DES DOKUMENTS",
    intendedUseText:
      "Diese Bescheinigung kann als indikatives CO₂e-Dokument in Lieferantenunterlagen, Kundenanfragen, Ausschreibungen, Bankunterlagen, Versicherungsanfragen oder internen Vorgängen verwendet werden. Sie eignet sich für Situationen, in denen kein vollständiges CO₂-Audit, keine externe Prüfung und kein spezifischer regulatorischer Rahmen ausdrücklich verlangt werden.",
    thirdPartyReadingTitle: "LESART DURCH DRITTE",
    thirdPartyReadingText:
      "Ein externer Leser kann die dokumentarische Kohärenz der Bescheinigung anhand ihrer Kennung, ihres Ausstellungsdatums, ihrer Gültigkeitsdauer, ihres aggregierten Ergebnisses und der Prüfseite kontrollieren.",
    confidentialityTitle: "ERHÖHTE VERTRAULICHKEIT",
    confidentialityText:
      "In dieser Bescheinigung werden keine detaillierten Finanzdaten angezeigt. Nur das aggregierte CO₂e-Ergebnis wird dargestellt, um eine externe Weitergabe ohne Offenlegung interner Ausgabendetails zu erleichtern.",
    verificationTitle: "DOKUMENTARISCHE PRÜFUNG",
    verificationText:
      "Die Bescheinigung enthält eine eindeutige Referenz, einen QR-Code und Kontrollelemente für eine unabhängige dokumentarische Prüfung.",
    validityTitle: "EINGEGRENZTE GÜLTIGKEIT",
    validityText:
      "Die Gültigkeitsdauer spiegelt die zeitliche Relevanz der Daten und der Methodik wider.",
    statusStripDocumentTitle: "DOKUMENTSTATUS",
    statusStripDocumentValue: "Indikativ · Aggregiert · Verifizierbar",
    statusStripDataTitle: "ANGEZEIGTE DATEN",
    statusStripDataValue: "Nur CO₂e-Ergebnis",
    statusStripUseTitle: "EMPFOHLENE VERWENDUNG",
    statusStripUseValue: "Lieferantenunterlage · Kunde · Bank · Versicherung",
    pageTwoTitle: "METHODIK, PRÜFUNG UND GRENZEN",
    pageTwoIntro:
      "Diese Seite erläutert die verwendete Methodik, Kontextreferenzen, Prüfelemente und dokumentarische Grenzen der Bescheinigung.",
    methodologySectionTitle: "METHODISCHES PRINZIP",
    methodologyLabel: "Methodik",
    methodologyValue: "Certif-Scope deterministic spend-based methodology v1.0",
    methodologyText:
      "Die Schätzung beruht auf einem monetären, ausgabenbasierten Ansatz. Die von der Einheit deklarierten aggregierten Ausgaben werden mit monetären Emissionsfaktoren verknüpft, um eine indikative CO₂e-Schätzung zu erhalten.",
    formulaText:
      "Deklarierte aggregierte Ausgaben × monetäre Emissionsfaktoren = indikative CO₂e-Schätzung",
    factorVersionLabel: "FAKTORENVERSION",
    transferabilityLabel: "ÜBERTRAGBARKEIT",
    transferabilityText: "Nicht übertragbar.",
    referencesTitle: "REFERENZRAHMEN NUR ZU KONTEXTZWECKEN",
    normativeText:
      "Die folgenden Rahmenwerke werden ausschließlich genannt, um die spend-based Methodik in ihren methodischen Kontext einzuordnen. Sie stellen keine Validierung, Zertifizierung oder regulatorische Konformität der Bescheinigung dar.",
    referencesList: [
      "GHG Protocol – Scope 3 (spend-based Methode)",
      "ISO 14064-1 (Referenz)",
      "ISO 14083 (Referenz)",
      "CSRD / ESRS / EU-Taxonomie (Kontext)",
    ],
    scopeNote:
      "Dieses Dokument ist weder ein Treibhausgasinventar noch ein Audit, eine Verifizierung oder eine regulatorische Erklärung im Sinne der CSRD, der ESRS oder eines gleichwertigen Rahmens.",
    verificationSimpleTitle: "EINFACHE PRÜFUNG",
    verificationSimpleText:
      "Scannen Sie den QR-Code oder verwenden Sie die Referenz der Bescheinigung auf der offiziellen Prüfseite. Die Prüfung ermöglicht die Kontrolle von Kennung, Aussteller, Datum, Gültigkeitsdauer und Dokumentintegrität.",
    quickCheckTitle: "Schnellkontrolle möglich",
    quickCheckItems: ["Referenz", "Datum", "Gültigkeit", "Aggregiertes Ergebnis", "Prüfseite"],
    pageVerificationLabel: "Dokumentarische Prüfseite",
    verifiableObjectTitle: "VERIFIZIERBARES OBJEKT",
    verifiableObjectText:
      "Das signierte PDF, seine Kennung, sein QR-Code und seine Integritätselemente bilden die dokumentarischen Kontrollelemente.",
    verifiableObjectItems: [
      "Eindeutige Kennung",
      "Deklarierter Aussteller",
      "Ausstellungsdatum",
      "Gültigkeitsdauer",
      "Aggregiertes CO₂e-Ergebnis",
      "Integritätselemente",
    ],
    technicalElementsTitle: "TECHNISCHER PRÜFANHANG",
    technicalElementsIntro:
      "Die nachstehenden Elemente ermöglichen eine erweiterte dokumentarische Prüfung. Sie werden zu technischen Zwecken bereitgestellt und erfordern keine Aktion eines Standardlesers.",
    algorithmLabel: "ALGORITHMUS",
    hashLabel: "FINGERABDRUCK DES SIGNIERTEN INHALTS (SHA-256)",
    signatureLabel: "SIGNATUR (BASE64)",
    publicKeyLabel: "ÖFFENTLICHER PRÜFSCHLÜSSEL DES AUSSTELLERS",
    perimeterLimitsTitle: "UMFANG UND GRENZEN",
    perimeterLimitsIntro:
      "Keine physischen Aktivitätsdaten. Keine Scope-1- oder Scope-2-Emissionen. Streng indikatives Modell.",
    explicitExclusionsTitle: "AUSDRÜCKLICHE AUSSCHLÜSSE",
    explicitExclusionsText:
      "Keine detaillierten physischen Daten, keine direkte Berechnung von Scope-1- oder Scope-2-Emissionen, kein vollständiges Scope-3-Inventar, keine Zertifizierung und keine externe Validierung sind im Umfang dieses Dokuments enthalten.",
    responsibilityTitle: "VERANTWORTUNG",
    responsibilityText:
      "Die Ergebnisse beruhen ausschließlich auf fiktiven Beispieldaten und entsprechen keiner real ausgestellten Bescheinigung.",
    languageNotice: "Dieses Dokument wird in deutscher Sprache ausgestellt.",
    methodologyNote:
      "CS-SB-v1 ist eine interne standardisierte Methodik, die von Certif-Scope gepflegt wird.",
    finalSynthesisTitle: "ZUSAMMENFASSUNG DER DOKUMENTARISCHEN GÜLTIGKEIT",
    finalSynthesisText:
      "Diese Bescheinigung stellt eine indikative, aggregierte, datierte, standardisierte und verifizierbare CO₂e-Schätzung dar. Dieses kostenlose Beispiel ist keine ausgestellte Bescheinigung und darf nicht als offizielles Dokument vorgelegt werden.",
    footerText:
      "Indikative Bescheinigung zu CO₂e-Emissionen · Ungültiges Beispiel · certif-scope.com",
    footerPageLabel: "Seite",
    watermark: "KOSTENLOSES BEISPIEL · NICHT VERWENDBAR",
    invalidStatus: "UNGÜLTIGES BEISPIEL",
  },
  en: {
    lang: "en",
    filename: "certif-scope-sample-attestation.pdf",
    issuerSite: "https://www.certif-scope.com",
    headerTagline: "Automated issuance · Standardized indicative attestation",
    scanToVerifyLabel: "Scan QR code to verify",
    eyebrow: "INDICATIVE CO₂E DOCUMENT · STANDARDIZED · VERIFIABLE",
    title: "INDICATIVE CARBON EMISSIONS ATTESTATION",
    standardReference:
      "Issued under the internal standardized Certif-Scope methodology CS-SB-v1",
    subtitle: "Non-regulatory · Methodology-based · Indicative attestation",
    resultLabel: "DECLARED AGGREGATED INDICATIVE EMISSIONS",
    resultSubline: "Documentary estimate based on declared aggregated expenditures.",
    resultBottomLine:
      "Simple, dated and verifiable carbon document intended for professional exchanges.",
    attestationReferenceLabel: "ATTESTATION REFERENCE",
    issuedDateLabel: "ISSUED ON",
    validUntilLabel: "VALID UNTIL",
    issuerLabel: "ISSUER",
    entitySectionTitle: "IDENTIFICATION OF THE ENTITY",
    entityNameLabel: "ENTITY NAME",
    countryLabel: "COUNTRY",
    activitySectorLabel: "ACTIVITY SECTOR",
    reportingYearLabel: "REPORTING YEAR",
    entityIdentifierLabel: "ENTITY IDENTIFIER",
    documentNatureSectionTitle: "NATURE OF THE DOCUMENT",
    documentNatureText:
      "This document constitutes an indicative carbon emissions attestation issued exclusively for information, decision-support and preliminary assessment purposes.",
    scopeSectionTitle: "SCOPE",
    scopeText:
      "This attestation provides an indicative estimate of greenhouse gas emissions derived exclusively from aggregated expenditure data, using a spend-based methodology.",
    intendedUseSectionTitle: "INTENDED USE OF THE DOCUMENT",
    intendedUseText:
      "This attestation may be used as an indicative carbon document in supplier files, client requests, tenders, banking requests, insurance requests or internal use. It is suited to situations where no full carbon audit, no external verification and no specific regulatory framework are explicitly required.",
    thirdPartyReadingTitle: "THIRD-PARTY REVIEW",
    thirdPartyReadingText:
      "An external reader may review the documentary consistency of the attestation using its identifier, issuance date, validity period, aggregated result and verification page.",
    confidentialityTitle: "ENHANCED CONFIDENTIALITY",
    confidentialityText:
      "No detailed financial data are displayed in this attestation. Only the aggregated CO₂e result is presented in order to facilitate external transmission without disclosing internal detailed expenditures.",
    verificationTitle: "DOCUMENTARY VERIFICATION",
    verificationText:
      "The attestation contains a unique reference, a QR code and control elements enabling independent documentary verification.",
    validityTitle: "FRAMED VALIDITY",
    validityText: "The validity period reflects the temporal relevance of the data and methodology.",
    statusStripDocumentTitle: "DOCUMENT STATUS",
    statusStripDocumentValue: "Indicative · Aggregated · Verifiable",
    statusStripDataTitle: "DISPLAYED DATA",
    statusStripDataValue: "CO₂e result only",
    statusStripUseTitle: "RECOMMENDED USE",
    statusStripUseValue: "Supplier file · Client · Bank · Insurance",
    pageTwoTitle: "METHODOLOGY, VERIFICATION AND LIMITATIONS",
    pageTwoIntro:
      "This page details the methodology used, contextual references, verification elements and documentary limitations of the attestation.",
    methodologySectionTitle: "METHODOLOGICAL PRINCIPLE",
    methodologyLabel: "Methodology",
    methodologyValue: "Certif-Scope deterministic spend-based methodology v1.0",
    methodologyText:
      "The estimate is based on a monetary spend-based approach. Declared aggregated expenditures are associated with monetary emission factors in order to produce an indicative CO₂e estimate.",
    formulaText:
      "Declared aggregated expenditures × monetary emission factors = indicative CO₂e estimate",
    factorVersionLabel: "FACTOR VERSION",
    transferabilityLabel: "TRANSFERABILITY",
    transferabilityText: "Non-transferable.",
    referencesTitle: "REFERENCE FRAMEWORKS CITED FOR CONTEXT ONLY",
    normativeText:
      "The following frameworks are cited solely to situate the spend-based method in its methodological context. They do not constitute validation, certification or regulatory compliance of the attestation.",
    referencesList: [
      "GHG Protocol – Scope 3 (spend-based method)",
      "ISO 14064-1 (reference)",
      "ISO 14083 (reference)",
      "CSRD / ESRS / EU Taxonomy (context)",
    ],
    scopeNote:
      "This document does not constitute a full greenhouse-gas inventory, an audit, a verification or a regulatory declaration within the meaning of CSRD, ESRS or any equivalent framework.",
    verificationSimpleTitle: "SIMPLE VERIFICATION",
    verificationSimpleText:
      "Scan the QR code or use the attestation reference on the official verification page. Verification allows the identifier, issuer, date, validity period and documentary integrity elements to be checked.",
    quickCheckTitle: "Quick check available",
    quickCheckItems: ["Reference", "Date", "Validity", "Aggregated result", "Verification page"],
    pageVerificationLabel: "Document verification page",
    verifiableObjectTitle: "VERIFIABLE OBJECT",
    verifiableObjectText:
      "The signed PDF, its identifier, QR code and integrity elements constitute the documentary control elements.",
    verifiableObjectItems: [
      "Unique identifier",
      "Declared issuer",
      "Issuance date",
      "Validity period",
      "Aggregated CO₂e result",
      "Integrity elements",
    ],
    technicalElementsTitle: "TECHNICAL VERIFICATION ANNEX",
    technicalElementsIntro:
      "The elements below enable advanced documentary verification. They are provided for technical purposes and require no action from a standard reader.",
    algorithmLabel: "ALGORITHM",
    hashLabel: "SIGNED CONTENT HASH (SHA-256)",
    signatureLabel: "SIGNATURE (BASE64)",
    publicKeyLabel: "ISSUER PUBLIC VERIFICATION KEY",
    perimeterLimitsTitle: "SCOPE AND LIMITATIONS",
    perimeterLimitsIntro:
      "No physical activity data. No Scope 1 or Scope 2 emissions. Strictly indicative model.",
    explicitExclusionsTitle: "EXPLICIT EXCLUSIONS",
    explicitExclusionsText:
      "No detailed physical data, no direct calculation of Scope 1 or Scope 2 emissions, no exhaustive Scope 3 inventory, no certification and no external validation are included within the scope of this document.",
    responsibilityTitle: "RESPONSIBILITY",
    responsibilityText:
      "The results are derived exclusively from fictional sample data and do not correspond to a real issued attestation.",
    languageNotice: "This document is issued in English.",
    methodologyNote:
      "CS-SB-v1 is an internal standardized methodology maintained by Certif-Scope.",
    finalSynthesisTitle: "DOCUMENT VALIDITY SUMMARY",
    finalSynthesisText:
      "This attestation presents an indicative, aggregated, dated, standardized and verifiable CO₂e estimate. This free sample is not an issued attestation and must not be presented as an official document.",
    footerText:
      "Indicative carbon emissions attestation · Invalid sample · certif-scope.com",
    footerPageLabel: "Page",
    watermark: "FREE SAMPLE · NOT VALID",
    invalidStatus: "INVALID SAMPLE",
  },
};

const SAMPLE_DATA: Record<AttestationLocale, SampleData> = {
  fr: {
    companyName: "certif-scope exemple",
    country: "FR",
    companySector: "Services aux entreprises",
    year: "2026",
    entityIdentifier: "—",
    attestationId: "CS-SAMPLE-FR-2026-0001",
    issuedDate: "2026-05-20",
    validUntil: "2027-05-20",
    totalCO2e: "15",
    issuerName: "Certif-Scope",
    factorVersion: "Certif-Scope factors v1",
    algorithm: "EXEMPLE — NON SIGNÉ",
    hash: "EXEMPLE_HASH_NON_VALABLE_0000000000000000000000000000000000000000000000000000000000000000",
    signature: "EXEMPLE_SIGNATURE_NON_VALABLE_BASE64",
    publicKey: "EXEMPLE_CLE_PUBLIQUE_NON_VALABLE",
    verificationDisplayUrl: "https://www.certif-scope.com/fr/verify/demo",
  },
  de: {
    companyName: "Muster GmbH",
    country: "DE",
    companySector: "Unternehmensdienstleistungen",
    year: "2026",
    entityIdentifier: "—",
    attestationId: "CS-SAMPLE-DE-2026-0001",
    issuedDate: "2026-05-20",
    validUntil: "2027-05-20",
    totalCO2e: "15",
    issuerName: "Certif-Scope",
    factorVersion: "Certif-Scope factors v1",
    algorithm: "BEISPIEL — NICHT SIGNIERT",
    hash: "BEISPIEL_HASH_NICHT_GUELTIG_0000000000000000000000000000000000000000000000000000000000000000",
    signature: "BEISPIEL_SIGNATURE_NICHT_GUELTIG_BASE64",
    publicKey: "BEISPIEL_PUBLIC_KEY_NICHT_GUELTIG",
    verificationDisplayUrl: "https://www.certif-scope.com/de/pruefen/demo",
  },
  en: {
    companyName: "Example Company Ltd",
    country: "EU",
    companySector: "Business services",
    year: "2026",
    entityIdentifier: "—",
    attestationId: "CS-SAMPLE-EN-2026-0001",
    issuedDate: "2026-05-20",
    validUntil: "2027-05-20",
    totalCO2e: "15",
    issuerName: "Certif-Scope",
    factorVersion: "Certif-Scope factors v1",
    algorithm: "SAMPLE — NOT SIGNED",
    hash: "SAMPLE_INVALID_HASH_0000000000000000000000000000000000000000000000000000000000000000",
    signature: "SAMPLE_INVALID_SIGNATURE_BASE64",
    publicKey: "SAMPLE_INVALID_PUBLIC_KEY",
    verificationDisplayUrl: "https://www.certif-scope.com/verify/demo",
  },
};

function logoSvg() {
  return `
    <div class="logo-wrap">
      <svg class="logo-mark" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="40" cy="40" r="27" fill="none" stroke="#0B3A63" stroke-width="8" stroke-linecap="round" stroke-dasharray="130 48" />
        <circle cx="40" cy="40" r="27" fill="none" stroke="#1FB6C1" stroke-width="8" stroke-linecap="round" stroke-dasharray="56 122" transform="rotate(102 40 40)" />
        <path d="M25 41.5 35 51 55 28" fill="none" stroke="#0B3A63" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <div class="logo-text"><span>Certif-</span><strong>Scope</strong></div>
    </div>`;
}

function buildHtml(copy: Copy, data: SampleData, qrDataUrl: string) {
  const c = Object.fromEntries(
    Object.entries(copy).map(([key, value]) => [key, typeof value === "string" ? escapeHtml(value) : value]),
  ) as unknown as Copy;

  const d = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [key, escapeHtml(value)]),
  ) as unknown as SampleData;

  return `<!doctype html>
<html lang="${c.lang}">
<head>
<meta charset="utf-8" />
<title>${c.title}</title>
<style>
@page { size: A4; margin: 7mm 10mm 7mm 10mm; }
:root { --ink:#223243; --heading:#0B3A63; --accent:#1FB6C1; --line:#d6e0e7; --line-strong:#c5d3dc; --panel-soft:#f7fafc; --panel-tint:#eef7f8; --muted:#6f7e8b; --muted-2:#81909d; --serif:"Times New Roman", Georgia, serif; }
* { box-sizing: border-box; }
html, body { margin:0; padding:0; background:#fff; color:var(--ink); font-family:Inter, Arial, Helvetica, sans-serif; font-size:9.3px; line-height:1.36; -webkit-font-smoothing:antialiased; }
.page { position:relative; height:283mm; min-height:283mm; max-height:283mm; display:flex; flex-direction:column; overflow:hidden; background:#fff; }
.page-one { page-break-after:always; }
.content { flex:1; display:flex; flex-direction:column; min-height:0; }
.page-one-flow { flex:1; display:flex; flex-direction:column; justify-content:space-around; gap:8px; min-height:0; padding-bottom:6px; }
.page-two-flow { display:flex; flex-direction:column; gap:8px; min-height:0; }
.watermark { position:absolute; top:42%; left:4%; width:92%; text-align:center; transform:rotate(-28deg); z-index:0; color:rgba(200,0,0,.075); font-size:40px; font-weight:900; letter-spacing:.08em; text-transform:uppercase; pointer-events:none; white-space:nowrap; }
.content, .footer { position:relative; z-index:1; }
.footer { flex:0 0 auto; margin-top:6px; padding-top:4px; border-top:1px solid var(--line); display:flex; justify-content:space-between; align-items:center; color:var(--muted); font-size:7.3px; }
.header { display:flex; justify-content:space-between; align-items:flex-start; gap:18px; padding-bottom:6px; border-bottom:2px solid var(--heading); page-break-inside:avoid; break-inside:avoid; }
.header-left { flex:1; display:flex; flex-direction:column; align-items:flex-start; gap:3px; min-width:0; }
.logo-wrap { display:flex; align-items:center; gap:9px; height:78px; }
.logo-mark { width:58px; height:58px; display:block; }
.logo-text { font-size:18px; font-weight:800; color:var(--heading); letter-spacing:-.02em; }
.logo-text strong { color:var(--accent); }
.issuer-site, .header-tagline { color:var(--muted); font-size:7.6px; line-height:1.18; }
.qr-block { width:46mm; text-align:center; flex:0 0 auto; }
.qr { width:40mm; height:40mm; display:block; margin:0 auto; border:1px solid var(--line); padding:2mm; border-radius:4px; background:#fff; }
.qr-caption { margin-top:3px; font-size:6.4px; line-height:1.1; color:var(--ink); }
.title-zone { text-align:center; padding-top:1px; page-break-inside:avoid; break-inside:avoid; }
.eyebrow { color:var(--accent); font-size:7.3px; font-weight:800; letter-spacing:.95px; text-transform:uppercase; margin-bottom:4px; }
h1 { margin:0; color:var(--heading); font-size:17px; line-height:1.05; font-weight:800; text-transform:uppercase; letter-spacing:.14px; }
.title-formal { margin-top:4px; color:var(--ink); font-size:8.3px; font-weight:700; }
.title-sub { margin-top:2px; color:var(--muted); font-size:7.5px; }
.result-wrap { display:flex; justify-content:center; page-break-inside:avoid; break-inside:avoid; }
.result-box { width:74%; border:2px solid var(--heading); border-radius:10px; background:linear-gradient(180deg,#fff 0%,#fbfdff 100%); padding:13px 15px 14px; text-align:center; }
.result-label { color:var(--muted); font-size:7.35px; font-weight:800; letter-spacing:.68px; text-transform:uppercase; margin-bottom:5px; }
.result-value { color:var(--heading); font-family:var(--serif); font-size:22px; line-height:1; font-weight:800; margin-bottom:4px; }
.result-subline { color:var(--muted); font-size:7.45px; margin-bottom:3px; }
.result-bottomline { color:var(--ink); font-size:7.3px; font-weight:700; }
.summary-grid { display:grid; grid-template-columns:repeat(4,1fr); border:1px solid var(--line-strong); border-radius:6px; overflow:hidden; }
.summary-cell { background:#fff; padding:7px 9px; border-right:1px solid var(--line-strong); min-height:38px; }
.summary-cell:last-child { border-right:none; }
.summary-label, .label, .status-label, .technical-label { display:block; color:var(--muted-2); font-size:6.5px; font-weight:800; letter-spacing:.42px; text-transform:uppercase; margin-bottom:3px; }
.summary-value, .value { display:block; color:var(--ink); font-size:8.35px; font-weight:700; line-height:1.23; word-break:break-word; }
.card { border:1px solid var(--line); border-radius:6px; background:#fff; padding:10px 12px; page-break-inside:avoid; break-inside:avoid; }
.card.soft { background:var(--panel-soft); }
.card.tint { background:var(--panel-tint); }
.card-title { margin:0 0 5px; color:var(--heading); font-size:8.6px; line-height:1.13; font-weight:800; letter-spacing:.3px; text-transform:uppercase; }
.card-text { margin:0; color:var(--ink); font-size:8.25px; line-height:1.34; }
.entity-card { min-height:98px; padding-top:11px; padding-bottom:11px; }
.entity-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px 30px; }
.entity-item .label { display:block; }
.entity-item .value { font-size:8.45px; }
.two-col { display:grid; grid-template-columns:1fr 1fr; gap:9px; page-break-inside:avoid; break-inside:avoid; }
.two-col .card { min-height:78px; padding-top:11px; padding-bottom:11px; }
.wide-card { min-height:70px; padding-top:11px; padding-bottom:11px; }
.features { display:grid; grid-template-columns:repeat(3,1fr); gap:9px; page-break-inside:avoid; break-inside:avoid; }
.feature-card { border:1px solid var(--line); border-radius:6px; padding:13px 11px; background:var(--panel-soft); min-height:104px; }
.feature-title { margin:0 0 5px; color:var(--heading); font-size:8.45px; line-height:1.12; font-weight:800; text-transform:uppercase; letter-spacing:.3px; }
.feature-text { color:var(--ink); font-size:8.15px; line-height:1.32; }
.page-one-status-strip { display:grid; grid-template-columns:repeat(3,1fr); border:1px solid var(--line-strong); border-radius:7px; overflow:hidden; background:#fff; min-height:52px; }
.status-cell { padding:10px 12px; min-height:52px; border-right:1px solid var(--line-strong); display:flex; flex-direction:column; justify-content:center; }
.status-cell:last-child { border-right:none; }
.status-value { color:var(--heading); font-size:8.3px; font-weight:800; line-height:1.2; }
.page-two-header { display:flex; justify-content:space-between; align-items:flex-start; gap:20px; }
.page-two-title h2 { margin:0 0 3px; color:var(--heading); font-size:16px; line-height:1.12; font-weight:800; text-transform:uppercase; letter-spacing:.18px; }
.page-two-title p { margin:0; color:var(--muted); font-size:8px; }
.page-two-meta { flex:0 0 auto; text-align:right; color:var(--muted); font-size:7.3px; line-height:1.25; }
.method-card { min-height:134px; }
.method-grid { display:grid; grid-template-columns:1.45fr .9fr; gap:9px; margin-top:8px; }
.formula-box { display:flex; align-items:center; justify-content:center; min-height:50px; padding:11px 14px; border:1px solid var(--line); border-radius:6px; background:var(--panel-tint); color:var(--heading); font-size:8.2px; line-height:1.3; font-weight:800; text-align:center; }
.method-side { display:flex; flex-direction:column; gap:8px; }
.small-box { border:1px solid var(--line); border-radius:6px; background:var(--panel-soft); padding:9px 11px; min-height:39px; }
.references-card { min-height:96px; }
.reference-grid { display:grid; grid-template-columns:1fr 1fr; gap:3px 28px; margin:7px 0 0; padding-left:14px; }
.reference-grid li { margin-bottom:3px; }
.muted-note { margin-top:8px; color:var(--muted); font-size:7.55px; }
.verification-grid { display:grid; grid-template-columns:1fr 1fr; gap:9px; }
.verification-card { background:var(--panel-tint); border-left:4px solid var(--accent); min-height:160px; }
.object-card { background:var(--panel-soft); min-height:160px; }
ul { margin:6px 0 0; padding-left:14px; }
li { margin-bottom:2.3px; }
.link-line { margin-top:8px; font-weight:800; color:var(--heading); word-break:break-word; }
.technical-card { min-height:82px; }
.technical-intro { margin:0 0 8px; color:var(--muted); font-size:7.45px; }
.technical-grid { display:grid; grid-template-columns:190px 1fr; gap:5px 13px; }
.technical-value { color:var(--ink); font-size:7.3px; line-height:1.25; word-break:break-word; }
.limits-card { background:var(--panel-tint); min-height:120px; }
.limits-grid { display:grid; grid-template-columns:1fr 1fr; gap:18px; margin-top:8px; }
.sub-title { margin:0 0 4px; color:var(--heading); font-size:8.5px; line-height:1.12; font-weight:800; text-transform:uppercase; }
.final-synthesis { border:1.7px solid var(--heading); border-radius:7px; min-height:58px; padding:12px 13px; background:#fff; }
.invalid-banner { position:absolute; top:5px; left:50%; transform:translateX(-50%); z-index:2; border:1px solid rgba(200,0,0,.35); color:#a00000; background:rgba(255,255,255,.82); border-radius:999px; padding:4px 11px; font-size:7px; font-weight:900; letter-spacing:.08em; text-transform:uppercase; }
</style>
</head>
<body>
<section class="page page-one">
  <div class="invalid-banner">${c.invalidStatus}</div>
  <div class="watermark">${c.watermark}</div>
  <div class="content">
    <div class="header">
      <div class="header-left">
        ${logoSvg()}
        <div class="issuer-site">${c.issuerSite}</div>
        <div class="header-tagline">${c.headerTagline}</div>
      </div>
      <div class="qr-block">
        <img class="qr" src="${qrDataUrl}" alt="QR verification" />
        <div class="qr-caption">${c.scanToVerifyLabel}</div>
      </div>
    </div>

    <div class="page-one-flow">
      <div class="title-zone">
        <div class="eyebrow">${c.eyebrow}</div>
        <h1>${c.title}</h1>
        <div class="title-formal">${c.standardReference}</div>
        <div class="title-sub">${c.subtitle}</div>
      </div>

      <div class="result-wrap">
        <div class="result-box">
          <div class="result-label">${c.resultLabel}</div>
          <div class="result-value">${d.totalCO2e} tCO₂e</div>
          <div class="result-subline">${c.resultSubline}</div>
          <div class="result-bottomline">${c.resultBottomLine}</div>
        </div>
      </div>

      <div class="summary-grid">
        <div class="summary-cell"><span class="summary-label">${c.attestationReferenceLabel}</span><span class="summary-value">${d.attestationId}</span></div>
        <div class="summary-cell"><span class="summary-label">${c.issuedDateLabel}</span><span class="summary-value">${d.issuedDate}</span></div>
        <div class="summary-cell"><span class="summary-label">${c.validUntilLabel}</span><span class="summary-value">${d.validUntil}</span></div>
        <div class="summary-cell"><span class="summary-label">${c.issuerLabel}</span><span class="summary-value">${d.issuerName}</span></div>
      </div>

      <div class="card entity-card">
        <h3 class="card-title">1. ${c.entitySectionTitle}</h3>
        <div class="entity-grid">
          <div class="entity-item"><span class="label">${c.entityNameLabel}</span><span class="value">${d.companyName}</span></div>
          <div class="entity-item"><span class="label">${c.countryLabel}</span><span class="value">${d.country}</span></div>
          <div class="entity-item"><span class="label">${c.activitySectorLabel}</span><span class="value">${d.companySector}</span></div>
          <div class="entity-item"><span class="label">${c.reportingYearLabel}</span><span class="value">${d.year}</span></div>
          <div class="entity-item"><span class="label">${c.entityIdentifierLabel}</span><span class="value">${d.entityIdentifier}</span></div>
          <div class="entity-item"><span class="label">${c.attestationReferenceLabel}</span><span class="value">${d.attestationId}</span></div>
        </div>
      </div>

      <div class="two-col">
        <div class="card soft"><h3 class="card-title">2. ${c.documentNatureSectionTitle}</h3><p class="card-text">${c.documentNatureText}</p></div>
        <div class="card soft"><h3 class="card-title">3. ${c.scopeSectionTitle}</h3><p class="card-text">${c.scopeText}</p></div>
      </div>

      <div class="card tint wide-card"><h3 class="card-title">4. ${c.intendedUseSectionTitle}</h3><p class="card-text">${c.intendedUseText}</p></div>
      <div class="card tint wide-card"><h3 class="card-title">5. ${c.thirdPartyReadingTitle}</h3><p class="card-text">${c.thirdPartyReadingText}</p></div>

      <div class="features">
        <div class="feature-card"><h3 class="feature-title">${c.confidentialityTitle}</h3><div class="feature-text">${c.confidentialityText}</div></div>
        <div class="feature-card"><h3 class="feature-title">${c.verificationTitle}</h3><div class="feature-text">${c.verificationText}</div></div>
        <div class="feature-card"><h3 class="feature-title">${c.validityTitle}</h3><div class="feature-text">${c.validityText}</div></div>
      </div>

      <div class="page-one-status-strip">
        <div class="status-cell"><div class="status-label">${c.statusStripDocumentTitle}</div><div class="status-value">${c.statusStripDocumentValue}</div></div>
        <div class="status-cell"><div class="status-label">${c.statusStripDataTitle}</div><div class="status-value">${c.statusStripDataValue}</div></div>
        <div class="status-cell"><div class="status-label">${c.statusStripUseTitle}</div><div class="status-value">${c.statusStripUseValue}</div></div>
      </div>
    </div>
  </div>
  <div class="footer"><span>${c.footerText}</span><span>${c.footerPageLabel} 1 / 2</span></div>
</section>

<section class="page page-two">
  <div class="invalid-banner">${c.invalidStatus}</div>
  <div class="watermark">${c.watermark}</div>
  <div class="content">
    <div class="page-two-flow">
      <div class="page-two-header">
        <div class="page-two-title"><h2>${c.pageTwoTitle}</h2><p>${c.pageTwoIntro}</p></div>
        <div class="page-two-meta"><strong>${c.attestationReferenceLabel}</strong><br/>${d.attestationId}<br/><br/><strong>${c.issuerLabel}</strong><br/>${d.issuerName}</div>
      </div>

      <div class="card method-card">
        <h3 class="card-title">6. ${c.methodologySectionTitle}</h3>
        <p class="card-text"><strong>${c.methodologyLabel}</strong><br/>${c.methodologyValue}</p>
        <p class="card-text" style="margin-top:7px;">${c.methodologyText}</p>
        <div class="method-grid">
          <div class="formula-box">${c.formulaText}</div>
          <div class="method-side">
            <div class="small-box"><span class="label">${c.factorVersionLabel}</span><span class="value">${d.factorVersion}</span></div>
            <div class="small-box"><span class="label">${c.transferabilityLabel}</span><span class="value">${c.transferabilityText}</span></div>
          </div>
        </div>
      </div>

      <div class="card soft references-card">
        <h3 class="card-title">7. ${c.referencesTitle}</h3>
        <p class="card-text">${c.normativeText}</p>
        <ul class="reference-grid">${htmlList(copy.referencesList)}</ul>
        <div class="muted-note">${c.scopeNote}</div>
      </div>

      <div class="verification-grid">
        <div class="card verification-card">
          <h3 class="card-title">${c.verificationSimpleTitle}</h3>
          <p class="card-text">${c.verificationSimpleText}</p>
          <p class="card-text" style="margin-top:8px;"><strong>${c.quickCheckTitle}</strong></p>
          <ul>${htmlList(copy.quickCheckItems)}</ul>
          <div class="link-line">${c.pageVerificationLabel}<br/>${d.verificationDisplayUrl}</div>
          <div class="muted-note">${c.attestationReferenceLabel} : ${d.attestationId}</div>
        </div>
        <div class="card object-card">
          <h3 class="card-title">${c.verifiableObjectTitle}</h3>
          <p class="card-text">${c.verifiableObjectText}</p>
          <ul>${htmlList(copy.verifiableObjectItems)}</ul>
        </div>
      </div>

      <div class="card technical-card">
        <h3 class="card-title">8. ${c.technicalElementsTitle}</h3>
        <p class="technical-intro">${c.technicalElementsIntro}</p>
        <div class="technical-grid">
          <div class="technical-label">${c.algorithmLabel}</div><div class="technical-value">${d.algorithm}</div>
          <div class="technical-label">${c.hashLabel}</div><div class="technical-value">${d.hash}</div>
          <div class="technical-label">${c.signatureLabel}</div><div class="technical-value">${d.signature}</div>
          <div class="technical-label">${c.publicKeyLabel}</div><div class="technical-value">${d.publicKey}</div>
        </div>
      </div>

      <div class="card limits-card">
        <h3 class="card-title">9. ${c.perimeterLimitsTitle}</h3>
        <p class="card-text">${c.perimeterLimitsIntro}</p>
        <div class="limits-grid">
          <div><h4 class="sub-title">${c.explicitExclusionsTitle}</h4><p class="card-text">${c.explicitExclusionsText}</p></div>
          <div><h4 class="sub-title">${c.responsibilityTitle}</h4><p class="card-text">${c.responsibilityText}</p></div>
        </div>
        <p class="card-text" style="margin-top:8px;"><strong>${c.languageNotice}</strong></p>
        <p class="muted-note">${c.methodologyNote}</p>
      </div>
    </div>

    <div class="final-synthesis">
      <h3 class="card-title">10. ${c.finalSynthesisTitle}</h3>
      <p class="card-text">${c.finalSynthesisText}</p>
    </div>
  </div>
  <div class="footer"><span>${c.footerText}</span><span>${c.footerPageLabel} 2 / 2</span></div>
</section>
</body>
</html>`;
}

export async function GET(req: Request) {
  try {
    if (!IS_SAMPLE) return new Response("Sample mode disabled", { status: 403 });

    if (!process.env.PDFSHIFT_API_KEY) {
      return new Response("PDFSHIFT_API_KEY missing", { status: 500 });
    }

    const locale = resolveSampleLocale(req);
    const copy = COPY[locale] || COPY.fr;
    const data = SAMPLE_DATA[locale] || SAMPLE_DATA.fr;

    const qrDataUrl = await QRCode.toDataURL(data.verificationDisplayUrl, {
      errorCorrectionLevel: "H",
      width: 600,
      margin: 4,
      color: { dark: "#000000", light: "#FFFFFF" },
    });

    const html = buildHtml(copy, data, qrDataUrl);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const pdfResponse = await fetch("https://api.pdfshift.io/v3/convert/pdf", {
      method: "POST",
      headers: {
        "X-API-Key": process.env.PDFSHIFT_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ source: html, format: "A4", use_print: true }),
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
        "Content-Disposition": `attachment; filename="${copy.filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("Internal error", { status: 500 });
  }
}
