"use client";

export default function Section16() {
  return (
    <section
      id="s16"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK — unique blue/white institutional layout */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-[#15B097]/15 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          16. Technical FAQ
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          This technical FAQ provides precise, auditable and institution-ready answers
          regarding verification, cryptographic integrity, data handling, update cycles,
          stability guarantees, emission factor management and long-term availability.
          All statements adhere to documented European institutional expectations.
          No sales language — only verifiable technical facts.
        </p>
      </div>


      {/* TECHNICAL SCHEMA — required by rules */}
      <div className="mt-16 p-10 bg-white border border-[#0B3A63]/20 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Verification Architecture (Input → Engine → Output → Offline Check)
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• <strong>Input:</strong> financial expenditure categories provided by the user.</li>
          <li>• <strong>Engine:</strong> deterministic formula applying emission factors.</li>
          <li>• <strong>Output:</strong> standardized PDF with integrity metadata.</li>
          <li>• <strong>Verification:</strong> SHA-256 hash recomputation by any auditor.</li>
        </ul>

        <p className="mt-4 text-gray-700 text-sm max-w-4xl leading-relaxed">
          This pathway guarantees reproducibility, transparency and independence from
          platform availability, consistent with European procurement and auditing practices.
        </p>
      </div>


      {/* FAQ GRID — 12 questions, 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* FAQ 1 */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            How is integrity verified offline?
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            The PDF embeds a SHA-256 hash of its own content. An institution can recompute
            the hash locally using any standard tool and confirm byte-level integrity without
            relying on Certif-Scope servers.
          </p>
        </div>

        {/* FAQ 2 */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Which cryptographic algorithm is used?
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            SHA-256 is used due to its stability, universal support, and institutional
            acceptance in auditing, archiving and document verification systems across Europe.
          </p>
        </div>

        {/* FAQ 3 */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Does the PDF follow an archival standard?
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Yes. The structure is compatible with PDF/A-1 formatting practices, ensuring
            suitability for long-term digital archiving and administrative storage systems.
          </p>
        </div>

        {/* FAQ 4 */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Does the attestation contain personal data?
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            No personal or sensitive data is included. The PDF contains only operational
            financial indicators required for institutional assessment, ensuring GDPR compliance.
          </p>
        </div>

        {/* FAQ 5 */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            What happens if Certif-Scope becomes unavailable?
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Offline verification remains possible indefinitely. All required integrity
            metadata is self-contained in the PDF, ensuring permanent validity.
          </p>
        </div>

        {/* FAQ 6 */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Which emission factor sources are used?
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Emission factors derive from ADEME Base Carbone, DEFRA UK and IPCC AR6. These
            sources ensure transparency, reproducibility and institutional acceptance.
          </p>
        </div>

        {/* FAQ 7 */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Are emission factor updates backward compatible?
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Yes. Updates follow a controlled versioning policy. Existing attestations remain
            valid indefinitely and are never retroactively modified.
          </p>
        </div>

        {/* FAQ 8 */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Are computations deterministic?
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Yes. Given the same input and the same emission factor version, the output
            will always be identical, ensuring reproducibility and audit traceability.
          </p>
        </div>

        {/* FAQ 9 */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Does the system perform predictive estimation?
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            No. Certif-Scope uses deterministic spend-based conversions. It does not
            generate forecasts or probabilistic estimations.
          </p>
        </div>

        {/* FAQ 10 */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Does the attestation replace a full carbon audit?
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            No. It provides a standardized indicator for procurement and risk scoring.
            It does not replace full lifecycle analysis or CSRD reporting.
          </p>
        </div>

        {/* FAQ 11 */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Is the document machine-readable?
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Yes. The PDF includes structured metadata compatible with automated ingestion
            processes used by procurement, banking and compliance platforms.
          </p>
        </div>

        {/* FAQ 12 */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            Are financial inputs stored?
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            No. Inputs are processed in-memory only and never persist after the attestation
            is generated, ensuring GDPR and privacy-by-design compliance.
          </p>
        </div>
      </div>


      {/* LONG-TERM COMPLIANCE & STABILITY BLOCK */}
      <div className="mt-20 p-12 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20 pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Long-Term Stability & Compliance Guarantees
        </h3>

        <p className="text-white/90 mt-4 max-w-5xl leading-relaxed relative z-10">
          The attestation remains verifiable even if Certif-Scope is offline or discontinued.
          All verification elements are embedded directly in the document, ensuring compliance
          with European archiving, procurement and auditing requirements across years.
        </p>

        <ul className="mt-6 space-y-2 text-white/90 text-sm relative z-10">
          <li>• Permanent offline verification capability</li>
          <li>• No server dependency for authenticity checks</li>
          <li>• Full archival compatibility across jurisdictions</li>
        </ul>
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
