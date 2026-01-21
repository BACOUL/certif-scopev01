/* =========================================================
   Certif-Scope — Attestation i18n (FR)
   Traduction complète alignée sur EN
   ========================================================= */

export const ATTESTATION_FR = {
  /* ===============================
     GLOBAL / META
  =============================== */
  languageCode: "fr",
  languageName: "Français",
  languageNotice: "Ce document est émis en langue française.",
  englishPrevailsNotice:
    "En cas de divergence entre les versions linguistiques, la version anglaise prévaut.",

  /* ===============================
     HEADER / GLOBAL UI
  =============================== */
  headerTagline:
    "Émission automatisée · Attestation indicative standardisée",
  scanToVerifyLabel: "Scanner pour vérifier",

  /* ===============================
     TITLE
  =============================== */
  title: "Attestation indicative d’émissions de carbone",
  subtitle:
    "Attestation indicative · Fondée sur une méthodologie · Non réglementaire",
  standardReference:
    "Émise conformément à la méthodologie standardisée Certif-Scope CS-SB-v1",
  standardReferenceLabel: "Référence du standard",

  /* ===============================
     RESULT
  =============================== */
  resultLabel: "Émissions indicatives agrégées déclarées",

  /* ===============================
     SECTION 1 — ISSUER
  =============================== */
  issuerSectionTitle: "1. Identification de l’émetteur",
  issuerLabel: "Émetteur",
  websiteLabel: "Site web",
  attestationIdLabel: "Référence de l’attestation",
  issuedDateLabel: "Date d’émission",
  validityLabel: "Période de validité",
  validityPeriodLabel: "Période de validité",
  validUntilLabel: "Valide jusqu’au",
  uniqueDocumentIdNote: "Identifiant unique du document",

  /* ===============================
     SECTION 2 — DOCUMENT NATURE
  =============================== */
  documentNatureSectionTitle: "2. Nature du document",
  documentNatureText:
    "Ce document constitue une attestation indicative d’émissions de carbone, émise exclusivement à des fins d’information, d’aide à la décision et d’évaluation préliminaire.",

  /* ===============================
     SECTION 3 — ENTITY
  =============================== */
  entitySectionTitle: "3. Identification de l’entité",
  entityNameLabel: "Nom de l’entité",
  sectorLabel: "Secteur d’activité",
  identifierLabel: "Identifiant de l’entité",
  identifierOptionalLabel: "Identifiant de l’entité (optionnel)",
  countryLabel: "Pays",
  yearLabel: "Année de référence",

  /* ===============================
     SECTION 4 — SCOPE
  =============================== */
  scopeSectionTitle: "4. Périmètre",
  scopeText:
    "Cette attestation fournit une estimation indicative des émissions de gaz à effet de serre, dérivée exclusivement de données de dépenses agrégées, selon une méthodologie fondée sur les dépenses (spend-based).",
  scopeNote:
    "Ce document ne constitue ni un inventaire de gaz à effet de serre, ni un audit, ni une vérification, ni une déclaration réglementaire au sens de la CSRD, des ESRS ou de tout cadre équivalent.",

  /* ===============================
     SECTION 5 — REFERENCES
  =============================== */
  referencesSectionTitle: "5. Références normatives",
  referencesIntro:
    "Les normes et cadres suivants sont mentionnés à titre d’alignement méthodologique et de cohérence contextuelle :",

  /* ===============================
     ASIDE — SUMMARY / NATURE
  =============================== */
  authenticityTitle: "Authenticité",
  authenticityText:
    "Cette attestation est signée cryptographiquement et peut être vérifiée de manière indépendante, sans accès aux systèmes de Certif-Scope.",

  authenticityOverviewTitle: "Aperçu de l’authenticité",

  natureTitle: "Nature du document",
  natureText:
    "Attestation indicative, non réglementaire, fondée sur une méthodologie.",

  natureOfAttestationTitle: "Nature de l’attestation",
  natureOfAttestationText:
    "Ce document est une attestation indicative d’émissions de carbone émise selon une méthodologie déterministe standardisée. Il ne constitue ni une déclaration réglementaire ni un rapport d’audit.",

  summaryTitle: "Résumé du périmètre",
  summaryItems:
    "Estimation indicative · Méthodologie fondée sur les dépenses · Résultat agrégé uniquement",

  documentScopeSummaryTitle: "Résumé du périmètre du document",
  documentScopeSummaryItems:
    "Estimation indicative · Méthodologie fondée sur les dépenses · Résultat agrégé uniquement",

  documentValidityTitle: "Validité du document",
  documentValidityText:
    "Cette attestation est valable pour une période fixe reflétant la pertinence temporelle des données et de la méthodologie sous-jacentes.",

  /* ===============================
     SECTION 6 — DECLARATION
  =============================== */
  declarationSectionTitle: "6. Déclaration du résultat",
  formalDeclarationLabel: "Déclaration formelle",
  declarationLabel: "Déclaration",
  declarationText:
    "Sur la seule base des données fournies par l’entité, Certif-Scope émet la présente attestation indicative des émissions agrégées de gaz à effet de serre pour l’année de référence indiquée.",

  /* ===============================
     SECTION 7 — METHODOLOGY
  =============================== */
  methodologySectionTitle: "7. Méthodologie et limites",
  methodologyLabel:
    "Méthodologie déterministe fondée sur les dépenses, utilisant des données de dépenses agrégées.",
  limitationsLabel:
    "Aucune donnée d’activité physique. Aucune émission de Scope 1 ou de Scope 2. Modèle strictement indicatif.",
  transferabilityLabel: "Ce document est non transférable.",

  /* ===============================
     SECTION 8 — VERIFICATION
  =============================== */
  verificationSectionTitle: "8. Vérification et intégrité",
  verificationBlockTitle: "Vérification et intégrité",
  verificationIntro:
    "Cette attestation est générée sans conservation des données financières sous-jacentes par Certif-Scope.",
  verificationNote:
    "Le document PDF constitue l’unique objet vérifiable.",

  privacyByDesignLabel: "Protection des données par conception",
  privacyByDesignText:
    "Cette attestation est générée sans conservation des données financières sous-jacentes par Certif-Scope. La vérification repose uniquement sur l’identifiant de l’attestation et des mécanismes d’intégrité cryptographique.",

  pdfIsSoleObjectText:
    "Le document PDF constitue l’unique objet vérifiable.",

  verificationLinkLabel: "Page d’information de vérification",
  verificationInformationPageLabel: "Page d’information de vérification",

  cryptographicLabel: "Intégrité cryptographique",
  cryptographicIntegrityDetailsLabel: "Détails d’intégrité cryptographique",

  publicKeyLabel: "Clé publique de vérification de l’émetteur",
  publicKeyExplanationText:
    "Cette clé publique permet à tout tiers de vérifier de manière indépendante l’authenticité et l’intégrité de ce document.",

  /* ===============================
     SECTION 9 — FINAL CLAUSES
  =============================== */
  finalClausesTitle: "9. Clauses finales et responsabilité",
  legalEffectLabel:
    "Ce document n’a aucun effet réglementaire ou juridique et est fourni exclusivement à titre informatif.",
  liabilityLabel:
    "Les résultats sont exclusivement dérivés des données fournies par l’entité, sous sa seule responsabilité.",
  validityExplanationLabel:
    "La période de validité reflète la pertinence temporelle des données et de la méthodologie sous-jacentes.",
  noAuditNotice:
    "Certif-Scope ne réalise aucune mission d’audit, de validation, de vérification ou d’assurance.",
  internalStandardNotice:
    "CS-SB-v1 est une méthodologie standardisée interne maintenue par Certif-Scope.",

  /* ===============================
     FOOTER
  =============================== */
  footerText:
    "Attestation indicative d’émissions de carbone · Émise par Certif-Scope · certif-scope.com",
  pageLabel: "Page",
} as const;
