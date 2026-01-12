"use client";

export default function Section9() {
  return (
    <section
      id="s9"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="bg-[#F8FAFC] p-10 rounded-2xl shadow-sm border border-gray-100 mb-14">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-4">
          Sample PDF Attestation
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl">
          Below is an example of the standardized Certif-Scope CO₂ attestation format.
          It demonstrates exactly how institutions such as banks, procurement teams,
          insurers and compliance departments will receive and review your document.
        </p>
      </div>

      {/* PREVIEW MOCKUP BLOCK */}
      <div className="flex justify-center">
        <div className="bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden max-w-4xl">
          <img
            src="/images/sample-attestation.jpg"
            alt="Sample Certif-Scope PDF Attestation"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* TECHNICAL BREAKDOWN GRID */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT BLOCK */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            Document Structure Overview
          </h3>

          <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
            <li>• Summary of emissions (Scope 1, 2, 3)</li>
            <li>• Emission chart visualization</li>
            <li>• Attestation period & reporting date</li>
            <li>• Verification ID & integrity hash</li>
            <li>• Methodology and emission factors</li>
            <li>• Issuing authority and compliance notes</li>
          </ul>

          <p className="mt-4 text-sm text-[#0B3A63] underline">
            <a
              href="https://ghgprotocol.org/standards"
              target="_blank"
            >
              Learn more about the GHG Protocol standards
            </a>
          </p>
        </div>

        {/* RIGHT BLOCK */}
        <div className="p-8 bg-[#0B3A63] text-white border border-[#15B097] rounded-xl shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 to-transparent"></div>

          <h3 className="text-2xl font-semibold mb-4 relative z-10">
            How Institutions Verify the Document
          </h3>

          <p className="text-white/90 text-sm leading-relaxed relative z-10">
            The verification workflow is fully transparent and designed for compliance
            examiners who need deterministic validation without relying on Certif-Scope.
          </p>

          <ol className="list-decimal ml-5 mt-4 space-y-3 text-sm text-white/90 relative z-10">
            <li>Open PDF and extract verification metadata</li>
            <li>Recompute SHA-256 hash from the PDF content</li>
            <li>Compare computed hash with embedded reference hash</li>
            <li>Validate timestamp and scope classification</li>
            <li>Confirm alignment with GHG Protocol methodology</li>
          </ol>

          <p className="mt-4 text-sm underline relative z-10">
            <a
              href="https://www.iso.org/standard/82504.html"
              target="_blank"
            >
              ISO verification guidelines — ISO 22301
            </a>
          </p>
        </div>

      </div>

      {/* DOWNLOAD CTA */}
      <div className="mt-20 bg-[#F8FAFC] p-10 rounded-xl border border-gray-200 shadow-sm">
        <h4 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Download a Sample Attestation
        </h4>
        <p className="text-gray-700 max-w-3xl mb-6">
          Download a full PDF sample to review structure, layout and verification fields.
          This is the exact file format that institutions receive.
        </p>

        <a
          href="/sample/certif-scope-attestation.pdf"
          target="_blank"
          className="inline-block px-6 py-3 rounded-lg bg-[#0B3A63] text-white hover:bg-[#15B097] transition-colors text-sm font-medium"
        >
          Download PDF Sample
        </a>
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
