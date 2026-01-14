"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Legal framing */}
      <div className="p-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63]">
          1. Compliance Scope & Legal Boundaries
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mt-6">
          This section defines the exact legal perimeter of Certif-Scope. It clarifies what the
          system is allowed to do, what it cannot do, and under which regulatory constraints
          it operates. These boundaries prevent misinterpretation and ensure that the output
          remains an indicative, non-binding CO₂e estimate based solely on spend-based logic.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mt-4">
          Certif-Scope does not replace mandatory regulatory reporting (CSRD, ESRS, EU Taxonomy),
          does not constitute an audit, and does not validate supplier-specific emissions.
          The tool provides a standardized indicative emission intensity for institutional
          screening where physical activity data is not available.
        </p>
      </div>


      {/* BLOCK — Legal Scope */}
      <div className="mt-16 p-10 bg-[#F8FAFC] dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Defined Legal Scope
        </h3>

        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-5xl">
          <li>• Provides indicative CO₂e estimations using spend-based factors only.</li>
          <li>• Complies with GHG Protocol Scope 3 Category 1–16 (spend-based approach).</li>
          <li>• Compatible with ISO 14064-1 and ISO 14083 methodological principles.</li>
          <li>• Delivers non-binding indicators suitable for procurement and banking workflows.</li>
          <li>• Fully independent from supplier-specific primary data.</li>
        </ul>

        <div className="mt-8 p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">Legal Framework Positioning</h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Financial spend → Category assignment → Reference factor → CO₂e estimate.
            The result does not express real operational emissions but an indicative intensity
            derived from economic activity benchmarks.
          </p>
        </div>
      </div>


      {/* BLOCK — Explicit Legal Exclusions */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Explicit Exclusions (Legal and Methodological)
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mb-4">
          The following elements are outside the legal and methodological perimeter and must
          never be inferred or interpreted as included:
        </p>

        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-5xl">
          <li>• No CSRD-compliant reporting (not a sustainability statement).</li>
          <li>• No ESRS E1, E2, E3 primary-data verification.</li>
          <li>• No supplier-level or product-level carbon footprint.</li>
          <li>• No Scope 1 direct emissions or Scope 2 market-based accounting.</li>
          <li>• No LCA (ISO 14040/44) or cradle-to-grave lifecycle modelling.</li>
          <li>• No audit, no assurance engagement, no verification opinion.</li>
          <li>• No physical activity data (kWh, km, tCO₂e from operations).</li>
        </ul>
      </div>


      {/* BLOCK — Regulatory Alignment */}
      <div className="mt-16 p-10 bg-[#0B3A63] text-white rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold mb-4">
          Alignment With International Regulations
        </h3>

        <p className="text-white/90 max-w-5xl leading-relaxed">
          Certif-Scope aligns with internationally recognized frameworks for indicative
          emissions estimation but does not substitute legally binding disclosure standards.
        </p>

        <ul className="mt-4 space-y-2 text-white/90 text-sm max-w-5xl leading-relaxed">
          <li>• GHG Protocol — spend-based Scope 3 method.</li>
          <li>• ISO 14064-1 — accounting relevance, consistency and transparency.</li>
          <li>• ISO 14083 — transport emissions calculation boundaries.</li>
          <li>• EEIO modelling — macroeconomic carbon intensity allocation.</li>
          <li>• EU Taxonomy — compatibility for indicative risk assessments only.</li>
        </ul>

        <p className="mt-4 text-white/80 text-sm max-w-5xl leading-relaxed">
          These alignments provide methodological legitimacy while maintaining clear separation
          from mandatory reporting obligations under CSRD and ESRS.
        </p>
      </div>


      {/* BLOCK — Liability & Responsibility Boundaries */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Liability & Responsibility Boundaries
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          Certif-Scope provides indicative results only. Responsibility for accuracy of financial
          inputs lies exclusively with the user or institution submitting the data. The system
          does not validate invoices, supplier data, operational metrics or regulatory filings.
        </p>

        <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-5xl">
          <li>• Output is non-binding and must not be used as audited emissions.</li>
          <li>• No guarantee of equivalence to CSRD or ESRS deliverables.</li>
          <li>• No legal liability for downstream interpretation or use.</li>
          <li>• Institutions are responsible for contextual assessment and risk evaluation.</li>
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
