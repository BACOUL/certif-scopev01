"use client";

export default function Section5() {
  return (
    <section
      id="s5"
      className="scroll-mt-24 py-24 border-b border-slate-200 dark:border-slate-700"
    >

      {/* TITLE */}
      <div className="mb-14">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-6">
          Use Cases
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
          Certif-Scope is designed for real operational needs across procurement, banking,
          compliance, insurance, grant applications, supplier onboarding and B2B partnerships.
          The standardized format ensures immediate compatibility with institutional workflows
          and reduces the risk of rejection or manual review delays.
        </p>
      </div>

      {/* PREMIUM BUBBLE GRID STYLE — DIFFERENT FROM OTHER SECTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">

        {/* USE CASE 1 */}
        <div className="p-10 bg-gradient-to-br from-[#EAF3FA] to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            Supplier Onboarding
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Procurement departments increasingly require CO₂ transparency before onboarding
            new suppliers. Certif-Scope provides an instant attestation that fits directly
            into due-diligence and vendor approval workflows.
          </p>
        </div>

        {/* USE CASE 2 */}
        <div className="p-10 bg-gradient-to-br from-[#EAF3FA] to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            Banking & Loan Applications
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Financial institutions assess environmental indicators for risk evaluation.
            Certif-Scope provides a standardized, verifiable CO₂ footprint accepted in
            loan processes and financing eligibility checks.
          </p>
        </div>

        {/* USE CASE 3 */}
        <div className="p-10 bg-gradient-to-br from-[#EAF3FA] to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            Insurance Risk Assessment
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Insurers increasingly use environmental metrics to evaluate risk categories.
            Certif-Scope provides a traceable PDF that can be independently verified
            without requiring additional documentation.
          </p>
        </div>

        {/* USE CASE 4 */}
        <div className="p-10 bg-gradient-to-br from-[#EAF3FA] to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            Grant Applications & Public Funding
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Many European funding programs require environmental disclosure. Certif-Scope
            provides a fast and compliant attestation that can be attached to applications
            without consultant involvement.
          </p>
        </div>

      </div>

      {/* DARK FULL-WIDTH STRIP WITH ICONLIST */}
      <div className="w-full bg-[#0B3A63] text-white rounded-3xl p-12 shadow-xl mb-20">

        <h3 className="text-2xl font-bold mb-6">
          Additional Professional Use Cases
        </h3>

        <ul className="space-y-4 text-white/80 text-sm leading-relaxed max-w-4xl">
          <li>• Export compliance checks for international procurement workflows</li>
          <li>• ESG scoring and automated supplier ranking systems</li>
          <li>• Internal company reporting for annual sustainability reports</li>
          <li>• Risk and compliance reviews for mergers and acquisitions (M&A)</li>
          <li>• Marketplace vendor validation where CO₂ indicators are required</li>
        </ul>
      </div>

      {/* 3-COLUMN “INDUSTRY SNAPSHOTS” — VISUAL DIFFERENCE */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">

        {/* INDUSTRY BOX 1 */}
        <div className="p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">Manufacturing</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Quick CO₂ disclosure used in subcontracting and industrial supply chains.
          </p>
        </div>

        {/* INDUSTRY BOX 2 */}
        <div className="p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">Tech & SaaS</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Procurement compliance for cloud providers, digital platforms and IT services.
          </p>
        </div>

        {/* INDUSTRY BOX 3 */}
        <div className="p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">Construction</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            On-site contractors must provide CO₂ documentation to meet regulatory standards.
          </p>
        </div>

      </div>

      {/* DISCREET RETURN BUTTON */}
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
