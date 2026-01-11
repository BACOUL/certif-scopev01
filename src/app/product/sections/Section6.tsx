export default function Section6() {
  return (
    <section id="s6" className="scroll-mt-24">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B3A63] mb-10">
        How It Works
      </h2>

      {/* INTRO PARAGRAPH */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed mb-16">
        Certif-Scope transforms a complex carbon estimation process into a simple 
        and automated workflow. Each attestation is generated using standardized 
        emission factors, rigorous calculations and a cryptographic verification 
        system that ensures full integrity and long-term validity. The result is 
        an institutional-ready document produced in seconds.
      </p>

      {/* 3-STEP PROCESS — HORIZONTAL ON DESKTOP, VERTICAL ON MOBILE */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">

        {/* STEP 1 */}
        <div className="relative p-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg">
          <div className="absolute -top-4 -left-4 bg-[#0B3A63] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow">
            1
          </div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">Enter Business Activity</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Input annual expenses or operational activity values. The system applies 
            emission factors corresponding to your sector to produce accurate estimates.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="relative p-10 bg-[#0B3A63]/5 dark:bg-[#0B3A63]/20 border border-[#0B3A63]/20 rounded-2xl shadow-sm">
          <div className="absolute -top-4 -left-4 bg-[#0B3A63] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow">
            2
          </div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">Automatic CO₂ Calculation</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Certif-Scope processes the data using a verified spend-based methodology 
            aligned with GHG Protocol guidelines. Results are standardized and ready 
            for institutional evaluation.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="relative p-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg">
          <div className="absolute -top-4 -left-4 bg-[#0B3A63] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow">
            3
          </div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">Instant Verified Attestation</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            A cryptographically signed PDF is generated with a verification ID 
            allowing banks, insurers, auditors or partners to validate it independently.
          </p>
        </div>

      </div>

      {/* FULL WIDTH TECH DIAGRAM STYLE BLOCK */}
      <div className="bg-[#0B3A63]/10 dark:bg-[#0B3A63]/30 py-16 px-10 rounded-2xl shadow-inner">
        <h3 className="text-2xl md:text-3xl font-bold text-[#0B3A63] mb-6">
          Technical Process Overview
        </h3>

        <p className="text-gray-700 dark:text-gray-200 max-w-3xl text-sm mb-10 leading-relaxed">
          Behind the simplified interface, Certif-Scope relies on a structured and 
          auditable processing pipeline built for institutional acceptance. Data is 
          normalized, processed, calculated and signed using standardized procedures.
        </p>

        {/* TECH PIPELINE DIAGRAM */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-[#0B3A63] mb-2">1. Input Validation</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Business data is checked for format consistency.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-[#0B3A63] mb-2">2. Mapping & Factors</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Appropriate sector emission factors are automatically selected.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-[#0B3A63] mb-2">3. Computation Engine</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              CO₂ values are calculated using verified formulas.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-[#0B3A63] mb-2">4. PDF & Signature</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              PDF exported with unique verification hash & ID.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
          }
