"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/20 shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] mb-6">
          3. Why the Product Exists
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl leading-relaxed">
          Certif-Scope exists because many SMEs are now asked to provide CO₂e-related 
          information by clients, banks or procurement teams. This happens even when 
          the SME is not directly subject to CSRD obligations. Larger regulated 
          entities must collect climate indicators across their value chain, and SMEs 
          are increasingly involved in that upstream information flow.
        </p>
      </div>

      {/* REGULATORY CASCADE */}
      <div className="mt-16 p-10 rounded-xl bg-white border border-gray-200 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          1. The Regulatory Cascade
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed max-w-4xl">
          European sustainability rules apply primarily to large companies and 
          financial institutions. However, these organisations must collect data 
          from their suppliers, creating indirect requests for SMEs.
        </p>

        <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>
            • Under <strong>CSRD Regulation 2022/2464</strong>, large companies must disclose 
              climate risks and value-chain environmental impacts.
          </li>

          <li>
            • <strong>ESRS E1</strong> requires them to gather emissions-related information from 
              upstream suppliers when relevant.
          </li>

          <li>
            • Banks must assess climate exposure according to <strong>EBA ESG Risk Guidelines</strong>, 
              often requiring basic indicators from clients and their suppliers.
          </li>

          <li>
            • Public tenders reference <strong>Green Public Procurement</strong> (GPP) criteria, which 
              frequently include environmental indicators.
          </li>
        </ul>

        <p className="text-gray-700 text-sm mt-4">
          This explains why SMEs increasingly receive requests for CO₂e information, even 
          though they are not the ones directly regulated.
        </p>
      </div>

      {/* EXAMPLE */}
      <div className="mt-12 p-10 rounded-xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Practical Example
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed max-w-4xl">
          A simple workflow illustrates the cascade:
        </p>

        <ul className="mt-4 space-y-3 text-gray-700 text-sm leading-relaxed">
          <li>
            <strong>1. Large company</strong> (regulated)  
            Requests CO₂-related data from suppliers for its reporting.
          </li>

          <li>
            <strong>2. Bank</strong>  
            Requests indicative climate information for risk assessment.
          </li>

          <li>
            <strong>3. SME supplier</strong>  
            Must provide clear CO₂e indicators quickly to remain compliant with onboarding 
            requirements.
          </li>
        </ul>

        <p className="text-gray-700 text-sm mt-4">
          Certif-Scope gives the SME a simple, standardised and verifiable document that 
          satisfies these indirect requests.
        </p>
      </div>

      {/* MARKET GAP */}
      <div className="mt-16 p-10 rounded-xl bg-[#0B3A63] text-white shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold mb-4 relative z-10">
          2. The Gap in the Market
        </h3>

        <p className="text-white/90 text-sm leading-relaxed max-w-4xl relative z-10">
          Existing ESG tools are made for large companies and require physical activity 
          data, specialist knowledge and significant budgets. SMEs often lack:
        </p>

        <ul className="mt-4 space-y-2 text-white/90 text-sm relative z-10">
          <li>• Time and resources to collect complex data</li>
          <li>• Internal ESG expertise</li>
          <li>• Consistent, accepted formats</li>
          <li>• Verifiable documents</li>
        </ul>

        <p className="text-white/90 text-sm mt-4 relative z-10">
          Certif-Scope fills this gap with a fast, standardized and verifiable approach 
          based exclusively on financial spending.
        </p>
      </div>

      {/* OFFICIAL SOURCES */}
      <div className="mt-16 p-10 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          3. Confirmed by Official Frameworks
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed">
          These EU and international frameworks explain why SMEs receive CO₂e data requests:
        </p>

        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li>• CSRD (2022/2464)</li>
          <li>• ESRS E1 Climate Standard</li>
          <li>• EBA ESG Risk Guidelines</li>
          <li>• EU Green Public Procurement (GPP) criteria</li>
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
