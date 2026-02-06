"use client";

export default function Section6() {
  return (
    <section
      id="verification-workflows"
      data-section="verification-workflows"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          6. Flux de vérification
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Cette section décrit les flux pratiques de vérification utilisés par
          différents types d’utilisateurs. Tous reposent sur les mêmes garanties
          cryptographiques, mais diffèrent par les outils utilisés et le niveau
          de technicité requis.
        </p>
      </header>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        {/* OVERVIEW */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Vue d’ensemble des modes de vérification
        </h3>

        <p>
          Certif-Scope prend en charge plusieurs modes de vérification afin de
          permettre une adoption large par des utilisateurs non techniques,
          des institutions et des équipes techniques.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Vérification standard via lecteur PDF</strong> (achats,
            banques, assurances)
          </li>
          <li>
            <strong>Vérification cryptographique manuelle</strong> (auditeurs,
            équipes sécurité)
          </li>
          <li>
            <strong>Vérification automatisée ou scriptée</strong> (développeurs,
            systèmes de conformité)
          </li>
        </ul>

        {/* WORKFLOW 1 */}
        <h3 className="text-xl font-bold text-[#0B3A63] mt-8">
          Flux A — Validation standard de la signature PDF
        </h3>

        <p>
          Il s’agit du flux principal pour la majorité des destinataires d’une
          attestation.
        </p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Ouvrir le fichier PDF dans un lecteur PDF standard</li>
          <li>Accéder au panneau de signature numérique</li>
          <li>Valider la signature</li>
          <li>Vérifier que le document est indiqué comme « signé et non modifié »</li>
        </ol>

        <p>
          Le lecteur PDF effectue automatiquement les vérifications
          cryptographiques à partir de la signature intégrée et des informations
          de clé publique.
        </p>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            Ce flux est suffisant pour confirmer l’authenticité et l’intégrité
            du document dans les contextes de procurement, bancaire, assurantiel
            ou de due diligence.
          </p>
        </div>

        {/* WORKFLOW 2 */}
        <h3 className="text-xl font-bold text-[#0B3A63] mt-8">
          Flux B — Vérification cryptographique manuelle
        </h3>

        <p>
          Ce flux est destiné aux utilisateurs avancés souhaitant contrôler
          explicitement le processus de vérification.
        </p>

        <p>Étapes typiques :</p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Extraction de la charge utile signée depuis le PDF</li>
          <li>Extraction de la signature numérique</li>
          <li>Recalcul du hash du payload canonique</li>
          <li>Vérification de la signature Ed25519 avec la clé publique</li>
        </ol>

        <p>
          Ce processus est entièrement hors ligne et reproductible sur toutes
          les plateformes.
        </p>

        {/* WORKFLOW 3 */}
        <h3 className="text-xl font-bold text-[#0B3A63] mt-8">
          Flux C — Vérification automatisée ou scriptée
        </h3>

        <p>
          Pour les organisations traitant un volume important d’attestations,
          la vérification peut être automatisée via des scripts ou des outils
          internes.
        </p>

        <p>Caractéristiques principales :</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Aucune dépendance aux serveurs Certif-Scope</li>
          <li>Vérification par lot possible</li>
          <li>Résultats déterministes</li>
          <li>Intégration possible dans des pipelines internes ou d’audit</li>
        </ul>

        <p>
          Des exemples d’implémentation en Python, Node.js et en ligne de
          commande sont présentés dans la section suivante.
        </p>

        {/* DESIGN PRINCIPLES */}
        <h3 className="text-xl font-bold text-[#0B3A63] mt-8">
          Pourquoi plusieurs flux sont supportés
        </h3>

        <p>
          La coexistence de plusieurs modes de vérification permet :
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>une vérification simple pour les utilisateurs non techniques,</li>
          <li>un contrôle complet pour les institutions,</li>
          <li>une intégration technique sans dépendance fournisseur,</li>
          <li>une vérification possible même en absence d’infrastructure Certif-Scope.</li>
        </ul>

        <p>
          Tous les flux reposent sur la même vérité cryptographique, seuls les
          outils et l’interface diffèrent.
        </p>
      </div>
    </section>
  );
}
