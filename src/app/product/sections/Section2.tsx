"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
      data-section="s2"
    >

      {/* HEADER */}
      <div className="relative rounded-2xl p-12 bg-[#0B3A63] text-white shadow-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          className="text-4xl md:text-5xl font-extrabold relative z-10"
          data-i18n="s2.title"
        >
          Key Benefits Summary
        </h2>

        <p
          className="text-white/90 text-lg max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="s2.intro"
        >
          Certif-Scope enables SMEs to provide clear, standardized and instantly verifiable 
          CO₂e information whenever requested by procurement teams, clients, banks or insurers. 
          This section highlights the measurable advantages for organisations without ESG staff 
          or technical reporting capabilities.
        </p>
      </div>

      {/* GRID OF BENEFITS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* BENEFIT 1 */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md"
          data-i18n="s2.benefit1.block"
        >
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s2.benefit1.title"
          >
            Instant Generation
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s2.benefit1.text"
          >
            CO₂e estimation is produced in under one minute. No consultants, no complex 
            questionnaires and no operational data required — only annual spending (€).
          </p>
        </div>

        {/* BENEFIT 2 */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md"
          data-i18n="s2.benefit2.block"
        >
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s2.benefit2.title"
          >
            Procurement-Ready Format
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s2.benefit2.text"
          >
            The document layout matches what procurement teams, supplier portals and 
            internal ESG assessments expect, making the attestation easy to attach to 
            onboarding files and RFP submissions.
          </p>
        </div>

        {/* BENEFIT 3 */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md"
          data-i18n="s2.benefit3.block"
        >
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s2.benefit3.title"
          >
            Verifiable Authenticity
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s2.benefit3.text"
          >
            Each attestation includes a deterministic verification ID and cryptographic 
            integrity hash. Partners can validate the document offline, ensuring it has 
            not been altered.
          </p>
        </div>

        {/* BENEFIT 4 */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md"
          data-i18n="s2.benefit4.block"
        >
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s2.benefit4.title"
          >
            Deterministic & Reproducible
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s2.benefit4.text"
          >
            The same input always produces the same output. Emission factors are 
            version-controlled, enabling institutional reproducibility and long-term 
            verification.
          </p>
        </div>

        {/* BENEFIT 5 */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md"
          data-i18n="s2.benefit5.block"
        >
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s2.benefit5.title"
          >
            No ESG Knowledge Required
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s2.benefit5.text"
          >
            SMEs without sustainability teams can generate a consistent institutional-grade 
            indicator that satisfies most non-regulatory environmental information requests.
          </p>
        </div>

        {/* BENEFIT 6 */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md"
          data-i18n="s2.benefit6.block"
        >
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s2.benefit6.title"
          >
            Multilingual & Cross-Border Ready
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s2.benefit6.text"
          >
            The attestation is designed for easy translation and acceptance in English, 
            French, German, Spanish and Italian — suitable for European supply chains.
          </p>
        </div>

      </div>

      {/* CLARIFICATION BOX */}
      <div
        className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-[#0B3A63]/25 shadow-sm"
        data-i18n="s2.clarification.block"
      >
        <h3
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
          data-i18n="s2.clarification.title"
        >
          Important Clarification
        </h3>

        <p
          className="text-gray-700 max-w-4xl leading-relaxed"
          data-i18n="s2.clarification.text"
        >
          Certif-Scope does not replace CSRD/ESRS reporting, audited GHG inventories or 
          lifecycle assessments. It provides a standardized, spend-based CO₂e indicator 
          suitable for screening and procurement workflows, not regulatory disclosures.
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
