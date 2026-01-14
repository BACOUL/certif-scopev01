export default function Features() {
  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]">
          What You Get with Certif-Scope
        </h2>

        {/* INTRO */}
        <p className="text-center mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed text-lg">
          A clear, structured CO₂e Attestation designed for procurement, banking and ESG screening.
          The document follows a consistent formatting standard across all suppliers.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14" />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* FEATURE 1 — SUMMARY PAGE */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Summary page (CO₂e total)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">
                Clear presentation of the calculated CO₂e total based on annual spending (€),
                with date, scope boundaries and a standardized layout for reviewers.
              </p>
            </div>
          </div>

          {/* FEATURE 2 — METHODOLOGY BLOCK */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Methodology breakdown
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">
                Clear explanation of the spend-based approach, calculation formula, 
                factors used and limits of the model — written in a format procurement teams understand.
              </p>
            </div>
          </div>

          {/* FEATURE 3 — EMISSION FACTOR SOURCES */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Emission factor sources
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">
                List of emission factor datasets used (ADEME, DEFRA, IPCC or equivalents),
                including reference year and category mapping.
              </p>
            </div>
          </div>

          {/* FEATURE 4 — VERIFICATION DETAILS */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Verification & integrity block
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">
                Unique verification ID, deterministic hash of input data, timestamp, 
                and instructions for external verification — no login required.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
            }
