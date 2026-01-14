"use client";

export default function Section15() {
  return (
    <section
      id="s15"
      data-section="s15"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div
        className="p-12 rounded-2xl bg-white border border-gray-200 shadow-lg relative overflow-hidden"
        data-i18n="s15.header.block"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3A63]/10 to-[#15B097]/10 pointer-events-none"></div>

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="s15.title"
        >
          Maintenance, Version Control & Deprecation Policy
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="s15.paragraph1"
        >
          Certif-Scope uses a formal version-control framework ensuring stability, reproducibility,
          traceability and backward compatibility. All emission factors, metadata schemas and PDF/A
          formatting rules follow predictable upgrade cycles aligned with procurement, banking,
          insurance and ESG-compliance workflows.
        </p>

        <p
          className="text-sm text-gray-600 mt-4 relative z-10"
          data-i18n="s15.paragraph2"
        >
          Compliance references: CSRD (EU 2022/2464), ESRS E1, EBA ESG Risk Guidelines, ISO 14064-1, ISO 14083.
        </p>
      </div>



      {/* GRID — 4 pillars */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">

        {/* Stable document structure */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#0B3A63]/20 shadow-sm"
          data-i18n="s15.block1"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3" data-i18n="s15.block1.title">
            Stable Document Structure
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed" data-i18n="s15.block1.text">
            Structural components remain fixed to ensure seamless ingestion by procurement platforms,
            banking ESG scorers and underwriting systems. XMP metadata fields remain frozen to ensure
            multi-year audit compatibility.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li data-i18n="s15.block1.li1">Fixed CO₂ indicator fields</li>
            <li data-i18n="s15.block1.li2">PDF/A-1b guaranteed format</li>
            <li data-i18n="s15.block1.li3">Deterministic XMP metadata schema</li>
            <li data-i18n="s15.block1.li4">No external service dependency</li>
          </ul>
        </div>


        {/* Controlled dataset updates */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md"
          data-i18n="s15.block2"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3" data-i18n="s15.block2.title">
            Controlled Dataset Updates
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed" data-i18n="s15.block2.text">
            Emission factors are updated with transparent, versioned cycles. Updates never invalidate
            existing attestations, in line with ESRS E1 stability principles and EBA audit practices.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li data-i18n="s15.block2.li1">ADEME Base Carbone — annual update</li>
            <li data-i18n="s15.block2.li2">DEFRA UK Conversion Factors — annual update</li>
            <li data-i18n="s15.block2.li3">
              Eurostat NACE — annual structural revisions (not emission factors)
              <a
                href="https://ec.europa.eu/eurostat"
                target="_blank"
                className="underline text-[#0B3A63] ml-1"
              >
                eurostat.ec.europa.eu
              </a>
            </li>
            <li data-i18n="s15.block2.li4">Full change-log transparency</li>
          </ul>
        </div>


        {/* Backward compatibility */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-sm"
          data-i18n="s15.block3"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3" data-i18n="s15.block3.title">
            Backward Compatibility
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed" data-i18n="s15.block3.text">
            All historical PDFs remain valid indefinitely. SHA-256 fingerprints ensure that verification
            remains stable regardless of dataset updates, guaranteeing full multi-year auditability.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li data-i18n="s15.block3.li1">Legacy PDFs remain verifiable</li>
            <li data-i18n="s15.block3.li2">Hash stability maintained across versions</li>
            <li data-i18n="s15.block3.li3">No regeneration required</li>
            <li data-i18n="s15.block3.li4">Suitable for regulatory audits</li>
          </ul>
        </div>


        {/* Deprecation policy */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md"
          data-i18n="s15.block4"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3" data-i18n="s15.block4.title">
            Deprecation Rules
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed" data-i18n="s15.block4.text">
            Older datasets may be marked as deprecated, but documents calculated with older versions
            remain valid, in line with ESRS E1 and EBA governance requirements.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li data-i18n="s15.block4.li1">Dataset version ID embedded in metadata</li>
            <li data-i18n="s15.block4.li2">Controlled sunset mechanism</li>
            <li data-i18n="s15.block4.li3">No backward invalidation</li>
            <li data-i18n="s15.block4.li4">Institutional continuity preserved</li>
          </ul>
        </div>

      </div>



      {/* MACHINE READABLE BLOCK */}
      <div
        className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md"
        data-i18n="s15.machine.block"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4" data-i18n="s15.machine.title">
          Machine-Readable Version Control Logic
        </h3>

        <ul className="text-sm text-gray-700 space-y-2 leading-relaxed">
          <li data-i18n="s15.machine.li1">XMP fields include version-id and dataset-id</li>
          <li data-i18n="s15.machine.li2">Versioning ensures deterministic ingestion by ERP/ESG systems</li>
          <li data-i18n="s15.machine.li3">PDF/A ensures archival compatibility</li>
          <li data-i18n="s15.machine.li4">Hash validity independent from platform availability</li>
        </ul>
      </div>



      {/* VERSIONING WORKFLOW SCHEMA */}
      <div
        className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm"
        data-i18n="s15.schema.block"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-6" data-i18n="s15.schema.title">
          Versioning Workflow (End-to-End)
        </h3>

        <pre className="text-sm md:text-base font-mono text-[#0B3A63] leading-relaxed whitespace-pre-wrap">
{`Inputs → Dataset Version vX → CO₂ Engine vX → PDF/A + XMP vX → Verification (SHA-256)`}
        </pre>

        <p className="mt-4 text-gray-700 max-w-5xl leading-relaxed" data-i18n="s15.schema.text">
          Each stage is deterministic, reproducible and machine-verifiable, ensuring full audit
          traceability aligned with EBA and ESRS E1 principles.
        </p>
      </div>



      {/* WHY IT MATTERS */}
      <div
        className="mt-20 p-12 bg-[#0B3A63] border border-transparent rounded-xl shadow-md relative overflow-hidden"
        data-i18n="s15.why.block"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent pointer-events-none"></div>

        <h3 className="text-2xl font-semibold text-white relative z-10" data-i18n="s15.why.title">
          Why Version Control Matters for Institutions
        </h3>

        <p
          className="mt-3 text-white/90 max-w-5xl leading-relaxed relative z-10"
          data-i18n="s15.why.text"
        >
          Procurement authorities, financial institutions and insurers require strict versioning to
          ensure traceability, reproducibility and multi-year audit reliability. Certif-Scope guarantees
          that every attestation can be independently validated without reliance on any external service.
        </p>
      </div>



      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          data-i18n="s15.return"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
        }
