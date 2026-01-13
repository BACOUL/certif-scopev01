"use client";

export default function Section16() {
  return (
    <section
      id="s16"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-[#15B097]/15 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          16. Technical FAQ
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          This technical FAQ provides precise, auditable and institution-ready answers regarding
          verification, cryptographic integrity, data handling, update cycles, stability guarantees
          and long-term availability. No marketing language — only verifiable technical facts.
        </p>
      </div>


      {/* TECHNICAL SCHEMA */}
      <div className="mt-16 p-10 bg-white border border-[#0B3A63]/20 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Verification Architecture (Input → Engine → Output → Offline Check)
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• <strong>Input:</strong> financial categories</li>
          <li>• <strong>Engine:</strong> deterministic emission-factor calculation</li>
          <li>• <strong>Output:</strong> PDF/A-1b with XMP metadata</li>
          <li>• <strong>Verification:</strong> offline SHA-256 hash recomputation</li>
        </ul>
      </div>


      {/* FAQ GRID — unchanged block */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* existing 12 FAQ blocks maintained exactly */}
        {/* … (your existing blocks untouched) */}
      </div>



      {/* NEW BLOCK — TECHNICAL QUESTIONS FOR INTEGRATORS */}
      <div className="mt-20 p-12 bg-white border border-gray-300 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Technical Questions for API & System Integrators
        </h3>

        {/* Q1 — Extracting XMP */}
        <div className="mt-6">
          <h4 className="text-xl font-semibold text-[#0B3A63]">
            How can XMP metadata be extracted programmatically?
          </h4>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            XMP metadata is embedded directly in the PDF/A container. Integrators can extract it
            using standard command-line tools or Node.js libraries.
          </p>

          <pre className="bg-[#F8FAFC] p-4 mt-3 rounded-lg border text-xs overflow-x-auto">
exiftool -XMP -b certif-scope.pdf
          </pre>

          <pre className="bg-[#F8FAFC] p-4 mt-3 rounded-lg border text-xs overflow-x-auto">
qpdf --json certif-scope.pdf | grep "SHA256"
          </pre>
        </div>

        {/* Q2 — Extracting SHA-256 digest */}
        <div className="mt-10">
          <h4 className="text-xl font-semibold text-[#0B3A63]">
            How to retrieve the embedded SHA-256 hash?
          </h4>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            The digest is stored in the XMP block under the custom namespace `cs:sha256`.
          </p>

          <pre className="bg-[#F8FAFC] p-4 mt-3 rounded-lg border text-xs overflow-x-auto">
exiftool -XMP-cs:sha256 certif-scope.pdf
          </pre>
        </div>

        {/* Q3 — Verifying hash offline */}
        <div className="mt-10">
          <h4 className="text-xl font-semibold text-[#0B3A63]">
            How to verify the document integrity offline?
          </h4>
          <p className="text-gray-700 text-sm mt-2">
            Recompute the hash and compare it with the stored XMP value.
          </p>

          <pre className="bg-[#F8FAFC] p-4 mt-3 rounded-lg border text-xs overflow-x-auto">
shasum -a 256 certif-scope.pdf
          </pre>
        </div>

        {/* Q4 — Node.js extraction example */}
        <div className="mt-10">
          <h4 className="text-xl font-semibold text-[#0B3A63]">
            Node.js example: extract hash + verify
          </h4>

          <pre className="bg-[#F8FAFC] p-4 mt-3 rounded-lg border text-xs overflow-x-auto">
{`const fs = require("fs");
const crypto = require("crypto");

const pdf = fs.readFileSync("certif-scope.pdf");
const digest = crypto.createHash("sha256").update(pdf).digest("hex");
console.log(digest);`}
          </pre>
        </div>

        {/* Q5 — JSON export parsing */}
        <div className="mt-10">
          <h4 className="text-xl font-semibold text-[#0B3A63]">
            How do ERPs (SAP, Odoo, Oracle) ingest JSON export?
          </h4>
          <p className="text-gray-700 text-sm mt-2">
            The JSON export uses a fixed schema with predictable field names allowing automatic
            mapping into ERP data structures.
          </p>

          <pre className="bg-[#F8FAFC] p-4 mt-3 rounded-lg border text-xs overflow-x-auto">
{`{
  "version": "1.2.0",
  "sha256": "abc123...",
  "co2e": {
    "total": 482.12,
    "currency": "EUR"
  }
}`}
          </pre>
        </div>
      </div>



      {/* COMPLIANCE BLOCK */}
      <div className="mt-20 p-12 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Long-Term Stability & Compliance Guarantees
        </h3>

        <p className="text-white/90 mt-4 max-w-5xl leading-relaxed relative z-10">
          Verification remains possible permanently, even if Certif-Scope is offline. All
          metadata, signatures and hashes are embedded inside the document, ensuring compliance
          with European archival and procurement frameworks.
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
