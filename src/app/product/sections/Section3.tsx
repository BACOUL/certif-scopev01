"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
      data-section="s3"
    >

      {/* HEADER */}
      <div className="p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/20 shadow-md">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] mb-6"
          data-i18n="s3.title"
        >
          Why the Product Exists
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl leading-relaxed"
          data-i18n="s3.intro"
        >
          Certif-Scope exists because many SMEs are now asked to provide CO₂e-related 
          information by clients, banks or procurement teams. This happens even when 
          the SME is not directly subject to CSRD obligations. Larger regulated 
          entities must collect climate indicators across their value chain, and SMEs 
          are increasingly involved in that upstream information flow.
        </p>
      </div>

      {/* REGULATORY CASCADE */}
      <div
        className="mt-16 p-10 rounded-xl bg-white border border-gray-200 shadow-sm"
        data-i18n="s3.cascade.block"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4" data-i18n="s3.cascade.title">
          The Regulatory Cascade
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed max-w-4xl" data-i18n="s3.cascade.text1">
          European sustainability rules apply primarily to large companies and 
          financial institutions. However, these organisations must collect data 
          from their suppliers, creating indirect requests for SMEs.
        </p>

        <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
          <li data-i18n="s3.cascade.point1">
            • Under <strong>CSRD Regulation 2022/2464</strong>, large companies must disclose 
              climate risks and value-chain environmental impacts.
          </li>

          <li data-i18n="s3.cascade.point2">
            • <strong>ESRS E1</strong> requires them to gather emissions-related information from 
              upstream suppliers when relevant.
          </li>

          <li data-i18n="s3.cascade.point3">
            • Banks must assess climate exposure according to <strong>EBA ESG Risk Guidelines</strong>, 
              often requiring basic indicators from clients and their suppliers.
          </li>

          <li data-i18n="s3.cascade.point4">
            • Public tenders reference <strong>Green Public Procurement (GPP)</strong> criteria, which 
              frequently include environmental indicators.
          </li>
        </ul>

        <p className="text-gray-700 text-sm mt-4" data-i18n="s3.cascade.text2">
          This explains why SMEs increasingly receive requests for CO₂e information, even 
          though they are not the ones directly regulated.
        </p>
      </div>

      {/* PRACTICAL EXAMPLE */}
      <div
        className="mt-12 p-10 rounded-xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-sm"
        data-i18n="s3.example.block"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4" data-i18n="s3.example.title">
          Practical Example
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed max-w-4xl" data-i18n="s3.example.text1">
          A simple workflow illustrates the cascade:
        </p>

        <ul className="mt-4 space-y-3 text-gray-700 text-sm leading-relaxed">
          <li data-i18n="s3.example.step1">
            <strong>1. Large company</strong> (regulated) requests CO₂-related data from suppliers for its reporting.
          </li>

          <li data-i18n="s3.example.step2">
            <strong>2. Bank</strong> requests indicative climate information for risk assessment.
          </li>

          <li data-i18n="s3.example.step3">
            <strong>3. SME supplier</strong> must provide clear CO₂e indicators quickly to remain compliant with onboarding requirements.
          </li>
        </ul>

        <p className="text-gray-700 text-sm mt-4" data-i18n="s3.example.text2">
          Certif-Scope gives the SME a simple, standardized and verifiable document that 
          satisfies these indirect requests.
        </p>
      </div>

      {/* MARKET GAP */}
      <div
        className="mt-16 p-10 rounded-xl bg-[#0B3A63] text-white shadow-md relative overflow-hidden"
        data-i18n="s3.gap.block"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 to-transparent opacity-20"
          aria-hidden="true"
        ></div>

        <h3 className="text-2xl font-semibold mb-4 relative z-10" data-i18n="s3.gap.title">
          The Gap in the Market
        </h3>

        <p className="text-white/90 text-sm leading-relaxed max-w-4xl relative z-10" data-i18n="s3.gap.text1">
          Existing ESG tools are made for large companies and require physical activity 
          data, specialist knowledge and significant budgets. SMEs often lack:
        </p>

        <ul className="mt-4 space-y-2 text-white/90 text-sm relative z-10">
          <li data-i18n="s3.gap.point1">• Time and resources to collect complex data</li>
          <li data-i18n="s3.gap.point2">• Internal ESG expertise</li>
          <li data-i18n="s3.gap.point3">• Consistent, accepted formats</li>
          <li data-i18n="s3.gap.point4">• Verifiable documents</li>
        </ul>

        <p className="text-white/90 text-sm mt-4 relative z-10" data-i18n="s3.gap.text2">
          Certif-Scope fills this gap with a fast, standardized and verifiable approach 
          based exclusively on financial spending.
        </p>
      </div>

      {/* OFFICIAL SOURCES */}
      <div
        className="mt-16 p-10 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm"
        data-i18n="s3.sources.block"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4" data-i18n="s3.sources.title">
          Confirmed by Official Frameworks
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed" data-i18n="s3.sources.text1">
          These EU and international frameworks explain why SMEs receive CO₂e data requests:
        </p>

        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li data-i18n="s3.sources.item1">• CSRD (2022/2464)</li>
          <li data-i18n="s3.sources.item2">• ESRS E1 Climate Standard</li>
          <li data-i18n="s3.sources.item3">• EBA ESG Risk Guidelines</li>
          <li data-i18n="s3.sources.item4">• EU Green Public Procurement (GPP) criteria</li>
        </ul>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          data-i18n="s3.return"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
        }
