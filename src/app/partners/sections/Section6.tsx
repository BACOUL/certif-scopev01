"use client";

export default function Section6() {
  return (
    <section
      id="s6"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
      data-section="partners-s6"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/5 pointer-events-none" />

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="partners.s6.title"
        >
          Pricing & Volume Packs
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s6.p1"
        >
          Large organisations access Certif-Scope through prepaid volume packs. Each pack contains a
          number of CO₂e attestations assignable to suppliers via API tokens. There is no subscription,
          no renewal obligation and no usage-based billing. Partners buy capacity once and consume it
          at their own pace.
        </p>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s6.p2"
        >
          Pricing is intentionally transparent and deterministic to support procurement planning,
          public-sector purchasing, and internal budget validation. No additional fees apply, and all
          verification mechanisms remain free and offline for suppliers and auditors.
        </p>
      </div>

      {/* PRICING GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        {/* PACK 1 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">Pack 100</h3>
          <div className="text-3xl font-extrabold text-[#15B097] mb-2">1 990 €</div>
          <div className="text-sm text-gray-600 mb-4">19.90 € / attestation</div>
          <ul className="text-gray-700 text-sm space-y-2 leading-relaxed">
            <li>100 prepaid tokens</li>
            <li>No expiration</li>
            <li>Ideal for regional groups & clusters</li>
            <li>Offline verification included</li>
          </ul>
        </div>

        {/* PACK 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">Pack 500</h3>
          <div className="text-3xl font-extrabold text-[#15B097] mb-2">8 450 €</div>
          <div className="text-sm text-gray-600 mb-4">16.90 € / attestation</div>
          <ul className="text-gray-700 text-sm space-y-2 leading-relaxed">
            <li>500 prepaid tokens</li>
            <li>No expiration</li>
            <li>Best option for national groups</li>
            <li>Offline verification included</li>
          </ul>
        </div>

        {/* PACK 3 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">Pack 1 000</h3>
          <div className="text-3xl font-extrabold text-[#15B097] mb-2">14 900 €</div>
          <div className="text-sm text-gray-600 mb-4">14.90 € / attestation</div>
          <ul className="text-gray-700 text-sm space-y-2 leading-relaxed">
            <li>1 000 prepaid tokens</li>
            <li>No expiration</li>
            <li>For multi-entity or multisite groups</li>
            <li>Offline verification included</li>
          </ul>
        </div>

      </div>

      {/* OPTIONAL ADD-ONS */}
      <div className="mt-16 p-10 bg-white rounded-xl border border-gray-200 shadow-md">
        <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">
          Optional Add-Ons
        </h3>

        <p className="text-gray-700 text-sm mb-6 leading-relaxed">
          Add-ons are optional and designed for high-volume or regulated environments needing extra assurance.
        </p>

        <ul className="text-gray-700 text-sm space-y-3 leading-relaxed">
          <li><strong>Dedicated Public Key Rotation:</strong> 990 € / year</li>
          <li><strong>Multi-region Token Distribution:</strong> 490 € / year</li>
          <li><strong>Automated Vendor Onboarding UI:</strong> 1 900 € one-time</li>
          <li><strong>Custom CSV attestation batch generation:</strong> 590 € / batch</li>
        </ul>
      </div>

      {/* COMPLIANCE BOX */}
      <div className="mt-16 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20" />

        <h4 className="text-2xl font-bold relative z-10">
          Compliance & Procurement Alignment
        </h4>

        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          The pricing model complies with EU procurement rules: fixed unit cost, no hidden charges,
          no user tracking, and no identifiable supplier data stored. Verification remains 100%
          free and offline. Tokens are a purely economic instrument representing prepaid generation
          rights, not a control or identity layer.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          data-i18n="partners.s6.return"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
            }
