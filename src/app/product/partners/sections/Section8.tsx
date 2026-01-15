"use client";

export default function Section8() {
  return (
    <section
      id="s8"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
      data-section="partners-s8"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/10 pointer-events-none"
          aria-hidden="true"
        />

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="partners.s8.title"
        >
          Security & Verification for Partner Organisations
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s8.intro"
        >
          This section explains how partner organisations verify the authenticity, integrity
          and origin of a CO₂e Attestation submitted by a supplier. Verification is fully
          deterministic, offline-capable and does not rely on stored financial data or
          server-side lookups.
        </p>
      </div>


      {/* VERIFICATION PRINCIPLES */}
      <div
        className="mt-16 p-10 bg-white rounded-xl border border-gray-300 shadow-md"
        data-i18n="partners.s8.principles"
      >
        <h3 className="text-2xl font-bold text-[#0B3A63] mb-6">
          Verification Principles
        </h3>

        <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
          <li>
            The attestation includes a deterministic SHA-256 integrity hash.
          </li>
          <li>
            Partners can recompute the hash using the supplier-provided PDF data.
          </li>
          <li>
            No database query, no API request and no login are required.
          </li>
          <li>
            Verification is possible offline and can be integrated into automated workflows.
          </li>
          <li>
            No supplier financial data is transmitted to Certif-Scope at any stage.
          </li>
        </ul>
      </div>


      {/* OFFLINE VERIFICATION */}
      <div
        className="mt-16 p-8 bg-[#0B3A63] text-white rounded-xl shadow-md"
        data-i18n="partners.s8.offline"
      >
        <h4 className="text-xl font-bold mb-3">Offline Verification Workflow</h4>

        <p className="text-white/90 text-sm leading-relaxed">
          Partners recompute the integrity hash locally from the PDF content. If the computed
          hash matches the embedded signature, the document is confirmed authentic. This provides
          a verifiable link between the supplier’s declared values and the delivered attestation,
          without exposing raw financial inputs.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white/10 rounded-lg p-4">
            <div className="font-bold text-white mb-2">Step 1</div>
            <p className="text-sm text-white/90">
              Extract structured fields from the PDF (automated or manual).
            </p>
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            <div className="font-bold text-white mb-2">Step 2</div>
            <p className="text-sm text-white/90">
              Recompute SHA-256 hash from deterministic string representation.
            </p>
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            <div className="font-bold text-white mb-2">Step 3</div>
            <p className="text-sm text-white/90">
              Compare the result to the embedded hash. If identical, authenticity is confirmed.
            </p>
          </div>

        </div>
      </div>


      {/* SECURITY ARCHITECTURE */}
      <div
        className="mt-20 p-10 bg-white rounded-xl border border-gray-300 shadow-md"
        data-i18n="partners.s8.security"
      >
        <h3 className="text-2xl font-bold text-[#0B3A63] mb-6">
          Security Architecture
        </h3>

        <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
          <li>
            All computations are performed client-side within the supplier’s browser.
          </li>
          <li>
            Certif-Scope does not receive, store or transmit supplier spending data.
          </li>
          <li>
            The deterministic hash ensures document integrity even if submitted months later.
          </li>
          <li>
            Attestation IDs cannot be duplicated, forged or reassigned without modifying the hash.
          </li>
          <li>
            Verification is independent from Certif-Scope infrastructure, ensuring long-term resilience.
          </li>
        </ul>
      </div>


      {/* HASH INTEGRITY BLOCK */}
      <div
        className="mt-16 p-8 bg-[#F8FAFC] rounded-xl border border-gray-300 shadow-md"
        data-i18n="partners.s8.hash"
      >
        <h4 className="text-xl font-bold text-[#0B3A63] mb-3">Integrity Mechanism</h4>

        <p className="text-gray-700 text-sm leading-relaxed">
          The verification system is based on deterministic hashing. Any modification to the PDF
          or underlying values immediately invalidates the signature. This provides a tamper-evident,
          audit-friendly attestation without requiring encrypted storage or user accounts.
        </p>
      </div>


      {/* AUTOMATION / API HOOKS */}
      <div
        className="mt-16 p-8 bg-white rounded-xl border border-gray-300 shadow-md"
        data-i18n="partners.s8.automation"
      >
        <h4 className="text-xl font-bold text-[#0B3A63] mb-3">Automation Options</h4>

        <p className="text-gray-700 text-sm leading-relaxed">
          Partners may optionally automate verification by integrating a deterministic hash
          recomputation script into their supplier portal or document intake system. This can be
          performed entirely offline or within internal infrastructure without external dependencies.
        </p>

        <ul className="mt-4 space-y-3 list-disc pl-6 text-sm text-gray-700 leading-relaxed">
          <li>Internal procurement portals</li>
          <li>Onboarding workflows</li>
          <li>Risk scoring tools</li>
          <li>ESG due-diligence platforms</li>
          <li>Financial documentation intake</li>
        </ul>
      </div>


      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          data-i18n="partners.s8.return"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
      }
