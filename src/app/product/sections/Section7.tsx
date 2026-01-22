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
          This section defines the precise scope, appropriate use cases and
          limitations of the CO₂e Attestation. Its purpose is to prevent any
          misinterpretation in institutional, administrative or compliance
          contexts.
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
            • An indicative and standardized CO₂e indicator
          </li>
          <li data-i18n="s7.what.point2">
            • Deterministic and reproducible for identical declarations
          </li>
          <li data-i18n="s7.what.point3">
            • Structured for procurement, onboarding and screening workflows
          </li>
          <li data-i18n="s7.what.point4">
            • Issued with integrity safeguards and independent verification
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
            • Not a greenhouse gas inventory (Scopes 1, 2 or 3)
          </li>
          <li data-i18n="s7.not.point3">
            • Not an audited carbon footprint, certification or LCA
          </li>
          <li data-i18n="s7.not.point4">
            • Not valid for statutory or regulatory filings
          </li>
          <li data-i18n="s7.not.point5">
            • Not a substitute for expert or scientific carbon analysis
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
              • Supplier onboarding requiring a basic environmental indicator
            </li>
            <li data-i18n="s7.fit.point2">
              • Banking, insurance and credit screening processes
            </li>
            <li data-i18n="s7.fit.point3">
              • Public tenders requesting standardized documentation
            </li>
            <li data-i18n="s7.fit.point4">
              • Organizations without internal ESG teams
            </li>
            <li data-i18n="s7.fit.point5">
              • Cross-border workflows requiring clear, comparable documents
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
            <li>• Procurement and sourcing teams</li>
            <li>• Financial institutions</li>
            <li>• Insurance underwriters</li>
            <li>• Public authorities</li>
            <li>• Corporate compliance functions</li>
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
            • Carbon accounting based on physical activity data
          </li>
          <li data-i18n="s7.notuse.point4">
            • Scientific modeling or lifecycle assessments
          </li>
          <li data-i18n="s7.notuse.point5">
            • Public marketing or claims requiring verified disclosures
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
          The CO₂e Attestation provides a standardized, indicative signal intended
          for documentation and screening purposes only. Responsibility for
          interpretation and use rests with the recipient. Regulatory reporting,
          certification or audited carbon accounting require dedicated
          assessments conducted under applicable standards.
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
