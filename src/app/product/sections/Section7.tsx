export default function Section7() {
  return (
    <section
      id="s7"
      className="scroll-mt-24 py-32 bg-[#F8FAFC] dark:bg-gray-900"
    >

      {/* SECTION HEADER */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-20">
        <h2 className="text-4xl font-extrabold text-[#0B3A63]">
          Value Proposition
        </h2>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Certif-Scope delivers an institution-grade carbon attestation designed for
          compliance, procurement and financial workflows — offering unmatched speed,
          clarity and verifiability for small and medium enterprises.
        </p>
      </div>

      {/* VALUE BANNER */}
      <div className="w-full bg-[#0B3A63] text-white py-12 mb-24 shadow-lg">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            A Single Attestation. Universal Acceptance.
          </h3>
          <p className="text-base opacity-90 leading-relaxed max-w-3xl mx-auto">
            The Certif-Scope format is engineered to match the internal verification processes
            used by European banks, procurement departments and compliance teams. No additional
            documents or clarifications are required.
          </p>
        </div>
      </div>

      {/* GRID VALUE PROPOSITION */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* VALUE ITEM 1 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
          <div className="w-14 h-14 bg-[#47B39C]/20 text-[#47B39C] flex items-center justify-center rounded-full mb-6 text-xl font-bold">
            1
          </div>
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Instant Delivery
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Generate a fully usable, verified CO₂ attestation in seconds instead of waiting
            weeks for consultants or manual audits.
          </p>
        </div>

        {/* VALUE ITEM 2 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
          <div className="w-14 h-14 bg-[#47B39C]/20 text-[#47B39C] flex items-center justify-center rounded-full mb-6 text-xl font-bold">
            2
          </div>
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Recognized Formatting
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Optimized for procurement, compliance and financial reporting with the structure
            reviewers expect: identity, methodology, emission factors, results and verification hash.
          </p>
        </div>

        {/* VALUE ITEM 3 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
          <div className="w-14 h-14 bg-[#47B39C]/20 text-[#47B39C] flex items-center justify-center rounded-full mb-6 text-xl font-bold">
            3
          </div>
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Independent Verification
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            The attestation includes a cryptographic hash and verification ID allowing banks,
            insurers or partners to authenticate integrity without contacting Certif-Scope.
          </p>
        </div>

        {/* VALUE ITEM 4 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
          <div className="w-14 h-14 bg-[#47B39C]/20 text-[#47B39C] flex items-center justify-center rounded-full mb-6 text-xl font-bold">
            4
          </div>
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Cost Efficiency
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            One transparent price: 49 €. No recurring fees, no consultancy costs, no hidden upsells.
          </p>
        </div>

        {/* VALUE ITEM 5 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
          <div className="w-14 h-14 bg-[#47B39C]/20 text-[#47B39C] flex items-center justify-center rounded-full mb-6 text-xl font-bold">
            5
          </div>
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Scalability for SMEs
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Adapted for small and medium companies with minimal data requirements and
            frictionless repeatability.
          </p>
        </div>

        {/* VALUE ITEM 6 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
          <div className="w-14 h-14 bg-[#47B39C]/20 text-[#47B39C] flex items-center justify-center rounded-full mb-6 text-xl font-bold">
            6
          </div>
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Full Transparency
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Methodology, emission factors and assumptions are documented clearly within the report
            to ensure audit-friendly clarity.
          </p>
        </div>

      </div>

      {/* RETURN BUTTON */}
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
