"use client";

export default function Section12() {
  return (
    <section id="s12" className="scroll-mt-24 border-b border-gray-200 pb-24">
      {/* HEADER — cadrage GDPR institutionnel */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 rounded-2xl shadow-lg relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-[#15B097]/10 pointer-events-none"
          aria-hidden="true"
        />

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          12. Protection des données & conformité GDPR
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          Cette section décrit le modèle de gouvernance des données, les bases légales,
          les règles de minimisation et les garanties applicables à Certif-Scope.
          L’architecture de traitement suit un principe strict de privacy-by-design :
          pas de conservation, pas de profilage, et aucune divulgation à des tiers.
        </p>
      </div>

      {/* BLOCK — Base légale */}
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Bases légales applicables
        </h3>

        <ul className="text-gray-700 text-sm leading-relaxed space-y-2">
          <li>
            • Le traitement repose sur l’<strong>exécution du contrat</strong>{" "}
            (GDPR Art.6(1)(b)) pour délivrer l’attestation demandée.
          </li>
          <li>
            • L’<strong>intérêt légitime</strong> (Art.6(1)(f)) peut s’appliquer aux
            contrôles de sécurité (anti-fraude, prévention des abus) strictement nécessaires.
          </li>
          <li>
            • Aucun traitement de données sensibles (Art.9) n’est réalisé, en aucune circonstance.
          </li>
          <li>
            • Aucun profilage automatisé d’individus, aucun scoring de personnes physiques.
          </li>
        </ul>
      </div>

      {/* BLOCK — Minimisation */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Principes de minimisation
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Certif-Scope applique des règles strictes de minimisation conformément au GDPR
          Art.5(1)(c) : seules les informations nécessaires à la production de l’attestation
          sont traitées, et rien de plus.
        </p>

        <ul className="text-gray-700 text-sm leading-relaxed space-y-2">
          <li>• Aucune identité utilisateur n’est requise pour calculer l’indicateur.</li>
          <li>• Aucune donnée personnelle directement identifiable (PII) n’est stockée.</li>
          <li>• Le traitement est en mémoire et sans persistance d’entrées détaillées.</li>
          <li>• Aucun suivi comportemental, aucune analytics publicitaire.</li>
        </ul>
      </div>

      {/* BLOCK — Cookies / tracking */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Cookies & politique de suivi
        </h3>

        <ul className="text-gray-700 text-sm leading-relaxed space-y-2">
          <li>• Aucun cookie d’analytics ou de profilage.</li>
          <li>• Aucun tracker tiers, pixel publicitaire, script comportemental.</li>
          <li>• Les cookies éventuels sont strictement fonctionnels et non publicitaires.</li>
          <li>• Aucune transmission de données à des services marketing externes.</li>
        </ul>
      </div>

      {/* BLOCK — Conservation */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h3 className="text-2xl font-semibold relative z-10">
          Conservation, stockage & suppression
        </h3>

        <ul className="mt-4 text-white/90 text-sm space-y-2 relative z-10">
          <li>• Pas de conservation serveur des données d’entrée financières détaillées.</li>
          <li>• Aucun log contenant les entrées utilisateur détaillées.</li>
          <li>• Aucune sauvegarde ne contient les valeurs saisies.</li>
          <li>• Les données d’entrée sont supprimées automatiquement en fin de cycle de calcul.</li>
        </ul>
      </div>

      {/* BLOCK — Accès tiers */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Restrictions d’accès aux tiers
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          L’isolation des données est appliquée en permanence. Aucun accès direct ou indirect
          aux entrées utilisateur n’est accordé à des prestataires externes.
        </p>

        <ul className="text-gray-700 text-sm space-y-2 leading-relaxed">
          <li>• Aucun transfert vers des fournisseurs d’analytics cloud.</li>
          <li>• Aucun partage avec des réseaux publicitaires ou outils marketing.</li>
          <li>• Aucun sous-traitant ne traite les entrées financières détaillées.</li>
          <li>• Aucun stockage externe des entrées utilisateurs.</li>
        </ul>
      </div>

      {/* BLOCK — Compatibilité institutionnelle */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Compatibilité institutionnelle
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Compatible GDPR et exigences de confidentialité en achats publics.</li>
          <li>• Pas de PII : réduction du risque et des contraintes de partage côté institutions.</li>
          <li>• Compatible avec les workflows de screening bancaire et d’assurance (données minimales).</li>
          <li>• Document exploitable en dossiers administratifs avec exposition PII nulle.</li>
        </ul>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63]
                     text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Retour au sommaire
        </a>
      </div>
    </section>
  );
        }
