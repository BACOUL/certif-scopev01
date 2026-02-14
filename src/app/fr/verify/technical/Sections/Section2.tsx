"use client";

export default function Section2() {
  return (
    <section
      id="cryptographic-foundations"
      data-section="cryptographic-foundations"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          2. Fondements cryptographiques
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Cette section décrit les primitives cryptographiques utilisées pour
          sécuriser les attestations Certif-Scope. Elle explique les algorithmes
          impliqués, leur rôle dans le processus de vérification, ainsi que les
          raisons de leur sélection.
        </p>
      </header>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Chaque attestation Certif-Scope est protégée par{" "}
          <strong>cryptographie asymétrique</strong>. Cela permet à l’émetteur
          de signer un document avec une clé privée, tandis que tout tiers peut
          vérifier cette signature à l’aide de la clé publique correspondante.
        </p>

        <p>
          Le système cryptographique est volontairement simple, déterministe et
          basé sur des standards largement adoptés afin de garantir une
          vérifiabilité à long terme et une interopérabilité maximale.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Algorithmes utilisés
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Fonction de hachage :</strong> SHA-256, utilisée pour produire
            une empreinte de taille fixe à partir de la charge utile canonique.
          </li>
          <li>
            <strong>Algorithme de signature :</strong> Ed25519, utilisé pour
            signer l’empreinte et garantir l’authenticité et l’intégrité.
          </li>
          <li>
            <strong>Encodage :</strong> Base64 pour la représentation de la clé
            publique et de la signature.
          </li>
        </ul>

        <p>
          Ces algorithmes ont été sélectionnés car ils sont :
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Cryptographiquement robustes et largement audités</li>
          <li>Efficaces et adaptés à une vérification hors ligne</li>
          <li>Supportés par les bibliothèques cryptographiques courantes</li>
          <li>Stables et peu susceptibles d’être dépréciés à court terme</li>
        </ul>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Modèle de signature déterministe
        </h3>

        <p>
          Certif-Scope utilise une approche de signature déterministe. Une même
          charge utile canonique produira toujours la même empreinte et le même
          identifiant d’attestation. Cela garantit la reproductibilité et rend
          la vérification indépendante de tout état côté serveur.
        </p>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            <strong>Note de sécurité :</strong> la clé privée de signature n’est
            jamais intégrée dans le PDF, jamais transmise et jamais exposée.
            Seules la signature générée et la clé publique de vérification sont
            nécessaires pour effectuer la vérification.
          </p>
        </div>

        <p>
          La couche cryptographique garantit que toute modification du contenu
          du document — y compris les métadonnées, les valeurs ou le formatage
          affectant la charge signée — invalidera la signature lors de la
          vérification.
        </p>
      </div>
    </section>
  );
}
