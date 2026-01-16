export default function Features() {
  return (
    <section
      id="features"
      data-section="features"
      className="py-24 bg-[#F8FAFC] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2
          data-i18n="features.title"
          className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]"
        >
          What You Receive in the CO₂e Attestation
        </h2>

        {/* INTRO */}
        <p
          data-i18n="features.intro"
          className="text-center mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          A standardized CO₂e Attestation structured for procurement, banking, insurer and ESG
          screening workflows. Each document follows a reproducible format based entirely on
          declared annual spending (€).
        </p>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14" />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* SUMMARY PAGE */}
          <div className="flex items-start gap-5" data-i18n="features.summary">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">Summary sheet</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Total CO₂e indicator, reference year, boundary definition and core metadata in a
                uniform audit-friendly layout enabling fast institutional review.
              </p>
            </div>
          </div>

          {/* METHODOLOGY OVERVIEW */}
          <div className="flex items-start gap-5" data-i18n="features.methodology">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">Methodology overview</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Transparent explanation of the spend-based formula, including category allocation
                rules, deterministic calculation steps and boundaries aligned with Scope 3 Category 1.
              </p>
            </div>
          </div>

          {/* EMISSION FACTOR SOURCES */}
          <div className="flex items-start gap-5" data-i18n="features.sources">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">Emission factor sources</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Full traceability of emission factors with version, dataset year and source alignment
                (ADEME, DEFRA, IPCC), ensuring reproducibility and institutional acceptance.
              </p>
            </div>
          </div>

          {/* VERIFICATION & INTEGRITY */}
          <div className="flex items-start gap-5" data-i18n="features.verification">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">Verification & integrity block</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Includes deterministic integrity hash, timestamp, verification ID and offline validation
                instructions — no stored data, no backend lookup, GDPR-safe by design.
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
          Indicative spend-based estimate. Not CSRD/ESRS compliant and not a substitute for an audited
          emissions inventory. Accuracy depends entirely on user-provided financial inputs.
        </p>

      </div>
    </section>
  );
            }
