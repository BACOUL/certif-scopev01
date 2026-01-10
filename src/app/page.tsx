import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ProblemSolution from "@/components/ProblemSolution";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Differentiation from "@/components/Differentiation";
import HowItWorks from "@/components/HowItWorks";
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
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
      }
