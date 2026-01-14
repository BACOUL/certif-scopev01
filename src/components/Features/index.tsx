export default function Features() {
  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE — H2 unique */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]">
          What You Receive in the CO₂e Attestation
        </h2>

        {/* INTRO — simple, unique, non répétitif */}
        <p className="text-center mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          A structured spend-based CO₂e Attestation designed for procurement, financial
          and ESG screening workflows. Each document follows the same standardized format
          across all suppliers.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14" />

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* FEATURE 1 — SUMMARY PAGE */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg 
                className="w-7 h-7" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
                role="img"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Summary sheet (CO₂e total)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Clear presentation of total CO₂e value, reference year, input boundaries,
                and document metadata, formatted for quick institutional review.
              </p>
            </div>
          </div>

          {/* FEATURE 2 — METHODOLOGY */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg 
                className="w-7 h-7" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
                role="img"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Methodology overview
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Spend-based formula, category mapping and boundary definitions presented
                in a straightforward, audit-compatible structure for reviewers.
              </p>
            </div>
          </div>

          {/* FEATURE 3 — DATA SOURCES */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg 
                className="w-7 h-7" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
                role="img"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Emission factor references
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Clear list of datasets used (ADEME, DEFRA, IPCC or equivalents),
                including version, reference year and category alignment for traceability.
              </p>
            </div>
          </div>

          {/* FEATURE 4 — VERIFICATION */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg 
                className="w-7 h-7" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
                role="img"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Verification & integrity block
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Includes verification ID, deterministic input hash, timestamp,
                and instructions for independent validation — no login or backend required.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
              }
