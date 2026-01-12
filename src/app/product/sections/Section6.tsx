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
          Certif-Scope transforms raw financial activity into a standardized, compliant,
          and verifiable CO₂ attestation in minutes. The full process is automated,
          transparent and aligned with institutional review expectations across Europe.
        </p>
      </div>

      {/* TIMELINE — PREMIUM VERTICAL FLOW */}
      <div className="relative pl-10 mt-16">

        {/* Vertical line */}
        <div className="absolute top-0 left-4 w-1 h-full bg-[#15B097]/30 rounded-full"></div>

        {/* STEP 1 */}
        <div className="relative mb-14">
          <div className="absolute -left-1 top-1.5 w-6 h-6 bg-[#15B097] rounded-full shadow-md"></div>
          <h3 className="text-2xl font-semibold text-[#0B3A63]">Step 1 — Provide Business Inputs</h3>
          <p className="text-gray-700 mt-3 max-w-3xl">
            Users enter simplified annual spending data, categorized by activity type.
            No expertise in carbon accounting is required. The interface includes validation
            checks and ensures GDPR-compliant handling of sensitive information.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Annual spend categories</li>
            <li>• Optional sector-specific adjustments</li>
            <li>• Automatic data consistency checks</li>
          </ul>
        </div>

        {/* STEP 2 */}
        <div className="relative mb-14">
          <div className="absolute -left-1 top-1.5 w-6 h-6 bg-[#15B097] rounded-full shadow-md"></div>
          <h3 className="text-2xl font-semibold text-[#0B3A63]">Step 2 — Automated Carbon Calculation</h3>
          <p className="text-gray-700 mt-3 max-w-3xl">
            Certif-Scope applies recognized European emission factors and spend-based methodology.
            The engine uses deterministic rules ensuring reproducibility and transparency for audit purposes.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Verified emission factor database</li>
            <li>• Spend-based GHG Protocol alignment</li>
            <li>• Real-time automated processing</li>
          </ul>
        </div>

        {/* STEP 3 */}
        <div className="relative mb-14">
          <div className="absolute -left-1 top-1.5 w-6 h-6 bg-[#15B097] rounded-full shadow-md"></div>
          <h3 className="text-2xl font-semibold text-[#0B3A63]">Step 3 — Generate CO₂ Attestation</h3>
          <p className="text-gray-700 mt-3 max-w-3xl">
            A standardized, institution-ready PDF is created instantly, including emission results,
            detailed methodology, and sector classification. The document is formatted for compliance teams.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Professional, consistent PDF layout</li>
            <li>• Scope indicators & methodology summary</li>
            <li>• Contact & identification fields included</li>
          </ul>
        </div>

        {/* STEP 4 */}
        <div className="relative mb-14">
          <div className="absolute -left-1 top-1.5 w-6 h-6 bg-[#15B097] rounded-full shadow-md"></div>
          <h3 className="text-2xl font-semibold text-[#0B3A63]">Step 4 — Cryptographic Verification Seal</h3>
          <p className="text-gray-700 mt-3 max-w-3xl">
            The PDF includes a unique verification identifier and a cryptographic hash
            that enables third-party validation without relying on Certif-Scope’s servers.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• One-click authenticity check</li>
            <li>• Offline verification capability</li>
            <li>• No external dependency required</li>
          </ul>
        </div>

        {/* STEP 5 */}
        <div className="relative mb-14">
          <div className="absolute -left-1 top-1.5 w-6 h-6 bg-[#15B097] rounded-full shadow-md"></div>
          <h3 className="text-2xl font-semibold text-[#0B3A63]">Step 5 — Institutional Use & Compliance</h3>
          <p className="text-gray-700 mt-3 max-w-3xl">
            The attestation can be submitted directly to banks, procurement departments,
            insurers, grant programs and compliance teams across Europe.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Valid for onboarding workflows</li>
            <li>• Accepted in ESG checklists</li>
            <li>• Supports due diligence documentation</li>
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
          The workflow is designed for clarity, speed and institutional trust.
        </p>
      </div>

      {/* RETURN BUTTON — IDENTICAL ACROSS ALL SECTIONS */}
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
