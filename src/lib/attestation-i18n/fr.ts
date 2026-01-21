// lib/attestation-i18n/fr.ts

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
     TITLE
  =============================== */
  title: "Attestation indicative d'emissions de carbone",
  subtitle:
    "Declaration indicative, non reglementaire, fondee sur une methodologie",
  standardReference:
    "Emise conformement a la methodologie standardisee Certif-Scope CS-SB-v1",

  /* ===============================
     RESULT
  =============================== */
  resultLabel: "Emissions indicatives agregees declarees",

  /* ===============================
     SECTION 1 — ISSUER
  =============================== */
  issuerSectionTitle: "1. Identification de l'emetteur",
  issuerLabel: "Emetteur",
  websiteLabel: "Site web",
  attestationIdLabel: "Reference de l'attestation",
  issuedDateLabel: "Date d'emission",
  validityLabel: "Periode de validite",

  /* ===============================
     SECTION 2 — DOCUMENT NATURE
  =============================== */
  documentNatureSectionTitle: "2. Nature du document",
  documentNatureText:
    "Ce document constitue une attestation indicative d'emissions de carbone, emise exclusivement a des fins d'information, d'aide a la decision et d'evaluation preliminaire.",

  /* ===============================
     SECTION 3 — ENTITY
  =============================== */
  entitySectionTitle: "3. Identification de l'entite",
  entityNameLabel: "Nom de l'entite",
  sectorLabel: "Secteur d'activite",
  identifierLabel: "Identifiant de l'entite",
  countryLabel: "Pays",
  yearLabel: "Annee de reference",

  /* ===============================
     SECTION 4 — SCOPE
  =============================== */
  scopeSectionTitle: "4. Perimetre",
  scopeText:
    "Cette attestation fournit une estimation indicative des emissions de gaz a effet de serre, derivee exclusivement de donnees de depenses agregees, au moyen d'une methodologie basee sur les depenses (spend-based).",
  scopeNote:
    "Ce document ne constitue ni un inventaire de gaz a effet de serre, ni un audit, ni une verification, ni une declaration reglementaire au sens de la CSRD, des ESRS ou de tout cadre equivalent.",

  /* ===============================
     SECTION 5 — REFERENCES
  =============================== */
  referencesSectionTitle: "5. References normatives",
  referencesIntro:
    "Les normes et cadres suivants sont mentionnes a titre d'alignement methodologique et de coherence contextuelle :",

  /* ===============================
     ASIDE — SUMMARY / NATURE
  =============================== */
  authenticityTitle: "Authenticite",
  authenticityText:
    "Cette attestation est signee cryptographiquement et peut etre verifiee de maniere independante, sans acces aux systemes de Certif-Scope.",
  natureTitle: "Nature du document",
  natureText:
    "Declaration indicative, non reglementaire, fondee sur une methodologie.",
  summaryTitle: "Resume du perimetre",
  summaryItems:
    "Estimation indicative · Methodologie basee sur les depenses · Resultat agrege uniquement",

  /* ===============================
     SECTION 6 — DECLARATION
  =============================== */
  declarationSectionTitle: "6. Declaration du resultat",
  declarationText:
    "Sur la seule base des donnees fournies par l'entite, Certif-Scope emet la presente attestation indicative des emissions agregees de gaz a effet de serre pour l'annee de reference indiquee.",

  /* ===============================
     SECTION 7 — METHODOLOGY
  =============================== */
  methodologySectionTitle: "7. Methodologie et limites",
  methodologyLabel:
    "Methodologie deterministe basee sur les depenses, utilisant des donnees de depenses agregees.",
  limitationsLabel:
    "Aucune donnee d'activite physique. Aucune emission de Scope 1 ou de Scope 2. Modele strictement indicatif.",
  transferabilityLabel: "Ce document est non transferable.",

  /* ===============================
     SECTION 8 — VERIFICATION
  =============================== */
  verificationSectionTitle: "8. Verification et integrite",
  verificationIntro:
    "Cette attestation est generee sans conservation des donnees financieres sous-jacentes par Certif-Scope.",
  verificationNote:
    "Le document PDF constitue l'unique objet verifiable.",
  verificationLinkLabel: "Page d'information de verification",
  cryptographicLabel: "Integrite cryptographique",
  publicKeyLabel: "Cle publique de verification de l'emetteur",

  /* ===============================
     SECTION 9 — FINAL CLAUSES
  =============================== */
  finalClausesTitle: "9. Clauses finales et responsabilite",
  legalEffectLabel:
    "Ce document n'a aucun effet reglementaire ou juridique et est fourni exclusivement a titre informatif.",
  liabilityLabel:
    "Les resultats sont exclusivement derives des donnees fournies par l'entite, sous sa seule responsabilite.",
  validityExplanationLabel:
    "La periode de validite reflete la pertinence temporelle des donnees et de la methodologie sous-jacentes.",
  noAuditNotice:
    "Certif-Scope ne realise aucune mission d'audit, de validation, de verification ou d'assurance.",
  internalStandardNotice:
    "CS-SB-v1 est une methodologie standardisee interne maintenue par Certif-Scope.",
} as const;
