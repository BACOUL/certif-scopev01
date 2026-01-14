"use client";

export default function Section11() {
  return (
    <section
      id="s11"
      data-section="s11"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div
        className="p-12 rounded-2xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-md"
      >
        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]"
          data-i18n="s11.title"
        >
          Methodological Limitations
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed"
          data-i18n="s11.intro"
        >
          Certif-Scope uses a simplified spend-based pathway inspired by GHG Protocol Scope 3
          guidance. It provides indicative, reproducible CO₂e values for procurement, banking,
          insurance and investor screening. It is not a CSRD or ESRS E1 disclosure, not a Scope 1/2 inventory,
          not an ISO 14064-1 verification and not suitable for regulatory submissions.
        </p>
      </div>


      {/* 4 blocks limitations */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">

        {/* 1 */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm"
          data-i18n="s11.block1"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Sector-Average Emission Factors
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Emission factors represent sector averages rather than company-specific operations.
            They cannot capture supply-chain or geographic performance differences.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>
              • GHG Protocol Scope 3 Spend-Based:
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

        {/* 2 */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm"
          data-i18n="s11.block2"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            No Operational or Activity Data
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            No physical activity inputs (kWh, litres, km, tonnes). Cannot compute Scope 1 or Scope 2.
            Not an ESRS E1 disclosure and not valid for regulatory filings.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>
              • ESRS E1 Regulation:
              <a
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R2772"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#0B3A63]"
              >
                Official Text
              </a>
            </li>
          </ul>
        </div>

        {/* 3 */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm"
          data-i18n="s11.block3"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Dataset Dependency
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Calculations depend on ADEME, DEFRA and IPCC update cycles. Eurostat mapping does not
            modify emission factors directly.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>
              • ADEME dataset:
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

        {/* 4 */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm"
          data-i18n="s11.block4"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Estimate, Not an Audit
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Results are indicative estimates based solely on spending, not physical measurement.
            Not valid for ISO 14064-1 verification or assurance engagements.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>
              • ISO 14064-1 reference:
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


      {/* Intended / Not intended */}
      <div
        className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md"
        data-i18n="s11.intendedblock"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Intended Use vs Not Intended Use
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold text-[#15B097] mb-3">Intended Use</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Banking ESG pre-screening</li>
              <li>• Procurement GPP scoring</li>
              <li>• Insurance preliminary checks</li>
              <li>• Investor due-diligence filtering</li>
              <li>• Supplier onboarding</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#0B3A63] mb-3">Not Intended For</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• CSRD or ESRS E1 reporting</li>
              <li>• ISO 14064-1 audits</li>
              <li>• Lifecycle analysis (LCA)</li>
              <li>• Scope 1 or Scope 2 calculations</li>
              <li>• Legal or regulatory submissions</li>
            </ul>
          </div>
        </div>
      </div>


      {/* Misinterpretations table */}
      <div
        className="mt-20 p-10 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md"
        data-i18n="s11.misinterpretation"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-6">
          What Certif-Scope Is NOT
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-700 border-collapse">
            <thead>
              <tr className="bg-white border-b">
                <th className="p-4">Misinterpretation</th>
                <th className="p-4">Correct Clarification</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-4">A CSRD-compliant report</td>
                <td className="p-4">Not an ESRS disclosure. Not a regulatory report.</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">An ISO 14064-1 audit</td>
                <td className="p-4">Not suitable for verification or assurance.</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">A lifecycle assessment</td>
                <td className="p-4">No activity data. No process modelling.</td>
              </tr>

              <tr>
                <td className="p-4">An operational measurement</td>
                <td className="p-4">Uses € inputs only, not physical units.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      {/* Regulatory strip */}
      <div
        className="mt-20 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden"
        data-i18n="s11.regcontext"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Regulatory Context of These Limitations
        </h3>

        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          Spend-based indicators are acceptable for screening and procurement workflows but not for
          regulatory compliance. Certif-Scope makes these boundaries explicit to prevent
          misinterpretation and ensure proper institutional usage.
        </p>
      </div>


      {/* Return Button */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s11.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
              }
