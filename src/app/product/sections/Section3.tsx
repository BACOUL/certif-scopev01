"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK — unique design */}
      <div className="rounded-2xl p-10 bg-[#0B3A63] text-white shadow-lg flex flex-col md:flex-row gap-10 items-center">
        
        {/* LEFT TEXT */}
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold mb-4">
            Why the Product Exists
          </h2>
          <p className="text-white/90 text-lg max-w-3xl leading-relaxed">
            European companies increasingly demand standardized CO₂ indicators from suppliers,
            subcontractors, applicants and service providers. Traditional methods are slow,
            expensive, and inaccessible to most SMEs. Certif-Scope solves this compliance gap
            by offering an instant, institution-ready attestation built for real operational use.
          </p>
        </div>

        {/* RIGHT VISUAL ICON PANEL */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <h4 className="text-lg font-semibold">Procurement</h4>
            <p className="text-white/80 text-sm mt-2">CO₂ indicators required prior to supplier onboarding.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <h4 className="text-lg font-semibold">Banking</h4>
            <p className="text-white/80 text-sm mt-2">Environmental scoring increasingly impacts risk analysis.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <h4 className="text-lg font-semibold">Insurance</h4>
            <p className="text-white/80 text-sm mt-2">Sustainability indicators required in eligibility workflows.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <h4 className="text-lg font-semibold">Public Funding</h4>
            <p className="text-white/80 text-sm mt-2">Many grants require CO₂ documentation as baseline.</p>
          </div>
        </div>

      </div>

      {/* PAIN-POINTS BLOCK — new layout to avoid repetition */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            The Process is Too Slow
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            SMEs cannot wait weeks for consultants to process data. Most institutions require
            documents within 24–72 hours — Certif-Scope provides them instantly.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            High Cost Barriers
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Traditional ESG assessments can cost thousands of euros. Certif-Scope makes
            compliant CO₂ documentation accessible to any small business.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Lack of Standardization
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Institutions reject documents when formatting, terminology or indicators vary. 
            Certif-Scope delivers consistency and clarity across all industries and countries.
          </p>
        </div>

      </div>

      {/* COMPLIANCE EXPECTATIONS BLOCK — big institutional tone */}
      <div className="mt-20 p-10 rounded-xl bg-[#15B097]/10 border border-[#15B097]/40 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Increasing Institutional Requirements
        </h3>
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Banks, procurement departments and insurers are progressively integrating CO₂ 
          indicators into onboarding workflows. Companies with no environmental documentation 
          face delays, refusals or additional scrutiny. Certif-Scope provides a fast, 
          consistent, and verifiable document that directly answers these requirements.
        </p>
      </div>

      {/* RETURN BUTTON — IDENTICAL ACROSS ALL SECTIONS */}
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
