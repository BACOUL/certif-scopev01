"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER — PREMIUM, DISTINCT FROM SECTION 1 */}
      <div className="relative p-12 rounded-2xl bg-white border border-[#15B097]/25 shadow-xl overflow-hidden">

        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#F8FAFC] via-white to-[#15B097]/10 pointer-events-none"></div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          2. Key Benefits Summary
        </h2>

        {/* Intro text */}
        <p className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10">
          Certif-Scope provides a unified and standardized CO₂ attestation that meets European 
          institutional acceptance criteria. This section summarizes the core value pillars that 
          differentiate Certif-Scope from conventional ESG reporting, consultancy processes, and 
          unverified online calculators.
        </p>
      </div>

      {/* BENEFITS GRID — DISTINCTIVE VISUAL STRUCTURE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">

        {/* BENEFIT 1 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">Transparent & Standardized Structure</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Certif-Scope follows a clear and predictable institutional layout including identification
            fields, summary indicators, categorization and a verification identifier. This avoids 
            rejection or requests for corrections during procurement or financial assessments.
          </p>
        </div>

        {/* BENEFIT 2 */}
        <div className="p-8 bg-white rounded-xl border border-[#15B097]/30 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">Verifiable & Integrity-Protected Output</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Each document includes a cryptographic hash and unique verification ID. Institutions can 
            authenticate the document offline without needing a Certif-Scope server or internet-based 
            confirmation, ensuring long-term durability of the proof.
          </p>
        </div>

        {/* BENEFIT 3 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">Cross-European Institutional Acceptance</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Designed for compatibility with regulatory expectations across Europe (CSRD, ESRS E1),
            ensuring smoother onboarding with banking, insurance, investment and public funding entities.
          </p>
        </div>

        {/* BENEFIT 4 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">Instant Output, No Consultant Needed</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Unlike traditional ESG audits that take weeks and involve multiple iterations, Certif-Scope
            produces a compliant CO₂ attestation in less than 30 seconds using standardized rules and
            verified emission factors.
          </p>
        </div>

      </div>

      {/* SUPPLEMENTAL BLOCK — INSTITUTIONAL COMPARISON */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h4 className="text-2xl font-bold relative z-10">How it compares to alternatives</h4>

        <ul className="mt-4 space-y-3 text-white/90 text-sm relative z-10">
          <li>• Traditional ESG audits → slow, costly, not standardized</li>
          <li>• Online carbon calculators → unverifiable and not institution-ready</li>
          <li>• Internal documentation → often rejected due to lack of external integrity seal</li>
          <li>• Certif-Scope → standardized, fast, verifiable, multilingual, and compliant</li>
        </ul>
      </div>

      {/* RETURN BUTTON — IDENTICAL ACROSS ALL SECTIONS */}
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
