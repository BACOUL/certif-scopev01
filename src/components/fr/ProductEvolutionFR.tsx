import Link from "next/link";

export default function ProductEvolutionFR({ compact = false }: { compact?: boolean }) {
  return (
    <section
      aria-labelledby={compact ? "offre-transition-compact" : "offre-transition-accueil"}
      data-offer-transition="2026"
      className={compact ? "my-8 rounded-[26px] border border-[#0B3A63]/15 bg-[#F8FAFC] p-6 md:p-8" : "bg-white py-12 md:py-16"}
    >
      <div className={compact ? "" : "mx-auto max-w-7xl px-6 md:px-8"}>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B3A63]/70">
          Évolution de Certif-Scope · novembre 2026
        </p>
        <h2 id={compact ? "offre-transition-compact" : "offre-transition-accueil"} className="mt-3 text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
          L’ancienne attestation est conservée. La nouvelle fiche fournisseur se prépare.
        </h2>
        <p className="mt-4 max-w-4xl leading-relaxed text-[#475569]">
          Certif-Scope évolue vers une fiche de données carbone fournisseur reposant
          sur des consommations et des émissions déclarées, notamment l’énergie,
          le scope 1 et le scope 2 calculé selon la localisation. Cette nouvelle
          fiche n’est pas encore disponible à l’achat : les facteurs, les
          contrôles métier et la livraison doivent être validés.
        </p>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#0B3A63]/10 bg-white p-5">
            <h3 className="text-lg font-bold text-[#0B3A63]">Attestation historique, fondée sur les dépenses</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#475569]">
              Une estimation indicative par catégories de dépenses. Son PDF et les
              droits liés aux anciennes commandes et aux packs doivent être
              préservés. Elle n’équivaut pas à une déclaration d’énergie ou des
              émissions des scopes 1 et 2 conforme à B3.
            </p>
            <Link className="mt-4 inline-block text-sm font-semibold text-[#0B3A63] underline" href="/fr/product/methodology/">
              Consulter la méthode historique
            </Link>
          </article>
          <article className="rounded-2xl border border-[#0B3A63]/10 bg-white p-5">
            <h3 className="text-lg font-bold text-[#0B3A63]">Fiche de données carbone fournisseur, en préparation</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#475569]">
              Une fiche de consommation et d’émissions, avec sources, périmètre,
              facteurs d’émission et réserves explicites. Ce n’est ni une
              certification, ni un audit, ni un rapport de durabilité complet.
            </p>
            <Link className="mt-4 inline-block text-sm font-semibold text-[#0B3A63] underline" href="/fr/fiche-carbone-fournisseur/">
              Découvrir la future fiche et ses limites
            </Link>
          </article>
        </div>
        <p className="mt-5 text-sm text-[#475569]">
          Cette évolution répond à la norme volontaire européenne adoptée en 2026 ;
          elle ne rend pas l’achat d’un document Certif-Scope obligatoire. Les
          anciennes clés de pack ne sont pas encore migrées vers la nouvelle fiche.
        </p>
      </div>
    </section>
  );
}
