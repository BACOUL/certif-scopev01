export const metadata = {
  title: "Contact — Certif-Scope",
  description: "Contact Certif-Scope for partnerships, support and technical inquiries. GDPR compliant and minimal-data contact form.",
};

export default function ContactPage() {
  return (
    <section
      id="contact"
      data-section="contact"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      <p
        data-i18n="contact.label"
        className="uppercase text-xs md:text-sm font-medium text-[#64748B] tracking-wider text-center mb-3"
      >
        CO₂e Attestations — Contact
      </p>

      <h1
        data-i18n="contact.title"
        className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]"
      >
        Contact Us
      </h1>

      <p
        data-i18n="contact.description"
        className="text-center text-gray-600 dark:text-gray-300 text-lg mt-4 max-w-3xl mx-auto leading-relaxed"
      >
        For support, partnership requests or technical inquiries, contact Certif-Scope using the form below. 
        We reply within 24–48 hours. No data is stored beyond what is required to answer your request.
      </p>

      <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-12" />

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-10 border border-gray-200 dark:border-gray-700">
        <form
          method="POST"
          action="/api/contact"
          role="form"
          aria-label="Contact form"
          className="space-y-6"
        >
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <div>
            <label
              htmlFor="name"
              data-i18n="contact.name.label"
              className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              required
              aria-required="true"
              data-i18n="contact.name.placeholder"
              placeholder="John Doe"
              className="w-full p-3 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-700"
            />
          </div>

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
              data-i18n="contact.email.placeholder"
              placeholder="you@example.com"
              className="w-full p-3 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-700"
            />
          </div>

          <div>
            <label
              htmlFor="topic"
              data-i18n="contact.topic.label"
              className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
            >
              Subject
            </label>
            <select
              id="topic"
              name="topic"
              required
              aria-required="true"
              className="w-full p-3 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-700"
            >
              <option value="support" data-i18n="contact.topic.support">
                Support
              </option>
              <option value="partnership" data-i18n="contact.topic.partnership">
                Partnership Request
              </option>
              <option value="technical" data-i18n="contact.topic.technical">
                Technical Question
              </option>
              <option value="billing" data-i18n="contact.topic.billing">
                Billing
              </option>
            </select>
          </div>

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
              data-i18n="contact.message.placeholder"
              placeholder="Write your message..."
              className="w-full p-3 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-700"
            />
          </div>

          <button
            type="submit"
            data-i18n="contact.submit"
            className="w-full bg-[#1FB6C1] hover:bg-[#17a2a8] text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition text-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      <p
        data-i18n="contact.footer.disclaimer"
        className="text-gray-600 dark:text-gray-300 mt-10 text-xs text-center leading-relaxed max-w-xl mx-auto"
      >
        Your message will be processed securely. Certif-Scope does not store personal or spending data 
        beyond what is strictly necessary to respond. GDPR minimal-data policy applies.
      </p>
    </section>
  );
              }
