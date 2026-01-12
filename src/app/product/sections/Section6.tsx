"use client";

export default function Section6() {
  return (
    <section
      id="s6"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Premium institutional layout */}
      <div className="relative p-12 rounded-2xl bg-white shadow-lg border border-[#0B3A63]/25">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/10 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          6. How It Works
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope transforms basic financial data into a standardized, institution-ready
          CO₂ attestation using a compliant, automated, and verifiable workflow. The entire
          process is designed to meet the expectations of procurement departments, banks,
          insurers, investors, and public authorities across the European Union.
        </p>
      </div>


      {/* 5-STEP PROCESS — redesigned without overlapping markers */}
      <div className="mt-20 space-y-14">

        {/* STEP 1 */}
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 rounded-full bg-[#15B097] text-white flex items-center justify-center text-xl font-bold shadow-md">
            1
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-[#0B3A63]">
              Provide Business Inputs
            </h3>
            <p className="text-gray-700 mt-3 max-w-3xl">
              Users enter essential financial activity indicators (annual expenses by category).
              No technical or environmental expertise is required. Data entry is validated
              in real time to reduce errors and maintain GDPR-compliant handling.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-3 space-y-1">
              <li>Annual spend categories</li>
              <li>Optional sector adjustments</li>
              <li>Built-in validation rules</li>
            </ul>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 rounded-full bg-[#0B3A63] text-white flex items-center justify-center text-xl font-bold shadow-md">
            2
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-[#0B3A63]">
              Automated Emission Calculation
            </h3>
            <p className="text-gray-700 mt-3 max-w-3xl">
              Certif-Scope applies verified European emissions factors and deterministic
              classification rules. Results are computed instantly using a model aligned with
              widely recognized frameworks to ensure reproducibility and consistency.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-3 space-y-1">
              <li>Uses verified emission factor databases</li>
              <li>Automatic category assignment</li>
              <li>Instant processing (< 30 seconds)</li>
            </ul>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 rounded-full bg-[#15B097] text-white flex items-center justify-center text-xl font-bold shadow-md">
            3
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-[#0B3A63]">
              Generate CO₂ Attestation
            </h3>
            <p className="text-gray-700 mt-3 max-w-3xl">
              A professional PDF is produced instantly, containing all required fields:
              company identifiers, methodology summary, category breakdown, indicators,
              verification code, and timestamp.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-3 space-y-1">
              <li>PDF structured for institutional review</li>
              <li>Clear category breakdown</li>
              <li>Multilingual-ready formatting</li>
            </ul>
          </div>
        </div>

        {/* STEP 4 */}
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 rounded-full bg-[#0B3A63] text-white flex items-center justify-center text-xl font-bold shadow-md">
            4
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-[#0B3A63]">
              Cryptographic Verification Seal
            </h3>
            <p className="text-gray-700 mt-3 max-w-3xl">
              Each document includes a cryptographic hash and unique verification ID. Any
              institution can authenticate the file without contacting Certif-Scope, ensuring
              independence and transparency.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-3 space-y-1">
              <li>Offline verification capability</li>
              <li>Tamper-evident integrity check</li>
              <li>Universally interpretable output</li>
            </ul>
          </div>
        </div>

        {/* STEP 5 */}
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 rounded-full bg-[#15B097] text-white flex items-center justify-center text-xl font-bold shadow-md">
            5
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-[#0B3A63]">
              Institutional Use
            </h3>
            <p className="text-gray-700 mt-3 max-w-3xl">
              The attestation can be submitted directly to banks, insurers, procurement teams,
              public authorities, and investors. It provides an immediate compliance response
              aligned with common European screening workflows.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-3 space-y-1">
              <li>Valid for procurement onboarding</li>
              <li>Recognized in ESG screening</li>
              <li>Supports grant and subsidy applications</li>
            </ul>
          </div>
        </div>
      </div>


      {/* RETURN BUTTON — identical across sections */}
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
