"use client";

export default function Section5() {
  return (
    <section
      id="s5"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
      data-section="s5"
    >

      {/* HEADER BLOCK */}
      <div className="p-12 rounded-2xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden">

        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          className="text-4xl md:text-5xl font-extrabold relative z-10"
          data-i18n="s5.title"
        >
          Verification & Integrity
        </h2>

        <p
          className="mt-6 text-white/90 text-lg leading-relaxed max-w-4xl relative z-10"
          data-i18n="s5.intro"
        >
          Certif-Scope includes a fully deterministic, cryptographically verifiable 
          integrity system. Each attestation embeds a reproducible hash, a verification ID 
          and a QR code enabling institutions to validate authenticity instantly — even offline, 
          without stored data or server lookup.
        </p>
      </div>

      {/* VERIFICATION PRINCIPLES */}
      <div
        className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md"
        data-i18n="s5.principles.block"
      >
        <h3
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
          data-i18n="s5.principles.title"
        >
          Core Verification Principles
        </h3>

        <ul className="space-y-3 text-gray-700 leading-relaxed text-sm">

          <li data-i18n="s5.principles.point1">
            • <strong>Deterministic Integrity Hash</strong> — the attestation is hashed using 
            a reproducible algorithm. Anyone can recompute it from the PDF.
          </li>

          <li data-i18n="s5.principles.point2">
            • <strong>Unique Verification ID</strong> — derived directly from the hash and embedded 
            in the document, allowing identifier-based validation.
          </li>

          <li data-i18n="s5.principles.point3">
            • <strong>Offline Verification</strong> — integrity can be validated without any 
            connection or backend database.
          </li>

          <li data-i18n="s5.principles.point4">
            • <strong>Permanent Read-Only Access</strong> — the PDF contains everything needed for 
            verification, with or without the Certif-Scope website.
          </li>

        </ul>
      </div>

      {/* TECHNICAL FLOW */}
      <div
        className="mt-16 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm"
        data-i18n="s5.flow.block"
      >
        <h3
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
          data-i18n="s5.flow.title"
        >
          Technical Verification Flow
        </h3>

        <p
          className="text-gray-700 text-sm leading-relaxed max-w-4xl"
          data-i18n="s5.flow.text"
        >
          Verification relies on deterministic cryptographic consistency. The workflow follows a 
          simple reproducible sequence:
        </p>

        <ol className="mt-4 space-y-3 text-gray-700 text-sm leading-relaxed">
          <li data-i18n="s5.flow.step1">
            1. User provides annual spending (€), generating a deterministic output.
          </li>
          <li data-i18n="s5.flow.step2">
            2. The system computes CO₂e using fixed, version-controlled emission factors.
          </li>
          <li data-i18n="s5.flow.step3">
            3. A cryptographic hash is calculated from the structured output.
          </li>
          <li data-i18n="s5.flow.step4">
            4. The hash is encoded into a unique Verification ID.
          </li>
          <li data-i18n="s5.flow.step5">
            5. The PDF embeds both the hash and the Verification ID for offline validation.
          </li>
        </ol>
      </div>

      {/* QR & INSTITUTIONAL WORKFLOW */}
      <div
        className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md"
        data-i18n="s5.qr.block"
      >
        <h3
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
          data-i18n="s5.qr.title"
        >
          QR Code for Institutional Use
        </h3>

        <p
          className="text-gray-700 text-sm leading-relaxed max-w-4xl"
          data-i18n="s5.qr.text"
        >
          Each attestation includes a QR code linking to the verification interface. Institutions 
          can scan it for:
        </p>

        <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
          <li data-i18n="s5.qr.point1">• Instant authenticity check</li>
          <li data-i18n="s5.qr.point2">• Document integrity confirmation</li>
          <li data-i18n="s5.qr.point3">• Cross-check of hash values</li>
          <li data-i18n="s5.qr.point4">• Version visibility of emission dataset</li>
        </ul>
      </div>

      {/* INTEGRITY LIMITS */}
      <div
        className="mt-16 p-10 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden"
        data-i18n="s5.limits.block"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent opacity-20"
          aria-hidden="true"
        />

        <h3
          className="text-2xl font-semibold mb-4 relative z-10"
          data-i18n="s5.limits.title"
        >
          Integrity Limits & Scope
        </h3>

        <p
          className="text-white/90 text-sm leading-relaxed max-w-4xl relative z-10"
          data-i18n="s5.limits.text"
        >
          The verification mechanism ensures authenticity but does not validate the correctness 
          of spending values provided by the user. It guarantees integrity, not accuracy. 
          The method is suitable for procurement screening and indicative assessments, not for 
          audited reporting frameworks.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s5.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          aria-label="Back to section summary"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
      }
