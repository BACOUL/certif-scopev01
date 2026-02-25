import GenerateAttestationButton from "@/components/GenerateAttestationButton";

export const metadata = {
  title: "Prix d’un bilan carbone PME simplifié — Certif-Scope",
  description:
    "Combien coûte un bilan carbone PME ? Alternative simplifiée spend-based à 89€. PDF prêt à transmettre, valable 1 an.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/pricing/",
    languages: {
      fr: "https://www.certif-scope.com/fr/pricing/",
      en: "https://www.certif-scope.com/pricing/",
    },
  },
};

export default function PricingPageFR() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-24">

      {/* HEADER SEO STRATÉGIQUE */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Bilan carbone PME — Prix
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Combien coûte un bilan carbone PME ?
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Un bilan carbone complet pour une PME coûte généralement entre 
          <strong> 3 000€ et 10 000€</strong> selon la taille et le périmètre.
          Certif-Scope propose une alternative simplifiée basée sur les dépenses
          (méthode spend-based), adaptée aux demandes de preuve minimale
          (appel d’offre, fournisseur, banque), à partir de <strong>89€</strong>.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* POURQUOI MOINS CHER */}
      <section className="mb-16 max-w-4xl">
        <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
          Pourquoi 89€ au lieu de plusieurs milliers d’euros ?
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>• Pas d’audit terrain ni collecte de données physiques</li>
          <li>• Modèle spend-based (dépenses × facteurs d’émission)</li>
          <li>• Pas de calcul Scopes 1–2</li>
          <li>• Usage “preuve minimale” et screening ESG</li>
          <li>• Génération automatisée instantanée</li>
        </ul>

        <p className="mt-4 text-sm text-gray-600">
          Il ne s’agit pas d’un inventaire réglementaire, mais d’un document
          indicatif conçu pour répondre rapidement aux demandes fréquentes.
        </p>
      </section>

      {/* GRID TARIFS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* ATTESTATION UNIQUE */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Attestation unique
          </h3>

          <p className="text-5xl font-extrabold text-[#1FB6C1] mb-1 tracking-tight">
            89€
          </p>

          <p className="text-sm text-gray-500 mb-6">
            PDF vérifiable • Validité 1 an
          </p>

          <GenerateAttestationButton />
        </div>

        {/* PACK 5 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Pack de 5
          </h3>

          <p className="text-4xl font-extrabold text-[#0B3A63] mb-1">
            349€
          </p>

          <p className="text-sm text-gray-500 mb-6">
            69€ par attestation
          </p>

          <a
            href="/api/checkout-pack?pack=5"
            className="bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-10 py-3 rounded-xl mt-auto text-center"
          >
            Acheter le pack
          </a>
        </div>

        {/* PACK 10 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Pack de 10
          </h3>

          <p className="text-4xl font-extrabold text-[#0B3A63] mb-1">
            590€
          </p>

          <p className="text-sm text-gray-500 mb-6">
            59€ par attestation
          </p>

          <a
            href="/api/checkout-pack?pack=10"
            className="bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-10 py-3 rounded-xl mt-auto text-center"
          >
            Acheter le pack
          </a>
        </div>
      </div>

      {/* FAQ SEO */}
      <section className="mt-20 max-w-4xl">
        <h2 className="text-2xl font-bold text-[#0B3A63] mb-6">
          Questions fréquentes
        </h2>

        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold">
              Est-ce un bilan carbone réglementaire ?
            </h3>
            <p>
              Non. Il s’agit d’une estimation indicative spend-based,
              destinée au screening fournisseur et aux demandes ponctuelles.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Le document est-il accepté en appel d’offre ?
            </h3>
            <p>
              Il répond aux demandes de preuve minimale CO₂e.
              Pour un audit réglementaire complet, un cabinet spécialisé reste nécessaire.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Pourquoi est-il valable 1 an ?
            </h3>
            <p>
              La validité annuelle correspond aux pratiques de mise à jour
              des indicateurs ESG dans la chaîne de valeur.
            </p>
          </div>
        </div>
      </section>

      <p className="text-gray-600 text-center text-xs mt-16">
        Estimation CO₂e indicative basée sur les dépenses. Non auditée.
      </p>

    </section>
  );
}
