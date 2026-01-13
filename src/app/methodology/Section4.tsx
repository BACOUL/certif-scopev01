"use client";

export default function Section4() {
  return (
    <section
      id="s4"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — institutional, unique purpose */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          4. Category Definitions & Boundaries
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          This section establishes the exact economic categories used in the spend-based
          model. Each category has a deterministic scope, a fixed mapping rule and an
          emission-factor assignment protocol. No reinterpretation, redistribution or
          automated recategorisation is performed. These boundaries prevent overlap and
          ensure reproducibility across audits.
        </p>
      </div>


      {/* GRID — 8 EXACT CATEGORIES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* 1 — ENERGY */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">Energy & Utilities</h3>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            Includes electricity, heating, cooling, water and associated utility contracts.
            Excludes fuel used directly by company vehicles (allocated under transport).
          </p>
        </div>

        {/* 2 — OFFICE OPS */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">Office Operations</h3>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            Includes office supplies, furniture, small equipment and consumables.
            Excludes IT hardware and software (separate category).
          </p>
        </div>

        {/* 3 — IT & DIGITAL */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">IT Equipment & Digital Services</h3>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            Includes hardware, software licences, cloud services and digital subscriptions.
            Excludes telecom contracts (allocated to communication services).
          </p>
        </div>

        {/* 4 — TRANSPORT */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">Transport & Logistics</h3>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            Includes freight, deliveries, courier services and business travel transport.
            Excludes employee commuting (out of scope for spend-based).
          </p>
        </div>

        {/* 5 — PROFESSIONAL SERVICES */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">Professional Services</h3>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            Includes consulting, legal services, accounting, training and outsourcing.
            Excludes subcontracted manufacturing (covered by purchased goods/services).
          </p>
        </div>

        {/* 6 — MARKETING */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">Marketing & Media Purchases</h3>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            Includes advertising, media placement, sponsorships, print materials.
            Excludes event logistics (allocated under transport or operations).
          </p>
        </div>

        {/* 7 — CONSTRUCTION */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">Construction / Maintenance</h3>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            Includes renovation, repairs, building materials and maintenance contracts.
            Excludes energy consumed by buildings (covered under energy utilities).
          </p>
        </div>

        {/* 8 — PURCHASED GOODS */}
        <div className="p-8 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">Other Purchased Goods & Services</h3>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            Includes general purchased products and services not classified elsewhere.
            Excludes items explicitly covered by another category to preserve exclusivity.
          </p>
        </div>

      </div>


      {/* NON-PERMITTED OPERATIONS */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Operations Explicitly Not Included
        </h3>

        <ul className="text-sm text-gray-700 space-y-2 leading-relaxed">
          <li>• No Scope 1 direct emissions (fuel combustion, company fleet, on-site processes)</li>
          <li>• No Scope 2 market-based electricity accounting</li>
          <li>• No employee commuting allocation</li>
          <li>• No supplier-specific emission adjustments</li>
          <li>• No lifecycle boundary expansion (no cradle-to-gate/LCA substitution)</li>
        </ul>
      </div>


      {/* RULES OF CATEGORY ASSIGNMENT */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Deterministic Category Assignment Rules
        </h3>

        <ul className="mt-4 text-white/90 text-sm space-y-2 leading-relaxed relative z-10">
          <li>• One expense can only belong to one category</li>
          <li>• No redistribution across categories</li>
          <li>• No “proportional split” for multi-purpose expenses</li>
          <li>• Assignment follows economic function, not vendor type</li>
          <li>• Auditor can reproduce categorisation with same inputs</li>
        </ul>
      </div>


      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
