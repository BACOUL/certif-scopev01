"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK – Institutional, unique, non-redondant */}
      <div className="relative rounded-2xl p-12 bg-[#0B3A63] text-white shadow-lg overflow-hidden">

        {/* Accent Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          2. Problem Statement
        </h2>

        <p className="text-white/90 text-lg max-w-4xl mt-6 leading-relaxed relative z-10">
          SMEs across Europe increasingly face institutional demands for CO₂ indicators. 
          Yet most available documents are not standardized, not verifiable, and not aligned 
          with the expectations of procurement teams, banks, insurers and public authorities. 
          Certif-Scope resolves these concrete structural issues by providing a compliant, 
          verifiable and instantly available attestation.
        </p>

        {/* OFFICIAL REFERENCES BLOCK */}
        <div className="mt-6 text-sm text-white/80 underline space-y-1 relative z-10">
          <a href="https://eur-lex.europa.eu/eli/dir/2022/2464/oj" target="_blank" rel="noopener noreferrer">
            CSRD — Directive 2022/2464 (EU Official Journal)
          </a><br />
          <a href="https://efrag.org/lab3" target="_blank" rel="noopener noreferrer">
            ESRS E1 — Climate Standard (EFRAG official page)
          </a><br />
          <a href="https://ghgprotocol.org/standards" target="_blank" rel="noopener noreferrer">
            GHG Protocol — Corporate Standard (Official)
          </a><br />
          <a href="https://www.iso.org/standard/66453.html" target="_blank" rel="noopener noreferrer">
            ISO 14064-1 — GHG Quantification & Reporting
          </a>
        </div>

      </div>


      {/* 3-COLUMN PROBLEM ANALYSIS — No repetition from section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

        {/* PROBLEM 1 — Lack of Standardization */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            1. Lack of Standardized Documentation
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Institutions often reject CO₂ documents because formats vary drastically.
            ESRS E1 explicitly identifies the absence of standardization as a barrier
            to comparability, auditability and verification. Certif-Scope resolves this
            by enforcing a single structure recognized across procurement and finance.
          </p>
        </div>

        {/* PROBLEM 2 — Cost & Delay */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            2. Slow and Expensive ESG Processes
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Traditional consulting-based ESG reporting takes 4–12 weeks and can cost 
            €3,000 to €12,000+. Procurement teams increasingly set deadlines of 24–72 hours. 
            Certif-Scope enables SMEs to meet these requirements instantly without experts.
          </p>
        </div>

        {/* PROBLEM 3 — No Verification Mechanism */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            3. Absence of Independent Verification
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Most CO₂ reports lack cryptographic integrity and cannot be independently verified. 
            This contradicts ISO 14064-1 transparency requirements. Certif-Scope embeds a 
            cryptographic seal and offline-verifiable code to ensure institutional trust.
          </p>
        </div>

      </div>


      {/* INSTITUTIONAL CONTEXT — Stronger, deeper, fully credible */}
      <div className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-[#0B3A63]/25 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Institutional Drivers Behind the Requirements
        </h3>

        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Even though most SMEs are not directly subject to the CSRD, large corporations and 
          financial institutions are — and they must measure risks and supply-chain emissions 
          (Scope 3). This creates a cascading obligation: SMEs must now provide CO₂ indicators 
          to satisfy the reporting obligations of larger customers.
        </p>

        <ul className="mt-6 space-y-2 text-gray-700 text-sm">
          <li>• CSRD mandates environmental risk assessment and reporting for large groups</li>
          <li>• ESRS E1 requires upstream supplier climate data when material</li>
          <li>• Banks integrate CO₂ metrics into sustainability risk scoring (SFDR compliance)</li>
          <li>• Public procurement (GPP) increasingly requires environmental impact indicators</li>
        </ul>

        <p className="mt-4 text-gray-700 text-sm">
          Certif-Scope is designed to answer these cascading institutional expectations with a 
          single standardized, verifiable, multilingual-ready attestation.
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
