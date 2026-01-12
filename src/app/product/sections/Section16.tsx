"use client";

export default function Section16() {
  return (
    <section
      id="s16"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK — premium, distinct design */}
      <div className="p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          16. Technical FAQ
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          This section provides precise, technical answers to the most common questions 
          asked by institutions, procurement platforms, banks, insurers and compliance teams. 
          It focuses on verifiability, stability, data handling, offline authentication,  
          platform compliance, and integration guarantees. No sales language — only clear, 
          auditable facts aligned with European expectations.
        </p>
      </div>

      {/* FAQ GRID — 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* FAQ 1 */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            How is the document verified offline?
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Each attestation includes a cryptographic hash that can be recomputed by any 
            institution to confirm the document’s integrity. The verification requires no 
            connection to Certif-Scope’s servers, ensuring long-term independence and 
            regulatory alignment with archiving requirements.
          </p>
        </div>

        {/* FAQ 2 */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            What happens if Certif-Scope becomes unavailable?
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Verification remains possible indefinitely because the attestation contains 
            all necessary verification data. The system does not rely on a live API or 
            external servers, ensuring future-proof compliance and audit stability.
          </p>
        </div>

        {/* FAQ 3 */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Are emission factors updated automatically?
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Yes. Emission factors from recognised European sources are updated following 
            a controlled versioning cycle. All updates are documented and backward-compatible 
            to avoid disruption in institutional workflows.
          </p>
        </div>

        {/* FAQ 4 */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Does the document include personal or sensitive data?
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            No. The attestation contains only operational and financial indicators required 
            for institutional evaluation. No personal data is stored or transmitted, ensuring 
            GDPR compliance by design.
          </p>
        </div>

        {/* FAQ 5 */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Does the document comply with European procurement formats?
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Yes. The structure follows a stable institutional layout based on common 
            procurement and compliance requirements used by public and private 
            organizations across the EU.
          </p>
        </div>

        {/* FAQ 6 */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Can the attestation be integrated into automated platforms?
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Yes. The PDF contains structured metadata fields that allow automated ingestion 
            by procurement platforms, risk scoring engines and document validation systems.
          </p>
        </div>
      </div>

      {/* RETENTION & LONG-TERM ACCESS BLOCK */}
      <div className="mt-20 p-12 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Long-Term Availability & Stability Guarantees
        </h3>

        <p className="text-white/90 mt-4 max-w-5xl leading-relaxed relative z-10">
          The document remains verifiable years after issuance, even in archived or offline 
          conditions. Institutions can recompute the integrity checksum without relying on 
          external infrastructure, ensuring continuity even during organizational changes, 
          system migrations or regulatory audits.
        </p>
      </div>

      {/* RETURN BUTTON — standardized across all sections */}
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
