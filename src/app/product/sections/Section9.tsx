"use client";

export default function Section9() {
  return (
    <section
      id="s9"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* TITLE — institutional & consistent */}
      <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-12">
        9 — Sample PDF Preview
      </h2>

      {/* UNIQUE DESIGN: CENTERED MOCKUP + RIGHT INFO PANEL */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* LEFT — DOCUMENT MOCKUP */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 relative overflow-hidden">

          {/* Decorative accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-transparent pointer-events-none"></div>

          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-6">
            Document Structure Overview
          </h3>

          <p className="text-gray-700 leading-relaxed mb-8">
            Certif-Scope produces a standardized CO₂ attestation in PDF format,
            structured according to institutional expectations and designed for 
            direct submission in procurement, banking, and compliance workflows.
          </p>

          {/* FAKE PDF PREVIEW BOX */}
          <div className="bg-[#F8FAFC] border border-gray-300 rounded-xl shadow-inner p-6">
            <div className="aspect-[3/4] w-full border border-gray-300 rounded-md bg-white flex items-center justify-center text-gray-400 text-sm">
              PDF Preview Placeholder  
              {/* replace with an <Image /> later if needed */}
            </div>
          </div>

          {/* INFO NOTE BELOW PREVIEW */}
          <p className="text-gray-500 text-xs mt-4">
            This visual preview is illustrative. The final PDF includes structured fields,
            identifiers, and formatting matching European institutional requirements.
          </p>
        </div>

        {/* RIGHT — DETAILED PDF CONTENT BREAKDOWN */}
        <div className="space-y-10">

          {/* BLOCK 1 */}
          <div className="p-8 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent opacity-50"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Key Sections Included in the PDF
              </h3>

              <ul className="space-y-3 text-white/90 text-sm">
                <li>• Business identification & activity classification</li>
                <li>• Summary of annual spending categories</li>
                <li>• CO₂ indicators clearly structured for ESG review</li>
                <li>• Verification ID & cryptographic integrity stamp</li>
                <li>• Document timestamp & unique trace reference</li>
              </ul>
            </div>

          </div>

          {/* BLOCK 2 */}
          <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
              Why Institutions Accept This Format
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The document uses standardized terminology, consistent formatting,
              and clarity suitable for automated review systems used by 
              procurement teams, insurers, and financial institutions.
              It avoids presentation ambiguity and ensures compatibility 
              with compliance checklists.
            </p>
          </div>

          {/* BLOCK 3 */}
          <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
              Cross-Platform Compatibility
            </h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• PDF/A-compatible structure for long-term archiving</li>
              <li>• Works on all devices (laptop, mobile, tablet)</li>
              <li>• No external software required to validate integrity</li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM STRIP — reassurance message */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm">
        <h4 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Designed for European Compliance Frameworks
        </h4>
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          The PDF format aligns with institutional expectations across Europe,
          ensuring clarity, reviewability, and durability. It facilitates rapid
          onboarding, reduces friction in procurement processes, and provides
          a reliable CO₂ indicator compatible with ESG scoring systems.
        </p>
      </div>

      {/* RETURN BUTTON — universal & identical */}
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
