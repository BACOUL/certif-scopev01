import type { RuleDefinition } from "./types";

export const blockingRules: RuleDefinition[] = [
  {
    code: "beges_reglementaire",
    label: "BEGES réglementaire demandé",
    severity: "blocking",
    patterns: [
      /\bbeges\b/,
      /\bbilan d[' ]?emissions? de gaz a effet de serre reglementaire\b/,
    ],
    ignoreWhenNegated: true,
  },
  {
    code: "audit_carbone_complet",
    label: "Audit ou bilan carbone complet exigé",
    severity: "blocking",
    patterns: [
      /\baudit carbone\b/,
      /\bdiagnostic carbone complet\b/,
      /\bbilan (?:carbone|ges) complet\b/,
    ],
    ignoreWhenNegated: true,
  },
  {
    code: "certification_officielle",
    label: "Certification officielle ou organisme accrédité exigé",
    severity: "blocking",
    patterns: [
      /\bcertification (?:carbone|co2e?|officielle|accreditee)\b/,
      /\borganisme (?:accredite|certificateur)\b/,
      /\b(?:certifie|valide) par (?:un )?(?:tiers|organisme)\b/,
    ],
    ignoreWhenNegated: true,
  },
  {
    code: "external_verification",
    label: "Vérification ou assurance externe exigée",
    severity: "blocking",
    patterns: [
      /\bverification externe\b/,
      /\bverification par (?:un )?tiers\b/,
      /\bassurance (?:limitee|raisonnable)\b/,
    ],
    ignoreWhenNegated: true,
  },
  {
    code: "iso_14064_imposee",
    label: "Norme ISO 14064 imposée",
    severity: "blocking",
    patterns: [
      /\b(?:selon|conforme a|conformement a) (?:la norme )?iso\s*14064(?:-\d)?\b/,
      /\biso\s*14064(?:-\d)?(?:\s+\w+){0,5}\s+(?:obligatoire|exigee?|requise?|imposee?|certifiee?)\b/,
      /\b(?:obligatoire|exigee?|requise?|imposee?) (?:selon )?(?:la norme )?iso\s*14064(?:-\d)?\b/,
    ],
    ignoreWhenNegated: true,
  },
  {
    code: "ghg_protocol_complet",
    label: "GHG Protocol complet imposé",
    severity: "blocking",
    patterns: [
      /\b(?:selon|conforme a|conformement au) (?:le )?ghg protocol\b/,
      /\bghg protocol(?:\s+\w+){0,5}\s+(?:complet|obligatoire|exige|requis|impose)\b/,
      /\b(?:inventaire|reporting) complet (?:selon )?(?:le )?ghg protocol\b/,
    ],
    ignoreWhenNegated: true,
  },
  {
    code: "scopes_detailles",
    label: "Inventaire détaillé des Scopes 1, 2 et 3 demandé",
    severity: "blocking",
    patterns: [
      /\binventaire (?:detaille|exhaustif)(?:\s+\w+){0,8}\s+scopes?\s*1(?:\s*[,/+-]\s*|\s+et\s+)2(?:\s*[,/+-]\s*|\s+et\s+)3\b/,
      /\bscopes?\s*1(?:\s*[,/+-]\s*|\s+et\s+)2(?:\s*[,/+-]\s*|\s+et\s+)3(?:\s+\w+){0,6}\s+(?:detailles?|exhaustifs?|obligatoires?|exiges?|requis)\b/,
      /\b(?:detail|inventaire|calcul) des emissions? (?:des )?scopes?\s*1(?:\s*[,/+-]\s*|\s+et\s+)2(?:\s*[,/+-]\s*|\s+et\s+)3\b/,
    ],
    ignoreWhenNegated: true,
  },
  {
    code: "reporting_csrd_esrs",
    label: "Reporting CSRD ou ESRS exigé",
    severity: "blocking",
    patterns: [
      /\breporting (?:csrd|esrs)\b/,
      /\b(?:conforme|conformite|obligatoire|exige|requis|impose)(?:\s+\w+){0,4}\s+(?:csrd|esrs)\b/,
      /\b(?:csrd|esrs)(?:\s+\w+){0,5}\s+(?:conforme|obligatoire|exige|requis|impose)\b/,
      /\besrs\s+e1\b/,
    ],
    ignoreWhenNegated: true,
  },
  {
    code: "empreinte_produit_acv",
    label: "Empreinte produit ou analyse de cycle de vie demandée",
    severity: "blocking",
    patterns: [
      /\bempreinte carbone (?:du |de |des )?produits?\b/,
      /\bproduct carbon footprint\b/,
      /\bpcf\b/,
      /\banalyse (?:du |de )?cycle de vie\b/,
      /\bacv\b/,
      /\blca\b/,
    ],
    ignoreWhenNegated: true,
  },
  {
    code: "methode_physique_imposee",
    label: "Méthode physique détaillée imposée",
    severity: "blocking",
    patterns: [
      /\b(?:donnees?|mesures?|quantites?) physiques?(?:\s+\w+){0,8}\s+(?:obligatoires?|exigees?|requises?|imposees?|detaillees?)\b/,
      /\b(?:obligatoire|exigee?|requise?|imposee?) (?:une )?(?:methode|approche) physique detaillee\b/,
      /\bcalcul (?:physique|par activite)(?:\s+\w+){0,6}\s+(?:obligatoire|exige|requis|impose)\b/,
    ],
    ignoreWhenNegated: true,
  },
  {
    code: "format_facteurs_imposes",
    label: "Format ou facteurs d’émission obligatoires imposés",
    severity: "blocking",
    patterns: [
      /\b(?:facteurs? d[' ]emission|base empreinte|facteurs? ademe)(?:\s+\w+){0,7}\s+(?:obligatoires?|exiges?|requis|imposes?)\b/,
      /\bformat (?:excel|xls|xml|reglementaire|du donneur d[' ]ordre)(?:\s+\w+){0,5}\s+(?:obligatoire|exige|requis|impose)\b/,
      /\b(?:obligatoire|exige|requis|impose)(?:\s+\w+){0,5}\s+(?:facteurs? d[' ]emission|base empreinte|format du donneur d[' ]ordre)\b/,
    ],
    ignoreWhenNegated: true,
  },
];

export const ambiguousRules: RuleDefinition[] = [
  {
    code: "bilan_carbone",
    label: "Bilan carbone mentionné sans périmètre précis",
    severity: "ambiguous",
    patterns: [/\bbilan carbone\b/],
    ignoreWhenNegated: true,
  },
  {
    code: "document_rse",
    label: "Document RSE demandé sans format précisé",
    severity: "ambiguous",
    patterns: [/\bdocument rse\b/, /\bpiece rse\b/],
    ignoreWhenNegated: true,
  },
  {
    code: "preuve_carbone",
    label: "Preuve carbone demandée sans niveau de preuve précisé",
    severity: "ambiguous",
    patterns: [
      /\bpreuve carbone\b/,
      /\bjustificatif (?:carbone|co2e?)\b/,
      /\bpreuve (?:co2e?|d[' ]emissions?)\b/,
    ],
    ignoreWhenNegated: true,
  },
  {
    code: "information_esg",
    label: "Information ESG demandée sans référentiel précisé",
    severity: "ambiguous",
    patterns: [
      /\binformation esg\b/,
      /\bdonnee esg\b/,
      /\bquestionnaire esg\b/,
    ],
    ignoreWhenNegated: true,
  },
  {
    code: "empreinte_environnementale",
    label: "Empreinte environnementale demandée sans méthode précisée",
    severity: "ambiguous",
    patterns: [/\bempreinte environnementale\b/],
    ignoreWhenNegated: true,
  },
  {
    code: "document_environnemental",
    label: "Document environnemental demandé sans format précisé",
    severity: "ambiguous",
    patterns: [/\bdocument environnemental\b/, /\bpiece environnementale\b/],
    ignoreWhenNegated: true,
  },
  {
    code: "bilan_ges",
    label: "Bilan GES mentionné sans périmètre précis",
    severity: "ambiguous",
    patterns: [/\bbilan ges\b/],
    ignoreWhenNegated: true,
  },
  {
    code: "questionnaire_carbone",
    label: "Questionnaire carbone sans exigences détaillées",
    severity: "ambiguous",
    patterns: [/\bquestionnaire carbone\b/, /\bdonnees? carbone demandees?\b/],
    ignoreWhenNegated: true,
  },
];

export const positiveRules: RuleDefinition[] = [
  {
    code: "estimation_indicative",
    label: "Estimation CO₂e indicative acceptée",
    severity: "positive",
    patterns: [
      /\bestimation (?:carbone |co2e? )?indicative\b/,
      /\bindicateur (?:carbone |co2e? )?indicatif\b/,
      /\battestation co2e? indicative\b/,
    ],
  },
  {
    code: "co2e_agrege",
    label: "Résultat CO₂e agrégé demandé",
    severity: "positive",
    patterns: [
      /\b(?:resultat|indication|estimation|valeur) co2e? agregee?\b/,
      /\bemissions? co2e? agregees?\b/,
      /\bresultat agrege en (?:tco2e?|tonnes? co2e?)\b/,
    ],
  },
  {
    code: "information_simplifiee",
    label: "Information carbone simplifiée demandée",
    severity: "positive",
    patterns: [
      /\binformation carbone simplifiee\b/,
      /\bindication carbone simplifiee\b/,
      /\breponse carbone simplifiee\b/,
    ],
  },
  {
    code: "screening_fournisseur",
    label: "Screening fournisseur identifié",
    severity: "positive",
    patterns: [
      /\bscreening fournisseur\b/,
      /\bprequalification fournisseur(?:\s+carbone)?\b/,
      /\bevaluation carbone initiale (?:du |des )?fournisseurs?\b/,
    ],
  },
  {
    code: "document_declaratif",
    label: "Document déclaratif accepté",
    severity: "positive",
    patterns: [
      /\bdocument (?:carbone )?declaratif\b/,
      /\battestation (?:carbone |co2e? )?declarative\b/,
    ],
  },
  {
    code: "premiere_information",
    label: "Première information carbone suffisante",
    severity: "positive",
    patterns: [
      /\bpremiere information carbone\b/,
      /\bpremier niveau d[' ]information carbone\b/,
    ],
  },
  {
    code: "aucun_format_impose",
    label: "Aucun format obligatoire",
    severity: "positive",
    patterns: [
      /\baucun format (?:n[' ]est )?(?:impose|exige|requis)\b/,
      /\bsans format (?:impose|obligatoire)\b/,
      /\bformat libre\b/,
    ],
  },
  {
    code: "aucune_verification_externe",
    label: "Aucune vérification externe exigée",
    severity: "positive",
    patterns: [
      /\baucune verification externe (?:n[' ]est )?(?:exigee|requise|demandee)\b/,
      /\bsans verification externe\b/,
      /\bverification externe non (?:exigee|requise|necessaire)\b/,
    ],
  },
  {
    code: "resultat_methode",
    label: "Résultat agrégé et méthode indiquée",
    severity: "positive",
    patterns: [
      /\bresultat agrege(?:\s+\w+){0,6}\s+(?:methode|methodologie) (?:indiquee|decrite|precisee)\b/,
      /\b(?:methode|methodologie) (?:indiquee|decrite|precisee)(?:\s+\w+){0,6}\s+resultat agrege\b/,
    ],
  },
  {
    code: "format_indicatif_suffisant",
    label: "Format indicatif explicitement jugé suffisant",
    severity: "positive",
    patterns: [
      /\b(?:une |l[' ])?(?:estimation|attestation|information|indication)(?:\s+carbone|\s+co2e?)?(?:\s+indicative|\s+simplifiee)?(?:\s+\w+){0,4}\s+(?:suffit|suffira|convient|est acceptee|est attendue)\b/,
      /\bnous acceptons (?:une |l[' ])?(?:estimation|attestation|information|indication)(?:\s+carbone|\s+co2e?)?(?:\s+indicative|\s+simplifiee)?\b/,
    ],
  },
];
