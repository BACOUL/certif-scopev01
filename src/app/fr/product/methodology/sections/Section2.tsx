"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Institutionnel, non redondant */}
      <div className="p-12 bg-[#F8FAFC] dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3A63]">
          2. Fondements théoriques
        </h2>

        <p className="text-gray-700 dark:text-gray-300 max-w-4xl mt-6 leading-relaxed">
          Cette section présente les fondements théoriques de la méthodologie fondée sur les dépenses.
          Elle explique pourquoi le modèle est mathématiquement cohérent, d’où provient cette approche
          et comment elle s’inscrit dans des cadres scientifiques et économiques reconnus.
          L’objectif est d’assurer la transparence et l’acceptabilité institutionnelle du modèle.
        </p>
      </div>


      {/* ORIGIN BLOCK */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Origine du modèle fondé sur les dépenses
        </h3>

        <p className="text-gray-700 dark:text-gray-300 max-w-4xl leading-relaxed">
          Le modèle fondé sur les dépenses trouve son origine dans la théorie des tableaux
          entrées–sorties étendus à l’environnement (EEIO). Ce cadre relie l’activité économique
          aux impacts environnementaux à partir de relations statistiques issues des comptes
          économiques nationaux et des inventaires sectoriels d’émissions.
        </p>

        <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <li>• Les tableaux entrées–sorties décrivent les flux d’achats entre secteurs économiques.</li>
          <li>• Les comptes environnementaux attribuent des émissions à l’activité totale de chaque secteur.</li>
          <li>• Le couplage statistique permet de calculer une intensité moyenne d’émissions par secteur.</li>
        </ul>
      </div>


      {/* MATHEMATICAL LOGIC BLOCK */}
      <div className="mt-16 p-10 bg-[#F8FAFC] dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Base mathématique
        </h3>

        <p className="text-gray-700 dark:text-gray-300 max-w-4xl leading-relaxed">
          Le modèle repose sur une hypothèse de proportionnalité entre les dépenses financières
          et les émissions associées. Il applique une formule linéaire déterministe garantissant
          la reproductibilité des résultats :
        </p>

        <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <code className="text-sm text-[#0B3A63]">
            Émissions (kg CO₂e) = Dépenses (€) × Facteur d’émission (kg CO₂e / €)
          </code>
        </div>

        <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm max-w-4xl leading-relaxed">
          Cette structure linéaire exclut toute hypothèse relative au comportement opérationnel,
          à l’efficacité, aux différences entre fournisseurs ou aux variations technologiques.
        </p>
      </div>


      {/* WHY LINEAR MODEL BLOCK */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Pourquoi le modèle linéaire est accepté
        </h3>

        <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-4xl">
          <li>• Il évite toute modélisation spéculative ou prédictive.</li>
          <li>• Il garantit la reproductibilité entre différentes institutions.</li>
          <li>• Il ne requiert aucune donnée opérationnelle primaire des fournisseurs.</li>
          <li>• Il est mathématiquement transparent et auditables.</li>
          <li>• Il est conforme aux recommandations du GHG Protocol en l’absence de données physiques.</li>
        </ul>
      </div>


      {/* REGULATORY FOUNDATION BLOCK */}
      <div className="mt-16 p-10 bg-[#0B3A63] text-white rounded-2xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">
          Fondements réglementaires et scientifiques
        </h3>

        <p className="text-white/90 max-w-4xl leading-relaxed">
          Les fondements de cette méthodologie s’appuient sur des références scientifiques
          et normatives reconnues :
        </p>

        <ul className="mt-4 space-y-2 text-white/90 text-sm">
          <li>• GHG Protocol — lignes directrices pour l’estimation des émissions de Scope 3 fondées sur les dépenses.</li>
          <li>• ISO 14064-1 — principes de pertinence, exactitude, cohérence et transparence.</li>
          <li>• Tableaux ressources–emplois d’Eurostat — structure des flux financiers intersectoriels.</li>
          <li>• Comptes environnementaux nationaux — attribution sectorielle des émissions de CO₂.</li>
        </ul>

        <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-4xl">
          Ces cadres valident la légitimité de l’association entre dépenses économiques
          et émissions moyennes sectorielles en l’absence de données opérationnelles primaires.
        </p>
      </div>


      {/* APPLICATION LIMIT BLOCK */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Quand utiliser cette méthode
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
          Cette approche est adaptée aux contextes institutionnels dans lesquels :
        </p>

        <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300 text-sm max-w-4xl">
          <li>• Les fournisseurs ne peuvent pas fournir de données physiques ou d’activité.</li>
          <li>• Des portefeuilles étendus nécessitent une estimation rapide et standardisée.</li>
          <li>• Les sous-traitants sont nombreux et dépourvus de reporting environnemental.</li>
          <li>• Les données budgétaires sont disponibles mais pas les données opérationnelles.</li>
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
