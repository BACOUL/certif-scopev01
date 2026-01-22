"use client";

export default function Section1() {
  return (
    <section
      id="product-overview"
      data-section="product-overview"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK — CANONICAL PRODUCT INTRO */}
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

        {/* LEAD — GRAY EXPLANATORY LINE (HOME-CANON STYLE) */}
        <p
          data-i18n="product.section1.lead"
          className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl relative z-10"
        >
          A standardized, institution-ready CO₂e Attestation designed to answer
          third-party environmental disclosure requests.
        </p>

        {/* PARAGRAPH 1 — WHAT IT IS */}
        <p
          data-i18n="product.section1.p1"
          className="mt-6 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10"
        >
          Certif-Scope provides a standardized CO₂e Attestation intended for
          organizations that are asked to communicate an environmental indicator
          to clients, procurement departments, financial institutions or public
          bodies.
        </p>

        {/* PARAGRAPH 2 — WHO IT IS FOR */}
        <p
          data-i18n="product.section1.p2"
          className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10"
        >
          The product is specifically designed for small and mid-sized
          organizations that do not operate full regulatory carbon reporting
          frameworks, but still need to respond to standardized CO₂e information
          requests in professional or institutional contexts.
        </p>

        {/* PARAGRAPH 3 — WHAT IT DELIVERS */}
        <p
          data-i18n="product.section1.p3"
          className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10"
        >
          The result is a clear, structured and shareable document that presents
          an aggregated CO₂e indicator in a consistent format, designed to be
          readable, reviewable and usable by third parties without additional
          explanation.
        </p>

        {/* PARAGRAPH 4 — POSITIONING & NON-SCOPE */}
        <p
          data-i18n="product.section1.p4"
          className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10"
        >
          Certif-Scope is not a certification body and does not replace regulatory
          reporting, greenhouse gas audits or compliance frameworks. It provides
          an indicative, standardized document answering common disclosure needs
          while remaining accessible, lightweight and institution-compatible.
        </p>
      </div>
    </section>
  );
}
