// PATH: src/app/fr/page.tsx

import type { Metadata } from "next";

import ScrollUp from "@/components/Common/ScrollUp";
import { EU_HOME_ALTERNATES } from "@/lib/eu-locales-core";

import Homepage from "@/components/international/Homepage";

/* ======================================================
   SEO / IA — META FR (HOME)
   Objectif : capter “bilan carbone entreprise / PME” sans mentir.
   Positionnement : indicateur CO₂e indicatif (spend-based) + attestation vérifiable.
====================================================== */

export const metadata: Metadata = {
  title:
    "Données carbone fournisseur 2026 et attestation CO₂e | Certif-Scope",
  description:
    "Certif-Scope conserve son attestation CO₂e historique fondée sur les dépenses et prépare une fiche de données carbone fournisseur sur l’énergie et les émissions scopes 1 et 2. Nouvelle fiche non disponible à l’achat. Aucun document ne garantit à lui seul la conformité B3.",
  keywords: [
    "bilan carbone entreprise",
    "bilan carbone PME",
    "bilan carbone fournisseur",
    "bilan carbone appel d’offres",
    "preuve carbone entreprise",
    "attestation CO2",
    "attestation CO2e",
    "indicateur CO2e",
    "screening ESG fournisseur",
    "VSME PME",
    "GHG Protocol spend-based",
    "références carbone PME",
    "méthode spend-based carbone",
    "attestation carbone PME",
  ],
  alternates: {
    canonical: "https://www.certif-scope.com/fr/",
    languages: EU_HOME_ALTERNATES,
  },
  openGraph: {
    type: "website",
    title:
      "Données carbone fournisseur 2026 et attestation CO₂e | Certif-Scope",
    description:
      "Découvrir la future fiche de données carbone fournisseur (énergie, scopes 1 et 2) et l’attestation historique fondée sur les dépenses, avec leurs limites. Nouvelle fiche en préparation.",
    url: "https://www.certif-scope.com/fr/",
    siteName: "Certif-Scope",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Données carbone fournisseur 2026 et attestation CO₂e | Certif-Scope",
    description:
      "Ancienne attestation CO₂e fondée sur les dépenses et future fiche de données carbone fournisseur — information sur les limites et la réglementation volontaire 2026.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomeFR() {
  const pageUrl = "https://www.certif-scope.com/fr/";

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Certif-Scope",
    url: "https://www.certif-scope.com",
    logo: "https://www.certif-scope.com/assets/logo.png",
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Certif-Scope",
    url: "https://www.certif-scope.com",
    inLanguage: "fr-FR",
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Données carbone fournisseur 2026 et attestation CO₂e | Certif-Scope",
    url: pageUrl,
    description:
      "Accueil France : présentation de l’attestation CO₂e historique fondée sur les dépenses et de la future fiche de données carbone fournisseur. Informations sur la norme volontaire européenne 2026/1560. Nouvelle fiche non commercialisée et sans garantie de conformité réglementaire.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    inLanguage: "fr-FR",
  };

  return (
    <>
      <ScrollUp />

      <main id="main-content" role="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebSite),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebPage),
          }}
        />

        <Homepage locale="fr" />
      </main>
    </>
  );
}
