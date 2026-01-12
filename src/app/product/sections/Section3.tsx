"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* TITLE – Standardized */}
      <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-10">
        3 — Why the Product Exists
      </h2>

      {/* PREMIUM INTRO BLOCK – new layout */}
      <div className="bg-[#F8FAFC] p-10 rounded-2xl shadow-sm border border-gray-100">
        <p className="text-lg text-gray-700 max-w-4xl leading-relaxed">
          European institutions increasingly demand standardized and verifiable 
          CO₂ indicators from suppliers, applicants, and service providers. 
          Traditional carbon assessments are slow, expensive, consultant-dependent, 
          and lack uniform formatting. Certif-Scope fills this operational gap by 
          providing instant, institution-ready environmental documentation.
        </p>
      </div>

      {/* 4-COLUMN BLOCK – rebuilt for mobile-first */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="bg-[#0B3A63] text-white p-6 rounded-xl shadow-md border border-[#15B097]/30">
          <h4 className="text-lg font-semibold mb-2">Procurement</h4>
          <p className="text-white/85 text-sm leading-relaxed">
            Buyers increasingly require environmental indicators before onboarding suppliers.
          </p>
        </div>

        <div className="bg-[#0B3A63] text-white p-6 rounded-xl shadow-md border border-[#15B097]/30">
          <h4 className="text-lg font-semibold mb-2">Banking</h4>
          <p className="text-white/85 text-sm leading-relaxed">
            Carbon impact now influences risk scoring and lending decisions.
          </p>
        </div>

        <div className="bg-[#0B3A63] text-white p-6 rounded-xl shadow-md border border-[#15B097]/30">
          <h4 className="text-lg font-semibold mb-2">Insurance</h4>
          <p className="text-white/85 text-sm leading-relaxed">
            Environmental indicators increasingly appear in eligibility frameworks.
          </p>
        </div>

        <div className="bg-[#0B3A63] text-white p-6 rounded-xl shadow-md border border-[#15B097]/30">
          <h4 className="text-lg font-semibold mb-2">Public Funding</h4>
          <p className="text-white/85 text-sm leading-relaxed">
            Many grants now require standardized CO₂ documentation as a baseline.
          </p>
        </div>

      </div>

      {/* PAIN POINTS – redesigned to avoid repetition */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">Non-standard formats</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Institutions reject inconsistent documents. Certif-Scope delivers uniformity.
          </p>
        </div>

        <div className="p-8 bg-[#15B097]/10 border border-[#15B097]/40 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">Delays & dependencies</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Traditional ESG reviews require consultants and weeks of processing time.
          </p>
        </div>

        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">Growing institutional pressure</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Even when companies are exempt, institutions still expect CO₂ indicators.
          </p>
        </div>

      </div>

      {/* RETURN BUTTON – identical across all sections */}
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
