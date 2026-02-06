"use client";

export default function Section7() {
  return (
    <section
      id="step-by-step-verification"
      data-section="step-by-step-verification"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          7. Vérification pas à pas (CLI & code)
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Cette section fournit des instructions concrètes et reproductibles pour
          vérifier une attestation Certif-Scope de bout en bout à l’aide d’outils
          en ligne de commande et d’exemples de code. Ces étapes s’adressent aux
          auditeurs, développeurs et équipes conformité.
        </p>
      </header>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        {/* PREREQUISITES */}
        <h3 className="text-xl font-bold text-[#0B3A63]">Pré-requis</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Le PDF original de l’attestation</li>
          <li>Un accès à un terminal (Linux, macOS, Windows ou Termux)</li>
          <li>Un outillage crypto standard (OpenSSL ou équivalent)</li>
          <li>La clé publique de vérification Certif-Scope</li>
        </ul>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            Toutes les étapes sont réalisables hors ligne. Aucun accès réseau aux
            systèmes Certif-Scope n’est requis.
          </p>
        </div>

        {/* STEP 1 */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Étape 1 — Obtenir le PDF original
        </h3>

        <p>
          Vérifiez que vous travaillez sur le PDF original tel qu’il a été
          délivré. Toute modification, re-sauvegarde, optimisation ou conversion
          peut invalider la signature.
        </p>

        {/* STEP 2 */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Étape 2 — Vérifier avec un lecteur PDF standard
        </h3>

        <p>
          Ouvrez le PDF dans un lecteur prenant en charge les signatures
          numériques (ex. Adobe Acrobat, Foxit).
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Ouvrir le panneau « Signature » ou « Sécurité »</li>
          <li>Confirmer que le document est indiqué comme signé</li>
          <li>Vérifier que le statut de signature est « valide »</li>
        </ul>

        <p>
          Cette étape confirme l’authenticité (émetteur) et l’intégrité (contenu
          non modifié) selon le lecteur PDF.
        </p>

        {/* STEP 3 */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Étape 3 — Contrôle d’intégrité par hash (exemple CLI)
        </h3>

        <p>
          Pour un contrôle explicite d’intégrité, vous pouvez calculer le hash
          SHA-256 du fichier local et le comparer à l’empreinte affichée dans
          l’attestation (si elle est imprimée dans le document).
        </p>

        <p className="font-semibold">Exemple (comparaison de hash) :</p>

        <pre className="text-sm bg-white border border-gray-300 rounded-md p-4 overflow-x-auto font-mono">
{`# Calculer le hash SHA-256 du PDF
sha256sum certif-scope-attestation.pdf`}
        </pre>

        <p>
          Comparez le résultat avec l’empreinte attendue indiquée par le
          document / le système de référence.
        </p>

        <div className="bg-[#FFF7ED] border-l-4 border-[#F59E0B] p-4 text-sm">
          <p>
            Un hash identique confirme l’intégrité du fichier, mais ne prouve pas
            à lui seul l’authenticité de l’émetteur. La validation de signature est
            nécessaire pour une vérification complète.
          </p>
        </div>

        {/* STEP 4 */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Étape 4 — Vérification cryptographique de la signature (avancé)
        </h3>

        <p>
          La vérification avancée consiste à vérifier la signature Ed25519 par
          rapport au payload canonique et à la clé publique Certif-Scope.
        </p>

        <p>Ce flux implique généralement :</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Extraire le payload signé depuis le PDF</li>
          <li>Récupérer et décoder la signature (Base64)</li>
          <li>Vérifier la signature avec la clé publique</li>
        </ul>

        <p>
          L’implémentation peut se faire en Python, Node.js, ou via des outils
          crypto dédiés, selon vos exigences d’audit interne.
        </p>

        {/* PYTHON EXAMPLE */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Exemple — Vérification en Python (conceptuel)
        </h3>

        <pre className="text-sm bg-white border border-gray-300 rounded-md p-4 overflow-x-auto font-mono">
{`from nacl.signing import VerifyKey
import base64

public_key_b64 = "MCowBQYDK2VwAyEAbKp2pg4wmzE5Kqo9tEwv7JJjxQyT2cBmwiLLHp4cSac="
verify_key = VerifyKey(base64.b64decode(public_key_b64))

payload = b"...octets du payload canonique..."
signature = base64.b64decode("...signature...")

verify_key.verify(payload, signature)
`}
        </pre>

        <p>
          Si la vérification réussit, cela confirme que le payload a été signé
          par Certif-Scope et qu’il n’a pas été altéré.
        </p>

        {/* TERMUX */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Notes pour Termux et environnements mobiles
        </h3>

        <p>Les mêmes étapes s’appliquent dans Termux sur Android :</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Transférer le PDF sur l’appareil</li>
          <li>Installer les paquets nécessaires (openssl, python, libsodium)</li>
          <li>Exécuter les mêmes contrôles de hash et de signature</li>
        </ul>

        <p>Les résultats de vérification sont identiques sur toutes plateformes.</p>

        {/* FINAL */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Résultat de la vérification
        </h3>

        <p>Une attestation entièrement vérifiée confirme :</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Le document a été émis par Certif-Scope</li>
          <li>Le contenu n’a pas été modifié</li>
          <li>L’identifiant d’attestation est authentique</li>
          <li>La vérification est indépendante et réalisable hors ligne</li>
        </ul>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            Aucun service en ligne ni hypothèse de confiance additionnelle n’est
            requis pour réaliser la vérification.
          </p>
        </div>
      </div>
    </section>
  );
}
