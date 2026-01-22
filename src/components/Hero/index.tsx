"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      itemScope
      itemType="https://schema.org/WebPage"
      className="relative max-w-6xl mx-auto px-6 pt-8 md:pt-14 pb-16 md:pb-20 text-center"
    >
      <span className="sr-only" itemProp="alternativeHeadline">
        Instant spend-based CO2e attestation for SMEs across Europe
      </span>

      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F3FBFC] -z-10" />

      <p
        className="text-xs md:text-sm font-semibold tracking-wide text-[#0B3A63]/70 mb-4 uppercase"
        itemProp="about"
        data-i18n="hero.subtitle"
      >
        Instant, verifiable CO₂e attestations
      </p>

      <h1
        itemProp="headline"
        data-i18n="hero.title"
        className="text-[2rem] md:text-[3rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight"
      >
        Instant spend-based CO₂e attestation for SMEs.
        <br />
        <span className="text-[#1FB6C1]">
          Standardized and independently verifiable.
        </span>
      </h1>

      <p
        className="text-sm text-slate-500 mt-3 max-w-xl mx-auto"
        data-i18n="hero.legal"
      >
        Indicative spend-based estimate. Not a CSRD/ESRS report or an audited
        emissions inventory.
      </p>

      <p
        className="text-sm text-slate-500 mt-1 max-w-xl mx-auto"
        data-i18n="hero.privacy"
      >
        Calculations are performed locally in your browser. No financial input
        data is stored.
      </p>

      <p
        itemProp="description"
        data-i18n="hero.description"
        className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-6 leading-relaxed"
      >
        Generate a standardized CO₂e attestation used in procurement, banking and
        insurer screening workflows. Fast, verifiable and consistent across the EU.
      </p>

      <div className="flex justify-center mt-6">
        <Image
          itemProp="primaryImageOfPage"
          src="/hero-attestation.webp"
          alt="Preview of a standardized spend-based CO₂e attestation issued by Certif-Scope, including independent verification information."
          width={900}
          height={600}
          priority
          className="w-full max-w-xs sm:max-w-sm md:max-w-xl rounded-2xl shadow-lg border border-slate-100"
        />
      </div>

      <p
        className="text-sm text-[#0B3A63]/80 font-medium mt-6"
        data-i18n="hero.verify"
      >
        Verifiable independently by third parties.
      </p>

      <div className="flex justify-center mt-12">
        <Link
          href="/generate"
          itemProp="url"
          aria-label="Generate CO₂e Attestation"
          data-i18n="hero.cta.generate"
          className="bg-[#1FB6C1] hover:bg-[#17a2a8] text-white font-semibold px-12 py-4 rounded-xl shadow-md text-center transition"
        >
          Generate Attestation
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Certif-Scope — Instant spend-based CO2e attestation",
            description:
              "Standardized indicative spend-based CO2e attestation for SMEs. Not a regulatory report or audited emissions inventory.",
            image: "https://certif-scope.com/hero-attestation.webp",
            url: "https://certif-scope.com/",
            mainEntity: {
              "@type": "Product",
              name: "CO₂e Attestation",
              description:
                "Standardized indicative spend-based CO₂e attestation. Not a regulatory report or audited emissions inventory.",
              offers: {
                "@type": "Offer",
                url: "https://certif-scope.com/pricing",
                priceCurrency: "EUR",
                price: "49",
                availability: "https://schema.org/InStock",
              },
            },
          }),
        }}
      />
    </section>
  );
              }
