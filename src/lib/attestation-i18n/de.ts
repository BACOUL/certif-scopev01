/* =========================================================
   Certif-Scope — Attestation i18n (DE)
   Vollständige Übersetzung, strikt schlüsselgleich zu ATTESTATION_EN
   ========================================================= */

export const ATTESTATION_DE = {
  /* ===============================
     GLOBAL / META
  =============================== */
  languageCode: "de",
  languageName: "Deutsch",
  languageNotice: "Dieses Dokument wird in deutscher Sprache ausgestellt.",
  englishPrevailsNotice:
    "Im Falle von Abweichungen zwischen den Sprachversionen ist die englische Fassung maßgeblich.",

  /* ===============================
     HEADER / GLOBAL UI
  =============================== */
  headerTagline:
    "Automatisierte Ausstellung · Standardisierte indikative Bescheinigung",
  scanToVerifyLabel: "Zur Verifizierung scannen",

  /* ===============================
     TITLE
  =============================== */
  title: "Indikative Bescheinigung über CO₂-Emissionen",
  subtitle:
    "Nicht regulatorisch · Methodikgestützt · Indikative Bescheinigung",
  standardReference:
    "Ausgestellt gemäß der standardisierten Certif-Scope-Methodik CS-SB-v1",
  standardReferenceLabel: "Standardreferenz",

  /* ===============================
     RESULT
  =============================== */
  resultLabel: "Deklarierte aggregierte indikative Emissionen",

  /* ===============================
     SECTION 1 — ISSUER
  =============================== */
  issuerSectionTitle: "1. Identifikation des Ausstellers",
  issuerLabel: "Aussteller",
  websiteLabel: "Webseite",
  attestationReferenceLabel: "Bescheinigungsreferenz",
  issuedDateLabel: "Ausstellungsdatum",
  validityPeriodLabel: "Gültigkeitszeitraum",
  validUntilLabel: "Gültig bis",
  uniqueIdentifierLabel: "Eindeutige Dokumentenkennung",
  monthsLabel: "Monate",

  /* ===============================
     SECTION 2 — DOCUMENT NATURE
  =============================== */
  documentNatureSectionTitle: "2. Art des Dokuments",
  documentNatureText:
    "Dieses Dokument stellt eine indikative Bescheinigung über CO₂-Emissionen dar und wird ausschließlich zu Informations-, Entscheidungsunterstützungs- und vorläufigen Analysezwecken ausgestellt.",

  /* ===============================
     SECTION 3 — ENTITY
  =============================== */
  entitySectionTitle: "3. Identifikation der Einheit",
  entityNameLabel: "Name der Einheit",
  activitySectorLabel: "Tätigkeitssektor",
  entityIdentifierLabel: "Kennung der Einheit",
  countryLabel: "Land",
  reportingYearLabel: "Bezugsjahr",

  /* ===============================
     SECTION 4 — SCOPE
  =============================== */
  scopeSectionTitle: "4. Geltungsbereich",
  scopeText:
    "Diese Bescheinigung liefert eine indikative Schätzung der Treibhausgasemissionen, die ausschließlich aus aggregierten Finanzdaten mittels einer ausgabenbasierten Methodik (spend-based) abgeleitet wird.",
  noteLabel: "Hinweis",
  scopeNote:
    "Dieses Dokument stellt weder ein Treibhausgasinventar noch ein Audit, eine Verifizierung oder eine regulatorische Offenlegung im Sinne der CSRD, ESRS oder vergleichbarer Rahmenwerke dar.",

  /* ===============================
     SECTION 5 — REFERENCES
  =============================== */
  referencesSectionTitle: "5. Normative Referenzen",
  normativeText:
    "Die folgenden Normen und Rahmenwerke werden zur methodischen Ausrichtung und kontextuellen Konsistenz herangezogen:",
  referencesList: [
    "GHG Protocol – Scope 3 (spend-based)",
    "ISO 14064-1 (Referenz)",
    "ISO 14083 (Referenz)",
    "CSRD / ESRS / EU-Taxonomie (Kontext)",
  ],

  /* ===============================
     ASIDE — AUTHENTICITY & SUMMARY
  =============================== */
  authenticityOverviewTitle: "Überblick zur Authentizität",
  authenticityOverviewText:
    "Diese Bescheinigung ist kryptografisch signiert und kann unabhängig ohne Zugriff auf die Systeme von Certif-Scope verifiziert werden.",

  natureOfAttestationTitle: "Art der Bescheinigung",
  natureOfAttestationText:
    "Dieses Dokument ist eine indikative Bescheinigung über CO₂-Emissionen, die anhand einer standardisierten deterministischen Methodik erstellt wurde. Es stellt weder eine regulatorische Offenlegung noch einen Prüfbericht dar.",

  documentScopeSummaryTitle: "Zusammenfassung des Dokumentenumfangs",
  documentScopeSummaryText:
    "Indikative Schätzung · Ausgabenbasierte Methodik · Ausschließlich aggregiertes Ergebnis",

  documentValidityTitle: "Gültigkeit des Dokuments",
  documentValidityText:
    "Diese Bescheinigung ist für einen festen Zeitraum gültig, der die zeitliche Relevanz der zugrunde liegenden Daten und der Methodik widerspiegelt.",

  /* ===============================
     SECTION 6 — DECLARATION
  =============================== */
  declarationSectionTitle: "6. Ergebniserklärung",
  formalDeclarationLabel: "Formelle Erklärung",
  declarationLabel: "Erklärung",
  declarationText:
    "Ausschließlich auf Grundlage der von der Einheit bereitgestellten Daten stellt Certif-Scope diese indikative Bescheinigung über die aggregierten Treibhausgasemissionen für das angegebene Bezugsjahr aus.",

  /* ===============================
     SECTION 7 — METHODOLOGY
  =============================== */
  methodologySectionTitle: "7. Methodik und Einschränkungen",
  methodologyLabel:
    "Deterministische ausgabenbasierte Methodik unter Verwendung aggregierter Finanzdaten.",
  limitationsText:
    "Keine physischen Aktivitätsdaten. Keine Scope-1- oder Scope-2-Emissionen. Ausschließlich indikatives Modell.",
  transferabilityText: "Nicht übertragbar.",

  /* ===============================
     SECTION 8 — VERIFICATION
  =============================== */
  verificationSectionTitle: "8. Verifizierung und Integrität",
  verificationBoxTitle: "Verifizierung und Integrität",

  privacyLabel:
    "Datenschutz durch Technikgestaltung (Privacy by Design)",
  privacyText:
    "Diese Bescheinigung wird ohne Speicherung zugrunde liegender Finanzdaten durch Certif-Scope erzeugt.",

  pdfObjectText:
    "Das PDF-Dokument selbst ist das einzige verifizierbare Objekt.",

  verificationPageLabel: "Informationsseite zur Verifizierung",

  technicalVerificationNote:
    "Die folgenden Elemente ermöglichen eine unabhängige technische Verifizierung. Es ist keine Handlung durch den Leser erforderlich.",

  cryptographicIntegrityLabel: "Kryptografische Integrität",
  algorithmLabel: "Algorithmus",
  hashLabel: "Signierter Payload-Hash (SHA-256)",
  signatureLabel: "Signatur (Base64)",

  publicKeyLabel: "Öffentlicher Verifikationsschlüssel des Ausstellers",
  publicKeyNote:
    "Dieser öffentliche Schlüssel ermöglicht es Dritten, die Authentizität und Integrität dieses Dokuments unabhängig zu überprüfen.",

  /* ===============================
     SECTION 9 — FINAL CLAUSES
  =============================== */
  finalClausesTitle: "9. Schlussbestimmungen und Haftung",
  issuedPursuantText:
    "Ausgestellt gemäß dem internen Certif-Scope-Standard CS-SB-v1.",

  legalEffectLabel: "Rechtliche Wirkung",
  legalEffectText:
    "Dieses Dokument entfaltet keine regulatorische oder rechtliche Wirkung und dient ausschließlich Informationszwecken.",

  liabilityLabel: "Haftung",
  liabilityText:
    "Die Ergebnisse beruhen ausschließlich auf den von der Einheit bereitgestellten Daten und liegen in deren alleiniger Verantwortung.",

  validityText:
    "Der Gültigkeitszeitraum spiegelt die zeitliche Relevanz der zugrunde liegenden Daten und der Methodik wider.",

  noAuditText:
    "Certif-Scope erbringt keine Audit-, Validierungs-, Verifizierungs- oder Assurance-Leistungen.",

  methodologyNote:
    "CS-SB-v1 ist eine interne standardisierte Methodik, die von Certif-Scope gepflegt wird.",

  /* ===============================
     FOOTER
  =============================== */
  footerText:
    "Indikative Bescheinigung über CO₂-Emissionen · Ausgestellt von Certif-Scope · certif-scope.com",
  pageLabel: "Seite",
} as const;
