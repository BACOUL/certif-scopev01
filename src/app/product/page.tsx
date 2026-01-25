import type { Metadata } from "next";

import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";

/* ======================================================
   SEO METADATA — PRODUCT PAGE (CANONICAL)
====================================================== */

export const metadata: Metadata = {
  title: "CO₂e Attestation Product — Certif-Scope",
  description:
    "Discover the Certif-Scope CO₂e Attestation: a standardized, spend-based carbon estimate designed for procurement, banking and insurer verification workflows.",
  alternates: {
    canonical: "https://www.certif-scope.com/product",
  },
  openGraph: {
    title: "CO₂e Attestation Product — Certif-Scope",
    description:
      "A standardized, verification-ready CO₂e attestation based on annual spending. Designed for institutional and procurement use cases.",
    url: "https://www.certif-scope.com/product",
    siteName: "Certif-Scope",
    type: "website",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function ProductPage() {
  return (
    <section
      id="product"
      data-section="product"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — PRODUCT (STRICT, CANONICAL) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Certif-Scope CO₂e Attestation",
            description:
              "A standardized, spend-based CO₂e attestation designed for verification in procurement, banking and insurer workflows.",
            brand: {
              "@type": "Organization",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
              price: "89",
              availability: "https://schema.org/InStock",
              url: "https://www.certif-scope.com/pricing",
            },
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* CANONICAL PAGE HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          CO₂e Attestation — Product
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Full Product Overview
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          A structured, standardized and verification-ready overview of the CO₂e
          Attestation, including benefits, use cases, verification mechanisms and
          clearly defined limitations.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* TABLE OF CONTENTS */}
      <nav
        aria-label="Product sections"
        className="mb-16 max-w-4xl p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium">
          <li><a href="#product-overview">1. Product Overview</a></li>
          <li><a href="#key-benefits">2. Key Benefits Summary</a></li>
          <li><a href="#why-the-product-exists">3. Why the Product Exists</a></li>
          <li><a href="#attestation-pdf-contents">4. What’s Included in the PDF</a></li>
          <li><a href="#verification-and-integrity">5. Verification & Integrity</a></li>
          <li><a href="#usage-scenarios">6. Usage Scenarios</a></li>
          <li><a href="#limitations-and-fit">7. Limitations & Fit</a></li>
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
      </div>
    </section>
  );
              }
