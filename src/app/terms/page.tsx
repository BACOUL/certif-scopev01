export const metadata = {
  title: "Terms of Service — Certif-Scope",
  description:
    "Terms of Service governing the use of Certif-Scope, including service scope, pricing, responsibilities, privacy-by-design and applicable law.",
};

export default function TermsPage() {
  return (
    <section
      id="terms"
      data-section="terms"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* HEADER */}
      <header className="max-w-3xl mx-auto text-center mb-12">
        <p
          data-i18n="terms.label"
          className="uppercase text-xs md:text-sm font-medium text-[#64748B] tracking-wider mb-3"
        >
          Terms of Service — CGV
        </p>

        <h1
          data-i18n="terms.title"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4"
        >
          Terms of Service
        </h1>

        <p
          data-i18n="terms.intro"
          className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
        >
          These Terms of Service govern the use of Certif-Scope and the issuance
          of standardized CO₂e Attestations. By generating an Attestation, the
          user acknowledges having read and accepted these Terms in full.
        </p>
      </header>

      {/* SEPARATOR */}
      <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mb-14" />

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-14">

        {/* 1 PURPOSE */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Purpose
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            These Terms define the contractual framework applicable to the use
            of the Certif-Scope service, which provides indicative spend-based
            CO₂e Attestations generated from annual financial expenditure data
            provided by the user.
          </p>
        </section>

        {/* 2 SERVICE DESCRIPTION */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Service Description
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Certif-Scope converts annual spending (€) into an indicative CO₂e
            value using a deterministic spend-based calculation model. The
            service delivers a downloadable PDF Attestation that includes:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>an aggregated indicative CO₂e result</li>
            <li>a standardized institutional-grade PDF format</li>
            <li>a unique Attestation identifier</li>
            <li>a verification link and QR code</li>
            <li>embedded integrity and authenticity safeguards</li>
            <li>dataset name and version used</li>
            <li>a stated validity period of one (1) year</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            The Attestation is not a certification, not a CSRD or ESRS report,
            not a greenhouse gas audit, and not a regulated emissions inventory.
          </p>
        </section>

        {/* 3 PRICING */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Pricing and Payment
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Pricing is fixed per Attestation. No subscription applies. The
            applicable price is displayed on the Pricing page at the time of
            purchase.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
            Payments are processed through Stripe. VAT does not apply in
            accordance with the French VAT exemption regime (Article 293B of the
            French General Tax Code).
          </p>
        </section>

        {/* 4 DELIVERY */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Service Delivery
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Upon confirmation of payment, the Attestation is generated
            immediately and made available to the user as a downloadable PDF,
            including all verification elements.
          </p>
        </section>

        {/* 5 NO WITHDRAWAL */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. No Right of Withdrawal
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            In accordance with EU Directive 2011/83/EU, the right of withdrawal
            does not apply to digital services that are fully executed
            immediately after purchase with the user’s prior consent.
          </p>
        </section>

        {/* 6 USER RESPONSIBILITIES */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. User Responsibilities
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Users are solely responsible for the accuracy, completeness and
            relevance of the data they provide and for the context in which the
            Attestation is used.
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>accuracy of declared annual spending data</li>
            <li>appropriate communication of the Attestation to third parties</li>
            <li>use within suitable procurement, compliance or screening workflows</li>
          </ul>
        </section>

        {/* 7 LIABILITY */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Limitation of Liability
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Certif-Scope cannot be held liable for:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>incorrect or incomplete information provided by users</li>
            <li>decisions taken by institutions or third parties based on the Attestation</li>
            <li>use of the Attestation outside its intended indicative scope</li>
            <li>misinterpretation of the document by third parties</li>
          </ul>
        </section>

        {/* 8 IP */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Intellectual Property
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            All content, calculation logic, document structure, branding and
            visual elements of Certif-Scope are protected by intellectual
            property laws. Any reproduction or reuse without prior written
            authorization is prohibited.
          </p>
        </section>

        {/* 9 DATA PROTECTION */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Data Protection and ePrivacy
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Certif-Scope applies a strict privacy-by-design approach. Only data
            strictly necessary to generate the Attestation is processed.
            Detailed spending inputs are not stored after generation.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            The website does not use advertising cookies, tracking cookies or
            third-party analytics. No cookie consent banner is required under
            the EU ePrivacy Directive. Full details are provided in the Privacy
            Policy.
          </p>
        </section>

        {/* 10 MODIFICATION */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            10. Modification of the Terms
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            These Terms may be updated to reflect legal, technical or operational
            changes. The latest version is always available on the website.
          </p>
        </section>

        {/* 11 LAW */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            11. Applicable Law and Jurisdiction
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            These Terms are governed by French law. Any dispute relating to their
            interpretation or execution falls under the exclusive jurisdiction
            of the competent French courts.
          </p>
        </section>

        {/* 12 CONTACT */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            12. Contact
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            For any legal or contractual inquiry, please contact:
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>

      </div>
    </section>
  );
        }
