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
          Each CO₂e Attestation is issued with built-in integrity safeguards.
          Its authenticity can be verified independently, without accounts,
          without personal data and without relying on a central registry.
        </p>
      </div>

      {/* CORE PRINCIPLES */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s5.block1.title"
          >
            Issued as a Tamper-Evident Document
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s5.block1.text"
          >
            Each attestation is generated as a final, non-modifiable document.
            Any alteration of its content invalidates its authenticity, ensuring
            that recipients can rely on the document as originally issued.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s5.block2.title"
          >
            Independent Authenticity Verification
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s5.block2.text"
          >
            Authenticity can be verified by third parties using publicly
            available verification information. This process does not require
            user accounts, credentials or access to Certif-Scope systems.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s5.block3.title"
          >
            Unique Attestation Reference ID
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s5.block3.text"
          >
            Each PDF includes a unique attestation reference ID. This identifier
            allows institutions and partners to reference the document clearly
            in procurement files, compliance checks or internal communications.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s5.block4.title"
          >
            Online Convenience, Offline Validity
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s5.block4.text"
          >
            A QR code included in the PDF provides optional access to a public
            explanation page. Verification does not depend on this page and
            remains possible even if the issuer becomes unavailable.
          </p>
        </div>
      </div>

      {/* INTEGRITY SUMMARY */}
      <div className="mt-20 p-10 bg-white rounded-xl border border-[#0B3A63]/15 shadow-sm">
        <h3
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
          data-i18n="s5.summary.title"
        >
          Integrity & Trust Model
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <li data-i18n="s5.summary.item1">
            • Each attestation is issued once and cannot be altered afterwards
          </li>
          <li data-i18n="s5.summary.item2">
            • Verification does not rely on a database or public registry
          </li>
          <li data-i18n="s5.summary.item3">
            • No user accounts, credentials or personal data are required
          </li>
          <li data-i18n="s5.summary.item4">
            • Certif-Scope does not store issued attestations
          </li>
          <li data-i18n="s5.summary.item5">
            • Authenticity remains verifiable over time, independently of the issuer
          </li>
        </ul>
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
