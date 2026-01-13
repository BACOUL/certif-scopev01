export default function ProblemSolution() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug">
          SMEs increasingly face CO₂ information requests — but data collection is slow, inconsistent and expensive.
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Certif-Scope provides an instantly generated, standardized and integrity-verifiable CO₂e estimation
          based exclusively on spend-based methodology. Uses financial spending (€) only — no physical activity data.
          Indicative estimation, not a CSRD/ESRS report and not an audited Scope 1/2/3 inventory. Designed for
          supplier screening and financial ESG pre-assessment contexts.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-[#1FB6C1]">8 sec</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Average generation time</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#1FB6C1]">High fit</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Commonly accepted for screening</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#1FB6C1]">Spend-Based</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Financial-only input</p>
          </div>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          <div className="flex flex-col items-center gap-4">
            <svg className="h-14 w-14 text-[#0B3A63]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Immediate generation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Obtain a spend-based CO₂e estimation in seconds — fully automated. No physical activity data,
              no consultants, no questionnaires.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <svg className="h-14 w-14 text-[#0B3A63]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-9 4h9m3-14H6a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Verification-ready format</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Structured output with version-controlled emission factors and deterministic calculation.
              Enables consistent reproduction for internal checks.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <svg className="h-14 w-14 text-[#0B3A63]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm8.485-4.243l-4.95-4.95a1 1 0 00-1.414 0L4.343 12.586a1 1 0 000 1.414l4.95 4.95a1 1 0 001.414 0l9.778-9.778a1 1 0 000-1.414z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Integrity-verifiable</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Includes a unique verification ID and a cryptographic integrity hash. Enables independent validation
              without external databases. Suitable for supplier screening and financial pre-assessment workflows.
            </p>
          </div>

        </div>

        <a
          href="/sample-pdf"
          className="mt-14 inline-block text-sm font-medium text-[#1FB6C1] hover:underline"
        >
          View sample document →
        </a>

      </div>
    </section>
  );
}
