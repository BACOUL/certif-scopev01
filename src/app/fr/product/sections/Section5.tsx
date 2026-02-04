// PATH: src/app/fr/product/sections/Section5.tsx

"use client";

export default function Section5FR() {
  return (
    <section
      id="verification-and-integrity"
      data-section="verification-and-integrity"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER — INSTITUTIONAL TRUST BLOCK */}
      <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-md overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/90 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          <span className="mr-2">5.</span>
          Vérification & intégrité
        </h2>

        {/* SCOPE BOUNDARY */}
        <p className="text-white/80 text-sm max-w-4xl mt-4 leading-relaxed relative z-10">
          Cette section décrit comment vérifier l’authenticité et l’intégrité du
          document livré. Elle ne décrit pas la méthodologie de calcul.
        </p>

        <p className="text-white/90 text-lg max-w-4xl mt-6 leading-relaxed relative z-10">
          Chaque attestation CO₂e est émise avec des mécanismes d’intégrité
          intégrés. Son authenticité peut être vérifiée indépendamment, sans
          compte, sans données personnelles et sans dépendre d’un registre
          central.
        </p>
      </div>

      {/* CORE PRINCIPLES */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            Émission infalsifiable (tamper-evident)
          </h3>

          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Chaque attestation est émise comme un document final dont l’intégrité
            peut être vérifiée. Toute modification après émission invalide
            l’authenticité du document.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            Vérification indépendante
          </h3>

          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            L’authenticité peut être vérifiée par tout tiers à partir
            d’informations publiques de vérification, sans compte, sans
            identifiants et sans accès à des systèmes internes.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            Référence d’attestation unique
          </h3>

          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Chaque PDF inclut un identifiant de référence unique, permettant une
            citation précise, la traçabilité et la communication dans des
            contextes achats, bancaires ou de conformité.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            Confort en ligne, validité hors ligne
          </h3>

          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Un QR code donne un accès optionnel à une page publique
            d’explication. La vérification reste possible hors ligne et ne
            dépend pas de la disponibilité continue de Certif-Scope.
          </p>
        </div>
      </div>

      {/* TRUST SUMMARY */}
      <div className="mt-20 p-10 bg-white rounded-xl border border-[#0B3A63]/15 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Garanties de confiance & d’intégrité
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <li>• Les attestations sont émises une seule fois et ne peuvent pas être modifiées</li>
          <li>• La vérification ne repose pas sur une base centrale ou un registre</li>
          <li>• Aucun compte, identifiant ou donnée personnelle n’est requis</li>
          <li>• Les documents émis ne sont pas stockés par Certif-Scope</li>
          <li>• L’authenticité reste vérifiable dans le temps, indépendamment de l’émetteur</li>
        </ul>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Retour au sommaire
        </a>
      </div>
    </section>
  );
}
