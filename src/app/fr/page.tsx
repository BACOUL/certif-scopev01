// PATH: src/app/fr/page.tsx

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
import FAQFR from "@/components/fr/FAQ";

/* ======================================================
   SEO / IA — META FR (HOME)
   Objectif : capter “bilan carbone entreprise / PME” sans mentir.
   Positionnement : indicateur CO₂e indicatif (spend-based) + attestation vérifiable.
====================================================== */

export const metadata: Metadata = {
  title: "Bilan carbone entreprise (PME) : attestation CO₂e indicative | Certif-Scope",
  description:
    "Bilan carbone entreprise / PME : obtenez un indicateur CO₂e indicatif (spend-based : dépenses × facteurs d’émission) avec une attestation standardisée et vérifiable. Utile pour appels d’offres, fournisseurs, banques, assurances et screening ESG. Ce document n’est ni un bilan carbone complet, ni un audit, ni un reporting CSRD/ESRS.",
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
  ],
  alternates: {
    canonical: "https://www.certif-scope.com/fr/",
    languages: {
      en: "https://www.certif-scope.com/",
      fr: "https://www.certif-scope.com/fr/",
      de: "https://www.certif-scope.com/de/",
    },
  },
  openGraph: {
    type: "website",
    title: "Bilan carbone entreprise (PME) : attestation CO₂e indicative | Certif-Scope",
    description:
      "Indicateur CO₂e indicatif (spend-based) + attestation standardisée et vérifiable. Utile pour appels d’offres, fournisseurs, banques, assurances et screening ESG. Non audit, non CSRD/ESRS.",
    url: "https://www.certif-scope.com/fr/",
    siteName: "Certif-Scope",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilan carbone entreprise (PME) : attestation CO₂e indicative | Certif-Scope",
    description:
      "Indicateur CO₂e indicatif (spend-based) + attestation vérifiable pour appels d’offres, fournisseurs, banques et screening ESG. Non audit, non CSRD/ESRS.",
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
        <FAQFR />
      </main>
    </>
  );
}
