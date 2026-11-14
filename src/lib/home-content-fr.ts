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
    "Fiche de données carbone fournisseur en préparation, sur le site Certif-Scope existant. Attestation historique conservée.",
  hero: "Les données carbone de vos fournisseurs,",
  heroSecond: "Certif-Scope évolue pour 2026.",
  description:
    "Nous préparons une fiche fondée sur la consommation d’énergie et les émissions des scopes 1 et 2, avec un périmètre documenté. L’ancienne attestation basée sur les dépenses et les droits des clients existants sont conservés. Nouvelle fiche non encore disponible à l’achat.",
  generate: "Découvrir la nouvelle fiche",
  sample: "Voir le PDF historique",
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
  suited: "Quel type de données votre client attend-il ?",
  suitedIntro:
    "L’attestation historique est une estimation fondée sur les dépenses. Elle ne répond pas à une demande de quantités d’énergie et d’émissions des scopes 1 et 2. La future fiche fournisseur vise une partie de ces données, mais elle n’est pas encore commercialisée. Faites confirmer le périmètre exigé par le destinataire.",
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
  featuresEyebrow: "Évolution du document carbone",
  contents: "Ce que nous préparons pour la future fiche",
  featuresIntro:
    "Présentation des fonctionnalités visées. La nouvelle fiche n’est pas encore disponible à l’achat et ses limites seront explicitées avant toute ouverture commerciale.",
  clarification: "Clarification importante",
  limits:
    "La future fiche de données carbone ne sera ni un audit, ni une certification, ni un inventaire GES complet. L’ancienne attestation basée sur les dépenses ne couvre pas les informations énergétiques et les scopes 1 et 2 demandés dans B3.",
  ready: "La nouvelle fiche est encore en phase de validation.",
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
  stepsTitle: "La future fiche : les trois étapes prévues",
  prepare: "Découvrir le projet de fiche",
  included: [
    "Un PDF personnalisé au nom de votre entreprise",
    "Une estimation CO₂e agrégée à partir des dépenses déclarées",
    "L’année de référence et la date d’émission",
    "La méthode, sa version et les limites de l’estimation",
    "Un identifiant et les éléments de vérification documentaire",
  ],
  includedTitle: "Fonctionnalités envisagées pour la future fiche",
  reuse:
    "Le tarif de travail envisagé est de 89 € par fiche. Aucun tarif ni aucune vente de la nouvelle offre ne sont ouverts à ce stade. L’ancienne attestation et les crédits achetés auparavant doivent être conservés.",
  support:
    "Le support peut être contacté pour un incident de téléchargement, une question sur la commande ou une demande de correction. Une réémission n’est pas automatiquement incluse : ses conditions sont précisées après examen de votre demande.",
  notIncluded:
    "La future fiche ne garantira ni l’acceptation par un destinataire, ni la conformité B3 complète, ni une validation externe des émissions.",
  contactLink: "Une question avant de commander ?",
  priceTitle: "Future fiche fournisseur : prix envisagé de 89 €",
  priceDetail: "Prix envisagé · ventes non ouvertes",
  prepareDocument: "Découvrir le périmètre prévu",
  packsLink: "Consulter les conditions des anciennes attestations",
  faq: [
    {
      q: "Quelle différence entre l'ancienne attestation et la future fiche fournisseur ?",
      a: "L’attestation historique estime des émissions à partir de sept catégories de dépenses externes. La nouvelle fiche, encore en préparation et indisponible à l’achat, reposera sur des quantités d’énergie et des émissions directes (scope 1) et liées à l’énergie achetée (scope 2 location-based). Aucun de ces documents ne constitue à lui seul une déclaration B3 complète ni une certification. Les droits des anciennes commandes et des packs doivent être conservés et rapprochés avant toute migration.",
    },
    {
      q: "Est-il obligatoire d'acheter une fiche carbone depuis la réglementation 2026 ?",
      a: "Non. Le règlement délégué (UE) 2026/1560 fixe une norme volontaire d’information de durabilité ; il n’impose pas à toutes les PME d’acheter un produit Certif-Scope. Vérifiez ce que votre client demande exactement et si une méthode ou une assurance particulière est exigée.",
    },
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
  finalEyebrow: "Une évolution, sans perdre l’ancien Certif-Scope",
  finalTitle: "Préparer des données carbone fournisseur traçables",
  finalIntro:
    "La future fiche vise un document clair sur les consommations énergétiques et les émissions scopes 1 et 2, avec les sources et les limites de calcul. Elle reste en préparation ; consultez son périmètre avant d’envisager un achat.",
  finalGenerate: "Découvrir la fiche fournisseur →",
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
    "Image du PDF historique Certif-Scope fondé sur les dépenses. Ce modèle ne représente pas la future fiche fournisseur.",
  badges: [
    "Prix fixe 89 €",
    "Sans abonnement",
    "PDF standardisé",
    "ID vérifiable",
    "Non audit / non CSRD",
  ],
  links: {
    generate: "/fr/fiche-carbone-fournisseur/",
    sample: "/attestation-example-fr.webp",
    methodology: "/fr/product/methodology/",
    contact: "/fr/contact/",
    packs: "/fr/pricing/#packs",
    pricing: "/fr/pricing/",
    guide: "/fr/bilan-carbone-pme/",
    verify: "/fr/verify/",
    privacy: "/fr/privacy/",
  },
  doubt: "Besoin de savoir si la future fiche conviendra ?",
  doubtText:
    "Demandez à votre destinataire s’il attend des consommations d’énergie, les scopes 1 et 2 ou un reporting complet. La nouvelle fiche est en préparation ; l’ancienne attestation dépense ne remplace pas les données B3.",
  contact: "Nous contacter",
  calculation: "Comprendre le calcul",
};
