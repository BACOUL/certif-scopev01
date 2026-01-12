"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
    >

      {/* HEADER */}
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-4">
          Why the Product Exists
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl">
          Certif-Scope was created to solve a rapidly growing institutional requirement: 
          SMEs across Europe must now provide standardized, verifiable CO₂ indicators 
          before accessing funding, procurement contracts, insurance validation and 
          compliance onboarding. Traditional ESG assessments are too slow, too expensive 
          and impossible to scale for small companies.
        </p>
      </div>

      {/* HORIZONTAL SPLIT DESIGN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT COLUMN — PROBLEM STATEMENT */}
        <div className="p-8 bg-white rounded-xl shadow-lg border border-[#0B3A63]/15">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            The institutional pressure is increasing
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            Procurement teams, banks and insurers are demanding CO₂ metrics as a standard 
            element of due diligence. This is driven by stronger ESG frameworks, supply-chain 
            disclosure requirements, climate-risk scoring and pressure from European regulators.
          </p>

          <ul className="text-gray-700 text-sm space-y-2">
            <li>• Mandatory CO₂ disclosure in procurement workflows</li>
            <li>• Banks require environmental indicators for loan risk assessment</li>
            <li>• Insurers increase transparency requirements for climate exposure</li>
            <li>• Investors demand standardized and auditable ESG data</li>
            <li>• Regulations push companies to disclose emissions even at SME level</li>
          </ul>
        </div>

        {/* RIGHT COLUMN — VISUAL GRAPHIC BLOCK */}
        <div className="relative bg-[#0B3A63] text-white p-10 rounded-xl shadow-lg overflow-hidden">

          {/* Decorative gradient */}
          <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#15B097] to-transparent"></div>

          <h3 className="text-2xl font-semibold mb-4 relative z-10">
            The current solutions fail SMEs
          </h3>

          <p className="text-white/90 leading-relaxed relative z-10 mb-6">
            Traditional ESG consultants produce lengthy reports after weeks of data collection. 
            These processes are costly, slow and inaccessible to most SMEs — yet institutions 
            expect standardized documentation immediately.
          </p>

          <div className="grid grid-cols-1 gap-4 text-white/90 relative z-10">

            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              • High cost and long delivery times
            </div>

            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              • Reports often rejected due to inconsistent formats
            </div>

            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              • No automated verification mechanism for third parties
            </div>

            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              • Difficult to update, impossible to scale
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM STATEMENT BLOCK */}
      <div className="mt-16 p-8 bg-[#F8FAFC] border-l-8 border-[#15B097] rounded-xl shadow-sm">
        <h4 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Certif-Scope solves the gap between regulations and SME capability
        </h4>
        <p className="text-gray-700 max-w-4xl">
          By automating the attestation process, Certif-Scope enables SMEs to meet the same 
          compliance and procurement requirements as large corporations — but instantly, 
          affordably and with an independently verifiable document that institutions trust.
        </p>
      </div>

      {/* RETURN BUTTON */}
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
