"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
    >
      {/* HEADER BLOCK */}
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-4">
          Key Benefits Summary
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl">
          Certif-Scope delivers a fast, compliant and verifiable CO₂ attestation 
          tailored for European institutional requirements. Every benefit focuses 
          on reducing friction, increasing acceptance and ensuring transparency 
          for procurement, banks, insurers and compliance teams.
        </p>
      </div>

      {/* HIGHLIGHT PANEL — DIFFERENT DESIGN */}
      <div className="rounded-xl bg-white shadow-xl border-l-8 border-[#15B097] p-8 md:p-10 mb-16">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          A single document. Multiple compliance needs solved.
        </h3>
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          One standardized attestation instantly covers diverse requirements:  
          procurement onboarding, ESG screening, financial risk scoring, loan evaluation, 
          insurance declarations and supplier compliance checks.  
          It avoids consultants, delays and rejected submissions.
        </p>
      </div>

      {/* GRID OF BENEFITS — 6 ITEMS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* BENEFIT 1 */}
        <div className="bg-[#F8FAFC] p-8 rounded-xl border border-gray-200 shadow-sm">
          <h4 className="text-xl font-bold text-[#0B3A63] mb-3">
            1. Instant availability
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Generate a complete, institution-ready CO₂ attestation within seconds. 
            No back-and-forth validation, no consultant delays and no complex forms. 
            Ideal for urgent tenders, grants and onboarding processes.
          </p>
        </div>

        {/* BENEFIT 2 */}
        <div className="bg-[#F8FAFC] p-8 rounded-xl border border-gray-200 shadow-sm">
          <h4 className="text-xl font-bold text-[#0B3A63] mb-3">
            2. Standardized format trusted by reviewers
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            The document follows a clear structure aligned with European procurement 
            and compliance expectations: methodology, emission factors, results, 
            verification ID and timestamp.
          </p>
        </div>

        {/* BENEFIT 3 */}
        <div className="bg-[#F8FAFC] p-8 rounded-xl border border-gray-200 shadow-sm">
          <h4 className="text-xl font-bold text-[#0B3A63] mb-3">
            3. Fully verifiable by third-parties
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Each attestation includes a cryptographic hash and verification code. 
            Banks and compliance teams can authenticate it independently, without 
            needing to contact Certif-Scope.
          </p>
        </div>

        {/* BENEFIT 4 */}
        <div className="bg-[#F8FAFC] p-8 rounded-xl border border-gray-200 shadow-sm">
          <h4 className="text-xl font-bold text-[#0B3A63] mb-3">
            4. Cost-efficient & scalable
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            No expensive ESG consultancy packages. A repeatable, affordable and high-credibility 
            attestation for SMEs, startups and suppliers across all sectors.
          </p>
        </div>

        {/* BENEFIT 5 */}
        <div className="bg-[#F8FAFC] p-8 rounded-xl border border-gray-200 shadow-sm">
          <h4 className="text-xl font-bold text-[#0B3A63] mb-3">
            5. Accepted across Europe
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Designed to pass European institutional checks. The structure ensures clarity, 
            consistency and compliance with common ESG evaluation workflows.
          </p>
        </div>

        {/* BENEFIT 6 */}
        <div className="bg-[#F8FAFC] p-8 rounded-xl border border-gray-200 shadow-sm">
          <h4 className="text-xl font-bold text-[#0B3A63] mb-3">
            6. Transparent methodology
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Based on recognized emission factors and a documented spend-based model. 
            Every step is described clearly to avoid misinterpretation or rejection.
          </p>
        </div>
      </div>

      {/* BOTTOM CTA STRIP */}
      <div className="mt-16 bg-[#15B097] p-8 rounded-xl shadow text-white">
        <h4 className="text-2xl font-semibold mb-2">
          Designed for instant acceptance by institutional reviewers
        </h4>
        <p className="text-white/90 max-w-3xl">
          Procurement and compliance teams appreciate clarity and verifiable data. Certif-Scope 
          provides both — without the delays or complexity of traditional ESG reporting.
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
