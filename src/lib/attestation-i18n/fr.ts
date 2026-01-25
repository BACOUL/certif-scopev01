/* =========================================================
   Certif-Scope — Attestation i18n (FR)
   Traduction STRICTE et CANONIQUE alignée sur ATTESTATION_EN
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
  headerTagline: "Émission automatisée · Attestation indicative standardisée",
  scanToVerifyLabel: "Scanner pour vérifier",

  /* ===============================
     TITLE
  =============================== */
  title: "Attestation indicative d’émissions de carbone",
  subtitle:
    "Non réglementaire · Fondée sur une méthodologie · Attestation indicative",
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
  attestationReferenceLabel: "Référence de l’attestation",
  issuedDateLabel: "Date d’émission",
  validityPeriodLabel: "Période de validité",
  validUntilLabel: "Valable jusqu’au",
  uniqueIdentifierLabel: "Identifiant unique du document",
  monthsLabel: "mois",

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
  activitySectorLabel: "Secteur d’activité",
  entityIdentifierLabel: "Identifiant de l’entité",
  countryLabel: "Pays",
  reportingYearLabel: "Année de référence",

  /* ===============================
     SECTION 4 — SCOPE
  =============================== */
  scopeSectionTitle: "4. Périmètre",
  scopeDescriptionLabel: "Description du périmètre",
  scopeText:
    "Cette attestation fournit une estimation indicative des émissions de gaz à effet de serre, dérivée exclusivement de données de dépenses agrégées, selon une méthodologie basée sur les dépenses (spend-based).",
  noteLabel: "Note",
  scopeNote:
    "Ce document ne constitue ni un inventaire de gaz à effet de serre, ni un audit, ni une vérification, ni une déclaration réglementaire au sens de la CSRD, des ESRS ou de tout cadre équivalent.",

  /* ===============================
     SECTION 5 — REFERENCES
  =============================== */
  referencesSectionTitle: "5. Références normatives",
  normativeText:
    "Les normes et cadres suivants sont mentionnés à titre d’alignement méthodologique et de cohérence contextuelle :",
  referencesList: [
    "GHG Protocol – Scope 3 (méthode basée sur les dépenses)",
    "ISO 14064-1 (référence)",
    "ISO 14083 (référence)",
    "CSRD / ESRS / Taxonomie UE (contexte)",
  ],

  /* ===============================
     ASIDE — AUTHENTICITY & SUMMARY
  =============================== */
  authenticityOverviewTitle: "Aperçu de l’authenticité",
  authenticityOverviewText:
    "Cette attestation est signée cryptographiquement et peut être vérifiée de manière indépendante, sans accès aux systèmes de Certif-Scope.",

  natureOfAttestationTitle: "Nature de l’attestation",
  natureOfAttestationText:
    "Ce document est une attestation indicative d’émissions de carbone émise selon une méthodologie déterministe standardisée. Il ne constitue ni une déclaration réglementaire ni un rapport d’audit.",

  documentScopeSummaryTitle: "Résumé du périmètre du document",
  documentScopeSummaryText:
    "Estimation indicative · Méthodologie basée sur les dépenses · Résultat agrégé uniquement",

  documentValidityTitle: "Validité du document",
  documentValidityText:
    "Cette attestation est valable pour une période fixe, reflétant la pertinence temporelle des données et de la méthodologie sous-jacentes.",

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
  methodologyLabel: "Méthodologie",
  limitationsLabel: "Limites",
  limitationsText:
    "Aucune donnée d’activité physique. Aucune émission de Scope 1 ou de Scope 2. Modèle strictement indicatif.",
  transferabilityLabel: "Transférabilité",
  transferabilityText: "Non transférable.",

  /* ===============================
     SECTION 8 — VERIFICATION
  =============================== */
  verificationSectionTitle: "8. Vérification et intégrité",
  verificationBoxTitle: "Vérification et intégrité",

  privacyLabel: "Protection de la vie privée dès la conception",
  privacyText:
    "Cette attestation est générée sans conservation des données financières sous-jacentes par Certif-Scope.",

  pdfObjectText:
    "Le document PDF constitue l’unique objet vérifiable.",

  verificationPageLabel: "Page d’information de vérification",

  technicalVerificationNote:
    "Les éléments suivants permettent une vérification technique indépendante. Aucune action n’est requise de la part du lecteur.",

  cryptographicIntegrityLabel: "Intégrité cryptographique",
  algorithmLabel: "Algorithme",
  hashLabel: "Empreinte du contenu signé (SHA-256)",
  signatureLabel: "Signature (Base64)",

  publicKeyLabel: "Clé publique de vérification de l’émetteur",
  publicKeyNote:
    "Cette clé publique permet à tout tiers de vérifier de manière indépendante l’authenticité et l’intégrité de ce document.",

  /* ===============================
     SECTION 9 — FINAL CLAUSES
  =============================== */
  finalClausesTitle: "9. Clauses finales et responsabilité",
  issuedPursuantText:
    "Émise conformément au standard interne Certif-Scope CS-SB-v1.",

  legalEffectLabel: "Effet juridique",
  legalEffectText:
    "Ce document n’a aucun effet réglementaire ou juridique et est fourni exclusivement à titre informatif.",

  liabilityLabel: "Responsabilité",
  liabilityText:
    "Les résultats sont exclusivement dérivés des données fournies par l’entité, sous sa seule responsabilité.",

  validityExplanationLabel: "Validité",
  validityText:
    "La période de validité reflète la pertinence temporelle des données et de la méthodologie.",

  noAuditText:
    "Certif-Scope ne réalise aucune mission d’audit, de validation, de vérification ou d’assurance.",

  methodologyNote:
    "CS-SB-v1 est une méthodologie standardisée interne maintenue par Certif-Scope.",

  /* ===============================
     FOOTER
  =============================== */
  footerText:
    "Attestation indicative d’émissions de carbone · Émise par Certif-Scope · certif-scope.com",
  pageLabel: "Page",
} as const;
