import type { Metadata } from "next";

import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Differentiation from "@/components/Differentiation";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

/* ======================================================
   SEO / IA — META DEFINITIFS (HOME GELÉE V1)
====================================================== */
export const metadata: Metadata = {
  title: "Indicative Spend-Based CO₂e Attestation for SMEs | Certif-Scope",
  description:
    "Generate an indicative, spend-based CO₂e attestation used for procurement, banking and ESG screening. Standardized format, independently verifiable. Not a CSRD/ESRS report or an audited emissions inventory.",
  alternates: {
    canonical: "https://certif-scope.com/",
    languages: {
      en: "https://certif-scope.com/",
      fr: "https://certif-scope.com/fr/",
      de: "https://certif-scope.com/de/",
    },
  },
  openGraph: {
    type: "website",
    title: "Indicative Spend-Based CO₂e Attestation for SMEs | Certif-Scope",
    description:
      "Indicative spend-based CO₂e attestation for procurement, banking and ESG screening. Standardized, independently verifiable. Not a regulatory report.",
    url: "https://certif-scope.com/",
    siteName: "Certif-Scope",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />

      <main id="main-content" role="main">
        <Hero />
        <ProblemSolution />
        <Differentiation />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
    </>
  );
}
