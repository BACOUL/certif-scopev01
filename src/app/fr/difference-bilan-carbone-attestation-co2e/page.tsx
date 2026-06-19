import type { Metadata } from "next";
import BusinessUseCasePage from "@/components/fr/BusinessUseCasePage";

const pageUrl =
  "https://www.certif-scope.com/fr/difference-bilan-carbone-attestation-co2e/";

export const metadata: Metadata = {
  title:
    "Différence entre bilan carbone complet et attestation CO₂e indicative",
  description:
    "Comprendre la différence entre un bilan carbone complet et une attestation CO₂e indicative Certif-Scope avant de choisir le bon document.",
  alternates: {
    canonical: pageUrl,
    languages: {
      fr: pageUrl,
    },
  },
  openGraph: {
    title:
      "Différence entre bilan carbone complet et attestation CO₂e indicative",
    description:
      "Tableau comparatif pour savoir quand choisir un inventaire GES détaillé et quand une attestation CO₂e indicative peut suffire.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

const concerns = [
  {
    title: "Avant achat",
    text: "Vous devez répondre à une demande carbone, mais vous ne savez pas si un document indicatif suffit ou si un bilan complet est nécessaire.",
  },
  {
    title: "Demande client simple",
    text: "Un client, une banque, un assureur ou un acheteur demande une information CO₂e sans imposer de norme précise.",
  },
  {
    title: "Méthode imposée",
    text: "Le dossier mentionne une norme, un audit, une vérification externe ou une méthode GHG Protocol complète.",
  },
  {
    title: "Réduction de la confusion",
    text: "Vous voulez éviter de présenter une attestation indicative comme un bilan carbone complet.",
  },
];

const provides = [
  "PDF standardisé",
  "Résultat CO₂e agrégé",
  "Méthode spend-based déclarée",
  "Limites visibles",
  "Date d’émission",
  "Identifiant de vérification",
  "Document facile à transmettre",
  "Prix fixe 89 €, sans abonnement",
];

const notAdapted = [
  "L’entreprise doit produire un inventaire GES détaillé.",
  "Les Scopes 1, 2 et 3 doivent être calculés séparément.",
  "Une méthode GHG Protocol complète est imposée.",
  "Une norme ISO ou une vérification externe est obligatoire.",
  "Un reporting CSRD ou ESRS est exigé.",
  "L’entreprise veut structurer une stratégie climat complète.",
];

const comparisonRows = [
  {
    criterion: "Objectif",
    full: "Mesurer finement les émissions et structurer une démarche climat.",
    certifScope:
      "Fournir rapidement une réponse documentaire carbone simple et indicative.",
  },
  {
    criterion: "Niveau de détail",
    full: "Analyse détaillée par sources, postes, périmètres et hypothèses.",
    certifScope:
      "Résultat CO₂e agrégé, méthode déclarée et limites visibles.",
  },
  {
    criterion: "Méthode",
    full: "Méthode complète selon le cadre demandé, souvent GHG Protocol ou norme dédiée.",
    certifScope:
      "Approche spend-based indicative, adaptée aux demandes documentaires simples.",
  },
  {
    criterion: "Données nécessaires",
    full: "Données d’activité détaillées, factures, énergie, achats, déplacements et périmètres.",
    certifScope:
      "Informations fournies par l’utilisateur, principalement pour une estimation agrégée.",
  },
  {
    criterion: "Temps de production",
    full: "Souvent plusieurs jours ou semaines selon la collecte.",
    certifScope: "Quelques minutes si les informations nécessaires sont prêtes.",
  },
  {
    criterion: "Coût",
    full: "Variable selon cabinet, périmètre, accompagnement et vérification.",
    certifScope: "Prix fixe 89 €, sans abonnement.",
  },
  {
    criterion: "Audit / accompagnement",
    full: "Peut inclure conseil, analyse, plan d’action et vérification.",
    certifScope: "Pas d’audit, pas d’accompagnement, pas de vérification externe.",
  },
  {
    criterion: "Usage recommandé",
    full: "Inventaire GES, stratégie climat, méthode imposée, reporting ou audit.",
    certifScope:
      "Dossier client, fournisseur, banque, assurance ou appel d’offres simple.",
  },
  {
    criterion: "Limites",
    full: "Plus lourd, plus long et plus coûteux, mais plus robuste pour les exigences formelles.",
    certifScope:
      "Indicatif, non audité, non réglementaire, non CSRD/ESRS.",
  },
  {
    criterion: "Cas où choisir cette option",
    full: "Si l’entreprise doit faire un inventaire GES détaillé, structurer une stratégie climat ou suivre une méthode imposée.",
    certifScope:
      "Si l’entreprise doit fournir rapidement un document carbone simple, standardisé, indicatif et vérifiable.",
  },
];

const faq = [
  {
    q: "Une attestation CO₂e est-elle un bilan carbone ?",
    a: "Non. Une attestation CO₂e indicative n’est pas un bilan carbone complet. Elle fournit une réponse documentaire limitée, avec méthode déclarée et limites visibles.",
  },
  {
    q: "Quand choisir Certif-Scope ?",
    a: "Certif-Scope est adapté lorsqu’une PME doit fournir rapidement un document carbone simple, standardisé, indicatif et vérifiable, sans méthode obligatoire imposée.",
  },
  {
    q: "Quand faut-il faire un vrai bilan carbone ?",
    a: "Il faut choisir un bilan complet lorsqu’un inventaire GES détaillé, une stratégie climat, une norme, une vérification externe ou un reporting formel est demandé.",
  },
  {
    q: "Est-ce compatible avec une demande client simple ?",
    a: "Oui, si le client demande une information documentaire simple et n’impose pas une méthode précise. L’acceptation reste toujours à la discrétion du client.",
  },
  {
    q: "Est-ce un document CSRD ou ESRS ?",
    a: "Non. L’attestation Certif-Scope est non réglementaire, non CSRD/ESRS et ne remplace pas les obligations de reporting applicables.",
  },
];

export default function DifferenceBilanCarboneAttestationCO2ePage() {
  return (
    <BusinessUseCasePage
      pageUrl={pageUrl}
      breadcrumbName="Différence bilan carbone et attestation CO₂e"
      serviceName="Attestation CO₂e indicative Certif-Scope"
      serviceDescription="Document CO₂e indicatif pour répondre à une demande carbone simple lorsqu’un bilan carbone complet n’est pas imposé."
      eyebrow="Comparatif · Avant achat · CO₂e"
      h1="Différence entre bilan carbone complet et attestation CO₂e indicative"
      intro="Un bilan carbone complet et une attestation CO₂e indicative ne répondent pas au même besoin. Cette page clarifie la différence avant achat."
      context="Le bilan complet est adapté aux inventaires détaillés, aux stratégies climat et aux méthodes imposées. Certif-Scope est adapté lorsqu’il faut fournir rapidement un document carbone simple, standardisé, indicatif et vérifiable."
      concerns={concerns}
      provides={provides}
      notAdapted={notAdapted}
      formulation="Vous trouverez ci-joint une attestation CO₂e indicative établie selon une méthode spend-based, avec résultat agrégé, limites visibles et identifiant de vérification."
      faq={faq}
      comparisonRows={comparisonRows}
      relatedLinks={[
        {
          href: "/fr/bilan-carbone-pme/",
          title: "Bilan carbone PME",
          text: "Comprendre les demandes carbone les plus fréquentes côté PME.",
        },
        {
          href: "/fr/attestation-co2-pme/",
          title: "Attestation CO₂e PME",
          text: "Voir le fonctionnement d’une attestation indicative.",
        },
        {
          href: "/fr/verify/demo/",
          title: "Démo de vérification",
          text: "Voir ce qu’un destinataire peut vérifier.",
        },
      ]}
    />
  );
}
