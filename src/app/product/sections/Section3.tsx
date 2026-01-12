"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* TOP HEADER BLOCK – DISTINCT DESIGN (Dark Blue Banner + Illustration Layout) */}
      <div className="rounded-2xl p-12 bg-[#0B3A63] text-white shadow-lg relative overflow-hidden">

        {/* Subtle gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent opacity-40"></div>

        {/* Content wrapper (ensures readability over gradient) */}
        <div className="relative z-10 max-w-4xl">

          <h2 className="text-4xl font-extrabold mb-6">
            Why Certif-Scope Exists
          </h2>

          <p className="text-white/90 text-lg leading-relaxed">
            European institutions increasingly mandate standardized CO₂ indicators 
            for suppliers, subcontractors, financial applicants and partners. 
            Traditional carbon reporting is slow, expensive, inconsistent and often 
            rejected by procurement, banking, insurance and compliance workflows.
            Certif-Scope fills this gap with an instant, uniform and institution-ready 
            attestation format trusted across Europe.
          </p>
        </div>

      </div>

      {/* GRID OF INSTITUTIONAL CONTEXT – Fully Responsive */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Procurement */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Procurement
          </h3>
          <p className="mt-2 text-gray-700 text-sm leading-relaxed">
            Prior to onboarding, suppliers must provide structured CO₂ indicators 
            aligned with institutional verification requirements. Certif-Scope provides 
            a standardized attestation that eliminates ambiguity and accelerates approval.
          </p>
        </div>

        {/* Banking */}
        <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-md border border-[#15B097]/30">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Banking
          </h3>
          <p className="mt-2 text-gray-700 text-sm leading-relaxed">
            Environmental scoring is now integrated into credit assessment and 
            risk analysis. Certif-Scope provides consistent, auditable indicators 
            compatible with financial due-diligence workflows.
          </p>
        </div>

        {/* Insurance */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Insurance
          </h3>
          <p className="mt-2 text-gray-700 text-sm leading-relaxed">
            Insurers require sustainability-related metrics during eligibility 
            checks and risk modelling. Certif-Scope delivers uniform data 
            that can be validated independently.
          </p>
        </div>

        {/* Public Funding */}
        <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-md border border-[#15B097]/30">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Public Funding
          </h3>
          <p className="mt-2 text-gray-700 text-sm leading-relaxed">
            Many European grants require CO₂ documentation as a baseline for 
            compliance. Certif-Scope provides a standardized document suitable 
            for administrative review and submission.
          </p>
        </div>

      </div>

      {/* PAIN POINTS BLOCK – Avoids duplication with other sections */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Slow & Inconsistent Processes
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            Traditional carbon reporting can take weeks due to manual assessments. 
            Institutions require faster, standardized and verifiable documentation.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Expensive for SMEs
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            ESG consulting and audits can cost thousands of euros, making compliance 
            inaccessible for many small and medium companies.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Lack of Harmonization
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            Institutions reject documents that differ in layout, terminology or 
            calculation format. Certif-Scope solves this with a unified standard.
          </p>
        </div>

      </div>

      {/* EXPECTATION BLOCK – Institutional tone */}
      <div className="mt-20 p-10 rounded-xl bg-[#15B097]/10 border border-[#15B097]/40 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Rising Institutional Requirements Across Europe
        </h3>
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Banks, insurers, procurement teams and public authorities increasingly 
          integrate CO₂ indicators into onboarding, risk assessment and compliance 
          processes. Certif-Scope ensures businesses can provide consistent, 
          compliant, and independently verifiable documentation instantly.
        </p>
      </div>

      {/* UNIVERSAL RETURN BUTTON – identical across all sections */}
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
