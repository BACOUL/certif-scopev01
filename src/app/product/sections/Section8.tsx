export default function Section8() {
  return (
    <section
      id="s8"
      className="scroll-mt-24 py-32 bg-white dark:bg-gray-900"
    >

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-20">
        <h2 className="text-4xl font-extrabold text-[#0B3A63]">
          Security & Verification
        </h2>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Certif-Scope ensures integrity, authenticity and long-term verifiability
          through cryptographic hashing, standardized structure and independent validation,
          enabling institutions to check reports without contacting us.
        </p>
      </div>

      {/* SECURITY BANNER */}
      <div className="w-full bg-[#0B3A63] text-white py-14 shadow-lg mb-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Cryptographically Secure. Independently Verifiable.
          </h3>
          <p className="text-base opacity-90 leading-relaxed max-w-3xl mx-auto">
            Every attestation includes a unique verification ID and SHA-256 integrity hash.
            Any institution can validate the document offline using standard tools.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT PANEL — VERIFICATION STEPS */}
        <div className="md:col-span-2 bg-[#F8FAFC] dark:bg-gray-800 p-10 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h4 className="text-2xl font-bold text-[#0B3A63] mb-8">
            Verification Procedure
          </h4>

          <div className="space-y-8">

            {/* STEP 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#47B39C]/20 text-[#47B39C] font-bold text-lg">
                1
              </div>
              <div>
                <h5 className="text-lg font-semibold text-[#0B3A63]">
                  Extract hash & metadata
                </h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  The attestation PDF or JSON file contains a verification block with:
                  <br/>• SHA-256 hash  
                  <br/>• verification ID  
                  <br/>• timestamp  
                  <br/>• methodology reference  
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#47B39C]/20 text-[#47B39C] font-bold text-lg">
                2
              </div>
              <div>
                <h5 className="text-lg font-semibold text-[#0B3A63]">
                  Compute local hash
                </h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  Use any standard tool (OpenSSL, Linux checksum, PowerShell, online hash calculator)
                  to compute the document’s SHA-256 fingerprint locally.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#47B39C]/20 text-[#47B39C] font-bold text-lg">
                3
              </div>
              <div>
                <h5 className="text-lg font-semibold text-[#0B3A63]">
                  Compare results
                </h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  If the locally computed hash matches the hash printed in the attestation,
                  the document is confirmed authentic and unaltered.
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#47B39C]/20 text-[#47B39C] font-bold text-lg">
                4
              </div>
              <div>
                <h5 className="text-lg font-semibold text-[#0B3A63]">
                  Validate timestamps & issuer
                </h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  Each file includes a generation timestamp and issuer signature metadata,
                  ensuring that the report was produced by our certified generation engine.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT PANEL — COMPLIANCE */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h4 className="text-xl font-bold text-[#0B3A63] mb-6">
            Compliance Standards
          </h4>

          <ul className="space-y-5 text-sm text-gray-700 dark:text-gray-300">

            <li className="border-l-4 border-[#47B39C] pl-4">
              <span className="font-semibold text-[#0B3A63]">SHA-256 integrity hashing</span><br/>
              Ensures the document cannot be modified without detection.
            </li>

            <li className="border-l-4 border-[#47B39C] pl-4">
              <span className="font-semibold text-[#0B3A63]">ISO-aligned methodology structure</span><br/>
              Report format follows international reporting patterns for auditability.
            </li>

            <li className="border-l-4 border-[#47B39C] pl-4">
              <span className="font-semibold text-[#0B3A63]">Independent offline verification</span><br/>
              No internet access or API call is required to validate authenticity.
            </li>

            <li className="border-l-4 border-[#47B39C] pl-4">
              <span className="font-semibold text-[#0B3A63]">Tamper-proof metadata</span><br/>
              Verification block embeds timestamp, source and emission factors version.
            </li>

          </ul>
        </div>
      </div>

      {/* RETURN BUTTON */}
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
