/* =========================================================
   Certif-Scope — Attestation i18n (EN)
   Reference legal language — CANONICAL VERSION
   ========================================================= */

export const ATTESTATION_EN = {
  /* ===============================
     GLOBAL / META
  =============================== */
  languageCode: "en",
  languageName: "English",
  languageNotice: "This document is issued in English.",
  englishPrevailsNotice:
    "In case of discrepancy between language versions, the English version shall prevail.",

  /* ===============================
     HEADER / GLOBAL UI
  =============================== */
  headerTagline: "Automated issuance · Standardized indicative attestation",
  scanToVerifyLabel: "Scan to verify",

  /* ===============================
     TITLE
  =============================== */
  title: "Indicative Carbon Emissions Attestation",
  subtitle: "Non-regulatory · Methodology-based · Indicative attestation",
  standardReference:
    "Issued pursuant to the Certif-Scope standardized methodology CS-SB-v1",
  standardReferenceLabel: "Standard reference",

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
  attestationReferenceLabel: "Attestation reference",
  issuedDateLabel: "Issued date",
  validityPeriodLabel: "Validity period",
  validUntilLabel: "Valid until",
  uniqueIdentifierLabel: "Unique document identifier",
  monthsLabel: "months",

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
  activitySectorLabel: "Activity sector",
  entityIdentifierLabel: "Entity identifier",
  countryLabel: "Country",
  reportingYearLabel: "Reporting year",

  /* ===============================
     SECTION 4 — SCOPE
  =============================== */
  scopeSectionTitle: "4. Scope",
  scopeDescriptionLabel: "Scope description",
  scopeText:
    "This attestation provides an indicative estimation of greenhouse gas emissions derived exclusively from aggregated expenditure data using a spend-based methodology.",
  noteLabel: "Note",
  scopeNote:
    "This document does not constitute a greenhouse gas inventory, audit, verification, or regulatory disclosure under CSRD, ESRS, or equivalent frameworks.",

  /* ===============================
     SECTION 5 — REFERENCES
  =============================== */
  referencesSectionTitle: "5. Normative references",
  normativeText:
    "The following standards and frameworks are referenced for methodological alignment and contextual consistency:",
  referencesList: [
    "GHG Protocol – Scope 3 (spend-based)",
    "ISO 14064-1 (reference)",
    "ISO 14083 (reference)",
    "CSRD / ESRS / EU Taxonomy (context)",
  ],

  /* ===============================
     ASIDE — AUTHENTICITY & SUMMARY
  =============================== */
  authenticityOverviewTitle: "Authenticity overview",
  authenticityOverviewText:
    "This attestation is cryptographically signed and can be verified independently without access to Certif-Scope systems.",

  natureOfAttestationTitle: "Nature of the attestation",
  natureOfAttestationText:
    "This document is an indicative carbon emissions attestation issued using a standardized deterministic methodology. It does not constitute a regulatory disclosure or audit report.",

  documentScopeSummaryTitle: "Document scope summary",
  documentScopeSummaryText:
    "Indicative estimation · Spend-based methodology · Aggregated result only",

  documentValidityTitle: "Document validity",
  documentValidityText:
    "This attestation is valid for a fixed period reflecting the temporal relevance of the underlying data and methodology.",

  /* ===============================
     SECTION 6 — DECLARATION
  =============================== */
  declarationSectionTitle: "6. Declaration of result",
  formalDeclarationLabel: "Formal declaration",
  declarationLabel: "Declaration",
  declarationText:
    "Based solely on the data provided by the entity, Certif-Scope hereby issues this indicative attestation of aggregated greenhouse gas emissions for the reporting year stated.",

  /* ===============================
     SECTION 7 — METHODOLOGY
  =============================== */
  methodologySectionTitle: "7. Methodology and limitations",
  methodologyLabel: "Methodology",
  limitationsLabel: "Limitations",
  limitationsText:
    "No physical activity data. No Scope 1 or Scope 2 emissions. Indicative model only.",
  transferabilityLabel: "Transferability",
  transferabilityText: "Non-transferable.",

  /* ===============================
     SECTION 8 — VERIFICATION
  =============================== */
  verificationSectionTitle: "8. Verification and integrity",
  verificationBoxTitle: "Verification & integrity",

  privacyLabel: "Privacy by design",
  privacyText:
    "This attestation is generated without storage of underlying financial data by Certif-Scope.",

  pdfObjectText:
    "The PDF document itself is the only verifiable object.",

  verificationPageLabel: "Verification information page",

  technicalVerificationNote:
    "The following elements allow independent technical verification. No action is required from the reader.",

  cryptographicIntegrityLabel: "Cryptographic integrity",
  algorithmLabel: "Algorithm",
  hashLabel: "Signed payload hash (SHA-256)",
  signatureLabel: "Signature (Base64)",

  publicKeyLabel: "Issuer public verification key",
  publicKeyNote:
    "This public key allows any third party to verify the authenticity and integrity of this document independently.",

  /* ===============================
     SECTION 9 — FINAL CLAUSES
  =============================== */
  finalClausesTitle: "9. Final clauses and liability",
  issuedPursuantText:
    "Issued pursuant to the Certif-Scope internal standard CS-SB-v1.",

  legalEffectLabel: "Legal effect",
  legalEffectText:
    "This document has no regulatory or legal effect and is provided for informational purposes only.",

  liabilityLabel: "Liability",
  liabilityText:
    "The results are derived exclusively from data provided by the entity, under its sole responsibility.",

  noAuditText:
    "Certif-Scope does not perform audit, validation, verification, or assurance services.",

  methodologyNote:
    "CS-SB-v1 is an internal standardized methodology maintained by Certif-Scope.",

  /* ===============================
     FOOTER
  =============================== */
  footerText:
    "Indicative carbon emissions attestation · Issued by Certif-Scope · certif-scope.com",
  pageLabel: "Page",
} as const;
