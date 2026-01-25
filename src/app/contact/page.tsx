export const metadata = {
  title: "Contact — Certif-Scope",
  description:
    "Contact Certif-Scope for support, institutional inquiries or general information related to carbon attestations.",
};

export default function ContactPage() {
  return (
    <section
      id="contact"
      data-section="contact"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* CANONICAL PAGE HEADER — STRICT ALIGNMENT */}
      <header className="mb-14">
        <p
          data-i18n="contact.label"
          className="uppercase text-xs tracking-wider text-[#64748B] mb-3"
        >
          Contact & Inquiries
        </p>

        <h1
          data-i18n="contact.title"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6"
        >
          Contact
        </h1>

        <p
          data-i18n="contact.intro"
          className="text-lg text-gray-700 leading-relaxed max-w-3xl"
        >
          This page provides official contact information for Certif-Scope,
          including support, institutional inquiries and general requests
          related to carbon attestations and methodology.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT — CANONICAL WIDTH */}
      <div className="max-w-4xl space-y-14">

        {/* SECTION 1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Contact addresses
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope can be contacted using the following official email
            addresses, depending on the nature of your request:
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              <strong>support@certif-scope.com</strong> — technical support,
              attestation generation, access keys
            </li>
            <li>
              <strong>contact@certif-scope.com</strong> — institutional,
              methodological or general inquiries
            </li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Processing of inquiries
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Messages are processed exclusively for the purpose of responding to
            the inquiry received. Certif-Scope does not operate a ticketing
            system and does not create user accounts.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Correspondence may be retained for operational and support purposes
            for a limited period, in accordance with the Privacy Policy.
          </p>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Data protection notice
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Please do not include sensitive personal data or confidential
            financial information in your message. Certif-Scope processes only
            the information strictly necessary to handle your request.
          </p>
        </section>

      </div>
    </section>
  );
}
