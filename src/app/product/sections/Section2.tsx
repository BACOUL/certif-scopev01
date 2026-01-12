"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK – Unique, serious, institutional layout */}
      <div className="rounded-2xl p-12 bg-[#0B3A63] text-white shadow-lg relative overflow-hidden">

        {/* Accent Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 to-transparent pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          2. Problem Statement
        </h2>

        <p className="text-white/90 text-lg max-w-4xl mt-6 leading-relaxed relative z-10">
          Across Europe, SMEs are increasingly required to provide CO₂ indicators to banks,
          procurement departments, insurers, investors and public institutions. However,
          existing environmental reporting processes are slow, expensive, inconsistent
          and frequently rejected due to non-standard formats. This creates operational
          bottlenecks that Certif-Scope directly resolves with a standardized, verifiable,
          institution-ready output.
        </p>
      </div>


      {/* 3-Column Block — Institutional & Analytical */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

        {/* PROBLEM 1 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            1. Absence of Standardization
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            European institutions expect structured and comparable environmental metrics.
            Without harmonized presentation, many SMEs’ documents are rejected. 
            This reflects the broader problem identified in ESRS E1 and CSRD: non-standard
            disclosures hinder verification and comparability.
          </p>
        </div>

        {/* PROBLEM 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            2. Excessive Cost & Slow Delivery
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Traditional ESG reporting can take weeks and cost thousands of euros. Procurement
            and banking teams often require documentation within tight deadlines (24–72 hours),
            creating an accessibility barrier for SMEs.
          </p>
        </div>

        {/* PROBLEM 3 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            3. Lack of Clear Verification Mechanisms
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Many CO₂ reports do not include verifiable identifiers or integrity mechanisms.
            This contradicts the transparency principles found in ISO 14064-1 (quantification
            and reporting of GHG emissions). Institutions prefer documents that can be validated
            independently, without relying on trust.
          </p>
        </div>

      </div>


      {/* INSTITUTIONAL CONTEXT STRIP */}
      <div className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-[#0B3A63]/20 shadow-sm">

        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Institutional Context Across Europe
        </h3>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          Banks, insurers and procurement departments increasingly request CO₂ indicators
          to comply with internal risk frameworks, ESG due diligence processes and regulatory
          expectations. While SMEs are not directly subject to CSRD or full ESRS reporting,
          larger companies are — and they cascade these requirements to suppliers to satisfy
          Scope 3 screening obligations.  
        </p>

        <ul className="mt-6 space-y-2 text-gray-700 text-sm">
          <li>• CSRD (2022/2464) requires large companies to assess environmental risks</li>
          <li>• ESRS E1 requires climate impact assessment including upstream suppliers</li>
          <li>• Banks integrate CO₂ indicators into risk scoring frameworks</li>
          <li>• Public tenders increasingly require standardized sustainability metrics</li>
        </ul>
      </div>


      {/* RETURN BUTTON — UNIVERSAL & IDENTICAL */}
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
