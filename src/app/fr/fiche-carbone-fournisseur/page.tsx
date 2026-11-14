import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fiche carbone fournisseur : projet 2026 et limites | Certif-Scope",
  description: "Évolution de l'attestation historique Certif-Scope vers une fiche de consommations d'énergie et d'émissions scopes 1 et 2. Produit en préparation, non commercialisé.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.certif-scope.com/fr/fiche-carbone-fournisseur/" },
};

const entries = [
  ["Électricité et énergies consommées", "Collecter les quantités d'énergie (kWh ou MWh) sur l'exercice et préciser les sources utilisées. La ventilation renouvelable / non renouvelable dépend des données disponibles."],
  ["Émissions directes — scope 1", "Distinguer les combustibles brûlés et les éventuelles émissions directes pertinentes. Une catégorie non couverte ou inconnue doit être signalée, jamais transformée en zéro."],
  ["Énergie achetée — scope 2", "Calculer séparément les émissions associées à l'électricité ou à une autre énergie achetée, en méthode location-based, avec facteur, unité et période documentés."],
  ["Traçabilité et limites", "Afficher la méthode, les hypothèses, les sources des facteurs et les exclusions. Le document repose sur des déclarations : il n'authentifie pas les relevés ou les factures."],
] as const;

export default function SupplierSheet2026InfoPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-16">
      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B3A63]/70">Certif-Scope · évolution de l'offre</p>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
          Fiche de données carbone fournisseur
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[#475569]">
          Notre prochaine évolution s'appuie sur l'identité et le site Certif-Scope
          existants. Elle vise à structurer des données d'énergie et d'émissions
          déclarées utiles dans les échanges entre une entreprise et ses partenaires.
        </p>
        <Link href="/fr/generate/#simulation-fournisseur"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#0B3A63] px-6 py-3 text-sm font-semibold text-white hover:bg-[#082C4B]">
          Essayer la simulation gratuite — sans paiement
        </Link>
        <div className="mt-4">
          <a href="/fr/fiche-carbone-fournisseur/specimen/"
            className="inline-flex min-h-12 items-center rounded-xl border border-[#0B3A63] px-6 py-3 text-sm font-semibold text-[#0B3A63] hover:bg-[#F8FAFC]">
            Voir le spécimen PDF fictif de la future fiche
          </a>
          <p className="mt-2 text-sm text-[#475569]">
            Document de démonstration non signé, sans valeur réglementaire et sans données clients.
          </p>
        </div>
        <div role="status" className="mt-6 rounded-xl border border-[#0B3A63]/20 bg-[#F8FAFC] p-5">
          <strong className="text-[#0B3A63]">Offre en préparation — aucun achat disponible.</strong>
          <p className="mt-2 text-sm leading-relaxed text-[#475569]">
            Prix de travail envisagé : 89 € par fiche, non confirmé pour la vente.
            Un moteur de calcul est désormais intégré en simulation gratuite.
            Les facteurs d'émission, les droits de réutilisation, les PDF,
            les paiements et les droits des anciens clients doivent encore être
            validés avant toute vente.
          </p>
        </div>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {entries.map(([title, description]) => (
          <article key={title} className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#0B3A63]">{title}</h2>
            <p className="mt-3 leading-relaxed text-[#475569]">{description}</p>
          </article>
        ))}
      </div>
      <section className="mt-10 max-w-4xl rounded-[26px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
        <h2 className="text-2xl font-extrabold text-[#0B3A63]">Ce que prévoit la norme volontaire européenne</h2>
        <p className="mt-4 leading-relaxed text-[#475569]">
          Le règlement délégué (UE) 2026/1560 définit un cadre volontaire de
          publication d'informations de durabilité. L'indicateur B3 comporte
          notamment la consommation d'énergie en MWh et les émissions directes
          (scope 1) et liées à l'énergie achetée (scope 2, location-based).
          Pour les entreprises de dix salariés ou moins, les points B3 concernés
          sont volontaires. La fiche Certif-Scope n'est pas, à elle seule, un
          rapport B3 ni un rapport de durabilité complet.
        </p>
        <a className="mt-5 inline-block text-sm font-semibold text-[#0B3A63] underline"
          href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32026R1560"
          target="_blank" rel="noopener noreferrer">
          Lire le règlement officiel et son annexe B3 (EUR-Lex)
        </a>
      </section>
      <section className="mt-10 max-w-4xl">
        <h2 className="text-2xl font-bold text-[#0B3A63]">Et les anciens clients ?</h2>
        <p className="mt-3 leading-relaxed text-[#475569]">
          L'ancienne attestation CO₂e indicative fondée sur les dépenses et ses
          packs sont distincts de cette nouvelle fiche. Les commandes et crédits
          historiques ne seront pas convertis automatiquement ; leurs droits
          doivent d'abord être rapprochés et préservés. Vous n'avez pas à racheter
          un document pour signaler un problème de livraison.
        </p>
        <div className="mt-5 flex flex-wrap gap-5">
          <Link href="/fr/product/methodology/" className="font-semibold text-[#0B3A63] underline">Méthode historique</Link>
          <Link href="/fr/contact/" className="font-semibold text-[#0B3A63] underline">Contacter le support</Link>
          <Link href="/fr/" className="font-semibold text-[#0B3A63] underline">Revenir à l'accueil</Link>
        </div>
      </section>
    </section>
  );
}
