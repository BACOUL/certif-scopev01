export default function Section9() {
  return (
    <section
      id="s9"
      className="scroll-mt-24 py-32 bg-[#F8FAFC] dark:bg-gray-900"
    >

      {/* TITLE */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-20">
        <h2 className="text-4xl font-extrabold text-[#0B3A63]">
          Sample PDF Attestation
        </h2>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Certif-Scope provides a clean, institutional-grade PDF that includes company details,
          methodology overview, emission factors, calculation results and a cryptographic integrity
          block. Below is a visual representation of the final document format.
        </p>
      </div>

      {/* MAIN CONTENT - PREVIEW + DOCUMENT STRUCTURE */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-14">

        {/* LEFT COLUMN — PDF PREVIEW */}
        <div className="md:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">

            {/* PREVIEW HEADER */}
            <div className="bg-[#0B3A63] text-white py-4 px-6">
              <h3 className="text-lg font-semibold">
                PDF Document Preview
              </h3>
            </div>

            {/* PDF IMAGE MOCK */}
            <div className="w-full h-[560px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-300 text-sm">
                PDF Preview Placeholder  
                (Upload or integrate actual preview image here)
              </span>
            </div>

          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="/sample/sample-certifscope.pdf"
              className="px-6 py-3 rounded-lg bg-[#47B39C] text-white font-semibold shadow hover:bg-[#3e9f8c] transition"
              download
            >
              Download Sample PDF
            </a>

            <a
              href="#s8"
              className="px-6 py-3 rounded-lg bg-white dark:bg-gray-800 text-[#0B3A63] font-semibold border border-[#0B3A63] hover:bg-[#0B3A63]/10 transition"
            >
              View Verification Method
            </a>

          </div>
        </div>

        {/* RIGHT COLUMN — DOCUMENT STRUCTURE */}
        <aside className="bg-white dark:bg-gray-800 p-10 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">
          <h4 className="text-2xl font-bold text-[#0B3A63] mb-6">
            Document Structure
          </h4>

          <ul className="space-y-5 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">

            <li className="border-l-4 border-[#47B39C] pl-4">
              <span className="font-semibold text-[#0B3A63]">Cover page</span><br />
              Company details, reporting year, unique verification ID.
            </li>

            <li className="border-l-4 border-[#47B39C] pl-4">
              <span className="font-semibold text-[#0B3A63]">Methodology summary</span><br />
              Explains the spend-based approach and emission factor sources.
            </li>

            <li className="border-l-4 border-[#47B39C] pl-4">
              <span className="font-semibold text-[#0B3A63]">Activity breakdown</span><br />
              Visual segmentation of emissions by category (transport, energy, purchases, etc.)
            </li>

            <li className="border-l-4 border-[#47B39C] pl-4">
              <span className="font-semibold text-[#0B3A63]">Total emissions</span><br />
              Consolidated CO₂ indicator with clear units and scope type.
            </li>

            <li className="border-l-4 border-[#47B39C] pl-4">
              <span className="font-semibold text-[#0B3A63]">Emission factors used</span><br />
              References sources and calculation parameters.
            </li>

            <li className="border-l-4 border-[#47B39C] pl-4">
              <span className="font-semibold text-[#0B3A63]">Cryptographic verification block</span><br />
              SHA-256 hash, timestamp, signature metadata and validation instructions.
            </li>

          </ul>
        </aside>
      </div>

      {/* RETURN TO SUMMARY BUTTON */}
      <div className="text-center mt-24">
        <a
          href="#top"
          className="inline-block text-sm text-gray-500 hover:text-[#0B3A63] border border-gray-300 px-4 py-2 rounded-lg transition"
        >
          Back to summary ↑
        </a>
      </div>

    </section>
  );
}
