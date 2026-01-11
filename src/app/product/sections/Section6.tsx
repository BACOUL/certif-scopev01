"use client";

export default function Section6() {
  return (
    <section
      id="s6"
      className="scroll-mt-24 py-24 border-b border-slate-200 dark:border-slate-700"
    >

      {/* TITLE */}
      <div className="mb-14">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-6">
          How It Works
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
          Certif-Scope transforms complex environmental reporting requirements into a fast,
          automated and verifiable process. No consultants, no multi-week delays, no ESG expertise
          required. The entire workflow is designed for accuracy, transparency, and institutional
          compatibility.
        </p>
      </div>

      {/* STEP-BY-STEP TIMELINE — PREMIUM DESIGN */}
      <div className="relative border-l-4 border-[#0B3A63] dark:border-[#0B3A63] pl-8 space-y-16 mb-20">

        {/* STEP 1 */}
        <div>
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-2">
            1. Enter your financial activity
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl">
            The process begins by entering or importing your activity data (annual expenses,
            business category, operational profile). No sensitive personal data is required.
          </p>
        </div>

        {/* STEP 2 */}
        <div>
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-2">
            2. Automated calculations using emission factors
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl">
            Certif-Scope applies standardized emission factors used in spend-based carbon
            assessments, referencing recognized databases to ensure methodological consistency.
          </p>
        </div>

        {/* STEP 3 */}
        <div>
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-2">
            3. Generation of a structured CO₂ attestation
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl">
            The output is a clean, institution-ready PDF containing identity details, methodology
            summary, emission factors, estimated footprint values and disclosure statements.
          </p>
        </div>

        {/* STEP 4 */}
        <div>
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-2">
            4. Cryptographic verification hash is embedded
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl">
            Every attestation includes a verification identifier and hash so that banks, insurers
            and partners can authenticate the document independently, with no need to contact you.
          </p>
        </div>

        {/* STEP 5 */}
        <div>
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-2">
            5. Share instantly with stakeholders
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl">
            The final document can be shared directly with buyers, financial institutions,
            regulatory bodies or uploaded into procurement portals ― with immediate acceptance.
          </p>
        </div>
      </div>

      {/* DARK HIGHLIGHT BOX — DIFFERENT STYLE */}
      <div className="w-full bg-[#0B3A63] text-white rounded-3xl p-12 shadow-xl mb-20">

        <h3 className="text-2xl font-bold mb-6">Technical Workflow Overview</h3>

        <ul className="space-y-4 text-white/80 text-sm leading-relaxed max-w-4xl">
          <li>• Client-side preprocessing ensures sensitive data stays local</li>
          <li>• Calculation engine matches activity categories to emission factors</li>
          <li>• PDF rendering uses standardized structure aligned with procurement templates</li>
          <li>• Verification hash is generated during PDF creation, not stored server-side</li>
          <li>• Document can be validated offline through the cryptographic signature chain</li>
        </ul>

      </div>

      {/* VISUAL WORKFLOW DIAGRAM ALTERNATIVE — DIFFERENT DESIGN */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">

        {/* CARD 1 */}
        <div className="p-8 text-center bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">Input</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Activity data, expense categories, operational information.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-8 text-center bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">Processing</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Automated matching with verified emission factors and methodology rules.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-8 text-center bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">Output</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            A standardized, verifiable PDF attestation ready for institutional usage.
          </p>
        </div>
      </div>

      {/* DISCREET BACK TO SUMMARY BUTTON */}
      <div className="mt-12">
        <a
          href="#top"
          className="text-[#0B3A63] text-sm underline opacity-70 hover:opacity-100 transition"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
