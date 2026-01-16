export const metadata = {
  title: "Cookie Policy — Certif-Scope",
  description: "Information about cookies and tracking technologies used by Certif-Scope.",
};

export default function CookiePolicyPage() {
  return (
    <div id="cookie-policy-page" className="max-w-7xl mx-auto px-6 pt-8 pb-24">

      {/* HEADER */}
      <div className="w-full mb-12">
        <h1
          data-i18n="cookies.title"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4"
        >
          Cookie Policy
        </h1>

        <p
          data-i18n="cookies.intro"
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl"
        >
          This Cookie Policy explains how Certif-Scope uses cookies and similar technologies.
          Our approach follows a strict data minimization principle and complies with GDPR
          and EU ePrivacy requirements.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-12">

        {/* SECTION 1 */}
        <section>
          <h2
            data-i18n="cookies.section1.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            1. What Are Cookies
          </h2>

          <p
            data-i18n="cookies.section1.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Cookies are small text files stored on your device when you visit a website.
            They are commonly used to ensure basic site functionality, security and
            user preferences.
          </p>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2
            data-i18n="cookies.section2.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            2. Do We Use Cookies?
          </h2>

          <p
            data-i18n="cookies.section2.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Yes, Certif-Scope uses a very limited number of cookies strictly necessary
            for technical operation and security. We do not use advertising cookies,
            profiling cookies or cross-site tracking technologies.
          </p>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2
            data-i18n="cookies.section3.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            3. Types of Cookies Used
          </h2>

          <h3
            data-i18n="cookies.section3.subtitle1"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Strictly Necessary Cookies
          </h3>

          <p
            data-i18n="cookies.section3.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
          >
            These cookies are essential for the website to function correctly.
            They enable security features, navigation and basic user preferences.
            Disabling them may affect site functionality.
          </p>

          <h3
            data-i18n="cookies.section3.subtitle2"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Analytics Cookies
          </h3>

          <p
            data-i18n="cookies.section3.text2"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Certif-Scope does not use analytics or audience measurement cookies
            that track individual users or behavior across websites.
          </p>
        </section>

        {/* SECTION 4 */}
        <section>
          <h2
            data-i18n="cookies.section4.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            4. Third-Party Cookies
          </h2>

          <p
            data-i18n="cookies.section4.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Certif-Scope does not embed third-party advertising or tracking cookies.
            Payment operations are handled by Stripe on its own infrastructure and
            are subject to Stripe’s respective cookie and privacy policies.
          </p>
        </section>

        {/* SECTION 5 */}
        <section>
          <h2
            data-i18n="cookies.section5.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            5. Cookie Duration
          </h2>

          <p
            data-i18n="cookies.section5.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Most cookies used by Certif-Scope are session-based and are automatically
            deleted when you close your browser. Any necessary technical cookies
            have a limited lifespan and are not retained longer than required.
          </p>
        </section>

        {/* SECTION 6 */}
        <section>
          <h2
            data-i18n="cookies.section6.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            6. How to Manage Cookies
          </h2>

          <p
            data-i18n="cookies.section6.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            You can control or disable cookies through your browser settings.
            Please note that disabling strictly necessary cookies may affect
            the proper functioning of the website.
          </p>
        </section>

        {/* SECTION 7 */}
        <section>
          <h2
            data-i18n="cookies.section7.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            7. Updates to This Cookie Policy
          </h2>

          <p
            data-i18n="cookies.section7.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            This Cookie Policy may be updated to reflect legal, technical or
            operational changes. Any significant updates will be communicated
            through this page.
          </p>
        </section>

        {/* SECTION 8 */}
        <section>
          <h2
            data-i18n="cookies.section8.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            8. Contact
          </h2>

          <p
            data-i18n="cookies.section8.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            If you have any questions regarding this Cookie Policy, you may contact us at:
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>

      </div>
    </div>
  );
}
