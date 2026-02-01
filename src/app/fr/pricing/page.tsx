import GenerateAttestationButton from "@/components/GenerateAttestationButton";

export const metadata = {
  title: "Tarifs — Certif-Scope",
  description:
    "Tarification transparente pour les attestations CO₂e indicatives Certif-Scope. Prix fixe, sans abonnement. Validité 1 an.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/pricing",
    languages: {
      fr: "https://www.certif-scope.com/fr/pricing",
      en: "https://www.certif-scope.com/pricing",
    },
  },
};

export default function PricingPageFR() {
  return (
    <section
      id="pricing"
      data-section="pricing"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Attestations CO₂e — Tarifs
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Tarification simple et transparente
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Prix fixe par attestation CO₂e. Aucun abonnement. Validité d’un an.
          Chaque document inclut des éléments de vérification et d’intégrité intégrés.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* ATTESTATION UNIQUE */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Attestation unique
          </h3>

          <p className="text-5xl font-extrabold text-[#1FB6C1] mb-1 tracking-tight">
            89€
          </p>
          <p className="text-sm text-gray-500 mb-4">Validité : 1 an</p>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            PDF instantané • QR de vérification • Garanties d’intégrité intégrées
          </p>

          <ul className="text-left mx-auto max-w-xs space-y-2 text-gray-700 text-sm mb-8">
            <li>• Attestation CO₂e standardisée (PDF)</li>
            <li>• Identifiant de vérification unique</li>
            <li>• Vérification par QR code</li>
            <li>• Source et version des facteurs</li>
            <li>• Validité : 12 mois</li>
          </ul>

          <GenerateAttestationButton />
        </div>

        {/* PACK 5 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Pack de 5 attestations
          </h3>

          <p className="text-4xl font-extrabold text-[#0B3A63] mb-1">
            349€
          </p>
          <p className="text-sm text-gray-500 mb-4">
            (69€ par attestation)
          </p>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Pour un usage récurrent ou professionnel.
          </p>

          <a
            href="/api/checkout-pack?pack=5"
            className="bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-10 py-3 rounded-xl mt-auto text-center"
          >
            Acheter le pack de 5
          </a>
        </div>

        {/* PACK 10 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Pack de 10 attestations
          </h3>

          <p className="text-4xl font-extrabold text-[#0B3A63] mb-1">
            590€
          </p>
          <p className="text-sm text-gray-500 mb-4">
            (59€ par attestation)
          </p>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Idéal pour une demande annuelle régulière.
          </p>

          <a
            href="/api/checkout-pack?pack=10"
            className="bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-10 py-3 rounded-xl mt-auto text-center"
          >
            Acheter le pack de 10
          </a>
        </div>

        {/* PACK 50 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col col-span-full lg:col-span-1 mx-auto">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Pack de 50 attestations
          </h3>

          <p className="text-4xl font-extrabold text-[#0B3A63] mb-1">
            2 450€
          </p>
          <p className="text-sm text-gray-500 mb-4">
            (49€ par attestation)
          </p>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Conçu pour des écosystèmes fournisseurs étendus.
          </p>

          <a
            href="/api/checkout-pack?pack=50"
            className="bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-10 py-3 rounded-xl mt-auto text-center"
          >
            Acheter le pack de 50
          </a>
        </div>

        {/* ENTERPRISE */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-10 text-center col-span-full flex flex-col">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Entreprise & API
          </h3>

          <p className="text-4xl font-extrabold text-gray-400 mb-3">
            Bientôt disponible
          </p>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
            Émission automatisée et intégrations pour plateformes et grands comptes.
          </p>

          <button
            disabled
            className="px-10 py-3 rounded-xl font-semibold text-white bg-gray-400 cursor-not-allowed mx-auto"
          >
            Accès entreprise — T2 2026
          </button>
        </div>
      </div>

      <p className="text-gray-600 text-center text-xs mt-12 leading-relaxed">
        Estimation CO₂e indicative basée sur les dépenses. Non auditée.
      </p>
    </section>
  );
            }
