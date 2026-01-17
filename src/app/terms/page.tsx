export const metadata = {
  title: "Terms of Service — Certif-Scope",
  description:
    "Terms of Service governing the use of Certif-Scope, including pricing, responsibilities, privacy, ePrivacy compliance and legal scope.",
};

export default function TermsPage() {
  return (
    <section
      id="terms"
      data-section="terms"
      className="max-w-7xl mx-auto px-6 pt-10 pb-24"
    >
      {/* HEADER */}
      <p
        data-i18n="terms.label"
        className="uppercase text-xs md:text-sm font-medium text-[#64748B] tracking-wider mb-3"
      >
        Terms of Service — CGV
      </p>

      <h1
        data-i18n="terms.title"
        className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6"
      >
        Terms of Service
      </h1>

      <p
        data-i18n="terms.intro"
        className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mb-12"
      >
        These Terms of Service define the conditions governing the use of Certif-Scope
        and the issuance of standardized CO₂e Attestations. By generating an
        attestation, you agree to all conditions stated below.
      </p>

      {/* CONTENT BLOCK */}
      <div className="max-w-4xl mx-auto space-y-12">

        {/* 1 PURPOSE */}
        <section id="t1">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Purpose
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            These Terms establish the contractual framework applicable to the
            generation of indicative CO₂e Attestations through the Certif-Scope
            platform, based on annual spending (€) provided by the user.
          </p>
        </section>

        {/* 2 SERVICE DESCRIPTION */}
        <section id="t2">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Service Description
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Certif-Scope converts annual spending (€) into an indicative CO₂e value
            using a deterministic spend-based calculation model. The issued PDF
            Attestation includes:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>instant indicative CO₂e result</li>
            <li>downloadable institutional-grade PDF</li>
            <li>unique attestation reference identifier</li>
            <li>verification link and QR code</li>
            <li>built-in document integrity safeguards</li>
            <li>dataset name and version</li>
            <li>validity period of one (1) year</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            The Attestation is not a certification, not a CSRD or ESRS report, not a
            greenhouse gas audit, and not a regulated emissions inventory.
          </p>
        </section>

        {/* 3 PRICING */}
        <section id="t3">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Pricing & Payment
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Pricing is fixed per Attestation. No subscription applies. Applicable
            prices are displayed on the Pricing page at the time of purchase.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
            Payments are processed via Stripe. VAT does not apply
            (French VAT exemption – Article 293B of the CGI).
          </p>
        </section>

        {/* 4 DELIVERY */}
        <section id="t4">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Delivery of the Service
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Upon confirmation of payment, the Attestation is generated immediately
            and made available as a downloadable PDF including a verification reference.
          </p>
        </section>

        {/* 5 RIGHT OF WITHDRAWAL */}
        <section id="t5">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. No Right of Withdrawal
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            In accordance with EU Directive 2011/83/EU, the right of withdrawal does
            not apply to digital services executed immediately after purchase.
          </p>
        </section>

        {/* 6 USER RESPONSIBILITIES */}
        <section id="t6">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. User Responsibilities
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Users are solely responsible for the accuracy of the data they provide
            and for the context in which the Attestation is used.
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>accuracy of annual spending data</li>
            <li>communication of the Attestation to third parties</li>
            <li>use within appropriate procurement or compliance workflows</li>
          </ul>
        </section>

        {/* 7 LIABILITY */}
        <section id="t7">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Limitation of Liability
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Certif-Scope cannot be held liable for:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>incorrect or incomplete data entered by the user</li>
            <li>institutional or commercial decisions based on the Attestation</li>
            <li>use outside the intended scope described on the website</li>
            <li>misinterpretation by third parties</li>
          </ul>
        </section>

        {/* 8 INTELLECTUAL PROPERTY */}
        <section id="t8">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Intellectual Property
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            All website content, calculation logic, document structure and visual
            elements are protected. Any reproduction without prior written consent
            is prohibited.
          </p>
        </section>

        {/* 9 DATA PROTECTION & ePRIVACY */}
        <section id="t9">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Data Protection & ePrivacy
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Certif-Scope applies a strict privacy-by-design approach. Only the data
            strictly necessary to generate the Attestation is processed. Detailed
            spending inputs are not stored after generation.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            The website does not use advertising cookies, tracking cookies or
            third-party analytics. No cookie consent banner is required under the
            EU ePrivacy Directive. Full details are available in the Privacy Policy.
          </p>
        </section>

        {/* 10 MODIFICATION */}
        <section id="t10">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            10. Modification of Terms
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            These Terms may be updated to reflect legal, technical or operational
            changes. Updates are published on the website.
          </p>
        </section>

        {/* 11 APPLICABLE LAW */}
        <section id="t11">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            11. Applicable Law
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            These Terms are governed by French law. Any dispute falls under the
            jurisdiction of French courts.
          </p>
        </section>

        {/* 12 CONTACT */}
        <section id="t12">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            12. Contact
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            For legal inquiries, contact:<br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>

      </div>
    </section>
  );
          }
