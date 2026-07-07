import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exigences CO2 banques et assurances : quoi fournir ? | Certif-Scope",
  description:
    "Guide PME : comprendre les demandes CO2 des banques et assurances et fournir une attestation CO2e indicative lorsque la demande est documentaire et sans audit impose.",
  alternates: {
    canonical:
      "https://www.certif-scope.com/fr/why-companies-ask/exigences-co2-banques-assurances/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Exigences CO2 banques et assurances : quoi fournir ? | Certif-Scope",
    description:
      "Une page pratique pour repondre aux demandes CO2 de banques, assurances et screenings ESG sans confondre attestation indicative et audit complet.",
    url: "https://www.certif-scope.com/fr/why-companies-ask/exigences-co2-banques-assurances/",
    siteName: "Certif-Scope",
    locale: "fr_FR",
    type: "article",
  },
};

export default function BankInsuranceCO2RequirementsFR() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 text-gray-800 dark:text-gray-100">
      <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#1FB6C1]">
        Guide banque & assurance
      </p>

      <h1 className="mb-6 text-3xl font-extrabold text-[#0B3A63] dark:text-white md:text-5xl">
        Exigences CO2 banques et assurances : que fournir quand on vous demande un document carbone ?
      </h1>

      <p className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Les banques, assurances et acteurs du financement demandent de plus en plus d'informations ESG ou CO2e.
        Pour une PME, l'enjeu est de comprendre le niveau attendu : simple document de screening ou inventaire carbone complet.
      </p>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-[#0B3A63] dark:text-white">
          Pourquoi ces demandes apparaissent
        </h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Les institutions financieres et assureurs structurent progressivement leurs analyses de risque ESG.
          Cela peut conduire a demander un indicateur CO2e, un document carbone ou une information environnementale simple
          lors d'un dossier de financement, d'assurance, de renouvellement ou de relation commerciale.
        </p>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Toutes ces demandes ne correspondent pas a une obligation de produire un bilan carbone complet. Certaines relèvent
          d'un screening documentaire : fournir une information lisible, datee, methodologique et archivable.
        </p>
      </section>

      <div className="mb-12 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <h2 className="mb-3 text-xl font-bold text-[#0B3A63] dark:text-white">
            Une attestation peut suffire si...
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
            <li>la demande porte sur un document CO2e ou un indicateur de screening ;</li>
            <li>aucune methode obligatoire n'est imposee ;</li>
            <li>aucune verification externe n'est exigee ;</li>
            <li>le besoin est de joindre un justificatif carbone simple a un dossier.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <h2 className="mb-3 text-xl font-bold text-[#0B3A63] dark:text-white">
            Un audit reste necessaire si...
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
            <li>un inventaire GES complet est explicitement demande ;</li>
            <li>un referentiel, un perimetre ou des preuves detaillees sont imposes ;</li>
            <li>une assurance, une verification tierce ou une certification est exigee ;</li>
            <li>le dossier releve d'une obligation reglementaire precise.</li>
          </ul>
        </div>
      </div>

      <section className="mb-12 rounded-2xl bg-slate-50 p-6 dark:bg-gray-800">
        <h2 className="mb-3 text-2xl font-bold text-[#0B3A63] dark:text-white">
          La reponse Certif-Scope
        </h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Certif-Scope genere une attestation CO2e indicative basee sur les depenses declarees.
          Le PDF contient un resultat agrege, une methode explicite, des limites visibles et des elements de verification documentaire.
          Il est concu pour les demandes simples de banque, assurance, client, fournisseur ou appel d'offres.
        </p>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-[#0B3A63] dark:text-white">
          Clarification essentielle
        </h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Une attestation Certif-Scope n'est pas un audit carbone, une certification officielle, un bilan GES reglementaire
          ou un reporting CSRD/ESRS. Elle sert a fournir une premiere reponse documentaire lorsque le niveau attendu ne justifie
          pas une demarche complète.
        </p>
      </section>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/fr/generate/"
          className="rounded-xl bg-[#1FB6C1] px-6 py-3 text-center font-semibold text-white hover:bg-[#169ba5]"
        >
          Generer mon document CO2e
        </Link>
        <Link
          href="/fr/scope-1-2-3-explication/"
          className="rounded-xl border border-[#0B3A63] px-6 py-3 text-center font-semibold text-[#0B3A63] hover:bg-slate-50 dark:border-white dark:text-white dark:hover:bg-gray-800"
        >
          Comprendre les scopes 1, 2 et 3
        </Link>
      </div>
    </main>
  );
}
