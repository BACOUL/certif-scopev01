export default function Section2() {
  return (
    <section id="s2" className="scroll-mt-24">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B3A63] mb-10">
        Key Benefits Summary
      </h2>

      {/* INTRO PARAGRAPH */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-12">
        Certif-Scope delivers an enterprise-ready CO₂ attestation engineered for procurement,
        financial decision-making, regulatory compliance, and due-diligence workflows.
        Below is a structured overview of the primary benefits that differentiate Certif-Scope
        from traditional consulting-based carbon reporting or manual estimation tools.
      </p>

      {/* BENEFIT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* BENEFIT 1 */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            30-second CO₂ attestation
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Generate a complete, institution-ready attestation instantly from your expense inputs.
            No waiting period, no consultant dependency.
          </p>
        </div>

        {/* BENEFIT 2 */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Recognized by banks & procurement
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Structured in a standardized format compatible with verification processes
            commonly used in European financial institutions and auditors.
          </p>
        </div>

        {/* BENEFIT 3 */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Fully transparent methodology
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Built on spend-based GHG Protocol principles with visible conversion factors,
            clear assumptions and no hidden calculation steps.
          </p>
        </div>

        {/* BENEFIT 4 */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Independent verification code
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Each attestation includes a unique verification ID and cryptographic hash
            enabling third-party validation without accessing proprietary systems.
          </p>
        </div>

        {/* BENEFIT 5 */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            No training or expertise required
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Designed for SMEs that need compliance-grade output without hiring carbon analysts,
            sustainability officers or consulting firms.
          </p>
        </div>

        {/* BENEFIT 6 */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Audit-ready PDF format
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Delivered as a standardized, timestamped PDF including breakdowns, methodology,
            calculation inputs and verification metadata.
          </p>
        </div>

        {/* BENEFIT 7 */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            API-friendly structure
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Clean JSON structure enables automated generation of attestations within
            internal corporate workflows, ERPs or procurement systems.
          </p>
        </div>

        {/* BENEFIT 8 */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            No long-term commitment
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Pay-per-use pricing tailored for SMEs instead of complex subscription contracts
            or multi-month consultancy engagements.
          </p>
        </div>

        {/* BENEFIT 9 */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Realistic, conservative estimation logic
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Values are deliberately conservative to ensure acceptance by compliance
            departments and risk-averse institutions.
          </p>
        </div>
      </div>

      {/* SUMMARY BOX */}
      <div className="mt-16 p-8 bg-[#F1F7FF] dark:bg-[#142536] border-l-4 border-[#0B3A63] rounded-lg">
        <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
          Summary
        </h4>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Certif-Scope consolidates speed, transparency, institutional formatting,
          independent verification and operational simplicity into a single workflow.
          It replaces weeks of manual reporting with an automated, standardized and
          instantly auditable attestation suitable for banks, procurement, insurers,
          large clients and regulatory documentation.
        </p>
      </div>
    </section>
  );
}
