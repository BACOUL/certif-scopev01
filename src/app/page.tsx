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
  title: "Certif-Scope — Instant CO₂e Attestation for SMEs",
  description:
    "Generate a spend-based CO₂e attestation in under one minute. Standardized format accepted in procurement, banking, insurer and ESG screening workflows.",
  alternates: {
    canonical: "https://certif-scope.com/",
    languages: {
      "en": "https://certif-scope.com/",
      "fr": "https://certif-scope.com/fr/",
      "de": "https://certif-scope.com/de/",
    },
  },
  openGraph: {
    title: "Certif-Scope — Instant CO₂e Attestation",
    description:
      "Spend-based CO₂e attestation used across Europe. Standardized, verifiable and ready for procurement workflows.",
    url: "https://certif-scope.com/",
    siteName: "Certif-Scope",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "CO₂e Attestation Preview" }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certif-Scope — Instant CO₂e Attestation",
    description:
      "Generate a compliant, standardized CO₂e attestation instantly. Spend-based, verifiable, and ready for procurement workflows.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Certif-Scope",
            url: "https://certif-scope.com/",
            logo: "https://certif-scope.com/logo.png",
            description:
              "Spend-based CO₂e attestations used in procurement, banking and ESG workflows across Europe.",
            sameAs: [
              "https://www.linkedin.com",
              "https://twitter.com"
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "CO₂e Attestation",
            brand: "Certif-Scope",
            description:
              "Instantly generated CO₂e attestation based on annual spending (€). Includes verification ID and hash.",
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
              price: "49",
              url: "https://certif-scope.com/pricing",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

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
        <Pricing />
        <FAQ />
      </main>
    </>
  );
        }
