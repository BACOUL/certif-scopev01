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
          Built for institutional validation and external checks
        </h2>

        {/* INTRO */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-16">
          Certif-Scope ensures that every Attestation follows a consistent structure, uses 
          stable emission factors and includes verifiable metadata. The format is designed 
          for reviewers who require clarity, comparability and reproducibility across suppliers.
        </p>

        {/* 3 PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* INTEGRITY */}
          <div className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            <svg className="h-12 w-12 text-[#0B3A63] dark:text-gray-200 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
            </svg>
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-2">
              Verifiable integrity
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Each Attestation includes a unique verification ID and deterministic hash. 
              Reviewers can confirm authenticity instantly via external verification — no login required.
            </p>
          </div>

          {/* ENTERPRISE FIT */}
          <div className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            <svg className="h-12 w-12 text-[#0B3A63] dark:text-gray-200 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-2">
              Structured for institutional reviews
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              The layout is aligned with procurement and ESG screening practices, allowing 
              evaluators to review inputs, methodology and outputs without ambiguity.
            </p>
          </div>

          {/* REPRODUCIBILITY */}
          <div className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            <svg className="h-12 w-12 text-[#0B3A63] dark:text-gray-200 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v4H3V3zm0 7h18v11H3V10zm6 3h6" />
            </svg>
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-2">
              Consistent & reproducible
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Version-controlled emission factors and a deterministic calculation engine ensure 
              the same inputs always lead to the same CO₂e output — essential for audits and internal controls.
            </p>
          </div>

        </div>

        {/* FOOTNOTE */}
        <p className="mt-12 text-center text-xs text-gray-500 dark:text-gray-400">
          Indicative, spend-based document. Not a CSRD/ESRS report or audited emissions inventory.
        </p>

      </div>
    </section>
  );
      }
