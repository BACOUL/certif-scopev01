"use client";

export default function Section8() {
  return (
    <section
      id="s8"
      data-section="s8"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-xl overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-40"
          aria-hidden="true"
        ></div>

        <h2
          className="text-4xl md:text-5xl font-extrabold relative z-10"
          data-i18n="s8.title"
        >
          Security & Independent Verification
        </h2>

        <p
          className="text-white/90 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="s8.intro"
        >
          Certif-Scope integrates deterministic cryptographic fingerprinting, offline verification
          and long-term archival compatibility. Each attestation embeds a SHA-256 integrity hash in
          both the visible content and the XMP metadata block. Any modification — even a single byte —
          generates a different hash, enabling reliable tamper detection without external servers or
          databases. This mechanism is not a digital signature and does not rely on PKI.
        </p>

        <div
          className="mt-6 text-sm text-white/80 underline space-y-1 relative z-10"
          data-i18n="s8.references"
        >
          <a href="https://www.loc.gov/preservation/digital/formats/fdd/" target="_blank" rel="noopener noreferrer">
            PDF/A archival principles
          </a><br />
          <a href="https://www.adobe.com/content/dam/acom/en/devnet/xmp/pdfs/XMPSpecificationPart1.pdf" target="_blank" rel="noopener noreferrer">
            XMP Metadata Specification
          </a><br />
          <a href="https://www.rfc-editor.org/rfc/rfc6234" target="_blank" rel="noopener noreferrer">
            RFC 6234 — SHA-256
          </a>
        </div>
      </div>

      {/* 3-Column Security Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* BLOCK 1 */}
        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
          data-i18n="s8.block1"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3" data-i18n="s8.block1.title">
            Cryptographic Integrity Seal (SHA-256)
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed" data-i18n="s8.block1.text">
            A deterministic SHA-256 digest is computed from the complete PDF binary. Any change produces
            a different hash, enabling instant detection of tampering. The digest is embedded inside the
            XMP metadata and displayed in the summary page for cross-checking.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li data-i18n="s8.block1.item1">• RFC 6234-compliant hash computation</li>
            <li data-i18n="s8.block1.item2">• Stored in XMP metadata</li>
            <li data-i18n="s8.block1.item3">• Breaks instantly if modified</li>
            <li data-i18n="s8.block1.item4">• No online service required</li>
          </ul>
        </div>

        {/* BLOCK 2 */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30"
          data-i18n="s8.block2"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3" data-i18n="s8.block2.title">
            Independent Offline Verification
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed" data-i18n="s8.block2.text">
            Institutions verify authenticity by recomputing the SHA-256 hash locally and comparing it
            to the XMP-embedded value. Verification does not require any Certif-Scope server, database,
            API endpoint, or online connectivity, making it suitable for restricted audit networks.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li data-i18n="s8.block2.item1">• Fully offline verification</li>
            <li data-i18n="s8.block2.item2">• Supports multi-year retention workflows</li>
            <li data-i18n="s8.block2.item3">• Zero reliance on external lookup</li>
          </ul>
        </div>

        {/* BLOCK 3 */}
        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
          data-i18n="s8.block3"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3" data-i18n="s8.block3.title">
            Data Minimisation (GDPR)
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed" data-i18n="s8.block3.text">
            Only numerical spending values are processed. No personal data, identifiers, behavioural
            metrics, or persistent information are collected. The system is stateless and satisfies
            GDPR Article 5 data-minimisation and storage-limitation principles.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li data-i18n="s8.block3.item1">• No database retention</li>
            <li data-i18n="s8.block3.item2">• No tracking or analytics</li>
            <li data-i18n="s8.block3.item3">• No personal data processed</li>
          </ul>
        </div>

      </div>

      {/* HASH RECALCULATION GUIDE */}
      <div
        className="mt-20 bg-[#F8FAFC] border border-[#15B097] p-10 rounded-xl shadow-sm"
        data-i18n="s8.hashguide"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3" data-i18n="s8.hashguide.title">
          How to Recalculate the Hash
        </h3>

        <p className="text-gray-700 max-w-4xl leading-relaxed" data-i18n="s8.hashguide.text">
          Auditors, banks and public agencies can verify authenticity using standard cryptographic
          tools. The resulting digest must match the hash embedded in the PDF metadata. Any mismatch
          indicates modification or re-exporting of the file.
        </p>

        <div className="space-y-6 mt-6 text-sm text-gray-700">

          <div data-i18n="s8.hashguide.mac">
            <p className="font-semibold text-[#0B3A63] mb-2">macOS / Linux:</p>
            <pre className="bg-white p-4 rounded-md border border-gray-200 font-mono text-xs overflow-x-auto">
shasum -a 256 certif-scope.pdf
            </pre>
          </div>

          <div data-i18n="s8.hashguide.linux">
            <p className="font-semibold text-[#0B3A63] mb-2">Linux (sha256sum):</p>
            <pre className="bg-white p-4 rounded-md border border-gray-200 font-mono text-xs overflow-x-auto">
sha256sum certif-scope.pdf
            </pre>
          </div>

          <div data-i18n="s8.hashguide.windows">
            <p className="font-semibold text-[#0B3A63] mb-2">Windows PowerShell:</p>
            <pre className="bg-white p-4 rounded-md border border-gray-200 font-mono text-xs overflow-x-auto">
Get-FileHash .\certif-scope.pdf -Algorithm SHA256
            </pre>
          </div>

        </div>
      </div>

      {/* AUDIT-PROOF ARCHITECTURE */}
      <div
        className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden"
        data-i18n="s8.architecture"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10" data-i18n="s8.architecture.title">
          Stateless Architecture — Always Verifiable
        </h3>

        <p
          className="text-white/90 max-w-4xl mt-4 leading-relaxed relative z-10"
          data-i18n="s8.architecture.text"
        >
          All verification data is embedded directly inside the PDF container. Even if the
          Certif-Scope platform becomes unavailable, the document remains fully verifiable for
          institutional audits, procurement workflows and long-term retention policies.
        </p>

        <ul className="mt-6 space-y-2 text-white/85 text-sm relative z-10">
          <li data-i18n="s8.architecture.item1">• Hash stored in XMP metadata</li>
          <li data-i18n="s8.architecture.item2">• Fully offline verification</li>
          <li data-i18n="s8.architecture.item3">• Suitable for multi-year legal retention</li>
          <li data-i18n="s8.architecture.item4">• No dependency on remote servers</li>
        </ul>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s8.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
          }
