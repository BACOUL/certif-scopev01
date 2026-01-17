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
          Each CO₂e Attestation is issued with built-in integrity and authenticity
          guarantees. Verification is possible without accounts, without personal
          data, and without relying on a live service. Reviewers can assess validity
          independently, at any time.
        </p>
      </div>

      {/* CORE PRINCIPLES */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s5.block1.title"
          >
            Signed Attestation at Issuance
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s5.block1.text"
          >
            Each attestation is cryptographically signed at the moment of issuance
            by Certif-Scope. This signature guarantees that the document has not been
            altered since it was issued.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s5.block2.title"
          >
            Public Verification Key
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s5.block2.text"
          >
            The corresponding public verification key is published and remains
            accessible over time. Any third party can use this key to verify the
            authenticity of an attestation independently.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s5.block3.title"
          >
            Online Verification for Convenience
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s5.block3.text"
          >
            A QR code included in the PDF provides optional access to a public
            verification page. This page simplifies checks but is not required
            for the validity of the attestation.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s5.block4.title"
          >
            Offline & Long-Term Verification
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s5.block4.text"
          >
            Verification does not depend on a user account, a database, or a
            running Certif-Scope service. Attestations remain verifiable using
            the published public key, even if the issuer is no longer active.
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
            • Attestations are signed once and never modified
          </li>
          <li data-i18n="s5.summary.item2">
            • Verification is possible without accounts or credentials
          </li>
          <li data-i18n="s5.summary.item3">
            • No personal, financial, or operational data is stored
          </li>
          <li data-i18n="s5.summary.item4">
            • Validity does not depend on Certif-Scope availability
          </li>
          <li data-i18n="s5.summary.item5">
            • Designed for institutional review and automated checks
          </li>
        </ul>
      </div>
    </section>
  );
}
