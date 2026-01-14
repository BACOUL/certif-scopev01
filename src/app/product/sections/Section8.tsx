"use client";

export default function Section8() {
  return (
    <section
      id="s8"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-40"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          8. Security & Independent Verification
        </h2>

        <p className="text-white/90 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope integrates deterministic cryptographic fingerprinting, offline verification
          and long-term archival compatibility. Each attestation includes a SHA-256 integrity hash
          embedded both in the document content and in the XMP metadata block. This ensures that
          any alteration — even a single byte — results in a different hash, enabling reliable
          tamper detection without relying on external servers.
        </p>

        <div className="mt-6 text-sm text-white/80 underline space-y-1 relative z-10">
          <a href="https://www.loc.gov/preservation/digital/formats/fdd/" target="_blank">
            PDF/A archival principles
          </a><br />
          <a href="https://www.adobe.com/content/dam/acom/en/devnet/xmp/pdfs/XMPSpecificationPart1.pdf" target="_blank">
            XMP Metadata Specification
          </a><br />
          <a href="https://www.rfc-editor.org/rfc/rfc6234" target="_blank">
            RFC 6234 — SHA-256
          </a>
        </div>
      </div>


      {/* 3-Column Security Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* BLOCK 1 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Cryptographic Integrity Seal (SHA-256)
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            A deterministic SHA-256 digest is computed from the full document binary. Any modification 
            produces a different hash, enabling instant detection of tampering.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• RFC 6234-compliant computation</li>
            <li>• Embedded in XMP metadata</li>
            <li>• Breaks instantly if modified</li>
            <li>• No server required for verification</li>
          </ul>
        </div>


        {/* BLOCK 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Independent Offline Verification
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Institutions verify authenticity by recomputing the SHA-256 hash locally and comparing
            it to the value stored inside the PDF metadata. The verification process does not depend
            on Certif-Scope’s servers and works in restricted audit environments.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Works in offline audit networks</li>
            <li>• Suitable for multi-year archival retention</li>
            <li>• No external lookup or API call required</li>
          </ul>
        </div>


        {/* BLOCK 3 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Data Minimisation (GDPR)
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Processing is strictly limited to numerical expenditure values. No personal data,
            identifiers or persistent information are collected or stored. The system is stateless
            and meets GDPR Article 5 data minimisation principles.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• No database retention</li>
            <li>• No user tracking</li>
            <li>• No personal data processed</li>
          </ul>
        </div>

      </div>


      {/* HASH RECALCULATION GUIDE */}
      <div className="mt-20 bg-[#F8FAFC] border border-[#15B097] p-10 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          How to Recalculate the Hash
        </h3>

        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Auditors, banks and public agencies can verify authenticity using standard cryptographic tools.
          The resulting digest must match the hash embedded in the document metadata. Any mismatch
          indicates alteration.
        </p>

        <div className="space-y-6 mt-6 text-sm text-gray-700">

          <div>
            <p className="font-semibold text-[#0B3A63] mb-2">macOS / Linux:</p>
            <pre className="bg-white p-4 rounded-md border border-gray-200 font-mono text-xs overflow-x-auto">
shasum -a 256 certif-scope.pdf
            </pre>
          </div>

          <div>
            <p className="font-semibold text-[#0B3A63] mb-2">Linux (sha256sum):</p>
            <pre className="bg-white p-4 rounded-md border border-gray-200 font-mono text-xs overflow-x-auto">
sha256sum certif-scope.pdf
            </pre>
          </div>

          <div>
            <p className="font-semibold text-[#0B3A63] mb-2">Windows PowerShell:</p>
            <pre className="bg-white p-4 rounded-md border border-gray-200 font-mono text-xs overflow-x-auto">
Get-FileHash .\certif-scope.pdf -Algorithm SHA256
            </pre>
          </div>

        </div>
      </div>


      {/* AUDIT-PROOF ARCHITECTURE */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Stateless Architecture — Always Verifiable
        </h3>

        <p className="text-white/90 max-w-4xl mt-4 leading-relaxed relative z-10">
          Verification remains possible indefinitely, even if the Certif-Scope platform is offline.
          All cryptographic elements are embedded inside the PDF container, ensuring long-term
          accessibility for procurement workflows and institutional audits.
        </p>

        <ul className="mt-6 space-y-2 text-white/85 text-sm relative z-10">
          <li>• Hash stored in PDF metadata</li>
          <li>• Works offline</li>
          <li>• Suitable for legal retention</li>
          <li>• No external service dependency</li>
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
