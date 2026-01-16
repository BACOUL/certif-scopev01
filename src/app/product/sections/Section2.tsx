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
          Certif-Scope enables organisations to deliver a structured, reproducible and verifiable
          CO₂e indicator without requiring a full emissions inventory. Each Attestation follows a
          consistent standard aligned with procurement and institutional workflows, and includes a
          deterministic verification mechanism suitable for offline validation.
        </p>
      </div>

      {/* GRID BENEFITS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* BENEFIT 1 */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md"
          data-i18n="s2.benefit1.block"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s2.benefit1.title">
            Instant Generation
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed" data-i18n="s2.benefit1.text">
            The Attestation is generated in less than one minute using a deterministic formula
            based solely on annual spending (€). No consultants, no workshops and no operational
            data collection are required.
          </p>
        </div>

        {/* BENEFIT 2 */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md"
          data-i18n="s2.benefit2.block"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s2.benefit2.title">
            Procurement-Ready Format
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed" data-i18n="s2.benefit2.text">
            The layout matches expectations of supplier onboarding, ESG questionnaires, RFP files
            and banking due-diligence processes. It is designed to be attached directly to
            documentation packages without explanation.
          </p>
        </div>

        {/* BENEFIT 3 */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md"
          data-i18n="s2.benefit3.block"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s2.benefit3.title">
            Verifiable Integrity
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed" data-i18n="s2.benefit3.text">
            Every PDF embeds a deterministic integrity hash and a verification ID. Institutions can
            recompute the hash independently to confirm authenticity without requiring stored data,
            databases or login access.
          </p>
        </div>

        {/* BENEFIT 4 */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md"
          data-i18n="s2.benefit4.block"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s2.benefit4.title">
            Deterministic, Version-Controlled Formula
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed" data-i18n="s2.benefit4.text">
            The same inputs always produce the same result. The computation relies on a transparent
            spend-based formula with versioned emission factors, ensuring reproducibility for audits
            and institutional validation.
          </p>
        </div>

        {/* BENEFIT 5 */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md"
          data-i18n="s2.benefit5.block"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s2.benefit5.title">
            No Sustainability Expertise Required
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed" data-i18n="s2.benefit5.text">
            SMEs without ESG teams can produce a clear indicator meeting most non-regulatory
            institutional requests. No prior knowledge of GHG accounting or CSRD/ESRS principles is
            necessary.
          </p>
        </div>

        {/* BENEFIT 6 */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md"
          data-i18n="s2.benefit6.block"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s2.benefit6.title">
            Multilingual and Cross-Border Use
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed" data-i18n="s2.benefit6.text">
            The structure is designed to translate cleanly into EN / FR / DE / ES / IT. Terminology
            is standardized and compatible with European procurement workflows across borders.
          </p>
        </div>

      </div>

      {/* CLARIFICATION BOX */}
      <div
        className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-[#0B3A63]/25 shadow-sm"
        data-i18n="s2.clarification.block"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4" data-i18n="s2.clarification.title">
          Important Clarification
        </h3>

        <p
          className="text-gray-700 max-w-4xl leading-relaxed"
          data-i18n="s2.clarification.text"
        >
          Certif-Scope does not generate CSRD/ESRS reports, GHG inventories or lifecycle
          assessments. It provides an indicative CO₂e estimate based on the spend-based model
          (aligned with GHG Protocol Scope 3 Category 1 principles), designed for screening,
          procurement and institutional pre-evaluation. It is not a substitute for regulatory
          reporting or audited disclosures.
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
