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
          11. Methodological Limitations
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          Certif-Scope uses a spend-based model derived from the GHG Protocol Scope 3 guidance. It
          produces standardized estimates suitable for procurement screening, banking ESG scoring,
          underwriting and investor due diligence. It is not designed for activity-level reporting,
          operational measurement or CSRD/ESRS E1 regulatory compliance.
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
            Emission calculations rely on sector-average factors from ADEME and DEFRA. They do not
            reflect specific operational performance or supply-chain variations of an individual company.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>
              • GHG Protocol Scope 3 Spend-Based:{" "}
              <a
                href="https://ghgprotocol.org/scope-3"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#0B3A63]"
              >
                https://ghgprotocol.org/scope-3
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
            Physical activity inputs (kWh, litres, kilometres, tonnage) are not included. The model
            cannot produce Scope 1 or Scope 2 values, and cannot serve as a CSRD or ESRS E1 disclosure.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>
              • ESRS E1 text:{" "}
              <a
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R2772"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#0B3A63]"
              >
                Official regulation
              </a>
            </li>
          </ul>
        </div>

        {/* 3 — Dataset dependency */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Dependency on Dataset Updates
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Estimates reflect the granularity and update cycles of ADEME, DEFRA and IPCC datasets.
            Eurostat only provides sector classification and does not influence emission factors.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>
              • ADEME:{" "}
              <a
                href="https://www.bilans-ges.ademe.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#0B3A63]"
              >
                bilans-ges.ademe.fr
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
            Results are estimates based on financial inputs. They are not suitable for ISO 14064-1
            verification, assurance engagements or formal regulatory filings.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>
              • ISO 14064-1 reference:{" "}
              <a
                href="https://www.iso.org/standard/66453.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#0B3A63]"
              >
                ISO documentation
              </a>
            </li>
          </ul>
        </div>

      </div>



      {/* INTENDED vs NOT INTENDED */}
      <div className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md">

        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Intended Use vs. Not Intended Use
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div>
            <h4 className="text-xl font-bold text-[#15B097] mb-3">Intended Use</h4>
            <ul className="text-sm text-gray-700 space-y-2 leading-relaxed">
              <li>• Banking ESG pre-screening (EBA ESG guidelines)</li>
              <li>• Procurement scoring (GPP frameworks)</li>
              <li>• Insurance pre-underwriting checks</li>
              <li>• Investor due-diligence early-stage filters</li>
              <li>• Supplier onboarding in large enterprises</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#0B3A63] mb-3">Not Intended For</h4>
            <ul className="text-sm text-gray-700 space-y-2 leading-relaxed">
              <li>• Full CSRD or ESRS E1 reporting</li>
              <li>• ISO 14064-1 audits or assurance</li>
              <li>• Lifecycle assessment (LCA)</li>
              <li>• Scope 1 or Scope 2 calculations</li>
              <li>• Legal filings or regulatory submissions</li>
            </ul>
          </div>

        </div>
      </div>



      {/* TABLE — What it is not */}
      <div className="mt-20 p-10 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">

        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-6">
          What Certif-Scope Is NOT
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
                <td className="p-4">Screening indicator only, not ESRS disclosure</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">An ISO 14064-1 audit</td>
                <td className="p-4">Not designed for assurance or verification</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">A lifecycle assessment</td>
                <td className="p-4">No activity-level data or process modelling</td>
              </tr>
              <tr>
                <td className="p-4">An operational measurement</td>
                <td className="p-4">Uses financial inputs, not physical units</td>
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
          Spend-based indicators are accepted for preliminary screening in procurement, banking,
          insurance and investment workflows. They cannot replace operational data required for
          CSRD, ESRS E1, ISO 14064-1 or national regulatory filings. Certif-Scope clearly states
          these limits to ensure appropriate institutional usage.
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
