"use client";

export default function Section6() {
  return (
    <section
      id="s6"
      data-section="s6"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] mb-6"
          data-i18n="s6.title"
        >
          Usage Scenarios
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl leading-relaxed"
          data-i18n="s6.intro"
        >
          The CO₂e Attestation is designed for practical, non-regulatory workflows where
          institutions require a clear environmental indicator from SMEs. It supports
          procurement onboarding, banking and insurance review processes, tender submissions,
          supplier documentation and internal ESG screening.
        </p>
      </div>

      {/* GRID — 4 CORE SCENARIOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">

        {/* PROCUREMENT */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md"
          data-i18n="s6.procurement.block"
        >
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s6.procurement.title"
          >
            Procurement & Supplier Onboarding
          </h3>

          <p
            className="mt-3 text-sm text-gray-700 leading-relaxed"
            data-i18n="s6.procurement.text"
          >
            Buyers often require CO₂-related indicators from suppliers as part of ESG
            policies or internal risk scoring models. The Attestation provides a standardized,
            verifiable indicator that can be included in supplier registration and RFP responses.
          </p>
        </div>

        {/* BANKING */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm"
          data-i18n="s6.banking.block"
        >
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s6.banking.title"
          >
            Banking & Credit Assessment
          </h3>

          <p
            className="mt-3 text-sm text-gray-700 leading-relaxed"
            data-i18n="s6.banking.text"
          >
            Financial institutions must assess environmental exposure under EU supervisory
            guidelines. The Attestation provides a clear, stable and integrity-verified value
            that supports credit scoring or onboarding decisions without requiring complex ESG data.
          </p>
        </div>

        {/* INSURANCE */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md"
          data-i18n="s6.insurance.block"
        >
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s6.insurance.title"
          >
            Insurance Risk & Underwriting
          </h3>

          <p
            className="mt-3 text-sm text-gray-700 leading-relaxed"
            data-i18n="s6.insurance.text"
          >
            Insurers increasingly request environmental indicators to assess risk categories.
            The Attestation provides an indicative figure suitable for underwriting files,
            portfolio segmentation and renewal documentation.
          </p>
        </div>

        {/* PUBLIC TENDERS */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm"
          data-i18n="s6.tenders.block"
        >
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s6.tenders.title"
          >
            Public Tenders & Administrative Files
          </h3>

          <p
            className="mt-3 text-sm text-gray-700 leading-relaxed"
            data-i18n="s6.tenders.text"
          >
            Many European tenders require a CO₂-related indicator for eligibility or scoring.
            The Attestation offers a consistent, readable document that simplifies filing
            requirements for SMEs lacking formal sustainability reporting.
          </p>
        </div>

      </div>

      {/* EXTENDED SECTION — ADDITIONAL USES */}
      <div
        className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-sm"
        data-i18n="s6.extended.block"
      >
        <h3
          className="text-2xl font-bold text-[#0B3A63] mb-4"
          data-i18n="s6.extended.title"
        >
          Additional Use Cases
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">
          <li data-i18n="s6.extended.item1">
            • Internal ESG dashboards when no physical activity data is available.
          </li>

          <li data-i18n="s6.extended.item2">
            • Supplier communication packages for large accounts.
          </li>

          <li data-i18n="s6.extended.item3">
            • Documentation required for partnership onboarding.
          </li>

          <li data-i18n="s6.extended.item4">
            • Compliance screening in digital procurement platforms.
          </li>

          <li data-i18n="s6.extended.item5">
            • Bank renewal procedures requiring updated environmental indicators.
          </li>
        </ul>

        <p
          className="mt-6 text-sm text-gray-700 leading-relaxed"
          data-i18n="s6.extended.note"
        >
          These use cases reflect real institutional workflows in which a standardized, verification-ready
          CO₂e indicator is preferable to complex or unavailable ESG reporting.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          aria-label="Back to section summary"
          data-i18n="s6.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
