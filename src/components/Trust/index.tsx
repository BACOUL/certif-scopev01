export default function Trust() {
  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TAGLINE */}
        <p className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-3">
          Reliability for procurement, banking and ESG screening
        </p>

        <div className="w-16 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mb-10"></div>

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] dark:text-gray-100 leading-tight mb-6">
          Built for institutional review and external verification
        </h2>

        {/* INTRO */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-16">
          Certif-Scope ensures that every CO₂e Attestation uses a uniform structure, stable
          emission factor references and embedded verification metadata. Designed to give
          reviewers clarity, reproducibility and a consistent basis for comparison across suppliers.
        </p>

        {/* PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* INTEGRITY */}
          <div className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            <svg aria-hidden="true" className="h-12 w-12 text-[#0B3A63] dark:text-gray-200 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
            </svg>
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-2">
              Verifiable integrity
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Each Attestation includes a dedicated verification ID and deterministic hash.
              Authenticity can be confirmed externally in seconds — without accounts or logins.
            </p>
          </div>

          {/* STRUCTURE */}
          <div className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            <svg aria-hidden="true" className="h-12 w-12 text-[#0B3A63] dark:text-gray-200 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-2">
              Reviewer-aligned structure
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Inputs, calculations and outputs follow a standardised layout aligned with procurement,
              banking and ESG workflows — reducing back-and-forth and interpretation errors.
            </p>
          </div>

          {/* CONSISTENCY */}
          <div className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            <svg aria-hidden="true" className="h-12 w-12 text-[#0B3A63] dark:text-gray-200 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v4H3V3zm0 7h18v11H3V10zm6 3h6" />
            </svg>
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-2">
              Consistent and reproducible
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Version-controlled emission factors ensure the same inputs always produce the same
              CO₂e result. A stable and auditable basis for institutional decision-making.
            </p>
          </div>

        </div>

        {/* FOOTNOTE */}
        <p className="mt-12 text-center text-xs text-gray-500 dark:text-gray-400">
          Indicative, spend-based document — not a CSRD/ESRS report or audited emissions inventory.
        </p>

      </div>
    </section>
  );
          }
