"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      className="scroll-mt-24 border-b border-slate-200 dark:border-slate-700 pb-20"
    >
      {/* TITLE */}
      <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-6">
        Product Overview
      </h2>

      {/* INTRO PARAGRAPH */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed mb-12">
        Certif-Scope enables small and medium enterprises to instantly generate
        a standardized, institution-ready CO₂ attestation. The document follows
        GHG Protocol principles and is accepted by procurement, banking,
        compliance, insurance and due-diligence teams across Europe. Every
        attestation includes a verifiable methodology summary and a cryptographic
        verification identifier allowing offline validation.
      </p>

      {/* PREMIUM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* CARD 1 */}
        <div className="p-8 bg-white dark:bg-gray-900 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Built for institutional workflows
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Structured exactly like the documentation reviewed by financial,
            procurement and compliance teams. Includes identity fields, scope
            indicators, emission factors, methodology summary, and verification data.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-8 bg-white dark:bg-gray-900 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Instant generation — under 30 seconds
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            No need for consultants or lengthy audits. Enter annual expenses, 
            validate categories, and download the fully formatted attestation immediately.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-8 bg-white dark:bg-gray-900 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Independently verifiable
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Each attestation includes a unique verification ID and cryptographic hash.
            A third-party auditor, bank or insurer can validate integrity without
            interacting with Certif-Scope servers.
          </p>
        </div>
      </div>

      {/* WHY SECTION */}
      <div className="mt-20 max-w-4xl">
        <h3 className="text-2xl font-bold text-[#0B3A63] mb-6">
          Why this product exists
        </h3>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          European procurement processes, financial institutions and compliance
          departments increasingly require standardized CO₂ indicators during
          onboarding, risk assessment or funding evaluation. Most SMEs lack the
          internal resources to produce an audit-ready environmental analysis.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Traditional ESG reporting is slow, expensive and fragmented. Certif-Scope
          solves this by providing a fast, structured and universally verifiable
          attestation aligned with institutional expectations. No manual reporting,
          no consultancy, no delays.
        </p>

        <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <li>• Growing demand for CO₂ transparency in B2B workflows</li>
          <li>• Banks integrate CO₂ metrics into risk-assessment models</li>
          <li>• Procurement imposes mandatory environmental disclosure</li>
          <li>• ESG checklists require standardized and verifiable data</li>
          <li>• SMEs lack time and budget for traditional carbon audits</li>
        </ul>
      </div>

      {/* PREMIUM BACK BUTTON */}
      <div className="mt-16 flex">
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
