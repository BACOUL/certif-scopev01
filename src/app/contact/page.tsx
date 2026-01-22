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
      {/* CANONICAL PAGE HEADER — IDENTICAL TO PRODUCT / PRICING / PRIVACY / PARTNERS */}
      <header className="mb-14">
        <p
          data-i18n="contact.label"
          className="uppercase text-xs tracking-wider text-[#64748B] mb-3"
        >
          Certif-Scope — Contact
        </p>

        <h1
          data-i18n="contact.title"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6"
        >
          Contact Certif-Scope
        </h1>

        <p
          data-i18n="contact.description"
          className="text-lg text-gray-700 leading-relaxed max-w-3xl"
        >
          Use this form for support requests, partnership discussions or
          institutional inquiries related to Certif-Scope’s indicative,
          spend-based CO₂e attestation. Messages are processed manually and
          answered within 24–48 hours.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* FORM CONTAINER — CANONICAL WIDTH */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-10 border border-gray-200">
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
              className="block mb-2 font-semibold text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              aria-required="true"
              placeholder="John Doe"
              className="w-full p-3 border rounded-md bg-white"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label
              htmlFor="email"
              data-i18n="contact.email.label"
              className="block mb-2 font-semibold text-gray-700"
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
              className="w-full p-3 border rounded-md bg-white"
            />
          </div>

          {/* SUBJECT */}
          <div>
            <label
              htmlFor="topic"
              data-i18n="contact.topic.label"
              className="block mb-2 font-semibold text-gray-700"
            >
              Inquiry type
            </label>
            <select
              id="topic"
              name="topic"
              required
              aria-required="true"
              className="w-full p-3 border rounded-md bg-white"
            >
              <option value="support">Support</option>
              <option value="partnership">Partnership discussion</option>
              <option value="institutional">
                Institutional / compliance inquiry
              </option>
              <option value="billing">Billing</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <label
              htmlFor="message"
              data-i18n="contact.message.label"
              className="block mb-2 font-semibold text-gray-700"
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
              className="w-full p-3 border rounded-md bg-white"
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

      {/* LEGAL / GDPR — CANONICAL FOOTNOTE */}
      <p
        data-i18n="contact.footer.disclaimer"
        className="text-gray-600 mt-10 text-xs text-center leading-relaxed max-w-xl mx-auto"
      >
        Messages are processed solely to respond to your inquiry. Certif-Scope
        does not store personal or financial data beyond what is strictly
        necessary. No user accounts or historical records are created. GDPR
        minimal-data processing applies.
      </p>
    </section>
  );
}
