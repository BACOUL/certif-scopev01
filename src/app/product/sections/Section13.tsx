"use client";

export default function Section13() {
  return (
    <section
      id="s13"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Premium institutional design */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/20 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-[#15B097]/10 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          13. Integrations
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope integrates seamlessly with procurement portals, banking ESG systems,
          insurance underwriting workflows, ERP platforms and public-funding submission tools.
          The PDF output follows predictable zoning, standardized metadata and verifiable
          cryptographic sealing ensuring automated ingestion by institutional systems.
        </p>

        <p className="mt-4 text-sm text-gray-600 relative z-10">
          Compatibility aligned with EU Green Public Procurement (GPP), EBA ESG Risk 
          Management Guidelines, ESMA Sustainable Finance Disclosure practices and 
          CINEA funding submission workflows.
        </p>
      </div>



      {/* GRID — 4 integration sectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">

        {/* BLOCK 1 — Procurement Portals */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Procurement Platforms
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Designed for compatibility with EU procurement systems requiring standardized
            CO₂ indicators in vendor onboarding and public tender flows.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Structured PDF/A-1b</li>
            <li>• Fixed zoning for CO₂ fields</li>
            <li>• GPP-aligned documentation sections</li>
          </ul>
        </div>

        {/* BLOCK 2 — Banking ESG */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Banking & ESG Risk Models
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Fully compatible with ESG scoring models used in loan evaluation, refinancing 
            analysis and sustainability-linked credit reviews.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• XMP metadata for automated extraction</li>
            <li>• Standardized CO₂ indicator field tags</li>
            <li>• EBA-aligned structure for risk scoring</li>
          </ul>
        </div>

        {/* BLOCK 3 — Insurance Underwriting */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Insurance Underwriting
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Insurers can incorporate the attestation into environmental exposure assessment,
            risk pricing and industrial underwriting documentation.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Integrity seal for authenticity checks</li>
            <li>• Structured risk sections</li>
            <li>• Readable by automated ingestion tools</li>
          </ul>
        </div>

        {/* BLOCK 4 — Public Funding */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Public Funding & Grants
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Meets environmental indicator requirements for EU funding schemes such as 
            CINEA, national subsidies and innovation grants.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Predefined compliance layout</li>
            <li>• Structured classification zones</li>
            <li>• No proprietary format required</li>
          </ul>
        </div>
      </div>



      {/* FORMATS SUPPORTED */}
      <div className="mt-20 p-10 bg-white border border-gray-200 shadow-md rounded-xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Supported Technical Formats
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• <strong>PDF/A-1b</strong> — archival-grade format required by institutions</li>
          <li>• <strong>XMP metadata</strong> — embedded structured verification fields</li>
          <li>• <strong>JSON export</strong> — machine-readable structure for ERPs & APIs</li>
        </ul>
      </div>



      {/* ERP INTEGRATIONS */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          ERP Integrations (SAP • Odoo • Oracle Fusion)
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          Certif-Scope can be integrated into ERP systems through JSON exports or automated
          upload of PDF/A files. These systems can ingest structured data fields for reporting,
          compliance validation and internal audit documentation.
        </p>

        <ul className="mt-5 text-white/90 text-sm space-y-2 relative z-10">
          <li>• SAP: compatibility via document management + JSON import</li>
          <li>• Odoo: integration with Documents + Accounting modules</li>
          <li>• Oracle Fusion: structured metadata extraction supported</li>
        </ul>
      </div>


      {/* WHY IT WORKS */}
      <div className="mt-20 p-12 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Why These Integrations Work Automatically
        </h3>

        <p className="text-gray-700 max-w-5xl leading-relaxed">
          All institutional and ERP integrations rely on predictable field placement, 
          fixed metadata structures and standardized CO₂ indicators. Automated systems 
          can extract, classify or validate data with no manual intervention.
        </p>
      </div>



      {/* RETURN BUTTON — Identical across all sections */}
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
