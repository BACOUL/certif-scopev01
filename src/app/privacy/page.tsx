export const metadata = {
  title: "Privacy Policy — Certif-Scope",
  description: "GDPR-compliant privacy and data protection policy for Certif-Scope.",
};

export default function PrivacyPage() {
  return (
    <div id="privacy-page" className="max-w-7xl mx-auto px-6 pt-8 pb-24">

      {/* HEADER */}
      <div className="w-full mb-12">
        <h1
          data-i18n="privacy.title"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4"
        >
          Privacy Policy
        </h1>

        <p
          data-i18n="privacy.intro"
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl"
        >
          This Privacy Policy explains how Certif-Scope collects, processes and protects personal
          and non-personal data, following GDPR requirements and a strict minimal-data principle.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-12">

        {/* SECTION 1 */}
        <section>
          <h2
            data-i18n="privacy.section1.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            1. Data Collection Principles
          </h2>

          <p
            data-i18n="privacy.section1.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
          >
            Certif-Scope follows privacy-by-design and data minimization. We collect only the
            information strictly necessary for:
          </p>

          <ul
            data-i18n="privacy.section1.list"
            className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2"
          >
            <li>communication with users</li>
            <li>attestation generation and delivery</li>
            <li>verification of attestation integrity</li>
            <li>security and fraud prevention</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2
            data-i18n="privacy.section2.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            2. Data You Provide
          </h2>

          <p
            data-i18n="privacy.section2.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Users may voluntarily submit the following:
          </p>

          <ul
            data-i18n="privacy.section2.list"
            className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 mt-3"
          >
            <li>email address (for communication)</li>
            <li>optional company identification</li>
            <li>annual spending (€) for CO₂e calculation</li>
            <li>content of contact requests</li>
          </ul>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2
            data-i18n="privacy.section3.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            3. Data Automatically Collected
          </h2>

          <p
            data-i18n="privacy.section3.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3"
          >
            For security and statistical purposes, we may log:
          </p>

          <ul
            data-i18n="privacy.section3.list"
            className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2"
          >
            <li>IP address (anonymized when technically possible)</li>
            <li>browser and device information</li>
            <li>non-personal analytics (page views, interactions)</li>
          </ul>

          <p
            data-i18n="privacy.section3.text2"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
          >
            No advertising cookies or behavioral tracking are used.
          </p>
        </section>

        {/* SECTION 4 */}
        <section>
          <h2
            data-i18n="privacy.section4.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            4. How We Use the Data
          </h2>

          <p
            data-i18n="privacy.section4.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Personal and technical data is used strictly for:
          </p>

          <ul
            data-i18n="privacy.section4.list"
            className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 mt-3"
          >
            <li>responding to inquiries</li>
            <li>generating CO₂e attestations</li>
            <li>verifying cryptographic integrity</li>
            <li>website security and performance</li>
          </ul>
        </section>

        {/* SECTION 5 */}
        <section>
          <h2
            data-i18n="privacy.section5.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            5. Data Storage & Retention
          </h2>

          <p
            data-i18n="privacy.section5.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
          >
            Certif-Scope does not permanently store attestation input data. Spending values are
            processed temporarily in memory and never saved in databases.
          </p>

          <p
            data-i18n="privacy.section5.text2"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Emails and contact messages may be retained for support purposes for up to 12 months
            and can be deleted upon request.
          </p>
        </section>

        {/* SECTION 6 */}
        <section>
          <h2
            data-i18n="privacy.section6.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            6. Sharing of Information
          </h2>

          <p
            data-i18n="privacy.section6.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            We never sell or rent personal data. Limited sharing may occur with:
          </p>

          <ul
            data-i18n="privacy.section6.list"
            className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 mt-3"
          >
            <li>hosting infrastructure (Vercel)</li>
            <li>email processing systems</li>
          </ul>

          <p
            data-i18n="privacy.section6.text2"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
          >
            All third parties operate under GDPR-compliant agreements.
          </p>
        </section>

        {/* SECTION 7 */}
        <section>
          <h2
            data-i18n="privacy.section7.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            7. GDPR Rights
          </h2>

          <p
            data-i18n="privacy.section7.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3"
          >
            Users have the following GDPR rights:
          </p>

          <ul
            data-i18n="privacy.section7.list"
            className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2"
          >
            <li>access</li>
            <li>rectification</li>
            <li>erasure</li>
            <li>portability</li>
            <li>restriction of processing</li>
            <li>objection</li>
          </ul>

          <p
            data-i18n="privacy.section7.text2"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
          >
            To exercise your rights, contact:
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>

        {/* SECTION 8 */}
        <section>
          <h2
            data-i18n="privacy.section8.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            8. Security Measures
          </h2>

          <p
            data-i18n="privacy.section8.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            We apply HTTPS, access control, firewall protection and industry-standard security
            measures to reduce risks of unauthorized access or disclosure.
          </p>
        </section>

        {/* SECTION 9 */}
        <section>
          <h2
            data-i18n="privacy.section9.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            9. Updates to This Policy
          </h2>

          <p
            data-i18n="privacy.section9.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            This policy may be updated when technical, legal or operational changes apply. Users
            will be notified in the event of substantial modifications.
          </p>
        </section>

      </div>
    </div>
  );
}
