"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 border-b border-slate-200 dark:border-slate-700 pb-20 pt-10"
    >
      {/* SECTION TITLE */}
      <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-8">
        Key Benefits Summary
      </h2>

      {/* INTRO TEXT */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed mb-14">
        Certif-Scope delivers an immediate, verifiable, and fully standardized CO₂ attestation
        built for institutions. It removes the complexity of traditional ESG audits while
        matching the expectations of procurement, banking, insurance and due-diligence teams.
        Every benefit is designed to reduce friction and speed up validation.
      </p>

      {/* PREMIUM STRIP DESIGN (NEW STYLE) */}
      <div className="bg-gradient-to-r from-[#0B3A63] to-[#0d4b89] text-white rounded-2xl p-10 mb-16 shadow-xl">
        <h3 className="text-2xl font-semibold mb-4">
          A stronger, faster and more reliable compliance workflow
        </h3>
        <p className="text-white text-opacity-80 text-sm max-w-2xl leading-relaxed">
          By simplifying environmental disclosure, Certif-Scope enables SMEs to meet
          institutional demands instantly, without technical knowledge or consultancy overhead.
        </p>
      </div>

      {/* BENEFITS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* BENEFIT 1 */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-4">
            Instant Compliance
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Generate a standardized CO₂ attestation in under 30 seconds. Perfect for urgent
            supplier onboarding, procurement validation or financial documentation requests.
          </p>
        </div>

        {/* BENEFIT 2 */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-4">
            Standardized Format
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            The attestation follows a recognized institutional template: identity details,
            emissions estimate, methodology overview, factors used, verification ID and cryptographic hash.
          </p>
        </div>

        {/* BENEFIT 3 */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-4">
            Independent Verification
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Third parties can validate authenticity using the embedded hash and identifier—
            without needing to contact Certif-Scope. This ensures trust and transparency.
          </p>
        </div>

      </div>

      {/* SECOND GRID — DIFFERENT VISUAL STYLE */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">

        {/* BENEFIT 4 */}
        <div className="p-8 bg-[#f8fafc] dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-4">
            Cost-Effective
          </h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Avoid the financial burden of consultants and ESG audits. Certif-Scope is designed
            for SMEs needing affordable, compliant documentation.
          </p>
        </div>

        {/* BENEFIT 5 */}
        <div className="p-8 bg-[#f8fafc] dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-4">
            Europe-Wide Acceptance
          </h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Compliant with evaluation standards used across Europe for suppliers and partners.
            Ensures smoother onboarding and reduced rejection rates.
          </p>
        </div>

        {/* BENEFIT 6 */}
        <div className="p-8 bg-[#f8fafc] dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-4">
            Transparent Methodology
          </h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Based on documented and recognized emission factors. Each step is visible in the
            attestation for full traceability and institutional auditability.
          </p>
        </div>

      </div>

      {/* PREMIUM BACK BUTTON */}
      <div className="mt-20 flex">
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
