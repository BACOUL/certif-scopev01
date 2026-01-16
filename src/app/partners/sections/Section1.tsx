"use client";

export default function Section1() {
  return (
    <section
      id="partner-access-overview"
      data-section="partner-access-overview"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 via-[#1FB6C1]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="partners.s1.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">1.</span>
          Partner Access Overview
        </h2>

        <p
          data-i18n="partners.s1.paragraph1"
          className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          Certif-Scope Partner Access is a controlled access model designed for organizations
          that need to request, generate or distribute standardized CO₂e attestations at scale.
          It is intended for institutional workflows where a consistent environmental document
          is required from third parties.
        </p>

        <p
          data-i18n="partners.s1.paragraph2"
          className="text-md text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          Partner Access does not provide ESG software, data platforms or reporting tools.
          It delivers a simple and verifiable attestation format that can be integrated into
          procurement, compliance or risk processes without changing existing systems.
        </p>
      </div>

      {/* 3-PILLAR GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

        {/* PILLAR 1 */}
        <div
          data-i18n="partners.s1.card1.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#1FB6C1]/40 transition-all duration-300"
        >
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">01</div>
          <h3
            data-i18n="partners.s1.card1.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Institutional Use Case
          </h3>
          <p
            data-i18n="partners.s1.card1.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Partner Access is built for banks, insurers, large corporations and procurement
            teams that require standardized CO₂e documentation from suppliers, clients or SMEs
            as part of their operational or compliance workflows.
          </p>
        </div>

        {/* PILLAR 2 */}
        <div
          data-i18n="partners.s1.card2.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/30 shadow-md hover:shadow-lg hover:border-[#1FB6C1]/50 transition-all duration-300"
        >
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">02</div>
          <h3
            data-i18n="partners.s1.card2.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Standardized Output
          </h3>
          <p
            data-i18n="partners.s1.card2.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            All attestations generated through Partner Access follow the same fixed structure,
            methodology and verification format, ensuring consistency across all third-party
            submissions and reducing review friction.
          </p>
        </div>

        {/* PILLAR 3 */}
        <div
          data-i18n="partners.s1.card3.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#1FB6C1]/40 transition-all duration-300"
        >
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">03</div>
          <h3
            data-i18n="partners.s1.card3.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Clear Scope & Limits
          </h3>
          <p
            data-i18n="partners.s1.card3.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Partner Access provides indicative, spend-based CO₂e attestations only.
            It does not perform audits, store ESG data, or replace regulatory reporting
            obligations such as CSRD or ISO-based inventories.
          </p>
        </div>

      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="partners.s1.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
}
