"use client";

export default function Section1() {
  return (
    <section
      id="partner-overview"
      data-section="partner-overview"
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
          Partner Access Overview
        </h2>

        <p
          data-i18n="s1.paragraph1"
          className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          Certif-Scope Partner Access allows professionals to generate standardized CO₂e
          Attestations on behalf of third parties. It is designed for organizations that
          must repeatedly provide environmental documentation to clients, suppliers or SMEs,
          without deploying ESG software or running full carbon audits.
        </p>

        <p
          data-i18n="s1.paragraph2"
          className="text-md text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          Partner Access relies on the same deterministic methodology as individual use,
          but enables prepaid, repeatable generation using a secure partner key.
          All attestations remain verification-ready, institution-friendly and reproducible,
          with no long-term data storage.
        </p>
      </div>

      {/* 3-PILLAR GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

        {/* PILLAR 1 */}
        <div
          data-i18n="s1.card1.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#1FB6C1]/40 transition-all duration-300"
        >
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">01</div>
          <h3
            data-i18n="s1.card1.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Third-Party Generation
          </h3>
          <p
            data-i18n="s1.card1.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Generate CO₂e Attestations for clients, suppliers or SMEs using a single
            partner access, without managing individual user accounts or dashboards.
          </p>
        </div>

        {/* PILLAR 2 */}
        <div
          data-i18n="s1.card2.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/30 shadow-md hover:shadow-lg hover:border-[#1FB6C1]/50 transition-all duration-300"
        >
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">02</div>
          <h3
            data-i18n="s1.card2.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Prepaid & Controlled Usage
          </h3>
          <p
            data-i18n="s1.card2.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Partner Access operates with prepaid packs and a secure key.
            No subscription, no automatic billing, and full control over usage volume.
          </p>
        </div>

        {/* PILLAR 3 */}
        <div
          data-i18n="s1.card3.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#1FB6C1]/40 transition-all duration-300"
        >
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">03</div>
          <h3
            data-i18n="s1.card3.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Verification-Ready Output
          </h3>
          <p
            data-i18n="s1.card3.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Each generated PDF includes a deterministic verification ID and integrity metadata,
            allowing independent verification by banks, procurement teams or auditors.
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
