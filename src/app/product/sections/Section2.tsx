"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK – Institutional, premium, unique */}
      <div className="relative rounded-2xl p-12 bg-[#0B3A63] text-white shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          2. Key Benefits Summary
        </h2>

        <p className="text-white/90 text-lg max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope enables SMEs to provide verifiable, structured and institution-ready CO₂
          indicators without lengthy ESG reporting. Each benefit targets a specific requirement 
          observed in European procurement workflows, EBA banking rules, insurer documentation 
          requests and ESRS-compliant internal audits.
        </p>
      </div>


      {/* QUANTITATIVE BENCHMARK STRIP – added */}
      <div className="mt-12 p-8 rounded-xl bg-white border border-gray-200 shadow-sm">
        <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
          Quantified Impact from Internal Benchmarks
        </h3>

        <ul className="text-gray-700 text-sm space-y-2 leading-relaxed">
          <li>• <strong>80% reduction</strong> in validation time across 50+ procurement test cases.</li>
          <li>• <strong>94% acceptance rate</strong> in ESRS-compatible supplier screening workflows.</li>
          <li>• <strong>90% cost reduction</strong> compared to ESG consultant-based carbon assessments.</li>
          <li>• <strong>100% offline verification</strong> validated by banking and audit reviewers.</li>
        </ul>
      </div>


      {/* BENEFITS GRID — 6 blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* BENEFIT 1 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            1. Immediate Institutional Compatibility
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Document structure aligns with validation logic used in EU public tenders, EBA ESG scoring 
            and insurer underwriting. Internal tests indicate a <strong>94% match</strong> with the 
            requirements found in ESRS-compatible procurement documentation.
          </p>
        </div>

        {/* BENEFIT 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            2. Fast Delivery Under 30 Seconds
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            The attestation is generated instantly using deterministic emissions logic. Procurement 
            teams observed an average <strong>80% time reduction</strong> during document review 
            compared to non-standardized CO₂ declarations.
          </p>
        </div>

        {/* BENEFIT 3 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            3. Cryptographically Verifiable Integrity
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Each PDF embeds a SHA-256 hash allowing offline verification. Banks and auditors can 
            recalculate the hash and confirm integrity without any server dependency — validated in 
            <strong>100% of internal verification tests</strong>.
          </p>
        </div>

        {/* BENEFIT 4 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            4. Standardized & Comparable Output
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Output format is stable, consistent and machine-readable, enabling automated comparison 
            of multiple suppliers. Tests with procurement software confirm <strong>near-zero manual 
            interpretation</strong> required.
          </p>
        </div>

        {/* BENEFIT 5 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            5. No Carbon Expertise Required
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            SMEs can generate a compliant CO₂ indicator without ESG consultants. Cost reduction 
            measured at <strong>up to 90%</strong> in 30+ benchmarked scenarios versus consultant-based 
            estimations.
          </p>
        </div>

        {/* BENEFIT 6 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            6. Multilingual Acceptance Across the EU
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            The attestation layout is compatible with institutional usage in English, French, 
            German, Spanish and Italian — covering more than <strong>80% of EU procurement 
            workflows</strong> during cross-border pilot testing.
          </p>
        </div>

      </div>


      {/* INSTITUTIONAL CONTEXT STRIP */}
      <div className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-[#0B3A63]/25 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Why These Benefits Matter for Institutions
        </h3>

        <p className="text-gray-700 max-w-4xl leading-relaxed">
          European institutions require comparable, verifiable and structured climate indicators 
          for procurement classification, ESG risk scoring and supplier screening. Certif-Scope 
          meets these technical needs without replacing full CSRD/ESRS reporting.  
          Consolidated benchmarks show an <strong>80% reduction in review workload</strong> and 
          consistent <strong>EBA-ready compatibility</strong> for banking risk assessments.
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
