"use client";

export default function Section8() {
  return (
    <section id="s8" className="scroll-mt-24">

      {/* SECTION HEADER */}
      <div className="mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Security & Verification Model
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
          Certif-Scope is built with a trust-minimized and transparent verification architecture,
          ensuring that each CO₂ attestation is authentic, tamper-resistant and independently
          verifiable by auditors, banks, insurers, procurement officers and regulatory bodies.
        </p>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT BLOCK - PRINCIPLES */}
        <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">

          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-6">
            Core Security Principles
          </h3>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            <li>
              <strong className="text-[#0B3A63]">1. Immutable record:</strong>  
              Every generated attestation contains a cryptographic hash that uniquely represents
              the file’s content. Any modification invalidates verification.
            </li>
            <li>
              <strong className="text-[#0B3A63]">2. Offline verification:</strong>  
              A third-party may verify authenticity even without contacting Certif-Scope servers,
              ensuring long-term trust and independence.
            </li>
            <li>
              <strong className="text-[#0B3A63]">3. Unique identifier:</strong>  
              Each document contains a globally unique verification reference (UUID-v4) linked
              to the attestation instance.
            </li>
            <li>
              <strong className="text-[#0B3A63]">4. Transparency-first:</strong>  
              All methods, emission factors and formulas used in calculations are documented and included
              directly in the PDF.
            </li>
          </ul>
        </div>

        {/* RIGHT BLOCK - VERIFICATION WORKFLOW */}
        <div className="p-8 rounded-xl bg-[#F0F7FB] dark:bg-[#0a1a28] shadow-lg border border-blue-200 dark:border-blue-900">

          <h3 className="text-2xl font-semibold text-[#0B3A63] dark:text-white mb-6">
            Verification Workflow
          </h3>

          <ol className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            <li>
              User generates the attestation (PDF).
            </li>
            <li>
              A cryptographic SHA-256 hash is embedded inside the document.
            </li>
            <li>
              A verification URL + QR code is added for automated checks.
            </li>
            <li>
              Any third-party can upload the file to the verification endpoint or perform a local hash comparison.
            </li>
            <li>
              The system confirms:
              <ul className="ml-4 mt-2 list-disc text-gray-600 dark:text-gray-400">
                <li>document integrity (no tampering)</li>
                <li>origin authenticity</li>
                <li>timestamp validity</li>
                <li>cryptographic match</li>
              </ul>
            </li>
          </ol>

        </div>
      </div>

      {/* SECURITY BADGES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow">
          <h4 className="text-lg font-bold text-[#0B3A63] mb-2">SHA-256 Hashing</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Industry-standard hashing ensures any modification becomes instantly detectable.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow">
          <h4 className="text-lg font-bold text-[#0B3A63] mb-2">Tamper-proof integrity</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Integrity check system compares hash values and flags discrepancies immediately.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow">
          <h4 className="text-lg font-bold text-[#0B3A63] mb-2">Independent Verification</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Auditors, banks, insurers and partners can validate authenticity without relying on Certif-Scope’s servers.
          </p>
        </div>

      </div>

      {/* CTA BOX */}
      <div className="mt-16 p-8 rounded-2xl bg-[#0B3A63] text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

        <div>
          <h3 className="text-2xl font-bold mb-2">Verify a Certif-Scope Attestation</h3>
          <p className="text-sm opacity-90">
            Upload a PDF and check authenticity, integrity and timestamp in a few seconds.
          </p>
        </div>

        <a
          href="/verify"
          className="px-6 py-3 bg-white text-[#0B3A63] font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Open Verification Portal
        </a>

      </div>

    </section>
  );
              }
