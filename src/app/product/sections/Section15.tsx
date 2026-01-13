"use client";

export default function Section15() {
  return (
    <section
      id="s15"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      <div className="p-12 rounded-2xl bg-white border border-gray-200 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3A63]/10 to-[#15B097]/10 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          15. Maintenance & Updates
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope follows a strict, institution-friendly update framework. Every version is
          tagged, documented and validated to guarantee stability, backward compatibility and
          reproducibility across procurement systems, banking ESG workflows and insurance audits.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#0B3A63]/20 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Stable Document Structure
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Formatting, field layout and metadata structure remain constant to avoid ingestion
            errors across automated systems.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li>• Fixed CO₂ indicator fields</li>
            <li>• Stable metadata schema</li>
            <li>• No disruptive UI changes</li>
          </ul>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Controlled Versioning
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Every release follows semantic versioning and embeds the version number into the PDF
            and JSON exports for traceability.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li>• MAJOR – structural/breaking changes</li>
            <li>• MINOR – new non-breaking features</li>
            <li>• PATCH – fixes & dataset refreshes</li>
          </ul>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Integrity & Consistency Checks
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Every update undergoes reproducibility checks to guarantee identical results across
            platforms and environments.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li>• Automated dataset validation</li>
            <li>• Logical computation consistency</li>
            <li>• Deterministic output snapshot tests</li>
          </ul>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Multi-Year Stability Guarantee
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Structure and logic remain stable over the long term, ensuring no disruption for
            institutional workflows depending on automated processing.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li>• Predictable output format</li>
            <li>• Backward compatibility ensured</li>
            <li>• No hidden behavioural changes</li>
          </ul>
        </div>
      </div>



      <div className="mt-20 p-12 bg-[#F8FAFC] border border-[#0B3A63]/20 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Public Changelog & Version History
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed">
          The platform maintains a publicly accessible changelog documenting all modifications.
          Each entry specifies the type of change and its institutional impact.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm text-gray-700 border-collapse">
            <thead>
              <tr className="bg-white border-b">
                <th className="p-4 text-left font-semibold">Version</th>
                <th className="p-4 text-left font-semibold">Type</th>
                <th className="p-4 text-left font-semibold">Summary</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">1.2.0</td>
                <td className="p-4">MINOR</td>
                <td className="p-4">Updated Base Carbone 2024.2 dataset + improved PDF metadata fields</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">1.1.3</td>
                <td className="p-4">PATCH</td>
                <td className="p-4">Fixes for JSON export compatibility validation</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">1.1.0</td>
                <td className="p-4">MINOR</td>
                <td className="p-4">Added EXIOBASE v3.8.2 emission factor support</td>
              </tr>
              <tr>
                <td className="p-4">1.0.0</td>
                <td className="p-4">MAJOR</td>
                <td className="p-4">Initial stable release with PDF/A + SHA-256 integration</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>



      <div className="mt-20 p-12 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          CI/CD Compatibility Test Matrix
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed">
          Each release is validated through a compatibility matrix ensuring unchanged behaviour
          across systems used by banks, insurers, procurement platforms and ERP suites.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse text-gray-700">
            <thead>
              <tr className="bg-[#F8FAFC] border-b">
                <th className="p-4 text-left font-semibold">Test Category</th>
                <th className="p-4 text-left font-semibold">Validated Elements</th>
                <th className="p-4 text-left font-semibold">Systems Tested</th>
              </tr>
            </thead>
            <tbody>

              <tr className="border-b">
                <td className="p-4">PDF/A Compliance</td>
                <td className="p-4">Structure, zoning, embedded XMP</td>
                <td className="p-4">Adobe Preflight · VeraPDF</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Metadata Extraction</td>
                <td className="p-4">SHA-256, version tag, dataset IDs</td>
                <td className="p-4">SAP DMS · Odoo Docs · Oracle Fusion</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Hash Integrity Check</td>
                <td className="p-4">Binary digest match across OS</td>
                <td className="p-4">Linux · Windows · macOS</td>
              </tr>

              <tr>
                <td className="p-4">JSON Export Validation</td>
                <td className="p-4">Schema consistency, field presence</td>
                <td className="p-4">API clients · ERP ingestion scripts</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>



      <div className="mt-20 p-12 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 to-transparent"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Why Stability & Version Control Matter
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          Institutional workflows rely on consistency. Certif-Scope ensures every version is
          transparent, traceable and verifiable across time, preventing incompatibilities in
          procurement platforms, ESG scoring systems, insurance underwriting and ERP ingestion.
        </p>
      </div>



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
