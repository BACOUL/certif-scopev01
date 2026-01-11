export default function Section4() {
  return (
    <section
      id="s4"
      className="scroll-mt-24 py-24 border-b border-gray-200 dark:border-gray-800"
    >
      {/* TITLE BLOCK */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight text-[#0B3A63]">
          Our Comprehensive Solution
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Certif-Scope delivers a complete, verifiable and institution-aligned CO₂
          attestation system engineered for organizations that require speed,
          accuracy, transparency and universal acceptance across European
          procurement and financial processes.
        </p>
      </div>

      {/* SOLUTION GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-4">

        {/* BLOCK 1 */}
        <div className="p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 relative overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-br from-[#47B39C]/10 to-transparent opacity-60"></span>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3 relative">
            Instant Attestation Engine
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed relative">
            Generates the complete attestation document in seconds using
            standardized emission factors and declared annual expenses. Fully
            automated, consistent and reproducible.
          </p>
        </div>

        {/* BLOCK 2 */}
        <div className="p-8 rounded-2xl shadow-lg bg-[#F8FAFC] dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Compliance-Aligned Structure
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Built according to institutional ESG review formats: identity
            verification, methodology, emission factors, total footprint, and
            verification hash included in every document.
          </p>
        </div>

        {/* BLOCK 3 */}
        <div className="p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#47B39C]/20 rounded-bl-2xl" />
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3 relative z-10">
            Cryptographic Verification
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed relative z-10">
            Each attestation embeds a unique signature hash that allows fully
            independent verification by banks, insurance providers and auditors.
          </p>
        </div>

        {/* BLOCK 4 */}
        <div className="p-8 rounded-2xl shadow-lg bg-[#47B39C]/10 dark:bg-[#47B39C]/20 border border-[#47B39C]/30">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Simplified User Input
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Only annual expenses are required. No complex questionnaires, no
            multi-step audits, no external consultants. Instant onboarding.
          </p>
        </div>
      </div>

      {/* DEEP INFO SECTION */}
      <div className="max-w-5xl mx-auto mt-20 px-4">
        <h3 className="text-2xl font-bold text-[#0B3A63] mb-6">
          Designed for Real-World Constraints
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-8 rounded-2xl shadow">
            <h4 className="text-lg font-semibold text-[#47B39C] mb-3">Transparency by Default</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Every calculation step is documented to ensure clarity for auditors,
              institutional reviewers and compliance departments. Nothing hidden.
            </p>
          </div>

          <div className="bg-[#F8FAFC] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-2xl shadow">
            <h4 className="text-lg font-semibold text-[#47B39C] mb-3">Institution-Ready Output</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              The document structure mirrors ESG expectations used in public and
              private procurement, enabling seamless validation.
            </p>
          </div>
        </div>
      </div>

      {/* RETURN BUTTON */}
      <div className="text-center mt-16">
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
