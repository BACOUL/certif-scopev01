"use client";

export default function Section9() {
  return (
    <section
      id="s9"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — institutional, non redundant */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 rounded-2xl shadow-lg relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          9. Internal Controls & Calculation Guards
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          This section describes the internal safeguards ensuring that the calculation
          process remains deterministic, valid, and structurally coherent. Controls apply
          before, during, and after computation to prevent divergent behaviour, structural
          inconsistencies, or unverified numerical propagation.
        </p>
      </div>



      {/* BLOCK — Input Validation Controls */}
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Input-Level Controls
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Non-numeric values are rejected before processing.</li>
          <li>• Negative values are not permitted and trigger validation errors.</li>
          <li>• Unlisted categories are not mapped or approximated.</li>
          <li>• Empty fields do not trigger inference or substitution.</li>
          <li>• All entries are validated against predefined category identifiers.</li>
        </ul>
      </div>



      {/* BLOCK — In-Process Guards */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          In-Process Guards
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Guards applied during computation ensure structural stability and maintain
          deterministic execution:
        </p>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Each category is processed in isolation with no cross-propagation.</li>
          <li>• The emission factor version is locked before calculation begins.</li>
          <li>• No iterative recalculation or optimization occurs.</li>
          <li>• No dynamic weighting or recalibration is performed.</li>
          <li>• Intermediate results are not rounded until final output.</li>
        </ul>
      </div>



      {/* BLOCK — Post-Processing Validation */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Post-Processing Validation
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Total emissions are recomputed once to validate consistency.</li>
          <li>• Sum of category-level outputs must equal the final total.</li>
          <li>• Any inconsistency leads to computation rejection before export.</li>
          <li>• Version identifiers for factors and logic are embedded in the output.</li>
        </ul>
      </div>



      {/* BLOCK — Reproducibility Logic */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Reproducibility Safeguards
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          The computation uses no external calls, no real-time queries, and no dynamic
          adjustments. This ensures that the same inputs and factor version yield the
          same output, independently of platform state or availability. All required
          metadata is encoded directly into the attestation file.
        </p>
      </div>



      {/* BLOCK — Forbidden Behaviours */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Forbidden Behaviours
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          To guarantee institutional stability and avoid silent divergence, certain
          behaviours are explicitly prohibited:
        </p>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Automatic update of emission factors during computation</li>
          <li>• Estimation, forecasting, or extrapolation algorithms</li>
          <li>• Category substitution or extrapolated mapping</li>
          <li>• Probabilistic or optimisation models</li>
          <li>• Data enrichment using external or real-time sources</li>
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
