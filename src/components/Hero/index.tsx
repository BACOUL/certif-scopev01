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
        Instant CO2e Certificate for SMEs across Europe
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
        Instant CO₂e Attestation for SMEs.
        <br />
        <span className="text-[#1FB6C1]">Verified and accepted across Europe.</span>
      </h1>

      <p
        itemProp="description"
        data-i18n="hero.description"
        className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-6 leading-relaxed"
      >
        Generate a standardized, spend-based CO₂e attestation used in procurement,
        banking and insurer workflows. Fast, verifiable and consistent across the EU.
      </p>

      <div className="flex justify-center mt-6">
        <Image
          itemProp="primaryImageOfPage"
          src="/hero-attestation.webp"
          alt="Preview of the standardized CO₂e Attestation issued by Certif-Scope for SMEs, including built-in verification information."
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

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">

        <Link
          href="/pricing"
          itemProp="url"
          aria-label="Generate CO₂e Attestation"
          data-i18n="hero.cta.generate"
          className="bg-[#1FB6C1] hover:bg-[#17a2a8] text-white font-semibold px-12 py-4 rounded-xl shadow-md text-center transition"
        >
          Generate Attestation
        </Link>

        <Link
          href="/sample.pdf"
          itemProp="url"
          aria-label="View Sample CO₂e PDF"
          data-i18n="hero.cta.sample"
          className="bg-white border border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white text-[#0B3A63] font-semibold px-12 py-4 rounded-xl shadow-md text-center transition"
        >
          View Sample PDF
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Certif-Scope — Instant CO2e Attestation",
            description: "Instant spend-based CO2e attestation for SMEs across Europe.",
            image: "https://certif-scope.com/hero-attestation.webp",
            url: "https://certif-scope.com/",
            mainEntity: {
              "@type": "Product",
              name: "CO₂e Attestation",
              description:
                "Standardized spend-based CO₂e attestation including built-in verification information.",
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
