import type { Metadata } from "next";
import BusinessUseCasePage from "@/components/fr/BusinessUseCasePage";

const pageUrl =
  "https://www.certif-scope.com/fr/document-carbone-fournisseur/";

export const metadata: Metadata = {
  title:
    "Document carbone fournisseur : fournir une attestation CO₂e simple et vérifiable",
  description:
    "PME fournisseur : répondre à une demande client, plateforme achat ou questionnaire fournisseur avec une attestation CO₂e indicative, simple et vérifiable.",
  alternates: {
    canonical: pageUrl,
    languages: {
      fr: pageUrl,
    },
  },
  openGraph: {
    title:
      "Document carbone fournisseur : fournir une attestation CO₂e simple et vérifiable",
    description:
      "Répondre à une demande fournisseur carbone avec un PDF CO₂e indicatif, daté, transmissible et prudent sur ses limites.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

const concerns = [
  {
    title: "Référencement fournisseur",
    text: "Un client peut demander un document carbone avant de valider un compte fournisseur ou une relation commerciale.",
  },
  {
    title: "Dossier client",
    text: "Une PME fournisseur peut devoir joindre une pièce CO₂e dans un dossier ou une réponse commerciale.",
  },
  {
    title: "Plateforme achat",
    text: "Une plateforme fournisseur peut contenir un champ carbone, RSE ou ESG à compléter avec un PDF.",
  },
  {
    title: "Demande CO₂e simple",
    text: "Si aucune méthode obligatoire n’est imposée, une attestation indicative peut être une réponse pratique.",
  },
];

const provides = [
  "PDF standardisé",
  "Résultat CO₂e agrégé",
  "Méthode déclarée",
  "Limites visibles",
  "Date d’émission",
  "Identifiant de vérification",
  "Document facile à transmettre à un client",
  "Prix fixe 89 €, sans abonnement",
];

const notAdapted = [
  "Le client demande un audit complet.",
  "Une ventilation Scope 1, 2 et 3 détaillée est exigée.",
  "La méthode GHG Protocol complète est imposée.",
  "Une norme ISO ou une vérification externe est obligatoire.",
  "Le dossier exige une conformité CSRD ou ESRS.",
  "La plateforme impose son propre calcul ou un format non compatible.",
];

const faq = [
  {
    q: "Que fournir quand un client demande un document carbone ?",
    a: "Il faut d’abord vérifier le niveau attendu. Si la demande est simple, un PDF CO₂e indicatif avec résultat agrégé, méthode, date et limites peut constituer une réponse documentaire claire.",
  },
  {
    q: "Certif-Scope convient-il à une plateforme fournisseur ?",
    a: "Oui, pour une demande documentaire simple sans méthode obligatoire. Le PDF peut être transmis ou déposé, mais il ne garantit pas l’acceptation par la plateforme.",
  },
  {
    q: "Quelle différence avec un bilan carbone complet ?",
    a: "Un bilan complet est plus détaillé et peut couvrir des exigences normées. Certif-Scope fournit une attestation CO₂e indicative, non auditée et non réglementaire.",
  },
  {
    q: "Le document est-il vérifiable ?",
    a: "Le document peut contenir un identifiant de vérification et des informations de contrôle. Cela reste une vérification documentaire, pas une validation externe.",
  },
  {
    q: "Que faire si le client impose sa propre méthode ?",
    a: "Si une méthode client, une norme ou une vérification externe est imposée, l’entreprise doit suivre cette exigence plutôt que remplacer le cadre par une attestation indicative.",
  },
];

export default function DocumentCarboneFournisseurPage() {
  return (
    <BusinessUseCasePage
      pageUrl={pageUrl}
      breadcrumbName="Document carbone fournisseur"
      serviceName="Attestation CO₂e indicative fournisseur"
      serviceDescription="Génération d’un document carbone fournisseur simple, standardisé et vérifiable pour les demandes clients, plateformes achats et questionnaires fournisseurs."
      eyebrow="Fournisseur · Achats · Document CO₂e"
      h1="Document carbone fournisseur : fournir une attestation CO₂e simple et vérifiable"
      intro="Lorsqu’un client, un donneur d’ordre ou une plateforme achat demande un document carbone, la PME fournisseur a souvent besoin d’une réponse rapide, claire et transmissible."
      context="Cette page est orientée usage pratique : quoi joindre, comment présenter le document et dans quels cas Certif-Scope est adapté sans dupliquer un bilan carbone fournisseur complet."
      concerns={concerns}
      provides={provides}
      notAdapted={notAdapted}
      formulation="Vous trouverez ci-joint une attestation CO₂e indicative établie selon une méthode spend-based, avec résultat agrégé, limites visibles et identifiant de vérification."
      faq={faq}
      relatedLinks={[
        {
          href: "/fr/bilan-carbone-fournisseur/",
          title: "Bilan carbone fournisseur",
          text: "Lire le guide plus large sur les demandes fournisseurs.",
        },
        {
          href: "/fr/why-companies-ask/attestation-carbone-fournisseur/",
          title: "Pourquoi les clients le demandent",
          text: "Comprendre l’origine des demandes carbone côté achats.",
        },
        {
          href: "/fr/verify/demo/",
          title: "Démo de vérification",
          text: "Voir ce qu’un destinataire peut contrôler.",
        },
      ]}
    />
  );
}
