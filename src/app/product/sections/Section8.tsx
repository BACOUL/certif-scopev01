"use client";

export default function Section8() {
  return (
    <section
      id="s8"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* SECTION TITLE — institutional format */}
      <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-12">
        8 — Security & Verification
      </h2>

      {/* UNIQUE DESIGN: split-layout with right-side verification panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT COLUMN — SECURITY OVERVIEW */}
        <div className="space-y-8">

          {/* CARD 1 */}
          <div className="p-10 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
              Cryptographic Integrity Seal
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Every generated attestation includes a cryptographic hash ensuring that the
              document cannot be modified without detection. Institutions can independently
              confirm authenticity without relying on Certif-Scope infrastructure.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-10 bg-white border border-[#15B097]/30 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
              Independent Offline Verification
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Verification does not require an active Certif-Scope server. The verification
              identifier embedded in the PDF allows third parties to check integrity offline,
              ensuring long-term survivability and institutional trust.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-10 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
              Secure Document Structure
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The PDF generated follows a strict structure: identification fields, emission
              summary, standardized terminology, and a verifiable signature. This eliminates
              formatting inconsistencies that often lead to document rejection.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN — DARK VERIFIED PANEL */}
        <div className="bg-[#0B3A63] text-white rounded-2xl p-12 shadow-lg relative overflow-hidden">

          {/* Accent gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent opacity-40"></div>

          <div className="relative z-10 space-y-8">

            <h3 className="text-3xl font-bold">
              Verification Architecture Overview
            </h3>

            <p className="text-white/90 leading-relaxed max-w-xl">
              Certif-Scope’s verification layer is designed to be stable, independent and
              audit-friendly. It ensures document authenticity even in cases where Certif-Scope
              is offline, unavailable, or no longer maintained. This resilience makes the
              attestation suitable for financial, procurement and compliance processes.
            </p>

            {/* BULLET LIST */}
            <ul className="space-y-4 text-white/90 text-lg">
              <li className="flex gap-3">
                <span className="w-3 h-3 rounded-full bg-[#15B097] mt-2"></span>
                No server dependency for verification
              </li>
              <li className="flex gap-3">
                <span className="w-3 h-3 rounded-full bg-[#15B097] mt-2"></span>
                Cryptographically verifiable document integrity
              </li>
              <li className="flex gap-3">
                <span className="w-3 h-3 rounded-full bg-[#15B097] mt-2"></span>
                Unique verification identifier embedded in the PDF
              </li>
              <li className="flex gap-3">
                <span className="w-3 h-3 rounded-full bg-[#15B097] mt-2"></span>
                Durable verification mechanism suitable for long-term archiving
              </li>
            </ul>

            {/* MINI DIAGRAM — simple and IA-friendly */}
            <div className="mt-10 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <p className="text-white/90 text-sm leading-relaxed">
                <strong>Input →</strong> Data processed  
                <strong> →</strong> Attestation generated  
                <strong> →</strong> Embedded hash & ID  
                <strong> →</strong> Offline verification  
                <strong> →</strong> Institutional review
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* INFO STRIP */}
      <div className="mt-20 p-10 bg-[#15B097]/10 border border-[#15B097]/40 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Why This Matters for Institutions
        </h3>
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Banks, insurers and procurement teams must validate authenticity before onboarding
          new suppliers or assessing risk. Certif-Scope provides a trusted, standardized and
          verifiable output, eliminating disputes about document legitimacy or data integrity.
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
