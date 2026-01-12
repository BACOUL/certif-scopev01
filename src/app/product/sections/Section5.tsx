"use client";

export default function Section5() {
  return (
    <section
      id="s5"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="mb-12 text-left">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-4">
          Use Cases
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl">
          Certif-Scope is designed for real operational workflows where SMEs must provide
          verifiable environmental indicators rapidly. The attestation integrates seamlessly
          into procurement, compliance, financial risk assessment and partnership onboarding
          processes across Europe.
        </p>
      </div>

      {/* HIGH-IMPACT INTRO BLOCK */}
      <div className="bg-[#F8FAFC] border border-[#0B3A63]/20 rounded-xl p-10 shadow-sm mb-16">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Where Certif-Scope Fits in Real-World Workflows
        </h3>
        <p className="text-gray-700 leading-relaxed">
          The system eliminates delays and friction where institutions require fast, standardized
          and verifiable CO₂ information. Each case below reflects a typical scenario in which
          businesses rely on Certif-Scope to speed up decision-making and meet mandatory disclosure
          requirements.
        </p>
      </div>

      {/* MAIN GRID — 6 USE CASES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* USE CASE 1 */}
        <div className="p-8 bg-white border border-[#0B3A63]/15 shadow rounded-xl">
          <h4 className="text-xl font-semibold text-[#15B097] mb-2">
            Procurement & Supplier Onboarding
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Buyers increasingly require CO₂ indicators before approving suppliers. Certif-Scope
            provides a standardized attestation accepted by procurement teams across Europe.
          </p>
          <ul className="mt-3 text-gray-600 text-sm space-y-1">
            <li>• Fast supplier validation</li>
            <li>• Reduces compliance friction</li>
            <li>• Accepted formatting for ESG scorecards</li>
          </ul>
        </div>

        {/* USE CASE 2 */}
        <div className="p-8 bg-white border border-[#0B3A63]/15 shadow rounded-xl">
          <h4 className="text-xl font-semibold text-[#15B097] mb-2">
            Banking & Financial Risk Assessment
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Financial institutions request standardized CO₂ metrics for loan eligibility and
            sustainability-linked financing. Certif-Scope provides an instantly verifiable PDF.
          </p>
          <ul className="mt-3 text-gray-600 text-sm space-y-1">
            <li>• Accepted by banks & risk departments</li>
            <li>• Independent verification ID</li>
            <li>• No consultant delay</li>
          </ul>
        </div>

        {/* USE CASE 3 */}
        <div className="p-8 bg-[#0B3A63] text-white shadow rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-30"></div>
          <h4 className="text-xl font-semibold mb-2 relative z-10">
            Insurance Compliance Requirements
          </h4>
          <p className="text-white/90 text-sm leading-relaxed relative z-10">
            Insurers incorporate environmental indicators in risk modelling and contractual
            eligibility. Certif-Scope provides a clean, consistent format that matches compliance
            expectations.
          </p>
          <ul className="mt-3 text-white/80 text-sm space-y-1 relative z-10">
            <li>• Standardized ESG disclosure</li>
            <li>• Reliable for underwriting</li>
            <li>• Full transparency of methodology</li>
          </ul>
        </div>

        {/* USE CASE 4 */}
        <div className="p-8 bg-white border border-[#0B3A63]/15 shadow rounded-xl">
          <h4 className="text-xl font-semibold text-[#15B097] mb-2">
            Public Grants & Innovation Funding
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Many European grants require proof of environmental responsibility. Certif-Scope
            provides a credible attestation accepted by public institutions.
          </p>
          <ul className="mt-3 text-gray-600 text-sm space-y-1">
            <li>• Recognized format for grant submissions</li>
            <li>• Verifiable without contacting Certif-Scope</li>
            <li>• Accelerates administrative review</li>
          </ul>
        </div>

        {/* USE CASE 5 */}
        <div className="p-8 bg-white border border-[#0B3A63]/15 shadow rounded-xl">
          <h4 className="text-xl font-semibold text-[#15B097] mb-2">
            Corporate Partnerships & Vendor Compliance
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Large corporations require SMEs to provide CO₂ documentation for partnership approval.
          </p>
          <ul className="mt-3 text-gray-600 text-sm space-y-1">
            <li>• Mandatory for ESG procurement programs</li>
            <li>• Ensures alignment with sustainability policy</li>
            <li>• Clear evidence of environmental responsibility</li>
          </ul>
        </div>

        {/* USE CASE 6 */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097] shadow rounded-xl">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Internal Reporting & Investor Relations
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            SMEs can use the attestation for internal sustainability reporting, investor updates
            or annual non-financial disclosures.
          </p>
          <ul className="mt-3 text-gray-600 text-sm space-y-1">
            <li>• Supports annual reporting cycles</li>
            <li>• Reinforces credibility with investors</li>
            <li>• Ideal for pre-audit preparation</li>
          </ul>
        </div>

      </div>

      {/* CTA BLOCK */}
      <div className="mt-20 bg-[#15B097] text-white p-10 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold mb-3">Designed for real operational workflows</h3>
        <p className="text-white/90 max-w-3xl">
          Whether you are onboarding a supplier, applying for a loan or finalizing an institutional
          partnership, Certif-Scope provides a fast, compliant and verifiable CO₂ attestation tailored
          to European regulatory and procurement needs.
        </p>
      </div>

      {/* RETURN BUTTON — identical design */}
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
