"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* TITLE — uniform format across all sections */}
      <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-10">
        2 — Key Benefits Summary
      </h2>

      {/* PREMIUM GRID — 4 HIGHLIGHTED BENEFITS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Card 1 */}
        <div className="p-10 bg-white rounded-2xl shadow-lg border border-[#0B3A63]/15">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            Standardized Across Europe
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mt-3">
            Certif-Scope delivers a harmonized structure designed for EU-wide acceptance in
            procurement, banking and compliance evaluation workflows. Institutions receive
            the same layout every time, simplifying review and comparison.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-10 bg-[#F8FAFC] rounded-2xl shadow-lg border border-[#15B097]/30">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            Instant Generation
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mt-3">
            SMEs can produce a complete attestation in under 30 seconds. This accelerates
            onboarding, reduces administrative friction and eliminates the need for
            sustainability consultants or lengthy data collection cycles.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-10 bg-white rounded-2xl shadow-lg border border-[#0B3A63]/15">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            Independently Verifiable
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mt-3">
            Each attestation includes a unique verification reference and integrity seal.
            Third parties can authenticate the document securely and offline — no server 
            dependency or platform login required.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-10 bg-[#F8FAFC] rounded-2xl shadow-lg border border-[#15B097]/30">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            Suitable for All Sectors
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mt-3">
            Whether retail, construction, transport, digital services or manufacturing,
            Certif-Scope adapts to any SME context by providing consistent output and
            eliminating ambiguity in documentation format.
          </p>
        </div>

      </div>

      {/* DIFFERENT LAYOUT — HORIZONTAL VALUE STRIP */}
      <div className="mt-20 p-10 rounded-xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#15B097]/30 to-transparent"></div>

        <h3 className="text-2xl font-semibold mb-4 relative z-10">
          Designed for Real Operational Use
        </h3>
        <p className="text-white/90 max-w-5xl leading-relaxed relative z-10">
          Certif-Scope was built to remove barriers that institutions face when reviewing 
          CO₂ documentation. Clear formatting, structured fields and verifiable integrity 
          ensure a smoother review process for procurement teams, banks, insurers and 
          compliance departments.
        </p>
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
