export const metadata = {
  title: "Paiement annulé — Certif-Scope",
  description: "Votre paiement a été annulé. Aucun montant n’a été débité.",
};

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6">
      <section className="max-w-xl w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-10 text-center space-y-6">

        <h1 className="text-3xl font-extrabold text-[#0B3A63]">
          Paiement annulé
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Votre paiement a été annulé.
          <br />
          Aucun montant n’a été débité.
        </p>

        <div className="text-sm text-gray-500 leading-relaxed">
          Vous pouvez revenir au formulaire et réessayer à tout moment.
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/fr/generate"
            className="bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-8 py-3 rounded-xl transition"
          >
            Retour au formulaire
          </a>

          <a
            href="/fr/pricing"
            className="border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white font-semibold px-8 py-3 rounded-xl transition"
          >
            Voir les tarifs
          </a>
        </div>

      </section>
    </main>
  );
}
