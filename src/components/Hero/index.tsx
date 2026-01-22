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

      {/* SUBTITLE */}
      <p
        className="text-xs md:text-sm font-semibold tracking-wide text-[#0B3A63]/70 mb-3 uppercase"
        itemProp="about"
        data-i18n="hero.subtitle"
      >
        Instant, verifiable CO₂e attestations
      </p>

      {/* H1 */}
      <h1
        itemProp="headline"
        data-i18n="hero.title"
        className="text-[1.9rem] md:text-[3rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight"
      >
        Instant spend-based CO₂e attestation for SMEs.
        <br />
        <span className="text-[#1FB6C1]">
          Standardized and independently verifiable.
        </span>
      </h1>

      {/* LEGAL + PRIVACY */}
      <div className="mt-4 max-w-xl mx-auto space-y-1">
        <p
          className="text-xs text-slate-500 leading-relaxed"
          data-i18n="hero.legal"
        >
          Indicative spend-based estimate. Not a CSRD/ESRS report or an audited
          emissions inventory.
        </p>

        <p
          className="text-xs text-slate-500 italic flex items-center justify-center gap-1"
          data-i18n="hero.privacy"
        >
          <span aria-hidden>🔒</span>
          Calculations are performed locally in your browser. No financial input
          data is stored.
        </p>
      </div>

      {/* DESCRIPTION */}
      <p
        itemProp="description"
        data-i18n="hero.description"
        className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-5 leading-relaxed"
      >
        Generate a standardized CO₂e attestation used in procurement, banking and
        insurer screening workflows. Fast, verifiable and consistent across the EU.
      </p>

      {/* PRIMARY CTA — UNIQUE */}
      <div className="flex justify-center mt-8">
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

      {/* IMAGE */}
      <div className="flex justify-center mt-8">
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

      {/* TRUST LINE */}
      <p
        className="text-sm text-[#0B3A63]/80 font-medium mt-6"
        data-i18n="hero.verify"
      >
        Verifiable independently by third parties.
      </p>
    </section>
  );
}
