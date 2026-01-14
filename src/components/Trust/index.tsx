export default function Trust() {
  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TAGLINE */}
        <p className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-3">
          Trusted in procurement and supplier screening workflows
        </p>

        <div className="w-16 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mb-10"></div>

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] dark:text-gray-100 leading-tight mb-6">
          Built for onboarding, procurement checks and ESG questionnaires
        </h2>

        {/* INTRO */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-16">
          Certif-Scope provides SMEs with a fast and verifiable way to respond to CO₂e information requests. 
          The output is structured, consistent and includes a verification ID that partners can confirm instantly. 
          Fully spend-based and instantly generated — without claiming regulatory or audited reporting.
        </p>

        {/* 3 PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* INTEGRITY */}
          <div className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            <svg className="h-12 w-12 text-[#0B3A63] dark:text-gray-200 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
            </svg>
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-2">
              Instant integrity verification
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Each document includes a verification ID and deterministic hash.  
              Partners can confirm authenticity in seconds — no login or account required.
            </p>
          </div>

          {/* ENTERPRISE FIT */}
          <div className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            <svg className="h-12 w-12 text-[#0B3A63] dark:text-gray-200 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-2">
              Compatible with procurement systems
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              The standardized PDF fits supplier portals, RFP requirements and onboarding checklists.  
              Reduces friction and avoids repeated data requests.
            </p>
          </div>

          {/* REPRODUCIBILITY */}
          <div className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            <svg className="h-12 w-12 text-[#0B3A63] dark:text-gray-200 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v4H3V3zm0 7h18v11H3V10zm6 3h6" />
            </svg>
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-2">
              Deterministic and reproducible
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Version-controlled emission factors and deterministic calculation ensure identical results  
              from the same inputs — ideal for internal reviews or screening.
            </p>
          </div>

        </div>

        {/* FOOTNOTE */}
        <p className="mt-12 text-center text-xs text-gray-500 dark:text-gray-400">
          Spend-based indicative document. Not a regulatory or audited emissions report.
        </p>

      </div>
    </section>
  );
      }
