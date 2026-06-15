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
  title: "Certif-Scope — version française prioritaire",
  description:
    "La version française de Certif-Scope est la version prioritaire du site.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/",
  },
  openGraph: {
    type: "website",
    title: "Certif-Scope — version française prioritaire",
    description:
      "La version française de Certif-Scope est la version prioritaire du site.",
    url: "https://www.certif-scope.com/fr/",
    siteName: "Certif-Scope",
    locale: "fr_FR",
  },
  robots: {
    index: false,
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
