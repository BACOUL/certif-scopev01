"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      data-section="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-28"
    >

      {/* HERO PREMIUM */}
      <div className="relative rounded-2xl p-14 bg-[#0B3A63] text-white shadow-xl overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent"
        />

        <h2
          data-i18n="s1.title"
          className="text-4xl md:text-5xl font-extrabold relative z-10 drop-shadow-sm"
        >
          Product Overview
        </h2>

        <p
          data-i18n="s1.paragraph1"
          className="text-white/90 text-lg max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          Certif-Scope generates a standardized CO₂e Attestation using only annual spending (€),
          enabling SMEs to answer institutional climate information requests without audits,
          CSRD/ESRS reporting or physical activity data collection.
        </p>

        <p
          data-i18n="s1.paragraph2"
          className="text-white/80 text-md max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          The attestation includes category breakdowns, standardized formatting and a deterministic
          verification ID based on a cryptographic hash — readable and verifiable in institutional
          workflows across Europe.
        </p>
      </div>

      {/* 3 PILLARS — MIXED STYLE */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* CARD 1 */}
        <div
          data-i18n="s1.card1.block"
          className="p-8 rounded-xl bg-white border-l-4 border-[#15B097] shadow-md hover:shadow-lg transition"
        >
          <h3
            data-i18n="s1.card1.title"
            className="text-xl font-bold text-[#0B3A63] mb-3"
          >
            Structured Output
          </h3>

          <p
            data-i18n="s1.card1.text"
            className="text-gray-700 text-sm leading-relaxed"
          >
            Standardized layout designed to align with procurement, compliance and onboarding
            workflows requiring quick CO₂ evaluation.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          data-i18n="s1.card2.block"
          className="p-8 rounded-xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-sm hover:shadow-md transition"
        >
          <h3
            data-i18n="s1.card2.title"
            className="text-xl font-bold text-[#0B3A63] mb-3"
          >
            Instant Calculation
          </h3>

          <p
            data-i18n="s1.card2.text"
            className="text-gray-700 text-sm leading-relaxed"
          >
            Deterministic spend-based formula inspired by GHG Protocol Scope 3 Cat.1. No expertise,
            no operational metrics — result in seconds.
          </p>
        </div>

        {/* CARD 3 */}
        <div
          data-i18n="s1.card3.block"
          className="p-8 rounded-xl bg-white border-r-4 border-[#15B097] shadow-md hover:shadow-lg transition"
        >
          <h3
            data-i18n="s1.card3.title"
            className="text-xl font-bold text-[#0B3A63] mb-3"
          >
            Verifiable Authenticity
          </h3>

          <p
            data-i18n="s1.card3.text"
            className="text-gray-700 text-sm leading-relaxed"
          >
            Cryptographic hash and verification ID allow offline validation without databases or
            stored data.
          </p>
        </div>
      </div>

      {/* WORKFLOW SPLIT BLOCK */}
      <div
        data-i18n="s1.workflow.block"
        className="mt-20 p-10 bg-[#F8FAFC] rounded-2xl border border-[#0B3A63]/10 shadow-sm"
      >
        <h4
          data-i18n="s1.workflow.title"
          className="text-2xl font-bold text-[#0B3A63] mb-6"
        >
          How It Fits in Real Workflows
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ul className="list-disc ml-6 space-y-3 text-gray-700 text-sm leading-relaxed">
            <li data-i18n="s1.workflow.item1">Supplier onboarding (procurement)</li>
            <li data-i18n="s1.workflow.item2">Bank or insurer ESG pre-assessment</li>
            <li data-i18n="s1.workflow.item3">Public tenders requiring environmental documents</li>
            <li data-i18n="s1.workflow.item4">Compliance for clients under CSRD</li>
          </ul>

          <div className="relative p-6 bg-white rounded-xl border border-gray-200 shadow">
            <p className="text-[#0B3A63] text-sm font-medium mb-2">
              Summary of workflow
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Input (spending €) →  
              Calculation engine →  
              Attestation PDF →  
              Cryptographic verification
            </p>
          </div>
        </div>
      </div>

      {/* REGULATORY REFERENCES */}
      <div
        data-i18n="s1.regref.block"
        className="mt-16 p-10 bg-white rounded-xl border border-[#15B097]/40 shadow-md"
      >
        <div className="inline-block mb-4 px-3 py-1 text-xs font-semibold bg-[#15B097]/20 text-[#0B3A63] rounded-full">
          EU Frameworks Reference
        </div>

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
          Large companies and financial institutions must collect climate-related supplier data.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-[#0B3A63] font-medium">
          <li>
            <a href="https://eur-lex.europa.eu/eli/reg/2022/2464" className="hover:text-[#15B097] underline">
              CSRD — Regulation 2022/2464
            </a>
          </li>
          <li>
            <a href="https://www.efrag.org/lab6" className="hover:text-[#15B097] underline">
              ESRS E1 Climate Standard
            </a>
          </li>
          <li>
            <a href="https://www.eba.europa.eu" className="hover:text-[#15B097] underline">
              EBA ESG Risk Guidelines
            </a>
          </li>
        </ul>
      </div>

      {/* FINAL HIGHLIGHT */}
      <div
        data-i18n="s1.highlight.block"
        className="mt-20 p-12 bg-[#15B097] text-white rounded-2xl shadow-xl relative overflow-hidden"
      >
        <h4
          data-i18n="s1.highlight.title"
          className="text-2xl font-bold relative z-10"
        >
          Why This Matters
        </h4>

        <p
          data-i18n="s1.highlight.text"
          className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10"
        >
          SMEs across Europe increasingly receive CO₂e requests during procurement, onboarding,
          banking or insurance processes. Certif-Scope offers a fast and standardized solution,
          fully verifiable and institution-friendly.
        </p>
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
