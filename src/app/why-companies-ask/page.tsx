export const metadata = {
  title: "Why Companies Ask for It — Certif-Scope",
  description:
    "Institutional reasons why companies require CO₂e attestations from suppliers, including procurement, financial risk screening, scope limits and intended use.",
};

export default function WhyCompaniesAskPage() {
  return (
    <section
      id="why-companies-ask"
      data-section="why-companies-ask"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* HEADER */}
      <header className="max-w-3xl mb-12">
        <p
          className="uppercase text-xs md:text-sm font-medium text-[#64748B] tracking-wider mb-3"
          data-i18n="why.label"
        >
          CO₂e Attestation — Supplier Requirement
        </p>

        <h1
          data-i18n="why.title"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4"
        >
          Why Companies Ask for It
        </h1>

        <p
          data-i18n="why.intro"
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          Procurement teams, banks, insurers and public institutions increasingly
          require a standardized CO₂e attestation from their suppliers. This page
          explains the institutional rationale behind this request, as well as
          what the attestation represents — and what it does not.
        </p>

        <p
          className="text-sm text-gray-600 dark:text-gray-400 mt-4"
          data-i18n="why.principle"
        >
          The objective is standardization and comparability, not measurement precision.
        </p>
      </header>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-12">

        {/* 1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Procurement Risk Classification
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Large organizations must classify suppliers according to environmental
            exposure as part of procurement governance and ESG risk frameworks,
            including sustainable procurement standards such as ISO 20400.
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>supplier ESG risk screening</li>
            <li>mandatory environmental indicators in tenders</li>
            <li>alignment with internal procurement policies</li>
          </ul>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Financial Institutions and Regulatory Pressure
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Banks and insurers are subject to increasing environmental risk
            assessment obligations under frameworks such as the EU Taxonomy,
            EBA Guidelines and Solvency II. A standardized CO₂e attestation
            enables documentation of supplier exposure without requiring full
            CSRD or ESRS inventories.
          </p>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Due Diligence and Vendor Onboarding
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Many organizations require a CO₂e estimate as part of mandatory
            supplier due diligence. The attestation provides a structured and
            verifiable document aligned with institutional onboarding templates.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This allows small and mid-sized suppliers to meet requirements that
            previously required consultants or complex audits.
          </p>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Accessibility for Non-Technical Suppliers
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Most SMEs cannot produce CSRD or ESRS reports, nor detailed greenhouse
            gas inventories. The attestation delivers an institutional-grade
            indicator using only annual spending data, without technical expertise.
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Faster Supplier Approval Cycles
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Supplier approval is often delayed due to missing or inconsistent
            environmental information. A standardized CO₂e document significantly
            reduces review time and accelerates onboarding decisions.
          </p>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Immediate and Independent Verification
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Each attestation includes:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>a unique attestation identifier</li>
            <li>embedded document integrity safeguards</li>
            <li>a permanent verification URL</li>
            <li>a QR code usable in institutional systems</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Reviewers can verify authenticity within seconds and confirm that
            the document has not been altered.
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Cross-Border Acceptance
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The attestation format is aligned with procurement expectations
            across multiple European jurisdictions, supporting cross-border
            supplier and group-level workflows.
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. What This Attestation Is Not
          </h2>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>not a certification</li>
            <li>not an audit</li>
            <li>not an assurance or verification engagement</li>
            <li>not a regulatory carbon report</li>
            <li>not CSRD or ESRS reporting</li>
            <li>not a Scope 1, Scope 2 or Scope 3 emissions inventory</li>
          </ul>
        </section>

        {/* 9 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Legal Scope and Intended Use
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            This attestation is provided for indicative purposes only. The
            accuracy and completeness of the underlying data remain the sole
            responsibility of the supplier.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            It does not constitute an audit, certification, assurance engagement
            or legally binding carbon footprint, and does not replace regulatory
            or reporting obligations.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This page may be referenced in procurement documentation, supplier
            communications or onboarding workflows as the official explanation
            of this requirement.
          </p>
        </section>

      </div>
    </section>
  );
}
