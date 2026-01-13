"use client";

export default function Section9() {
  return (
    <section
      id="s9"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK — institutional layout */}
      <div className="p-12 rounded-2xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          9. Sample PDF Output (Structure Overview)
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          This section presents the structural components included in every generated
          PDF attestation. The layout is deterministic, reproducible offline and aligned
          with European institutional expectations for procurement, banking, insurance
          and regulatory documentation workflows. A real sample PDF is available below
          for direct review.
        </p>
      </div>


      {/* PDF PREVIEW — real capture with watermark */}
      <div className="mt-12 flex justify-center">
        <a
          href="/samples/certif-scope-sample.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <img
            src="/samples/pdf-sample-watermarked.jpg"
            alt="Preview of the official Certif-Scope PDF attestation (watermarked)"
            className="w-72 rounded-xl border border-gray-300 shadow-md group-hover:shadow-xl transition"
          />
          <p className="text-center text-sm mt-3 text-[#0B3A63] underline group-hover:text-[#15B097]">
            View real PDF sample
          </p>
        </a>
      </div>


      {/* 3-COLUMN GRID — PDF structure */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* BLOCK 1 — HEADER */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">Document Header</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Contains all mandatory identification fields required by auditors and
            institutional reviewers.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Entity name & legal registration</li>
            <li>• Reporting year & scope definition</li>
            <li>• Declaration and contact fields</li>
            <li>• Timestamp of generation (UTC, ISO-8601)</li>
          </ul>
        </div>

        {/* BLOCK 2 — RESULTS */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">Results Summary</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Displays the structured numerical output in a format consistent with
            standard European reporting expectations.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Total CO₂ equivalent (tCO₂e)</li>
            <li>• Category-level breakdown</li>
            <li>• References to emission-factor datasets</li>
            <li>• Deterministic, reproducible calculation methodology</li>
          </ul>
        </div>

        {/* BLOCK 3 — VERIFICATION */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">Verification Elements</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Ensures the attestation can be independently validated without any external
            dependency or server lookup.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Cryptographic integrity hash (SHA-256)</li>
            <li>• Unique verification identifier (UUID v4)</li>
            <li>• Offline validation instructions</li>
            <li>• Embedded XMP metadata + QR code to optional verification page</li>
          </ul>
        </div>

      </div>


      {/* METADATA BLOCK — FULL TECHNICAL DETAILS */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Embedded Metadata Included in Every PDF
        </h3>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          Each document contains verifiable metadata embedded directly in the PDF/A and
          XMP layers. This ensures permanent auditability, long-term archival
          compatibility and independent offline validation without any reliance on an
          external server.
        </p>

        <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
          <li className="p-4 bg-[#F8FAFC] rounded-lg border border-[#15B097]/20">
            <strong>SHA-256 Hash:</strong>
            <br />
            Stored in the metadata and printed in the footer.
          </li>

          <li className="p-4 bg-[#F8FAFC] rounded-lg border border-[#15B097]/20">
            <strong>UUID v4:</strong>
            <br />
            Unique immutable identifier generated at creation.
          </li>

          <li className="p-4 bg-[#F8FAFC] rounded-lg border border-[#15B097]/20">
            <strong>ISO Timestamp:</strong>
            <br />
            ISO-8601 compliant (e.g., 2026-01-10T14:22:33Z).
          </li>

          <li className="p-4 bg-[#F8FAFC] rounded-lg border border-[#15B097]/20">
            <strong>Emission Factors Source:</strong>
            <br />
            Base Carbone — Version 2024.2
          </li>
        </ul>
      </div>


      {/* INFO STRIP — acceptance rationale */}
      <div className="mt-20 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>
        <h3 className="text-2xl font-semibold relative z-10">Why the PDF Format Is Universally Accepted</h3>
        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          The PDF structure matches the standardized review practices used by European
          institutions. Fixed layout, deterministic formatting, explicit identifiers and
          embedded verification metadata ensure seamless compatibility with compliance,
          due diligence and audit workflows across borders.
        </p>
      </div>


      {/* RETURN BUTTON — uniform across all sections */}
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
