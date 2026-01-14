"use client";

export default function Section13() {
  return (
    <section
      id="s13"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Institutional */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/20 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-[#15B097]/10 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          13. Integrations & System Compatibility
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope integrates seamlessly with procurement portals, banking ESG scoring engines,
          insurance underwriting systems, ERP platforms and public-funding submission workflows.
          The standardized PDF/A structure, XMP metadata and JSON export enable automated ingestion
          by institutional systems with no custom integration or plugins.
        </p>

        <p className="mt-4 text-sm text-gray-600 relative z-10">
          Compatibility aligned with EU Green Public Procurement (GPP), EBA ESG Risk Management Guidelines,
          ESMA SFDR practices, EU Taxonomy screening logic and CINEA funding submission requirements.
        </p>
      </div>


      {/* GRID — 4 integration sectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Procurement Platforms
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Standardized CO₂ indicators for vendor onboarding and EU tender submissions.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• PDF/A-1b formatting</li>
            <li>• Fixed zoning for CO₂ fields</li>
            <li>• GPP-aligned documentation blocks</li>
          </ul>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Banking & ESG Risk Models
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Metadata-compatible with EBA ESG scoring templates and lender risk models.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• XMP tags for automated extraction</li>
            <li>• Standardized CO₂ indicator fields</li>
            <li>• EBA-compliant structure</li>
          </ul>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Insurance Underwriting
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Direct ingestion for risk evaluation, exposure matrices and industry classification.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• SHA-256 integrity seal</li>
            <li>• Structured risk blocks</li>
            <li>• Automated ingestion supported</li>
          </ul>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Public Funding & Grants
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Meets environmental indicator formats required by CINEA and national subsidy platforms.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Predefined compliance layout</li>
            <li>• Fixed classification zones</li>
            <li>• Read-only ingestion supported</li>
          </ul>
        </div>
      </div>


      {/* SUPPORTED FORMATS */}
      <div className="mt-20 p-10 bg-white border border-gray-200 shadow-md rounded-xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Supported Technical Formats
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• PDF/A-1b — archival-grade institutional format</li>
          <li>• XMP metadata — sha256, version-id, dataset-id</li>
          <li>• JSON export (UTF-8) — machine-readable CO₂ structure</li>
        </ul>
      </div>


      {/* ERP INTEGRATIONS */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          ERP Integrations (SAP • Odoo • Oracle Fusion)
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          ERPs ingest Certif-Scope outputs without plugins. PDF/A files and JSON exports provide
          structured fields enabling automated classification, reporting and audit storage.
        </p>

        <ul className="mt-5 text-white/90 text-sm space-y-2 relative z-10">
          <li>• SAP — DMS ingestion + JSON import</li>
          <li>• Odoo — Documents + Accounting modules</li>
          <li>• Oracle Fusion — metadata extraction workflow</li>
        </ul>
      </div>


      {/* PROCESS FLOW BLOCK */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Automated Ingestion Workflow
        </h3>

        <pre className="text-sm md:text-base font-mono text-[#0B3A63] leading-relaxed whitespace-pre-wrap">
{`User Input → CO₂ Engine → PDF/A + XMP → ERP / Portal Ingestion
                        ↘ JSON Export ↗`}
        </pre>

        <p className="mt-4 text-gray-700 max-w-5xl leading-relaxed">
          Field positions, metadata and hash values remain deterministic, enabling machines to
          validate, classify and store documents consistently.
        </p>
      </div>


      {/* LIMITATIONS */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Integration Limitations
        </h3>

        <ul className="text-sm text-gray-700 space-y-2 leading-relaxed">
          <li>• No direct API ingestion (planned for v2)</li>
          <li>• No dynamic field customization</li>
          <li>• No proprietary formats (only open standards)</li>
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
