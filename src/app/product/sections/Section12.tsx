"use client";

export default function Section12() {
  return (
    <section
      id="s12"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK — unique institutional design */}
      <div className="rounded-2xl p-12 bg-[#0B3A63] text-white shadow-lg relative overflow-hidden">

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          12. Institutional Acceptance Scenarios
        </h2>

        <p className="text-lg text-white/90 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope is designed to match the structure, expectations and review patterns used by 
          European institutions when evaluating CO₂ documentation. This section outlines how the 
          attestation integrates into real operational workflows without replacing existing ESG 
          frameworks, audits or regulatory reporting obligations.
        </p>
      </div>

      {/* 3-SCENARIO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* Scenario 1 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Procurement Screening
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Large buyers increasingly request environmental indicators during supplier onboarding.  
            Certif-Scope provides a standardized, verifiable CO₂ figure that matches the format 
            typically included in prequalification files.
          </p>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>• Immediate alignment with typical procurement checklists</li>
            <li>• Simple integration into vendor documentation packages</li>
            <li>• Removes delays linked to ESG pre-screening</li>
          </ul>
        </div>

        {/* Scenario 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Banking and Lending Workflows
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Banks use CO₂ indicators for risk scoring and credit evaluation.  
            Certif-Scope supports these workflows by providing a clear, structured and 
            tamper-proof document that is easy to archive and validate.
          </p>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>• Compatible with standard credit risk documentation flows</li>
            <li>• Third-party verification without server dependency</li>
            <li>• High trust thanks to cryptographic integrity</li>
          </ul>
        </div>

        {/* Scenario 3 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Insurance Eligibility and Compliance
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Insurers frequently request an environmental indicator when evaluating 
            eligibility or underwriting risks. Certif-Scope offers a standardized 
            format compatible with internal validation controls.
          </p>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>• Works with internal due-diligence structures</li>
            <li>• Trusted format for cross-department reviews</li>
            <li>• Consistent structure for long-term documentation</li>
          </ul>
        </div>
      </div>

      {/* INSTITUTIONAL PANEL — deep explanation */}
      <div className="mt-20 p-12 rounded-xl bg-[#F8FAFC] border border-gray-200 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Why Institutions Accept the Attestation Structure
        </h3>

        <p className="text-gray-700 max-w-5xl leading-relaxed">
          Certif-Scope follows formatting conventions widely used in European due-diligence workflows: 
          clear entity identifiers, a standardized results section, a transparent methodology reference, 
          and a cryptographic verification signature. The attestation is not positioned as a regulatory 
          report or a certification, but as a structured, verifiable supporting document compatible with 
          procurement, banking, insurance and grant processes.
        </p>
      </div>

      {/* RETURN BUTTON — Identical across all sections */}
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
