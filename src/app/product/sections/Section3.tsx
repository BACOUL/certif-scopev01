"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK — unique dual-column layout */}
      <div className="p-12 rounded-2xl bg-[#0B3A63] text-white shadow-lg grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6">
            Section 3 — Why the Product Exists
          </h2>

          <p className="text-white/90 text-lg leading-relaxed max-w-3xl">
            Certif-Scope was created to remove the operational and financial barriers faced
            by SMEs when institutions request CO₂ indicators. Traditional carbon reporting
            tools are costly, slow, and constructed for large corporations. European banks,
            procurement teams and insurers increasingly require standardized documentation
            during onboarding, and SMEs lack the resources to respond quickly.
          </p>
        </div>

        {/* RIGHT COLUMN — ICON PANEL */}
        <div className="grid grid-cols-2 gap-6">

          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h4 className="text-lg font-semibold">Procurement</h4>
            <p className="text-white/80 text-sm mt-2">
              Suppliers must provide CO₂ indicators before being approved.
            </p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h4 className="text-lg font-semibold">Banking</h4>
            <p className="text-white/80 text-sm mt-2">
              Environmental scoring influences risk assessment and loan approval.
            </p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h4 className="text-lg font-semibold">Insurance</h4>
            <p className="text-white/80 text-sm mt-2">
              Sustainability indicators impact eligibility and pricing.
            </p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h4 className="text-lg font-semibold">Public Funding</h4>
            <p className="text-white/80 text-sm mt-2">
              Grants increasingly require fast, standardized CO₂ disclosure.
            </p>
          </div>
        </div>
      </div>

      {/* PAIN POINTS — 3-column institutional layout */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Slow & Complex Processes
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            SMEs often wait weeks for consultants to compile CO₂ documents. Institutions 
            expect submissions within 24–72 hours — Certif-Scope delivers instantly.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            High Cost Barriers
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Carbon accounting services are expensive and designed for large companies. 
            Certif-Scope democratizes access by removing consulting and audit fees.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Lack of Standardization
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Documents vary widely between providers, leading to rejections. Certif-Scope 
            produces harmonized, predictable output that institutions can interpret easily.
          </p>
        </div>
      </div>

      {/* INSTITUTIONAL CONTEXT BLOCK — large explanatory section */}
      <div className="mt-20 p-12 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          European Institutions Now Expect CO₂ Indicators by Default
        </h3>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          Across Europe, suppliers, applicants, contractors and service providers are routinely 
          asked for environmental indicators in order to complete risk assessments, 
          procurement validation, insurance modeling or public-grant eligibility.  
        </p>

        <p className="text-gray-700 leading-relaxed max-w-4xl mt-4">
          The challenge: most SMEs do not have internal ESG teams or budget for consulting. 
          Certif-Scope exists to remove this friction and ensure any business can meet 
          institutional requirements quickly, clearly and affordably.
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
