import type { Metadata } from "next";

import ScrollUp from "@/components/Common/ScrollUp";

// FR — composants définitifs
import HeroFR from "@/components/fr/Hero";
import ProblemSolutionFR from "@/components/fr/ProblemSolution";
import DifferentiationFR from "@/components/fr/Differentiation";
import HowItWorksFR from "@/components/fr/HowItWorks";
import FeaturesFR from "@/components/fr/Features";
import TrustFR from "@/components/fr/Trust";
import AttestationPreviewFR from "@/components/fr/AttestationPreview";
import TestimonialsFR from "@/components/fr/Testimonials";
import FAQ from "@/components/FAQ"; // OK en EN temporairement si pas encore traduit

/* ======================================================
   SEO / IA — META FR (HOME)
====================================================== */
export const metadata: Metadata = {
  title: "Attestation CO₂e pour PME | Certif-Scope",
  description:
    "Générez une attestation CO₂e indicative basée sur les dépenses, utilisée pour les appels d’offres, les banques et le screening ESG. Format standardisé, vérifiable indépendamment. Ce document n’est ni un rapport CSRD/ESRS ni un audit carbone.",
  alternates: {
    canonical: "https://certif-scope.com/fr/",
    languages: {
      en: "https://certif-scope.com/",
      fr: "https://certif-scope.com/fr/",
    },
  },
  openGraph: {
    type: "website",
    title: "Attestation CO₂e pour PME | Certif-Scope",
    description:
      "Attestation CO₂e indicative basée sur les dépenses, destinée aux appels d’offres, banques et analyses ESG. Format standardisé et vérifiable indépendamment. Non réglementaire.",
    url: "https://certif-scope.com/fr/",
    siteName: "Certif-Scope",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomeFR() {
  return (
    <>
      <ScrollUp />

      <main id="main-content" role="main">
        <HeroFR />
        <ProblemSolutionFR />
        <DifferentiationFR />
        <HowItWorksFR />
        <FeaturesFR />
        <TrustFR />
        <AttestationPreviewFR />
        <TestimonialsFR />
        <FAQ />
      </main>
    </>
  );
}
