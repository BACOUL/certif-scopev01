import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CO2-Bescheinigung fuer Lieferanten: was liefern? | Certif-Scope",
  description:
    "Praxisleitfaden fuer KMU: CO2-Anfrage von Kunden oder Einkaufsteams verstehen und eine indikative, pruefbare CO2e-Bescheinigung liefern, wenn kein vollstaendiges THG-Inventar verlangt wird.",
  alternates: {
    canonical:
      "https://www.certif-scope.com/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "CO2-Bescheinigung fuer Lieferanten: was liefern? | Certif-Scope",
    description:
      "Ein praktischer Leitfaden fuer KMU, die schnell auf CO2e-Anfragen von Kunden, Einkaufsteams oder Lieferantenportalen antworten muessen.",
    url: "https://www.certif-scope.com/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten/",
    siteName: "Certif-Scope",
    locale: "de_DE",
    type: "article",
  },
};

export default function SupplierCO2CertificateDE() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 text-gray-800 dark:text-gray-100">
      <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#1FB6C1]">
        Leitfaden Lieferantenanfrage
      </p>

      <h1 className="mb-6 text-3xl font-extrabold text-[#0B3A63] dark:text-white md:text-5xl">
        CO2-Bescheinigung fuer Lieferanten: was sollten KMU liefern?
      </h1>

      <p className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Wenn ein Kunde, ein Einkaufsteam oder ein Lieferantenportal eine CO2-Angabe verlangt, ist nicht immer ein
        vollstaendiges Treibhausgasinventar gemeint. Oft geht es um ein klares, datiertes und archivierbares
        Screening-Dokument fuer die Lieferantenbewertung.
      </p>

      <div className="mb-12 grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <h2 className="mb-2 font-bold text-[#0B3A63] dark:text-white">Anfrage verstehen</h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Klaeren Sie, ob nur ein CO2e-Dokument fuer ein Dossier verlangt wird oder ein vollstaendiges Inventar.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <h2 className="mb-2 font-bold text-[#0B3A63] dark:text-white">Proportional antworten</h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Wenn keine Methode, kein Pruefstandard und keine externe Assurance vorgeschrieben sind, kann eine indikative Bescheinigung passen.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <h2 className="mb-2 font-bold text-[#0B3A63] dark:text-white">Dokument liefern</h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Certif-Scope erstellt ein standardisiertes CO2e-PDF mit Ergebnis, Methode, Grenzen und dokumentarischer Pruefung.
          </p>
        </div>
      </div>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-[#0B3A63] dark:text-white">
          Wann ist eine CO2e-Bescheinigung fuer Lieferanten geeignet?
        </h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Sie ist geeignet, wenn die Anfrage auf ein einfaches Screening abzielt: ein CO2e-Indikator, ein Datum,
          eine erklaerte Methode, sichtbare Grenzen und ein Dokument, das an Einkauf, Kunde oder Plattform weitergegeben werden kann.
        </p>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Wenn dagegen ein vollstaendiges Inventar, Aktivitaetsdaten, Nachweise, ein bestimmter Standard oder eine
          Drittpruefung verlangt werden, muss diese formelle Anforderung eingehalten werden.
        </p>
      </section>

      <section className="mb-12 rounded-2xl bg-slate-50 p-6 dark:bg-gray-800">
        <h2 className="mb-3 text-2xl font-bold text-[#0B3A63] dark:text-white">
          Was Certif-Scope liefert
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
          <li>ein indikatives, aggregiertes CO2e-Ergebnis;</li>
          <li>eine kurz beschriebene spend-based Methode;</li>
          <li>sichtbare methodische Grenzen;</li>
          <li>ein standardisiertes, archivierbares PDF;</li>
          <li>eine Dokument-ID und QR-basierte Kontrollmoeglichkeit.</li>
        </ul>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-[#0B3A63] dark:text-white">
          Wichtige Abgrenzung
        </h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Die Certif-Scope-Bescheinigung ist kein CO2-Audit, keine Zertifizierung, kein regulatorischer CSRD-/ESRS-Bericht
          und kein vollstaendiges Treibhausgasinventar. Sie ist ein indikatives Dokument auf Basis der Angaben des Unternehmens.
        </p>
      </section>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/de/erstellen/"
          className="rounded-xl bg-[#1FB6C1] px-6 py-3 text-center font-semibold text-white hover:bg-[#169ba5]"
        >
          CO2e-Bescheinigung erstellen
        </Link>
        <Link
          href="/de/preise/"
          className="rounded-xl border border-[#0B3A63] px-6 py-3 text-center font-semibold text-[#0B3A63] hover:bg-slate-50 dark:border-white dark:text-white dark:hover:bg-gray-800"
        >
          Preise ansehen
        </Link>
      </div>
    </main>
  );
}
