export default function Trust() {
  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-3">
          Used in screening workflows
        </p>

        <div className="w-16 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mb-10"></div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
          Trusted for procurement, onboarding and ESG pre-assessment
        </h2>

        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-16">
          Certif-Scope provides independently verifiable, spend-based CO₂e estimations suitable for supplier onboarding, 
          procurement documentation and internal ESG reviews. Not a regulatory report.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            <svg className="h-12 w-12 text-[#0B3A63] dark:text-gray-300 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Independent Verification</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Each attestation embeds a tamper-proof verification ID allowing offline integrity checks without relying on Certif-Scope.
            </p>
          </div>

          <div className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            <svg className="h-12 w-12 text-[#0B3A63] dark:text-gray-300 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Enterprise Compatibility</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Structured indicators designed to fit vendor onboarding, procurement documentation and internal ESG processes.
            </p>
          </div>

          <div className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            <svg className="h-12 w-12 text-[#0B3A63] dark:text-gray-300 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v4H3V3zm0 7h18v11H3V10zm6 3h6" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Structured & Reproducible</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Versioned emission factors and deterministic calculation ensure consistent, reproducible output for long-term documentation.
            </p>
          </div>

        </div>

        <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          Commonly used in procurement and ESG pre-assessment workflows across Europe.
        </p>

      </div>
    </section>
  );
}
