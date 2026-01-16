"use client";

export default function Section5() {
  return (
    <section
      id="verification-and-integrity"
      data-section="verification-and-integrity"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER — Institutional Blue */}
      <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-md overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/90 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="s5.title"
          className="text-4xl md:text-5xl font-extrabold relative z-10"
        >
          <span className="mr-2">5.</span>
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

      {/* CORE PRINCIPLES */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
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
            The attestation embeds a cryptographic hash computed from the declared
            input amount (€) and the versioned emission dataset. The same inputs
            always generate the same output.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s5.block2.title"
          >
            Unique Verification Identifier
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s5.block2.text"
          >
            Each PDF includes a verification ID derived from the integrity hash.
            This identifier allows institutions to quickly confirm authenticity
            during review or onboarding.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s5.block3.title"
          >
            QR-Based Online Verification
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s5.block3.text"
          >
            The QR code printed in the PDF links to a public verification page.
            No login or account is required. Reviewers can access the verification
            data instantly.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s5.block4.title"
          >
            Offline Verification Capability
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s5.block4.text"
          >
            Institutions can verify the attestation without internet access by
            recomputing the hash locally using the visible inputs and dataset version.
          </p>
        </div>
      </div>

      {/* TECHNICAL SUMMARY */}
      <div className="mt-20 p-10 bg-white rounded-xl border border-[#0B3A63]/15 shadow-sm">
        <h3
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
          data-i18n="s5.technical.title"
        >
          Technical Integrity Model
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <li data-i18n="s5.technical.item1">• Deterministic SHA-256 hashing</li>
          <li data-i18n="s5.technical.item2">• Inputs: spending (€) + dataset version</li>
          <li data-i18n="s5.technical.item3">• No personal or operational data</li>
          <li data-i18n="s5.technical.item4">• No server-side data storage required</li>
          <li data-i18n="s5.technical.item5">• Reproducible by third parties</li>
        </ul>
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
