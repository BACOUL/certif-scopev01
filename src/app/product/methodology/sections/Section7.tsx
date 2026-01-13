"use client";

export default function Section7() {
  return (
    <section
      id="s7"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Unique institutional block */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 rounded-2xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          7. Emission-Factor Assignment Logic
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          This section defines the deterministic mechanism used to associate each
          financial category with a single emission factor from a versioned dataset.
          No inference, estimation or contextual substitution occurs. The assignment
          process follows strict internal mapping rules to ensure reproducibility.
        </p>
      </div>


      {/* BLOCK — Mapping Principles */}
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Mapping Principles
        </h3>

        <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
          <li>
            • Each economic category corresponds to exactly one internal classification entry.
          </li>
          <li>
            • Each internal classification entry corresponds to exactly one emission-factor value.
          </li>
          <li>
            • Each emission-factor value is tied to one dataset version (immutable reference).
          </li>
          <li>
            • No dynamic re-mapping, fallback category or automatic redistribution is permitted.
          </li>
        </ul>
      </div>


      {/* BLOCK — Mapping Process */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Assignment Process (Linear and Deterministic)
        </h3>

        <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
          <li>
            <strong>1. Category identification:</strong> input category is matched to a fixed
            row in the internal classification table.
          </li>
          <li>
            <strong>2. Version reference retrieval:</strong> the system identifies which
            dataset version is active for that category.
          </li>
          <li>
            <strong>3. Emission-factor extraction:</strong> the EF is retrieved from
            a static, version-locked record.
          </li>
          <li>
            <strong>4. Validation:</strong> the EF is checked for existence and numerical
            validity; missing entries are not inferred or substituted.
          </li>
          <li>
            <strong>5. Binding:</strong> the EF is attached to the category as an immutable
            reference for the calculation step.
          </li>
        </ul>
      </div>


      {/* BLOCK — Version Locking Rules */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Version-Locking Rules
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Version-locking ensures that a given attestation can be reproduced indefinitely,
          even if newer emission-factor updates are released.
        </p>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• The EF version is fixed at the moment of calculation.</li>
          <li>• Updates to datasets never modify past attestations.</li>
          <li>• New EF versions trigger new version IDs, not retroactive changes.</li>
          <li>• Legacy versions always remain valid and referenceable.</li>
        </ul>
      </div>


      {/* BLOCK — Forbidden Assignment Behaviors */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Explicitly Forbidden Behaviours
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• No estimation based on supplier identity</li>
          <li>• No weighted averages or blended EF</li>
          <li>• No proportional adjustments</li>
          <li>• No predictive estimation or modelling</li>
          <li>• No substitution when category is incomplete</li>
          <li>• No merging of adjacent categories</li>
          <li>• No cross-category inference</li>
        </ul>
      </div>


      {/* BLOCK — Reason for Strict Assignment */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Rationale for This Assignment Logic
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          A strict one-to-one mapping between categories and emission factors eliminates 
          ambiguity during verification and prevents analytical drift over time. Institutions 
          can re-create results consistently, ensuring regulatory alignment and audit clarity 
          without requiring access to internal systems.
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
