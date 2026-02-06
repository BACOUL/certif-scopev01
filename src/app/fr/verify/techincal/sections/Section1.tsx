"use client";

export default function Section1() {
  return (
    <section
      id="verification-model"
      data-section="verification-model"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          1. Vue d’ensemble du modèle de vérification
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Cette section explique le modèle global de vérification utilisé par
          Certif-Scope. Elle définit ce qu’est une attestation, comment la
          confiance est établie, et pourquoi la vérification peut être réalisée
          de manière indépendante, hors ligne, et sans service externe.
        </p>
      </header>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Une attestation CO₂e Certif-Scope est émise sous la forme d’un{" "}
          <strong>document PDF signé numériquement</strong>. Le fichier PDF
          constitue l’unique objet de vérification. Aucun registre en ligne,
          aucune API, aucune blockchain et aucune base externe ne sont requis.
        </p>

        <p>
          La vérification repose sur une{" "}
          <strong>signature cryptographique déterministe</strong> appliquée au
          moment de l’émission. Toute modification du document — même un seul
          octet — invalide la signature.
        </p>

        <p>
          Le modèle de vérification évite volontairement toute dépendance à
          l’infrastructure Certif-Scope après l’émission. Cela garantit que :
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Le document reste vérifiable même si Certif-Scope est indisponible
          </li>
          <li>La vérification peut être effectuée hors ligne</li>
          <li>
            Aucune donnée personnelle ou financière n’a besoin d’être interrogée
          </li>
          <li>Aucun compte ni autorisation n’est nécessaire pour les tiers</li>
        </ul>

        <p>
          La confiance est établie via une{" "}
          <strong>clé publique unique de vérification</strong> publiée par
          Certif-Scope. Cette clé permet à toute partie de vérifier que :
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>L’attestation a bien été émise par Certif-Scope</li>
          <li>Le contenu n’a pas été altéré depuis l’émission</li>
          <li>L’ID d’attestation correspond à la charge utile signée</li>
        </ul>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            <strong>Important :</strong> la vérification confirme l’
            <strong>authenticité et l’intégrité</strong> du document. Elle ne
            valide pas les données économiques fournies par l’utilisateur et ne
            constitue ni un audit, ni une mission d’assurance, ni une évaluation
            de conformité réglementaire.
          </p>
        </div>
      </div>
    </section>
  );
}
