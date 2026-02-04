// PATH: src/app/fr/product/sections/Section2.tsx

"use client";

export default function Section2FR() {
  return (
    <section
      id="key-benefits"
      data-section="key-benefits"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER — section produit */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/15 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          <span className="mr-2">2.</span>
          Bénéfices clés
        </h2>

        {/* HARD SCOPE BOUNDARY */}
        <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-4xl relative z-10">
          Cette section résume les bénéfices pratiques de l’attestation CO₂e.
          Elle ne décrit ni la méthode de calcul ni les facteurs d’émission.
        </p>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope délivre une attestation CO₂e standardisée, conçue pour un
          usage institutionnel. Chaque bénéfice répond à une exigence concrète
          rencontrée dans les appels d’offres, l’onboarding fournisseurs, les
          analyses ESG ou les processus de due-diligence en Europe.
        </p>
      </div>

      {/* BENEFITS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {/* BENEFIT 1 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Disponibilité immédiate
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            L’attestation est générée rapidement via une approche standardisée
            et déterministe, sans nécessiter de métriques opérationnelles, de
            collecte de données physiques ou d’expertise carbone préalable.
          </p>
        </div>

        {/* BENEFIT 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/30 shadow-sm hover:shadow-md transition">
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Document prêt pour l’institutionnel
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Le format s’aligne avec l’onboarding fournisseurs, le screening ESG,
            les questionnaires achats et les processus de due-diligence menés
            par des tiers.
          </p>
        </div>

        {/* BENEFIT 3 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Référence de validité explicite
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Chaque attestation contient un identifiant unique permettant à des
            tiers de confirmer l’authenticité sans compte ni outil technique.
          </p>
        </div>

        {/* BENEFIT 4 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/30 shadow-sm hover:shadow-md transition">
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">04</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Cohérence déterministe
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Des déclarations identiques produisent toujours le même résultat,
            garantissant stabilité, comparabilité et résultats de revue
            prévisibles.
          </p>
        </div>

        {/* BENEFIT 5 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">05</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Accessible sans expertise
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Aucun consultant, logiciel spécialisé ou équipe sustainability n’est
            requis. Le parcours est volontairement simple et guidé.
          </p>
        </div>

        {/* BENEFIT 6 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/30 shadow-sm hover:shadow-md transition">
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">06</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Couverture européenne multilingue
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Disponible en plusieurs langues européennes pour soutenir les
            relations fournisseurs transfrontalières et les workflows de revue
            institutionnels.
          </p>
        </div>
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
```0
