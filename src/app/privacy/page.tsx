export const metadata = {
  title: "Privacy Policy — Certif-Scope",
  description:
    "Privacy and ePrivacy policy explaining how Certif-Scope processes data with a strict privacy-by-design approach, no tracking and no cookies.",
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
          This Privacy Policy explains how Certif-Scope processes personal and non-personal
          data in accordance with GDPR and the EU ePrivacy Directive, following a strict
          privacy-by-design and data minimization approach.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-12">

        {/* SECTION 1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Privacy-by-Design Principles
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Certif-Scope is designed to operate without user accounts, without behavioral
            tracking and without unnecessary data collection. The service follows the
            principles of privacy by design and privacy by default.
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>no user accounts or profiles</li>
            <li>no advertising or behavioral tracking</li>
            <li>no third-party analytics</li>
            <li>no cookies requiring consent</li>
            <li>no storage of detailed financial input data</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Data You Voluntarily Provide
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Depending on how you interact with the website, you may voluntarily provide:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>an email address when contacting us</li>
            <li>optional company identification information</li>
            <li>annual spending (€) entered for CO₂e calculation</li>
            <li>content of contact or support requests</li>
          </ul>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. How CO₂e Calculations Are Processed
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            CO₂e calculations are performed locally in the user’s browser. This means that
            detailed financial inputs are processed on the user’s device and are not stored
            on Certif-Scope servers.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Only the final aggregated result required to generate the CO₂e Attestation is
            transmitted. No detailed spending breakdowns are retained.
          </p>
        </section>

        {/* SECTION 4 — ePRIVACY */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Cookies, Trackers and ePrivacy
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Certif-Scope does not use advertising cookies, tracking cookies or third-party
            analytics tools. The website does not rely on cookies that require user consent
            under the EU ePrivacy Directive.
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>no marketing or analytics cookies</li>
            <li>no cross-site or behavioral tracking</li>
            <li>no cookie consent banner required</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Any strictly necessary technical cookies, if used, are limited to essential
            site operation and do not store personal data.
          </p>
        </section>

        {/* SECTION 5 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Data Storage & Retention
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Certif-Scope does not permanently store calculation input data. Spending values
            are processed transiently and discarded immediately after attestation generation.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Emails and support messages may be retained for up to 12 months for operational
            purposes and can be deleted upon request.
          </p>
        </section>

        {/* SECTION 6 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Data Sharing
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Certif-Scope does not sell, rent or monetize personal data. Limited data processing
            may involve:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>hosting infrastructure providers</li>
            <li>email delivery services</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            All service providers operate under GDPR-compliant data processing agreements.
          </p>
        </section>

        {/* SECTION 7 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Your GDPR Rights
          </h2>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>right of access</li>
            <li>right to rectification</li>
            <li>right to erasure</li>
            <li>right to restriction of processing</li>
            <li>right to data portability</li>
            <li>right to object</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            To exercise your rights, contact:<br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>

        {/* SECTION 8 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Security Measures
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Certif-Scope applies HTTPS encryption and standard security practices to
            protect data against unauthorized access or disclosure.
          </p>
        </section>

        {/* SECTION 9 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Policy Updates
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This policy may be updated to reflect legal, technical or operational changes.
            Significant updates will be published on this page.
          </p>
        </section>

      </div>
    </div>
  );
              }
