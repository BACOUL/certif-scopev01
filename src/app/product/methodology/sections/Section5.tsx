"use client";

export default function Section5() {
  return (
    <section
      id="s5"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — institutional, unique scope */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          5. Input Normalisation Rules
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          This section defines the standardisation constraints applied to user-provided
          financial data before computation. Inputs must follow strict formatting and
          structural conventions to ensure deterministic mapping, reproducibility and
          audit alignment. No inference, extrapolation or automated reclassification is
          performed on user entries.
        </p>
      </div>


      {/* BLOCK — REQUIRED STRUCTURE */}
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Required Input Structure
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Inputs must be provided as annual expenditure per category</li>
          <li>• Numerical values must be expressed in euros (EUR) only</li>
          <li>• No currency conversion is performed by the system</li>
          <li>• Each value corresponds to a single predefined category</li>
          <li>• No aggregation of categories is allowed at the input stage</li>
        </ul>
      </div>


      {/* BLOCK — VALIDATION RULES */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Validation Constraints
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Values must be non-negative</li>
          <li>• Values must be provided with a maximum precision of two decimals</li>
          <li>• Missing values default to zero (no estimation applied)</li>
          <li>• Incorrect formats trigger a validation error without fallback</li>
          <li>• No automated corrections (rounding is performed only at output stage)</li>
        </ul>
      </div>


      {/* BLOCK — NON-PERMITTED INPUT OPERATIONS */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Prohibited Input Transformations
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          To preserve reproducibility and eliminate ambiguity, the following operations
          are explicitly not performed during input normalisation:
        </p>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• No proportional allocation between multiple categories</li>
          <li>• No smoothing, averaging or statistical redistribution</li>
          <li>• No vendor-based categorisation (function-based only)</li>
          <li>• No inference from incomplete data</li>
          <li>• No multi-year extrapolation</li>
        </ul>
      </div>


      {/* BLOCK — WHY THESE RULES EXIST */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Rationale for Strict Input Normalisation
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          These constraints ensure that results are deterministic, auditable and invariant
          across users, institutions or repeated submissions. Input standardisation prevents
          ambiguity in category mapping, avoids inconsistent data preparation practices and 
          maintains strict alignment with spend-based principles.
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
