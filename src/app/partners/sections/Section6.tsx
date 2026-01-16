"use client";

export default function Section6() {
  return (
    <section
      id="api-and-high-volume-access"
      data-section="api-and-high-volume-access"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK — same model, muted accent */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/15 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 via-[#64748B]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="partners.s6.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">6.</span>
          API & High-Volume Access (Coming Soon)
        </h2>

        <p
          data-i18n="partners.s6.intro"
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
        >
          Certif-Scope is designed to scale beyond manual or low-volume partner usage.
          High-volume access and API-based generation are planned for organizations
          requiring automated, large-scale CO₂e attestation workflows.
        </p>
      </div>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

        {/* BLOCK 1 — TARGET USERS */}
        <div
          data-i18n="partners.s6.card1.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          <div className="text-[#64748B] text-4xl font-bold mb-3">01</div>
          <h3
            data-i18n="partners.s6.card1.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Designed for Large Volumes
          </h3>
          <p
            data-i18n="partners.s6.card1.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Intended for banks, insurers, procurement platforms and large groups
            that must generate hundreds or thousands of attestations as part of
            automated supplier or client workflows.
          </p>
        </div>

        {/* BLOCK 2 — API PRINCIPLES */}
        <div
          data-i18n="partners.s6.card2.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#64748B]/30 shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="text-[#64748B] text-4xl font-bold mb-3">02</div>
          <h3
            data-i18n="partners.s6.card2.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            API-First, Stateless Model
          </h3>
          <p
            data-i18n="partners.s6.card2.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            The future API will follow the same principles as the current system:
            stateless generation, no data retention, deterministic outputs and
            independent verification without vendor lock-in.
          </p>
        </div>

        {/* BLOCK 3 — STATUS & AVAILABILITY */}
        <div
          data-i18n="partners.s6.card3.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          <div className="text-[#64748B] text-4xl font-bold mb-3">03</div>
          <h3
            data-i18n="partners.s6.card3.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Planned, Not Active
          </h3>
          <p
            data-i18n="partners.s6.card3.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            API and high-volume access are not enabled in V1.
            This section exists to document the roadmap direction
            and to avoid misuse or misinterpretation of current capabilities.
          </p>
        </div>

      </div>

      {/* ROADMAP NOTE */}
      <div
        data-i18n="partners.s6.roadmap.block"
        className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md"
      >
        <h3
          data-i18n="partners.s6.roadmap.title"
          className="text-xl font-bold text-[#0B3A63] mb-4"
        >
          Roadmap Transparency
        </h3>

        <p
          data-i18n="partners.s6.roadmap.text"
          className="text-gray-700 text-sm leading-relaxed max-w-4xl"
        >
          Until API access is officially released, all partner usage relies on
          prepaid keys and manual generation. No guarantees are made regarding
          timelines or feature scope. This transparency ensures clear contractual
          and operational boundaries.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="partners.s6.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63]
                     text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
}
