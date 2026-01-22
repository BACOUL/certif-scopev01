"use client";

export default function Section5() {
  return (
    <section
      id="verification-and-integrity"
      data-section="verification-and-integrity"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER — INSTITUTIONAL TRUST BLOCK */}
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

        {/* SCOPE BOUNDARY — CANONICAL */}
        <p
          data-i18n="s5.scope"
          className="text-white/80 text-sm max-w-4xl mt-4 leading-relaxed relative z-10"
        >
          This section describes how the authenticity and integrity of the
          delivered document can be verified. It does not describe the
          calculation methodology.
        </p>

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
            Tamper-Evident Issuance
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s5.block1.text"
          >
            Each attestation is issued as a final document whose integrity can be
            verified. Any modification of the document after issuance invalidates
            its authenticity.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s5.block2.title"
          >
            Independent Verification
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s5.block2.text"
          >
            Authenticity can be verified by any third party using publicly
            available verification information, without accounts, credentials
            or access to internal systems.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s5.block3.title"
          >
            Unique Attestation Reference
          </h3>

          <p
            className="mt-3 text-gray-700 text-sm leading-relaxed"
            data-i18n="s5.block3.text"
          >
            Each PDF includes a unique reference identifier, enabling precise
            citation, traceability and communication in procurement, banking or
            compliance contexts.
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
            A QR code provides optional access to a public explanation page.
            Verification remains possible offline and does not depend on the
            continued availability of Certif-Scope.
          </p>
        </div>
      </div>

      {/* TRUST SUMMARY */}
      <div className="mt-20 p-10 bg-white rounded-xl border border-[#0B3A63]/15 shadow-sm">
        <h3
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
          data-i18n="s5.summary.title"
        >
          Trust & Integrity Guarantees
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <li data-i18n="s5.summary.item1">
            • Attestations are issued once and cannot be modified afterwards
          </li>
          <li data-i18n="s5.summary.item2">
            • Verification does not rely on a central database or registry
          </li>
          <li data-i18n="s5.summary.item3">
            • No user accounts, credentials or personal data are required
          </li>
          <li data-i18n="s5.summary.item4">
            • Issued documents are not stored by Certif-Scope
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
