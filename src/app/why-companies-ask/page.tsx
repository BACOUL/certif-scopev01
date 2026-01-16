export const metadata = {
  title: "Why Companies Ask for It — Certif-Scope",
  description:
    "Institutional reasons why companies require CO₂e attestations from suppliers, including scope, limits, and intended use.",
};

export default function WhyCompaniesAskPage() {
  return (
    <div id="why-companies-ask-page" className="max-w-7xl mx-auto px-6 pt-8 pb-24">

      {/* HEADER */}
      <div className="w-full mb-12">
        <p className="uppercase text-xs tracking-wider text-gray-500 mb-2">
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
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl"
        >
          Procurement teams, banks, insurers and public institutions increasingly require a
          standardized CO₂e attestation from their suppliers. This page explains the institutional
          reasons for this requirement, as well as what this attestation represents — and does not
          represent.
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-3xl mt-4">
          The objective is standardization, not precision.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-12">

        {/* SECTION 1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Procurement Risk & ESG Classification
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Large organizations must classify suppliers according to environmental exposure to
            comply with procurement governance frameworks (including ISO 20400) and internal ESG
            risk models.
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>supplier ESG scoring</li>
            <li>mandatory indicators in tender submissions</li>
            <li>alignment with sustainable procurement policies</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Regulatory Pressure on Banks & Insurers
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Financial institutions are subject to increasing environmental risk assessment
            obligations under the EU Taxonomy, EBA Guidelines and Solvency II. A standardized CO₂e
            attestation allows them to document supplier exposure without requiring full
            CSRD/ESRS inventories.
          </p>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Due Diligence & Vendor Onboarding
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Many organizations require a CO₂e estimate as part of mandatory vendor due diligence.
            The attestation provides a structured and verifiable document aligned with institutional
            onboarding templates.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This enables even small suppliers to respond to requirements that previously required
            consultants or complex audits.
          </p>
        </section>

        {/* SECTION 4 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Simplification for Non-Technical Suppliers
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Most SMEs cannot produce CSRD/ESRS reports or detailed greenhouse gas inventories. This
            attestation provides an institutional-grade indicator using only annual spending data.
          </p>
        </section>

        {/* SECTION 5 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Faster Supplier Approval
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Supplier approval cycles are often delayed by missing or inconsistent environmental
            information. A standardized CO₂e document significantly reduces onboarding timelines.
          </p>
        </section>

        {/* SECTION 6 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. A Document That Can Be Verified Instantly
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Each attestation includes:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>a unique attestation identifier</li>
            <li>a cryptographic integrity hash</li>
            <li>a permanent verification URL</li>
            <li>a QR code for institutional portals</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Institutions can verify authenticity in seconds and ensure the document has not been
            altered.
          </p>
        </section>

        {/* SECTION 7 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Accepted Across Europe
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The attestation format aligns with procurement expectations across multiple European
            jurisdictions and supports cross-border supplier workflows.
          </p>
        </section>

        {/* SECTION 8 */}
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
            <li>not a Scope 1, Scope 2 or Scope 3 inventory</li>
          </ul>
        </section>

        {/* SECTION 9 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Legal Scope and Intended Use
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            This attestation is provided for indicative purposes only. Data accuracy and completeness
            remain the sole responsibility of the supplier.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            It does not constitute an audit, certification, assurance engagement or legally binding
            carbon footprint, and does not replace any regulatory or reporting obligations.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This page may be referenced in supplier communications, procurement documentation or
            onboarding workflows as an official explanation of this requirement.
          </p>
        </section>

      </div>
    </div>
  );
}
