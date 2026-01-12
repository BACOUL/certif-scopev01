"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
    >
      {/* HEADER – premium institutional style */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/5 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          1. Product Overview
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10">
          Certif-Scope provides an instant, standardized, and verifiable CO₂ attestation
          formatted for procurement, banking, insurance, investment onboarding, and compliance
          frameworks across Europe. It aligns with recognized European and international
          guidelines governing environmental disclosure formats, including elements also found
          in CSRD (EU 2022/2464), ESRS E1 climate-related disclosure structure, and GHG
          Protocol spend-based approaches.
        </p>
      </div>

      {/* 3-Column Grid – Unique design */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
        
        {/* CARD 1 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Institutional Format
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Includes the standardized elements expected by institutions under European
            documentation practices: company identifiers, categorized spending structure,
            emissions results, verification identifier, and summary consistent with
            disclosure logic used in ESRS E1. 
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm hover:shadow-md transition">
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Delivered in Under 30 Seconds
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The system transforms annual spend data into an attestation based on the
            spend-based method referenced in the GHG Protocol guidelines. The output is
            formatted instantly, eliminating delays associated with traditional ESG audits.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Independent Verification
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Each attestation includes a cryptographic hash and a verification identifier,
            enabling offline integrity checks. This approach mirrors transparency principles
            recommended in ISO 14064-1 (quantification & reporting), ensuring data integrity
            without relying on Certif-Scope servers.
          </p>
        </div>

      </div>

      {/* Explanation Strip */}
      <div className="mt-16 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h4 className="text-2xl font-bold relative z-10">Why This Matters</h4>

        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          European organizations increasingly require standardized CO₂ documentation for
          supplier onboarding, risk assessment, and compliance workflows. Certif-Scope
          provides SMEs with an accessible, reproducible, and verifiable alternative to
          multi-week ESG reporting processes, aligning with the institutional expectations
          shaped by CSRD, ESRS, GHG Protocol, ISO 14064-1 and European procurement norms.
        </p>
      </div>

      {/* RETURN BUTTON – identical across ALL sections */}
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
