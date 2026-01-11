export default function Section2() {
  return (
    <section
      id="s2"
      className="
        scroll-mt-24 
        bg-[#F8FAFC]
        dark:bg-gray-900 
        border border-gray-100 dark:border-gray-800 
        rounded-2xl 
        p-12 
        shadow-[0_4px_20px_rgba(0,0,0,0.04)]
      "
    >

      {/* TITLE */}
      <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-8 tracking-tight">
        Key Benefits Summary
      </h2>

      {/* INTRO */}
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mb-14">
        Certif-Scope delivers an institutional-grade CO₂ attestation built for European 
        procurement, banking, insurers, compliance departments and public-sector organizations.
        Designed for SMEs, it combines speed, transparency and independent verifiability with 
        a standard format accepted across the EU.
      </p>

      {/* 6 FEATURE GRID IN PREMIUM DESIGN */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT COLUMN */}
        <div className="space-y-10">

          {/* BENEFIT 1 */}
          <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow border border-[#15B097]/20 hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-[#15B097] mb-3">
              Immediate Availability
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              A fully generated, verifiable PDF is ready in under 30 seconds—ideal for urgent 
              procurement onboarding, grant applications or supplier validation.
            </p>
          </div>

          {/* BENEFIT 2 */}
          <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow border border-[#0B3A63]/20 hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
              Standardized & Institution-Ready
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Structured for ESG review processes: identity block, methodology summary, 
              emission factors, calculation tables, verification ID and cryptographic hash.
            </p>
          </div>

          {/* BENEFIT 3 */}
          <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow border border-[#15B097]/20 hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-[#15B097] mb-3">
              Independently Verifiable
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Banks, auditors, insurers and government agencies can verify authenticity without 
              relying on Certif-Scope servers—thanks to the embedded cryptographic integrity signature.
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-10">

          {/* BENEFIT 4 */}
          <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow border border-[#0B3A63]/20 hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
              Accepted Across Europe
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Designed to match expectations from EU procurement offices, banks, insurers and 
              compliance teams, reducing rejection risk.
            </p>
          </div>

          {/* BENEFIT 5 */}
          <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow border border-[#15B097]/20 hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-[#15B097] mb-3">
              Cost-Effective & Scalable
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              No consultants, no long ESG audits, no recurring validation fees. A lean and 
              accessible solution suitable for SMEs and large supplier networks.
            </p>
          </div>

          {/* BENEFIT 6 */}
          <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow border border-[#0B3A63]/20 hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
              Transparent Methodology
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Based on recognized emission factors and a documented spend-based methodology. 
              Every calculation step is included for full transparency and regulatory clarity.
            </p>
          </div>

        </div>

      </div>

      {/* RETURN TO SUMMARY BUTTON */}
      <div className="mt-14">
        <a
          href="#top"
          className="
            inline-flex items-center px-4 py-2 
            text-sm font-medium 
            text-[#0B3A63] 
            border border-[#0B3A63]/20 
            rounded-md 
            hover:bg-[#0B3A63]/5 
            transition
          "
        >
          Back to Summary
        </a>
      </div>

    </section>
  );
}
