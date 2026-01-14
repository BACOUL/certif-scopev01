"use client";

export default function Section16() {
  return (
    <section
      id="s16"
      data-section="s16"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div
        className="p-12 bg-[#F8FAFC] border border-gray-300 rounded-2xl shadow-lg relative overflow-hidden"
        data-i18n="s16.header.block"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-[#15B097]/15 pointer-events-none"></div>

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]"
          data-i18n="s16.title"
        >
          Technical FAQ & Verification Guidance
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed"
          data-i18n="s16.intro"
        >
          This section provides precise, audit-ready technical responses covering verification,
          cryptographic integrity, dataset governance, GDPR compliance, reproducibility, PDF/A
          structure and regulatory alignment. All statements comply with CSRD, ESRS, ISO 14064-1,
          ISO 14083, EBA ESG Risk Guidelines and EU GPP requirements.
        </p>
      </div>



      {/* SUMMARY TABLE — institutional */}
      <div
        className="mt-16 p-10 bg-white border border-[#0B3A63]/20 rounded-xl shadow-md"
        data-i18n="s16.summary.block"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-6" data-i18n="s16.summary.title">
          Summary Table — What Institutions Validate
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-300">
            <thead className="bg-[#F8FAFC]">
              <tr>
                <th className="border border-gray-300 p-3" data-i18n="s16.summary.col.topic">Topic</th>
                <th className="border border-gray-300 p-3" data-i18n="s16.summary.col.answer">Certif-Scope Answer</th>
                <th className="border border-gray-300 p-3" data-i18n="s16.summary.col.regulation">Relevant Regulation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border" data-i18n="s16.summary.row1.topic">Verification</td>
                <td className="p-3 border" data-i18n="s16.summary.row1.answer">Offline SHA-256 recomputation</td>
                <td className="p-3 border" data-i18n="s16.summary.row1.regulation">ISO 14064-1, RFC 6234</td>
              </tr>
              <tr>
                <td className="p-3 border" data-i18n="s16.summary.row2.topic">Data Processing</td>
                <td className="p-3 border" data-i18n="s16.summary.row2.answer">Stateless, no logs retained</td>
                <td className="p-3 border" data-i18n="s16.summary.row2.regulation">GDPR Art.5</td>
              </tr>
              <tr>
                <td className="p-3 border" data-i18n="s16.summary.row3.topic">Dataset sources</td>
                <td className="p-3 border" data-i18n="s16.summary.row3.answer">ADEME / DEFRA / Eurostat / IPCC</td>
                <td className="p-3 border" data-i18n="s16.summary.row3.regulation">ESRS E1</td>
              </tr>
              <tr>
                <td className="p-3 border" data-i18n="s16.summary.row4.topic">Format</td>
                <td className="p-3 border" data-i18n="s16.summary.row4.answer">PDF/A-1b + XMP metadata + SHA-256</td>
                <td className="p-3 border" data-i18n="s16.summary.row4.regulation">EU GPP, CINEA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>



      {/* TECHNICAL FAQ — 12 questions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* Each block gets its i18n key */}
        {[
          {
            q: "How is the CO₂ value computed?",
            a: "Spend (€) × Emission factor (kgCO₂e/€). Deterministic, reproducible, no AI.",
            k: "q1",
          },
          {
            q: "Which datasets are used?",
            a: "ADEME, DEFRA, Eurostat classification, IPCC AR6 multipliers.",
            k: "q2",
          },
          {
            q: "Does Certif-Scope store any data?",
            a: "No storage, no logs, no persistence; fully stateless.",
            k: "q3",
          },
          {
            q: "Are cookies or tracking used?",
            a: "No cookies, no analytics, no tracking identifiers.",
            k: "q4",
          },
          {
            q: "What format is used?",
            a: "PDF/A-1b with XMP metadata and embedded SHA-256 integrity seal.",
            k: "q5",
          },
          {
            q: "How is verification done offline?",
            a: "Recompute SHA-256 and compare to the XMP metadata field.",
            k: "q6",
          },
          {
            q: "Which cryptographic standard?",
            a: "SHA-256 per RFC 6234.",
            k: "q7",
          },
          {
            q: "Are calculations reproducible?",
            a: "Yes, deterministic given identical inputs + dataset version.",
            k: "q8",
          },
          {
            q: "Does the PDF remain valid after dataset updates?",
            a: "Yes. Validation depends only on the embedded hash.",
            k: "q9",
          },
          {
            q: "Are dataset versions printed?",
            a: "Yes. ADEME/DEFRA/Eurostat version IDs appear in metadata.",
            k: "q10",
          },
          {
            q: "Can ERPs ingest the output?",
            a: "Yes, JSON export uses stable field names.",
            k: "q11",
          },
          {
            q: "Can the PDF be verified decades later?",
            a: "Yes. Offline verification ensures very long-term durability.",
            k: "q12",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl border shadow-sm ${
              i % 2 ? "bg-[#F8FAFC] border-[#15B097]/30" : "bg-white border-gray-200"
            }`}
            data-i18n={`s16.${item.k}.block`}
          >
            <h4 className="text-xl font-semibold text-[#0B3A63]" data-i18n={`s16.${item.k}.q`}>
              {i + 1}. {item.q}
            </h4>
            <p className="text-sm text-gray-700 mt-2" data-i18n={`s16.${item.k}.a`}>
              {item.a}
            </p>
          </div>
        ))}
      </div>



      {/* COMMAND-LINE VERIFICATION */}
      <div
        className="mt-20 p-12 bg-white border border-gray-300 rounded-xl shadow-md"
        data-i18n="s16.cli.block"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-6" data-i18n="s16.cli.title">
          Offline Verification Commands
        </h3>

        <p className="text-gray-700 text-sm mb-4" data-i18n="s16.cli.desc">
          Audit teams can validate integrity on any machine without network access.
        </p>

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
      <div
        className="mt-20 p-12 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden"
        data-i18n="s16.compliance.block"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent"></div>

        <h3 className="text-2xl font-semibold relative z-10" data-i18n="s16.compliance.title">
          Compliance Summary
        </h3>

        <p
          className="text-white/90 mt-4 max-w-5xl leading-relaxed relative z-10"
          data-i18n="s16.compliance.text"
        >
          Certif-Scope uses a deterministic, reproducible and fully offline verification system.
          All outputs comply with CSRD, ESRS E1, EBA ESG Risk Guidelines, ISO 14064-1, ISO 14083 and
          EU public procurement documentation requirements.
        </p>
      </div>



      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          data-i18n="s16.return"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
        }
