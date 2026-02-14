"use client";

export default function Section4() {
  return (
    <section
      id="public-key-and-trust"
      data-section="public-key-and-trust"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          4. Clé publique et modèle de confiance
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Cette section explique comment la confiance est établie dans les
          attestations Certif-Scope et comment la clé publique de vérification
          permet de valider l’authenticité sans dépendre d’un service en ligne.
        </p>
      </header>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Certif-Scope utilise un <strong>modèle cryptographique asymétrique</strong>
          basé sur l’algorithme de signature numérique Ed25519.
        </p>

        <p>
          Dans ce modèle, les attestations sont signées à l’aide d’une{" "}
          <strong>clé privée</strong> détenue exclusivement par Certif-Scope,
          tandis que la vérification est effectuée à l’aide d’une{" "}
          <strong>clé publique</strong> correspondante, librement distribuée.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Rôle de la clé publique
        </h3>

        <p>
          La clé publique permet à tout tiers de vérifier que :
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>L’attestation a bien été émise par Certif-Scope</li>
          <li>Les données signées n’ont pas été modifiées depuis l’émission</li>
          <li>La signature correspond exactement à la charge utile signée</li>
        </ul>

        <p>
          La clé publique <strong>ne permet pas</strong> de générer de nouvelles
          attestations ni de créer des signatures. Elle est utilisée uniquement
          pour la vérification.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Immutabilité de la clé et continuité
        </h3>

        <p>
          Certif-Scope fonctionne avec une{" "}
          <strong>clé publique de vérification unique et durable</strong>.
          Cette clé est :
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>publiquement accessible,</li>
          <li>non révoquée pour les attestations déjà émises,</li>
          <li>valide pour une vérification hors ligne et dans le temps.</li>
        </ul>

        <p>
          Une fois l’attestation émise, sa vérifiabilité ne dépend plus du
          fonctionnement continu des serveurs, API ou bases de données
          Certif-Scope.
        </p>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            <strong>Principe de conception :</strong> un tiers doit pouvoir
            vérifier une attestation plusieurs années après son émission,
            uniquement avec le fichier PDF et la clé publique, même si
            Certif-Scope n’existe plus.
          </p>
        </div>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Établissement de la confiance
        </h3>

        <p>
          La confiance dans une attestation Certif-Scope repose sur :
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>la confiance initiale dans Certif-Scope en tant qu’émetteur,</li>
          <li>la vérification indépendante de la signature via la clé publique,</li>
          <li>la cohérence entre les données signées et les informations visibles du document.</li>
        </ul>

        <p>
          Certif-Scope n’opère pas d’autorité de certification (CA), de registre
          public ni de liste de révocation. Le modèle est volontairement simple
          et transparent.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Ce que la clé publique ne garantit pas
        </h3>

        <p>
          Il est essentiel de distinguer <strong>l’authenticité technique</strong>{" "}
          de la <strong>validité du contenu</strong>.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>La clé publique vérifie l’intégrité du document</li>
          <li>Elle ne valide pas l’exactitude des données d’entrée</li>
          <li>Elle ne certifie pas la conformité réglementaire</li>
          <li>Elle ne remplace pas un audit ou une mission d’assurance</li>
        </ul>

        <p>
          Ces limites sont explicites et intentionnelles afin de garantir un
          mécanisme de vérification robuste, auditable et sans ambiguïté.
        </p>
      </div>
    </section>
  );
}
