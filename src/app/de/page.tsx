import type { Metadata } from "next";

import ScrollUp from "@/components/Common/ScrollUp";

// DE — composants définitifs
import HeroDE from "@/components/de/Hero";
import ProblemSolutionDE from "@/components/de/ProblemSolution";
import DifferentiationDE from "@/components/de/Differentiation";
import HowItWorksDE from "@/components/de/HowItWorks";
import FeaturesDE from "@/components/de/Features";
import TrustDE from "@/components/de/Trust";
import AttestationPreviewDE from "@/components/de/AttestationPreview";
import TestimonialsDE from "@/components/de/Testimonials";
import FAQDE from "@/components/de/FAQ";

/* ======================================================
   SEO / IA — META DE (HOME)
====================================================== */
export const metadata: Metadata = {
  title: "CO₂e-Nachweis für KMU | Certif-Scope",
  description:
    "Erstellen Sie einen indikativen, ausgabenbasierten CO₂e-Nachweis für Ausschreibungen, Banken und ESG-Screening. Standardisiertes Format, unabhängig überprüfbar. Kein CSRD-/ESRS-Bericht und kein CO₂-Audit.",
  alternates: {
    canonical: "https://www.certif-scope.com/de",
    languages: {
      en: "https://www.certif-scope.com",
      fr: "https://www.certif-scope.com/fr",
      de: "https://www.certif-scope.com/de",
    },
  },
  openGraph: {
    type: "website",
    title: "CO₂e-Nachweis für KMU | Certif-Scope",
    description:
      "Indikativer, ausgabenbasierter CO₂e-Nachweis für Ausschreibungen, Banken und ESG-Analysen. Standardisiert und unabhängig überprüfbar. Nicht regulatorisch.",
    url: "https://www.certif-scope.com/de",
    siteName: "Certif-Scope",
    locale: "de_DE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomeDE() {
  return (
    <>
      <ScrollUp />

      <main id="main-content" role="main">
        <HeroDE />
        <ProblemSolutionDE />
        <DifferentiationDE />
        <HowItWorksDE />
        <FeaturesDE />
        <TrustDE />
        <AttestationPreviewDE />
        <TestimonialsDE />
        <FAQDE />
      </main>
    </>
  );
}
