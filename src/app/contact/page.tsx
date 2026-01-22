export const metadata = {
  title: "Contact Certif-Scope — Support, Partnerships & Institutional Inquiries",
  description:
    "Contact Certif-Scope for support, partnerships or institutional inquiries related to indicative spend-based CO₂e attestations. GDPR minimal-data processing.",
};

export default function ContactPage() {
  return (
    <section
      id="contact"
      data-section="contact"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* MICRO LABEL */}
      <p
        data-i18n="contact.label"
        className="uppercase text-xs md:text-sm font-medium text-[#64748B] tracking-wider text-center mb-3"
      >
        Certif-Scope — Contact
      </p>

      {/* H1 */}
      <h1
        data-i18n="contact.title"
        className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]"
      >
        Contact Certif-Scope
      </h1>

      {/* INTRO */}
      <p
        data-i18n="contact.description"
        className="text-center text-gray-600 dark:text-gray-300 text-lg mt-4 max-w-3xl mx-auto leading-relaxed"
      >
        Use this form for support requests, partnership discussions or institutional
        inquiries related to Certif-Scope’s indicative, spend-based CO₂e attestation.
        Messages are processed manually and answered within 24–48 hours.
      </p>

      <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-12" />

      {/* FORM CONTAINER */}
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-10 border border-gray-200 dark:border-gray-700">
        <form
          method="POST"
          action="/api/contact"
          role="form"
          aria-label="Contact form"
          className="space-y-6"
        >
          {/* HONEYPOT */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          {/* NAME */}
          <div>
            <label
              htmlFor="name"
              data-i18n="contact.name.label"
              className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              aria-required="true"
              placeholder="John Doe"
              className="w-full p-3 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-700"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label
              htmlFor="email"
              data-i18n="contact.email.label"
              className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              aria-required="true"
              placeholder="you@company.com"
              className="w-full p-3 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-700"
            />
          </div>

          {/* SUBJECT */}
          <div>
            <label
              htmlFor="topic"
              data-i18n="contact.topic.label"
              className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
            >
              Inquiry type
            </label>
            <select
              id="topic"
              name="topic"
              required
              aria-required="true"
              className="w-full p-3 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-700"
            >
              <option value="support">Support</option>
              <option value="partnership">Partnership discussion</option>
              <option value="institutional">Institutional / compliance inquiry</option>
              <option value="billing">Billing</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <label
              htmlFor="message"
              data-i18n="contact.message.label"
              className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              aria-required="true"
              placeholder="Describe your request…"
              className="w-full p-3 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-700"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            data-i18n="contact.submit"
            className="w-full bg-[#0B3A63] hover:bg-[#083253] text-white font-semibold px-8 py-4 rounded-xl shadow-md transition text-base"
          >
            Send inquiry
          </button>
        </form>
      </div>

      {/* LEGAL / GDPR */}
      <p
        data-i18n="contact.footer.disclaimer"
        className="text-gray-600 dark:text-gray-300 mt-10 text-xs text-center leading-relaxed max-w-xl mx-auto"
      >
        Messages are processed solely to respond to your inquiry.
        Certif-Scope does not store personal or financial data beyond what is
        strictly necessary. No user accounts or historical records are created.
        GDPR minimal-data processing applies.
      </p>
    </section>
  );
            }
