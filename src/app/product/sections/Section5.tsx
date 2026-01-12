"use client";

export default function Section5() {
  return (
    <section
      id="s5"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER – distinct institutional design */}
      <div className="relative p-12 bg-[#0B3A63] text-white rounded-2xl shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent opacity-30 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          5. Key Benefits for SMEs & Institutions
        </h2>

        <p className="text-white/90 text-lg max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope offers measurable advantages for both SMEs generating the attestation
          and institutions reviewing it. The system reduces friction, eliminates delays,
          supports verification workflows and aligns with European procurement expectations.
        </p>
      </div>

      {/* 4-BENEFIT GRID – unique layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* BENEFIT 1 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Immediate Institutional Acceptance
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Procurers, banks and insurers instantly recognize the standardized structure, 
            eliminating ambiguity and reducing back-and-forth validation requests.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-1">
            <li>• Clear, uniform terminology</li>
            <li>• Multilingual structure (EN/FR/DE/ES/IT)</li>
            <li>• No formatting inconsistencies</li>
          </ul>
        </div>

        {/* BENEFIT 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Eliminates Consultant Costs
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            No need for ESG consultants, analysts or multi-week audits. Companies obtain 
            a compliant attestation instantly at a flat, predictable cost.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-1">
            <li>• Zero recurring fees</li>
            <li>• Reduces overhead for SMEs</li>
            <li>• Avoids audit delays</li>
          </ul>
        </div>

        {/* BENEFIT 3 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Supports Due Diligence & Risk Scoring
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Institutions can integrate the attestation into existing evaluation workflows, 
            providing traceability without additional administrative load.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-1">
            <li>• Clear supply-chain classification</li>
            <li>• Structured environmental indicators</li>
            <li>• Consistent documentation baseline</li>
          </ul>
        </div>

        {/* BENEFIT 4 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Verifiable Without External Systems
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Each PDF includes a cryptographic integrity signature and a verification ID that 
            third-parties can check independently without relying on Certif-Scope servers.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-1">
            <li>• Offline validation path</li>
            <li>• No vendor lock-in</li>
            <li>• Auditor-friendly structure</li>
          </ul>
        </div>

      </div>

      {/* SUMMARY STRIP – unique color pattern */}
      <div className="mt-20 p-10 bg-[#F8FAFC] rounded-xl border border-[#0B3A63]/20 shadow-md">
        <h4 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Direct Impact on Operational Efficiency
        </h4>
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          By standardizing environmental indicators and automating verification logic, 
          Certif-Scope drastically reduces administrative overhead for both SMEs and 
          institution-side reviewers. The result is a smoother onboarding process, 
          fewer document rejections and immediate compatibility across Europe.
        </p>
      </div>

      {/* RETURN BUTTON — identical across all sections */}
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
