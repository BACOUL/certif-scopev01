"use client";

export default function Section10() {
  return (
    <section
      id="s10"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK — Institutional, version-controlled sources */}
      <div className="rounded-2xl p-12 bg-white border border-gray-200 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/5 to-[#15B097]/10 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          10. Data Sources (Verified, Versioned, Auditable)
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope uses only recognized, stable and independently verifiable datasets.
          All emission factors originate from public, traceable and reproducible sources.
          Each dataset is version-controlled and documented to ensure full alignment with
          procurement, banking, insurance and ESG-compliance workflows across the EU.
        </p>
      </div>



      {/* GRID — 4 verified datasets */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">

        {/* 1 — ADEME Base Carbone */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#0B3A63]/20 shadow-sm break-words">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            ADEME Base Carbone (France)
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Official French national emission-factor database used in institutional audits,
            procurement evaluation and regulatory carbon declarations.
          </p>

          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Source: ADEME Base Carbone</li>
            <li>• Version used: 2024.2</li>
            <li>• Update cycle: annual</li>
            <li>• Data status: verified & published</li>
            <li>
              • Website:{" "}
              <a
                href="https://www.bilans-ges.ademe.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B3A63] underline hover:text-[#15B097]"
              >
                bilans-ges.ademe.fr
              </a>
            </li>
          </ul>
        </div>

        {/* 2 — DEFRA UK BEIS */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition break-words">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            DEFRA / BEIS Conversion Factors (UK)
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Internationally recognized database used globally for corporate reporting,
            ESG declarations and risk-modelling workflows.
          </p>

          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Source: UK DEFRA / BEIS</li>
            <li>• Version used: 2024 Q2</li>
            <li>• Update cycle: quarterly</li>
            <li>• Data status: verified & traceable</li>
            <li>
              • Website:{" "}
              <a
                href="https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B3A63] underline hover:text-[#15B097]"
              >
                UK Government Conversion Factors
              </a>
            </li>
          </ul>
        </div>

        {/* 3 — IPCC AR6 / EXIOBASE */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm break-words">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            IPCC AR6 + EXIOBASE v3.8.2
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            IPCC provides global warming potential values, while EXIOBASE delivers harmonized
            multi-regional environmental-economic input-output factors.
          </p>

          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• IPCC AR6 WGIII – CO₂e conversion baselines</li>
            <li>• EXIOBASE v3.8.2 – multi-sectoral EU-compatible factors</li>
            <li>• Update cycle: annual (IPCC), rolling updates (EXIOBASE)</li>
            <li>• Data status: independently verifiable</li>
            <li>
              • Website IPCC:{" "}
              <a
                href="https://www.ipcc.ch/report/ar6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B3A63] underline hover:text-[#15B097]"
              >
                ipcc.ch/report/ar6
              </a>
            </li>
            <li>
              • Website EXIOBASE:{" "}
              <a
                href="https://www.exiobase.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B3A63] underline hover:text-[#15B097]"
              >
                exiobase.eu
              </a>
            </li>
          </ul>
        </div>

        {/* 4 — Eurostat / EEA */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition break-words">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Eurostat & EEA Concordances
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Used to ensure deterministic mapping between expenditure types and representative
            EU sector averages based on NACE classifications.
          </p>

          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Sources: Eurostat + EEA environmental accounts</li>
            <li>• Classification alignment: NACE Rev.2</li>
            <li>• Version used: 2024 EU cycle</li>
            <li>• Update cycle: annual</li>
            <li>
              • Website:{" "}
              <a
                href="https://ec.europa.eu/eurostat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B3A63] underline hover:text-[#15B097]"
              >
                ec.europa.eu/eurostat
              </a>
            </li>
          </ul>
        </div>

      </div>



      {/* LIMITATIONS */}
      <div className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-[#15B097]/40 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Limitations of Source Datasets (Required Transparency)
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed max-w-5xl">
          These datasets represent sector-wide averages. They do not capture company-specific
          operational efficiency, geographic context or supplier-specific emissions. They serve
          institutional comparability, not granular lifecycle analysis.
        </p>
      </div>



      {/* VERSIONING BLOCK */}
      <div className="mt-20 p-10 rounded-xl bg-[#0B3A63] text-white shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Version-Control, Deprecation & Update Cycles
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          Certif-Scope maintains a structured dataset-versioning policy. Every attestation includes:
        </p>

        <ul className="mt-6 text-white/90 text-sm space-y-2 relative z-10">
          <li>• Version ID of each dataset used</li>
          <li>• Automatic deprecation of outdated emission factors</li>
          <li>• Quarterly refresh cycle for DEFRA-based factors</li>
          <li>• Annual update cycle for ADEME, EXIOBASE and Eurostat datasets</li>
          <li>• Backward compatibility for institutional audits</li>
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
