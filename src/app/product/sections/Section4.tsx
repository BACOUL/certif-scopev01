"use client";

export default function Section4() {
  return (
    <section
      id="s4"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK — distinct premium design */}
      <div className="bg-[#F8FAFC] border border-gray-200 p-12 rounded-2xl shadow-sm">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] leading-tight">
          Section 4 — The Solution Provided
        </h2>
        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          Certif-Scope offers a unified, fast, and institution-ready attestation format that 
          transforms raw business data into a clear, standardized CO₂ disclosure. The entire 
          process is automated, audit-ready, and aligned with the expectations of procurement, 
          banking, insurance, and public funding assessments in Europe.
        </p>
      </div>

      {/* 3-STEP SYSTEM BLOCK — Inputs → Engine → Output */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* STEP 1 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <div className="w-12 h-12 rounded-full bg-[#15B097] flex items-center justify-center text-white font-bold text-xl mb-4">
            1
          </div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">Input Collection</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Users enter categorized annual spending, optional activity details, and business 
            identifiers. The interface includes automatic validation to avoid missing or 
            inconsistent information.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Clean and minimal form structure</li>
            <li>• Sector-specific options available</li>
            <li>• GDPR-compliant data handling</li>
          </ul>
        </div>

        {/* STEP 2 */}
        <div className="p-8 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">

          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-xl mb-4 relative z-10">
            2
          </div>
          <h3 className="text-xl font-semibold mb-3 relative z-10">Automated Engine</h3>
          <p className="text-white/90 text-sm leading-relaxed relative z-10">
            The system processes inputs using deterministic rules and recognized European 
            emission factors. The output is reproducible, consistent and free from manual 
            interpretation errors.  
          </p>

          <ul className="mt-3 text-sm text-white/85 space-y-1 relative z-10">
            <li>• Standardized processing logic</li>
            <li>• Deterministic output</li>
            <li>• Clear auditability</li>
          </ul>
        </div>

        {/* STEP 3 */}
        <div className="p-8 bg-white rounded-xl border border-[#15B097] shadow-md">
          <div className="w-12 h-12 rounded-full bg-[#15B097] flex items-center justify-center text-white font-bold text-xl mb-4">
            3
          </div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">Verified Output</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The system generates a standardized PDF including structured indicators, a 
            verification ID, a timestamp, and a cryptographic integrity seal enabling 
            independent authentication by third parties.
          </p>

          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Institution-ready format</li>
            <li>• Unique verification identifier</li>
            <li>• Offline authenticity validation</li>
          </ul>
        </div>
      </div>

      {/* BENEFITS BLOCK — different layout to avoid repetition */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="p-10 bg-[#F8FAFC] rounded-xl border border-gray-200 shadow-sm">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">Fast & Repeatable</h4>
          <p className="text-gray-700 leading-relaxed text-sm">
            The system enables repeated issuance without consultants or delays.  
            Ideal for companies submitting documents to multiple institutions.
          </p>
        </div>

        <div className="p-10 bg-[#F8FAFC] rounded-xl border border-gray-200 shadow-sm">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">Institution-Compatible</h4>
          <p className="text-gray-700 leading-relaxed text-sm">
            The output follows a predictable structure that simplifies verification 
            for procurement, banking risk teams, and funding assessors.
          </p>
        </div>
      </div>

      {/* CTA BLOCK — distinctive design */}
      <div className="mt-20 p-10 rounded-xl bg-[#0B3A63] text-white shadow-md">
        <h4 className="text-2xl font-semibold mb-3">What This Means in Practice</h4>
        <p className="text-white/90 max-w-4xl leading-relaxed">
          Certif-Scope replaces multi-week manual assessment cycles with a predictable, 
          verifiable, and standardized CO₂ attestation — reducing friction, accelerating 
          onboarding, and improving compliance accuracy across European workflows.
        </p>
      </div>

      {/* UNIVERSAL RETURN BUTTON */}
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
