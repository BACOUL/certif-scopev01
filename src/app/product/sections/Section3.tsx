"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* TITLE — Standardized global rule */}
      <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-10">
        3 — Why the Product Exists
      </h2>

      {/* SPLIT HERO BLOCK — unique premium layout */}
      <div className="rounded-2xl bg-[#0B3A63] text-white p-12 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10 relative overflow-hidden">

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent"></div>

        {/* LEFT TEXT CONTENT */}
        <div className="relative z-10">
          <p className="text-white/90 text-lg leading-relaxed">
            European institutions increasingly require proof of CO₂ impact from suppliers,
            partners and applicants. Until now, SMEs relied on slow, expensive and
            non-standardized processes that do not meet the expectations of procurement,
            banking or insurance teams. Certif-Scope was created to fill this operational
            and compliance gap by offering a fast, consistent and verifiable attestation
            designed for institutional review.
          </p>
        </div>

        {/* RIGHT VISUAL GRID */}
        <div className="relative z-10 grid grid-cols-2 gap-4">

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
            <h4 className="text-lg font-semibold">Procurement</h4>
            <p className="text-white/80 text-sm mt-2">
              Buyers increasingly require environmental indicators before onboarding suppliers.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
            <h4 className="text-lg font-semibold">Banking</h4>
            <p className="text-white/80 text-sm mt-2">
              CO₂ footprint influences risk scoring and lending decisions.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
            <h4 className="text-lg font-semibold">Insurance</h4>
            <p className="text-white/80 text-sm mt-2">
              Eligibility frameworks increasingly integrate environmental disclosure.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
            <h4 className="text-lg font-semibold">Public Funding</h4>
            <p className="text-white/80 text-sm mt-2">
              Many grants now require consistent and transparent environmental documentation.
            </p>
          </div>

        </div>
      </div>

      {/* PAIN POINTS — NEW DESIGN (no repetition vs Section 1 & 2) */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Lack of Standardization
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Before Certif-Scope, most SMEs submitted inconsistent formats that institutions
            rejected due to missing fields, unclear methodology, or unverifiable data.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            High Cost & Long Delays
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            ESG consultants and carbon audits cost thousands of euros and take weeks.
            SMEs needed a fast alternative accepted by banks and procurement teams.
          </p>
        </div>

        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Growing Institutional Pressure
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            European regulations are increasing verification requirements. Even when
            SMEs are exempt, institutions still expect a reliable CO₂ indicator.
          </p>
        </div>

      </div>

      {/* INSTITUTIONAL CONTEXT BLOCK — no methodology, no regulation detail */}
      <div className="mt-20 p-10 rounded-xl bg-[#15B097]/10 border border-[#15B097]/40 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Bridging the Gap Between SMEs and Institutional Expectations
        </h3>
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Certif-Scope provides a missing link: a clear, structured and verifiable
          CO₂ attestation that institutions can review without ambiguity. It ensures
          SMEs remain competitive in procurement pipelines, banking applications,
          funding programs and insurance eligibility processes across Europe.
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
