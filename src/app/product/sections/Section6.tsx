"use client";

export default function Section6() {
  return (
    <section
      id="s6"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* SECTION TITLE — standard format across all sections */}
      <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-12">
        6 — How It Works
      </h2>

      {/* UNIQUE DESIGN: Horizontal Step Cards — modern institutional style */}
      <div className="space-y-10">

        {/* STEP 1 */}
        <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-10 shadow-sm flex flex-col md:flex-row gap-8 items-start">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#15B097] text-white text-2xl font-bold shrink-0">
            1
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
              Provide Business Inputs
            </h3>
            <p className="text-gray-700 max-w-3xl leading-relaxed">
              Users enter simplified annual spending values, categorized by activity type.  
              No carbon expertise is required — the interface validates entries automatically 
              and ensures GDPR-compliant handling of sensitive information.
            </p>
            <ul className="mt-3 text-sm text-gray-700 space-y-1">
              <li>• Annual spend categories</li>
              <li>• Optional sector adjustments</li>
              <li>• Automatic data validation</li>
            </ul>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="bg-white border border-[#15B097]/30 rounded-2xl p-10 shadow-md flex flex-col md:flex-row gap-8 items-start">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#0B3A63] text-white text-2xl font-bold shrink-0">
            2
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
              Automated Carbon Calculation
            </h3>
            <p className="text-gray-700 max-w-3xl leading-relaxed">
              Certif-Scope applies standardized European emission factors and a recognized 
              spend-based calculation model. Processing is instant, deterministic and built 
              for independent verification.
            </p>
            <ul className="mt-3 text-sm text-gray-700 space-y-1">
              <li>• Verified emission factors</li>
              <li>• Consistent processing logic</li>
              <li>• Real-time generation</li>
            </ul>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-10 shadow-sm flex flex-col md:flex-row gap-8 items-start">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#15B097] text-white text-2xl font-bold shrink-0">
            3
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
              Generate CO₂ Attestation
            </h3>
            <p className="text-gray-700 max-w-3xl leading-relaxed">
              A standardized, institution-ready PDF is produced instantly. It includes category 
              breakdowns, scope indicators and a clear classification for institutional workflows.
            </p>
            <ul className="mt-3 text-sm text-gray-700 space-y-1">
              <li>• Professional PDF formatting</li>
              <li>• Scope indicators included</li>
              <li>• Structured institutional layout</li>
            </ul>
          </div>
        </div>

        {/* STEP 4 */}
        <div className="bg-white border border-[#15B097]/30 rounded-2xl p-10 shadow-md flex flex-col md:flex-row gap-8 items-start">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#0B3A63] text-white text-2xl font-bold shrink-0">
            4
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
              Cryptographic Verification Seal
            </h3>
            <p className="text-gray-700 max-w-3xl leading-relaxed">
              Each attestation contains a cryptographic integrity seal and verification 
              identifier enabling offline authentication, without relying on external servers.
            </p>
            <ul className="mt-3 text-sm text-gray-700 space-y-1">
              <li>• Integrity hash embedded</li>
              <li>• Offline validation path</li>
              <li>• No server dependency</li>
            </ul>
          </div>
        </div>

        {/* STEP 5 */}
        <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-10 shadow-sm flex flex-col md:flex-row gap-8 items-start">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#15B097] text-white text-2xl font-bold shrink-0">
            5
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
              Institutional Use & Compliance
            </h3>
            <p className="text-gray-700 max-w-3xl leading-relaxed">
              The attestation can be submitted directly to banks, procurement departments, 
              insurers and funding programs across Europe as part of onboarding or documentary compliance.
            </p>
            <ul className="mt-3 text-sm text-gray-700 space-y-1">
              <li>• Procurement uploads</li>
              <li>• Banking risk files</li>
              <li>• Insurance eligibility checks</li>
            </ul>
          </div>
        </div>
      </div>

      {/* INFO STRIP — institutional tone */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-30"></div>

        <h3 className="text-2xl font-bold relative z-10">
          Fully Automated, Fully Trusted
        </h3>
        <p className="text-white/90 max-w-4xl mt-3 leading-relaxed relative z-10">
          Certif-Scope combines automation, data validation and cryptographic integrity to deliver 
          instant, standardized and verifiable CO₂ attestations aligned with institutional 
          expectations across Europe.
        </p>
      </div>

      {/* RETURN BUTTON — identical across all sections */}
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
