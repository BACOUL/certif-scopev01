"use client";

export default function Section4() {
  return (
    <section
      id="s4"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* TITLE — Standardized across all sections */}
      <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-10">
        4 — Solution Provided
      </h2>

      {/* PREMIUM INTRO BLOCK — distinct design for Section 4 */}
      <div className="p-12 bg-[#F8FAFC] rounded-2xl border border-gray-100 shadow-sm">
        <p className="text-lg text-gray-700 max-w-4xl leading-relaxed">
          Certif-Scope provides an automated, standardized, and institution-ready CO₂
          attestation designed to integrate directly into procurement, banking, insurance,
          auditing and public funding workflows. The platform converts annual financial
          activity into a compliance-ready document using deterministic logic and
          predefined formatting compatible with European review processes.
        </p>
      </div>

      {/* 3-COLUMN SOLUTION STRUCTURE — unique layout for Section 4 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* Column 1 — Data Intake */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            Structured Input
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm mb-4">
            Users provide simplified annual spending categories and optional sector-specific details.
            No expertise in carbon accounting is required. Built-in validation ensures consistency.
          </p>

          <ul className="text-gray-700 text-sm space-y-2">
            <li>• Categorized annual expenditures</li>
            <li>• Automatic validation checks</li>
            <li>• Optional sector modifiers</li>
            <li>• GDPR-compliant handling</li>
          </ul>
        </div>

        {/* Column 2 — Automated Engine */}
        <div className="relative p-8 rounded-xl shadow-md bg-[#0B3A63] text-white overflow-hidden border border-[#15B097]/30">
          {/* Accent gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-30"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-4">Automated Calculation Engine</h3>

            <p className="text-white/90 leading-relaxed text-sm mb-4">
              The system applies deterministic calculation logic using standardized European
              emission factors. The methodology is transparent, reproducible and aligned with
              institutional expectations for auditability.
            </p>

            <ul className="text-white/85 text-sm space-y-2">
              <li>• Verified emission factor dataset</li>
              <li>• Automatic category mapping</li>
              <li>• Real-time processing</li>
              <li>• Reproducible calculations</li>
            </ul>
          </div>
        </div>

        {/* Column 3 — Institution-ready Output */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/40">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            Verified Output
          </h3>

          <p className="text-gray-700 leading-relaxed text-sm mb-4">
            Certif-Scope generates a standardized PDF that includes a cryptographic hash,
            a verification identifier, scope breakdowns and a structured format compatible
            with procurement and financial due diligence workflows.
          </p>

          <ul className="text-gray-700 text-sm space-y-2">
            <li>• Audit-ready PDF file</li>
            <li>• Unique verification identifier</li>
            <li>• Cryptographic integrity seal</li>
            <li>• Offline verification possible</li>
          </ul>
        </div>
      </div>

      {/* FEATURE GRID — 4-box institutional layout */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="p-8 rounded-xl bg-white border border-gray-200 shadow-sm">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-2">Institution-Ready Formatting</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            The output follows a structure recognized by procurement, ESG scoring and
            financial risk departments across Europe.
          </p>
        </div>

        <div className="p-8 rounded-xl bg-[#F8FAFC] border border-[#15B097]/40 shadow-sm">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-2">Independent Verification</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Third parties can authenticate the PDF without contacting Certif-Scope thanks
            to cryptographic integrity and offline verification mechanisms.
          </p>
        </div>

        <div className="p-8 rounded-xl bg-white border border-gray-200 shadow-sm">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-2">Frictionless User Experience</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            The entire process—from data entry to PDF download—takes less than 30 seconds
            with no consultant intervention.
          </p>
        </div>

        <div className="p-8 rounded-xl bg-[#F8FAFC] border border-[#15B097]/40 shadow-sm">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-2">Scalable for Repeat Use</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Once configured, SMEs can regenerate updated attestations anytime without
            additional cost or onboarding.
          </p>
        </div>
      </div>

      {/* FINAL INSTITUTIONAL STRIP */}
      <div className="mt-20 bg-[#0B3A63] text-white p-10 rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-30"></div>

        <h3 className="text-2xl font-bold relative z-10">
          Optimized for European institutional acceptance
        </h3>
        <p className="text-white/90 max-w-4xl mt-3 relative z-10">
          Certif-Scope removes ambiguity, reduces friction and ensures businesses can submit 
          compliant, standardized CO₂ documentation immediately, supporting procurement, 
          banking, compliance and grant applications across Europe.
        </p>
      </div>

      {/* UNIVERSAL RETURN BUTTON — same across all 16 sections */}
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
