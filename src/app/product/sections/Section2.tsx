"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      data-section="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Clair comme Section1 */}
      <div className="relative rounded-2xl p-12 bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/15 to-transparent pointer-events-none"
        />

        <h2
          data-i18n="s2.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]"
        >
          Key Benefits Summary
        </h2>

        <p
          data-i18n="s2.intro"
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed"
        >
          A rapid, standardized and verification-ready CO₂e Attestation built
          for SMEs. Fully deterministic, multilingual and instantly usable
          in procurement, banking and insurance workflows across the EU.
        </p>
      </div>

      {/* GRID — Design harmonisé */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* CARD 1 */}
        <div
          data-i18n="s2.benefit1.block"
          className="p-8 rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition"
        >
          <h3
            data-i18n="s2.benefit1.title"
            className="text-2xl font-semibold text-[#0B3A63]"
          >
            Instant Generation
          </h3>
          <p
            data-i18n="s2.benefit1.text"
            className="mt-3 text-gray-700 text-sm leading-relaxed"
          >
            Based solely on annual spending (€). No physical data or specialists required.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          data-i18n="s2.benefit2.block"
          className="p-8 rounded-xl bg-[#F8FAFC] border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition"
        >
          <h3
            data-i18n="s2.benefit2.title"
            className="text-2xl font-semibold text-[#0B3A63]"
          >
            Procurement-Ready Format
          </h3>
          <p
            data-i18n="s2.benefit2.text"
            className="mt-3 text-gray-700 text-sm leading-relaxed"
          >
            Clear structure aligned with onboarding, RFP and ESG questionnaire requirements.
          </p>
        </div>

        {/* CARD 3 */}
        <div
          data-i18n="s2.benefit3.block"
          className="p-8 rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition"
        >
          <h3
            data-i18n="s2.benefit3.title"
            className="text-2xl font-semibold text-[#0B3A63]"
          >
            Verifiable Integrity
          </h3>
          <p
            data-i18n="s2.benefit3.text"
            className="mt-3 text-gray-700 text-sm leading-relaxed"
          >
            Cryptographic hash + verification ID enable offline authenticity checks.
          </p>
        </div>

        {/* CARD 4 */}
        <div
          data-i18n="s2.benefit4.block"
          className="p-8 rounded-xl bg-[#F8FAFC] border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition"
        >
          <h3
            data-i18n="s2.benefit4.title"
            className="text-2xl font-semibold text-[#0B3A63]"
          >
            Deterministic Calculation
          </h3>
          <p
            data-i18n="s2.benefit4.text"
            className="mt-3 text-gray-700 text-sm leading-relaxed"
          >
            Version-controlled emission factors ensure transparent and reproducible results.
          </p>
        </div>

        {/* CARD 5 */}
        <div
          data-i18n="s2.benefit5.block"
          className="p-8 rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition"
        >
          <h3
            data-i18n="s2.benefit5.title"
            className="text-2xl font-semibold text-[#0B3A63]"
          >
            No ESG Expertise Required
          </h3>
          <p
            data-i18n="s2.benefit5.text"
            className="mt-3 text-gray-700 text-sm leading-relaxed"
          >
            SMEs can produce a coherent CO₂e indicator without consultants or complex tools.
          </p>
        </div>

        {/* CARD 6 */}
        <div
          data-i18n="s2.benefit6.block"
          className="p-8 rounded-xl bg-[#F8FAFC] border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition"
        >
          <h3
            data-i18n="s2.benefit6.title"
            className="text-2xl font-semibold text-[#0B3A63]"
          >
            Multilingual & EU-Ready
          </h3>
          <p
            data-i18n="s2.benefit6.text"
            className="mt-3 text-gray-700 text-sm leading-relaxed"
          >
            Prepared for EN, FR, DE, ES, IT—usable across European supply chains.
          </p>
        </div>

      </div>

      {/* CLARIFICATION BOX — Identique à Section1 */}
      <div
        data-i18n="s2.clarification.block"
        className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-[#0B3A63]/25 shadow-sm"
      >
        <h3
          data-i18n="s2.clarification.title"
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
        >
          Important Clarification
        </h3>

        <p
          data-i18n="s2.clarification.text"
          className="text-gray-700 max-w-4xl leading-relaxed"
        >
          Certif-Scope does not replace CSRD/ESRS reporting, audited GHG inventories
          or lifecycle assessments. It offers an indicative, spend-based CO₂e value
          suitable for screening and institutional documentation.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s2.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
          }
