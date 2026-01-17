"use client";

export default function Section4() {
  return (
    <section
      id="attestation-pdf-contents"
      data-section="attestation-pdf-contents"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER — Soft Blue + subtle gradient */}
      <div className="relative p-12 rounded-2xl bg-[#F0F4F8] border border-[#0B3A63]/15 shadow-md overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="s4.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">4.</span>
          What’s Included in the CO₂e Attestation PDF
        </h2>

        <p
          data-i18n="s4.intro"
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
        >
          The attestation is designed for clear, reliable and institution-ready
          workflows. Each element is structured and standardized to enable
          procurement, banking and insurance teams to review it efficiently.
        </p>
      </div>

      {/* GRID — refined, minimalistic */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s4.block1.title">
            1. Summary Indicators
          </h3>
          <p className="text-sm text-gray-700 mt-3 leading-relaxed" data-i18n="s4.block1.text">
            Displays the total indicative CO₂e emissions based on a standardized,
            spend-based approach.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s4.block2.title">
            2. Category Breakdown
          </h3>
          <p className="text-sm text-gray-700 mt-3 leading-relaxed" data-i18n="s4.block2.text">
            Spending is presented across predefined categories to support review
            and comparison.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s4.block3.title">
            3. Emission Factor Documentation
          </h3>
          <p className="text-sm text-gray-700 mt-3 leading-relaxed" data-i18n="s4.block3.text">
            References the emission factors applied to ensure transparency and
            consistency for institutional review.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s4.block4.title">
            4. Attestation Reference ID & QR Code
          </h3>
          <p className="text-sm text-gray-700 mt-3 leading-relaxed" data-i18n="s4.block4.text">
            Includes a unique reference ID to confirm the attestation’s validity.
            A QR code provides optional access to the public verification page.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s4.block5.title">
            5. Attestation Metadata
          </h3>
          <p className="text-sm text-gray-700 mt-3 leading-relaxed" data-i18n="s4.block5.text">
            Includes issuance date, validity period, declared inputs and
            contextual information required for review.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s4.block6.title">
            6. Method Summary
          </h3>
          <p className="text-sm text-gray-700 mt-3 leading-relaxed" data-i18n="s4.block6.text">
            Provides a concise overview of the spend-based approach and clarifies
            its indicative and non-regulatory scope.
          </p>
        </div>
      </div>

      {/* FOOTNOTE */}
      <div className="mt-20 p-8 rounded-xl bg-[#F0FDFC] border border-[#1FB6C1]/30 shadow-sm">
        <h4 className="text-xl font-semibold text-[#0B3A63] mb-2" data-i18n="s4.note.title">
          Institutional Usage Note
        </h4>

        <p className="text-sm text-gray-700 leading-relaxed max-w-4xl" data-i18n="s4.note.text">
          This document is suitable for procurement, banking reviews and onboarding
          workflows, but not for CSRD/ESRS filings or audited carbon accounting.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63]
                     text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
}
