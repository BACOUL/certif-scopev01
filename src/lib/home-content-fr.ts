import type { EuHomeLocale } from "./eu-home-locales";

export type HomeContent = {
  alternativeHeadline: string;
  hero: string;
  heroSecond: string;
  description: string;
  generate: string;
  sample: string;
  confirm: string;
  unsuitable: string;
  suitable: string[];
  exclusions: string[];
  decisionEyebrow: string;
  suited: string;
  suitedIntro: string;
  features: { id: string; title: string; text: string }[];
  featuresEyebrow: string;
  contents: string;
  featuresIntro: string;
  clarification: string;
  limits: string;
  ready: string;
  methodologyLink: string;
  steps: { id: string; title: string; text: string }[];
  stepsTitle: string;
  prepare: string;
  included: string[];
  includedTitle: string;
  reuse: string;
  support: string;
  notIncluded: string;
  contactLink: string;
  priceTitle: string;
  priceDetail: string;
  prepareDocument: string;
  packsLink: string;
  faq: { q: string; a: string }[];
  faqEyebrow: string;
  faqTitle: string;
  faqIntro: string;
  guideLink: string;
  faqLimits: string;
  finalEyebrow: string;
  finalTitle: string;
  finalIntro: string;
  finalGenerate: string;
  pricingLink: string;
  finalGuide: string;
  scopeTitle: string;
  verifyLink: string;
  privacyLink: string;
  backTop: string;
  scopeItems: string[];
  locale: EuHomeLocale;
  image: string;
  sampleAlt: string;
  badges: string[];
  links: Record<
    | "generate"
    | "sample"
    | "methodology"
    | "contact"
    | "packs"
    | "pricing"
    | "guide"
    | "verify"
    | "privacy",
    string
  >;
  doubt: string;
  doubtText: string;
  contact: string;
  calculation: string;
};

