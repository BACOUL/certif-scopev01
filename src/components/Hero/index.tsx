"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      itemScope
      itemType="https://schema.org/WebPage"
      className="relative max-w-6xl mx-auto px-6 pt-8 md:pt-14 pb-14 md:pb-20 text-center"
    >
      <span className="sr-only" itemProp="alternativeHeadline">
        Standardized and verifiable CO₂e attestation for SMEs
      </span>

      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F3FBFC] -z-10" />

      {/* SURTITRE */}
      <p
        className="text-xs md:text-sm font-semibold tracking-wide text-[#0B3A63]/70 mb-3 uppercase"
        itemProp="about"
      >
        Standardized and verifiable CO₂e attestations
      </p>

      {/* TITRE (H1) */}
      <h1
        itemProp="headline"
        className="text-[1.9rem] md:text-[3rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight"
      >
        A CO₂e attestation for SMEs
        <br />
        <span className="text-[#1FB6C1]">
          standardized and independently verifiable
        </span>
      </h1>

      {/* DESCRIPTION PRINCIPALE */}
      <p
        className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-4 leading-relaxed"
        itemProp="description"
      >
        Respond to supplier requests, tenders and requests from banks and insurers
        with a clear, standardized CO₂e document — without carrying out a full
        carbon audit.
      </p>

      {/* LEGAL NOTICE */}
      <div className="mt-4 max-w-xl mx-auto space-y-1">
        <p className="text-xs text-slate-500 leading-relaxed">
          Based on recognized frameworks (GHG Protocol, ISO 14064-1) and used in
          European procurement, banking and insurance practices.
        </p>

        {/* PRIVACY / TRUST */}
        <p className="text-xs text-slate-500 italic flex items-center justify-center gap-1">
          <span aria-hidden>🔒</span>
          Calculations run locally in your browser. No financial input data is stored.
        </p>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-6 md:mt-7">
        <Link
          href="/generate"
          aria-label="Generate CO₂e Attestation"
          className="bg-[#1FB6C1] hover:bg-[#17a2a8] text-white font-semibold px-12 py-4 rounded-xl shadow-md transition"
        >
          Generate attestation
        </Link>
      </div>

      {/* IMAGE */}
      <div className="flex justify-center mt-7 md:mt-8">
        <Image
          itemProp="primaryImageOfPage"
          src="/hero-attestation.webp"
          alt="Example of a standardized CO₂e attestation generated for a small or medium-sized enterprise, including independent verification details."
          width={900}
          height={600}
          priority
          className="w-full max-w-xs sm:max-w-sm md:max-w-xl rounded-2xl shadow-lg border border-slate-100"
        />
      </div>

      {/* TRUST LINE */}
      <p className="text-sm text-[#0B3A63]/80 font-medium mt-6">
        Independently verifiable by any third party.
      </p>
    </section>
  );
}
