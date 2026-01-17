export const metadata = {
  title: "Payment cancelled — Certif-Scope",
  description: "Your payment was cancelled. No charge has been made.",
};

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6">
      <section className="max-w-xl w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-10 text-center space-y-6">

        <h1 className="text-3xl font-extrabold text-[#0B3A63]">
          Payment cancelled
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Your payment was cancelled.
          <br />
          No charge has been made.
        </p>

        <div className="text-sm text-gray-500 leading-relaxed">
          You can return to the form and try again at any time.
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/generate"
            className="bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-8 py-3 rounded-xl transition"
          >
            Back to form
          </a>

          <a
            href="/pricing"
            className="border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white font-semibold px-8 py-3 rounded-xl transition"
          >
            View pricing
          </a>
        </div>

      </section>
    </main>
  );
}
