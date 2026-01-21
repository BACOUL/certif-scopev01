// /lib/attestation-i18n.ts

export type AttestationLocale = "en";

export const ATTESTATION_I18N = {
  en: {
    /* ===============================
       GLOBAL / META
    =============================== */
    languageName: "English",
    languageNotice: "",
    englishPrevailsNotice: "",

    /* ===============================
       TITLE
    =============================== */
    title: "",
    subtitle: "",
    standardReference: "",

    /* ===============================
       RESULT
    =============================== */
    resultLabel: "",

    /* ===============================
       SECTION 1 — ISSUER
    =============================== */
    issuerSectionTitle: "",
    issuerLabel: "",
    websiteLabel: "",
    attestationIdLabel: "",
    issuedDateLabel: "",
    validityLabel: "",

    /* ===============================
       SECTION 2 — DOCUMENT NATURE
    =============================== */
    documentNatureSectionTitle: "",
    documentNatureText: "",

    /* ===============================
       SECTION 3 — ENTITY
    =============================== */
    entitySectionTitle: "",
    entityNameLabel: "",
    sectorLabel: "",
    identifierLabel: "",
    countryLabel: "",
    yearLabel: "",

    /* ===============================
       SECTION 4 — SCOPE
    =============================== */
    scopeSectionTitle: "",
    scopeText: "",
    scopeNote: "",

    /* ===============================
       SECTION 5 — REFERENCES
    =============================== */
    referencesSectionTitle: "",
    referencesIntro: "",

    /* ===============================
       ASIDE — SUMMARY / NATURE
    =============================== */
    authenticityTitle: "",
    authenticityText: "",
    natureTitle: "",
    natureText: "",
    summaryTitle: "",
    summaryItems: "",

    /* ===============================
       SECTION 6 — DECLARATION
    =============================== */
    declarationSectionTitle: "",
    declarationText: "",

    /* ===============================
       SECTION 7 — METHODOLOGY
    =============================== */
    methodologySectionTitle: "",
    methodologyLabel: "",
    limitationsLabel: "",
    transferabilityLabel: "",

    /* ===============================
       SECTION 8 — VERIFICATION
    =============================== */
    verificationSectionTitle: "",
    verificationIntro: "",
    verificationNote: "",
    verificationLinkLabel: "",
    cryptographicLabel: "",
    publicKeyLabel: "",

    /* ===============================
       SECTION 9 — FINAL CLAUSES
    =============================== */
    finalClausesTitle: "",
    legalEffectLabel: "",
    liabilityLabel: "",
    validityExplanationLabel: "",
    noAuditNotice: "",
    internalStandardNotice: ""
  }
} as const;
