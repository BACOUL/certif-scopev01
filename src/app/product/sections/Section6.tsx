"use client";

export default function Section6() {
  return (
    <section
      id="s6"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-[#0B3A63]">
          How It Works
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mt-4">
          Certif-Scope converts simplified business spending data into a standardized,
          verifiable CO₂ attestation using a fully automated and reproducible methodology.
          The process is designed for institutional workflows, ensuring compliance,
          traceability and transparency.
        </p>
      </div>

      {/* PREMIUM VERTICAL TIMELINE */}
      <div className="relative pl-12 mt-16">

        {/* Vertical line */}
        <div className="absolute top-0 left-4 w-[3px] h-full bg-[#15B097]/40 rounded-full"></div>

        {/* STEP 1 */}
        <div className="relative mb-14">
          <div className="absolute left-[0.55rem] top-2 w-4 h-4 bg-[#15B097] rounded-full border-2 border-white shadow"></div>
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            Step 1 — Provide Business Inputs
          </h3>
          <p className="text-gray-700 mt-3 max-w-3xl">
            Users enter simplified annual spending information categorized by activity type.
            The interface includes automated validation and GDPR-compliant data handling.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Annual spend categories</li>
            <li>• Optional sector adjustments</li>
            <li>• Automatic consistency checks</li>
          </ul>
        </div>

        {/* STEP 2 */}
        <div className="relative mb-14">
          <div className="absolute left-[0.55rem] top-2 w-4 h-4 bg-[#15B097] rounded-full border-2 border-white shadow"></div>
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            Step 2 — Automated Carbon Calculation
          </h3>
          <p className="text-gray-700 mt-3 max-w-3xl">
            Certif-Scope applies recognized European emission factors using a deterministic,
            spend-based methodology ensuring reproducible and fully transparent results.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Verified emission factor database</li>
            <li>• GHG Protocol spend-based alignment</li>
            <li>• Real-time processing</li>
          </ul>
        </div>

        {/* STEP 3 */}
        <div className="relative mb-14">
          <div className="absolute left-[0.55rem] top-2 w-4 h-4 bg-[#15B097] rounded-full border-2 border-white shadow"></div>
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            Step 3 — Generate CO₂ Attestation
          </h3>
          <p className="text-gray-700 mt-3 max-w-3xl">
            The system generates a standardized, institution-ready PDF including scopes,
            methodology summary and sector classification.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Professional, compliant PDF layout</li>
            <li>• Scope 1 / 2 / 3 emission indicators</li>
            <li>• Standardized methodology section</li>
          </ul>
        </div>

        {/* STEP 4 */}
        <div className="relative mb-14">
          <div className="absolute left-[0.55rem] top-2 w-4 h-4 bg-[#15B097] rounded-full border-2 border-white shadow"></div>
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            Step 4 — Cryptographic Verification Seal
          </h3>
          <p className="text-gray-700 mt-3 max-w-3xl">
            Each attestation includes a cryptographic hash and a verification ID enabling
            third-party validation without needing Certif-Scope servers.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Offline verification capability</li>
            <li>• Independent authenticity check</li>
            <li>• Immutable verification identifier</li>
          </ul>
        </div>

        {/* STEP 5 */}
        <div className="relative mb-14">
          <div className="absolute left-[0.55rem] top-2 w-4 h-4 bg-[#15B097] rounded-full border-2 border-white shadow"></div>
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            Step 5 — Institutional Use & Compliance
          </h3>
          <p className="text-gray-700 mt-3 max-w-3xl">
            The attestation meets the documentary expectations of banks, procurement teams,
            insurers and risk evaluators across Europe.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Accepted for onboarding workflows</li>
            <li>• Suitable for ESG checklists</li>
            <li>• Reliable for due diligence processes</li>
          </ul>
        </div>

      </div>

      {/* INFO STRIP */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097] rounded-xl shadow-sm">
        <h4 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Fully Automated, Fully Transparent
        </h4>
        <p className="text-gray-700 max-w-4xl">
          Certif-Scope combines automation, European regulatory alignment and cryptographic
          integrity to provide a credible CO₂ attestation without manual intervention.
        </p>
      </div>

      {/* RETURN BUTTON — IDENTICAL */}
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
