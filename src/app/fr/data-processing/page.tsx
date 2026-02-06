export const metadata = {
  title: "Vue d’ensemble du traitement des données — Certif-Scope",
  description:
    "Vue d’ensemble du traitement des données par Certif-Scope, incluant les flux de données, la logique de conservation et les rôles et responsabilités alignés sur le RGPD.",
};

export default function DataProcessingPage() {
  return (
    <section
      id="data-processing"
      data-section="data-processing"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* EN-TÊTE PAGE — ALIGNEMENT CANONIQUE */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Protection des données & RGPD
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Vue d’ensemble du traitement des données
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Ce document fournit une vue d’ensemble, non contractuelle, du
          traitement des données par Certif-Scope. Il est destiné à des fins de
          transparence, d’analyse institutionnelle et d’évaluation de
          conformité, et complète la Politique de confidentialité.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENU — LARGEUR CANONIQUE */}
      <div className="max-w-4xl mx-auto space-y-14">
        {/* SECTION 1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Objet et périmètre
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Cette vue d’ensemble du traitement des données décrit la logique
            pratique de gestion des données par Certif-Scope. Elle ne remplace
            pas la Politique de confidentialité et ne constitue pas un accord
            de traitement des données (DPA). Son objectif est uniquement
            d’expliquer, à un niveau général, la circulation des données au
            sein du service.
          </p>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Flux de données — vue d’ensemble
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope fonctionne selon un modèle de traitement déterministe
            et sans état (stateless). Les flux de données sont volontairement
            limités à ce qui est strictement nécessaire pour générer et vérifier
            une attestation CO₂e.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Séquence de traitement typique :
            <br />
            Saisie utilisateur → Calcul en mémoire → Génération du PDF →
            Téléchargement par l’utilisateur
            <br />
            Les éléments de vérification sont intégrés directement dans le
            document généré et ne reposent sur aucune consultation de base de
            données.
          </p>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Catégories de données traitées
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Données de contact (adresse email)</li>
            <li>Données d’identification organisationnelle facultatives</li>
            <li>Dépenses annuelles déclarées (€) utilisées pour le calcul CO₂e</li>
            <li>Métadonnées techniques (empreinte, horodatage, version du dataset)</li>
            <li>Journaux techniques minimaux à des fins de sécurité et de prévention des abus</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Aucun profilage comportemental, suivi utilisateur, enrichissement
            ou utilisation secondaire des données n’est effectué.
          </p>
        </section>

        {/* SECTION 4 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Caractéristiques du traitement
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Calculs déterministes et reproductibles</li>
            <li>Traitement sans stockage persistant des données d’entrée</li>
            <li>Actions initiées uniquement par l’utilisateur</li>
            <li>Traitement à finalité unique (émission et vérification d’attestation)</li>
            <li>Traitement temporaire en mémoire</li>
          </ul>
        </section>

        {/* SECTION 5 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Stockage et durée de conservation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les données financières utilisées pour le calcul CO₂e sont traitées
            uniquement en mémoire et ne sont jamais stockées dans des bases de
            données persistantes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Les attestations PDF générées sont remises directement à
            l’utilisateur et ne sont pas conservées par Certif-Scope. Les
            échanges par email peuvent être conservés jusqu’à douze (12) mois à
            des fins de support et d’exploitation.
          </p>
        </section>

        {/* SECTION 6 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Sous-traitants et infrastructure
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Certif-Scope s’appuie sur un nombre limité de sous-traitants
            techniques :
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Infrastructure d’hébergement et de déploiement (ex. Vercel)</li>
            <li>Services d’envoi d’emails</li>
            <li>Prestataires de paiement (le cas échéant)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Tous les sous-traitants opèrent dans un cadre contractuel aligné
            avec les exigences du RGPD.
          </p>
        </section>

        {/* SECTION 7 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Rôles et responsabilités
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope agit en tant que responsable de traitement pour les
            opérations nécessaires à la fourniture du service. Les utilisateurs
            restent responsables de l’exactitude, de la pertinence et de la
            licéité des informations qu’ils soumettent. Aucune
            responsabilité conjointe n’est implicite.
          </p>
        </section>

        {/* SECTION 8 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Nature non contractuelle
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ce document est fourni uniquement à titre informatif. Il ne
            constitue pas un accord de traitement des données (DPA) et ne
            modifie aucune obligation contractuelle ou légale définie ailleurs.
          </p>
        </section>

        {/* SECTION 9 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Mise à jour et contact
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Cette vue d’ensemble peut être mise à jour afin de refléter des
            évolutions techniques, opérationnelles ou réglementaires. Pour toute
            question relative au traitement des données :
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>
      </div>
    </section>
  );
}
