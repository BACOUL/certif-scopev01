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
          SMEs across Europe are increasingly asked to provide CO₂e indicators by larger
          companies, banks, insurers and public-sector buyers. This happens even when the 
          SME is not directly regulated. The pressure comes from top-down compliance 
          obligations imposed on larger entities that must collect climate-related data 
          from their suppliers.
        </p>
      </div>

      {/* REGULATORY CASCADE */}
      <div
        className="mt-16 p-10 rounded-xl bg-white border border-gray-200 shadow-sm"
        data-i18n="s3.cascade.block"
      >
        <h3
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
          data-i18n="s3.cascade.title"
        >
          The Regulatory Cascade
        </h3>

        <p
          className="text-gray-700 text-sm leading-relaxed max-w-4xl"
          data-i18n="s3.cascade.text1"
        >
          European sustainability regulations apply first to large companies and financial 
          institutions. These organisations must then collect environmental data from 
          their suppliers — including SMEs — in order to complete their own mandatory
          disclosures.
        </p>

        <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
          <li data-i18n="s3.cascade.point1">
            • <strong>CSRD (2022/2464)</strong> requires large firms to report climate impacts across their value chain.
          </li>
          <li data-i18n="s3.cascade.point2">
            • <strong>ESRS E1</strong> obliges them to request emissions-related information from suppliers.
          </li>
          <li data-i18n="s3.cascade.point3">
            • <strong>EBA ESG Risk Guidelines</strong> require banks to assess climate exposure of clients.
          </li>
          <li data-i18n="s3.cascade.point4">
            • Public tenders use <strong>Green Public Procurement (GPP)</strong> criteria, often requiring CO₂ indicators.
          </li>
        </ul>

        <p
          className="text-gray-700 text-sm mt-4"
          data-i18n="s3.cascade.text2"
        >
          As a result, SMEs become indirectly involved in regulatory compliance, even 
          though they are not the entities legally bound by these frameworks.
        </p>
      </div>

      {/* PRACTICAL EXAMPLE */}
      <div
        className="mt-12 p-10 rounded-xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-sm"
        data-i18n="s3.example.block"
      >
        <h3
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
          data-i18n="s3.example.title"
        >
          A Realistic Operational Scenario
        </h3>

        <p
          className="text-gray-700 text-sm leading-relaxed max-w-4xl"
          data-i18n="s3.example.text1"
        >
          A simplified flow illustrates the situation encountered by thousands of SMEs:
        </p>

        <ul className="mt-4 space-y-3 text-gray-700 text-sm leading-relaxed">
          <li data-i18n="s3.example.step1">
            <strong>1. A large regulated company</strong> sends a supplier questionnaire requiring CO₂ indicators.
          </li>
          <li data-i18n="s3.example.step2">
            <strong>2. A bank</strong> asks for an environmental indicator as part of onboarding or credit scoring.
          </li>
          <li data-i18n="s3.example.step3">
            <strong>3. The SME supplier</strong> must quickly provide a clear and standardized document.
          </li>
        </ul>

        <p
          className="text-gray-700 text-sm mt-4"
          data-i18n="s3.example.text2"
        >
          Without a simple tool, the SME faces delays, inconsistent formats and repeated
          requests for information that it is not equipped to produce.
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
        />

        <h3
          className="text-2xl font-semibold mb-4 relative z-10"
          data-i18n="s3.gap.title"
        >
          The Gap in the Market
        </h3>

        <p
          className="text-white/90 text-sm leading-relaxed max-w-4xl relative z-10"
          data-i18n="s3.gap.text1"
        >
          Existing ESG and carbon accounting tools are designed for large enterprises,
          requiring detailed activity data, specialist consultants and complex workflows.
          SMEs typically lack:
        </p>

        <ul className="mt-4 space-y-2 text-white/90 text-sm relative z-10">
          <li data-i18n="s3.gap.point1">• the time to collect physical activity data</li>
          <li data-i18n="s3.gap.point2">• internal sustainability expertise</li>
          <li data-i18n="s3.gap.point3">• standardized documents accepted by institutions</li>
          <li data-i18n="s3.gap.point4">• verifiable output matching procurement needs</li>
        </ul>

        <p
          className="text-white/90 text-sm mt-4 relative z-10"
          data-i18n="s3.gap.text2"
        >
          Certif-Scope bridges this gap by offering an immediate, structured and 
          verification-ready alternative based solely on financial spending.
        </p>
      </div>

      {/* OFFICIAL REFERENCES */}
      <div
        className="mt-16 p-10 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm"
        data-i18n="s3.sources.block"
      >
        <h3
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
          data-i18n="s3.sources.title"
        >
          Confirmed by Recognised Frameworks
        </h3>

        <p
          className="text-gray-700 text-sm max-w-4xl leading-relaxed"
          data-i18n="s3.sources.text1"
        >
          These official documents explain why SMEs are repeatedly asked to provide CO₂e indicators:
        </p>

        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li data-i18n="s3.sources.item1">• CSRD (2022/2464)</li>
          <li data-i18n="s3.sources.item2">• ESRS E1 Climate Standard</li>
          <li data-i18n="s3.sources.item3">• EBA ESG Risk Guidelines</li>
          <li data-i18n="s3.sources.item4">• EU Green Public Procurement (GPP)</li>
        </ul>
      </div>

      {/* RETURN */}
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
