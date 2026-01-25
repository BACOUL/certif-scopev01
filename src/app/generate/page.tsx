import type { Metadata } from "next";
import AssessmentForm from "@/components/AssessmentForm";

/* ======================================================
   SEO METADATA — GENERATE PAGE
====================================================== */

export const metadata: Metadata = {
  title: "Generate a CO₂e Attestation — Certif-Scope",
  description:
    "Generate an indicative, spend-based CO₂e attestation in minutes. Local calculation, no data storage, and independent verification included.",
  alternates: {
    canonical: "https://www.certif-scope.com/generate",
  },
  openGraph: {
    title: "Generate a CO₂e Attestation — Certif-Scope",
    description:
      "Generate an indicative, spend-based CO₂e attestation with independent verification. No audit. No regulatory reporting.",
    url: "https://www.certif-scope.com/generate",
    siteName: "Certif-Scope",
    type: "website",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function GeneratePage() {
  return (
    <>
      {/* JSON-LD — WebPage (NOT Product) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Generate a CO₂e Attestation",
            url: "https://www.certif-scope.com/generate",
            description:
              "Online tool to generate an indicative, spend-based CO₂e attestation with independent verification.",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
          }),
        }}
      />

      <AssessmentForm />
    </>
  );
}
