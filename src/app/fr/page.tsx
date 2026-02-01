import type { Metadata } from "next";

import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Differentiation from "@/components/Differentiation";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Trust from "@/components/Trust";
import AttestationPreview from "@/components/AttestationPreview";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

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
      "en": "https://certif-scope.com/",
      "fr": "https://certif-scope.com/fr/",
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
        <Hero />
        <ProblemSolution />
        <Differentiation />
        <HowItWorks />
        <Features />
        <Trust />
        <AttestationPreview />
        <Testimonials />
        <FAQ />
      </main>
    </>
  );
}
