"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      data-section="s3"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/20 shadow-md">
        <h2
          data-i18n="s3.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] mb-6"
        >
          Why the Product Exists
        </h2>

        <p
          data-i18n="s3.intro"
          className="text-lg text-gray-700 max-w-4xl leading-relaxed"
        >
          Certif-Scope addresses a growing problem: SMEs are increasingly asked to provide CO₂e
          indicators by clients, procurement teams, financial institutions and insurers.
          These requests originate from regulatory obligations applied to large companies,
          which cascade down the supply chain and indirectly impact smaller suppliers.
        </p>
      </div>

      {/* REGULATORY CASCADE */}
      <div
        data-i18n="s3.cascade.block"
        className="mt-16 p-10 rounded-xl bg-white border border-gray-200 shadow-sm"
      >
        <h3
          data-i18n="s3.cascade.title"
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
        >
          The Regulatory Cascade
        </h3>

        <p
          data-i18n="s3.cascade.text1"
          className="text-gray-700 text-sm leading-relaxed max-w-4xl"
        >
          Large companies and financial institutions are required to disclose environmental
          information under EU and international frameworks. To fulfill these obligations,
          they must gather CO₂-related indicators from suppliers, regardless of the suppliers'
          size or regulatory status.
        </p>

        <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
          <li data-i18n="s3.cascade.point1">
            • <strong>CSRD (2022/2464)</strong> obliges large companies to disclose climate-related risks and value-chain impacts.
          </li>

          <li data-i18n="s3.cascade.point2">
            • <strong>ESRS E1</strong> requires upstream supplier data when relevant to emissions reporting.
          </li>

          <li data-i18n="s3.cascade.point3">
            • <strong>EBA ESG Risk Guidelines</strong> push banks to collect indicative climate indicators from clients.
          </li>

          <li data-i18n="s3.cascade.point4">
            • <strong>EU Green Public Procurement (GPP)</strong> criteria introduce environmental metrics in public tenders.
          </li>
        </ul>

        <p
          data-i18n="s3.cascade.text2"
          className="text-gray-700 text-sm mt-4"
        >
          As a result, SMEs regularly receive CO₂e information requests even though they are not
          directly regulated.
        </p>
      </div>

      {/* PRACTICAL EXAMPLE */}
      <div
        data-i18n="s3.example.block"
        className="mt-12 p-10 rounded-xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-sm"
      >
        <h3
          data-i18n="s3.example.title"
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
        >
          Practical Example
        </h3>

        <p
          data-i18n="s3.example.text1"
          className="text-gray-700 text-sm leading-relaxed max-w-4xl"
        >
          A simple process illustrates how this cascade affects SMEs:
        </p>

        <ul className="mt-4 space-y-3 text-gray-700 text-sm leading-relaxed">
          <li data-i18n="s3.example.step1">
            <strong>1. A large regulated company</strong> requests CO₂-related data from suppliers for mandatory reporting.
          </li>

          <li data-i18n="s3.example.step2">
            <strong>2. A bank</strong> asks for basic CO₂ information to complete climate risk assessments.
          </li>

          <li data-i18n="s3.example.step3">
            <strong>3. The SME supplier</strong> must respond quickly with a clear, standardized CO₂e indicator.
          </li>
        </ul>

        <p
          data-i18n="s3.example.text2"
          className="text-gray-700 text-sm mt-4"
        >
          Certif-Scope provides a verification-ready document that satisfies these indirect requests.
        </p>
      </div>

      {/* MARKET GAP */}
      <div
        data-i18n="s3.gap.block"
        className="mt-16 p-10 rounded-xl bg-[#0B3A63] text-white shadow-md relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 to-transparent opacity-20" />

        <h3
          data-i18n="s3.gap.title"
          className="text-2xl font-semibold mb-4 relative z-10"
        >
          The Gap in the Market
        </h3>

        <p
          data-i18n="s3.gap.text1"
          className="text-white/90 text-sm leading-relaxed max-w-4xl relative z-10"
        >
          Existing sustainability tools target large companies and require physical activity
          data, specialized staff and significant budgets. SMEs lack resources to comply with
          these requests while still needing a consistent and accepted CO₂e indicator.
        </p>

        <ul className="mt-4 space-y-2 text-white/90 text-sm relative z-10">
          <li data-i18n="s3.gap.point1">• No internal ESG department</li>
          <li data-i18n="s3.gap.point2">• Limited time and budget</li>
          <li data-i18n="s3.gap.point3">• No standardized output format</li>
          <li data-i18n="s3.gap.point4">• No verifiable document</li>
        </ul>

        <p
          data-i18n="s3.gap.text2"
          className="text-white/90 text-sm mt-4 relative z-10"
        >
          Certif-Scope solves this with a fast, deterministic, financial-based calculation method.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s3.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
