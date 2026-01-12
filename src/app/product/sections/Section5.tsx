"use client";

export default function Section5() {
  return (
    <section
      id="s5"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK — unique institutional layout */}
      <div className="p-12 rounded-2xl bg-white border border-gray-200 shadow-sm">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] leading-tight">
          Section 5 — Use Cases Across Europe
        </h2>
        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          Certif-Scope provides a standardized CO₂ attestation that fits real operational 
          requirements across procurement, banking, insurance, public funding and regulatory 
          documentation. Each use case reflects actual institutional workflows where a 
          consistent and verifiable environmental indicator is mandatory.
        </p>
      </div>

      {/* 4 FEATURE PANELS — distinct grid design */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* PROCUREMENT */}
        <div className="p-10 bg-[#F8FAFC] rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">Procurement & Supply Chains</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            European procurement teams increasingly request CO₂ indicators as part of 
            supplier onboarding. Certif-Scope ensures suppliers provide a standardized, 
            comparable environmental footprint aligned with institutional review processes.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Supplier onboarding requirements</li>
            <li>• Risk scoring & compliance checks</li>
            <li>• Documentation for tender submissions</li>
          </ul>
        </div>

        {/* BANKING */}
        <div className="p-10 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">Banking & Credit Risk</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Financial institutions integrate environmental indicators into lending decisions 
            and ESG scoring frameworks. Certif-Scope provides an instantly verifiable footprint 
            for loan applications, credit scoring or refinancing requests.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Loan application documentation</li>
            <li>• ESG scoring input fields</li>
            <li>• Risk-monitoring workflows</li>
          </ul>
        </div>

        {/* INSURANCE */}
        <div className="p-10 bg-white rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">Insurance & Eligibility Frameworks</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Insurance providers require a growing number of environmental disclosures to 
            evaluate eligibility, pricing and risk assessment. Certif-Scope delivers 
            structured data fields compatible with underwriting procedures.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Eligibility documentation</li>
            <li>• Pricing transparency</li>
            <li>• Accelerated underwriting workflows</li>
          </ul>
        </div>

        {/* PUBLIC FUNDING */}
        <div className="p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
          {/* subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

          <h3 className="text-2xl font-semibold mb-3 relative z-10">Public Funding & Grants</h3>
          <p className="text-white/90 text-sm leading-relaxed relative z-10">
            Many European grant programs require clear CO₂ documentation as part of the 
            eligibility assessment. Certif-Scope provides a standardized format that can be 
            submitted without additional explanation or expert review.
          </p>
          <ul className="mt-3 text-white/85 text-sm space-y-1 relative z-10">
            <li>• Baseline environmental indicators</li>
            <li>• Documentation for grant applications</li>
            <li>• Verification for compliance reporting</li>
          </ul>
        </div>

      </div>

      {/* INSTITUTIONAL BLOCK — deeper justification */}
      <div className="mt-20 bg-[#F8FAFC] border border-gray-300 p-10 rounded-xl shadow-sm">
        <h4 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Why Institutions Accept This Format
        </h4>
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Certif-Scope provides a predictable, uniform and verifiable structure that matches 
          operational requirements across Europe. Unlike free-form sustainability reports, 
          the attestation follows a consistent layout, includes mandatory identifiers, and 
          enables offline verification through a cryptographically secured ID.  
          This reduces friction for reviewers and improves acceptance rates.
        </p>
      </div>

      {/* UNIVERSAL RETURN BUTTON */}
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
