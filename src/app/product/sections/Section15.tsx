"use client";

export default function Section15() {
  return (
    <section
      id="s15"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="p-12 rounded-2xl bg-white border border-gray-200 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3A63]/10 to-[#15B097]/10 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          15. Maintenance, Version Control & Deprecation Policy
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope uses a formal version-control framework designed to guarantee stability,
          reproducibility, traceability and backward compatibility. All datasets, emission factors,
          metadata schemas and PDF formatting rules follow predictable upgrade cycles aligned with
          procurement, banking, insurance and regulatory workflows.
        </p>

        <p className="text-sm text-gray-600 mt-4 relative z-10">
          Compliance references: CSRD (EU 2022/2464), ESRS E1, EBA ESG Risk Guidelines, ISO 14064-1, ISO 14083.
        </p>
      </div>



      {/* GRID — 4 pillars */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">

        {/* Stable document structure */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#0B3A63]/20 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Stable Document Structure
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Formatting and metadata structures remain constant to ensure error-free ingestion in
            procurement portals, banking ESG scoring tools and insurance workflows.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li>• Fixed CO₂ indicator fields</li>
            <li>• PDF/A-1b guaranteed output format</li>
            <li>• XMP metadata schema frozen across versions</li>
            <li>• Zero structural dependency on external services</li>
          </ul>
        </div>


        {/* Controlled dataset updates */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Controlled Dataset Updates
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Emission factors are updated using a transparent and versioned approach to guarantee
            regulatory alignment without breaking institutional workflows.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li>• Annual ADEME Base Carbone refresh</li>
            <li>• Quarterly DEFRA updates</li>
            <li>• Annual Eurostat/EEA revisions</li>
            <li>• Full traceability in change logs</li>
          </ul>
        </div>


        {/* Backward compatibility */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Backward Compatibility
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            All previously generated PDFs remain valid indefinitely. Verification is unaffected by
            dataset updates thanks to embedded SHA-256 fingerprints and frozen metadata schemas.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li>• Older PDF/A versions remain verifiable</li>
            <li>• Hash verification remains unchanged</li>
            <li>• No reprocessing required for historical documents</li>
            <li>• Multi-year audit stability</li>
          </ul>
        </div>


        {/* Deprecation policy */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Deprecation Rules
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            When emission factors change significantly, Certif-Scope marks older datasets as
            deprecated while ensuring documents generated with previous versions remain valid.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li>• Clear dataset version ID in PDF metadata</li>
            <li>• Controlled sunset period for outdated factors</li>
            <li>• No mandatory regeneration of existing PDFs</li>
            <li>• Institutional compatibility preserved</li>
          </ul>
        </div>

      </div>



      {/* UPDATE TYPES */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Update Types (Major • Minor • Patch)
        </h3>

        <ul className="mt-6 space-y-2 text-white/90 text-sm relative z-10">
          <li>• <strong>Major</strong>: structural changes to categories or NACE mappings (rare)</li>
          <li>• <strong>Minor</strong>: emission factor updates from ADEME, DEFRA, Eurostat</li>
          <li>• <strong>Patch</strong>: formatting fixes, metadata corrections, stability refinements</li>
        </ul>
      </div>



      {/* WHY IT MATTERS */}
      <div className="mt-20 p-12 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Why Version Control Matters for Institutions
        </h3>

        <p className="text-gray-700 max-w-5xl leading-relaxed">
          Procurement authorities, financial institutions and insurers require strict versioning
          to ensure traceability, reproducibility and multi-year audit reliability. Certif-Scope
          ensures that every attestation can be independently validated without reliance on any
          external service, API or server availability.
        </p>
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
