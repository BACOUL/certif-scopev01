export const metadata = {
  title: "Terms of Service — Certif-Scope",
  description:
    "Terms of Service (CGV) governing the use of Certif-Scope. Pricing, responsibilities, legal scope and limitations.",
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
        These Terms of Service define the rules governing the use of Certif-Scope
        and the issuance of digital CO₂e attestations. By generating an
        attestation, you agree to all conditions stated below.
      </p>

      {/* CONTENT BLOCK */}
      <div className="max-w-4xl mx-auto space-y-12">

        {/* 1 PURPOSE */}
        <section id="t1">
          <h2
            data-i18n="terms.1.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            1. Purpose
          </h2>
          <p
            data-i18n="terms.1.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            These Terms of Service establish the contractual relationship
            regarding the generation of CO₂e attestations through the
            Certif-Scope platform based on user-supplied annual spending (€).
          </p>
        </section>

        {/* 2 SERVICE DESCRIPTION */}
        <section id="t2">
          <h2
            data-i18n="terms.2.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            2. Service Description
          </h2>

          <p
            data-i18n="terms.2.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
          >
            Certif-Scope transforms annual spending (€) into an indicative CO₂e
            value using a deterministic spend-based calculation method. The PDF
            attestation includes:
          </p>

          <ul
            data-i18n="terms.2.list"
            className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2"
          >
            <li>instant CO₂e estimation</li>
            <li>downloadable institutional-grade PDF</li>
            <li>verification URL + QR code</li>
            <li>unique verification ID</li>
            <li>cryptographic hash integrity check</li>
            <li>dataset name and version</li>
            <li>validity of 1 year</li>
          </ul>

          <p
            data-i18n="terms.2.text2"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
          >
            The attestation is not a CSRD/ESRS report, not a GHG audit and not an
            official regulated emissions inventory.
          </p>
        </section>

        {/* 3 PRICING */}
        <section id="t3">
          <h2
            data-i18n="terms.3.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            3. Pricing & Payment
          </h2>

          <p
            data-i18n="terms.3.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Pricing is fixed per attestation. No subscription applies. Current
            prices are displayed on the Pricing page.
          </p>

          <p
            data-i18n="terms.3.text2"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3"
          >
            Payments are processed securely via Stripe. VAT does not apply
            (franchise en base – Art. 293B CGI).
          </p>
        </section>

        {/* 4 DELIVERY */}
        <section id="t4">
          <h2
            data-i18n="terms.4.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            4. Delivery of the Service
          </h2>
          <p
            data-i18n="terms.4.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Upon payment confirmation, the attestation is generated instantly and
            made available as a downloadable PDF with a permanent verification link.
          </p>
        </section>

        {/* 5 RIGHT OF WITHDRAWAL */}
        <section id="t5">
          <h2
            data-i18n="terms.5.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            5. No Right of Withdrawal
          </h2>
          <p
            data-i18n="terms.5.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Under EU Directive 2011/83/UE on digital services executed immediately,
            the right of withdrawal does not apply once the attestation has been generated.
          </p>
        </section>

        {/* 6 USER RESPONSIBILITIES */}
        <section id="t6">
          <h2
            data-i18n="terms.6.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            6. User Responsibilities
          </h2>

          <p
            data-i18n="terms.6.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
          >
            Users are fully responsible for the spending data they enter and for
            the usage of the attestation in the appropriate context.
          </p>

          <ul
            data-i18n="terms.6.list"
            className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2"
          >
            <li>accuracy of annual spending data</li>
            <li>interpretation of the document by third parties</li>
            <li>use within procurement/compliance workflows</li>
          </ul>
        </section>

        {/* 7 LIABILITY */}
        <section id="t7">
          <h2
            data-i18n="terms.7.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            7. Limitation of Liability
          </h2>

          <p
            data-i18n="terms.7.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
          >
            The operator cannot be held liable for:
          </p>

          <ul
            data-i18n="terms.7.list"
            className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2"
          >
            <li>incorrect or incomplete spending data entered by the user</li>
            <li>institutional decisions based on the document</li>
            <li>use outside intended workflows</li>
            <li>misinterpretation by third parties</li>
          </ul>
        </section>

        {/* 8 INTELLECTUAL PROPERTY */}
        <section id="t8">
          <h2
            data-i18n="terms.8.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            8. Intellectual Property
          </h2>
          <p
            data-i18n="terms.8.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            All content, structure, verification logic and PDF design are protected.
            Any reproduction or redistribution without written authorization
            is strictly prohibited.
          </p>
        </section>

        {/* 9 DATA PROTECTION */}
        <section id="t9">
          <h2
            data-i18n="terms.9.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            9. Data Protection
          </h2>
          <p
            data-i18n="terms.9.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Certif-Scope processes only the data necessary to generate the
            attestation. Spending data is not stored after generation. See the
            Privacy Policy for full details.
          </p>
        </section>

        {/* 10 MODIFICATION */}
        <section id="t10">
          <h2
            data-i18n="terms.10.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            10. Modification of Terms
          </h2>
          <p
            data-i18n="terms.10.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            These Terms may be updated to reflect legal, technical or operational
            changes. Significant updates will be announced on the website.
          </p>
        </section>

        {/* 11 APPLICABLE LAW */}
        <section id="t11">
          <h2
            data-i18n="terms.11.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            11. Applicable Law
          </h2>
          <p
            data-i18n="terms.11.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            These Terms are governed by French law. Any dispute will fall under
            the jurisdiction of French courts.
          </p>
        </section>

        {/* 12 CONTACT */}
        <section id="t12">
          <h2
            data-i18n="terms.12.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            12. Contact
          </h2>
          <p
            data-i18n="terms.12.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            For legal inquiries, contact:<br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>
      </div>
    </section>
  );
            }
