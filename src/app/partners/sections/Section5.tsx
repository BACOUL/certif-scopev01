"use client";

export default function Section5() {
  return (
    <section
      id="recovery-and-security-model"
      data-section="recovery-and-security-model"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/15 via-[#0B3A63]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="partners.s5.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">5.</span>
          Recovery & Security Model
        </h2>

        <p
          data-i18n="partners.s5.intro"
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
        >
          Partner access security is designed to be explicit, minimal and auditable.
          Certif-Scope deliberately avoids accounts, passwords and identity systems.
          Access control relies on cryptographic tokens, strict separation of roles
          and deterministic revocation rules.
        </p>
      </div>

      {/* 3-PILLAR GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

        {/* PILLAR 1 — SECURITY BY DESIGN */}
        <div
          data-i18n="partners.s5.card1.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3
            data-i18n="partners.s5.card1.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Security by Design
          </h3>
          <p
            data-i18n="partners.s5.card1.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            There are no user accounts, no passwords and no persistent sessions.
            The attack surface is intentionally reduced to a single-purpose
            Partner Key with limited scope and lifetime.
          </p>
        </div>

        {/* PILLAR 2 — KEY / RECOVERY SEPARATION */}
        <div
          data-i18n="partners.s5.card2.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3
            data-i18n="partners.s5.card2.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Key & Recovery Token Separation
          </h3>
          <p
            data-i18n="partners.s5.card2.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            The Partner Key (generation right) and the Recovery Token (regeneration right)
            are strictly separated. They are delivered in two distinct emails and
            cannot be used interchangeably.
          </p>
        </div>

        {/* PILLAR 3 — CONTROLLED RECOVERY */}
        <div
          data-i18n="partners.s5.card3.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3
            data-i18n="partners.s5.card3.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Controlled Key Recovery
          </h3>
          <p
            data-i18n="partners.s5.card3.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            If a Partner Key is lost, a new key can be issued only by presenting
            the Recovery Token and the original email address. The previous key
            is automatically revoked.
          </p>
        </div>

      </div>

      {/* SECURITY & GUARANTEES */}
      <div
        data-i18n="partners.s5.guarantees.block"
        className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md"
      >
        <h3
          data-i18n="partners.s5.guarantees.title"
          className="text-xl font-bold text-[#0B3A63] mb-4"
        >
          Institutional Security Guarantees
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">
          <li data-i18n="partners.s5.guarantees.item1">
            • No access to financial inputs after attestation generation.
          </li>
          <li data-i18n="partners.s5.guarantees.item2">
            • Revocation does not affect previously issued attestations.
          </li>
          <li data-i18n="partners.s5.guarantees.item3">
            • Verification remains possible even after key replacement.
          </li>
          <li data-i18n="partners.s5.guarantees.item4">
            • No dependency on third-party identity or authentication systems.
          </li>
        </ul>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="partners.s5.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63]
                     text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
        }
