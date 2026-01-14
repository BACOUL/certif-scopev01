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
          Certif-Scope uses only public, traceable and reproducible datasets. All emission factors
          originate from recognized institutional sources, version-controlled and suitable for
          procurement, banking, insurance and ESG-screening workflows. No proprietary or opaque
          datasets are used.
        </p>
      </div>



      {/* GRID — 4 verified datasets */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">

        {/* 1 — ADEME Base Carbone */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#0B3A63]/20 shadow-sm break-words">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">ADEME Base Carbone (France)</h3>

          <p className="text-gray-700 text-sm leading-relaxed">
            Official national emission-factor database used in audit workflows and public tenders.
          </p>

          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Version used: 2024.2</li>
            <li>• Update cycle: annual</li>
            <li>• Transparent and publicly accessible</li>
            <li>• Deterministic categories used directly in calculations</li>
            <li>
              • Website: <a href="https://www.bilans-ges.ademe.fr" target="_blank" className="text-[#0B3A63] underline">bilans-ges.ademe.fr</a>
            </li>
          </ul>
        </div>

        {/* 2 — DEFRA UK */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition break-words">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">DEFRA UK Conversion Factors</h3>

          <p className="text-gray-700 text-sm leading-relaxed">
            Internationally recognized dataset used widely for corporate carbon reporting.
          </p>

          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Version used: 2023–2024 cycle</li>
            <li>• Update cycle: annual</li>
            <li>• Public and reproducible tables</li>
            <li>
              • Website: <a href="https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting" target="_blank" className="text-[#0B3A63] underline">UK Government Conversion Factors</a>
            </li>
          </ul>
        </div>

        {/* 3 — IPCC AR6 (conversion multipliers only) */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm break-words">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">IPCC AR6 Conversion Parameters</h3>

          <p className="text-gray-700 text-sm leading-relaxed">
            Provides global warming potential coefficients (GWP100). Used only to convert kgCO₂e.
          </p>

          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Not an emission-factor database</li>
            <li>• Used only for conversion multipliers</li>
            <li>• Version used: AR6 WGIII 2023</li>
            <li>
              • Website: <a href="https://www.ipcc.ch/report/ar6/" target="_blank" className="text-[#0B3A63] underline">ipcc.ch/report/ar6</a>
            </li>
          </ul>
        </div>

        {/* 4 — Eurostat (classification only) */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition break-words">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">Eurostat (NACE Classification)</h3>

          <p className="text-gray-700 text-sm leading-relaxed">
            Provides NACE Rev.2 sector structure used for deterministic mapping. Not an emission-factor source.
          </p>

          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Classification only, not EF dataset</li>
            <li>• Version used: 2024 EU cycle</li>
            <li>• Consistent with procurement sector grouping</li>
            <li>
              • Website: <a href="https://ec.europa.eu/eurostat" target="_blank" className="text-[#0B3A63] underline">ec.europa.eu/eurostat</a>
            </li>
          </ul>
        </div>
      </div>



      {/* LIMITATIONS */}
      <div className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-[#15B097]/40 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Limitations of Data Sources</h3>

        <p className="text-gray-700 text-sm leading-relaxed max-w-5xl">
          These datasets reflect sector-level statistical averages. They do not capture company-specific
          operations, supply-chain variations or geographical granularity. They ensure comparability but
          are not a substitute for detailed lifecycle analysis (LCA).
        </p>
      </div>



      {/* VERSIONING POLICY */}
      <div className="mt-20 p-10 rounded-xl bg-[#0B3A63] text-white shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">Version Control & Update Policy</h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          Every attestation includes the exact dataset version identifiers used at calculation time.
        </p>

        <ul className="mt-6 text-white/90 text-sm space-y-2 relative z-10">
          <li>• ADEME factors refreshed annually</li>
          <li>• DEFRA factors updated annually</li>
          <li>• IPCC multipliers updated only after new AR releases</li>
          <li>• Full backward compatibility maintained for audits</li>
          <li>• Automatic deprecation of outdated dataset versions</li>
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
