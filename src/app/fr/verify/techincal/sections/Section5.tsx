"use client";

export default function Section5() {
  return (
    <section
      id="verification-scope"
      data-section="verification-scope"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          5. Ce qui est vérifié (et ce qui ne l’est pas)
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Cette section définit précisément le périmètre de la vérification
          technique d’une attestation CO₂e Certif-Scope. Elle clarifie ce que la
          vérification cryptographique garantit — et ce qu’elle ne couvre pas
          volontairement.
        </p>
      </header>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Éléments vérifiés cryptographiquement
        </h3>

        <p>
          Lorsqu’une attestation Certif-Scope est vérifiée à l’aide de la clé
          publique et de la signature numérique, les éléments suivants sont
          strictement vérifiés :
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Intégrité du document :</strong> le contenu du PDF n’a pas
            été modifié depuis sa signature
          </li>
          <li>
            <strong>Authenticité de l’émetteur :</strong> l’attestation a été
            émise par Certif-Scope à l’aide de sa clé privée
          </li>
          <li>
            <strong>Cohérence des données :</strong> la charge utile signée
            correspond aux données visibles dans le document (nom de
            l’entreprise, année, valeur CO₂e, identifiant d’attestation,
            date d’émission)
          </li>
          <li>
            <strong>Identifiant d’attestation :</strong> l’Attestation ID est
            cryptographiquement lié aux données signées
          </li>
        </ul>

        <p>
          Ces garanties sont objectives, reproductibles et indépendantes de
          tout système ou base de données en ligne.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Éléments non vérifiés
        </h3>

        <p>
          Le processus de vérification ne cherche volontairement{" "}
          <strong>pas</strong> à valider les éléments suivants :
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>L’exactitude ou l’exhaustivité des données financières saisies</li>
          <li>La validité de l’activité ou du secteur déclaré</li>
          <li>L’exhaustivité des sources d’émissions</li>
          <li>La conformité aux cadres CSRD, ESRS ou autres réglementations</li>
          <li>La cohérence avec des inventaires Scope 1, 2 ou 3</li>
          <li>L’existence d’un audit ou d’une assurance tierce</li>
        </ul>

        <p>
          Ces exclusions ne constituent pas une limite technique, mais des
          frontières fonctionnelles intentionnelles alignées avec l’usage prévu
          de l’attestation.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Nature indicative et non réglementaire
        </h3>

        <p>
          Les attestations Certif-Scope représentent une{" "}
          <strong>estimation CO₂e indicative basée sur les dépenses</strong>.
          Elles sont conçues pour répondre à des demandes d’information
          standardisées, et non pour remplacer un reporting réglementaire ou un
          bilan carbone audité.
        </p>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            <strong>Distinction importante :</strong> une attestation peut être
            techniquement authentique et vérifiable tout en restant non
            réglementaire et non auditée. Ces deux notions doivent être
            clairement distinguées.
          </p>
        </div>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Pourquoi ces limites existent
        </h3>

        <p>
          La définition explicite du périmètre de vérification permet :
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>de garantir une vérification objective et reproductible,</li>
          <li>d’éviter toute implication réglementaire implicite,</li>
          <li>de prévenir les mauvaises interprétations par des tiers,</li>
          <li>d’assurer un usage sûr dans les processus de procurement et de due diligence.</li>
        </ul>

        <p>
          Ce cadrage explicite constitue une condition essentielle pour
          l’acceptabilité institutionnelle et la confiance à long terme.
        </p>
      </div>
    </section>
  );
}
