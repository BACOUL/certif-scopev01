"use client";

export default function Section3() {
  return (
    <section
      id="why-the-product-exists"
      data-section="why-the-product-exists"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK — CANONICAL */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/20 to-transparent"
        />

        <h2
          data-i18n="s3.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">3.</span>
          Why the Product Exists
        </h2>

        <p
          data-i18n="s3.intro"
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
        >
          Across Europe, climate-related disclosure obligations apply to large
          companies, financial institutions and public entities. These obligations
          increasingly cascade to suppliers, including SMEs that are not directly
          subject to regulatory reporting requirements.
        </p>
      </div>

      {/* REGULATORY CASCADE */}
      <div className="mt-20 p-10 rounded-xl bg-white border border-gray-200 shadow-md">
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
          Organizations subject to European sustainability and risk-management
          frameworks must assess climate exposure across their value chains. This
          creates standardized information requests addressed to suppliers,
          regardless of their individual regulatory status.
        </p>

        <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
          <li data-i18n="s3.cascade.point1">
            • Large companies subject to{" "}
            <a
              href="https://eur-lex.europa.eu/eli/dir/2022/2464/oj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B3A63] underline hover:text-[#15B097]"
            >
              CSRD
            </a>{" "}
            must document climate risks and value-chain impacts.
          </li>

          <li data-i18n="s3.cascade.point2">
            • Sustainability disclosures aligned with{" "}
            <a
              href="https://www.efrag.org/en/projects/esrs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B3A63] underline hover:text-[#15B097]"
            >
              ESRS (EFRAG)
            </a>{" "}
            require upstream supplier information when material.
          </li>

          <li data-i18n="s3.cascade.point3">
            • Financial institutions following{" "}
            <a
              href="https://www.eba.europa.eu/regulation-and-policy/sustainable-finance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B3A63] underline hover:text-[#15B097]"
            >
              EBA ESG risk guidelines
            </a>{" "}
            are encouraged to collect CO₂e indicators from clients and
            counterparties.
          </li>

          <li data-i18n="s3.cascade.point4">
            • Public procurement increasingly integrates environmental indicators
            under{" "}
            <a
              href="https://environment.ec.europa.eu/topics/sustainable-production-and-consumption/green-public-procurement_en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B3A63] underline hover:text-[#15B097]"
            >
              EU Green Public Procurement
            </a>{" "}
            frameworks.
          </li>
        </ul>

        <p
          data-i18n="s3.cascade.text2"
          className="text-gray-700 text-sm mt-4"
        >
          In practice, this results in SMEs being asked to provide CO₂e indicators
          even though they are not required to produce full regulatory reports.
        </p>
      </div>

      {/* MARKET GAP */}
      <div className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-gray-200 shadow-md">
        <h3
          data-i18n="s3.gap.title"
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
        >
          The Market Gap for SMEs
        </h3>

        <p
          data-i18n="s3.gap.text1"
          className="text-gray-700 text-sm leading-relaxed max-w-4xl mb-6"
        >
          Most sustainability tools and consulting approaches are designed for
          large organizations. They rely on detailed operational data, specialized
          expertise and significant resources that are often unavailable to SMEs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
            <li>• Limited internal sustainability or ESG expertise</li>
            <li>• Time, budget and resource constraints</li>
          </ul>

          <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
            <li>• No simple, standardized document accepted by institutions</li>
            <li>• Difficulty proving consistency and credibility of disclosed figures</li>
          </ul>
        </div>

        <p
          data-i18n="s3.gap.text2"
          className="mt-8 text-[#0B3A63] text-sm leading-relaxed font-medium"
        >
          Certif-Scope was created to bridge this gap by providing a standardized,
          accessible CO₂e Attestation aligned with institutional expectations,
          while remaining realistic and usable for SMEs.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s3.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63]
                     text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
        }
