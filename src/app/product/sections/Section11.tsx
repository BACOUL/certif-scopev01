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
          Certif-Scope uses a spend-based calculation model aligned with the GHG Protocol and
          ESRS E1 screening rules. It provides standardized estimates suitable for financial
          institutions, procurement workflows and risk-screening. It is not a substitute for
          operational measurement, activity-level accounting or CSRD-compliant reporting.
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
            Results rely on publicly available averages rather than company-specific activity
            levels (energy use, fuel mix, transport tonnage, etc.).
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
            The model does not incorporate direct operational metrics such as kWh, litres,
            kilometres, tonnage or process emissions. These are necessary for full CSRD or ISO
            lifecycle reporting.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>
              • ESRS E1 Regulation:{" "}
              <a
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R2772"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#0B3A63] hover:text-[#15B097]"
              >
                Official text
              </a>
            </li>
          </ul>
        </div>

        {/* 3 — Dependent on dataset quality */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Dependency on Dataset Quality
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Estimates reflect update cycles and granularity of ADEME, DEFRA, IPCC and Eurostat.
            Differences may appear across years or countries.
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
            Estimate, Not an Audit
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Outputs are estimates based on financial amounts and sector categories. They do not
            constitute an audit or third-party verification under ISO 14064-1.
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



      {/* USAGE vs NON-USAGE */}
      <div className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md">

        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Intended Use vs. Not Intended Use
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Intended Use */}
          <div>
            <h4 className="text-xl font-bold text-[#15B097] mb-3">Intended Use (Allowed)</h4>
            <ul className="text-sm text-gray-700 space-y-2 leading-relaxed">
              <li>• Initial ESG screening by banks (EBA ESG guidelines)</li>
              <li>• Procurement evaluation in GPP workflows</li>
              <li>• Investor due-diligence indicators</li>
              <li>• Insurance pre-underwriting screening</li>
              <li>• Supplier onboarding documents</li>
            </ul>
          </div>

          {/* Not Intended Use */}
          <div>
            <h4 className="text-xl font-bold text-[#0B3A63] mb-3">Not Intended For (Restricted)</h4>
            <ul className="text-sm text-gray-700 space-y-2 leading-relaxed">
              <li>• Full CSRD reporting (requires activity-level data)</li>
              <li>• ISO 14064-1 verification engagements</li>
              <li>• Detailed lifecycle assessment (LCA)</li>
              <li>• Emission-credit generation or trading</li>
              <li>• Legal compliance filings submitted to authorities</li>
            </ul>
          </div>

        </div>
      </div>



      {/* TABLE — "What It Is Not" */}
      <div className="mt-20 p-10 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">

        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-6">
          What Certif-Scope Is NOT (Clarity for Institutions)
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-700 border-collapse">
            <thead>
              <tr className="bg-white border-b">
                <th className="p-4 text-left font-semibold">Misinterpretation</th>
                <th className="p-4 text-left font-semibold">Correct Clarification</th>
              </tr>
            </thead>
            <tbody>

              <tr className="border-b">
                <td className="p-4">A CSRD-compliant report</td>
                <td className="p-4">It is a screening indicator, not full ESRS disclosure</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">An ISO 14064-1 audit</td>
                <td className="p-4">It does not meet audit or assurance-level criteria</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">A lifecycle assessment</td>
                <td className="p-4">No activity-level or process-based data included</td>
              </tr>

              <tr>
                <td className="p-4">An operational measurement</td>
                <td className="p-4">Uses financial inputs, not physical measurements</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>



      {/* CONTEXT STRIP */}
      <div className="mt-20 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Regulatory Context of These Limitations
        </h3>

        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          Spend-based indicators are accepted by banks, insurers and procurement authorities
          for initial screening. For regulatory filings or full CSRD submissions, additional
          operational data is required. Certif-Scope clearly states these boundaries to avoid
          misuse or overinterpretation.
        </p>
      </div>



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
