"use client";

export default function Section6() {
  return (
    <section
      id="usage-scenarios"
      data-section="usage-scenarios"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER WITH ACCENT BAR */}
      <div className="relative p-12 rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full w-2 bg-[#1FB6C1]"
          aria-hidden="true"
        />

        <h2
          data-i18n="s6.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] pl-6"
        >
          <span className="mr-2">6.</span>
          Usage Scenarios
        </h2>

        <p
          data-i18n="s6.intro"
          className="text-lg text-gray-700 max-w-4xl leading-relaxed mt-6 pl-6"
        >
          The CO₂e Attestation is designed for situations where organizations are
          required to provide a standardized environmental indicator, without
          producing a full greenhouse gas inventory or regulatory sustainability
          report.
        </p>
      </div>

      {/* CONTEXT NOTE — INSTITUTIONAL FRAME */}
      <div className="mt-12 p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl max-w-4xl">
        <p
          data-i18n="s6.context"
          className="text-sm text-gray-600 leading-relaxed"
        >
          The scenarios below reflect common institutional and administrative use
          cases where an indicative, standardized CO₂e document is requested for
          screening, comparison or documentation purposes. The Attestation is not
          intended to replace audited carbon accounting or regulatory ESG
          reporting.
        </p>
      </div>

      {/* GRID — ASYMMETRIC SCENARIOS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20">
        {/* LEFT COLUMN */}
        <div className="space-y-10 lg:col-span-2">
          <div
            data-i18n="s6.procurement.block"
            className="p-8 bg-white rounded-xl border border-gray-200 shadow-md"
          >
            <h3
              data-i18n="s6.procurement.title"
              className="text-2xl font-semibold text-[#0B3A63]"
            >
              Procurement & Supplier Onboarding
            </h3>
            <p
              data-i18n="s6.procurement.text"
              className="mt-3 text-sm text-gray-700 leading-relaxed"
            >
              Procurement departments often require comparable environmental
              indicators during supplier onboarding or tender evaluation. The
              Attestation provides a standardized document suitable for inclusion
              in RFP responses and supplier qualification files.
            </p>
          </div>

          <div
            data-i18n="s6.insurance.block"
            className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/40 shadow-sm"
          >
            <h3
              data-i18n="s6.insurance.title"
              className="text-2xl font-semibold text-[#0B3A63]"
            >
              Insurance Risk & Underwriting
            </h3>
            <p
              data-i18n="s6.insurance.text"
              className="mt-3 text-sm text-gray-700 leading-relaxed"
            >
              Insurers may request environmental indicators to support client
              classification, portfolio analysis or underwriting decisions. The
              Attestation provides a clear and consistent document for inclusion
              in insurance and renewal files.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          data-i18n="s6.banking.block"
          className="p-8 rounded-xl bg-[#0B3A63] text-white shadow-lg"
        >
          <h3
            data-i18n="s6.banking.title"
            className="text-2xl font-semibold mb-3"
          >
            Banking & Credit Assessment
          </h3>
          <p
            data-i18n="s6.banking.text"
            className="text-white/90 text-sm leading-relaxed"
          >
            Financial institutions increasingly document environmental exposure
            as part of credit analysis and client monitoring. The Attestation
            provides an indicative CO₂e signal that can be referenced in credit
            files without requiring full ESG disclosure.
          </p>
        </div>
      </div>

      {/* PUBLIC TENDERS */}
      <div
        className="mt-16 p-10 bg-white rounded-xl shadow-md border border-gray-200"
        data-i18n="s6.tenders.block"
      >
        <h3
          data-i18n="s6.tenders.title"
          className="text-2xl font-bold text-[#0B3A63] mb-4"
        >
          Public Tenders & Administrative Files
        </h3>
        <p
          data-i18n="s6.tenders.text"
          className="text-sm text-gray-700 leading-relaxed max-w-4xl"
        >
          Public procurement procedures may include environmental indicators as
          eligibility or evaluation criteria. The Attestation simplifies tender
          submissions by providing a readable and verifiable document suitable
          for administrative review.
        </p>
      </div>

      {/* EXTENDED USE CASES */}
      <div
        data-i18n="s6.extended.block"
        className="mt-20 p-10 bg-[#F8FAFC] rounded-xl border border-[#0B3A63]/20 shadow-sm"
      >
        <h3
          data-i18n="s6.extended.title"
          className="text-2xl font-bold text-[#0B3A63] mb-4"
        >
          Additional Use Cases
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">
          <li data-i18n="s6.extended.item1">
            • Internal ESG or sustainability dashboards without physical data
          </li>
          <li data-i18n="s6.extended.item2">
            • Supplier documentation requested by major corporate clients
          </li>
          <li data-i18n="s6.extended.item3">
            • Partnership onboarding and due-diligence files
          </li>
          <li data-i18n="s6.extended.item4">
            • Screening on automated procurement platforms
          </li>
          <li data-i18n="s6.extended.item5">
            • Periodic bank reviews requiring updated indicators
          </li>
        </ul>

        <p
          data-i18n="s6.extended.note"
          className="mt-6 text-sm text-gray-700 leading-relaxed"
        >
          These use cases reflect practical, non-regulatory situations where a
          standardized environmental document is requested for comparison or
          documentation purposes.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          aria-label="Back to section summary"
          data-i18n="s6.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63]
                     text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
            }
