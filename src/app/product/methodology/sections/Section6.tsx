"use client";

export default function Section6() {
  return (
    <section
      id="s6"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Unique institutional layout */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          6. Transformation Pipeline
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          This section describes the deterministic and linear processing sequence applied to 
          validated inputs. No inference, statistical modelling or automated redistribution 
          occurs. The pipeline ensures that each step is transparent, reproducible and 
          strictly aligned with spend-based methodology requirements.
        </p>
      </div>


      {/* SCHEMA BLOCK — Input → Validation → Mapping → EF Assignment → Output */}
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Process Flow (Linear, Deterministic)
        </h3>

        <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
          <li>
            <strong>1. Input ingestion:</strong> financial amounts are captured for each category.
          </li>
          <li>
            <strong>2. Structural validation:</strong> format, precision and category compliance 
            checks are applied.
          </li>
          <li>
            <strong>3. Category mapping:</strong> validated values are mapped to a fixed 
            internal classification table.
          </li>
          <li>
            <strong>4. Emission factor assignment:</strong> each category is linked to a single 
            emission-factor version.
          </li>
          <li>
            <strong>5. Conversion:</strong> category expenditure is multiplied by its emission factor.
          </li>
          <li>
            <strong>6. Aggregation:</strong> results are combined into total CO₂ equivalents.
          </li>
          <li>
            <strong>7. Output formatting:</strong> values are placed into a structured, 
            stable PDF layout with metadata.
          </li>
        </ul>
      </div>


      {/* BLOCK — EXPLANATION OF EACH STEP IN DETAIL */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Step Descriptions
        </h3>

        <ul className="space-y-5 text-gray-700 text-sm leading-relaxed">
          <li>
            <strong>Input ingestion:</strong> data is accepted only if it matches predefined 
            structural rules. No automatic merging or categorisation occurs.
          </li>
          <li>
            <strong>Structural validation:</strong> ensures numerical integrity (non-negative, 
            correct decimal formatting, no missing categories).
          </li>
          <li>
            <strong>Category mapping:</strong> values are linked to fixed internal categories. 
            No cross-mapping or data enrichment is performed.
          </li>
          <li>
            <strong>Emission factor assignment:</strong> each internal category uses a single 
            defined EF from a documented dataset version.
          </li>
          <li>
            <strong>Conversion:</strong> deterministic multiplication: 
            <code>emissions = spending × EF</code>.
          </li>
          <li>
            <strong>Aggregation:</strong> category results summed using transparent arithmetic; 
            no weighting or redistribution.
          </li>
          <li>
            <strong>Output formatting:</strong> results placed in predetermined zones with no 
            dynamic layout changes.
          </li>
        </ul>
      </div>


      {/* BLOCK — NON-PERMITTED TRANSFORMATIONS */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Explicitly Forbidden Transformations
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          These safeguards ensure that the pipeline cannot introduce interpretation steps that 
          would reduce reproducibility or violate institutional expectations:
        </p>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• No predictive modelling or forecasting</li>
          <li>• No missing-data interpolation</li>
          <li>• No vendor-based emission estimation</li>
          <li>• No currency conversion</li>
          <li>• No multi-year scaling</li>
          <li>• No machine-learning adjustments</li>
          <li>• No reclassification or automatic redistribution</li>
        </ul>
      </div>


      {/* BLOCK — RATIONALE */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Rationale for the Transformation Pipeline
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          A deterministic, linear pipeline ensures that every attestation can be reproduced 
          step-by-step using only the inputs, category definitions and emission-factor versions. 
          This approach aligns with spend-based methodology constraints and avoids ambiguity 
          during institutional review or audit replication.
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
