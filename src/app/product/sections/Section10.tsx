"use client";

export default function Section10() {
  return (
    <section
      id="s10"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="bg-[#F8FAFC] p-10 rounded-2xl shadow-sm border border-gray-100 mb-14">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-4">
          Data Sources Used in the Calculation
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl">
          Certif-Scope relies on authoritative and internationally recognized datasets 
          to ensure accuracy, transparency, and institutional credibility. All emission factors 
          are derived from standardized European methodologies and continuously monitored 
          for updates.
        </p>
      </div>

      {/* 2-COLUMN GRID WITH PREMIUM DESIGN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* COLUMN 1 */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            Primary Data Sources
          </h3>

          <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <li>
              <span className="font-semibold text-[#0B3A63]">• European Environment Agency (EEA):</span><br />
              Official emission factors for energy, transportation and waste streams.
            </li>

            <li>
              <span className="font-semibold text-[#0B3A63]">• IPCC Emission Factor Database:</span><br />
              Global datasets validated by the Intergovernmental Panel on Climate Change.
            </li>

            <li>
              <span className="font-semibold text-[#0B3A63]">• Eurostat Sectoral Spend Indicators:</span><br />
              Harmonized data for sector-based approximations of SME activity.
            </li>

            <li>
              <span className="font-semibold text-[#0B3A63]">• GHG Protocol:</span><br />
              Spend-based calculation methodology and standardized reporting requirements.
            </li>
          </ul>

          <p className="mt-4 text-sm underline text-[#0B3A63]">
            <a target="_blank" href="https://www.eea.europa.eu/data-and-maps">
              European Environment Agency datasets →
            </a>
          </p>
        </div>

        {/* COLUMN 2 */}
        <div className="p-8 bg-[#0B3A63] text-white border border-[#15B097] rounded-xl shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent"></div>

          <h3 className="text-2xl font-semibold mb-4 relative z-10">
            How Certif-Scope Uses These Data
          </h3>

          <p className="text-white/90 text-sm leading-relaxed relative z-10">
            All external datasets are processed through a deterministic engine that aligns 
            spending categories with the closest corresponding emission factors. The goal is to 
            provide a transparent, reproducible and verifiable calculation method suitable 
            for institutional audits.
          </p>

          <ul className="space-y-3 mt-4 text-sm text-white/90 relative z-10">
            <li>• Automatic category matching with EEA and IPCC factors</li>
            <li>• Verified annual updates when agencies publish new data</li>
            <li>• Sector normalization for SME-level financial structures</li>
            <li>• Clear documentation included in the attestation PDF</li>
          </ul>

          <p className="mt-4 underline text-sm relative z-10">
            <a target="_blank" href="https://ghgprotocol.org/standards">
              GHG Protocol official documentation →
            </a>
          </p>
        </div>

      </div>

      {/* FEATURE BLOCK */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Update Frequency & Data Integrity
        </h3>

        <p className="text-gray-700 max-w-4xl leading-relaxed mb-6">
          Certif-Scope monitors source datasets on a recurring basis and applies updates 
          automatically. Each attestation includes metadata specifying the version of the 
          emission factors and the date of the last data refresh for complete transparency.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
          <li className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            • Annual review of European Environment Agency data
          </li>
          <li className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            • Automatic detection of updated IPCC datasets
          </li>
          <li className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            • Verification of emission factor consistency across sources
          </li>
          <li className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            • Transparent version tags included in PDF metadata
          </li>
        </ul>

      </div>

      {/* RETURN BUTTON — IDENTICAL ACROSS ALL SECTIONS */}
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
