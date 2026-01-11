import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Differentiation from "@/components/Differentiation";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Trust from "@/components/Trust";
import AttestationPreview from "@/components/AttestationPreview";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certif-Scope — Instant Certified CO₂ Attestation",
  description: "Generate compliant carbon attestation in seconds — GHG Protocol aligned.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <ProblemSolution />
      <Differentiation />
      <HowItWorks />
      <Features />
      <Trust />
      <AttestationPreview />
      <Testimonials />
      <Pricing />
      <FAQ />
    </>
  );
}
