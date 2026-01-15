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
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/10 pointer-events-none" />

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="partners.s8.title"
        >
          SLA, Support & Maintenance
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s8.p1"
        >
          The Certif-Scope Partnership Program provides enterprise-level availability guarantees,
          deterministic API performance, automated versioning, and lifecycle policies that ensure
          long-term verifiability of all generated attestations—even in cases of infrastructure
          failure or publisher disappearance.
        </p>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s8.p2"
        >
          The SLA model is designed for large procurement networks, banks, and insurers requiring
          predictable cryptographic validation and offline-verifiable outputs with zero backend
          retention. No personal or financial data is stored by Certif-Scope.
        </p>
      </div>

      {/* SLA GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">

        {/* SLA 1 – AVAILABILITY */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            1. API Availability
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The attestation issuance API is guaranteed at 99.9% uptime. As the API is stateless,
            unavailability does not affect past attestations. Every generated file remains valid
            and independently verifiable without network access.
          </p>
        </div>

        {/* SLA 2 – PERFORMANCE */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            2. Performance Guarantees
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Attestation generation remains deterministic with sub-200ms processing time under
            standard load. Each calculation uses fixed emission factor libraries and requires no
            server-side identity checks or data retrieval.
          </p>
        </div>

        {/* SLA 3 – SUPPORT */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            3. Dedicated Support Channels
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Enterprise partners receive direct communication channels for integration onboarding,
            token management, and audit-support documentation. A dedicated escalation workflow is
            included for compliance and procurement requirements.
          </p>
        </div>

        {/* SLA 4 – VERSIONING POLICY */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            4. Versioning & Lifecycle Policies
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            All attestation formats, calculation engines, and emission factor sources follow a
            transparent versioning system. Each attestation embeds its version identifier so audits
            can be reconstructed years later. Older versions remain verifiable indefinitely.
          </p>
        </div>

        {/* SLA 5 – SECURITY & CRYPTO */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            5. Cryptographic Continuity
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            All attestations include a SHA-256 hash, timestamp, sector signature, and factor source.
            Verification tools are published open-source, ensuring no vendor lock-in and compliance
            with CSRD, ESRS, ISO 14064-1, ISO 14083 and banking/insurance audit requirements.
          </p>
        </div>

        {/* SLA 6 – DISASTER & SURVIVABILITY */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            6. Survivability & Long-Term Verification
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Even in the event of service shutdown, mergers, or vendor disappearance, all previously
            generated attestations remain valid. This is ensured by fully offline verification,
            mirrored public key repositories, and transparent archival policy.
          </p>
        </div>
      </div>

      {/* EXTRA BLOCK */}
      <div className="mt-16 p-10 bg-[#15B097] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63] to-transparent opacity-20" />

        <h4 className="text-2xl font-bold relative z-10">
          Enterprise Stability Commitment
        </h4>

        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          Certif-Scope provides deterministic processes, transparent methodology and zero-retention
          logic. These guarantees ensure long-term usability and compliance resilience, supporting
          banking scoring models, procurement automation, insurance underwriting, and ESG due
          diligence workflows.
        </p>
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
