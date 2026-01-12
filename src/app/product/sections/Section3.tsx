"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK — distinct design from previous sections */}
      <div className="p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/20 shadow-md relative">

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] mb-6">
          3. Why the Product Exists
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl leading-relaxed">
          Certif-Scope addresses a structural gap in European compliance and procurement workflows:
          SMEs are increasingly required to provide CO₂ data even though they are not subject to
          the full CSRD disclosure obligations. Large regulated companies now cascade their
          Scope-3 screening requirements to suppliers, making CO₂ indicators unavoidable for
          onboarding, public tenders, risk scoring and ESG due diligence.
        </p>
      </div>


      {/* 2-COLUMN INSTITUTIONAL ANALYSIS BLOCK */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        
        {/* LEFT COLUMN */}
        <div className="p-10 bg-white rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            Procurement and Risk Teams Are Mandated to Evaluate Environmental Exposure
          </h3>

          <p className="text-gray-700 leading-relaxed text-sm">
            Under CSRD (Directive 2022/2464) and ESRS frameworks, large companies must report on
            climate-related risks and upstream value-chain impacts. As a consequence, suppliers
            must provide CO₂ metrics—even if they are not directly regulated.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li>• ESRS E1-5: requires evaluation of GHG emissions across the value chain</li>
            <li>• ESRS 2: mandates structured data suitable for external verification</li>
            <li>• Public buyers increasingly align tenders with EU climate objectives</li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="p-10 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 to-transparent opacity-20"></div>

          <h3 className="text-2xl font-semibold mb-4 relative z-10">
            SMEs Lack Affordable, Fast and Standardized Tools
          </h3>

          <p className="text-white/90 text-sm leading-relaxed relative z-10">
            Traditional ESG reporting solutions are designed for large corporations and require
            multi-week consulting work. These methods are not adapted to small companies that need
            simple, inexpensive, standardized and verifiable output.
          </p>

          <ul className="mt-4 space-y-2 text-white/90 text-sm relative z-10">
            <li>• High consulting costs (several thousand euros)</li>
            <li>• Long delivery cycles incompatible with tender deadlines</li>
            <li>• Reports rejected due to inconsistent formatting</li>
          </ul>
        </div>

      </div>


      {/* EVIDENCE-BASED CONTEXT BLOCK — UNIQUE LAYOUT */}
      <div className="mt-20 p-10 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">

        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Evidence From European Institutional Expectations
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed">
          Multiple European-level documents confirm that financial and procurement institutions
          require upstream climate data even from non-regulated entities. Examples:
        </p>

        <ul className="mt-4 space-y-2 text-gray-700 text-sm">
          <li>
            • <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022L2464" target="_blank" className="text-[#0B3A63] underline">CSRD Directive 2022/2464</a> obliges large companies to collect climate data from suppliers.
          </li>
          <li>
            • <a href="https://www.efrag.org/lab3" target="_blank" className="text-[#0B3A63] underline">ESRS E1</a> explicitly addresses GHG emissions across the value chain.
          </li>
          <li>
            • <a href="https://www.iso.org/standard/66453.html" target="_blank" className="text-[#0B3A63] underline">ISO 14064-1</a> defines principles for reporting GHG emissions with transparency and consistency.
          </li>
        </ul>

        <p className="text-gray-700 text-sm mt-4 leading-relaxed">
          Certif-Scope exists precisely because SMEs need a way to comply with these cascading 
          requirements without absorbing the cost and complexity of corporate-grade ESG workflows.
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
