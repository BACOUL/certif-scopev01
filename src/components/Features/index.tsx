export default function Features() {
  return (
    <section
      id="features"
      data-section="features"
      className="pt-24 pb-24 bg-[#F8FAFC] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADER — CANONICAL HOME */}
        <header className="max-w-3xl mx-auto text-center mb-20">
          <p
            className="uppercase text-xs tracking-wider text-[#64748B] mb-3"
            data-i18n="features.label"
          >
            CO₂e Attestation — Contents
          </p>

          <h2
            data-i18n="features.title"
            className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4"
          >
            What the CO₂e Attestation Includes
          </h2>

          <p
            data-i18n="features.intro"
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            A standardized, indicative CO₂e attestation designed for procurement, banking,
            insurance and ESG screening contexts. Each document follows a fixed, reproducible
            structure derived exclusively from declared annual spending (€).
          </p>

          <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mt-10" />
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* SUMMARY PAGE */}
          <div className="flex items-start gap-5" data-i18n="features.summary">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Summary sheet
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Aggregated CO₂e result, reference year, methodological perimeter and essential
                metadata presented in a uniform, review-ready layout suitable for institutional
                screening and comparison.
              </p>
            </div>
          </div>

          {/* METHODOLOGY OVERVIEW */}
          <div className="flex items-start gap-5" data-i18n="features.methodology">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Methodology overview
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                High-level description of the spend-based approach applied, including scope,
                assumptions and references. Detailed calculation logic and technical definitions
                are documented separately.
              </p>
            </div>
          </div>

          {/* EMISSION FACTOR SOURCES */}
          <div className="flex items-start gap-5" data-i18n="features.sources">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Emission factor sources
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Referenced emission factor sources with dataset versioning and publication year
                (ADEME, DEFRA, IPCC), enabling transparency, reproducibility and institutional
                acceptance.
              </p>
            </div>
          </div>

          {/* VERIFICATION & INTEGRITY */}
          <div className="flex items-start gap-5" data-i18n="features.verification">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Verification & integrity block
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Built-in verification elements allow independent third-party validation of
                authenticity and integrity without platform dependency or data retention.
                No financial input data is stored or transmitted.
              </p>
            </div>
          </div>

        </div>

        {/* INTERNAL LINK */}
        <div className="text-center mt-14">
          <a
            href="/product/methodology"
            data-i18n="features.link.methodology"
            className="text-[#0B3A63] dark:text-gray-300 underline text-sm hover:text-[#1FB6C1]"
          >
            See full methodology →
          </a>
        </div>

        {/* DISCLAIMER */}
        <p
          data-i18n="features.disclaimer"
          className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
        >
          Indicative spend-based estimate. Not CSRD/ESRS compliant and not a substitute for a
          verified or audited greenhouse gas inventory. Results depend entirely on
          user-provided financial inputs.
        </p>

      </div>
    </section>
  );
}
