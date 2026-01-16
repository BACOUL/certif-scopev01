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
        <div className="absolute left-0 top-0 h-full w-2 bg-[#1FB6C1]" aria-hidden="true" />

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
          The CO₂e Attestation supports real institutional workflows where SMEs must
          provide a clear, standardized environmental indicator. It applies to procurement,
          banking, insurance, public tenders, and ESG screening processes that require
          verification-ready documentation.
        </p>
      </div>

      {/* GRID — 4 ASYMMETRIC SCENARIOS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20">
        {/* LEFT COLUMN (2 items stacked) */}
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
              Procurement departments require consistent CO₂ indicators for supplier scoring.
              The Attestation provides a standardized, verification-ready document that fits
              onboarding and RFP requirements.
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
              Insurers request environmental indicators to classify clients and exposures.
              The Attestation provides a clear, stable, reproducible value suitable for
              underwriting files and renewal processes.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN — Banking Highlight */}
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
            Financial institutions must assess environmental risk exposure according to EU
            supervisory guidelines. The Attestation provides a deterministic value that banks
            can integrate into credit scoring without complex ESG reporting.
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
          Many EU-level tenders require environmental indicators. The Attestation simplifies
          the submission process by providing a readable, verifiable document suitable for
          eligibility checks, ESG scoring, and administrative completeness.
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
          <li data-i18n="s6.extended.item1">• Internal ESG dashboards (no physical data available)</li>
          <li data-i18n="s6.extended.item2">• Supplier documentation packages for major accounts</li>
          <li data-i18n="s6.extended.item3">• Partnership onboarding requirements</li>
          <li data-i18n="s6.extended.item4">• Automated procurement platform screening</li>
          <li data-i18n="s6.extended.item5">• Bank renewal processes requiring updated indicators</li>
        </ul>

        <p
          data-i18n="s6.extended.note"
          className="mt-6 text-sm text-gray-700 leading-relaxed"
        >
          These scenarios reflect real workflows where SMEs must supply a standardized,
          verification-ready environmental indicator without full ESG reporting capabilities.
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
