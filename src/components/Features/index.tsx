export default function Features() {
  return (
    <section
      id="features"
      data-section="features"
      className="py-24 bg-[#F8FAFC] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE — H2 unique */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]"
          data-i18n="features.title"
        >
          What You Receive in the CO₂e Attestation
        </h2>

        {/* INTRO — unique et non répétitif */}
        <p
          className="text-center mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed"
          data-i18n="features.intro"
        >
          A standardized spend-based CO₂e Attestation designed for procurement, banking and ESG
          screening. Each document follows a reproducible structure aligned with institutional
          review requirements.
        </p>

        {/* SEPARATOR */}
        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14" />

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* FEATURE 1 — SUMMARY PAGE */}
          <div className="flex items-start gap-5" data-i18n="features.summary">
            <div
              className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0"
              aria-hidden="true"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Summary icon"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Summary sheet (CO₂e total)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Total CO₂e indicator, reference year, boundary definition and metadata presented
                in a uniform, institution-friendly layout enabling rapid evaluation.
              </p>
            </div>
          </div>

          {/* FEATURE 2 — METHODOLOGY BLOCK */}
          <div className="flex items-start gap-5" data-i18n="features.methodology">
            <div
              className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0"
              aria-hidden="true"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-label="Methodology icon"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Methodology overview
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Clear explanation of the spend-based formula, category mapping rules, boundaries
                and estimation logic. Fully aligned with procurement and ESG screening practices.
              </p>
            </div>
          </div>

          {/* FEATURE 3 — EMISSION FACTOR REFERENCES */}
          <div className="flex items-start gap-5" data-i18n="features.sources">
            <div
              className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0"
              aria-hidden="true"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-label="Data source icon"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Emission factor references
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Full traceability: dataset names, source year, version and category alignment
                (ADEME, DEFRA, IPCC or equivalent), enabling reproducible institutional reviews.
              </p>
            </div>
          </div>

          {/* FEATURE 4 — VERIFICATION BLOCK */}
          <div className="flex items-start gap-5" data-i18n="features.verification">
            <div
              className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0"
              aria-hidden="true"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-label="Verification icon"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Verification & integrity block
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Includes verification ID, deterministic input hash, timestamp and validation
                instructions. Can be checked offline without accounts, servers or stored data.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
      }
