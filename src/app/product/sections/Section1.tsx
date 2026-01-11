"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      className="scroll-mt-24 pt-6 pb-20 border-b border-gray-200 dark:border-gray-800"
    >
      {/* SECTION HEADER */}
      <div className="mb-10">
        <p className="uppercase tracking-wider text-sm font-semibold text-[#0B3A63]/70">
          Section 1
        </p>

        <h2 className="text-4xl font-extrabold text-[#0B3A63] mt-2">
          Product Overview
        </h2>

        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
          Certif-Scope provides SMEs with an instantly generated, 
          institution-ready CO₂ attestation aligned with procurement, 
          banking, compliance and ESG disclosure requirements. Designed to 
          pass institutional review, the document is standardized, verifiable, 
          and universally readable across European administrative and financial workflows.
        </p>
      </div>

      {/* PREMIUM FEATURE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

        {/* Card 1 */}
        <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
          <h3 className="text-[#0B3A63] text-xl font-semibold mb-3">
            Institutional Structure
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Mirrors the exact format used by procurement officers, 
            compliance reviewers and financial auditors: company ID, footprint, 
            methodology, emission factors and verification hash.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-8 rounded-2xl bg-[#E9F2FA] dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
          <h3 className="text-[#0B3A63] text-xl font-semibold mb-3">
            Instant Generation
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Automated in under 30 seconds. No consultants, no back-and-forth, 
            no ESG expertise required. Input expenses → receive a compliant PDF.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
          <h3 className="text-[#0B3A63] text-xl font-semibold mb-3">
            Independent Verification
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Includes a unique verification ID + cryptographic hash enabling  
            banks, insurers, partners or auditors to authenticate the document 
            without depending on Certif-Scope servers.
          </p>
        </div>

      </div>

      {/* SUBSECTION — WHY IT MATTERS */}
      <div className="mt-16 max-w-4xl">
        <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">Why it matters</h3>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Across Europe, organizations increasingly require standardized and 
          verifiable CO₂ indicators to complete procurement, risk analysis, 
          supplier onboarding and due diligence workflows. Certif-Scope fills 
          the compliance gap by delivering a structured, automated and proof-ready 
          attestation without the cost or complexity of traditional ESG audits.
        </p>

        <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm ml-3 list-disc">
          <li>Rapidly growing demand for CO₂ transparency in B2B workflows</li>
          <li>Financial institutions require carbon indicators for risk scoring</li>
          <li>Procurement frameworks impose environmental disclosure requirements</li>
          <li>ESG forms need consistent, standardized and readable data</li>
          <li>SMEs lack resources for full-scale carbon audits</li>
        </ul>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-16 flex justify-end">
        <a
          href="#top"
          className="text-sm text-[#0B3A63]/80 hover:text-[#0B3A63] underline underline-offset-4 transition-colors"
        >
          Return to summary
        </a>
      </div>
    </section>
  );
}
