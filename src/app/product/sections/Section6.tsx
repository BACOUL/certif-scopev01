export default function Section6() {
  return (
    <section
      id="s6"
      className="scroll-mt-24 py-28 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
    >

      {/* SECTION HEADER */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-20">
        <h2 className="text-4xl font-extrabold text-[#0B3A63]">
          How Certif-Scope Works
        </h2>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          The process is designed to be fast, secure and standardized. Each step is fully automated,
          requiring no consultancy, no manual spreadsheets and no follow-up validation.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="max-w-5xl mx-auto px-6">

        <div className="relative border-l-4 border-[#47B39C] dark:border-[#47B39C] pl-10 space-y-20">

          {/* STEP 1 */}
          <div className="relative">
            <div className="absolute -left-6 top-0 bg-[#47B39C] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow">
              1
            </div>
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
              Provide Annual Expenses
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm max-w-2xl">
              The user enters their annual spending across the main categories defined by
              the GHG Protocol. This allows Certif-Scope to apply validated emission factors
              without requiring detailed operational data.
            </p>
            <ul className="mt-4 text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• No document uploads</li>
              <li>• No accountant involvement required</li>
              <li>• Clear input categories for SMEs</li>
            </ul>
          </div>

          {/* STEP 2 */}
          <div className="relative">
            <div className="absolute -left-6 top-0 bg-[#47B39C] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow">
              2
            </div>
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
              Instant Emissions Estimation
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm max-w-2xl">
              Once expense data is submitted, Certif-Scope automatically calculates the estimated
              CO₂ footprint using widely recognized emission factors (e.g., ADEME, DEFRA, EPA).
            </p>
            <ul className="mt-4 text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Automated calculations</li>
              <li>• Standardized methodology</li>
              <li>• Scope 1 / 2 / 3 consolidated result</li>
            </ul>
          </div>

          {/* STEP 3 */}
          <div className="relative">
            <div className="absolute -left-6 top-0 bg-[#47B39C] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow">
              3
            </div>
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
              Generate Verified CO₂ Attestation
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm max-w-2xl">
              Certif-Scope immediately produces a formal PDF attestation including a verification ID,
              structured results, methodology summary, and cryptographic hash of the document.
            </p>
            <ul className="mt-4 text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Professional-grade layout</li>
              <li>• Ready for procurement and banking workflows</li>
              <li>• Hash-secured integrity reference</li>
            </ul>
          </div>

          {/* STEP 4 */}
          <div className="relative">
            <div className="absolute -left-6 top-0 bg-[#47B39C] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow">
              4
            </div>
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
              Independent Verification
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm max-w-2xl">
              Third parties can verify the authenticity of the attestation using the verification ID
              and cryptographic hash without needing to contact Certif-Scope or submit any sensitive data.
            </p>
            <ul className="mt-4 text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Total independence from Certif-Scope systems</li>
              <li>• Offline validation possible</li>
              <li>• Trusted by procurement and financial institutions</li>
            </ul>
          </div>

        </div>
      </div>

      {/* RETURN BUTTON */}
      <div className="text-center mt-20">
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
