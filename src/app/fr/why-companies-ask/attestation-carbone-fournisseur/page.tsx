import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Attestation carbone fournisseur : quoi fournir ? | Certif-Scope",
  description:
    "Guide PME : comprendre une demande d'attestation carbone fournisseur et fournir un document CO2e indicatif, clair, date et verifiable lorsque aucun audit complet n'est exige.",
  alternates: {
    canonical:
      "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-fournisseur/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Attestation carbone fournisseur : quoi fournir ? | Certif-Scope",
    description:
      "Une page pratique pour les PME qui doivent repondre a une demande carbone fournisseur sans lancer inutilement un audit complet.",
    url: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-fournisseur/",
    siteName: "Certif-Scope",
    locale: "fr_FR",
    type: "article",
  },
};

export default function SupplierCarbonAttestationFR() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 text-gray-800 dark:text-gray-100">
      <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#1FB6C1]">
        Guide fournisseur PME
      </p>

      <h1 className="mb-6 text-3xl font-extrabold text-[#0B3A63] dark:text-white md:text-5xl">
        Attestation carbone fournisseur : quoi fournir quand un client vous la demande ?
      </h1>

      <p className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Une demande carbone fournisseur ne signifie pas toujours qu'un bilan carbone complet est exige.
        Dans de nombreux cas, l'objectif est de disposer d'un document CO2e clair, date, methodologique
        et archivable pour un dossier d'achat, d'onboarding ou de qualification fournisseur.
      </p>

      <div className="mb-12 grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <h2 className="mb-2 font-bold text-[#0B3A63] dark:text-white">Demande fournisseur</h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Un client, un service achat ou une plateforme demande un justificatif CO2e pour completer un dossier.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <h2 className="mb-2 font-bold text-[#0B3A63] dark:text-white">Reponse proportionnee</h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Si aucun audit, perimetre detaille ou verification externe n'est impose, une attestation indicative peut suffire.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <h2 className="mb-2 font-bold text-[#0B3A63] dark:text-white">Document transmissible</h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Certif-Scope genere un PDF CO2e standardise avec methode, limites et elements de verification documentaire.
          </p>
        </div>
      </div>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-[#0B3A63] dark:text-white">
          Quand une attestation CO2e fournisseur est adaptee
        </h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Elle est adaptee lorsque la demande porte sur un document de screening : une information carbone lisible,
          comparable et rapidement transmissible. C'est frequent dans les questionnaires fournisseurs, les dossiers
          d'achat, les evaluations ESG simples et les renouvellements de relation commerciale.
        </p>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Si le client impose un referentiel precis, un perimetre complet, des donnees d'activite detaillees, des preuves
          ou une verification tierce, il faut suivre cette exigence et ne pas presenter une attestation indicative comme un audit.
        </p>
      </section>

      <section className="mb-12 rounded-2xl bg-slate-50 p-6 dark:bg-gray-800">
        <h2 className="mb-3 text-2xl font-bold text-[#0B3A63] dark:text-white">
          Ce que Certif-Scope permet de fournir
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
          <li>un resultat CO2e indicatif et agrege ;</li>
          <li>une methode spend-based clairement indiquee ;</li>
          <li>une date, une entreprise, une annee de reference et des limites visibles ;</li>
          <li>un PDF standardise, archivable et transmissible ;</li>
          <li>des elements de verification documentaire par identifiant et QR code.</li>
        </ul>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-[#0B3A63] dark:text-white">
          Limite importante
        </h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Certif-Scope ne remplace pas un bilan GES complet, un audit carbone, une certification officielle ou un reporting
          CSRD/ESRS. Le document est une attestation CO2e indicative basee sur les informations declarees par l'entreprise.
        </p>
      </section>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/fr/generate/"
          className="rounded-xl bg-[#1FB6C1] px-6 py-3 text-center font-semibold text-white hover:bg-[#169ba5]"
        >
          Generer mon attestation CO2e
        </Link>
        <Link
          href="/fr/pricing/"
          className="rounded-xl border border-[#0B3A63] px-6 py-3 text-center font-semibold text-[#0B3A63] hover:bg-slate-50 dark:border-white dark:text-white dark:hover:bg-gray-800"
        >
          Voir le prix
        </Link>
      </div>
    </main>
  );
}
