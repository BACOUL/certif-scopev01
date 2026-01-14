"use client";

export default function Section6() {
  return (
    <section
      id="s6"
      data-section="s6"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-xl overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 to-transparent opacity-40"
          aria-hidden="true"
        ></div>

        <h2
          className="text-4xl md:text-5xl font-extrabold relative z-10"
          data-i18n="s6.title"
        >
          How Certif-Scope Works
        </h2>

        <p
          className="text-white/90 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="s6.intro"
        >
          Certif-Scope converts annual spending into an indicative CO₂e value through a deterministic
          calculation pathway. The result is a structured, reproducible and verifiable document aligned
          with procurement, banking and institutional screening workflows.
        </p>

        <div
          className="mt-6 text-sm text-white/80 underline space-y-1 relative z-10"
          data-i18n="s6.sources"
        >
          <a href="https://www.bilans-ges.ademe.fr" target="_blank" rel="noopener noreferrer">
            ADEME Base Carbone – Emission Factors
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
      <div
        className="mt-16 p-8 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm"
        data-i18n="s6.schema"
      >
        <pre className="text-sm md:text-base font-mono text-[#0B3A63] leading-relaxed whitespace-pre-wrap text-center">{`[User Inputs (Spending €)]
        ↓
[Category Mapping Table]
        ↓
[Emission Factor Retrieval – ADEME/DEFRA/IPCC]
        ↓
CO₂e = Spend (€) × Emission Factor
        ↓
[Standardized PDF + SHA-256 Integrity Hash]`}</pre>
      </div>

      {/* 5-STEP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-20">

        {/* 1 INPUT */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md"
          data-i18n="s6.step1.block"
        >
          <h3 className="text-xl font-bold text-[#0B3A63]" data-i18n="s6.step1.title">
            1. Input Capture
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed" data-i18n="s6.step1.text">
            Users enter annual spending per predefined category. No operational data (kWh, litres, km)
            is required.
          </p>
        </div>

        {/* 2 MAPPING */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md"
          data-i18n="s6.step2.block"
        >
          <h3 className="text-xl font-bold text-[#0B3A63]" data-i18n="s6.step2.title">
            2. Category Mapping
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed" data-i18n="s6.step2.text">
            Spending values are mapped to standardized spend-based categories derived from the GHG
            Protocol. The mapping is deterministic.
          </p>
        </div>

        {/* 3 DATA SOURCES */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md"
          data-i18n="s6.step3.block"
        >
          <h3 className="text-xl font-bold text-[#0B3A63]" data-i18n="s6.step3.title">
            3. Emission Factors
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed" data-i18n="s6.step3.text">
            Factors come from official, version-controlled datasets (ADEME, DEFRA, IPCC). These averages
            provide indicative estimates.
          </p>
        </div>

        {/* 4 CALCULATION */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md"
          data-i18n="s6.step4.block"
        >
          <h3 className="text-xl font-bold text-[#0B3A63]" data-i18n="s6.step4.title">
            4. Deterministic Calculation
          </h3>
          <p className="text-gray-700 text-sm mt-3" data-i18n="s6.step4.text">
            A fixed formula converts spending into indicative CO₂e:
          </p>

          <div
            className="mt-3 p-3 bg-white border rounded-md text-gray-700 text-xs"
            data-i18n="s6.step4.formula"
          >
            CO₂e = Spend (€) × Emission Factor (kgCO₂e / €)
          </div>
        </div>

        {/* 5 PDF OUTPUT */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-md"
          data-i18n="s6.step5.block"
        >
          <h3 className="text-xl font-bold text-[#0B3A63]" data-i18n="s6.step5.title">
            5. PDF Output & Hash
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed" data-i18n="s6.step5.text">
            The PDF includes totals, category breakdowns, dataset references and a SHA-256 integrity
            hash for offline verification.
          </p>
        </div>

      </div>

      {/* OPTIONAL VERIFICATION */}
      <div
        className="mt-20 p-8 bg-white border border-gray-200 rounded-xl shadow-md"
        data-i18n="s6.verification.block"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4" data-i18n="s6.verification.title">
          Optional: Offline Verification Commands
        </h3>

        <p className="text-gray-700 text-sm mb-4" data-i18n="s6.verification.text">
          These commands allow auditors to recompute the checksum. They are optional and not required
          for typical SME usage.
        </p>

        <div className="space-y-4 text-sm text-gray-700">

          <div data-i18n="s6.verification.mac.block">
            <p className="font-semibold text-[#0B3A63] mb-1" data-i18n="s6.verification.mac.title">
              macOS / Linux:
            </p>
            <pre className="bg-[#F8FAFC] p-3 rounded border border-gray-200 font-mono text-xs">
sha256sum certif-scope.pdf
            </pre>
          </div>

          <div data-i18n="s6.verification.windows.block">
            <p className="font-semibold text-[#0B3A63] mb-1" data-i18n="s6.verification.windows.title">
              Windows PowerShell:
            </p>
            <pre className="bg-[#F8FAFC] p-3 rounded border border-gray-200 font-mono text-xs">
Get-FileHash .\certif-scope.pdf -Algorithm SHA256
            </pre>
          </div>

        </div>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          aria-label="Back to section summary"
          data-i18n="s6.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
            }
