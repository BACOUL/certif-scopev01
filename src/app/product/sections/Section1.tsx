"use client";

export default function Section1() {
  return (
    <section
      id="product-overview"
      data-section="product-overview"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 via-[#1FB6C1]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="s1.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">1.</span>
          Product Overview
        </h2>

        <p
          data-i18n="s1.paragraph1"
          className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          Certif-Scope generates a standardized CO₂e Attestation based exclusively on annual 
          spending (€). It is designed for SMEs that receive CO₂-related requests from clients, 
          procurement teams, banks or insurers, but do not have the resources for CSRD/ESRS, 
          greenhouse gas audits, or physical activity data tracking.
        </p>

        <p
          data-i18n="s1.paragraph2"
          className="text-md text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          The attestation is formatted for institutional workflows. It includes a clear summary, 
          category segmentation and a deterministic verification ID based on a cryptographic hash. 
          This allows partners to verify authenticity instantly — with or without internet access — 
          and without requiring stored data or backend lookups.
        </p>
      </div>

      {/* 3-PILLAR GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div
          data-i18n="s1.card1.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#1FB6C1]/40 transition-all duration-300"
        >
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">01</div>
          <h3
            data-i18n="s1.card1.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Structured Output
          </h3>
          <p
            data-i18n="s1.card1.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Fixed layout, institution-friendly formatting, and consistent indicators. Ideal for 
            procurement teams and risk assessors evaluating suppliers.
          </p>
        </div>

        <div
          data-i18n="s1.card2.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/30 shadow-md hover:shadow-lg hover:border-[#1FB6C1]/50 transition-all duration-300"
        >
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">02</div>
          <h3
            data-i18n="s1.card2.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Instant Calculation
          </h3>
          <p
            data-i18n="s1.card2.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Deterministic spend-based computation inspired by GHG Protocol Scope 3 Category 1. 
            No consultants, no operational data needed. Result in under a minute.
          </p>
        </div>

        <div
          data-i18n="s1.card3.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#1FB6C1]/40 transition-all duration-300"
        >
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">03</div>
          <h3
            data-i18n="s1.card3.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Verifiable Authenticity
          </h3>
          <p
            data-i18n="s1.card3.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            A cryptographic hash and verification ID allow independent validation. 
            Institutions can recompute integrity offline without relying on a central database.
          </p>
        </div>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s1.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
}
