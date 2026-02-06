"use client";

export default function Section8() {
  return (
    <section
      id="security-assumptions"
      data-section="security-assumptions"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          8. Hypothèses de sécurité & modèle de menace
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Cette section définit explicitement les hypothèses de sécurité, le
          modèle de menace et les limites de confiance applicables aux
          attestations CO₂e Certif-Scope. Elle précise ce que le système protège,
          ce qu’il ne protège pas et comment interpréter la vérification dans un
          contexte institutionnel.
        </p>
      </header>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        {/* CORE ASSUMPTIONS */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Hypothèses de sécurité fondamentales
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            La clé privée de signature Certif-Scope reste confidentielle et n’est
            pas compromise.
          </li>
          <li>
            La clé publique de vérification publiée par Certif-Scope est
            authentique et n’a pas été substituée.
          </li>
          <li>
            Les primitives cryptographiques standard (Ed25519, SHA-256) restent
            sûres face aux attaques pratiques.
          </li>
          <li>
            Les vérificateurs travaillent sur le PDF original sans modification.
          </li>
        </ul>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            Ces hypothèses sont explicites et vérifiables. Aucune confiance
            implicite dans une infrastructure, une base de données ou une API
            Certif-Scope n’est requise.
          </p>
        </div>

        {/* TRUST BOUNDARIES */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Limites de confiance
        </h3>

        <p>
          Certif-Scope établit une frontière de confiance stricte au niveau du
          document PDF signé :
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Le PDF est l’unique objet de confiance</li>
          <li>Aucun registre en ligne ni endpoint de validation n’est autoritatif</li>
          <li>La vérification ne dépend pas de la disponibilité de Certif-Scope</li>
        </ul>

        <p>
          Une fois émise, l’attestation existe indépendamment de l’émetteur.
        </p>

        {/* THREAT MODEL */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Modèle de menace
        </h3>

        <p>Les scénarios suivants sont explicitement considérés :</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Modification du contenu du PDF après émission</li>
          <li>Falsification d’une attestation via des données altérées</li>
          <li>Rejeu ou réutilisation d’une attestation déjà émise</li>
          <li>Usurpation ou confusion de l’identité de l’émetteur</li>
        </ul>

        <p>
          Ces attaques sont mitigées par la signature cryptographique du payload
          de l’attestation.
        </p>

        {/* OUT OF SCOPE */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Menaces hors périmètre
        </h3>

        <p>
          Les risques suivants sont volontairement hors périmètre et ne sont pas
          mitigés par le système d’attestation :
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Données d’entrée incorrectes ou trompeuses fournies par l’utilisateur</li>
          <li>Fraude comptable ou données d’activité fausses à la source</li>
          <li>Interprétation erronée des résultats par des tiers</li>
          <li>Usage réglementaire ou marketing au-delà du périmètre déclaré</li>
        </ul>

        <div className="bg-[#FFF7ED] border-l-4 border-[#F59E0B] p-4 text-sm">
          <p>
            La vérification cryptographique garantit l’intégrité et
            l’authenticité, pas l’exactitude factuelle des données métier
            sous-jacentes.
          </p>
        </div>

        {/* KEY MANAGEMENT */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Gestion des clés et rotation
        </h3>

        <p>
          Certif-Scope utilise une clé de signature d’émetteur par version
          d’émission.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>La clé publique est publiée et immuable pour une version donnée</li>
          <li>Une rotation de clé implique une nouvelle version d’attestation</li>
          <li>Les attestations anciennes restent vérifiables indéfiniment</li>
        </ul>

        <p>
          Ce modèle empêche tout changement silencieux de confiance et préserve
          la vérifiabilité long terme.
        </p>

        {/* INSTITUTIONAL USE */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Interprétation en contexte institutionnel
        </h3>

        <p>
          Pour les achats, banques, assureurs et auditeurs, la vérification
          confirme :
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Le document est authentique et non altéré</li>
          <li>L’émetteur est identifiable de manière unique</li>
          <li>L’attestation correspond à un événement d’émission spécifique</li>
        </ul>

        <p>
          La vérification n’implique <strong>pas</strong> une conformité
          réglementaire, une assurance d’audit, ni une exhaustivité du reporting
          des émissions.
        </p>

        {/* FINAL */}
        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            Ce modèle de menace explicite vise la transparence, l’auditabilité et
            l’acceptabilité dans des contextes institutionnels et conformité
            européens.
          </p>
        </div>
      </div>
    </section>
  );
}
