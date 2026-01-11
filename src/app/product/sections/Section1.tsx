export default function Section1() {
  return (
    <section id="s1" className="scroll-mt-24 pt-10 pb-20 border-b border-gray-200 dark:border-gray-700">

      {/* HEADER */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Product Overview
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
          Certif-Scope enables SMEs to instantly generate a standardized, institution-ready CO₂
          attestation aligned with European procurement and financial requirements. The document
          includes transparent methodology, validated emission factors and a cryptographically
          verifiable integrity code.
        </p>
      </div>

      {/* FEATURE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Institutional-Grade Structure
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            The attestation mirrors the exact structure expected by procurement, banking and
            compliance teams: company identification, methodology, emission factors, numerical
            results and verification signature.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Generated in Under 30 Seconds
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            No consultants, no delays. Enter financial data and receive a verified PDF instantly —
            ready for onboarding, funding, or supplier validation.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Independent Verification
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            Each attestation includes a unique verification code and cryptographic hash that
            third-parties can validate without any reliance on Certif-Scope servers.
          </p>
        </div>

      </div>

      {/* WHY THIS PRODUCT EXISTS */}
      <div className="mt-16 max-w-4xl">
        <h3 className="text-2xl md:text-3xl font-bold text-[#0B3A63] mb-6">
          Why this product exists
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          European financial institutions, procurement departments and compliance teams increasingly
          require standardized CO₂ indicators before contracts, onboarding processes or funding
          approvals. Traditional assessments are slow, expensive and inconsistent.
        </p>

        <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <li>• Mandatory CO₂ disclosure for suppliers and subcontractors</li>
          <li>• Banks and insurers requiring environmental indicators for risk assessment</li>
          <li>• Public tenders requesting verifiable, standardized formats</li>
          <li>• SMEs lacking the resources for full ESG audits</li>
          <li>• Immediate need for trusted, portable and independent verification</li>
        </ul>
      </div>

      {/* BACK TO SUMMARY — DISCREET BUTTON */}
      <div className="mt-14 flex">
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
