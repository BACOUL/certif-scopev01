export const metadata = {
  title: "Contact — Certif-Scope",
  description: "Get in touch with Certif-Scope for support, partnerships or technical questions.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-24">

      {/* HEADER UNIFORME */}
      <div className="w-full mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Contact Us
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
          For partnership requests, technical inquiries or support questions,
          contact Certif-Scope using the form below. We reply within 24–48 hours.
        </p>
      </div>

      {/* FORM CONTAINER */}
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-10 border border-gray-200 dark:border-gray-700">

        <form method="POST" action="/api/contact" className="space-y-6">

          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Your Name
            </label>
            <input
              name="name"
              required
              className="w-full p-3 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-700"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full p-3 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-700"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              required
              className="w-full p-3 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-700"
              placeholder="Write your message..."
            />
          </div>

          {/* CTA BUTTON IDENTIQUE À PRICING */}
          <button
            type="submit"
            className="mt-4 w-full bg-[#1FB6C1] hover:bg-[#17a2a8] text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition text-lg"
          >
            Send Message
          </button>
        </form>

      </div>

      {/* FOOTNOTE */}
      <p className="text-gray-600 dark:text-gray-300 mt-10 text-sm text-center">
        Your message will be processed securely. We do not store data beyond what is required to respond.
      </p>

    </div>
  );
}
