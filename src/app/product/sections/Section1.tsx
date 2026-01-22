"use client";

export default function Section1() {
  return (
    <section
      id="product-overview"
      data-section="product-overview"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK — CANONICAL PRODUCT INTRO (V1 LOCKED) */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 via-[#15B097]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* SECTION TITLE */}
        <h2
          data-i18n="product.section1.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">1.</span>
          Product Overview
        </h2>

        {/* LEAD — CANONICAL GREY LINE (HOME / LEGAL STYLE) */}
        <p
          data-i18n="product.section1.lead"
          className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl relative z-10"
        >
          A standardized, institution-ready CO₂e Attestation designed to respond
          to third-party environmental disclosure requests.
        </p>

        {/* WHAT THE PRODUCT IS */}
        <p
          data-i18n="product.section1.p1"
          className="mt-6 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10"
        >
          Certif-Scope provides a structured CO₂e Attestation intended for
          organizations required to communicate an environmental indicator to
          clients, procurement departments, financial institutions or public
          entities.
        </p>

        {/* WHO IT IS FOR */}
        <p
          data-i18n="product.section1.p2"
          className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10"
        >
          The product is designed for small and mid-sized organizations that do
          not operate full regulatory carbon reporting systems, but still need
          to answer standardized CO₂e information requests in professional or
          institutional contexts.
        </p>

        {/* WHAT IT DELIVERS */}
        <p
          data-i18n="product.section1.p3"
          className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10"
        >
          The outcome is a clear, consistent and shareable document presenting an
          aggregated CO₂e indicator in a fixed format, optimized for readability,
          review and reuse by third parties without additional explanation.
        </p>

        {/* POSITIONING & EXPLICIT NON-SCOPE */}
        <p
          data-i18n="product.section1.p4"
          className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10"
        >
          Certif-Scope is not a certification body and does not replace regulatory
          reporting, greenhouse gas audits or compliance frameworks. It delivers
          an indicative and standardized document addressing common disclosure
          needs while remaining lightweight, accessible and compatible with
          institutional review processes.
        </p>
      </div>

      {/* RETURN BUTTON — CANONICAL (CONSISTENT WITH ALL SECTIONS) */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="product.section1.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63]
                     text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
}
