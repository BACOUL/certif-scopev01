export type AttestationLocale = "en";

export const ATTESTATION_I18N = {
  en: {
    /* ===============================
       GLOBAL / META
    =============================== */
    languageName: "English",
    languageNotice: "This document is issued in English.",
    englishPrevailsNotice:
      "In case of discrepancy between language versions, the English version shall prevail.",

    /* ===============================
       TITLE
    =============================== */
    title: "Indicative Carbon Emissions Attestation",
    subtitle:
      "Non-regulatory, methodology-based, indicative declaration",
    standardReference:
      "Issued pursuant to the Certif-Scope standardized methodology CS-SB-v1",

    /* ===============================
       RESULT
    =============================== */
    resultLabel: "Declared aggregated indicative emissions",

    /* ===============================
       SECTION 1 — ISSUER
    =============================== */
    issuerSectionTitle: "1. Identification of the issuer",
    issuerLabel: "Issuer",
    websiteLabel: "Website",
    attestationIdLabel: "Attestation reference",
    issuedDateLabel: "Issued date",
    validityLabel: "Validity period",

    /* ===============================
       SECTION 2 — DOCUMENT NATURE
    =============================== */
    documentNatureSectionTitle: "2. Nature of the document",
    documentNatureText:
      "This document constitutes an indicative carbon emissions attestation issued for informational, decision-support, and preliminary assessment purposes only.",

    /* ===============================
       SECTION 3 — ENTITY
    =============================== */
    entitySectionTitle: "3. Identification of the entity",
    entityNameLabel: "Entity name",
    sectorLabel: "Activity sector",
    identifierLabel: "Entity identifier",
    countryLabel: "Country",
    yearLabel: "Reporting year",

    /* ===============================
       SECTION 4 — SCOPE
    =============================== */
    scopeSectionTitle: "4. Scope",
    scopeText:
      "This attestation provides an indicative estimation of greenhouse gas emissions derived exclusively from aggregated expenditure data using a spend-based methodology.",
    scopeNote:
      "This document does not constitute a greenhouse gas inventory, audit, verification, or regulatory disclosure under CSRD, ESRS, or equivalent frameworks.",

    /* ===============================
       SECTION 5 — REFERENCES
    =============================== */
    referencesSectionTitle: "5. Normative references",
    referencesIntro:
      "The following standards and frameworks are referenced for methodological alignment and contextual consistency:",

    /* ===============================
       ASIDE — SUMMARY / NATURE
    =============================== */
    authenticityTitle: "Authenticity",
    authenticityText:
      "This attestation is cryptographically signed and can be verified independently without access to Certif-Scope systems.",
    natureTitle: "Document nature",
    natureText:
      "Indicative, non-regulatory, methodology-based declaration.",
    summaryTitle: "Scope summary",
    summaryItems:
      "Indicative estimation · Spend-based methodology · Aggregated result only",

    /* ===============================
       SECTION 6 — DECLARATION
    =============================== */
    declarationSectionTitle: "6. Declaration of result",
    declarationText:
      "Based solely on the data provided by the entity, Certif-Scope hereby issues this indicative attestation of aggregated greenhouse gas emissions for the reporting year stated.",

    /* ===============================
       SECTION 7 — METHODOLOGY
    =============================== */
    methodologySectionTitle: "7. Methodology and limitations",
    methodologyLabel:
      "Deterministic spend-based methodology using aggregated expenditure data.",
    limitationsLabel:
      "No physical activity data. No Scope 1 or Scope 2 emissions. Indicative model only.",
    transferabilityLabel: "This document is non-transferable.",

    /* ===============================
       SECTION 8 — VERIFICATION
    =============================== */
    verificationSectionTitle: "8. Verification and integrity",
    verificationIntro:
      "This attestation is generated without storage of underlying financial data by Certif-Scope.",
    verificationNote:
      "The PDF document itself is the sole verifiable object.",
    verificationLinkLabel: "Verification information page",
    cryptographicLabel: "Cryptographic integrity",
    publicKeyLabel: "Issuer public verification key",

    /* ===============================
       SECTION 9 — FINAL CLAUSES
    =============================== */
    finalClausesTitle: "9. Final clauses and liability",
    legalEffectLabel:
      "This document has no regulatory or legal effect and is provided for informational purposes only.",
    liabilityLabel:
      "The results are derived exclusively from data provided by the entity, under its sole responsibility.",
    validityExplanationLabel:
      "The validity period reflects the temporal relevance of the underlying data and methodology.",
    noAuditNotice:
      "Certif-Scope does not perform audit, validation, verification, or assurance services.",
    internalStandardNotice:
      "CS-SB-v1 is an internal standardized methodology maintained by Certif-Scope."
  }
} as const;
