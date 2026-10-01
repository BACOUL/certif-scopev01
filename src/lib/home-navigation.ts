export type HomeNavigation = {
  routes: Record<
    | "home"
    | "pillarBilanCarbonePME"
    | "product"
    | "methodology"
    | "compliance"
    | "privacy"
    | "verify"
    | "pricing"
    | "generate"
    | "contact"
    | "legal"
    | "terms"
    | "cookies"
    | "data"
    | "partners"
    | "tender"
    | "why"
    | "tenderExample",
    string
  >;
  labels: Record<
    | "home"
    | "guide"
    | "product"
    | "presentation"
    | "methodology"
    | "compliance"
    | "privacy"
    | "verify"
    | "pricing"
    | "generate"
    | "contact"
    | "legal"
    | "terms"
    | "cookies"
    | "data"
    | "partners"
    | "quick"
    | "cases"
    | "guides"
    | "company"
    | "information"
    | "rights"
    | "menu",
    string
  >;
};
export const FR_HOME_NAV: HomeNavigation = {
  routes: {
    home: "/fr/",
    pillarBilanCarbonePME: "/fr/bilan-carbone-pme/",
    product: "/fr/product/",
    methodology: "/fr/product/methodology/",
    compliance: "/fr/product/compliance/",
    privacy: "/fr/privacy/",
    verify: "/fr/verify/",
    pricing: "/fr/pricing/",
    generate: "/fr/generate/",
    contact: "/fr/contact/",
    legal: "/fr/legal/",
    terms: "/fr/terms/",
    cookies: "/fr/cookies/",
    data: "/fr/data-processing/",
    partners: "/fr/partners/",
    tender: "/fr/bilan-carbone-appel-offres/",
    why: "/fr/why-companies-ask/",
    tenderExample: "/fr/why-companies-ask/attestation-carbone-appel-offres/",
  },
  labels: {
    home: "Accueil",
    guide: "Bilan carbone PME",
    product: "Attestation CO₂e",
    presentation: "Présentation",
    methodology: "Méthodologie",
    compliance: "Cadre & conformité",
    privacy: "Confidentialité",
    verify: "Vérifier",
    pricing: "Tarification",
    generate: "Générer",
    contact: "Contact",
    legal: "Mentions légales",
    terms: "Conditions d’utilisation",
    cookies: "Politique cookies",
    data: "Traitement des données",
    partners: "Partenariats",
    quick: "Accès rapides",
    cases: "Cas concrets",
    guides: "Guides France",
    company: "Entreprise & légal",
    information: "Informations",
    rights: "Tous droits réservés.",
    menu: "Navigation principale",
  },
};
