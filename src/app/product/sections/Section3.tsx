"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      className="scroll-mt-24 border-b border-slate-200 dark:border-slate-700 pb-24 pt-10"
    >
      {/* TITLE AREA */}
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-6">
          Why the Product Exists
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
          Certif-Scope was created to solve a real, rapidly growing demand:
          institutions across Europe now require standardized, verifiable CO₂ indicators
          before approving suppliers, funding applications, or compliance onboarding.
          Most SMEs lack the time, resources and technical expertise to produce
          environmental documentation at an institutional level.
        </p>
      </div>

      {/* PREMIUM VISUAL BLOCK — DARK CARDS STRIP */}
      <div className="bg-[#0B3A63] text-white rounded-3xl p-12 shadow-xl mb-16">
        <h3 className="text-2xl font-semibold mb-4">
          The gap between institutional requirements and SME capabilities
        </h3>
        <p className="text-white/80 text-sm leading-relaxed max-w-3xl">
          Environmental indicators have become mandatory in procurement, due-diligence,
          audits, and financing workflows — but existing solutions are slow, expensive,
          consultant-driven and inaccessible to smaller companies.
          Certif-Scope closes this gap with instant automation.
        </p>
      </div>

      {/* PROBLEM GRID OVERVIEW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

        {/* PROBLEM 1 */}
        <div className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            SMEs lack ESG expertise
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Most small businesses do not have an ESG department or dedicated resources
            to navigate environmental reporting frameworks, emission factors or standards.
          </p>
        </div>

        {/* PROBLEM 2 */}
        <div className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Procurement complexity increases
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Buyers, marketplaces and institutions increasingly require transparent CO₂ data
            for onboarding suppliers — rejecting non-standard or unverifiable documents.
          </p>
        </div>

        {/* PROBLEM 3 */}
        <div className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Traditional audits are slow & expensive
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Carbon audits can take weeks and cost thousands, involving consultants,
            manual spreadsheets and long validation cycles — impractical for SMEs.
          </p>
        </div>

      </div>

      {/* SECOND BLOCK — DIFFERENT DESIGN STYLE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT COLUMN: TEXT */}
        <div>
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-6">
            Institutions now require verifiable CO₂ data
          </h3>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            <li>• Banks use emissions indicators for risk analysis and loan approvals.</li>
            <li>• Procurement departments demand transparent and standardized reporting.</li>
            <li>• Marketplaces require compliance documentation before onboarding suppliers.</li>
            <li>• Investors and partners request verified environmental performance data.</li>
          </ul>
        </div>

        {/* RIGHT COLUMN: INFO PANEL */}
        <div className="bg-[#f0f6fb] dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-slate-200 dark:border-gray-700">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-4">
            Why existing tools fail SMEs
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Legacy ESG tools assume large internal teams, long onboarding processes
            and manual input of dozens of data points.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Certif-Scope provides a radically simpler alternative: instant attestation,
            automated emission factors, fully standardized structure and independent verification.
          </p>
        </div>

      </div>

      {/* BACK BUTTON — DISCREET & CONSISTENT */}
      <div className="mt-20">
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
