"use client";
import Image from "next/image";

export default function AttestationPreview() {
  return (
    <section
      id="attestation-preview"
      data-section="attestation-preview"
      className="py-24 bg-[#F8FAFC] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* SECTION LABEL */}
        <p
          data-i18n="preview.label"
          className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-3"
        >
          CO₂e Attestation Preview — Standardized • Spend-Based • Verifiable
        </p>

        <div className="w-16 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mb-8" />

        {/* TITLE */}
        <h2
          data-i18n="preview.title"
          className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] dark:text-gray-100 leading-tight mb-6"
        >
          Official CO₂e Attestation Preview
        </h2>

        {/* DESCRIPTION */}
        <p
          data-i18n="preview.description"
          className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-16"
        >
          This is the exact standardized layout produced by Certif-Scope. It includes total CO₂e,
          category overview and built-in verification information in a clean, review-ready format.
          Designed for procurement, banking and ESG screening workflows across Europe.
        </p>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[600px]">
            <Image
              src="/preview.webp"
              alt="Preview of the standardized Certif-Scope CO₂e Attestation showing total CO₂e, category overview and verification information"
              width={1200}
              height={800}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 600px"
              className="rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
            />
          </div>
        </div>

        {/* CTA + INTERNAL LINK + DISCLAIMER */}
        <div className="mt-12 flex flex-col items-center">

          {/* CTA DOWNLOAD */}
          <a
            data-i18n="preview.cta"
            href="/sample.pdf"
            className="px-10 py-4 rounded-xl bg-[#0B3A63] text-white font-semibold text-sm md:text-base hover:bg-[#083253] transition shadow-md"
          >
            Download Sample PDF
          </a>

          {/* INTERNAL NAVIGATION LINK */}
          <a
            href="/product"
            data-i18n="preview.methodologyLink"
            className="mt-3 text-sm text-[#0B3A63] dark:text-gray-300 underline hover:text-[#1FB6C1]"
          >
            See full methodology →
          </a>

          {/* DISCLAIMER */}
          <p
            data-i18n="preview.disclaimer"
            className="mt-4 text-xs text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed"
          >
            Indicative spend-based estimate. Not a CSRD/ESRS report or audited emissions inventory.
          </p>

        </div>

      </div>
    </section>
  );
}
