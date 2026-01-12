"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK — institutional dark layout */}
      <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-lg overflow-hidden">

        {/* Accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 to-transparent opacity-20"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          3. Why the Product Exists — Regulatory & Operational Need
        </h2>

        <p className="text-lg text-white/90 mt-6 max-w-4xl leading-relaxed relative z-10">
          Across Europe, SMEs increasingly face mandatory requests for standardized CO₂ indicators 
          during procurement, financial onboarding and compliance screenings.  
          Directive 2014/24/EU (public procurement), CSRD obligations (Corporate Sustainability Reporting 
          Directive), ESRS E1 climate disclosures, and financial supervision requirements 
          (EBA/ECB climate-risk guidelines) all push institutions to verify environmental performance.  
          Most SMEs cannot produce this documentation at the required level of structure, speed, or credibility.
        </p>
      </div>

      {/* 3 PAIN POINTS — different layout from section 1 & 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* PAIN POINT 1 */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            1. Institutional Pressure Intensifies
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Banks apply climate-risk scoring under EBA/ECB guidelines.  
            Public buyers enforce sustainability checks under Directive 2014/24/EU.  
            Large corporations require CO₂ indicators from suppliers due to CSRD reporting obligations.
          </p>
        </div>

        {/* PAIN POINT 2 */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            2. Traditional Methods Are Too Slow & Expensive
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Carbon audits cost thousands of euros and require multi-week data collection, consultant time, 
            and manual validation. SMEs often need documentation within 24–72 hours for tenders or bank onboarding.
          </p>
        </div>

        {/* PAIN POINT 3 */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            3. Lack of Standardization Causes Rejections
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Most CO₂ documents vary in format, terminology and methodology.  
            Institutions reject incomplete reports, unclear assumptions, or missing verification elements.  
            Certif-Scope provides uniform structure aligned with ESRS E1 and GHG Protocol formatting logic.
          </p>
        </div>
      </div>

      {/* EXPLANATION STRIP — using green theme to differentiate */}
      <div className="mt-20 p-10 rounded-xl bg-[#15B097]/10 border border-[#15B097]/40 shadow-sm">
        <h4 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Why the Market Demands a Standardized Attestation
        </h4>

        <p className="text-gray-700 max-w-4xl leading-relaxed">
          SMEs increasingly participate in cross-European supply chains and tender processes.  
          To reduce litigation risk and ensure consistent evaluation, auditors and compliance 
          teams prefer structured, verifiable documents aligned with recognized standards 
          (GHG Protocol, ISO 14064-1).  
          Certif-Scope bridges the gap by transforming minimal inputs into a standardized 
          attestation that satisfies institutional expectations.
        </p>

        <p className="text-gray-700 max-w-4xl mt-4 leading-relaxed">
          The goal is not to replace full audits, but to provide a legitimate, traceable and 
          verifiable CO₂ indicator suitable for procurement, KYC/ESG reviews, funding applications, 
          supplier onboarding, and eligibility screening — without the barriers of traditional consulting.
        </p>
      </div>

      {/* RETURN BUTTON — universal style */}
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
