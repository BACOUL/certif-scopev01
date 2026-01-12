"use client";

export default function Section8() {
  return (
    <section
      id="s8"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK */}
      <div className="bg-[#F8FAFC] p-10 rounded-2xl shadow-sm border border-gray-100 mb-14">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-4">
          Security & Verification
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl">
          Certif-Scope ensures the integrity, authenticity and independence of each
          attestation through a cryptographic verification model. The system does not
          rely on trust in Certif-Scope's servers — all validations can be performed
          offline using the embedded verification identifier and hash.
        </p>
      </div>

      {/* 3 HIGHLIGHTED FEATURES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Cryptographic Integrity Seal
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Each PDF attestation contains a SHA-256 hash ensuring that no modification
            can occur without detection. Any third party can recompute and confirm integrity.
          </p>
        </div>

        <div className="p-8 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent"></div>
          <h3 className="text-xl font-semibold mb-3 relative z-10">
            Independent Verification
          </h3>
          <p className="text-white/90 text-sm leading-relaxed relative z-10">
            Verification does not require Certif-Scope infrastructure. The attestation
            includes all necessary data for offline validation using industry-standard tools.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Immutable Verification ID
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Each document includes a tamper-proof verification ID built from metadata,
            timestamp and cryptographic signature data.
          </p>
        </div>

      </div>

      {/* TECH GRID */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097] rounded-xl shadow-md">
          <h4 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Verification Architecture
          </h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope follows a zero-trust verification model inspired by structural
            principles in digital signatures and document authenticity protocols.
          </p>

          <ul className="text-sm text-gray-700 space-y-2">
            <li>• SHA-256 hashing over canonicalized attestation data</li>
            <li>• Embedded metadata for offline verification</li>
            <li>• Immutable timestamping inside the PDF file</li>
            <li>• No server dependency for validation</li>
            <li>• Compatible with institutional audit workflows</li>
          </ul>

          <p className="mt-4 text-sm text-[#0B3A63] underline">
            <a href="https://datatracker.ietf.org/doc/html/rfc8932" target="_blank">
              View reference cryptographic standards (RFC 8932)
            </a>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-md">
          <h4 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Institutional Validation Workflow
          </h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Banks, procurement teams, insurers and compliance departments can validate a
            Certif-Scope attestation using internal tools without contacting Certif-Scope.
          </p>

          <ol className="list-decimal ml-5 text-sm text-gray-700 space-y-2">
            <li>Open the attestation PDF.</li>
            <li>Extract the verification hash & metadata.</li>
            <li>Recompute hash from PDF content.</li>
            <li>Confirm match with embedded hash.</li>
            <li>Validate timestamp & classification fields.</li>
          </ol>

          <p className="mt-4 text-sm text-[#0B3A63] underline">
            <a href="https://www.iso.org/standard/82504.html" target="_blank">
              ISO 22301: Information integrity guidelines
            </a>
          </p>
        </div>

      </div>

      {/* INFO STRIP */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-lg">
        <h4 className="text-xl font-semibold mb-3">No Trust Required</h4>
        <p className="text-white/90 max-w-3xl">
          Certif-Scope does not operate as a trust authority. The security model is built so
          that document validation remains fully independent, verifiable and reproducible even
          in the absence of Certif-Scope servers or infrastructure.
        </p>
      </div>

      {/* RETURN BUTTON — IDENTICAL EVERYWHERE */}
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
