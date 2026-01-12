"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — DESIGN DIFFÉRENT + TON INSTITUTIONNEL */}
      <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-xl overflow-hidden">

        {/* accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 via-transparent to-[#0B3A63]/20 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          3. Why the Product Exists
        </h2>

        <p className="text-lg text-white/90 max-w-3xl mt-6 leading-relaxed relative z-10">
          Certif-Scope exists to solve a critical operational gap across Europe: institutions now 
          require standardized CO₂ indicators from suppliers, applicants, contractors and beneficiaries,
          but SMEs lack access to fast, affordable and verifiable solutions. Traditional ESG audits 
          are slow, expensive and inconsistent, while online calculators are not institution-ready.
        </p>
      </div>

      {/* CORE PROBLEMS — GRID WITH DISTINCT VISUAL STRUCTURE */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">

        {/* PROBLEM 1 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">A growing regulatory burden</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            CSRD and ESRS frameworks introduce mandatory CO₂ indicators for thousands of companies. 
            SMEs must respond as suppliers, subcontractors, or partners in regulated value chains—
            even if they are not themselves directly subject to CSRD.
          </p>
        </div>

        {/* PROBLEM 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">Lack of standardized documentation</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Institutions across Europe reject spreadsheets, manually produced reports and 
            inconsistent formats. They require uniform structures that enable fast review,
            comparability and traceability.
          </p>
        </div>

        {/* PROBLEM 3 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">Verification bottlenecks</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Most CO₂ documents cannot be verified externally. Certif-Scope provides an 
            independently verifiable cryptographic signature that satisfies institutional 
            integrity requirements without needing a live backend.
          </p>
        </div>

      </div>

      {/* IMPACT BLOCK — INSTITUTIONAL FOCUS */}
      <div className="mt-20 p-10 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
        <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">The European Context Driving the Need</h3>
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Banks, insurers, private investors and public contracting authorities now integrate 
          environmental risk indicators directly into onboarding and scoring workflows. 
          Institutions impose these requirements because of EU-level guidance and supervisory 
          expectations. Certif-Scope provides SMEs with a compliant way to deliver these indicators 
          instantly, without undergoing full-scale environmental audits.
        </p>
      </div>

      {/* RETURN BUTTON — IDENTIQUE ACROSS ALL SECTIONS */}
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
