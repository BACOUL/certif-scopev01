"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK — premium visual identity */}
      <div className="p-10 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-sm">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-4">
          Section 2 — Key Benefits Summary
        </h2>
        <p className="text-lg text-gray-700 max-w-4xl leading-relaxed">
          Certif-Scope delivers a fast, standardized and independently verifiable CO₂ attestation 
          specially designed for institutional processes across Europe. This section highlights 
          the advantages that directly impact procurement onboarding, banking risk assessment, 
          insurance eligibility and public-sector funding workflows.
        </p>
      </div>

      {/* BENEFITS GRID — distinct design */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        {/* Benefit 1 */}
        <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Fast & Fully Automated
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Generate a complete, review-ready CO₂ attestation in under 30 seconds. Ideal when 
            institutions request urgent documentation for compliance or onboarding.
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-lg border border-[#15B097]/30">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Standardized & Predictable Format
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Institutions receive clearly structured information: company identifiers, 
            sector classification, spend overview, emission indicators and verification ID.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Independently Verifiable
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Each attestation includes a cryptographic verification hash. Banks, insurers and 
            public agencies can validate authenticity without contacting Certif-Scope.
          </p>
        </div>
      </div>

      {/* SECOND BENEFIT ROW — new layout to avoid repetition */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">

        <div className="p-8 rounded-xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>
          <h3 className="text-xl font-semibold relative z-10">
            Designed for European Institutional Use
          </h3>
          <p className="text-white/90 text-sm leading-relaxed mt-3 relative z-10">
            Certif-Scope is structured to match procurement, risk analysis and public-funding 
            evaluation formats used across the EU. Clear fields, harmonised terminology, 
            multilingual compatibility and no ambiguous data points.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Scalable for Repeated Use
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mt-3">
            Generate updated attestations whenever needed — during supplier onboarding, loan 
            renewals, ESG reviews, or public-grant applications. No consultancy fees.
          </p>
        </div>

      </div>

      {/* INFO STRIP — institutional tone */}
      <div className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-gray-200 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Designed for Cross-Border Acceptance
        </h3>
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          The structure is intentionally language-neutral and compatible with multilingual review 
          teams across Europe. Each field is labelled and standardized so procurement, banking and 
          compliance teams can interpret the document without any industry-specific knowledge.
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
