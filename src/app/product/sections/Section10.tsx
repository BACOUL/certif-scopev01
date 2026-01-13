"use client";

export default function Section10() {
  return (
    <section
      id="s10"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK — Institutional, with explicit data-source compliance */}
      <div className="rounded-2xl p-12 bg-white border border-gray-200 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/5 to-[#15B097]/10 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          10. Data Sources (Verified & Version-Controlled)
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope exclusively uses recognized, stable and independently verifiable
          emission-factor repositories. All references originate from official institutions
          that provide long-term accessibility, transparent methodologies and reproducible
          datasets. Each dataset is version-controlled to ensure institutional reliability
          across procurement, banking, insurance and compliance screening processes.
        </p>
      </div>


      {/* GRID — 4 verified datasets */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">

        {/* 1 — ADEME Base Carbone */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#0B3A63]/20 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            ADEME Base Carbone (France)
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Official French national emission-factor database widely used in procurement,
            environmental reporting, and institutional audits.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Source: ADEME Base Carbone</li>
            <li>• Version used: 2024.2</li>
            <li>• Update cycle: annual</li>
            <li>• Link: https://www.bilans-ges.ademe.fr</li>
          </ul>
        </div>

        {/* 2 — DEFRA / UK BEIS */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            DEFRA / BEIS Conversion Factors (UK)
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Recognized international dataset used for carbon reporting, ESG declarations,
            and institutional environmental assessments.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Source: UK DEFRA / BEIS</li>
            <li>• Version used: 2023</li>
            <li>• Update cycle: annual</li>
            <li>• Link: https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting</li>
          </ul>
        </div>

        {/* 3 — IPCC AR6 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            IPCC AR6 Climate Reference
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Applies the internationally recognized Global Warming Potential (GWP) values
            based on the latest IPCC Assessment Report.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Source: IPCC AR6 WGIII</li>
            <li>• GWP horizons used: 100-year values</li>
            <li>• Scientific foundation for CO₂e conversion</li>
            <li>• Link: https://www.ipcc.ch/report/ar6/wg3/</li>
          </ul>
        </div>

        {/* 4 — Eurostat / EEA Sectoral Concordances */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Eurostat / EEA Sectoral Concordances
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Used for mapping financial expenditure categories to representative sectors
            using EU-recognized classification structures.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Sources: Eurostat + EEA datasets</li>
            <li>• NACE-based classification alignment</li>
            <li>• Version used: 2024 EU data cycle</li>
            <li>• Link: https://ec.europa.eu/eurostat</li>
          </ul>
        </div>

      </div>


      {/* LIMITATIONS — Required by rule 12 */}
      <div className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-[#15B097]/40 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Limitations of Data Sources (Transparency Requirement)
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed max-w-5xl">
          Although these datasets are widely recognized, they present inherent limitations
          that institutions must be aware of. Emission factors represent sector averages
          and may not reflect the precise operational reality of each company. Differences
          between national datasets, update cycles and methodological assumptions introduce
          variability. Certif-Scope does not model specific activities, fuel mixes or
          supply-chain details beyond the validated spend-based approach.
        </p>
      </div>


      {/* VERSIONING BLOCK — required for regulatory transparency */}
      <div className="mt-20 p-10 rounded-xl bg-[#0B3A63] text-white shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Versioning & Update Policy
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          Certif-Scope maintains a transparent version-control log ensuring that each
          attestation indicates the exact data-source versions used during calculation.
          When datasets are updated by ADEME, DEFRA, IPCC or Eurostat, the calculation
          engine is updated accordingly. Each change generates a new version reference
          in the attestation metadata to maintain reproducibility and audit integrity.
        </p>
      </div>


      {/* RETURN BUTTON — identical across all sections */}
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
