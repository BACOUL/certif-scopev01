"use client";

export default function Section10() {
  return (
    <section id="s10" className="scroll-mt-24">

      {/* HEADER */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Data Sources & Methodology
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Certif-Scope relies on internationally recognized data sources and standardized
          emission factors to compute a consistent and verifiable CO₂ footprint estimation.
          The methodology is aligned with best practices from the GHG Protocol, ADEME,
          DEFRA and other institutional frameworks.
        </p>
      </div>

      {/* METHODOLOGY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

        {/* LEFT SIDE — SOURCES CARD */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">

          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-6">
            Official Emission Factor Sources
          </h3>

          <ul className="space-y-5 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">

            <li>
              <strong className="text-[#0B3A63]">GHG Protocol — Spend-Based Factors</strong><br />
              Primary international framework used by corporations and financial institutions.
              <br />
              <a
                href="https://ghgprotocol.org"
                target="_blank"
                className="text-blue-600 underline"
              >
                ghgprotocol.org
              </a>
            </li>

            <li>
              <strong className="text-[#0B3A63]">ADEME Base Carbone®</strong><br />
              France’s official emission factor database, publicly verifiable and maintained.
              <br />
              <a
                href="https://www.bilans-ges.ademe.fr"
                target="_blank"
                className="text-blue-600 underline"
              >
                bilans-ges.ademe.fr
              </a>
            </li>

            <li>
              <strong className="text-[#0B3A63]">DEFRA UK Factors</strong><br />
              Widely used for European cross-sector calculations and procurement reporting.
              <br />
              <a
                href="https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting"
                target="_blank"
                className="text-blue-600 underline"
              >
                gov.uk – conversion factors
              </a>
            </li>

            <li>
              <strong className="text-[#0B3A63]">Ecoinvent (Referential Correlation)</strong><br />
              Used to cross-validate industrial activity intensities when relevant.
              <br />
              <span className="text-gray-500">(correlation-based, not redistributed)</span>
            </li>
          </ul>

        </div>

        {/* RIGHT SIDE — METHODOLOGY BREAKDOWN */}
        <div className="space-y-10">

          <div className="bg-[#F8FAFC] dark:bg-[#0C1A2C] rounded-xl border border-gray-200 dark:border-gray-800 p-8">
            <h3 className="text-xl font-bold text-[#0B3A63] mb-4">
              Calculation Model
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Certif-Scope applies a spend-based estimation model in accordance with GHG Protocol indications:
            </p>

            <pre className="mt-4 p-4 bg-gray-900 text-gray-100 rounded-lg text-xs overflow-x-auto">
              Total CO₂e = Σ (Expense Category × Emission Factor)
            </pre>
          </div>

          <div className="bg-[#F8FAFC] dark:bg-[#0C1A2C] rounded-xl border border-gray-200 dark:border-gray-800 p-8">
            <h3 className="text-xl font-bold text-[#0B3A63] mb-4">
              Emission Factors Update Cycle
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <li>• Annual review of factors (GHG Protocol, ADEME, DEFRA)</li>
              <li>• Quarterly consistency checks</li>
              <li>• Immediate update when a source publishes revised values</li>
              <li>• Full versioning of factor sets for traceability</li>
            </ul>
          </div>

          <div className="bg-[#F8FAFC] dark:bg-[#0C1A2C] rounded-xl border border-gray-200 dark:border-gray-800 p-8">
            <h3 className="text-xl font-bold text-[#0B3A63] mb-4">
              Transparency & Reproducibility
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Every attestation includes a complete appendix listing:
            </p>
            <ul className="mt-2 space-y-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <li>• Emission factors used per category</li>
              <li>• Original source reference</li>
              <li>• Year/version of data</li>
              <li>• Formula breakdown for each category</li>
              <li>• Total vs. category subtotal disclosures</li>
            </ul>
          </div>
        </div>
      </div>

      {/* DATA VALIDATION STRIP */}
      <div className="mt-20 py-10 px-6 bg-[#EBF7F3] dark:bg-[#0F2B22] rounded-xl border border-green-200 dark:border-green-800 shadow-sm">

        <h3 className="text-xl font-bold text-[#0B3A63] mb-4">
          Institutional Data Validation Standards
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-4xl leading-relaxed">
          All referenced emission factors originate from recognized international frameworks. Certif-Scope
          does not invent or modify emission factors: they are sourced, documented, versioned and traceable.
          Each attestation embeds its factor set version for fully auditable historical comparison.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-16 flex justify-center">
        <a
          href="/methodology"
          className="px-8 py-4 bg-[#0B3A63] text-white font-semibold rounded-lg shadow hover:bg-[#09405d] transition"
        >
          View Full Methodology Documentation
        </a>
      </div>

    </section>
  );
          }
