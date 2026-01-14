
"use client";

export default function Section5() {
  return (
    <section
      id="s5"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          5. Input Normalisation Rules
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          This section formalises the constraints applied to expenditure inputs before
          CO₂e computation. The spend-based engine requires strictly formatted, numeric
          values to ensure deterministic results, audit reproducibility and institutional
          comparability. No inference, correction, currency conversion or estimation is
          ever performed.
        </p>
      </div>


      {/* REQUIRED INPUT FORMAT */}
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Required Input Structure
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm">
          <li>• Annual expenditure per category</li>
          <li>• Numeric values only (float or integer)</li>
          <li>• Currency strictly in euros (EUR)</li>
          <li>• One value = one category, no multi-assignment</li>
          <li>• Missing categories default to zero (no extrapolation)</li>
        </ul>
      </div>


      {/* HARD VALIDATION RULES */}
      <div className="mt-16 p-10 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Hard Validation Rules (Non-Negotiable)
        </h3>

        <ul className="space-y-2 text-sm text-gray-700">
          <li>• Negative values rejected</li>
          <li>• Non-numeric characters rejected</li>
          <li>• Empty strings treated as zero</li>
          <li>• Infinity / NaN stops computation</li>
          <li>• Mixed currency formats rejected</li>
          <li>• Thousands separators ignored, not interpreted</li>
        </ul>

        <p className="mt-4 text-gray-700 text-sm leading-relaxed max-w-4xl">
          These rules guarantee that institutional users can reproduce the exact same input
          validation steps without ambiguity or hidden assumptions.
        </p>
      </div>


      {/* NO-INFERENCE POLICY */}
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          No-Inference, No-Estimation Policy
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed">
          Certif-Scope never attempts to guess, interpret or infer missing values. No
          AI, machine learning, smoothing, predictive fill or statistical estimation is
          used at any stage. If data is not provided, its contribution is zero.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li>• No supplier-based assumptions</li>
          <li>• No sector-average inflation of missing values</li>
          <li>• No interpolation or curve fitting</li>
          <li>• No historical extrapolation</li>
        </ul>
      </div>


      {/* AUDIT REPRODUCIBILITY */}
      <div className="mt-16 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Audit Reproducibility</h3>

        <ul className="text-sm text-white/90 space-y-2 leading-relaxed">
          <li>• Input validation can be repeated exactly by auditors</li>
          <li>• No hidden transformations or corrections</li>
          <li>• No implicit unit changes or conversions</li>
          <li>• Deterministic behaviour guaranteed across versions</li>
        </ul>

        <p className="mt-4 text-white/80 text-sm max-w-4xl leading-relaxed">
          These constraints ensure compliance with GHG Protocol spend-based principles
          and institutional audit requirements.
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
