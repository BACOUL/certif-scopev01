export const metadata = {
  title: "Generate attestation — Certif-Scope",
};

export default function GeneratePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6">
      <section className="max-w-xl w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-10 text-center space-y-6">
        <h1 className="text-3xl font-extrabold text-[#0B3A63]">
          Generate your CO₂e attestation
        </h1>

        <p className="text-gray-600">
          This page is used to collect data before payment.
        </p>
      </section>
    </main>
  );
}
