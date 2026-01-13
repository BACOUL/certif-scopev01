"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Institutional layout */}
      <div className="p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/20 shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] mb-6">
          3. Why the Product Exists
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl leading-relaxed">
          Certif-Scope exists because European institutions increasingly require CO₂ indicators 
          from suppliers, lenders, and insured entities — even when these SMEs are not directly 
          subject to the CSRD. Regulatory frameworks impose obligations on large companies and 
          financial institutions, who must then collect upstream data from smaller partners. 
          Certif-Scope provides a standardized, verifiable and fast response to this cascading 
          requirement.
        </p>
      </div>

      {/* 1 — CASCADE REGULATION MECHANISM */}
      <div className="mt-16 p-10 rounded-xl bg-white border border-gray-200 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          1. The Cascading Regulatory Requirement
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed max-w-4xl">
          Several European regulations indirectly force SMEs to provide climate indicators. 
          The mechanism works as follows:
        </p>

        <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>
            • Large groups subject to <strong>CSRD Article 19a</strong> must disclose climate-related risks.<br/>
            <a
              href="https://eur-lex.europa.eu/eli/reg/2022/2464"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#0B3A63]"
            >
              EUR-Lex: CSRD Regulation 2022/2464
            </a>
          </li>

          <li>
            • <strong>ESRS E1-9</strong> obliges them to map emissions in the upstream value chain.<br/>
            <a
              href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R2772"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#0B3A63]"
            >
              EUR-Lex: ESRS Delegated Regulation 2023/2772
            </a>
          </li>

          <li>
            • Banks must assess climate exposure under <strong>EBA ESG Risk Guidelines</strong>.<br/>
            <a
              href="https://www.eba.europa.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#0B3A63]"
            >
              European Banking Authority – ESG Guidelines
            </a>
          </li>

          <li>
            • Public buyers apply mandatory <strong>Green Public Procurement (GPP)</strong> criteria.<br/>
            <a
              href="https://environment.ec.europa.eu/topics/sustainable-development/green-public-procurement_en"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#0B3A63]"
            >
              European Commission – Green Public Procurement
            </a>
          </li>
        </ul>

        <p className="text-gray-700 text-sm mt-4">
          This creates a compliance chain where SMEs must provide CO₂ indicators to satisfy 
          their partners' regulatory obligations.
        </p>
      </div>

      {/* 1B — CONCRETE EXAMPLE OF THE CHAIN */}
      <div className="mt-12 p-10 rounded-xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Concrete Example of the Compliance Chain
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed">
          A real-world scenario shows how the regulatory cascade forces SMEs to provide CO₂ indicators:
        </p>

        <ul className="mt-4 space-y-3 text-gray-700 text-sm leading-relaxed">
          <li>
            <strong>1. Large company (subject to CSRD)</strong>  
            Must report its Scope 3 emissions under ESRS E1. Requests CO₂ data from all suppliers.
          </li>

          <li>
            <strong>2. Bank financing the large company</strong>  
            Must evaluate climate-related risks of the borrower under EBA ESG rules. Requests detailed 
            justification, including upstream CO₂ indicators.
          </li>

          <li>
            <strong>3. SME (supplier)</strong>  
            Is asked to provide a standardized CO₂ indicator to remain eligible in the procurement chain 
            and maintain financing conditions of its client.
          </li>
        </ul>

        <p className="text-gray-700 text-sm mt-4 leading-relaxed">
          Certif-Scope gives the SME a fast, verifiable, institution-ready document, completing the chain.
        </p>
      </div>

      {/* 2 — MARKET GAP IDENTIFICATION */}
      <div className="mt-16 p-10 rounded-xl bg-[#0B3A63] text-white shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold mb-4 relative z-10">
          2. The Gap: No Standardized, Verifiable, Affordable Tool for SMEs
        </h3>

        <p className="text-white/90 text-sm leading-relaxed max-w-4xl relative z-10">
          Current ESG reporting tools are expensive, slow, and designed for large companies. 
          SMEs rarely have LCA data, internal ESG departments or consulting budgets. As a result:
        </p>

        <ul className="mt-4 space-y-2 text-white/90 text-sm relative z-10">
          <li>• Reports take 4–12 weeks and cost €3,000–€12,000+</li>
          <li>• Output formats vary, causing frequent institutional rejection</li>
          <li>• No cryptographic verification, making documents unverifiable</li>
        </ul>

        <p className="text-white/90 text-sm mt-4 relative z-10">
          Certif-Scope fills this gap with a fast, standardized, cryptographically verifiable document.
        </p>
      </div>

      {/* 3 — EVIDENCE & OFFICIAL SOURCES */}
      <div className="mt-16 p-10 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          3. Verified Institutional Evidence
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed">
          Multiple official sources confirm the requirement for SMEs to provide upstream climate data:
        </p>

        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li>
            • <a href="https://eur-lex.europa.eu/eli/reg/2022/2464" target="_blank" className="underline text-[#0B3A63]">
                CSRD Regulation 2022/2464
              </a> — mandates reporting of climate risks and value-chain impacts.
          </li>
          <li>
            • <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R2772" target="_blank" className="underline text-[#0B3A63]">
                ESRS E1 Climate Standard (2023/2772)
              </a> — requires emissions data from suppliers.
          </li>
          <li>
            • <a href="https://www.eba.europa.eu" target="_blank" className="underline text-[#0B3A63]">
                EBA ESG Risk Guidelines
              </a> — banks must assess climate exposure of borrowers.
          </li>
          <li>
            • <a href="https://environment.ec.europa.eu/topics/sustainable-development/green-public-procurement_en" 
                target="_blank"
                className="underline text-[#0B3A63]">
                EU Green Public Procurement (GPP)
              </a> — public tenders increasingly require environmental indicators.
          </li>
        </ul>
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
