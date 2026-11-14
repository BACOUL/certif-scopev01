import Link from "next/link";

/**
 * This is an in-place information update for the EXISTING Certif-Scope website.
 * It must not imply that the current spend-based attestation covers VSME B3.
 * Keep the original design, navigation, purchasing flow and PDF unchanged.
 */
export default function RegulatoryUpdate2026() {
  return (
    <section
      id="reglementation-2026"
      aria-labelledby="reglementation-2026-title"
      className="mx-auto max-w-7xl px-6 py-12 md:py-16"
    >
      <div className="rounded-[28px] border border-[#0B3A63]/15 bg-[#F8FAFC] p-6 md:p-10">
        <p className="text-xs font-bold uppercase tracking-wider text-[#0B3A63]">
          Actualité réglementaire européenne · 2026
        </p>
        <h2 id="reglementation-2026-title" className="mt-3 text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
          Ce qui change pour les données carbone demandées aux PME
        </h2>
        <p className="mt-4 max-w-4xl leading-relaxed text-[#475569]">
          Le règlement délégué (UE) 2026/1560 établit une norme volontaire de publication
          d’informations de durabilité. Sa rubrique B3 concerne notamment l’énergie
          consommée en MWh, les émissions directes (scope 1) et celles liées à
          l’énergie achetée (scope 2, selon la localisation).
        </p>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-[#0B3A63]/10 bg-white p-5">
            <h3 className="text-lg font-bold text-[#0B3A63]">Ce que demande la rubrique B3</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#475569]">
              Des données de consommation et d’émissions sur une période de reporting,
              avec la ventilation de l’énergie renouvelable et non renouvelable lorsque
              les informations nécessaires sont disponibles. La rubrique prévoit des
              modalités proportionnées, notamment pour les entreprises de dix salariés ou moins.
            </p>
          </div>
          <div className="rounded-2xl border border-[#0B3A63]/10 bg-white p-5">
            <h3 className="text-lg font-bold text-[#0B3A63]">Ce que cela ne signifie pas</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#475569]">
              Cela ne rend pas toutes les PME soumises à la CSRD, ni l’achat d’une
              attestation obligatoire. Le plafond de la chaîne de valeur prévu
              à l’article 3 s’applique aux exercices ouverts à compter du 1er janvier 2027.
            </p>
          </div>
        </div>
        <div className="mt-6 rounded-xl border-l-4 border-[#0B3A63] bg-white p-5">
          <h3 className="font-bold text-[#0B3A63]">Important avant de commander</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#475569]">
            L’attestation Certif-Scope actuellement commercialisée est une estimation
            indicative fondée sur les dépenses. Elle ne calcule pas un bilan B3 complet
            fondé sur les consommations ni un inventaire réglementaire des scopes 1 et 2.
            Si votre client exige ces informations, vérifiez sa demande avant tout achat.
            L’adaptation du produit est en préparation, sans ouverture commerciale annoncée.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold text-[#0B3A63]">
          <a href="https://eur-lex.europa.eu/eli/reg_del/2026/1560/oj" target="_blank" rel="noopener noreferrer" className="underline">
            Règlement européen 2026/1560
          </a>
          <a href="https://eur-lex.europa.eu/eli/dir/2026/470/oj" target="_blank" rel="noopener noreferrer" className="underline">
            Directive européenne 2026/470
          </a>
          <Link href="/fr/fiche-carbone-fournisseur/" className="underline">
            Découvrir la future fiche fournisseur
          </Link>
          <Link href="/fr/product/methodology/" className="underline">
            Méthode de l’attestation actuelle
          </Link>
        </div>
      </div>
    </section>
  );
}
