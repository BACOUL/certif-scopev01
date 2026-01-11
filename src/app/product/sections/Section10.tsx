export default function Section10() {
  return (
    <section
      id="s10"
      className="scroll-mt-24 py-32 bg-white dark:bg-gray-900"
    >
      {/* HEADER */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl font-extrabold text-[#0B3A63]">
          Data Sources & Methodological Foundations
        </h2>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Certif-Scope relies on internationally recognized emission factor libraries and validated
          calculation models. Every dataset is publicly documented, version-controlled and traceable,
          ensuring transparency, repeatability and institutional acceptance.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT COLUMN — DATASET OVERVIEW */}
        <div className="lg:col-span-2 space-y-10">

          {/* BLOCK 1 */}
          <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-[#F8FAFC] dark:bg-gray-800 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
              Emission Factors Databases
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
              Certif-Scope uses standardised emission factor datasets aligned with the GHG Protocol.
              These sources provide sector-specific factors for energy, transport, materials, goods
              and services. Factors are updated regularly to reflect methodological improvements and
              changes in economic input-output models.
            </p>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex gap-2">
                <span className="block w-2 h-2 rounded-full bg-[#47B39C] mt-2"></span>
                <span><strong>ADEME Base Carbone®</strong> — France’s official emission factor database.</span>
              </li>

              <li className="flex gap-2">
                <span className="block w-2 h-2 rounded-full bg-[#47B39C] mt-2"></span>
                <span><strong>DEFRA / BEIS UK Factors</strong> — widely used in European compliance frameworks.</span>
              </li>

              <li className="flex gap-2">
                <span className="block w-2 h-2 rounded-full bg-[#47B39C] mt-2"></span>
                <span><strong>EEIO / Input-Output Models</strong> — spend-based macro-economic correlation models.</span>
              </li>
            </ul>
          </div>

          {/* BLOCK 2 */}
          <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
              Methodology Alignment
            </h3>

            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
              The calculation process follows the <strong>GHG Protocol Corporate Standard</strong>,
              specifically the spend-based and purchase-based estimation models. This allows SMEs to
              produce a reliable, comparable indicator without requiring granular physical data.
            </p>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>• GHG Protocol — Corporate Standard</li>
              <li>• GHG Protocol — Scope 3 Categories</li>
              <li>• ISO-14064 methodological alignment</li>
              <li>• European taxonomy ESG disclosure expectations</li>
            </ul>
          </div>

          {/* BLOCK 3 */}
          <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-[#F8FAFC] dark:bg-gray-800 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
              Calculation Structure
            </h3>

            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Emissions are estimated by multiplying financial expenditure by the corresponding
              sector-based emission factor. This enables rapid calculation while maintaining a stable
              correlation with recognised environmental reporting standards.
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN — VERSIONING PANEL */}
        <aside className="bg-[#0B3A63] text-white p-10 rounded-2xl shadow-xl">
          <h4 className="text-2xl font-bold mb-6">
            Versioning & Transparency
          </h4>

          <p className="text-sm text-white/90 leading-relaxed mb-8">
            All emission factors and calculation rules used by Certif-Scope are version-controlled.
            Each attestation includes a reference to the exact data version used, ensuring full audit
            traceability and backwards compatibility.
          </p>

          <div className="space-y-5 text-sm">
            <div>
              <span className="font-semibold">Current methodology version:</span><br />
              v1.0 — January 2026
            </div>

            <div>
              <span className="font-semibold">Public repository:</span><br />
              <a
                href="#"
                className="underline text-[#47B39C] hover:text-[#3d9c87]"
              >
                View methodology archive
              </a>
            </div>

            <div>
              <span className="font-semibold">Next update:</span><br />
              Q3 2026 — Data refresh + additional sector factors
            </div>
          </div>
        </aside>

      </div>

      {/* BACK TO SUMMARY */}
      <div className="text-center mt-24">
        <a
          href="#top"
          className="inline-block text-sm text-gray-500 hover:text-[#0B3A63] border border-gray-300 px-4 py-2 rounded-lg transition"
        >
          Back to summary ↑
        </a>
      </div>

    </section>
  );
}
