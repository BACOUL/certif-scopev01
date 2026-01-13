export default function Trust() {
  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-3">
          Trusted in supplier screening workflows
        </p>

        <div className="w-16 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mb-10"></div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
          Built for procurement, onboarding and ESG questionnaires
        </h2>

        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-16">
          Certif-Scope gives SMEs a simple way to provide CO₂e information when requested by clients,
          banks or procurement teams. The document is clear, standardized and easy to verify.  
          Spend-based only, instantly generated and suitable for screening — not a regulatory or audited report.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BLOCK 1 – INTEGRITY */}
          <div className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            <svg className="h-12 w-12 text-[#0B3A63] dark:text-gray-300 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Integrity you can check instantly
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Each document includes a verification ID and a deterministic hash of the input data.  
              Partners can confirm authenticity in seconds — no account, no database lookup required.
            </p>
          </div>

          {/* BLOCK 2 – ENTERPRISE FIT */}
          <div className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            <svg className="h-12 w-12 text-[#0B3A63] dark:text-gray-300 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Compatible with procurement systems
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              The output format fits supplier portals, onboarding checklists and ESG questionnaires,
              making it easy for SMEs to answer CO₂e requests without extra tools or expertise.
            </p>
          </div>

          {/* BLOCK 3 – REPRODUCIBILITY */}
          <div className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            <svg className="h-12 w-12 text-[#0B3A63] dark:text-gray-300 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v4H3V3zm0 7h18v11H3V10zm6 3h6" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Consistent every time
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Deterministic spend-based calculation with version-controlled emission factors ensures
              reproducible results for internal comparison and screening — without audit claims.
            </p>
          </div>

        </div>

        <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          Already used by SMEs across Europe to answer CO₂e information requests quickly and professionally.
        </p>

      </div>
    </section>
  );
      }
