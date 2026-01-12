"use client";

export default function Section7() {
  return (
    <section
      id="s7"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK — unique design */}
      <div className="bg-[#F8FAFC] p-12 rounded-2xl shadow-sm border border-gray-200">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] leading-tight">
          Section 7 — Verification & Integrity Assurance
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          Certif-Scope ensures that each generated attestation can be independently verified 
          without relying on platform availability. This aligns with institutional expectations 
          for document integrity, authenticity, and long-term accessibility across European 
          procurement, banking and regulatory workflows.
        </p>
      </div>

      {/* 3-COLUMN GRID — unique layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* CARD 1 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            1. Independent Verification Path
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Each attestation includes a unique verification identifier and cryptographic hash. 
            Institutions can validate authenticity without interacting with Certif-Scope systems, 
            ensuring reliability during audits or platform downtimes.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-8 bg-[#0B3A63] text-white rounded-xl border border-[#0B3A63] shadow-md">
          <h3 className="text-xl font-semibold mb-3">
            2. Long-Term Document Integrity
          </h3>
          <p className="text-white/90 text-sm leading-relaxed">
            The verification system is designed to remain functional even if the issuer ceases 
            operations. This ensures long-term usability of generated attestations across 
            procurement cycles, audits and compliance checks.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            3. Chain-of-Integrity Controls
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The cryptographic signature ensures that the attestation has not been modified. 
            Any alteration breaks the verification match, allowing instant detection of 
            manipulations or tampering attempts.
          </p>
        </div>

      </div>

      {/* FEATURE STRIP — strong institutional tone */}
      <div className="mt-20 bg-[#15B097]/10 border border-[#15B097]/40 p-10 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Institutional Reliability Standards
        </h3>
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Verification must remain possible at all times, regardless of platform status or 
          business continuity events. Certif-Scope follows a no-dependency principle similar to 
          archival and notarization systems, ensuring documents can be trusted long after 
          issuance. This is critical for grant programs, bank lending procedures and 
          cross-border procurement where verifiable, tamper-proof records are mandatory.
        </p>
      </div>

      {/* INLINE FEATURE LIST — unique style for Section 7 */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h4 className="font-semibold text-[#0B3A63]">Offline Check Capability</h4>
          <p className="text-gray-700 text-sm mt-2">
            Institutions can confirm authenticity without internet connectivity or platform access.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h4 className="font-semibold text-[#0B3A63]">Tamper-Resistant Structure</h4>
          <p className="text-gray-700 text-sm mt-2">
            Any modification to the document invalidates the cryptographic signature instantly.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h4 className="font-semibold text-[#0B3A63]">Long-Term Accessibility</h4>
          <p className="text-gray-700 text-sm mt-2">
            Verification remains possible even if Certif-Scope services are no longer active.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h4 className="font-semibold text-[#0B3A63]">Third-Party Audit Friendly</h4>
          <p className="text-gray-700 text-sm mt-2">
            Institutions can validate attestations independently during risk analysis and audits.
          </p>
        </div>

      </div>

      {/* RETURN BUTTON — identical across all sections */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] 
                     text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
            }
