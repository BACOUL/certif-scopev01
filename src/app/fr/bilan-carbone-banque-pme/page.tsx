import type { Metadata } from "next";
import BusinessUseCasePage from "@/components/fr/BusinessUseCasePage";

const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-banque-pme/";

export const metadata: Metadata = {
  title:
    "Bilan carbone pour dossier bancaire PME : quel document fournir ?",
  description:
    "PME : répondre à une demande carbone, ESG ou environnementale dans un dossier bancaire avec une attestation CO₂e indicative, simple, datée et vérifiable.",
  alternates: {
    canonical: pageUrl,
    languages: {
      fr: pageUrl,
    },
  },
  openGraph: {
    title:
      "Bilan carbone pour dossier bancaire PME : quel document fournir ?",
    description:
      "Comprendre quand une attestation CO₂e indicative peut aider dans un dossier bancaire, sans promettre un financement ni remplacer un audit carbone.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

const concerns = [
  {
    title: "Demande ESG dans un dossier bancaire",
    text: "Un conseiller ou un service risque peut demander un élément environnemental pour compléter un dossier professionnel.",
  },
  {
    title: "Financement professionnel",
    text: "La banque peut vouloir archiver une information CO₂e dans le cadre d’une demande de prêt, d’investissement ou de développement.",
  },
  {
    title: "Renouvellement ou discussion bancaire",
    text: "Lors d’un échange annuel, d’un renouvellement ou d’une revue de dossier, une information carbone peut être demandée.",
  },
  {
    title: "Questionnaire RSE bancaire simple",
    text: "Si le questionnaire ne demande pas de méthode obligatoire, un document indicatif peut fournir une réponse structurée.",
  },
];

const provides = [
  "PDF standardisé et transmissible",
  "Résultat CO₂e agrégé",
  "Méthode déclarée",
  "Limites visibles",
  "Date d’émission",
  "Identifiant de vérification",
  "Document facile à joindre au dossier",
  "Prix fixe 89 €, sans abonnement",
];

const notAdapted = [
  "Un audit carbone complet est demandé explicitement.",
  "Un détail Scope 1, Scope 2 et Scope 3 est exigé.",
  "La banque impose une méthode GHG Protocol complète.",
  "Une norme ISO ou une vérification externe est obligatoire.",
  "Le dossier exige un reporting CSRD ou ESRS.",
  "La demande conditionne le dossier à un format bancaire propriétaire.",
];

const faq = [
  {
    q: "Une banque peut-elle demander un document carbone à une PME ?",
    a: "Oui. Une banque peut demander une information carbone ou ESG dans un dossier professionnel, souvent pour compléter une analyse interne. Cela ne signifie pas toujours qu’un audit complet est exigé.",
  },
  {
    q: "Certif-Scope remplace-t-il un bilan carbone complet ?",
    a: "Non. Certif-Scope produit une attestation CO₂e indicative, non auditée, non réglementaire, non CSRD/ESRS et non équivalente à un inventaire GES complet.",
  },
  {
    q: "Est-ce accepté automatiquement par une banque ?",
    a: "Non. Le document peut aider à répondre à une demande documentaire simple, mais il ne garantit ni l’acceptation par la banque, ni un financement, ni un taux, ni un avantage bancaire.",
  },
  {
    q: "Que contient le PDF ?",
    a: "Le PDF contient notamment un résultat CO₂e agrégé, une méthode déclarée, une date d’émission, des limites visibles et un identifiant de vérification.",
  },
  {
    q: "Que faire si la banque impose une méthode précise ?",
    a: "Si une méthode obligatoire, une norme, un audit ou une vérification externe est imposé, l’entreprise doit suivre cette méthode plutôt qu’utiliser une attestation indicative seule.",
  },
];

export default function BilanCarboneBanquePMEPage() {
  return (
    <BusinessUseCasePage
      pageUrl={pageUrl}
      breadcrumbName="Bilan carbone banque PME"
      serviceName="Attestation CO₂e indicative pour dossier bancaire PME"
      serviceDescription="Génération d’une attestation CO₂e indicative pour répondre à une demande documentaire carbone, ESG ou environnementale dans un dossier bancaire PME."
      eyebrow="Banque · PME · Document carbone"
      h1="Bilan carbone pour dossier bancaire PME : quel document fournir ?"
      intro="Une banque, un conseiller bancaire, un organisme de financement ou un partenaire financier peut demander un élément carbone, ESG ou environnemental à une PME."
      context="Certif-Scope peut aider lorsque la demande porte sur une réponse documentaire simple. Le document ne crée aucun droit à un prêt, aucun taux préférentiel et aucune garantie bancaire."
      concerns={concerns}
      provides={provides}
      notAdapted={notAdapted}
      formulation="Vous trouverez ci-joint une attestation CO₂e indicative établie selon une méthode spend-based, avec résultat agrégé, limites visibles et identifiant de vérification."
      faq={faq}
      relatedLinks={[
        {
          href: "/fr/why-companies-ask/exigences-co2-banques-assurances/",
          title: "Demandes banque et assurance",
          text: "Comprendre pourquoi les acteurs financiers demandent une information carbone.",
        },
        {
          href: "/fr/difference-bilan-carbone-attestation-co2e/",
          title: "Bilan complet ou attestation ?",
          text: "Comparer une démarche carbone complète et une réponse documentaire indicative.",
        },
        {
          href: "/fr/verify/demo/",
          title: "Voir la vérification",
          text: "Découvrir ce qu’un destinataire peut contrôler sur une attestation.",
        },
      ]}
    />
  );
}
