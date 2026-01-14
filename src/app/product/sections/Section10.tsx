"use client";

export default function Section10() {
  return (
    <section
      id="s10"
      data-section="s10"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="rounded-2xl p-12 bg-white border border-gray-200 shadow-lg relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/5 to-[#15B097]/10 pointer-events-none"
          aria-hidden="true"
        ></div>

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="s10.title"
        >
          Data Sources (Verified, Versioned, Auditable)
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="s10.intro"
        >
          Certif-Scope relies exclusively on publicly available, traceable and reproducible datasets.
          All emission factors come from official institutional sources with transparent versioning.
          No proprietary factors or black-box datasets are used. This ensures deterministic, repeatable
          CO₂e calculations aligned with spend-based pathways from the GHG Protocol.
          This is not a CSRD/ESRS-compliant inventory.
        </p>
      </div>

      {/* GRID OF DATASETS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">

        {/* ADEME */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#0B3A63]/20 shadow-sm break-words"
          data-i18n="s10.ademe.block"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2" data-i18n="s10.ademe.title">
            ADEME Base Carbone (France)
          </h3>
          <p className="text-gray-700 text-sm" data-i18n="s10.ademe.text">
            Official national emission-factor database widely used in public tenders and audits.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Version used: 2024.2</li>
            <li>• Update cycle: annual</li>
            <li>• Public and fully traceable</li>
            <li>• Used directly for category-level CO₂e conversion</li>
            <li>
              • Website:
              <a
                href="https://www.bilans-ges.ademe.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B3A63] underline"
              >
                bilans-ges.ademe.fr
              </a>
            </li>
          </ul>
        </div>

        {/* DEFRA */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition break-words"
          data-i18n="s10.defra.block"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2" data-i18n="s10.defra.title">
            DEFRA UK Conversion Factors
          </h3>
          <p className="text-gray-700 text-sm" data-i18n="s10.defra.text">
            Internationally recognized dataset for global corporate GHG reporting.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Version used: 2023–2024</li>
            <li>• Annual update cycle</li>
            <li>• Public, reproducible tables</li>
            <li>
              • Website:
              <a
                href="https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B3A63] underline"
              >
                UK Government Conversion Factors
              </a>
            </li>
          </ul>
        </div>

        {/* IPCC */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm break-words"
          data-i18n="s10.ipcc.block"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2" data-i18n="s10.ipcc.title">
            IPCC AR6 Conversion Parameters
          </h3>
          <p className="text-gray-700 text-sm" data-i18n="s10.ipcc.text">
            Provides GWP100 multipliers. Not an emission-factor database.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Used only for GWP conversions</li>
            <li>• Version: AR6 WGIII 2023</li>
            <li>
              • Website:
              <a
                href="https://www.ipcc.ch/report/ar6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B3A63] underline"
              >
                ipcc.ch/report/ar6
              </a>
            </li>
          </ul>
        </div>

        {/* EUROSTAT */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition break-words"
          data-i18n="s10.eurostat.block"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2" data-i18n="s10.eurostat.title">
            Eurostat NACE Classification
          </h3>
          <p className="text-gray-700 text-sm" data-i18n="s10.eurostat.text">
            Provides sector classification structure. Not an emission-factor dataset.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Classification only</li>
            <li>• Version used: 2024 cycle</li>
            <li>• Ensures deterministic mapping consistency</li>
            <li>
              • Website:
              <a
                href="https://ec.europa.eu/eurostat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B3A63] underline"
              >
                ec.europa.eu/eurostat
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* LIMITATIONS */}
      <div
        className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-[#15B097]/40 shadow-sm"
        data-i18n="s10.limitations.block"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4" data-i18n="s10.limitations.title">
          Limitations of Data Sources
        </h3>

        <p className="text-gray-700 text-sm max-w-5xl leading-relaxed" data-i18n="s10.limitations.text">
          All datasets provide sector averages. They do not reflect company-specific conditions or
          granular supply-chain variations. They ensure comparability but are not substitutes for LCA
          or audited inventories.
        </p>
      </div>

      {/* VERSIONING POLICY */}
      <div
        className="mt-20 p-10 rounded-xl bg-[#0B3A63] text-white shadow-md relative overflow-hidden"
        data-i18n="s10.versioning.block"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10" data-i18n="s10.versioning.title">
          Version Control & Update Policy
        </h3>

        <p
          className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10"
          data-i18n="s10.versioning.text"
        >
          Every attestation includes dataset identifiers ensuring deterministic reproducibility.
          Hash values change automatically when dataset versions change.
        </p>

        <ul className="mt-6 text-white/90 text-sm space-y-2 relative z-10">
          <li>• ADEME: annual updates</li>
          <li>• DEFRA: annual updates</li>
          <li>• IPCC: updated only after AR releases</li>
          <li>• Full backward compatibility for audits</li>
          <li>• Deprecated versions noted explicitly</li>
        </ul>
      </div>


      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s10.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
          }
