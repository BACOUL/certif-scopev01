export const metadata = {
  title: "Payment successful — Certif-Scope",
  description: "Your payment was successful. Your CO₂e attestation will be generated.",
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6">
      <section className="max-w-xl w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-10 text-center space-y-6">

        <h1 className="text-3xl font-extrabold text-[#0B3A63]">
          Payment successful
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Your payment has been confirmed.
          <br />
          Your CO₂e attestation will now be generated.
        </p>

        <div className="text-sm text-gray-500 leading-relaxed">
          You may safely close this page.
          <br />
          A verification link will be included in your attestation.
        </div>

        <div className="pt-4">
          <a
            href="/"
            className="inline-block bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-8 py-3 rounded-xl transition"
          >
            Return to homepage
          </a>
        </div>

      </section>
    </main>
  );
}
