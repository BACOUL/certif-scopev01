"use client";

export default function Section7() {
  return (
    <section
      id="s7"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* SECTION TITLE — consistent format */}
      <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-12">
        7 — Value Proposition
      </h2>

      {/* UNIQUE DESIGN: Two-column institutional grid with visual hierarchy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT COLUMN — key institutional benefits */}
        <div className="space-y-10">

          {/* CARD 1 */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-10 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
              Instant Institutional Acceptance
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Certif-Scope produces a fully standardized CO₂ attestation matching the
              expectations of European procurement teams, banking analysts, insurance
              underwriters and public funding evaluators. The format is clear,
              structured and directly usable in onboarding workflows.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-[#15B097]/30 rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
              Zero Consultant Dependency
            </h3>
            <p className="text-gray-700 leading-relaxed">
              No ESG consultants, no multi-week audits. SMEs can generate their attestation
              autonomously in under 30 seconds, reducing cost, delays and operational friction.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-10 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
              Transparent & Reproducible Output
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Every document follows a deterministic structure, ensuring transparency
              and reproducibility. This makes institutional review faster, easier and
              fully aligned with European data expectations.
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN — vertical benefit panel with visual emphasis */}
        <div className="bg-[#0B3A63] text-white rounded-2xl p-12 shadow-lg relative overflow-hidden">

          {/* Accent gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent opacity-40"></div>

          <div className="relative z-10 space-y-8">

            <h3 className="text-3xl font-bold">
              Why It Delivers More Value Than Traditional Methods
            </h3>

            <p className="text-white/90 leading-relaxed max-w-xl">
              Traditional approaches rely on manual audits, fragmented data formats,
              consultant interpretation and subjective reporting styles. Certif-Scope
              replaces all of this with a clear, automated and standardized structure
              compatible across industries and countries.
            </p>

            <ul className="space-y-4 text-white/90 text-lg">
              <li className="flex gap-3">
                <span className="w-3 h-3 rounded-full bg-[#15B097] mt-2"></span>
                Eliminates formatting inconsistencies
              </li>
              <li className="flex gap-3">
                <span className="w-3 h-3 rounded-full bg-[#15B097] mt-2"></span>
                Reduces administrative workload
              </li>
              <li className="flex gap-3">
                <span className="w-3 h-3 rounded-full bg-[#15B097] mt-2"></span>
                Improves institutional trust & clarity
              </li>
              <li className="flex gap-3">
                <span className="w-3 h-3 rounded-full bg-[#15B097] mt-2"></span>
                Fully digital, reproducible and audit-friendly
              </li>
            </ul>

          </div>

        </div>
      </div>

      {/* HIGHLIGHT STRIP */}
      <div className="mt-20 p-10 bg-[#15B097]/10 border border-[#15B097]/40 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Proven Efficiency for Real Operational Workflows
        </h3>
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Certif-Scope reduces friction, accelerates procurement onboarding, supports 
          banking risk analysis, simplifies insurance eligibility processes and ensures 
          uniform documentation for public funding applications.  
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
