"use client";

export default function Section4() {
  return (
    <section
      id="s4"
      data-section="s4"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — BLUE BAND + ACCENT SIDEBAR */}
      <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-xl overflow-hidden">

        {/* vertical accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#1FB6C1]" />

        <h2
          className="text-4xl md:text-5xl font-extrabold mb-6 ml-6"
          data-i18n="s4.title"
        >
          What’s Included in the CO₂e Attestation PDF
        </h2>

        <p
          data-i18n="s4.intro"
          className="ml-6 text-white/90 text-lg max-w-4xl leading-relaxed"
        >
          The attestation is built for real institutional workflows: procurement, banking,
          insurance, supplier onboarding and due-diligence reviews. It includes structured,
          deterministic and verification-ready components designed for clarity and trust.
        </p>
      </div>

      {/* GRID — ALTERNATING STYLES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">

        {/* BLOCK 1 — WHITE */}
        <div
          className="p-8 rounded-xl bg-white border border-gray-200 shadow-md"
          data-i18n="s4.block1"
        >
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3" data-i18n="s4.block1.title">
            1. Summary Indicators
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed" data-i18n="s4.block1.text">
            Displays the total indicative CO₂e emissions calculated via the spend-based
            method. The value is deterministic, ensuring the same input always leads to
            the same output.
          </p>
        </div>

        {/* BLOCK 2 — LIGHT BLUE */}
        <div
          className="p-8 rounded-xl bg-[#F8FAFC] border border-[#1FB6C1]/40 shadow-md"
          data-i18n="s4.block2"
        >
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3" data-i18n="s4.block2.title">
            2. Category Breakdown
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed" data-i18n="s4.block2.text">
            Spending is classified into predefined categories (goods, services, operations),
            each associated with version-controlled emission factors, allowing consistent
            comparison across suppliers.
          </p>
        </div>

        {/* BLOCK 3 — WHITE */}
        <div
          className="p-8 rounded-xl bg-white border border-gray-200 shadow-md"
          data-i18n="s4.block3"
        >
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3" data-i18n="s4.block3.title">
            3. Versioned Emission Dataset
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed" data-i18n="s4.block3.text">
            The PDF embeds the dataset name + version used in the computation. This ensures
            verifiability, transparency and reproducibility — essential for institutional audits.
          </p>
        </div>

        {/* BLOCK 4 — LIGHT BLUE */}
        <div
          className="p-8 rounded-xl bg-[#F8FAFC] border border-[#1FB6C1]/40 shadow-md"
          data-i18n="s4.block4"
        >
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3" data-i18n="s4.block4.title">
            4. Verification ID + QR Code
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed" data-i18n="s4.block4.text">
            Includes a deterministic hash and a QR code. Reviewers can recompute validation
            offline without accounts, API calls, database lookups or backend dependencies.
          </p>
        </div>

        {/* BLOCK 5 — WHITE */}
        <div
          className="p-8 rounded-xl bg-white border border-gray-200 shadow-md"
          data-i18n="s4.block5"
        >
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3" data-i18n="s4.block5.title">
            5. Attestation Metadata
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed" data-i18n="s4.block5.text">
            Includes issuance date, time, currency, validity period (1 year), input amount
            and resulting CO₂e value. This provides a traceable compliance record.
          </p>
        </div>

        {/* BLOCK 6 — LIGHT BLUE */}
        <div
          className="p-8 rounded-xl bg-[#F8FAFC] border border-[#1FB6C1]/40 shadow-md"
          data-i18n="s4.block6"
        >
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3" data-i18n="s4.block6.title">
            6. Method Summary in the PDF
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed" data-i18n="s4.block6.text">
            A short explanation clarifies that the attestation is spend-based, not a CSRD/ESRS
            disclosure, and not an audited GHG inventory, allowing reviewers to understand
            scope and limitations immediately.
          </p>
        </div>
      </div>

      {/* FOOTNOTE — GREEN BAND */}
      <div
        className="mt-20 p-8 rounded-xl bg-[#1FB6C1] text-white shadow-lg"
        data-i18n="s4.note.block"
      >
        <h4 className="text-xl font-semibold mb-3" data-i18n="s4.note.title">
          Important Note on Institutional Use
        </h4>

        <p
          className="text-white/90 leading-relaxed max-w-4xl"
          data-i18n="s4.note.text"
        >
          The PDF is suitable for procurement, banking due-diligence, onboarding and
          compliance screening. It is not intended for CSRD/ESRS reporting, certified
          carbon footprints or lifecycle assessments.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s4.return"
          aria-label="Back to summary"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63]
                     text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
        }
