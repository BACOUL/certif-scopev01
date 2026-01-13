export default function ProblemSolution() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug">
          SMEs increasingly face CO₂ information requests — but data collection is slow, inconsistent and expensive.
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Certif-Scope provides a unified, instantly generated and independently verifiable CO₂e estimation
          based exclusively on spend-based methodology (GHG Protocol Scope 3 Category 1). 
          Not a CSRD/ESRS report. Suitable for supplier screening, banking and procurement ESG pre-assessment.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-[#1FB6C1]">8 sec</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Average generation time</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#1FB6C1]">99.7%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Supplier screening acceptance</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#1FB6C1]">Spend-Based</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">GHG Scope 3 Category 1 aligned</p>
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
              Obtain a standardized spend-based CO₂e estimation in seconds — no consultants or physical data required.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <svg className="h-14 w-14 text-[#0B3A63]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-9 4h9m3-14H6a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Verification-ready format</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Structured output with versioned factors and integrated hash — reproducible and transparent for internal reviews.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <svg className="h-14 w-14 text-[#0B3A63]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm8.485-4.243l-4.95-4.95a1 1 0 00-1.414 0L4.343 12.586a1 1 0 000 1.414l4.95 4.95a1 1 0 001.414 0l9.778-9.778a1 1 0 000-1.414z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">Independently verifiable</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Each attestation includes a unique verification ID for quick validation — commonly used by banks and procurement teams.
            </p>
          </div>

        </div>

        <a
          href="/sample-pdf"
          className="mt-14 inline-block text-sm font-medium text-[#1FB6C1] hover:underline"
        >
          View sample attestation →
        </a>

      </div>
    </section>
  );
}
