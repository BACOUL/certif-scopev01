"use client";

export default function Section1() {
  return (
    <section id="s1" className="scroll-mt-24 border-b border-gray-200 pb-20">

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/5 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          1. Product Overview
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10">
          Certif-Scope provides SMEs with a fast and structured way to deliver CO₂e information 
          when clients, buyers or banks request it. Instead of complex reporting 
          or audits, the platform generates a clear and standardized CO₂e Attestation
          using only annual spending (€). This spend-based method is practical for 
          organisations that do not track physical activity data and need 
          an immediate, verifiable document.
        </p>

        <p className="text-md text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10">
          The output format is designed to fit procurement workflows, supplier portals, 
          onboarding documentation and banking pre-assessments. The document 
          includes key indicators, a category breakdown and a unique verification ID 
          based on a deterministic integrity hash, allowing partners to confirm authenticity 
          instantly without requiring stored data.
        </p>
      </div>

      {/* 3-COLUMN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        {/* CARD 1 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Clear, Standardized Output
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Each Attestation follows a simple and consistent format that matches what 
            procurement teams typically request: indicators, segmentation by 
            spending category and a summary suitable for evaluation.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm hover:shadow-md transition">
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Instant Calculation
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Based on the spend-based calculation pathway from the GHG Protocol, the 
            method converts expenses into indicative CO₂e values in seconds—ideal 
            for SMEs without physical data or internal sustainability staff.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Verifiable Authenticity
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Every Attestation includes a cryptographic hash and a verification ID. 
            Partners can confirm integrity instantly by checking the ID online, 
            with no login and no stored data required.
          </p>
        </div>
      </div>

      {/* LIMITATION BOX */}
      <div className="mt-16 p-8 bg-white rounded-xl border border-gray-300 shadow-md">
        <h4 className="text-xl font-bold text-[#0B3A63] mb-3">Important Clarification</h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          Certif-Scope does not produce regulatory reporting (CSRD/ESRS), audited 
          greenhouse gas inventories or lifecycle assessments. It generates an 
          indicative, spend-based CO₂e document suitable for screening, 
          procurement and pre-assessment workflows where a simple and verifiable 
          indicator is required.
        </p>
      </div>

      {/* HIGHLIGHT BOX */}
      <div className="mt-16 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h4 className="text-2xl font-bold relative z-10">Why This Matters</h4>

        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          Across Europe, SMEs are increasingly required to provide CO₂e information 
          during onboarding, procurement, insurance or financing procedures. 
          Certif-Scope enables them to answer these requests immediately, 
          using a reliable, consistent and verification-ready document.
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
