export const metadata = {
  title: "Contact — Certif-Scope",
  description: "Contact the Certif-Scope team for integrations, partnerships or technical questions.",
};

export default function ContactPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 pb-24">

      {/* HEADER UNIFORME */}
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-[#0B3A63] mb-4">
          Contact Us
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
          For partnership requests, technical inquiries or support questions,
          contact Certif-Scope using the form below. We reply within 24–48 hours.
        </p>
      </div>

      {/* CONTACT FORM */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10 border border-gray-200 dark:border-gray-700 max-w-3xl">
        <form
          className="space-y-6"
          method="POST"
          action="/api/contact"
        >
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
              rows={5}
              required
              className="w-full p-3 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-700"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="
              px-8 py-4 bg-primary text-white rounded-lg 
              font-semibold hover:opacity-90 transition
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
