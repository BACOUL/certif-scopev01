"use client";

export default function Section6() {
  return (
    <section
      id="s6"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 to-transparent opacity-40"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          6. How Certif-Scope Works
        </h2>

        <p className="text-white/90 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope transforms annual expenditure data into an indicative CO₂ value using a 
          deterministic calculation pathway. The workflow produces a consistent, reproducible and 
          verifiable document that meets the common requirements of procurement, financing and 
          institutional screening processes requesting high-level, spend-based climate indicators.
        </p>

        <div className="mt-6 text-sm text-white/80 underline space-y-1 relative z-10">
          <a href="https://www.bilans-ges.ademe.fr" target="_blank" rel="noopener noreferrer">
            ADEME Base Carbone (public emission factors)
          </a><br />
          <a href="https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting" target="_blank" rel="noopener noreferrer">
            DEFRA UK GHG Conversion Factors
          </a><br />
          <a href="https://www.ipcc.ch/report/ar6/" target="_blank" rel="noopener noreferrer">
            IPCC AR6 GWP Parameters
          </a>
        </div>
      </div>

      {/* SCHEMA */}
      <div className="mt-16 p-8 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm">
        <pre className="text-sm md:text-base font-mono text-[#0B3A63] leading-relaxed whitespace-pre-wrap text-center">
{`[User Inputs (Spending €)]
        ↓
[Category Mapping Table]
        ↓
[Emission Factor Retrieval — ADEME/DEFRA/IPCC]
        ↓
CO₂e = Spend (€) × Emission Factor
        ↓
[Standardized PDF + SHA-256 Integrity Hash]`}
        </pre>
      </div>

      {/* 5-STEP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-20">

        {/* 1 INPUT */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold text-[#0B3A63]">1. Input Capture</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Users enter annual spending per predefined category. Basic validation ensures coherent 
            numeric structure. No detailed operational data (kWh, litres, km) is required.
          </p>
        </div>

        {/* 2 MAPPING */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-xl font-bold text-[#0B3A63]">2. Category Mapping</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Spending values are mapped to standardized categories aligned with spend-based methods 
            from the GHG Protocol. The mapping is deterministic and identical for the same inputs.
          </p>
        </div>

        {/* 3 DATA SOURCES */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold text-[#0B3A63]">3. Emission Factors</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Emission factors come from public, versioned datasets. These values represent sectoral 
            averages and provide an indicative estimation, not an audited measurement.
          </p>
        </div>

        {/* 4 CALCULATION */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-xl font-bold text-[#0B3A63]">4. Deterministic Calculation</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            A fixed formula is applied:
          </p>
          <div className="mt-3 p-3 bg-white border rounded-md text-gray-700 text-xs">
            CO₂e = Spend (€) × Emission Factor (kgCO₂e / €)
          </div>
        </div>

        {/* 5 PDF OUTPUT */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold text-[#0B3A63]">5. PDF Output & Hash</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            The PDF includes totals, breakdowns, dataset references, calculation notes and a 
            SHA-256 integrity hash for offline verification. No login or server lookup is needed.
          </p>
        </div>

      </div>

      {/* OPTIONAL VERIFICATION */}
      <div className="mt-20 p-8 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Optional: Offline Verification Commands
        </h3>

        <p className="text-gray-700 text-sm mb-4">
          These commands are intended for auditors or institutional reviewers. They are not required 
          for standard use by SMEs.
        </p>

        <div className="space-y-4 text-sm text-gray-700">

          <div>
            <p className="font-semibold text-[#0B3A63] mb-1">macOS / Linux:</p>
            <pre className="bg-[#F8FAFC] p-3 rounded border border-gray-200 font-mono text-xs">
sha256sum certif-scope.pdf
            </pre>
          </div>

          <div>
            <p className="font-semibold text-[#0B3A63] mb-1">Windows PowerShell:</p>
            <pre className="bg-[#F8FAFC] p-3 rounded border border-gray-200 font-mono text-xs">
Get-FileHash .\certif-scope.pdf -Algorithm SHA256
            </pre>
          </div>

        </div>
      </div>

      {/* LIMITATIONS */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Methodological Limitations
        </h3>

        <ul className="text-gray-700 text-sm leading-relaxed space-y-2">
          <li>• Indicative estimation only — not a precise operational measurement</li>
          <li>• Based on sector averages from emission-factor datasets</li>
          <li>• Not a CSRD/ESRS-compliant inventory</li>
          <li>• Not suitable for audited carbon accounting</li>
          <li>• Intended for procurement and screening workflows requiring high-level indicators</li>
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
