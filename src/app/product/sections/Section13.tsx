"use client";

export default function Section13() {
  return (
    <section
      id="s13"
      data-section="s13"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/20 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-[#15B097]/10 pointer-events-none"></div>

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="s13.title"
        >
          Integrations & System Compatibility
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="s13.intro1"
        >
          Certif-Scope integrates seamlessly with procurement portals, banking ESG scoring engines,
          insurance underwriting systems, ERP platforms and public-funding workflows. The PDF/A
          structure, deterministic XMP metadata and JSON export format enable machine ingestion
          without plugins or proprietary adapters.
        </p>

        <p
          className="mt-4 text-sm text-gray-600 relative z-10"
          data-i18n="s13.intro2"
        >
          Compatibility aligned with CSRD (2022/2464), ESRS E1 Climate, ISO 14064-1, GHG Protocol,
          EU GPP criteria, EBA ESG Risk Management Guidelines, SFDR and EU Taxonomy frameworks.
        </p>
      </div>


      {/* GRID — 4 integration sectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md" data-i18n="s13.procurement">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Procurement Platforms
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Standardized CO₂ indicators aligned with EU Green Public Procurement templates.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• PDF/A-1b compliant format</li>
            <li>• Fixed zoning for CO₂ fields</li>
            <li>• Machine-readable metadata blocks</li>
          </ul>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md" data-i18n="s13.banking">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Banking & ESG Risk Models
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Metadata aligned with lender scoring templates and EBA ESG models.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• XMP tags for automated extraction</li>
            <li>• Deterministic CO₂ indicator blocks</li>
            <li>• SHA-256 integrity reference</li>
          </ul>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md" data-i18n="s13.insurance">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Insurance Underwriting
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Ingestion-ready structure for risk matrices and classification workflows.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• SHA-256 tamper detection</li>
            <li>• Standardized classification fields</li>
            <li>• Audit-compatible structure</li>
          </ul>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md" data-i18n="s13.funding">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Public Funding & Grants
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Compatible with CINEA and national subsidy platforms requesting environmental indicators.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Predefined layout blocks</li>
            <li>• Fixed metadata tags</li>
            <li>• Read-only ingestion guaranteed</li>
          </ul>
        </div>
      </div>


      {/* SUPPORTED FORMATS */}
      <div className="mt-20 p-10 bg-white border border-gray-200 shadow-md rounded-xl" data-i18n="s13.formats">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Supported Technical Formats
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• PDF/A-1b — long-term archival format (5–10 years)</li>
          <li>• XMP metadata — sha256, version-id, dataset-id, timestamps</li>
          <li>• JSON export (UTF-8) — deterministic field structure</li>
        </ul>
      </div>


      {/* ERP INTEGRATIONS */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden" data-i18n="s13.erp">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          ERP Integrations (SAP • Odoo • Oracle Fusion)
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          ERPs ingest Certif-Scope PDFs and JSON exports natively thanks to deterministic metadata
          fields, fixed zone layouts and a plugin-free ingestion pipeline.
        </p>

        <ul className="mt-5 text-white/90 text-sm space-y-2 relative z-10">
          <li>• SAP — DMS ingestion + JSON import</li>
          <li>• Odoo — Documents + Accounting modules</li>
          <li>• Oracle Fusion — metadata extraction engine</li>
        </ul>
      </div>


      {/* WORKFLOW */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm" data-i18n="s13.workflow">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Automated Ingestion Workflow
        </h3>

        <pre className="text-sm md:text-base font-mono text-[#0B3A63] leading-relaxed whitespace-pre-wrap">
{`User Input → CO₂ Engine → PDF/A + XMP Metadata → Institutional Ingestion
                        ↘ JSON Export (UTF-8) ↗`}
        </pre>

        <p className="mt-4 text-gray-700 max-w-5xl leading-relaxed">
          All field positions, metadata and hash references are deterministic, enabling automated
          validation, classification and long-term archival in institutional systems.
        </p>
      </div>


      {/* LIMITATIONS */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md" data-i18n="s13.limitations">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Integration Limitations
        </h3>

        <ul className="text-sm text-gray-700 space-y-2 leading-relaxed">
          <li>• No API ingestion in v1 (read-only documents)</li>
          <li>• No custom field mapping</li>
          <li>• No proprietary formats (open standards only)</li>
        </ul>
      </div>


      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s13.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
      }
