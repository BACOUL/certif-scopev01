export const metadata = {
  title: "Why Companies Ask for It — Certif-Scope",
  description:
    "Why procurement teams, banks and insurers require CO₂e attestations from suppliers, and how Certif-Scope provides a standardized, verifiable response.",
};

export default function WhyCompaniesAskPage() {
  return (
    <section
      id="why-companies-ask"
      data-section="why-companies-ask"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* MICRO-LABEL */}
      <p
        data-i18n="why.label"
        className="uppercase text-xs md:text-sm font-medium text-[#64748B] tracking-wider text-center mb-3"
      >
        CO₂e Attestation — Institutional Requirements
      </p>

      {/* TITLE */}
      <h1
        data-i18n="why.title"
        className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]"
      >
        Why Companies Ask for It
      </h1>

      {/* INTRO */}
      <p
        data-i18n="why.intro"
        className="text-center text-gray-600 dark:text-gray-300 text-lg mt-4 max-w-3xl mx-auto leading-relaxed"
      >
        Procurement teams, banks, insurers and public institutions frequently require a CO₂e
        attestation. This section explains the institutional drivers, regulatory background and
        decision-maker expectations — and how Certif-Scope fits their workflows.
      </p>

      {/* SEPARATOR */}
      <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-12" />

      <div className="max-w-4xl mx-auto space-y-16">
        {/* SECTION 1 */}
        <section id="why-s1">
          <h2
            data-i18n="why.s1.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            1. Procurement Risk & ESG Classification
          </h2>

          <p
            data-i18n="why.s1.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
          >
            Large companies must classify suppliers based on environmental exposure to comply with
            procurement governance (ISO 20400) and internal ESG scoring models. A simple CO₂e
            indicator is now expected during onboarding and tender submissions.
          </p>

          <ul
            data-i18n="why.s1.list"
            className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2"
          >
            <li>supplier ESG scoring</li>
            <li>mandatory indicators in tender responses</li>
            <li>alignment with sustainable procurement policies</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section id="why-s2">
          <h2
            data-i18n="why.s2.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            2. Regulatory Pressure on Banks & Insurers
          </h2>

          <p
            data-i18n="why.s2.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Financial institutions must demonstrate environmental risk assessment under EU Taxonomy,
            EBA Guidelines and Solvency II. A standardized CO₂e document allows them to fulfil these
            obligations without requiring suppliers to provide full CSRD/ESRS inventories.
          </p>
        </section>

        {/* SECTION 3 */}
        <section id="why-s3">
          <h2
            data-i18n="why.s3.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            3. Due Diligence & Vendor Onboarding Requirements
          </h2>

          <p
            data-i18n="why.s3.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
          >
            Many organizations now require a CO₂e estimate for each vendor as part of their
            mandatory due diligence documentation. Certif-Scope provides a clean and verifiable
            structure that matches institutional templates.
          </p>

          <p
            data-i18n="why.s3.text2"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Even micro-businesses can answer requests that previously required consultants or
            complex audits.
          </p>
        </section>

        {/* SECTION 4 */}
        <section id="why-s4">
          <h2
            data-i18n="why.s4.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            4. Simplification for Non-Technical Suppliers
          </h2>

          <p
            data-i18n="why.s4.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Most SMEs cannot produce CSRD/ESRS reports or detailed GHG inventories. Certif-Scope
            delivers an institutional-grade indicator instantly using only annual spending inputs.
          </p>
        </section>

        {/* SECTION 5 */}
        <section id="why-s5">
          <h2
            data-i18n="why.s5.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            5. Faster Supplier Approval
          </h2>

          <p
            data-i18n="why.s5.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Supplier approval cycles often take weeks. A standardized CO₂e file shortens onboarding
            drastically by providing a clear and comparable indicator.
          </p>
        </section>

        {/* SECTION 6 */}
        <section id="why-s6">
          <h2
            data-i18n="why.s6.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            6. A Document That Can Be Verified Instantly
          </h2>

          <p
            data-i18n="why.s6.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
          >
            Every attestation includes:
          </p>

          <ul
            data-i18n="why.s6.list"
            className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2"
          >
            <li>unique attestation ID</li>
            <li>cryptographic integrity hash</li>
            <li>permanent verification URL</li>
            <li>QR code for institutional portals</li>
          </ul>

          <p
            data-i18n="why.s6.text2"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
          >
            Institutions can check validity in seconds, eliminating fraud and ensuring the
            document has not been altered.
          </p>
        </section>

        {/* SECTION 7 */}
        <section id="why-s7">
          <h2
            data-i18n="why.s7.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            7. Accepted Across Europe
          </h2>

          <p
            data-i18n="why.s7.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            The attestation format aligns with procurement expectations in multiple European
            countries and supports cross-border vendor approval workflows.
          </p>
        </section>
      </div>
    </section>
  );
            }
