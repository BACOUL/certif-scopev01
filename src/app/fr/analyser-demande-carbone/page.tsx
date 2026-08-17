import type { Metadata } from "next";

import RequestAnalyzer from "@/components/fr/RequestAnalyzer";

const pageUrl = "https://www.certif-scope.com/fr/analyser-demande-carbone/";

export const metadata: Metadata = {
  title: "Demande de bilan carbone client : vérifiez quoi fournir",
  description:
    "Collez la demande carbone reçue d’un client ou d’un appel d’offres. Vérifiez gratuitement si une attestation CO₂e indicative peut suffire ou si un bilan complet est nécessaire.",
  alternates: {
    canonical: pageUrl,
    languages: {
      fr: pageUrl,
      "x-default": pageUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Demande de bilan carbone client : vérifiez quoi fournir",
    description:
      "Analysez gratuitement le texte reçu et vérifiez si une attestation CO₂e indicative semble adaptée.",
    url: pageUrl,
    siteName: "Certif-Scope",
    locale: "fr_FR",
  },
};

export default function AnalyzeCarbonRequestPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Analyse d’une demande carbone Certif-Scope",
    url: pageUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Navigateur web",
    inLanguage: "fr-FR",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    description:
      "Outil gratuit d’orientation qui analyse localement le texte d’une demande carbone et indique le niveau de document attendu.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RequestAnalyzer />
    </>
  );
}
