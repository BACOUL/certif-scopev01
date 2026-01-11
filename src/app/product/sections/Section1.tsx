"use client";

export default function Section1() {
  return (
    <section id="s1" className="scroll-mt-24">

      {/* HEADER */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-extrabold text-[#0B3A63]">
          Product Overview
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4">
          Certif-Scope provides an instant, standardized and verifiable CO₂ attestation
          built specifically for procurement, banking, compliance and institutional workflows.
          It removes manual ESG auditing complexity and replaces it with automation,
          transparency, and cryptographic integrity.
        </p>
      </div>

      {/* 3 FEATURE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* CARD 1 */}
        <div className="bg-[#F0F6FB] dark:bg-[#0B3A63]/20 p-8 rounded-2xl border border-[#0B3A63]/20 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Built for Institutional Review
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            The PDF format follows the structure used by banks, insurers and procurement teams:
            company identity, methodology summary, emission categories, results, verification ID
            and integrity signature.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Generated in 30 Seconds
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            No consultant. No delay. Enter expense data → instant automated calculation
            using standardized emission factors aligned with recognized methodologies.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#F8FAFC] dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Independently Verifiable
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Each attestation includes a verification ID and cryptographic hash allowing
            any third-party to validate authenticity without relying on Certif-Scope servers.
          </p>
        </div>

      </div>

      {/* DEEPER PRODUCT EXPLANATION */}
      <div className="mt-20 max-w-4xl mx-auto">

        <h3 className="text-3xl font-bold text-[#0B3A63] mb-6">
          Why this product is essential
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Across Europe, institutions increasingly require standardized CO₂ indicators:
          banks for loan assessments, procurement teams for supplier onboarding, insurers
          for risk classification, and major platforms for compliance validation. Traditional
          carbon audits are slow, expensive and not designed for SMEs.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Certif-Scope bridges this gap by providing a fast, standardized and universally
          interpretable CO₂ attestation that mirrors the structure expected by regulators
          and corporate ESG frameworks.
        </p>

        <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed mt-4">
          <li>• Growing demand for measurable environmental indicators</li>
          <li>• Banks increasingly require CO₂ impact disclosure</li>
          <li>• Procurement processes enforce ESG-based scoring</li>
          <li>• SMEs lack internal resources for traditional carbon reporting</li>
          <li>• Consistency and verification reduce rejection risk</li>
        </ul>

      </div>

      {/* RETURN BUTTON */}
      <div className="mt-16 text-center">
        <a
          href="#top"
          className="inline-block px-4 py-2 text-xs font-medium
          text-[#0B3A63] border border-[#0B3A63]/40 rounded-md
          hover:bg-[#0B3A63]/10 transition"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
