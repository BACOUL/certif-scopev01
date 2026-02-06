"use client";

export default function Section3() {
  return (
    <section
      id="signed-data-structure"
      data-section="signed-data-structure"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          3. Structure des données signées
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Cette section définit précisément quelles données sont signées
          cryptographiquement dans une attestation Certif-Scope. La compréhension
          de cette structure est essentielle pour vérifier correctement
          l’intégrité et l’authenticité du document.
        </p>
      </header>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Certif-Scope ne signe pas l’intégralité du fichier PDF de manière
          arbitraire. Le système signe une{" "}
          <strong>charge utile canonique</strong> : une structure de données
          strictement définie et normalisée, extraite du contenu de l’attestation.
        </p>

        <p>
          Cette approche garantit une vérification déterministe, indépendante des
          différences de rendu du PDF, et reproductible sur différentes plateformes
          et langages de programmation.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Définition de la charge utile canonique
        </h3>

        <p>
          La charge utile canonique est un objet JSON avec des clés fixes, un ordre
          fixe et des valeurs normalisées. Toute modification de la structure, de
          l’ordre ou du format des valeurs produit une empreinte différente et
          invalide la signature.
        </p>

        <pre className="bg-white border border-gray-300 rounded-md p-4 text-sm overflow-x-auto text-gray-800">
{`{
  "issuer": "Certif-Scope",
  "standard": "CS-SB-v1",
  "attestationId": "CS-2026-XXXXXXXX",
  "companyName": "Example Company",
  "country": "FR",
  "year": "2026",
  "totalCO2e": "15.2",
  "issuedDate": "2026-01-25T14:32:10.000Z"
}`}
        </pre>

        <p>
          Toutes les valeurs sont traitées comme des chaînes de caractères dans
          la charge utile canonique, y compris les valeurs numériques. Cela évite
          toute ambiguïté liée aux représentations flottantes ou aux formats
          régionaux.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Processus de hachage
        </h3>

        <p>
          La charge utile canonique est sérialisée en UTF-8 puis hachée avec
          SHA-256. L’empreinte obtenue représente l’état exact des données signées.
        </p>

        <p>Toute modification portant sur :</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>les valeurs des champs,</li>
          <li>les noms des champs,</li>
          <li>l’ordre des champs,</li>
          <li>les espaces ou l’encodage,</li>
        </ul>

        <p>
          produira une empreinte différente et entraînera l’échec de la
          vérification de la signature.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Relation avec le document PDF
        </h3>

        <p>
          La charge signée correspond à des champs visibles du document PDF
          (émetteur, entité, année, total CO₂e, identifiant d’attestation et
          date d’émission).
        </p>

        <p>
          Les éléments visuels, la mise en page, les polices ou les textes
          explicatifs non signés ne font pas partie de la charge utile canonique
          et n’affectent pas la vérification tant que les données signées restent
          inchangées.
        </p>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            <strong>Important :</strong> l’identifiant d’attestation est dérivé
            de l’empreinte cryptographique de la charge utile canonique. Toute
            incohérence entre l’identifiant affiché et les données signées indique
            une altération du document ou une attestation invalide.
          </p>
        </div>

        <p>
          Cette séparation stricte entre les données signées et leur présentation
          garantit une vérifiabilité à long terme, même si les moteurs de rendu
          PDF ou les mises en page évoluent dans le temps.
        </p>
      </div>
    </section>
  );
}
