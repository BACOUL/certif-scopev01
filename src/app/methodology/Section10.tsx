"use client";

export default function Section10() {
  return (
    <section
      id="s10"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — institutional premium */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 rounded-2xl shadow-lg relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          10. Emission Factor Versioning & Update Model
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          This section explains how emission factors are versioned, updated, stabilised
          and validated. Certif-Scope maintains deterministic behaviour: changes in factors
          never affect previously generated attestations and never apply silently.
        </p>
      </div>



      {/* BLOCK — Factor Version Structure */}
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Version Structure
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Versioning uses a fixed hierarchy: MAJOR.MINOR.PATCH.</li>
          <li>• MAJOR changes occur only when methodology boundaries evolve.</li>
          <li>• MINOR increments reflect updated emission factor datasets.</li>
          <li>• PATCH increments cover micro-corrections or clarifications.</li>
        </ul>
      </div>



      {/* BLOCK — Update Triggers */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Update Triggers
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Updates are introduced only under controlled, transparent conditions:
        </p>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Release of new ADEME or DEFRA average intensity values.</li>
          <li>• Revision of EEIO economic modelling datasets.</li>
          <li>• Regulatory alignment requirements (ESRS, GHG Protocol).</li>
          <li>• Correction of documented inconsistencies.</li>
        </ul>
      </div>



      {/* BLOCK — Backward Compatibility Guarantees */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Backward Compatibility Guarantee
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Previously generated attestations remain valid indefinitely.</li>
          <li>• No recalculation is applied retroactively.</li>
          <li>• Older versions remain verifiable with archived metadata.</li>
          <li>• Attestations explicitly embed the factor version used.</li>
        </ul>
      </div>



      {/* BLOCK — Factor Integrity Controls */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Integrity Controls Applied to Factor Updates
        </h3>

        <ul className="mt-4 space-y-2 text-white/90 text-sm leading-relaxed relative z-10">
          <li>• Consistency validation across all categories.</li>
          <li>• Rejection of outlier values outside acceptable thresholds.</li>
          <li>• Hash-based fingerprinting for dataset integrity.</li>
          <li>• Mandatory cross-comparison with previous dataset.</li>
        </ul>
      </div>



      {/* BLOCK — No Real-Time / No Dynamic Substitutions */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          No Real-Time or Dynamic Substitution
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed">
          Updates are never pulled dynamically, never fetched in real time, and never
          substituted silently. Factors are always local, static and fully version-locked
          before each calculation run.
        </p>
      </div>



      {/* BLOCK — Prohibited Behaviours */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Explicitly Prohibited Behaviours
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Automatic ingestion of external datasets.</li>
          <li>• Live updates without explicit version increment.</li>
          <li>• Category remapping or extrapolation from missing data.</li>
          <li>• Dynamic inflation/deflation of factors based on macro trends.</li>
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
