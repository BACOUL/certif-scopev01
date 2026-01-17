"use client";

export default function Section6() {
  return (
    <section
      id="api-and-high-volume-access"
      data-section="api-and-high-volume-access"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK — muted institutional accent */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/15 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 via-[#64748B]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="partners.s6.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">6.</span>
          API & High-Volume Access (Coming Soon)
        </h2>

        <p
          data-i18n="partners.s6.intro"
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
        >
          Certif-Scope is designed to scale beyond individual or low-volume usage.
          A dedicated V2 model is planned for organizations requiring automated,
          high-volume issuance and verification of CO₂e Attestations.
        </p>
      </div>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

        {/* BLOCK 1 — TARGET USERS */}
        <div
          data-i18n="partners.s6.card1.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          <div className="text-[#64748B] text-4xl font-bold mb-3">01</div>
          <h3
            data-i18n="partners.s6.card1.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Institutional & Large-Scale Usage
          </h3>
          <p
            data-i18n="partners.s6.card1.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Designed for banks, insurers, large groups and procurement platforms
            managing hundreds or thousands of supplier or client attestations
            through automated workflows.
          </p>
        </div>

        {/* BLOCK 2 — TECHNICAL MODEL (V2 ONLY) */}
        <div
          data-i18n="partners.s6.card2.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#64748B]/30 shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="text-[#64748B] text-4xl font-bold mb-3">02</div>
          <h3
            data-i18n="partners.s6.card2.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Cryptographic & API Model (V2)
          </h3>
          <p
            data-i18n="partners.s6.card2.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            V2 will introduce an API-based model using a dedicated private issuance
            key and a publicly available verification key. Attestations will rely
            on an internal SHA-256 integrity mechanism to guarantee immutability
            and independent verification at scale.
          </p>
        </div>

        {/* BLOCK 3 — CLEAR V1 / V2 SEPARATION */}
        <div
          data-i18n="partners.s6.card3.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          <div className="text-[#64748B] text-4xl font-bold mb-3">03</div>
          <h3
            data-i18n="partners.s6.card3.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Not Required for V1
          </h3>
          <p
            data-i18n="partners.s6.card3.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            These mechanisms are not active in V1 and are not required for standard
            users or SMEs. The current V1 model remains ID-based, human-readable
            and intentionally non-technical.
          </p>
        </div>

      </div>

      {/* ROADMAP & BOUNDARIES */}
      <div
        data-i18n="partners.s6.roadmap.block"
        className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md"
      >
        <h3
          data-i18n="partners.s6.roadmap.title"
          className="text-xl font-bold text-[#0B3A63] mb-4"
        >
          Roadmap Transparency & Scope
        </h3>

        <p
          data-i18n="partners.s6.roadmap.text"
          className="text-gray-700 text-sm leading-relaxed max-w-4xl"
        >
          API access, cryptographic verification keys and automated batch workflows
          are planned for a future V2 release. No timelines or guarantees are
          implied. This section exists solely to document the intended evolution
          for institutional partners and to prevent any ambiguity regarding the
          current V1 scope.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="partners.s6.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63]
                     text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
}
