import type { Metadata } from "next";
import BusinessUseCasePage from "@/components/fr/BusinessUseCasePage";

const pageUrl =
  "https://www.certif-scope.com/fr/bilan-carbone-assurance-pme/";

export const metadata: Metadata = {
  title:
    "Attestation CO₂e pour assurance PME : répondre à une demande carbone ou ESG",
  description:
    "Répondre à une demande carbone, ESG ou environnementale d’un assureur, courtier ou questionnaire de risque avec une attestation CO₂e indicative pour PME.",
  alternates: {
    canonical: pageUrl,
    languages: {
      fr: pageUrl,
    },
  },
  openGraph: {
    title:
      "Attestation CO₂e pour assurance PME : répondre à une demande carbone ou ESG",
    description:
      "Comprendre quand un document CO₂e indicatif peut aider dans un questionnaire assurance ou ESG, sans promettre une baisse de prime ni une acceptation.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

const concerns = [
  {
    title: "Questionnaire assurance",
    text: "Un assureur peut demander une information environnementale dans un questionnaire entreprise ou une revue de risque.",
  },
  {
    title: "Renouvellement de contrat",
    text: "Une information CO₂e peut être demandée lors d’un renouvellement, d’une mise à jour de dossier ou d’un échange courtier.",
  },
  {
    title: "Évaluation extra-financière",
    text: "Certaines plateformes de risque ou d’assurance collectent des éléments ESG pour mieux documenter les dossiers.",
  },
  {
    title: "Demande RSE d’un courtier ou assureur",
    text: "Si la demande reste simple et ne précise pas une norme obligatoire, un PDF indicatif peut structurer la réponse.",
  },
];

const provides = [
  "PDF standardisé",
  "Résultat CO₂e agrégé",
  "Méthode déclarée",
  "Limites visibles",
  "Date d’émission",
  "Identifiant de vérification",
  "Document facile à transmettre",
  "Prix fixe 89 €, sans abonnement",
];

const notAdapted = [
  "L’assureur exige un audit carbone complet.",
  "Une ventilation Scope 1, 2 et 3 détaillée est demandée.",
  "Une méthode GHG Protocol complète est imposée.",
  "Une norme ISO ou une validation externe est obligatoire.",
  "Le dossier relève d’un reporting CSRD ou ESRS.",
  "Le contrat impose un formulaire ou une méthode assurantielle spécifique.",
];

const faq = [
  {
    q: "Un assureur peut-il demander une information carbone ?",
    a: "Oui. Un assureur, un courtier ou une plateforme de gestion des risques peut demander une information carbone ou ESG dans un dossier entreprise.",
  },
  {
    q: "Le document peut-il servir dans un questionnaire ESG ?",
    a: "Oui, si le questionnaire demande une information documentaire simple et ne prescrit pas une méthode obligatoire. L’attestation reste indicative et limitée.",
  },
  {
    q: "Est-ce une preuve réglementaire ?",
    a: "Non. L’attestation Certif-Scope est indicative, non auditée, non réglementaire et non assimilable à un reporting CSRD/ESRS ou à un inventaire GES complet.",
  },
  {
    q: "Que faire si l’assureur exige un audit ?",
    a: "Si un audit, une norme, une méthode précise ou une vérification externe est demandé, il faut suivre cette exigence plutôt qu’utiliser une attestation indicative seule.",
  },
  {
    q: "Le PDF est-il vérifiable ?",
    a: "Le PDF peut contenir un identifiant de vérification et des éléments de contrôle documentaire. Cela ne simule pas une validation assurantielle ni une garantie contractuelle.",
  },
];

export default function BilanCarboneAssurancePMEPage() {
  return (
    <BusinessUseCasePage
      pageUrl={pageUrl}
      breadcrumbName="Attestation CO₂e assurance PME"
      serviceName="Attestation CO₂e indicative pour assurance PME"
      serviceDescription="Génération d’une attestation CO₂e indicative pour répondre à une demande carbone, ESG ou environnementale d’un assureur, courtier ou questionnaire de risque."
      eyebrow="Assurance · ESG · PME"
      h1="Attestation CO₂e pour assurance PME : répondre à une demande carbone ou ESG"
      intro="Une PME peut recevoir une demande d’information carbone ou environnementale d’un assureur, d’un courtier, d’une plateforme de risque ou d’un questionnaire ESG."
      context="Certif-Scope peut fournir une réponse documentaire simple lorsque la demande n’impose pas d’audit. Le document ne promet aucune baisse de prime, aucune acceptation ni aucune garantie contractuelle."
      concerns={concerns}
      provides={provides}
      notAdapted={notAdapted}
      formulation="Vous trouverez ci-joint une attestation CO₂e indicative établie selon une méthode spend-based, avec résultat agrégé, limites visibles et identifiant de vérification."
      faq={faq}
      relatedLinks={[
        {
          href: "/fr/why-companies-ask/exigences-co2-banques-assurances/",
          title: "Banques et assurances",
          text: "Comprendre les demandes carbone venues d’acteurs financiers.",
        },
        {
          href: "/fr/bilan-carbone-banque-pme/",
          title: "Dossier bancaire PME",
          text: "Voir quoi fournir quand une banque demande un élément carbone.",
        },
        {
          href: "/fr/verify/demo/",
          title: "Démo de vérification",
          text: "Montrer à un destinataire ce qu’il peut contrôler.",
        },
      ]}
    />
  );
}
