import Link from "next/link";

const adaptedCases = [
  "Client demande une information carbone simple",
  "Plateforme fournisseur demande un justificatif CO₂e",
  "Banque demande un élément ESG ou carbone",
  "Assurance demande une information environnementale",
  "Appel d’offres sans méthode imposée",
];

const notAdaptedCases = [
  "Audit carbone complet exigé",
  "Norme ISO, GHG Protocol complet ou méthode imposée",
  "Scope 1 / 2 / 3 détaillé exigé",
  "Vérification externe obligatoire",
  "Reporting CSRD / ESRS demandé",
];

function DecisionList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-lg border border-[#0B3A63]/12 bg-white p-5 shadow-sm md:p-6">
      <h3 className="text-xl font-extrabold text-[#0B3A63]">{title}</h3>

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#0B3A63]/80 md:text-base">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1FB6C1]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function UseCaseDecisionTable() {
  return (
    <section
      id="cas-adaptes"
      aria-labelledby="cas-adaptes-title"
      className="bg-white py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B3A63]/70 md:text-sm">
            Décision rapide
          </p>

          <h2
            id="cas-adaptes-title"
            className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl"
          >
            Est-ce adapté à votre demande ?
          </h2>

          <p className="mt-5 text-base leading-relaxed text-[#0B3A63]/80 md:text-lg">
            Certif-Scope est conçu pour les demandes documentaires simples. Si
            un audit complet, une norme précise ou une vérification externe est
            exigée, il faut suivre cette exigence.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <DecisionList title="Adapté" items={adaptedCases} />
          <DecisionList title="Non adapté" items={notAdaptedCases} />
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/fr/generate"
            className="inline-flex min-h-[54px] w-full items-center justify-center rounded-lg bg-[#1FB6C1] px-7 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2 sm:w-auto"
          >
            Générer mon attestation — 89 €
          </Link>

          <a
            href="/api/sample"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[54px] w-full items-center justify-center rounded-lg border border-[#0B3A63]/20 bg-white px-7 py-3 text-base font-semibold text-[#0B3A63] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2 sm:w-auto"
          >
            Télécharger un exemple gratuit
          </a>
        </div>
      </div>
    </section>
  );
}