export const FR_HOME_COPY: HomeContent = {
  alternativeHeadline:
    "Attestation CO₂e indicative prête à transmettre pour répondre à une demande documentaire sans audit carbone complet.",
  hero: "Une demande carbone à traiter ?",
  heroSecond: "Préparez votre document CO₂e indicatif.",
  description:
    "Un PDF standardisé, daté et vérifiable pour répondre rapidement à une demande documentaire simple, si votre destinataire accepte une estimation fondée sur vos dépenses.",
  generate: "Générer mon attestation — 89 €",
  sample: "Télécharger un exemple gratuit",
  confirm: "À confirmer avec le destinataire",
  unsuitable: "Non adapté",
  suitable: [
    "Client demande une information carbone simple",
    "Plateforme fournisseur demande un justificatif CO₂e",
    "Banque demande un élément ESG ou carbone",
    "Assurance demande une information environnementale",
    "Appel d’offres sans méthode imposée",
  ],
  exclusions: [
    "Audit carbone complet exigé",
    "Norme ISO, GHG Protocol complet ou méthode imposée",
    "Scope 1 / 2 / 3 détaillé exigé",
    "Vérification externe obligatoire",
    "Reporting CSRD / ESRS demandé",
  ],
  decisionEyebrow: "Décision rapide",
  suited: "Est-ce adapté à votre demande ?",
  suitedIntro:
    "Certif-Scope est conçu pour les demandes documentaires simples. Si un audit complet, une norme précise ou une vérification externe est exigée, il faut suivre cette exigence. L’absence de méthode imposée ne garantit pas l’acceptation du PDF : demandez confirmation avant achat.",
  features: [
    {
      id: "01",
      title: "Résultat CO₂e lisible",
      text: "Un résultat agrégé clair, conçu pour être compris immédiatement par un client, un acheteur, une banque ou un partenaire.",
    },
    {
      id: "02",
      title: "Méthode et périmètre",
      text: "Les catégories, coefficients internes et limites de l’estimation sont décrits dans la méthodologie.",
    },
    {
      id: "03",
      title: "Entreprise et année de référence",
      text: "Le nom de votre entreprise, l’année des dépenses et la date d’émission figurent dans le document.",
    },
    {
      id: "04",
      title: "Vérification documentaire",
      text: "Un identifiant et des informations documentaires lisibles ; la signature nécessite un contrôle technique distinct.",
    },
  ],
  featuresEyebrow: "Attestation carbone",
  contents: "Ce que contient votre attestation",
  featuresIntro:
    "Un document conçu pour répondre directement à une demande client, un appel d’offres ou un dossier fournisseur.",
  clarification: "Clarification importante",
  limits:
    "Il s’agit d’une attestation indicative basée sur les dépenses déclarées. Ce document ne constitue ni un inventaire GES complet, ni un audit réglementaire, ni un reporting CSRD/ESRS.",
  ready: "Un document prêt à être envoyé immédiatement.",
  methodologyLink: "Consulter la méthodologie complète",
  steps: [
    {
      id: "01",
      title: "Préparez vos données",
      text: "Renseignez votre entreprise et sept catégories de dépenses externes annuelles hors taxes. Vérifiez avec votre destinataire que ce périmètre répond à sa demande.",
    },
    {
      id: "02",
      title: "Vérifiez votre estimation",
      text: "Consultez le résultat indicatif, l’entreprise et l’année de référence dans le récapitulatif avant paiement. Vous pouvez revenir modifier votre saisie.",
    },
    {
      id: "03",
      title: "Téléchargez et archivez votre PDF",
      text: "Après confirmation du paiement ou utilisation d’une clé de pack, téléchargez votre document. Conservez une copie avant de le transmettre.",
    },
  ],
  stepsTitle: "Votre document en trois étapes",
  prepare: "Préparer mon attestation",
  included: [
    "Un PDF personnalisé au nom de votre entreprise",
    "Une estimation CO₂e agrégée à partir des dépenses déclarées",
    "L’année de référence et la date d’émission",
    "La méthode, sa version et les limites de l’estimation",
    "Un identifiant et les éléments de vérification documentaire",
  ],
  includedTitle: "Ce que comprennent les 89 €",
  reuse:
    "Paiement unique par document, sans abonnement. TVA non applicable selon le régime indiqué dans les mentions légales. Un même PDF peut être transmis à plusieurs destinataires pour la même entreprise, la même année et les mêmes données.",
  support:
    "Le support peut être contacté pour un incident de téléchargement, une question sur la commande ou une demande de correction. Une réémission n’est pas automatiquement incluse : ses conditions sont précisées après examen de votre demande.",
  notIncluded:
    "Le prix ne comprend pas un audit, une validation externe des émissions ni une garantie d’acceptation du document.",
  contactLink: "Une question avant de commander ?",
  priceTitle: "89 € pour votre attestation CO₂e indicative",
  priceDetail: "Par document · sans abonnement",
  prepareDocument: "Préparer mon document",
  packsLink: "Besoin de plusieurs documents ?",
  faq: [
    {
      q: "Est-ce adapté à ma demande ?",
      a: "Certif-Scope fournit une estimation indicative fondée sur sept catégories de dépenses externes. Envoyez l’exemple à votre destinataire pour confirmer qu’il accepte cette méthode et ce périmètre. L’absence de norme imposée ne garantit pas son acceptation. Le document ne remplace pas un audit, un inventaire GES complet ou un reporting réglementaire.",
    },
    {
      q: "Quelles données dois-je préparer ?",
      a: "Préparez le nom de l’entreprise, l’année de référence et vos dépenses externes annuelles hors taxes en euros : numérique, services professionnels, biens, logistique, déplacements, hébergement et événements, autres achats externes. Chaque dépense doit être comptée une seule fois. Renseignez 0 uniquement pour une catégorie réellement nulle ; une donnée inconnue doit être complétée.",
    },
    {
      q: "Que reçois-je pour 89 € ?",
      a: "Un PDF personnalisé indiquant votre entreprise, l’année, la date d’émission, l’estimation CO₂e agrégée, la méthode et ses limites, ainsi que les éléments de vérification documentaire. Le prix est par document, sans abonnement. Le support peut être contacté pour une question sur la commande ou un incident de téléchargement ; un audit et une validation externe des émissions ne sont pas inclus.",
    },
    {
      q: "Quelle méthode et quels coefficients sont utilisés ?",
      a: "Le calcul multiplie les dépenses de chaque catégorie par un coefficient interne, puis additionne les résultats. La page Méthodologie publie les valeurs, unités, version, exemple de calcul et limites. Ces coefficients ne sont pas présentés comme certifiés ou validés par un organisme externe. Le secteur déclaré ne modifie pas les coefficients.",
    },
    {
      q: "Puis-je envoyer le même PDF à plusieurs destinataires ?",
      a: "Oui, pour la même entreprise, la même année de référence et les mêmes données, si chaque destinataire accepte son périmètre. Les packs servent à créer plusieurs documents distincts, pas à multiplier les exemplaires d’un même PDF.",
    },
    {
      q: "Comment fonctionnent les packs ?",
      a: "Après confirmation du paiement, les clés sont envoyées à l’adresse email utilisée pour la commande. Chaque clé permet de générer une attestation et doit être utilisée dans les 365 jours suivant sa création. Saisissez et vérifiez une clé dans le formulaire avant de générer le document. Si l’email n’arrive pas, vérifiez les courriers indésirables puis contactez le support sans racheter le pack.",
    },
    {
      q: "Puis-je corriger une erreur après émission ?",
      a: "Vérifiez vos données dans le récapitulatif avant de payer. Après émission, contactez le support avec la référence de commande et la correction demandée. Une réémission peut nécessiter un nouveau document ; elle n’est pas automatiquement gratuite. Les conditions vous seront précisées avant toute nouvelle commande.",
    },
    {
      q: "Que faire si le téléchargement échoue ou si je perds mon PDF ?",
      a: "En cas d’échec, réessayez depuis la page de retour et contactez le support si nécessaire, sans repasser commande. Pour un paiement unitaire, vérifiez aussi l’email de livraison prévu par le service et les courriers indésirables. Archivez votre PDF dès réception : Certif-Scope ne conserve pas de copie récupérable. Une réémission d’un document perdu doit être examinée par le support.",
    },
    {
      q: "Que confirme la vérification documentaire ?",
      a: "Le QR code donne accès aux données documentaires transmises. Leur lecture ne prouve pas, à elle seule, l’authenticité du PDF. Les éléments de signature nécessitent un contrôle technique distinct. Aucune de ces opérations ne valide les dépenses déclarées ou les émissions réelles.",
    },
  ],
  faqEyebrow: "Avant et après votre commande",
  faqTitle: "Vos questions avant de commander",
  faqIntro:
    "Données à préparer, contenu du document, packs et assistance : les informations utiles pour décider et recevoir votre PDF.",
  guideLink: "Lire le guide complet sur le bilan carbone PME →",
  faqLimits:
    "Estimation indicative basée sur les dépenses. Non auditée, non conforme CSRD/ESRS, sans couverture complète des scopes 1, 2 et 3, et ne remplace pas un inventaire complet des émissions. Les résultats dépendent des informations fournies par l’utilisateur.",
  finalEyebrow: "Réponse rapide — format standardisé",
  finalTitle: "Produire une attestation CO₂e indicative, claire et vérifiable",
  finalIntro:
    "Si votre demande relève du screening fournisseur, d’un appel d’offres ou d’une revue banque/assurance, l’objectif est un document lisible, archivable et cohérent : résultat CO₂e agrégé, année, méthode déclarée, limites explicites et vérification.",
  finalGenerate: "Générer mon attestation →",
  pricingLink: "Voir le prix",
  finalGuide: "Lire le guide PME →",
  scopeTitle: "Rappel de périmètre",
  verifyLink: "Vérifier →",
  privacyLink: "Confidentialité →",
  backTop: "Haut de page",
  scopeItems: [
    "estimation indicative en spend-based",
    "résultat agrégé en tCO₂e",
    "document standardisé et vérifiable",
    "non audit, non inventaire complet",
    "non reporting CSRD/ESRS",
  ],
  locale: "fr",
  image: "/attestation-example-fr.webp",
  sampleAlt:
    "Exemple d’attestation CO₂e indicative prête à transmettre, avec résultat agrégé, méthode déclarée et identifiant vérifiable.",
  badges: [
    "Prix fixe 89 €",
    "Sans abonnement",
    "PDF standardisé",
    "ID vérifiable",
    "Non audit / non CSRD",
  ],
  links: {
    generate: "/fr/generate/",
    sample: "/api/sample",
    methodology: "/fr/product/methodology/",
    contact: "/fr/contact/",
    packs: "/fr/pricing/#packs",
    pricing: "/fr/pricing/",
    guide: "/fr/bilan-carbone-pme/",
    verify: "/fr/verify/",
    privacy: "/fr/privacy/",
  },
  doubt: "Un doute avant de payer ?",
  doubtText:
    "Consultez l’exemple avec votre destinataire pour confirmer le périmètre attendu. Certif-Scope fournit une estimation indicative, sans validation externe des émissions.",
  contact: "Nous contacter",
  calculation: "Comprendre le calcul",
};
