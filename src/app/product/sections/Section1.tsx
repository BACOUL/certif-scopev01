"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      data-section="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
    >

      {/* HEADER BLOCK */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/5 pointer-events-none"
          aria-hidden="true"
        />

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="s1.title"
        >
          Product Overview
        </h2>

        <p
          className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
          data-i18n="s1.paragraph"
        >
          Certif-Scope generates an instant, standardized CO₂e Attestation using a
          spend-based calculation. It provides SMEs with a simple way to answer
          procurement, banking and insurance requests for environmental indicators—
          without audits, consultants or operational data.
        </p>
      </div>

      {/* 3-KEY POINTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
          data-i18n="s1.point1"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Standardized Output
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Clear, uniform PDF structure designed for procurement and institutional workflows.
          </p>
        </div>

        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm"
          data-i18n="s1.point2"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Instant Generation
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Converts annual spending (€) into indicative CO₂e in seconds.
          </p>
        </div>

        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
          data-i18n="s1.point3"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Verification Ready
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Includes a deterministic verification ID and integrity hash for offline validation.
          </p>
        </div>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          aria-label="Back to section summary"
          data-i18n="s1.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
}
