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
    "Bilan carbone entreprise (PME) : attestation CO₂e indicative | Certif-Scope",
  description:
    "Bilan carbone entreprise / PME : obtenez un indicateur CO₂e indicatif (spend-based : dépenses × facteurs d’émission) avec une attestation standardisée et vérifiable. Utile pour appels d’offres, fournisseurs, banques, assurances et screening ESG. Méthode inspirée du GHG Protocol Scope 3 et références officielles VSME/EFRAG. Ce document n’est ni un bilan carbone complet, ni un audit, ni un reporting CSRD/ESRS.",
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
      "Bilan carbone entreprise (PME) : attestation CO₂e indicative | Certif-Scope",
    description:
      "Indicateur CO₂e indicatif (spend-based) + attestation standardisée et vérifiable. Utile pour appels d’offres, fournisseurs, banques, assurances et screening ESG. Références officielles VSME/EFRAG et GHG Protocol Scope 3.",
    url: "https://www.certif-scope.com/fr/",
    siteName: "Certif-Scope",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bilan carbone entreprise (PME) : attestation CO₂e indicative | Certif-Scope",
    description:
      "Indicateur CO₂e indicatif (spend-based) + attestation vérifiable pour appels d’offres, fournisseurs, banques et screening ESG. Méthode inspirée du GHG Protocol Scope 3.",
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
    name: "Bilan carbone entreprise (PME) : attestation CO₂e indicative | Certif-Scope",
    url: pageUrl,
    description:
      "Accueil France : indicateur CO₂e indicatif (spend-based) + attestation standardisée et vérifiable, pour screening appels d’offres, fournisseurs, banque et assurance. Méthode inspirée du GHG Protocol Scope 3, avec références officielles VSME/EFRAG. Non audit, non bilan GES réglementaire, non reporting CSRD/ESRS.",
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
