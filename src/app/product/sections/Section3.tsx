"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      data-section="s3"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* BLOCK 1 — REGULATORY PRESSURE (BLUE LEFT PANEL) */}
      <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-xl overflow-hidden">

        {/* Decorative vertical accent */}
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#1FB6C1] opacity-90" />

        <h2
          data-i18n="s3.title"
          className="text-4xl md:text-5xl font-extrabold mb-6 ml-6"
        >
          Why the Product Exists
        </h2>

        <p
          data-i18n="s3.intro"
          className="ml-6 text-white/90 text-lg max-w-4xl leading-relaxed"
        >
          SMEs are increasingly required to provide CO₂e indicators due to obligations applied
          to large companies, financial institutions, and public procurement. These obligations
          cascade down the supply chain, even if SMEs are not directly regulated.
        </p>
      </div>

      {/* BLOCK 2 — REGULATORY CASCADE (GREEN PANEL) */}
      <div className="mt-20 p-12 rounded-2xl bg-[#1FB6C1] text-white shadow-lg">

        <h3
          data-i18n="s3.cascade.title"
          className="text-3xl font-bold mb-6"
        >
          The Regulatory Cascade
        </h3>

        <p
          data-i18n="s3.cascade.text1"
          className="text-white/95 text-md max-w-4xl leading-relaxed"
        >
          Large companies and financial institutions must collect climate-related data from
          suppliers to comply with EU regulations. This indirectly creates obligations for SMEs.
        </p>

        <ul className="mt-6 space-y-2 text-white/95 text-md leading-relaxed">
          <li data-i18n="s3.cascade.point1">
            • <a href="https://eur-lex.europa.eu/eli/reg/2022/2464" target="_blank" className="underline hover:text-white">
              CSRD (2022/2464)
            </a>{" "}
            requires reporting on climate risks and value-chain impacts.
          </li>

          <li data-i18n="s3.cascade.point2">
            • <a href="https://www.efrag.org" target="_blank" className="underline hover:text-white">
              ESRS E1
            </a>{" "}
            mandates upstream supplier data when relevant.
          </li>

          <li data-i18n="s3.cascade.point3">
            • <a href="https://www.eba.europa.eu" target="_blank" className="underline hover:text-white">
              EBA ESG Risk Guidelines
            </a>{" "}
            push banks to collect CO₂e indicators from clients.
          </li>

          <li data-i18n="s3.cascade.point4">
            • <a href="https://environment.ec.europa.eu/topics/sustainable-production-and-consumption/green-public-procurement_en" 
                 target="_blank" className="underline hover:text-white">
              EU Green Public Procurement (GPP)
            </a>{" "}
            adds environmental indicators to public tenders.
          </li>
        </ul>

        <p
          data-i18n="s3.cascade.text2"
          className="mt-6 text-white/90 text-md max-w-4xl leading-relaxed"
        >
          This explains why SMEs receive CO₂e requests despite not being subject to CSRD.
        </p>
      </div>

      {/* BLOCK 3 — MARKET GAP (WHITE PREMIUM CARD + GRID) */}
      <div className="mt-20 p-12 bg-white rounded-2xl shadow-lg border border-gray-200">
        <h3
          data-i18n="s3.gap.title"
          className="text-3xl font-bold text-[#0B3A63] mb-8"
        >
          The Gap in the Market
        </h3>

        <p
          data-i18n="s3.gap.text1"
          className="text-gray-700 text-md max-w-4xl leading-relaxed mb-8"
        >
          Existing sustainability platforms are designed for large enterprises and require
          physical activity data, specialized expertise, and significant budgets. SMEs often
          cannot meet these conditions but still need an accepted CO₂e indicator.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Col 1 */}
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li data-i18n="s3.gap.point1">• Lack of ESG expertise internally</li>
            <li data-i18n="s3.gap.point2">• Time and budget constraints</li>
          </ul>

          {/* Col 2 */}
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li data-i18n="s3.gap.point3">• No standardized output accepted by institutions</li>
            <li data-i18n="s3.gap.point4">• No verifiable integrity mechanism</li>
          </ul>
        </div>

        <p
          data-i18n="s3.gap.text2"
          className="mt-10 text-md text-[#0B3A63] font-medium max-w-4xl leading-relaxed"
        >
          Certif-Scope fills this gap with a deterministic, financial-based calculation and a
          verification-ready PDF suitable for banks, procurement, and insurance.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s3.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63]
                     hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
            }
