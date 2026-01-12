"use client";

export default function Section13() {
  return (
    <section
      id="s13"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK — dark institutional unique design */}
      <div className="p-12 rounded-2xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          13. Data Integrity & Anti-Tampering Guarantees
        </h2>

        <p className="text-lg text-white/90 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope ensures that the generated attestation cannot be altered without detection.
          This section explains the structural safeguards included in the final PDF, focusing on
          traceability, integrity, consistent formatting, and institutional validation compatibility.
          No regulatory methodology is detailed here, as it is covered in the dedicated pages.
        </p>
      </div>

      {/* 3-column institutional grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* Card 1 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Cryptographic Integrity Seal
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Each attestation includes a cryptographic signature designed to detect any file
            modification. Institutions can confirm authenticity without external dependencies.
          </p>
          <ul className="text-gray-700 text-sm space-y-2 mt-4">
            <li>• Tamper-evident PDF structure</li>
            <li>• Unique integrity hash embedded</li>
            <li>• Validation possible fully offline</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Consistent Output Structure
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The document layout follows a fixed structure: identity block, results block,
            methodology pointer, and verification information. This facilitates institutional review
            and automated document processing.
          </p>
          <ul className="text-gray-700 text-sm space-y-2 mt-4">
            <li>• Standardized positioning of all fields</li>
            <li>• Machine-readable identifiers</li>
            <li>• Uniform layout across all attestations</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Immutable Verification Metadata
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The verification code embedded in the PDF includes fixed metadata identifying the
            generation parameters and protecting against unauthorized alterations or reformatting.
          </p>
          <ul className="text-gray-700 text-sm space-y-2 mt-4">
            <li>• Static metadata ensuring consistency</li>
            <li>• No silent overwriting possible</li>
            <li>• Securely encoded verification block</li>
          </ul>
        </div>
      </div>

      {/* DEEP EXPLANATION BLOCK */}
      <div className="mt-20 p-12 bg-white rounded-xl border border-gray-200 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          How Integrity Enhances Institutional Trust
        </h3>

        <p className="text-gray-700 max-w-5xl leading-relaxed">
          Ensuring data integrity is essential when documents circulate across procurement,
          banking, insurance or public-sector evaluation workflows. Certif-Scope does not replace
          regulatory reporting; instead, it provides a tamper-evident, standardized and portable
          supporting document that fits directly into institutional due-diligence procedures.
        </p>
      </div>

      {/* RETURN BUTTON — identical across all sections */}
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
