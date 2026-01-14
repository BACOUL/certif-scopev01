"use client";

export default function Section14() {
  return (
    <section
      id="s14"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-transparent pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          14. Industry-Specific Uses & Sector Breakdown
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope provides standardized, verifiable CO₂ indicators compatible with procurement,
          funding and ESG-risk requirements across diverse industries. Sector-specific patterns help
          institutions evaluate exposure, screening thresholds and documentation obligations using
          consistent, comparable and machine-readable data.
        </p>
      </div>



      {/* SECTOR GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

        {/* LOGISTICS */}
        <div className="p-8 rounded-xl bg-white border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Logistics & Transportation
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Logistics operations show predictable emissions patterns driven by transport intensity
            and subcontracting structures.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• ~60% road freight (typical EU sector averages)</li>
            <li>• ~25% last-mile delivery operations</li>
            <li>• ~10% warehousing and refrigeration</li>
          </ul>
          <p className="mt-3 text-xs text-gray-600">
            Regulatory link: EU GPP Transport Criteria + CSRD ESRS E1 value-chain screening.
          </p>
        </div>


        {/* CONSTRUCTION */}
        <div className="p-8 rounded-xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Construction & Public Works
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Construction emissions arise primarily from materials and heavy equipment. Public works
            require standardized environmental indicators in tenders.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• ~40% cement, steel and aggregates</li>
            <li>• ~35% heavy machinery operations</li>
            <li>• ~15% upstream transport</li>
          </ul>
          <p className="mt-3 text-xs text-gray-600">
            Regulatory link: EU GPP Construction Criteria; ESRS E1-9 upstream factors.
          </p>
        </div>


        {/* SERVICES */}
        <div className="p-8 rounded-xl bg-white border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Professional & Digital Services
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Service-sector emissions correlate strongly with IT procurement and office-related
            expenditures rather than physical operations.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• ~50% IT equipment + cloud services</li>
            <li>• ~30% business travel</li>
            <li>• ~10% outsourced subcontracting</li>
          </ul>
          <p className="mt-3 text-xs text-gray-600">
            Regulatory link: ESRS E1-4 indirect goods; ISO 14083 IT-service emissions.
          </p>
        </div>


        {/* RETAIL */}
        <div className="p-8 rounded-xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Retail & E-Commerce
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Retail emissions profiles typically emphasize logistics, packaging and distribution
            chains subject to procurement verification.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• ~60% logistics and delivery</li>
            <li>• ~20% packaging and warehousing</li>
            <li>• ~10% IT + payment infrastructure</li>
          </ul>
          <p className="mt-3 text-xs text-gray-600">
            Regulatory link: EU PEF (Product Environmental Footprint) + ESRS distribution rules.
          </p>
        </div>


        {/* MANUFACTURING */}
        <div className="p-8 rounded-xl bg-white border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Manufacturing & Industrial SMEs
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Manufacturing indicators vary by energy mix, material intensity and upstream suppliers.
            Screening is required for banking risk evaluation and supply-chain documentation.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• ~35% energy and electricity</li>
            <li>• ~30% materials and components</li>
            <li>• ~20% transport and logistics</li>
          </ul>
          <p className="mt-3 text-xs text-gray-600">
            Regulatory link: EBA ESG Risk Guidelines + ESRS E1-6 manufacturing classification.
          </p>
        </div>


        {/* PUBLIC SECTOR */}
        <div className="p-8 rounded-xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Public Sector & Non-Profit Organisations
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Public institutions require standardized environmental indicators for grant eligibility,
            funding audits and EU procurement compliance.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• ~50% facilities + operations</li>
            <li>• ~25% procurement of goods & IT</li>
            <li>• ~15% logistics and distribution</li>
          </ul>
          <p className="mt-3 text-xs text-gray-600">
            Regulatory link: CINEA funding rules; PDF/A mandatory for archival submissions.
          </p>
        </div>

      </div>



      {/* SECTOR CLASSIFICATION STRIP */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Sector Classification Logic (Machine-Readable)
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• NACE Rev.2 sector mapping</li>
          <li>• Inputs → expenditure categories → sector proxy → CO₂ factor</li>
          <li>• Deterministic and repeatable</li>
          <li>• No custom overrides</li>
        </ul>
      </div>



      {/* LIMITATIONS */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Sector Limitations & Boundaries
        </h3>

        <p className="mt-3 text-white/90 max-w-5xl leading-relaxed relative z-10">
          Indicators represent sector-average estimates based on standardized emission factors and
          do not replace operational measurement, lifecycle analysis or CSRD-compliant reporting.
          Certif-Scope provides initial screening signals, not audit-level certification.
        </p>
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
