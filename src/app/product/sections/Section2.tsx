"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      data-section="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="relative rounded-2xl p-12 bg-[#0B3A63] text-white shadow-lg overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent"
        />

        <h2
          data-i18n="s2.title"
          className="text-4xl md:text-5xl font-extrabold relative z-10"
        >
          Key Benefits Summary
        </h2>

        <p
          data-i18n="s2.intro"
          className="text-white/90 text-lg max-w-4xl mt-6 leading-relaxed relative z-10"
        >
          Certif-Scope enables SMEs to instantly generate a structured and verifiable CO₂e 
          Attestation using only annual spending (€). The output is standardized, 
          procurement-ready, multilingual and includes a deterministic verification ID 
          based on cryptographic integrity.
        </p>
      </div>

      {/* BENEFITS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* BENEFIT 1 */}
        <div
          data-i18n="s2.benefit1.block"
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md"
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
            No operational data, no consultants, no ESG expertise required. The attestation 
            is computed in seconds using a deterministic spend-based method.
          </p>
        </div>

        {/* BENEFIT 2 */}
        <div
          data-i18n="s2.benefit2.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md"
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
            Structured to match supplier onboarding requirements, ESG questionnaires, 
            RFP documentation and institutional verification workflows.
          </p>
        </div>

        {/* BENEFIT 3 */}
        <div
          data-i18n="s2.benefit3.block"
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md"
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
            Each PDF embeds a deterministic integrity hash and a verification ID. 
            Institutions can confirm authenticity instantly — even offline.
          </p>
        </div>

        {/* BENEFIT 4 */}
        <div
          data-i18n="s2.benefit4.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md"
        >
          <h3
            data-i18n="s2.benefit4.title"
            className="text-2xl font-semibold text-[#0B3A63]"
          >
            Fully Deterministic Calculation
          </h3>

          <p
            data-i18n="s2.benefit4.text"
            className="mt-3 text-gray-700 text-sm leading-relaxed"
          >
            The same spending input always produces the same result. Emission factors 
            are version-controlled and documented in the attestation metadata.
          </p>
        </div>

        {/* BENEFIT 5 */}
        <div
          data-i18n="s2.benefit5.block"
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md"
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
            SMEs can answer institutional CO₂e requests without sustainability 
            consultants or complex carbon accounting systems.
          </p>
        </div>

        {/* BENEFIT 6 */}
        <div
          data-i18n="s2.benefit6.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md"
        >
          <h3
            data-i18n="s2.benefit6.title"
            className="text-2xl font-semibold text-[#0B3A63]"
          >
            Multilingual & European-Ready
          </h3>

          <p
            data-i18n="s2.benefit6.text"
            className="mt-3 text-gray-700 text-sm leading-relaxed"
          >
            Designed for cross-border workflows. Clear and readable in EN, FR, DE, ES, IT. 
            Suitable for procurement teams, banks and insurers across the EU.
          </p>
        </div>

      </div>

      {/* CLARIFICATION */}
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
          Certif-Scope does not replace CSRD/ESRS disclosures, audited GHG inventories 
          or lifecycle assessments. It produces a simplified, spend-based CO₂e indicator 
          suitable for screening, procurement documentation and institutional requests 
          where a consistent and verifiable estimate is sufficient.
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
