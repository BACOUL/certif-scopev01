export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0B3A63]">
          Key Capabilities
        </h2>

        {/* SUBTEXT */}
        <p className="text-center mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Designed for procurement, banking and compliance workflows — providing a standardized, instant carbon attestation ready for institutional use.
        </p>

        {/* SEPARATOR */}
        <div className="w-20 h-[2px] bg-gray-200 mx-auto my-12"></div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* FEATURE 1 */}
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Standardized Output
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">
                Attestation formatted according to institutional requirements for audit, procurement and reporting workflows.
              </p>
            </div>
          </div>

          {/* FEATURE 2 */}
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2A10 10 0 112 12a10 10 0 0120 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Instant Generation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">
                CO₂ estimation and PDF attestation generated in seconds — no waiting, no processing delays.
              </p>
            </div>
          </div>

          {/* FEATURE 3 */}
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                GHG Protocol Logic
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">
                Methodological approach aligned with commonly accepted principles to ensure consistent and reliable estimations.
              </p>
            </div>
          </div>

          {/* FEATURE 4 */}
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Verifiable Identifier
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">
                Each attestation includes a unique verification ID for cross-checking and due diligence processes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
