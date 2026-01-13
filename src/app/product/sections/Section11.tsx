"use client";

export default function Section11() {
  return (
    <section
      id="s11"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Methodological Limitations */}
      <div className="p-12 rounded-2xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          11. Methodological Limitations (Required Transparency)
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          This section outlines the inherent constraints of the spend-based calculation
          model used by Certif-Scope. The approach follows the GHG Protocol categorisation
          rules and aligns with ESRS E1 requirements, but it does not represent
          operational measurements or activity-level emissions. These limitations must be
          considered by institutions, auditors and reviewers.
        </p>
      </div>


      {/* GRID — 4 methodological limitations */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">

        {/* 1 — Sector averages only */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Sector-Average Emission Factors
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Calculations rely on sector averages and do not model company-specific energy
            use, fuel mix, supply chain or operational activities.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>
              • GHG Protocol reference:{" "}
              <a
                href="https://ghgprotocol.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#0B3A63] hover:text-[#15B097]"
              >
                https://ghgprotocol.org
              </a>
            </li>
          </ul>
        </div>

        {/* 2 — No operational factors */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            No Operational or Activity Data
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The model does not incorporate physical data such as kWh, litres, tonnage,
            mileage or process emissions, which are required for full CSRD or ISO reporting.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>
              • ESRS E1 reference:{" "}
              <a
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R2772"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#0B3A63] hover:text-[#15B097]"
              >
                ESRS E1 Regulation
              </a>
            </li>
          </ul>
        </div>

        {/* 3 — Dependent on dataset quality */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Dependency on Public Dataset Quality
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Results reflect the scope and update frequency of public datasets such as
            ADEME, DEFRA, IPCC and Eurostat. Variations exist across countries and cycles.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>
              • ADEME Base Carbone:{" "}
              <a
                href="https://www.bilans-ges.ademe.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#0B3A63] hover:text-[#15B097]"
              >
                https://www.bilans-ges.ademe.fr
              </a>
            </li>
          </ul>
        </div>

        {/* 4 — Estimate, not audit */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Estimation, Not an Audit
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Outputs are standardized estimates based on financial amounts and sector
            categories. They do not constitute a verified audit or assurance-level
            engagement under ISO 14064-1.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>
              • ISO 14064-1 reference:{" "}
              <a
                href="https://www.iso.org/standard/66453.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#0B3A63] hover:text-[#15B097]"
              >
                ISO documentation
              </a>
            </li>
          </ul>
        </div>

      </div>


      {/* INFO STRIP — context */}
      <div className="mt-20 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Regulatory Context of These Limitations
        </h3>

        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          Spend-based GHG estimation is recognized for screening purposes but must be
          distinguished from full operational reporting. European procurement, banks and
          insurers may accept this format for initial evaluation but can request additional
          documents for completeness depending on regulatory context and risk level.
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
