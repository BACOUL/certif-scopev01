"use client";

export default function Section14() {
  return (
    <section
      id="s14"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK — clean institutional white design */}
      <div className="p-12 rounded-2xl bg-white border border-gray-200 shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          14. Document Structure & Institutional-Ready Formatting
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          Certif-Scope provides a standardized CO₂ attestation designed to be compatible 
          with administrative, procurement, banking and insurance document review systems. 
          This section explains the internal layout of the attestation — without detailing 
          regulatory methodology — and focuses on clarity, consistency and institutional 
          readability.
        </p>
      </div>

      {/* 3-COLUMN LAYOUT — unique structure for Section 14 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* BLOCK 1 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-sm border border-[#15B097]/30">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Consistent Block Order
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            All attestations follow the exact same block sequence to ensure readability 
            and compatibility with institutional workflows requiring predictable structure.
          </p>
          <ul className="text-gray-700 text-sm space-y-2 mt-4">
            <li>• Entity identification</li>
            <li>• Categorized activity data</li>
            <li>• Summary indicators</li>
            <li>• Verification information</li>
          </ul>
        </div>

        {/* BLOCK 2 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Machine-Readable Fields
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Key fields are formatted in a way that supports automated processing by 
            internal systems such as procurement portals, financial scoring tools or 
            eligibility platforms.
          </p>
          <ul className="text-gray-700 text-sm space-y-2 mt-4">
            <li>• Standardized field labels</li>
            <li>• Uniform field placement</li>
            <li>• Consistent naming syntax</li>
          </ul>
        </div>

        {/* BLOCK 3 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-sm border border-[#15B097]/30">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Clear Visual Hierarchy
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The attestation uses typographic hierarchy and spacing standards to ensure 
            fast reading by human reviewers and automated extraction tools.
          </p>
          <ul className="text-gray-700 text-sm space-y-2 mt-4">
            <li>• Defined header hierarchy</li>
            <li>• Strategic whitespace usage</li>
            <li>• Consistent grid system</li>
          </ul>
        </div>
      </div>

      {/* DEEP EXPLANATION BLOCK */}
      <div className="mt-20 p-12 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Why Formatting Matters in Institutional Review
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          Administrative and financial institutions prioritize document consistency because 
          inconsistent formatting leads to rejections, manual reprocessing and additional 
          verification requests. Certif-Scope removes ambiguity by ensuring that every 
          attestation follows a strict layout, making it immediately compatible with the 
          workflows used for procurement, eligibility assessment, ESG screening and risk 
          analysis across Europe.
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
