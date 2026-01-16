"use client";

export default function Section4() {
  return (
    <section
      id="s4"
      data-section="s4"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="p-12 rounded-2xl bg-white border border-gray-200 shadow-md">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] mb-6"
          data-i18n="s4.title"
        >
          What’s Included in the CO₂e Attestation PDF
        </h2>

        <p
          className="text-lg text-gray-700 leading-relaxed max-w-4xl"
          data-i18n="s4.intro"
        >
          The CO₂e Attestation PDF is structured for procurement, banking, insurance and
          onboarding workflows. It contains all the elements needed for a standardized,
          verifiable and institution-friendly document, without requiring any operational
          data or sustainability expertise.
        </p>
      </div>

      {/* GRID CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">

        {/* BLOCK 1 */}
        <div
          className="p-8 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
          data-i18n="s4.block1"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s4.block1.title">
            1. Summary Indicators
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed mt-3" data-i18n="s4.block1.text">
            A clear summary shows total indicative CO₂e emissions based on the spend-based
            formula. Values are computed deterministically so the same inputs always yield
            the same outputs.
          </p>
        </div>

        {/* BLOCK 2 */}
        <div
          className="p-8 bg-white border border-gray-200 rounded-xl shadow-md"
          data-i18n="s4.block2"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s4.block2.title">
            2. Category Breakdown
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed mt-3" data-i18n="s4.block2.text">
            Spending is processed across predefined categories (e.g. services, goods,
            operations) using a fixed emission factor dataset. Each category includes a
            percentage share and an indicative CO₂e weight.
          </p>
        </div>

        {/* BLOCK 3 */}
        <div
          className="p-8 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
          data-i18n="s4.block3"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s4.block3.title">
            3. Versioned Emission Dataset
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed mt-3" data-i18n="s4.block3.text">
            Every PDF embeds the dataset name + version used for the calculation, ensuring
            auditability and making it easy for institutions to interpret and compare results
            across suppliers.
          </p>
        </div>

        {/* BLOCK 4 */}
        <div
          className="p-8 bg-white border border-gray-200 rounded-xl shadow-md"
          data-i18n="s4.block4"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s4.block4.title">
            4. Verification ID + QR Code
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed mt-3" data-i18n="s4.block4.text">
            The PDF includes a deterministic verification ID and its QR code. Reviewers can
            independently recompute the integrity hash using the displayed input value to
            confirm authenticity — no accounts, no API, no stored data.
          </p>
        </div>

        {/* BLOCK 5 */}
        <div
          className="p-8 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
          data-i18n="s4.block5"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s4.block5.title">
            5. Attestation Metadata
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed mt-3" data-i18n="s4.block5.text">
            The document includes issuance date, time, currency, validity period (1 year),
            input amount (€), and the output CO₂e estimate. This metadata ensures a clear
            compliance trail for procurement or institutional workflows.
          </p>
        </div>

        {/* BLOCK 6 */}
        <div
          className="p-8 bg-white border border-gray-200 rounded-xl shadow-md"
          data-i18n="s4.block6"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s4.block6.title">
            6. Method Summary in the PDF
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed mt-3" data-i18n="s4.block6.text">
            A short paragraph inside the PDF explains the spend-based method, the emission
            factor dataset, and the fact that the attestation is not a CSRD/ESRS report or a
            GHG audit — allowing reviewers to instantly understand the scope.
          </p>
        </div>

      </div>

      {/* FOOTNOTE */}
      <div
        className="mt-20 p-6 bg-[#0B3A63] text-white rounded-xl shadow-md"
        data-i18n="s4.note.block"
      >
        <h4 className="text-xl font-semibold mb-2" data-i18n="s4.note.title">
          Important Note on Institutional Use
        </h4>

        <p className="text-white/90 leading-relaxed" data-i18n="s4.note.text">
          The PDF provides a standardized, verifiable indicator suitable for procurement,
          supplier onboarding, banking due diligence, and insurance pre-assessment, but it
          is not intended for regulatory reporting or audited carbon footprint declarations.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s4.return"
          aria-label="Back to section summary"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
