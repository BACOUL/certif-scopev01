export const metadata = {
  title: "Cookie Policy — Certif-Scope",
  description:
    "Cookie Policy explaining the limited use of strictly necessary cookies by Certif-Scope, in compliance with GDPR and EU ePrivacy regulations.",
};

export default function CookiePolicyPage() {
  return (
    <section
      id="cookie-policy"
      data-section="cookie-policy"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* CANONICAL PAGE HEADER — IDENTICAL TO PRODUCT / PRICING / PRIVACY / CONTACT */}
      <header className="mb-14">
        <p
          data-i18n="cookies.label"
          className="uppercase text-xs tracking-wider text-[#64748B] mb-3"
        >
          Data Protection & ePrivacy
        </p>

        <h1
          data-i18n="cookies.title"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6"
        >
          Cookie Policy
        </h1>

        <p
          data-i18n="cookies.intro"
          className="text-lg text-gray-700 leading-relaxed max-w-3xl"
        >
          This Cookie Policy explains how Certif-Scope uses cookies and similar
          technologies. Certif-Scope follows a strict data minimization approach
          and complies with the General Data Protection Regulation (GDPR) and
          EU ePrivacy requirements.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT — CANONICAL WIDTH */}
      <div className="max-w-4xl mx-auto space-y-14">
        {/* SECTION 1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. What Are Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Cookies are small text files stored on your device when you visit a
            website. They are commonly used to enable essential website
            functionality, security mechanisms and basic user preferences.
          </p>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Use of Cookies by Certif-Scope
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope uses a very limited number of cookies that are strictly
            necessary for the technical operation and security of the website.
            No advertising cookies, profiling cookies or cross-site tracking
            technologies are used.
          </p>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Categories of Cookies
          </h2>

          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Strictly Necessary Cookies
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            These cookies are required for the website to function correctly.
            They support security features, navigation and basic technical
            operations. Disabling them may impair the proper functioning of
            the website.
          </p>

          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Analytics and Tracking Cookies
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope does not use analytics, audience measurement or tracking
            cookies that identify individual users or monitor behavior across
            websites.
          </p>
        </section>

        {/* SECTION 4 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Third-Party Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope does not embed third-party advertising or tracking
            services. Payment transactions are processed by Stripe on its own
            infrastructure and are subject to Stripe’s independent cookie and
            privacy policies.
          </p>
        </section>

        {/* SECTION 5 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Cookie Retention Period
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Cookies used by Certif-Scope are primarily session-based and are
            automatically deleted when you close your browser. Any necessary
            technical cookies have a limited lifespan and are not retained longer
            than strictly required.
          </p>
        </section>

        {/* SECTION 6 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Managing Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You can control or disable cookies through your browser settings.
            Please note that disabling strictly necessary cookies may affect
            the availability or functionality of certain parts of the website.
          </p>
        </section>

        {/* SECTION 7 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Updates to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This Cookie Policy may be updated to reflect legal, technical or
            operational changes. Any material updates will be published on
            this page.
          </p>
        </section>

        {/* SECTION 8 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Contact
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For any questions related to this Cookie Policy, you may contact:
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>
      </div>
    </section>
  );
            }
