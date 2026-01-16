"use client";

export default function Section5() {
  return (
    <section
      id="s5"
      data-section="s5"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="p-12 rounded-2xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent opacity-20 pointer-events-none"
          aria-hidden="true"
        />
        <h2
          className="text-4xl md:text-5xl font-extrabold relative z-10"
          data-i18n="s5.title"
        >
          Verification & Integrity
        </h2>

        <p
          className="text-white/90 text-lg max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="s5.intro"
        >
          The CO₂e Attestation includes a deterministic integrity system that allows reviewers
          to confirm authenticity instantly — with or without internet access. No database,
          no login and no stored input data are required. The verification mechanism is based
          entirely on transparent, reproducible cryptography.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">

        {/* BLOCK 1 */}
        <div
          className="p-8 bg-white border border-gray-200 rounded-xl shadow-md"
          data-i18n="s5.block1"
        >
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s5.block1.title"
          >
            Deterministic Integrity Hash
          </h3>
          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s5.block1.text"
          >
            The Attestation embeds a cryptographic hash computed from the input amount (€)
            and the versioned emission dataset. Because the hash is deterministic, any reviewer
            can recompute it independently and confirm it matches the value printed inside the PDF.
          </p>
        </div>

        {/* BLOCK 2 */}
        <div
          className="p-8 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
          data-i18n="s5.block2"
        >
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s5.block2.title"
          >
            Unique Verification ID
          </h3>
          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s5.block2.text"
          >
            Each PDF includes a Verification ID derived from the same hashing process.
            This ID allows procurement teams, banks or insurers to validate the document instantly,
            even when reviewing hundreds of suppliers.
          </p>
        </div>

        {/* BLOCK 3 */}
        <div
          className="p-8 bg-white border border-gray-200 rounded-xl shadow-md"
          data-i18n="s5.block3"
        >
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s5.block3.title"
          >
            QR-Based Verification
          </h3>
          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s5.block3.text"
          >
            A QR code inside the PDF links directly to the verification page. Institutions can
            scan the QR and view the attestation metadata instantly. No account or login is
            required; the verification process is fully public and transparent.
          </p>
        </div>

        {/* BLOCK 4 */}
        <div
          className="p-8 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
          data-i18n="s5.block4"
        >
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s5.block4.title"
          >
            Optional Offline Verification
          </h3>
          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s5.block4.text"
          >
            Reviewers can validate the PDF without internet access by recomputing the integrity
            hash locally using the printed input value and dataset version. This makes the
            attestation resilient, portable and independent of the service.
          </p>
        </div>

      </div>

      {/* SEPARATOR */}
      <div className="mt-20 w-full h-[2px] bg-gray-200" />

      {/* TECHNICAL BOX */}
      <div
        className="mt-10 p-10 bg-white border border-[#0B3A63]/20 rounded-xl shadow-md"
        data-i18n="s5.technical.block"
      >
        <h3
          className="text-2xl font-bold text-[#0B3A63] mb-4"
          data-i18n="s5.technical.title"
        >
          Cryptographic Model Summary
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <li data-i18n="s5.technical.item1">
            • Hash algorithm: SHA-256 deterministic function
          </li>
          <li data-i18n="s5.technical.item2">
            • Inputs: annual spending (€) + emission factor dataset version
          </li>
          <li data-i18n="s5.technical.item3">
            • No personal or operational data included
          </li>
          <li data-i18n="s5.technical.item4">
            • No server-side data storage or lookup required
          </li>
          <li data-i18n="s5.technical.item5">
            • Output is consistent across systems and reviewers
          </li>
        </ul>

        <p
          className="mt-6 text-sm text-gray-700 leading-relaxed"
          data-i18n="s5.technical.note"
        >
          This verification method is intentionally simple, transparent and reproducible by
          third parties, aligning with best practices for compliance documentation.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          aria-label="Back to section summary"
          data-i18n="s5.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
