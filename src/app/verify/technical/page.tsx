import type { Metadata } from "next";

import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";
import Section8 from "./sections/Section8";

/* ======================================================
   SEO METADATA — TECHNICAL VERIFICATION (CANONICAL)
====================================================== */

export const metadata: Metadata = {
  title: "Technical Verification — CO₂e Attestation | Certif-Scope",
  description:
    "Complete technical documentation explaining how to independently verify a Certif-Scope CO₂e attestation, including cryptographic validation and offline verification procedures.",
  alternates: {
    canonical: "https://www.certif-scope.com/verify/technical",
  },
  openGraph: {
    title: "Technical Verification — CO₂e Attestation | Certif-Scope",
    description:
      "Step-by-step technical documentation for developers and auditors to verify Certif-Scope CO₂e attestations independently and offline.",
    url: "https://www.certif-scope.com/verify/technical",
    siteName: "Certif-Scope",
    type: "website",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function VerifyTechnicalPage() {
  return (
    <section
      id="verify-technical"
      data-section="verify-technical"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — TECHNICAL WEBPAGE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Technical Verification of CO₂e Attestations",
            description:
              "Technical documentation for independently verifying the authenticity and integrity of Certif-Scope CO₂e attestations.",
            url: "https://www.certif-scope.com/verify/technical",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* CANONICAL PAGE HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          CO₂e Attestation — Technical Verification
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Technical Verification Guide
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          This page provides a complete, implementation-level explanation of how
          to technically verify a Certif-Scope CO₂e attestation. It is intended
          for developers, auditors, security teams and technical reviewers who
          require offline, independent and reproducible verification.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* TABLE OF CONTENTS */}
      <nav
        aria-label="Technical verification sections"
        className="mb-16 max-w-4xl p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium">
          <li><a href="#verification-model">1. Verification Model Overview</a></li>
          <li><a href="#cryptographic-foundations">2. Cryptographic Foundations</a></li>
          <li><a href="#signed-data-structure">3. Signed Data Structure</a></li>
          <li><a href="#public-key-and-trust">4. Public Key & Trust Model</a></li>
          <li><a href="#verification-scope">5. What Is Verified (and What Is Not)</a></li>
          <li><a href="#verification-workflows">6. Verification Workflows</a></li>
          <li>
            <a href="#step-by-step-verification">
              7. Step-by-Step Verification (CLI & Code)
            </a>
          </li>
          <li>
            <a href="#security-assumptions">
              8. Security Assumptions & Threat Model
            </a>
          </li>
        </ul>
      </nav>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-24">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </div>
    </section>
  );
}
