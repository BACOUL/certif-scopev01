"use client";

export default function Trust() {
  return (
    <section
      id="trust"
      data-section="trust"
      className="py-24 bg-[#F8FAFC] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* MICRO LABEL — ALIGNED WITH OTHER HOME SECTIONS */}
        <p
          className="uppercase text-xs md:text-sm font-medium text-[#64748B] dark:text-gray-400 tracking-wider mb-3"
          data-i18n="trust.label"
        >
          CO₂e Attestation — Trust & Reliability
        </p>

        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] dark:text-gray-100 leading-tight"
          data-i18n="trust.title"
        >
          Built for institutional review and external verification
        </h2>

        {/* INTRO */}
        <p
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          data-i18n="trust.intro"
        >
          Certif-Scope applies a fixed document structure, stable emission factor references and
          built-in verification information. Reviewers receive a consistent and comparable
          document across suppliers, reducing manual checks and eliminating ambiguity.
        </p>

        {/* SEPARATOR — CANONICAL */}
        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14" />

        {/* INSTITUTIONAL ACCEPTANCE — KEY SENTENCE */}
        <p
          className="text-sm text-[#0B3A63]/80 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-16"
          data-i18n="trust.acceptance"
        >
          Commonly used for preliminary procurement, banking and ESG screening processes
          across European organizations.
        </p>

        {/* PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* INTEGRITY BLOCK */}
          <div
            className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1"
            data-i18n="trust.integrity"
          >
            <svg
              aria-hidden="true"
              className="h-12 w-12 text-[#0B3A63] dark:text-gray-200 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"
              />
            </svg>

            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-2">
              Verifiable integrity
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Each attestation includes built-in verification elements allowing third parties to
              confirm authenticity and integrity independently, without relying on user accounts,
              databases or stored financial information.
            </p>
          </div>

          {/* STRUCTURE BLOCK */}
          <div
            className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1"
            data-i18n="trust.structure"
          >
            <svg
              aria-hidden="true"
              className="h-12 w-12 text-[#0B3A63] dark:text-gray-200 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>

            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-2">
              Reviewer-aligned structure
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Inputs, methodology summary and outputs follow a predictable layout aligned with how
              procurement, banking and ESG teams assess suppliers.
            </p>
          </div>

          {/* CONSISTENCY BLOCK */}
          <div
            className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1"
            data-i18n="trust.consistency"
          >
            <svg
              aria-hidden="true"
              className="h-12 w-12 text-[#0B3A63] dark:text-gray-200 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18v4H3V3zm0 7h18v11H3V10zm6 3h6"
              />
            </svg>

            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-2">
              Consistent and comparable results
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Stable and documented emission factor references ensure comparable outcomes across
              assessments, providing a reliable basis for institutional screening and automated
              comparisons.
            </p>
          </div>

        </div>

        {/* FOOTNOTE — mandatory legal clarity */}
        <p
          className="mt-12 text-center text-xs text-gray-500 dark:text-gray-400"
          data-i18n="trust.footnote"
        >
          Indicative, spend-based document — not a CSRD/ESRS report and not an audited emissions
          inventory.
        </p>

      </div>
    </section>
  );
}
