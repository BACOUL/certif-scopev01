"use client";

export default function Section5() {
  return (
    <section
      id="s5"
      data-section="s5"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — DUAL COLOR BAND */}
      <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-xl overflow-hidden">
        
        {/* diagonal accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1FB6C1]/20 skew-x-12" />

        <h2
          data-i18n="s5.title"
          className="text-4xl md:text-5xl font-extrabold relative z-10"
        >
          Verification & Integrity
        </h2>

        <p
          data-i18n="s5.intro"
          className="text-white/90 text-lg max-w-4xl mt-6 leading-relaxed relative z-10"
        >
          The CO₂e Attestation relies on a deterministic and transparent integrity system.
          Validation is possible online or offline, without accounts, logins or stored
          data. Every reviewer can recompute authenticity independently.
        </p>
      </div>

      {/* TWO-COLUMN LAYOUT WITH ASYMMETRY */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT COLUMN (two stacked blocks) */}
        <div className="lg:col-span-2 space-y-10">

          {/* BLOCK 1 */}
          <div
            className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
            data-i18n="s5.block1"
          >
            <h3
              data-i18n="s5.block1.title"
              className="text-2xl font-bold text-[#0B3A63] mb-3"
            >
              Deterministic Integrity Hash
            </h3>
            <p
              data-i18n="s5.block1.text"
              className="text-gray-700 text-sm leading-relaxed"
            >
              A SHA-256 hash is computed using only the input amount (€) and the versioned
              emission dataset. This allows any reviewer to recompute the exact integrity
              value and confirm that the PDF has not been altered.
            </p>
          </div>

          {/* BLOCK 2 */}
          <div
            className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#1FB6C1]/40"
            data-i18n="s5.block2"
          >
            <h3
              data-i18n="s5.block2.title"
              className="text-2xl font-bold text-[#0B3A63] mb-3"
            >
              Unique Verification ID
            </h3>
            <p
              data-i18n="s5.block2.text"
              className="text-gray-700 text-sm leading-relaxed"
            >
              The Verification ID is derived from the same cryptographic process. It allows
              procurement teams and institutions to validate the document instantly —
              even when handling large volumes of suppliers.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN — Highlighted Block */}
        <div
          className="p-8 bg-[#1FB6C1] text-white rounded-xl shadow-lg"
          data-i18n="s5.highlight"
        >
          <h3
            data-i18n="s5.highlight.title"
            className="text-2xl font-bold mb-3"
          >
            QR-Based Verification
          </h3>
          <p
            data-i18n="s5.highlight.text"
            className="text-white/90 text-sm leading-relaxed"
          >
            Each PDF includes a QR code pointing to the verification metadata. Institutions
            can validate authenticity instantly without logging in or requesting support.
          </p>
        </div>
      </div>

      {/* OFFLINE VERIFICATION BLOCK */}
      <div
        data-i18n="s5.block4"
        className="mt-16 p-10 bg-white rounded-xl border border-gray-200 shadow-md"
      >
        <h3
          data-i18n="s5.block4.title"
          className="text-2xl font-bold text-[#0B3A63] mb-3"
        >
          Offline Verification Capability
        </h3>

        <p
          data-i18n="s5.block4.text"
          className="text-gray-700 text-sm leading-relaxed max-w-4xl"
        >
          Because no database lookup is required, reviewers can recompute the hash locally
          using the printed values. This makes the attestation resilient, portable,
          long-term verifiable and independent from any service availability.
        </p>
      </div>

      {/* TECHNICAL BOX — PREMIUM */}
      <div
        data-i18n="s5.technical"
        className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-[#0B3A63]/25 shadow-sm"
      >
        <h3
          data-i18n="s5.technical.title"
          className="text-2xl font-bold text-[#0B3A63] mb-4"
        >
          Cryptographic Model Summary
        </h3>

        <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
          <li data-i18n="s5.technical.item1">• Algorithm: SHA-256 deterministic function</li>
          <li data-i18n="s5.technical.item2">• Inputs: amount (€) + dataset version</li>
          <li data-i18n="s5.technical.item3">• No personal data or operations data</li>
          <li data-i18n="s5.technical.item4">• Stateless: no server lookup required</li>
          <li data-i18n="s5.technical.item5">• Fully reproducible across systems</li>
        </ul>

        <p
          data-i18n="s5.technical.note"
          className="mt-6 text-gray-700 text-sm leading-relaxed max-w-4xl"
        >
          This approach aligns with compliance expectations for transparent, independently
          verifiable documentation in procurement and due-diligence workflows.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s5.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63]
                     text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
    }
