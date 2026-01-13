"use client";

export default function Section11() {
  return (
    <section
      id="s11"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Institutional */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 rounded-2xl shadow-lg relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          11. Dataset Update Cycle & Institutional Validation
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          This section defines how dataset updates are scheduled, validated and
          released. It ensures traceability, reproducibility and compatibility with
          institutional audit workflows. No update is applied without structured
          verification and explicit version tagging.
        </p>
      </div>



      {/* BLOCK — Update Frequency */}
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Update Frequency
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Annual integration of ADEME / DEFRA public datasets.</li>
          <li>• Mid-cycle refresh only if an official correction is published.</li>
          <li>• No automatic ingestion from real-time or evolving sources.</li>
          <li>• Release calendar publicly documented for institutions.</li>
        </ul>
      </div>



      {/* BLOCK — Validation Pipeline */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Validation Pipeline
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Each dataset revision follows a multi-step validation process designed to
          guarantee deterministic output and institutional reliability:
        </p>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Consistency review of all emission categories.</li>
          <li>• Comparison with previous dataset to detect anomalies.</li>
          <li>• Automated outlier rejection algorithm.</li>
          <li>• Integrity hashing of the final dataset version.</li>
        </ul>
      </div>



      {/* BLOCK — Institutional Compatibility Requirements */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Institutional Compatibility Requirements
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Stability compatible with procurement and banking ingestion workflows.</li>
          <li>• No formatting changes without MINOR or MAJOR version increment.</li>
          <li>• All datasets archived and recoverable for retrospective audits.</li>
          <li>• Institutions can independently verify dataset integrity via hash.</li>
        </ul>
      </div>



      {/* BLOCK — Publication Policy */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Publication Policy
        </h3>

        <ul className="mt-4 space-y-2 text-white/90 text-sm leading-relaxed relative z-10">
          <li>• Each new dataset is published with a semantic version tag.</li>
          <li>• Change summaries are documented in a public changelog.</li>
          <li>• Previous versions remain permanently accessible.</li>
          <li>• No suppression or overwriting of earlier datasets.</li>
        </ul>
      </div>



      {/* BLOCK — Prohibited Update Scenarios */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Explicitly Prohibited Update Scenarios
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Silent updates without public version increment.</li>
          <li>• Replacing historical values with new factors retroactively.</li>
          <li>• Dataset blending (averaging sources) without governance approval.</li>
          <li>• Real-time streaming of fluctuating data (volatility prohibited).</li>
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
