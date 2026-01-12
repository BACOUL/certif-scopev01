"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER AREA — Unique design for Section 2 */}
      <div className="relative p-12 rounded-2xl bg-white border border-gray-200 shadow-md overflow-hidden">

        {/* Accent diagonal stripes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#15B097]/10 via-transparent to-[#0B3A63]/10 pointer-events-none"></div>

        <h2 className="text-4xl font-extrabold text-[#0B3A63] relative z-10">
          2. Key Benefits Summary
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10">
          Certif-Scope delivers a set of essential benefits designed to meet institutional
          expectations across the European procurement, finance and insurance ecosystem.
          Each benefit is structured to reduce friction, accelerate compliance, and
          provide SME-friendly access to standardized environmental documentation.
        </p>
      </div>

      {/* BENEFITS GRID — 6 blocks with alternating design */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">

        {/* BENEFIT 1 */}
        <div className="p-8 rounded-xl shadow-md border border-gray-200 bg-[#F8FAFC]">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">1. Instant Generation</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Complete the form and download a verified PDF in less than 30 seconds.
            Streamlines onboarding, procurement requests and risk assessment workflows.
          </p>
        </div>

        {/* BENEFIT 2 */}
        <div className="p-8 rounded-xl shadow-md border border-[#15B097]/30 bg-white">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">2. Institution-Ready Format</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Structured fields, verification ID, summary indicators and standardized layout
            ensure smooth acceptance by procurement and ESG review teams.
          </p>
        </div>

        {/* BENEFIT 3 */}
        <div className="p-8 rounded-xl shadow-md border border-gray-200 bg-white">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">3. Independent Verification</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Cryptographic integrity seal + unique verification identifier allow
            third parties to authenticate the PDF with no server dependence.
          </p>
        </div>

        {/* BENEFIT 4 */}
        <div className="p-8 rounded-xl shadow-md border border-[#15B097]/30 bg-[#F8FAFC]">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">4. Cross-European Compatibility</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Terminology, structure and formatting align with expectations across
            France, Germany, Spain, Italy, Belgium, Netherlands and more.
          </p>
        </div>

        {/* BENEFIT 5 */}
        <div className="p-8 rounded-xl shadow-md border border-gray-200 bg-[#F8FAFC]">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">5. Zero ESG Consultancy Required</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            No need for external experts. SMEs avoid thousands of euros in consulting
            fees and multi-week reporting cycles.
          </p>
        </div>

        {/* BENEFIT 6 */}
        <div className="p-8 rounded-xl shadow-md border border-[#15B097]/30 bg-white">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">6. Standardization Across Industries</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Eliminates inconsistencies and formatting issues that often lead to rejection
            by institutions. Output is predictable, unified and audit-friendly.
          </p>
        </div>

      </div>

      {/* BOTTOM STRIP — institutional tone */}
      <div className="mt-20 bg-[#0B3A63] text-white p-10 rounded-xl shadow-lg relative">

        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-25"></div>

        <h4 className="text-2xl font-bold relative z-10">The Value Behind the Benefits</h4>
        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          Certif-Scope bridges the operational gap between SME constraints and institutional
          compliance requirements. It replaces manual ESG evaluations with a streamlined,
          deterministic and verifiable process aligned with European expectations.
        </p>
      </div>

      {/* RETURN BUTTON — identical across all sections */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
