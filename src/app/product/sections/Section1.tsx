"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      data-section="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="s1.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
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

        {/* PILLAR 1 */}
        <div
          data-i18n="s1.card1.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition"
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

        {/* PILLAR 2 */}
        <div
          data-i18n="s1.card2.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/30 shadow-md hover:shadow-xl transition"
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

        {/* PILLAR 3 */}
        <div
          data-i18n="s1.card3.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition"
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

      {/* WORKFLOW BOX */}
      <div
        data-i18n="s1.workflow.block"
        className="mt-20 p-10 rounded-xl bg-white border border-gray-300 shadow-md"
      >
        <h4
          data-i18n="s1.workflow.title"
          className="text-xl font-bold text-[#0B3A63] mb-4"
        >
          How the Attestation Is Used in Practice
        </h4>

        <ul className="list-disc ml-6 text-gray-700 text-sm leading-relaxed space-y-2">
          <li data-i18n="s1.workflow.item1">
            supplier onboarding (procurement teams request basic CO₂ indicators)
          </li>
          <li data-i18n="s1.workflow.item2">
            bank or insurer due-diligence (ESG risk pre-assessment)
          </li>
          <li data-i18n="s1.workflow.item3">
            public tenders referencing environmental documentation
          </li>
          <li data-i18n="s1.workflow.item4">
            partner compliance checks for larger groups subject to CSRD
          </li>
        </ul>
      </div>

      {/* REGULATORY LINKS */}
      <div
        data-i18n="s1.regref.block"
        className="mt-16 p-10 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/25 shadow-sm"
      >
        <h4
          data-i18n="s1.regref.title"
          className="text-xl font-bold text-[#0B3A63] mb-3"
        >
          Regulatory Context Behind These Requests
        </h4>

        <p
          data-i18n="s1.regref.text"
          className="text-gray-700 text-sm leading-relaxed max-w-4xl"
        >
          Large groups and financial institutions must collect climate-related indicators from 
          suppliers under several EU frameworks. SMEs are indirectly impacted. Key references:
        </p>

        <ul className="mt-4 space-y-2 text-sm text-[#0B3A63] font-medium">
          <li>
            <a
              href="https://eur-lex.europa.eu/eli/reg/2022/2464"
              target="_blank"
              className="hover:text-[#1FB6C1] underline"
            >
              CSRD — Regulation 2022/2464
            </a>
          </li>
          <li>
            <a
              href="https://www.efrag.org/lab6"
              target="_blank"
              className="hover:text-[#1FB6C1] underline"
            >
              ESRS E1 Climate Standard
            </a>
          </li>
          <li>
            <a
              href="https://www.eba.europa.eu"
              target="_blank"
              className="hover:text-[#1FB6C1] underline"
            >
              EBA ESG Risk Guidelines
            </a>
          </li>
        </ul>
      </div>

      {/* LIMITATION BOX */}
      <div
        data-i18n="s1.limitation.block"
        className="mt-20 p-8 bg-white rounded-xl border border-gray-300 shadow-md"
      >
        <h4
          data-i18n="s1.limitation.title"
          className="text-xl font-bold text-[#0B3A63] mb-3"
        >
          Important Clarification
        </h4>

        <p
          data-i18n="s1.limitation.text"
          className="text-gray-700 text-sm leading-relaxed"
        >
          Certif-Scope does not generate CSRD/ESRS disclosures, audited carbon inventories or 
          lifecycle assessments. It provides an indicative, spend-based CO₂e indicator for 
          compliance screening, procurement documentation and pre-assessment workflows.
        </p>
      </div>

      {/* FINAL HIGHLIGHT */}
      <div
        data-i18n="s1.highlight.block"
        className="mt-20 p-12 bg-[#1FB6C1] text-white rounded-2xl shadow-xl relative overflow-hidden"
      >
        <h4
          data-i18n="s1.highlight.title"
          className="text-2xl font-bold relative z-10"
        >
          Why This Matters for SMEs
        </h4>

        <p
          data-i18n="s1.highlight.text"
          className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10"
        >
          SMEs across Europe face increasing pressure to provide CO₂ information during procurement,
          onboarding, credit analysis or insurance evaluation. Certif-Scope provides a fast,
          standardized and verifiable option aligned with institutional expectations.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s1.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg
[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
