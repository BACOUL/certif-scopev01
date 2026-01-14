"use client";

export default function Section16() {
  return (
    <section
      id="s16"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-[#15B097]/15 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          16. Technical FAQ & Verification Guidance
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          This section provides precise, auditable and institution-ready answers covering
          verification, cryptographic integrity, dataset handling, GDPR compliance, stability
          guarantees, PDF/A structure and long-term reproducibility. All statements align with
          CSRD, ESRS, EBA ESG Risk Guidelines and ISO verification frameworks.
        </p>
      </div>


      {/* SUMMARY TABLE — SEO/IA readable */}
      <div className="mt-16 p-10 bg-white border border-[#0B3A63]/20 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-6">
          Summary Table — What Institutions Validate
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-300">
            <thead className="bg-[#F8FAFC]">
              <tr>
                <th className="border border-gray-300 p-3">Topic</th>
                <th className="border border-gray-300 p-3">Certif-Scope Answer</th>
                <th className="border border-gray-300 p-3">Relevant Regulation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">Verification</td>
                <td className="p-3 border">Offline SHA-256 recomputation</td>
                <td className="p-3 border">ISO 14064-1, RFC 6234</td>
              </tr>
              <tr>
                <td className="p-3 border">Data</td>
                <td className="p-3 border">No storage, stateless input</td>
                <td className="p-3 border">GDPR Art. 5</td>
              </tr>
              <tr>
                <td className="p-3 border">Dataset sources</td>
                <td className="p-3 border">ADEME / DEFRA / Eurostat / IPCC</td>
                <td className="p-3 border">ESRS E1</td>
              </tr>
              <tr>
                <td className="p-3 border">Format</td>
                <td className="p-3 border">PDF/A-1b + XMP metadata</td>
                <td className="p-3 border">EU GPP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>



      {/* CORE TECHNICAL FAQ — 12 REQUIRED QUESTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* Q1 */}
        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
          <h4 className="text-xl font-semibold text-[#0B3A63]">
            1. How is the CO₂ value computed?
          </h4>
          <p className="text-sm text-gray-700 mt-2">
            Using a deterministic formula: <strong>Spend (€) × Emission Factor (kgCO₂e/€)</strong>.
            No estimation models, no AI, no machine learning.
          </p>
        </div>

        {/* Q2 */}
        <div className="p-6 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h4 className="text-xl font-semibold text-[#0B3A63]">
            2. Which datasets are used?
          </h4>
          <p className="text-sm text-gray-700 mt-2">
            ADEME Base Carbone, DEFRA UK Conversion Factors, Eurostat/EEA, IPCC AR6.
          </p>
        </div>

        {/* Q3 */}
        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
          <h4 className="text-xl font-semibold text-[#0B3A63]">
            3. Does Certif-Scope store any data?
          </h4>
          <p className="text-sm text-gray-700 mt-2">
            No storage, no logs, no database. Fully stateless architecture.
          </p>
        </div>

        {/* Q4 */}
        <div className="p-6 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h4 className="text-xl font-semibold text-[#0B3A63]">
            4. Are cookies or tracking systems used?
          </h4>
          <p className="text-sm text-gray-700 mt-2">
            No cookies, no analytics, no tracking, no fingerprinting.
          </p>
        </div>

        {/* Q5 */}
        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
          <h4 className="text-xl font-semibold text-[#0B3A63]">
            5. What format is used for the output?
          </h4>
          <p className="text-sm text-gray-700 mt-2">
            PDF/A-1b with embedded XMP metadata and SHA-256 integrity seal.
          </p>
        </div>

        {/* Q6 */}
        <div className="p-6 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h4 className="text-xl font-semibold text-[#0B3A63]">
            6. How is verification performed offline?
          </h4>
          <p className="text-sm text-gray-700 mt-2">
            Recompute SHA-256 hash and compare with metadata field `cs:sha256`.
          </p>
        </div>

        {/* Q7 */}
        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
          <h4 className="text-xl font-semibold text-[#0B3A63]">
            7. Which cryptographic standard is used?
          </h4>
          <p className="text-sm text-gray-700 mt-2">
            SHA-256 according to RFC 6234. No proprietary algorithms.
          </p>
        </div>

        {/* Q8 */}
        <div className="p-6 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h4 className="text-xl font-semibold text-[#0B3A63]">
            8. Are calculations reproducible?
          </h4>
          <p className="text-sm text-gray-700 mt-2">
            Yes. All results can be regenerated using the same inputs and dataset version.
          </p>
        </div>

        {/* Q9 */}
        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
          <h4 className="text-xl font-semibold text-[#0B3A63]">
            9. Does the PDF remain valid after dataset updates?
          </h4>
          <p className="text-sm text-gray-700 mt-2">
            Yes. Backward compatibility is guaranteed because verification uses the embedded hash.
          </p>
        </div>

        {/* Q10 */}
        <div className="p-6 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h4 className="text-xl font-semibold text-[#0B3A63]">
            10. Are dataset versions printed in the PDF?
          </h4>
          <p className="text-sm text-gray-700 mt-2">
            Yes. ADEME, DEFRA, Eurostat versions appear in the metadata and footer.
          </p>
        </div>

        {/* Q11 */}
        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
          <h4 className="text-xl font-semibold text-[#0B3A63]">
            11. Can ERPs ingest the output automatically?
          </h4>
          <p className="text-sm text-gray-700 mt-2">
            Yes. JSON export uses fixed field names for SAP, Odoo and Oracle.
          </p>
        </div>

        {/* Q12 */}
        <div className="p-6 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h4 className="text-xl font-semibold text-[#0B3A63]">
            12. Can the document be verified decades later?
          </h4>
          <p className="text-sm text-gray-700 mt-2">
            Yes. Verification is permanent and requires no server access.
          </p>
        </div>

      </div>



      {/* COMMAND-LINE VERIFICATION */}
      <div className="mt-20 p-12 bg-white border border-gray-300 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-6">
          Offline Verification Commands
        </h3>

        <pre className="bg-[#F8FAFC] p-4 rounded-md border text-xs overflow-x-auto">
shasum -a 256 certif-scope.pdf
        </pre>

        <pre className="bg-[#F8FAFC] p-4 mt-3 rounded-md border text-xs overflow-x-auto">
Get-FileHash .\certif-scope.pdf -Algorithm SHA256
        </pre>

        <pre className="bg-[#F8FAFC] p-4 mt-3 rounded-md border text-xs overflow-x-auto">
node -e "const fs=require('fs');console.log(require('crypto').createHash('sha256').update(fs.readFileSync('certif-scope.pdf')).digest('hex'))"
        </pre>
      </div>



      {/* COMPLIANCE WRAP-UP */}
      <div className="mt-20 p-12 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Compliance Summary
        </h3>

        <p className="text-white/90 mt-4 max-w-5xl leading-relaxed relative z-10">
          Certif-Scope follows a deterministic, verifiable and independently reproducible
          methodology. All verification steps are fully offline and permanent. The system
          aligns with CSRD, ESRS, EBA ESG Risk Guidelines, ISO 14064-1 and ISO 14083.
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
