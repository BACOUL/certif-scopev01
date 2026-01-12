"use client";

export default function Section7() {
  return (
    <section
      id="s7"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Premium institutional layout */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/5 to-[#15B097]/10 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          7. Value Proposition
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope provides a uniquely fast, standardized and verifiable CO₂ attestation
          specifically aligned with the expectations of European procurement, banking,
          insurance, investment and public-sector decision-making. Institutions receive a
          consistent output format, enabling immediate integration into compliance workflows
          without manual interpretation or ESG consultancy.
        </p>
      </div>


      {/* 4-COLUMN GRID — value pillars */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">

        {/* PILLAR 1 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Consistency Across Europe
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            A unified format that can be submitted in any EU country, regardless of institutional
            differences. Eliminates re-formatting, translation inconsistencies and variable
            reporting expectations.
          </p>
        </div>

        {/* PILLAR 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Immediate Institutional Readiness
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Directly compatible with procurement questionnaires, banking KYC+ESG reviews,
            insurance eligibility screens, investor due diligence and public funding applications.
          </p>
        </div>

        {/* PILLAR 3 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Replaces Slow ESG Assessments
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Provides the essential CO₂ indicator instantly, without the delays, cost or
            operational complexity of consultant-based sustainability assessments.
          </p>
        </div>

        {/* PILLAR 4 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Verifiable & Trusted Output
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Each attestation includes a cryptographic integrity seal and unique verification ID,
            allowing third parties to authenticate the document independently without contacting
            Certif-Scope.
          </p>
        </div>

      </div>


      {/* DIFFERENTIATION BLOCK */}
      <div className="mt-20 p-10 rounded-xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h3 className="text-2xl font-bold relative z-10">Strategic Advantages for Institutions</h3>

        <ul className="mt-5 space-y-3 text-white/90 relative z-10 list-disc list-inside">
          <li>Clear structure with no ambiguity or missing fields</li>
          <li>Consistent formatting across all suppliers and applicants</li>
          <li>No need to evaluate different document styles or methodologies</li>
          <li>Cryptographically secured integrity and offline verifiability</li>
          <li>Immediate usability in onboarding and due-diligence workflows</li>
          <li>Full multilingual compatibility with five core EU languages</li>
        </ul>
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
