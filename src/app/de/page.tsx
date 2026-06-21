import type { Metadata } from "next";

import ScrollUp from "@/components/Common/ScrollUp";

import {
  DifferentiationDE,
  FAQDE,
  FeaturesDE,
  HeroDE,
  HowItWorksDE,
  OfficialReferencesDE,
  PricingDE,
  ProblemSolutionDE,
  RecipientViewDE,
  TestimonialsDE,
  UseCaseDecisionTableDE,
} from "./_components/HomeSections";

export const metadata: Metadata = {
  title:
    "CO2-Bilanz KMU: indikative CO2e-Bescheinigung | Certif-Scope Deutschland",
  description:
    "CO2-Bilanz für KMU in Deutschland: Erstellen Sie eine indikative CO2e-Bescheinigung auf spend-based Grundlage. Standardisiertes PDF für einfache Kunden-, Lieferanten-, Bank-, Versicherungs- und Ausschreibungsanfragen. Kein umfassendes THG-Inventar und kein CSRD-/ESRS-Bericht.",
  keywords: [
    "CO2-Bilanz KMU",
    "CO2e-Bescheinigung",
    "CO2-Bescheinigung KMU",
    "CO2-Nachweis Lieferanten",
    "CO2-Angaben Ausschreibung",
    "ESG Unterlagen Bank KMU",
    "spend-based CO2e",
    "CO2-Dokument Lieferanten",
    "VSME KMU",
    "GHG Protocol spend-based",
  ],
  alternates: {
    canonical: "https://www.certif-scope.com/de/",
    languages: {
      de: "https://www.certif-scope.com/de/",
    },
  },
  openGraph: {
    type: "website",
    title:
      "CO2-Bilanz KMU: indikative CO2e-Bescheinigung | Certif-Scope Deutschland",
    description:
      "Indikative CO2e-Bescheinigung auf spend-based Grundlage: standardisiertes PDF für einfache dokumentarische Anfragen von Kunden, Lieferanten, Banken, Versicherungen und Ausschreibungen.",
    url: "https://www.certif-scope.com/de/",
    siteName: "Certif-Scope",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "CO2-Bilanz KMU: indikative CO2e-Bescheinigung | Certif-Scope Deutschland",
    description:
      "Spend-based CO2e-Schätzung + standardisiertes PDF für einfache dokumentarische Anfragen.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomeDE() {
  const pageUrl = "https://www.certif-scope.com/de/";

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
    inLanguage: "de-DE",
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO2-Bilanz KMU: indikative CO2e-Bescheinigung | Certif-Scope Deutschland",
    url: pageUrl,
    description:
      "Startseite Deutschland: indikative CO2e-Schätzung auf spend-based Grundlage mit standardisiertem PDF für einfache Kunden-, Lieferanten-, Bank-, Versicherungs- und Ausschreibungsanfragen. Kein umfassendes THG-Inventar und kein CSRD-/ESRS-Bericht.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    inLanguage: "de-DE",
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

        {/* 1) Hero */}
        <HeroDE />

        {/* 2) Est-ce adapte a votre demande */}
        <UseCaseDecisionTableDE />

        {/* 3) Probleme / besoin reel */}
        <ProblemSolutionDE />

        {/* 4) Differenciation / pourquoi cette reponse */}
        <DifferentiationDE />

        {/* 5) Produit / document concret */}
        <FeaturesDE />

        {/* 6) Ce que le destinataire verra */}
        <RecipientViewDE />

        {/* 7) References officielles / legitimation de la methode */}
        <OfficialReferencesDE />

        {/* 8) Comment ca marche */}
        <HowItWorksDE />

        {/* 9) Cas d'usage terrain */}
        <TestimonialsDE />

        {/* 10) Pricing */}
        <PricingDE />

        {/* 11) FAQ */}
        <FAQDE />
      </main>
    </>
  );
}
