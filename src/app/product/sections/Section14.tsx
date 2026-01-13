"use client";

export default function Section14() {
  return (
    <section
      id="s14"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Premium institutional layout */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-transparent pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          14. Industry-Specific Uses
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope provides a standardized, verifiable CO₂ attestation that fits the
          documentation requirements of multiple industries. Each sector has distinct
          procurement expectations, compliance obligations and verification constraints.
          This section outlines measurable scenarios and regulatory expectations shaping
          institutional acceptance.
        </p>
      </div>



      {/* GRID — 6 INDUSTRIES WITH METRICS & REGULATORY EXPECTATIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

        {/* INDUSTRY 1 — LOGISTICS */}
        <div className="p-8 rounded-xl bg-white border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Logistics & Transportation
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Logistics chains require rapid and verifiable emissions indicators to comply with
            freight procurement rules and subcontractor onboarding.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Transport contributes on average 60 percent of retailer emissions</li>
            <li>• Required for freight tenders and multi-carrier platforms</li>
            <li>• Supports EU cross-border screening procedures</li>
          </ul>
        </div>

        {/* INDUSTRY 2 — CONSTRUCTION */}
        <div className="p-8 rounded-xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Construction & Public Works
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Public works and construction tenders increasingly require environmental indicators.
            Materials represent a significant portion of lifecycle emissions.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Construction materials represent ~40 percent of project emissions</li>
            <li>• Required in EU GPP-aligned tender submissions</li>
            <li>• Clears municipal and public infrastructure documentation checks</li>
          </ul>
        </div>

        {/* INDUSTRY 3 — DIGITAL & SERVICES */}
        <div className="p-8 rounded-xl bg-white border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Professional & Digital Services
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Service providers must supply CO₂ indicators for procurement validation,
            subcontracting agreements and compliance audits.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Spending-based categories align with IT & service workflows</li>
            <li>• Accepted across multinational procurement chains</li>
            <li>• Instant output reduces onboarding delays</li>
          </ul>
        </div>

        {/* INDUSTRY 4 — RETAIL */}
        <div className="p-8 rounded-xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Retail & E-Commerce
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Retailers and marketplaces increasingly require emission verification from their
            logistics partners and supply-chain vendors.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Transport accounts for roughly 60 percent of retail CO₂ footprint</li>
            <li>• Required by marketplaces and logistics platforms</li>
            <li>• Supports multi-supplier procurement workflows</li>
          </ul>
        </div>

        {/* INDUSTRY 5 — MANUFACTURING */}
        <div className="p-8 rounded-xl bg-white border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Manufacturing & Industrial SMEs
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Manufacturers must provide environmental exposure data to clients, banks and
            regulators across the EU value chain.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Often required for supplier risk assessments</li>
            <li>• Accepted in multinational compliance reviews</li>
            <li>• Reproducible layout for recurring audits</li>
          </ul>
        </div>

        {/* INDUSTRY 6 — PUBLIC / NON-PROFIT */}
        <div className="p-8 rounded-xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Public Sector & Non-Profit Organisations
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Public institutions require standardized environmental documentation for funding,
            eligibility checks and partnership agreements.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Required for CINEA and EU grant applications</li>
            <li>• Clear, accessible formatting for public administrators</li>
            <li>• Works without sector-specific adaptations</li>
          </ul>
        </div>

      </div>



      {/* REGULATORY STRIP */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Regulatory Drivers by Sector
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Construction: EU GPP criteria require environmental proof in tenders</li>
          <li>• Banking: EBA mandates collection of client CO₂ indicators for ESG risk scoring</li>
          <li>• Retail: transport-related emissions must be screened in supplier chains</li>
          <li>• Public sector: eligibility for subsidies requires environmental indicators</li>
        </ul>
      </div>



      {/* EXPLANATION STRIP — Institutional clarity */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Why Industry-Specific Uses Matter
        </h3>

        <p className="mt-3 text-white/90 max-w-5xl leading-relaxed relative z-10">
          Each industry operates with distinct procurement formats and compliance burdens.
          Certif-Scope resolves this fragmentation by providing a deterministic output with
          standardized categories, stable formatting and cryptographic integrity markers.
        </p>
      </div>



      {/* RETURN BUTTON — Identical across all sections */}
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
