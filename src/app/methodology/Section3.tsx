"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="p-12 bg-[#F8FAFC] dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3A63]">
          3. Mathematical Model
        </h2>

        <p className="text-gray-700 dark:text-gray-300 max-w-4xl mt-6 leading-relaxed">
          This section describes the exact mathematical structure used in Certif-Scope’s
          spend-based calculation engine. It formalizes the computation rules, variable
          definitions and treatment constraints ensuring that results are deterministic,
          reproducible and auditable by institutions.
        </p>
      </div>


      {/* MODEL FORMULA BLOCK */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-2xl shadow border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Base Formula
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Certif-Scope uses a strict linear model where emissions are proportional to
          spending within a defined category. For each category:
        </p>

        <div className="mt-4 p-4 bg-[#F8FAFC] dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
          <code className="text-sm text-[#0B3A63]">
            Eᵢ = Sᵢ × Fᵢ
          </code>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mt-4 text-sm leading-relaxed">
          Where:
        </p>

        <ul className="mt-3 text-sm text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
          <li>• <strong>Eᵢ</strong> = emissions for category i (kg CO₂e)</li>
          <li>• <strong>Sᵢ</strong> = spending for category i (EUR)</li>
          <li>• <strong>Fᵢ</strong> = emission factor for category i (kg CO₂e / EUR)</li>
        </ul>

        <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Total emissions are calculated by summing all categories:
        </p>

        <div className="mt-4 p-4 bg-[#F8FAFC] dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
          <code className="text-sm text-[#0B3A63]">
            Eₜₒₜₐₗ = Σ (Sᵢ × Fᵢ)
          </code>
        </div>
      </div>


      {/* DETERMINISTIC CHARACTERISTICS */}
      <div className="mt-16 p-10 bg-[#F8FAFC] dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Deterministic Properties
        </h3>

        <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm max-w-4xl leading-relaxed">
          <li>• Same inputs always produce the same outputs.</li>
          <li>• No probabilistic assumptions or forecasting.</li>
          <li>• No regression, no curve fitting, no prediction.</li>
          <li>• No hidden variables or correction coefficients.</li>
          <li>• No normalization against supplier or regional data.</li>
        </ul>

        <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed max-w-4xl">
          This guarantees institutional reproducibility and audit traceability.
        </p>
      </div>


      {/* CATEGORY PROCESSING RULES */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Category Processing Rules
        </h3>

        <p className="text-gray-700 dark:text-gray-300 max-w-4xl leading-relaxed mb-4">
          Each category is treated independently following strict criteria:
        </p>

        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed max-w-4xl">
          <li>• No reallocation between categories.</li>
          <li>• No weighting by supplier type.</li>
          <li>• No substitution based on sector corrections.</li>
          <li>• No cross-category adjustments.</li>
          <li>• No aggregation beyond the final sum.</li>
        </ul>
      </div>


      {/* ZERO-EXTRAPOLATION RULE */}
      <div className="mt-16 p-10 bg-[#0B3A63] text-white rounded-2xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">
          Zero-Extrapolation Policy
        </h3>

        <p className="text-white/90 max-w-4xl leading-relaxed">
          Certif-Scope does not extrapolate missing data. If an expenditure category is not
          provided, its contribution is considered zero. No estimates are created from partial
          information. This rule ensures transparency and prevents artificial inflations.
        </p>
      </div>


      {/* ANTI-DUPLICATION CHECKS */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Anti-Duplication Logic
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
          The model prevents double-counting by enforcing category exclusivity. A single
          expenditure cannot be assigned to more than one category.
        </p>

        <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <li>• Each euro is counted once.</li>
          <li>• No overlapping categories are allowed.</li>
          <li>• No multi-factor decomposition.</li>
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
