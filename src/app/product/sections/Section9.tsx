"use client";

export default function Section9() {
  return (
    <section
      id="s9"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK — exclusive layout */}
      <div className="p-12 rounded-2xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          9. Sample PDF Output (Structure Overview)
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          This section provides a detailed overview of the structure, layout and verification 
          elements included in every generated PDF. The attestation follows a standardized,
          institution-ready format compatible with procurement, banking, insurance and 
          compliance workflows across Europe.
        </p>
      </div>

      {/* 3-COLUMN GRID — PDF structure */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* BLOCK 1 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">Document Header</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The top section of the PDF contains all mandatory identification elements required 
            by institutional reviewers.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Entity name & registration number</li>
            <li>• Reporting year and scope definition</li>
            <li>• Contact & declaration fields</li>
            <li>• Timestamp of generation</li>
          </ul>
        </div>

        {/* BLOCK 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">Results Summary</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Results are displayed in a structured table format aligned with institutional 
            expectations for readability and comparability.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Total CO₂ equivalent (tCO₂e)</li>
            <li>• Category breakdown</li>
            <li>• Emission factor reference tags</li>
            <li>• Deterministic calculation note</li>
          </ul>
        </div>

        {/* BLOCK 3 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">Verification Elements</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Each PDF includes independent validation components allowing external parties 
            to confirm authenticity without contacting Certif-Scope.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Cryptographic integrity hash</li>
            <li>• Unique verification identifier</li>
            <li>• Offline authenticity validation path</li>
            <li>• QR code pointing to public verification page</li>
          </ul>
        </div>

      </div>

      {/* INFO STRIP */}
      <div className="mt-20 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>
        <h3 className="text-2xl font-semibold relative z-10">Why the PDF Format Is Universally Accepted</h3>
        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          The attestation uses a fixed, reproducible layout aligned with the review practices 
          of European institutions. It includes structured identifiers, standard terminology,
          deterministic formatting and integrity metadata ensuring smooth integration in 
          onboarding, due diligence and compliance documentation flows.
        </p>
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
