"use client";

export default function Section8() {
  return (
    <section
      id="s8"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK — Premium security layout */}
      <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-40"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          8. Security & Independent Verification
        </h2>

        <p className="text-white/90 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope provides cryptographic integrity, offline verifiability and 
          audit-ready authentication mechanisms required by institutions. Each attestation 
          embeds a deterministic fingerprint allowing banks, insurers, auditors and 
          procurement authorities to validate authenticity without contacting the platform. 
          Verification relies on transparent, standard-based procedures compliant with 
          ISO 14064-1, ISO 14083, ESRS E1 and RFC 6234 (SHA-256).
        </p>
      </div>



      {/* SECURITY GRID — 3 institutional blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* CARD 1 — Cryptographic seal */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Cryptographic Integrity Seal (SHA-256)
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Each PDF includes a SHA-256 fingerprint generated from the final binary file. 
            Any modification — even 1 byte — produces a different hash, allowing immediate 
            tamper detection in audits.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• RFC 6234-compliant SHA-256 digest</li>
            <li>• Embedded fingerprint in PDF metadata (XMP)</li>
            <li>• Local recomputation by the institution</li>
          </ul>

          <p className="mt-4 text-xs text-gray-500">
            Reference: RFC 6234 – SHA-256 Secure Hash Standard
          </p>
        </div>


        {/* CARD 2 — Independent verification path */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Offline Independent Verification
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Verification requires no server, no login, and no API call. Institutions recompute 
            the fingerprint locally and compare it with the embedded value in the PDF metadata. 
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Works in offline or archived environments</li>
            <li>• Suitable for long-term record retention</li>
            <li>• Compatible with internal audit procedures</li>
          </ul>

          <p className="mt-4 text-xs text-gray-500">
            Reference: ISO 14064-1 (Transparency & verification principles)
          </p>
        </div>


        {/* CARD 3 — GDPR & secure handling */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Secure Data Handling (GDPR)
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Only the minimum required financial indicators are processed. No personal data 
            is retained. No persistent storage is used, eliminating long-term exposure risks.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• No database retention</li>
            <li>• No third-party sharing</li>
            <li>• Privacy-by-design implementation</li>
          </ul>

          <p className="mt-4 text-xs text-gray-500">
            Reference: GDPR Art.5 – Data minimisation
          </p>
        </div>

      </div>



      {/* PRACTICAL VERIFICATION BLOCK */}
      <div className="mt-20 bg-[#F8FAFC] border border-[#15B097] p-10 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          How Offline Verification Works in Practice
        </h3>

        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Institutions perform verification by recomputing the PDF hash locally using any 
          SHA-256 implementation. The resulting value is compared with the fingerprint 
          embedded inside the XMP metadata of the attestation.
        </p>

        <div className="mt-6 p-5 bg-white border rounded-lg shadow-sm">
          <p className="font-semibold text-[#0B3A63] mb-2 text-sm">
            Example — command line verification:
          </p>

          <pre className="text-xs bg-[#F8FAFC] p-4 rounded-md border overflow-x-auto text-gray-800">
shasum -a 256 attestation.pdf
          </pre>

          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            The output hash must match the SHA-256 value printed on page 2 of the PDF 
            and embedded in the XMP metadata section.  
            If values differ, the document has been altered.
          </p>
        </div>
      </div>



      {/* NO SERVER DEPENDENCY — AUDIT-PROOF */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          No Server Dependency — Audit-Proof Architecture
        </h3>

        <p className="text-white/90 max-w-4xl mt-4 leading-relaxed relative z-10">
          Verification remains possible even if Certif-Scope becomes unavailable.  
          All required validation elements are inside the PDF itself, ensuring 
          long-term institutional stability for archiving, compliance audits and 
          procurement documentation.
        </p>

        <ul className="mt-6 space-y-2 text-white/85 text-sm relative z-10">
          <li>• Document remains verifiable for decades</li>
          <li>• Suitable for internal audit repositories</li>
          <li>• Compatible with ESRS E1 audit workflows</li>
          <li>• Zero reliance on external digital infrastructure</li>
        </ul>

        <p className="mt-4 text-xs text-white/70">
          Reference: ISO 14083 – Emission reporting consistency & traceability
        </p>
      </div>



      {/* RETURN BUTTON — identical across sections */}
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
