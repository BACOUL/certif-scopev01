"use client";

export default function Section8() {
  return (
    <section
      id="s8"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Unique institutional block */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 rounded-2xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          8. Computational Flow & Formula Structure
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          This section defines the complete internal flow used to convert financial
          expenditure into CO₂ estimates using deterministic linear operations.
          It details input validation, category isolation, factor binding, formula
          application and final aggregation. No probabilistic steps occur and the
          computation always produces reproducible results.
        </p>
      </div>



      {/* BLOCK — Linear Flow Overview */}
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Linear Processing Sequence (No Branching)
        </h3>

        <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
          <li>• Input categories are validated for allowed structure and numeric type.</li>
          <li>• Each category value is isolated and processed independently.</li>
          <li>• The emission factor for each category is retrieved from a locked version set.</li>
          <li>• The factor is multiplied directly with the expenditure value.</li>
          <li>• Individual results are summed to form the total estimate.</li>
        </ul>
      </div>



      {/* BLOCK — Core Formula */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Core Formula (Spend-Based Conversion)
        </h3>

        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          The fundamental operation used for each category is a direct multiplication:
        </p>

        <pre className="bg-white border border-gray-200 text-gray-900 p-4 rounded-lg text-sm">
Emissions(category) = Spending(category) × EF(category)
        </pre>

        <p className="text-gray-700 text-sm mt-4 leading-relaxed">
          No adjustments, weighting factors, elasticity assumptions or supplier-specific
          modifiers are applied. The output reflects the average carbon intensity of
          the economic segment associated with the spending category.
        </p>
      </div>



      {/* BLOCK — Input Validation Rules */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Input Validation Rules
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Values must be numeric and non-negative.</li>
          <li>• Unsupported categories are rejected, not mapped.</li>
          <li>• Zero values are processed normally and contribute 0 emissions.</li>
          <li>• No inference occurs from partial or missing fields.</li>
          <li>• No automated redistribution across categories.</li>
        </ul>
      </div>



      {/* BLOCK — Aggregation Logic */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Aggregation Logic
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Once all category-level emissions are computed, the total is derived using
          a single arithmetic operation:
        </p>

        <pre className="bg-white border border-gray-200 text-gray-900 p-4 rounded-lg text-sm">
Total Emissions = Σ [ Spending(i) × EF(i) ]
        </pre>

        <p className="text-gray-700 text-sm mt-4 leading-relaxed">
          No normalization, scaling, amortization or trend analysis is performed.
        </p>
      </div>



      {/* BLOCK — Forbidden Computational Behaviour */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Forbidden Computational Behaviour
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• No predictive modelling</li>
          <li>• No time-series reconstruction</li>
          <li>• No weighted average blending</li>
          <li>• No supplier-specific adjustments</li>
          <li>• No elasticity or sector trend coefficients</li>
          <li>• No external dataset enrichment or inference</li>
        </ul>
      </div>



      {/* BLOCK — Rationale */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Why This Computational Model Is Required
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          A strictly linear and deterministic computation ensures that attestations
          can be reproduced at any time using only the input categories and the EF
          dataset version. This guarantees audit continuity and prevents divergence
          caused by dynamic adjustments or evolving assumptions.
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
