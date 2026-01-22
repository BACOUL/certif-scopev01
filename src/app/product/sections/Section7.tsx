"use client";

export default function Section7() {
  return (
    <section
      id="limitations-and-fit"
      data-section="limitations-and-fit"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER WITH LEFT ACCENT BAR */}
      <div className="relative p-12 rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full w-2 bg-[#1FB6C1]"
          aria-hidden="true"
        />

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] pl-6"
          data-i18n="s7.title"
        >
          <span className="mr-2">7.</span>
          Limitations & Fit
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed pl-6"
          data-i18n="s7.intro"
        >
          The CO₂e Attestation is intentionally simplified and based exclusively on
          declared financial data. This section defines its scope, appropriate
          usage and limitations to prevent misinterpretation in institutional
          and administrative workflows.
        </p>
      </div>

      {/* WHAT IT IS */}
      <div
        className="mt-16 p-10 rounded-xl bg-[#F8FAFC] border border-[#1FB6C1]/30 shadow-sm"
        data-i18n="s7.what.block"
      >
        <h3
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
          data-i18n="s7.what.title"
        >
          What the Attestation IS
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">
          <li data-i18n="s7.what.point1">
            • An indicative CO₂e estimate derived from declared annual spending
          </li>
          <li data-i18n="s7.what.point2">
            • Deterministic and reproducible for identical inputs
          </li>
          <li data-i18n="s7.what.point3">
            • Standardized for procurement, onboarding and screening workflows
          </li>
          <li data-i18n="s7.what.point4">
            • Issued with built-in integrity and independent verification mechanisms
          </li>
          <li data-i18n="s7.what.point5">
            • Suitable for documentation, comparison and preliminary assessment
          </li>
        </ul>
      </div>

      {/* WHAT IT IS NOT */}
      <div
        className="mt-16 p-10 rounded-xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden"
        data-i18n="s7.not.block"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/30 to-transparent opacity-25" />

        <h3
          className="text-2xl font-semibold mb-4 relative z-10"
          data-i18n="s7.not.title"
        >
          What the Attestation is NOT
        </h3>

        <ul className="space-y-3 text-white/90 text-sm leading-relaxed max-w-4xl relative z-10">
          <li data-i18n="s7.not.point1">
            • Not a CSRD, ESRS or regulatory sustainability disclosure
          </li>
          <li data-i18n="s7.not.point2">
            • Not a full greenhouse gas inventory (Scopes 1, 2 or 3)
          </li>
          <li data-i18n="s7.not.point3">
            • Not an audited carbon footprint, LCA or certification
          </li>
          <li data-i18n="s7.not.point4">
            • Not valid for formal regulatory or statutory reporting
          </li>
          <li data-i18n="s7.not.point5">
            • Not based on physical, operational or metered activity data
          </li>
        </ul>
      </div>

      {/* WHEN IT FITS */}
      <div
        className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10"
        data-i18n="s7.fit.block"
      >
        <div className="lg:col-span-2 p-10 rounded-xl bg-white border border-gray-200 shadow-sm">
          <h3
            className="text-2xl font-semibold text-[#0B3A63] mb-4"
            data-i18n="s7.fit.title"
          >
            When It Fits
          </h3>

          <ul className="space-y-3 text-sm text-gray-700 max-w-4xl leading-relaxed">
            <li data-i18n="s7.fit.point1">
              • Supplier onboarding requiring a basic CO₂e indicator
            </li>
            <li data-i18n="s7.fit.point2">
              • Banking, insurance and credit screening processes
            </li>
            <li data-i18n="s7.fit.point3">
              • Public tenders requesting environmental documentation
            </li>
            <li data-i18n="s7.fit.point4">
              • SMEs without ESG teams or physical data availability
            </li>
            <li data-i18n="s7.fit.point5">
              • Cross-border workflows requiring standardized, multilingual documents
            </li>
          </ul>
        </div>

        <div className="p-10 rounded-xl bg-[#F8FAFC] border border-[#1FB6C1]/30 shadow-sm">
          <h3
            className="text-2xl font-semibold text-[#0B3A63] mb-4"
            data-i18n="s7.fit.quick.title"
          >
            Typical Recipients
          </h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• Procurement and sourcing departments</li>
            <li>• Financial institutions</li>
            <li>• Insurance underwriters</li>
            <li>• Public authorities</li>
            <li>• Corporate compliance teams</li>
          </ul>
        </div>
      </div>

      {/* WHEN NOT TO USE */}
      <div
        className="mt-16 p-10 rounded-xl bg-white border border-gray-200 shadow-md"
        data-i18n="s7.notuse.block"
      >
        <h3
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
          data-i18n="s7.notuse.title"
        >
          When It Should NOT Be Used
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">
          <li data-i18n="s7.notuse.point1">
            • Mandatory CSRD or ESRS reporting
          </li>
          <li data-i18n="s7.notuse.point2">
            • Certified or audited greenhouse gas inventories
          </li>
          <li data-i18n="s7.notuse.point3">
            • Carbon accounting based on physical or metered activity data
          </li>
          <li data-i18n="s7.notuse.point4">
            • Scientific modeling, benchmarking or LCA studies
          </li>
          <li data-i18n="s7.notuse.point5">
            • Marketing or claims requiring verified carbon disclosures
          </li>
        </ul>
      </div>

      {/* FINAL CLARIFICATION */}
      <div
        className="mt-16 p-10 rounded-xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden"
        data-i18n="s7.closing.block"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/20 to-transparent opacity-30" />

        <h3
          className="text-2xl font-semibold mb-4 relative z-10"
          data-i18n="s7.closing.title"
        >
          Final Clarification
        </h3>

        <p
          className="text-white/90 text-sm leading-relaxed max-w-4xl relative z-10"
          data-i18n="s7.closing.text"
        >
          The Attestation provides an indicative CO₂e signal for documentation
          and screening purposes only. Responsibility for interpretation and
          use remains with the recipient. Regulatory reporting, certification
          or audited carbon accounting require dedicated assessments based on
          physical data and applicable standards.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          aria-label="Back to summary"
          data-i18n="s7.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] 
                     text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
            }
