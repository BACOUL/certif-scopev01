"use client";

export default function Section6() {
  return (
    <section
      id="s6"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK */}
      <div className="p-12 bg-white rounded-2xl border border-gray-200 shadow-sm">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] leading-tight">
          Section 6 — How the System Works
        </h2>
        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          Certif-Scope provides an institution-ready CO₂ attestation through a fully automated 
          workflow designed for clarity, reproducibility and European acceptance.  
          The process below outlines how inputs move through the system to produce a 
          standardized, verifiable, and compliance-ready output.
        </p>
      </div>

      {/* 5-STEP PROCESS — clean vertical structure */}
      <div className="mt-20 grid grid-cols-1 gap-10 border-l-4 border-[#15B097] pl-8">

        {/* STEP 1 */}
        <div className="relative">
          <span className="absolute -left-11 top-0 bg-[#15B097] text-white font-bold w-9 h-9 flex items-center justify-center rounded-full shadow-md">
            1
          </span>
          <h3 className="text-2xl font-semibold text-[#0B3A63]">Business Inputs</h3>
          <p className="text-gray-700 mt-3 max-w-3xl leading-relaxed">
            The company provides annual spending totals categorized by activity type.  
            The interface includes validation rules to ensure accuracy and GDPR compliance.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Spend categories</li>
            <li>• Optional sector refinements</li>
            <li>• Automatic validation checks</li>
          </ul>
        </div>

        {/* STEP 2 */}
        <div className="relative">
          <span className="absolute -left-11 top-0 bg-[#15B097] text-white font-bold w-9 h-9 flex items-center justify-center rounded-full shadow-md">
            2
          </span>
          <h3 className="text-2xl font-semibold text-[#0B3A63]">Automated Calculation Engine</h3>
          <p className="text-gray-700 mt-3 max-w-3xl leading-relaxed">
            Inputs pass through a standardized calculation workflow aligned with European 
            compliance expectations. Rules are deterministic, ensuring reproducible results.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Verified emission factor database</li>
            <li>• Deterministic calculation rules</li>
            <li>• Real-time processing</li>
          </ul>
        </div>

        {/* STEP 3 */}
        <div className="relative">
          <span className="absolute -left-11 top-0 bg-[#15B097] text-white font-bold w-9 h-9 flex items-center justify-center rounded-full shadow-md">
            3
          </span>
          <h3 className="text-2xl font-semibold text-[#0B3A63]">Generation of the Attestation</h3>
          <p className="text-gray-700 mt-3 max-w-3xl leading-relaxed">
            A standardized, professional PDF is created instantly.  
            It includes summary indicators, contextual information and classification fields 
            used by procurement, banking and insurance teams.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Professional layout</li>
            <li>• Scope summary & indicators</li>
            <li>• Classification & identifiers</li>
          </ul>
        </div>

        {/* STEP 4 */}
        <div className="relative">
          <span className="absolute -left-11 top-0 bg-[#15B097] text-white font-bold w-9 h-9 flex items-center justify-center rounded-full shadow-md">
            4
          </span>
          <h3 className="text-2xl font-semibold text-[#0B3A63]">Cryptographic Verification Seal</h3>
          <p className="text-gray-700 mt-3 max-w-3xl leading-relaxed">
            The PDF is secured with a cryptographic hash and verification ID.  
            Verification is possible offline, without reliance on Certif-Scope servers.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Unique verification identifier</li>
            <li>• Offline cryptographic proof</li>
            <li>• Integrity validation by third-parties</li>
          </ul>
        </div>

        {/* STEP 5 */}
        <div className="relative">
          <span className="absolute -left-11 top-0 bg-[#15B097] text-white font-bold w-9 h-9 flex items-center justify-center rounded-full shadow-md">
            5
          </span>
          <h3 className="text-2xl font-semibold text-[#0B3A63]">Submission to Institutions</h3>
          <p className="text-gray-700 mt-3 max-w-3xl leading-relaxed">
            The document is compatible with procurement portals, banking ESG forms, 
            insurance underwriting tools and public grant applications.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Supplier onboarding</li>
            <li>• Loan applications</li>
            <li>• Grant eligibility documentation</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BLOCK — institutional reassurance */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h4 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Clear, Automated, Institutional-Ready
        </h4>
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          The workflow ensures standardized, reproducible and verifiable results, eliminating 
          delays associated with traditional environmental reporting.  
          Every step is formatted for operational acceptance and third-party verification.
        </p>
      </div>

      {/* UNIVERSAL RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] 
                     text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
