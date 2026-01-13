"use client";

export default function Section8() {
  return (
    <section
      id="s8"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-40"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          8. Security & Independent Verification
        </h2>

        <p className="text-white/90 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope integrates cryptographic security, offline verification and PDF archival
          compliance consistent with institutional audit requirements. Every generated attestation
          embeds a deterministic SHA-256 fingerprint, stored both in the PDF binary and in the
          XMP metadata block, ensuring long-term integrity validation without server access.
          Verification standards follow PDF/A archival rules, ISO 14064-1, ISO 14083 and RFC 6234
          for SHA-256 implementation.
        </p>

        <div className="mt-6 text-sm text-white/80 underline space-y-1 relative z-10">
          <a href="https://www.loc.gov/preservation/digital/formats/fdd/fdd000125.shtml" target="_blank">
            PDF/A — Archival compliance specification
          </a><br />
          <a href="https://www.adobe.com/content/dam/acom/en/devnet/xmp/pdfs/XMPSpecificationPart1.pdf" target="_blank">
            XMP Metadata Specification (Adobe)
          </a><br />
          <a href="https://www.rfc-editor.org/rfc/rfc6234" target="_blank">
            RFC 6234 — SHA-256 standard
          </a>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Cryptographic Integrity Seal (SHA-256)
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The PDF includes a SHA-256 digest computed from the exact binary content. Any alteration,
            even a single byte, produces a different hash, enabling deterministic tamper detection.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Fully RFC 6234-compliant computation</li>
            <li>• Hash embedded into XMP metadata block</li>
            <li>• Immutable after PDF output</li>
            <li>• No server dependency for verification</li>
          </ul>
        </div>


        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Independent Offline Verification
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Institutions verify authenticity by recomputing the SHA-256 hash locally and comparing
            it to the fingerprint stored within the PDF/A XMP metadata. The process is fully
            transparent and reproducible.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Works offline or in restricted audit networks</li>
            <li>• Suitable for multi-year archival retention</li>
            <li>• No external lookup or API call required</li>
          </ul>
        </div>


        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Secure Data Minimisation (GDPR)
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Only numerical expenditure data is processed. No personal or persistent information is
            stored. All processing is stateless and compliant with GDPR Article 5.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• No database retention</li>
            <li>• No third-party transfer</li>
            <li>• Privacy-by-design workflow</li>
          </ul>
        </div>

      </div>



      <div className="mt-20 bg-[#F8FAFC] border border-[#15B097] p-10 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          How to Recalculate the Hash (Step-by-Step)
        </h3>

        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Below are standard commands used by auditors, banks or public agencies to recompute
          the SHA-256 digest of the PDF. The resulting value must match the hash embedded in
          the document metadata. Any discrepancy indicates alteration.
        </p>

        <div className="space-y-6 mt-6 text-sm text-gray-700">

          <div>
            <p className="font-semibold text-[#0B3A63] mb-2">macOS / Linux (shasum):</p>
            <pre className="bg-white p-4 rounded-md border border-gray-200 overflow-x-auto font-mono text-xs">
shasum -a 256 certif-scope-attestation.pdf
            </pre>
          </div>

          <div>
            <p className="font-semibold text-[#0B3A63] mb-2">Linux (sha256sum):</p>
            <pre className="bg-white p-4 rounded-md border border-gray-200 overflow-x-auto font-mono text-xs">
sha256sum certif-scope-attestation.pdf
            </pre>
          </div>

          <div>
            <p className="font-semibold text-[#0B3A63] mb-2">Windows PowerShell:</p>
            <pre className="bg-white p-4 rounded-md border border-gray-200 overflow-x-auto font-mono text-xs">
Get-FileHash .\certif-scope-attestation.pdf -Algorithm SHA256
            </pre>
          </div>

          <div>
            <p className="font-semibold text-[#0B3A63] mb-2">Node.js (backend verification):</p>
            <pre className="bg-white p-4 rounded-md border border-gray-200 overflow-x-auto font-mono text-xs">
node -e "const fs=require('fs');const d=fs.readFileSync('certif-scope-attestation.pdf');console.log(require('crypto').createHash('sha256').update(d).digest('hex'))"
            </pre>
          </div>

        </div>

        <p className="mt-6 text-gray-700 text-sm leading-relaxed">
          All four methods must produce the same hexadecimal digest as printed in the
          “Verification” section of the PDF and stored in XMP metadata.
        </p>
      </div>



      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          No Server Dependency — Audit-Proof Architecture
        </h3>

        <p className="text-white/90 max-w-4xl mt-4 leading-relaxed relative z-10">
          Verification remains permanently possible even if the Certif-Scope platform is offline.
          All proof elements are embedded inside the PDF/A container, ensuring long-term stability
          for compliance workflows, procurement records and audit repositories.
        </p>

        <ul className="mt-6 space-y-2 text-white/85 text-sm relative z-10">
          <li>• PDF/A for archival durability</li>
          <li>• XMP metadata storing SHA-256 digest</li>
          <li>• Suitable for multi-year legal retention</li>
          <li>• Zero reliance on external services</li>
        </ul>
      </div>


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
