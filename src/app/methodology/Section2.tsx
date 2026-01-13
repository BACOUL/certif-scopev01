"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Institutional, non-redundant */}
      <div className="p-12 bg-[#F8FAFC] dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3A63]">
          2. Theoretical Foundations
        </h2>

        <p className="text-gray-700 dark:text-gray-300 max-w-4xl mt-6 leading-relaxed">
          This section explains the theoretical pillars supporting the spend-based methodology.
          It clarifies why the model is mathematically consistent, where the approach originates,
          and how it aligns with recognized scientific and economic frameworks. This ensures
          transparency and institutional auditability.
        </p>
      </div>


      {/* ORIGIN BLOCK */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Origin of the Spend-Based Model
        </h3>

        <p className="text-gray-700 dark:text-gray-300 max-w-4xl leading-relaxed">
          The spend-based model originates from environmental extended input–output (EEIO)
          theory. This framework links economic activity with environmental impact through
          statistical relationships derived from national economic accounts and sectoral
          emissions inventories.
        </p>

        <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <li>• Input–output tables describe how industries purchase from each other.</li>
          <li>• Environmental accounts assign emissions to each sector’s total activity.</li>
          <li>• Statistical coupling produces average emission intensity per economic sector.</li>
        </ul>
      </div>


      {/* MATHEMATICAL LOGIC BLOCK */}
      <div className="mt-16 p-10 bg-[#F8FAFC] dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Mathematical Basis
        </h3>

        <p className="text-gray-700 dark:text-gray-300 max-w-4xl leading-relaxed">
          The model assumes proportionality between expenditure and emissions. It applies a
          deterministic linear formula ensuring reproducibility:
        </p>

        <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <code className="text-sm text-[#0B3A63]">
            Emissions (kg CO₂e) = Spending (€) × Emission Factor (kg CO₂e / €)
          </code>
        </div>

        <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm max-w-4xl leading-relaxed">
          The linear structure avoids assumptions about operational behavior, efficiency,
          supplier differences or technological variations.
        </p>
      </div>


      {/* WHY LINEAR MODEL BLOCK */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Why the Linear Model is Accepted
        </h3>

        <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-4xl">
          <li>• It avoids speculative modeling or forecasting.</li>
          <li>• It ensures reproducibility across different institutions.</li>
          <li>• It requires no primary operational data from suppliers.</li>
          <li>• It is mathematically transparent and auditable.</li>
          <li>• It aligns with GHG Protocol guidance where physical data is unavailable.</li>
        </ul>
      </div>


      {/* REGULATORY FOUNDATION BLOCK */}
      <div className="mt-16 p-10 bg-[#0B3A63] text-white rounded-2xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">
          Regulatory & Scientific Foundation
        </h3>

        <p className="text-white/90 max-w-4xl leading-relaxed">
          The foundations of this methodology can be traced to recognized scientific and
          regulatory principles:
        </p>

        <ul className="mt-4 space-y-2 text-white/90 text-sm">
          <li>• GHG Protocol — guidance for Scope 3 spend-based estimation.</li>
          <li>• ISO 14064-1 — principles of relevance, accuracy, consistency and transparency.</li>
          <li>• Eurostat supply–use tables — structure of inter-industry financial flows.</li>
          <li>• National environmental accounts — sector-level CO₂ assignments.</li>
        </ul>

        <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-4xl">
          These frameworks validate the legitimacy of associating economic expenditure with
          average sector emissions in absence of primary operational data.
        </p>
      </div>


      {/* APPLICATION LIMIT BLOCK */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          When the Method Should Be Used
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
          This approach is recommended in institutional scenarios where:
        </p>

        <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300 text-sm max-w-4xl">
          <li>• Suppliers cannot provide physical or activity-based emissions data.</li>
          <li>• Large portfolios require rapid standardized estimation.</li>
          <li>• Subcontractors vary widely and lack environmental reporting.</li>
          <li>• Budget data is available but operational data is not.</li>
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
