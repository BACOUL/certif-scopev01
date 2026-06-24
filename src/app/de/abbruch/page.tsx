import type { Metadata } from "next";

/* ======================================================
   SEO METADATA - ZAHLUNG ABGEBROCHEN
   Payment cancellation page remains noindex after public activation.
====================================================== */

export const metadata: Metadata = {
  title: "Zahlung abgebrochen - Certif-Scope",
  description:
    "Ihre Zahlung wurde abgebrochen. Es wurde kein Betrag belastet.",
  robots: { index: false, follow: true },
};

export default function AbbruchPageDE() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6">
      <section className="max-w-xl w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-10 text-center space-y-6">
        <h1 className="text-3xl font-extrabold text-[#0B3A63]">
          Zahlung abgebrochen
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Ihre Zahlung wurde abgebrochen.
          <br />
          Es wurde kein Betrag belastet.
        </p>

        <div className="text-sm text-gray-500 leading-relaxed">
          Sie koennen zum Formular zurueckkehren und es jederzeit erneut
          versuchen.
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/de/erstellen"
            className="bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-8 py-3 rounded-xl transition"
          >
            Zurueck zum Formular
          </a>

          <a
            href="/de/preise"
            className="border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white font-semibold px-8 py-3 rounded-xl transition"
          >
            Preise ansehen
          </a>
        </div>
      </section>
    </main>
  );
}
