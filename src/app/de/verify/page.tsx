// PATH: src/app/de/verify/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

const CERTIFSCOPE_PUBLIC_KEY_BASE64 =
  "MCowBQYDK2VwAyEAbKp2pg4wmzE5Kqo9tEwv7JJjxQyT2cBmwiLLHp4cSac=";

export const metadata: Metadata = {
  title: "CO₂e-Bescheinigung verifizieren | Certif-Scope",
  description:
    "Verifizieren Sie eine Certif-Scope CO₂e-Bescheinigung per QR-Code oder über die technische Prüfung des signierten PDF. Dokumentarische Prüfung, kein Audit und keine Zertifizierung.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/verify/",
    languages: {
      de: "https://www.certif-scope.com/de/verify/",
      fr: "https://www.certif-scope.com/fr/verify/",
    },
  },
  openGraph: {
    title: "CO₂e-Bescheinigung verifizieren | Certif-Scope",
    description:
      "Dokumentarische Verifizierung von Certif-Scope CO₂e-Bescheinigungen per QR-Code, signiertem PDF und öffentlichem Prüfschlüssel.",
    url: "https://www.certif-scope.com/de/verify/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

type SearchParamsInput =
  | Promise<Record<string, string | string[] | undefined>>
  | Record<string, string | string[] | undefined>
  | undefined;

type VerifyPageProps = {
  searchParams?: SearchParamsInput;
};

type ParsedVerificationData = {
  certificateId?: string;
  issuedAt?: string;
  validUntil?: string;
  methodVersion?: string;
  factorVersion?: string;
  issuer?: string;
  signature?: string;
  payload?: unknown;
};

type QRVerificationState =
  | { status: "missing"; rawValue: null; data: null; error: null }
  | { status: "detected"; rawValue: string; data: ParsedVerificationData; error: null }
  | { status: "invalid"; rawValue: string; data: null; error: string };

async function resolveSearchParams(searchParams: SearchParamsInput) {
  if (!searchParams) return {};
  return await searchParams;
}

function getSingleParam(
  params: Record<string, string | string[] | undefined>,
  key: string
): string | undefined {
  const value = params[key];
  return Array.isArray(value) ? value[0] : value;
}

function decodeBase64Url(value: string): string {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(
    normalized.length + ((4 - (normalized.length % 4)) % 4),
    "="
  );
  return Buffer.from(padded, "base64").toString("utf8");
}

function parseVerificationParam(value?: string): QRVerificationState {
  if (!value || value.trim().length === 0) {
    return { status: "missing", rawValue: null, data: null, error: null };
  }

  const rawValue = value.trim();

  try {
    const decoded = decodeBase64Url(rawValue);
    const parsed = JSON.parse(decoded) as ParsedVerificationData;

    if (!parsed || typeof parsed !== "object") {
      return {
        status: "invalid",
        rawValue,
        data: null,
        error: "Die Verifizierungsdaten sind nicht lesbar.",
      };
    }

    return { status: "detected", rawValue, data: parsed, error: null };
  } catch {
    return {
      status: "invalid",
      rawValue,
      data: null,
      error:
        "Der vom QR-Code übermittelte Verifizierungsparameter fehlt, ist unvollständig oder ungültig.",
    };
  }
}

function formatValue(value?: string) {
  if (!value || value.trim().length === 0) return "Nicht angegeben";
  return value;
}

function isExpired(validUntil?: string) {
  if (!validUntil) return false;
  const validUntilDate = new Date(`${validUntil}T23:59:59`);
  if (Number.isNaN(validUntilDate.getTime())) return false;
  return validUntilDate.getTime() < Date.now();
}

export default async function VerifyPageDE({ searchParams }: VerifyPageProps) {
  const params = await resolveSearchParams(searchParams);
  const verificationParam = getSingleParam(params, "v");
  const qrState = parseVerificationParam(verificationParam);
  const attestationExpired =
    qrState.status === "detected" ? isExpired(qrState.data.validUntil) : false;
  const hasQrVerification = qrState.status === "detected";

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CO₂e-Bescheinigung verifizieren",
    url: "https://www.certif-scope.com/de/verify/",
    description:
      "Dokumentarische Verifizierung von Certif-Scope CO₂e-Bescheinigungen per QR-Code, signiertem PDF und öffentlichem Prüfschlüssel.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    publisher: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    inLanguage: "de-DE",
  };

  return (
    <section
      id="verify"
      data-section="verify"
      className={`mx-auto max-w-7xl px-6 pb-24 ${
        hasQrVerification ? "pt-6 md:pt-8" : "pt-12"
      }`}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />

      <div id="top" />

      {hasQrVerification && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("load", function () {
                var target = document.getElementById("verification-qr");
                if (target) {
                  setTimeout(function () {
                    target.scrollIntoView({ behavior: "auto", block: "start" });
                  }, 80);
                }
              });
            `,
          }}
        />
      )}

      {!hasQrVerification && (
        <header className="mb-14 rounded-3xl border border-[#E2E8F0] bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF8FA] px-6 py-10 shadow-sm md:px-10 md:py-14">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#64748B]">
            CO₂e-Bescheinigung — Verifizierung
          </p>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <h1 className="mb-6 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-5xl">
                Eine Certif-Scope CO₂e-Bescheinigung verifizieren
              </h1>

              <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
                Scannen Sie den QR-Code auf einer Certif-Scope-Bescheinigung, um diese Seite mit den Verifizierungselementen des Dokuments zu öffnen. Die technische Prüfung des signierten PDF bleibt zusätzlich möglich.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full border border-[#D7E7EC] bg-white px-4 py-2 text-sm font-medium text-[#0B3A63]">
                  QR-Code-Verifizierung
                </span>
                <span className="inline-flex items-center rounded-full border border-[#D7E7EC] bg-white px-4 py-2 text-sm font-medium text-[#0B3A63]">
                  Signiertes PDF
                </span>
                <span className="inline-flex items-center rounded-full border border-[#D7E7EC] bg-white px-4 py-2 text-sm font-medium text-[#0B3A63]">
                  Keine PDF-Speicherung
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-[#DDEAF0] bg-white p-6 shadow-sm">
              <p className="mb-3 text-sm font-semibold text-[#0B3A63]">
                Prinzip der Verifizierung
              </p>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E9F8FA] text-xs font-bold text-[#0B3A63]">1</span>
                  <p>Der QR-Code öffnet eine Certif-Scope-Verifizierungs-URL.</p>
                </div>
                <div className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E9F8FA] text-xs font-bold text-[#0B3A63]">2</span>
                  <p>Die Seite liest die vom Dokument übermittelten Kontrollelemente.</p>
                </div>
                <div className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E9F8FA] text-xs font-bold text-[#0B3A63]">3</span>
                  <p>Die erweiterte Prüfung kann zusätzlich mit dem signierten Original-PDF erfolgen.</p>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}

      <div className="mx-auto max-w-4xl">
        <section id="verification-qr" className="mb-12 scroll-mt-4 md:scroll-mt-6">
          <div
            className={
              hasQrVerification
                ? "overflow-hidden rounded-3xl border-2 border-[#0B3A63] bg-white shadow-xl"
                : "rounded-3xl border border-[#DDEAF0] bg-white p-6 shadow-sm md:p-8"
            }
          >
            {!hasQrVerification && (
              <div className="mb-6">
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#64748B]">
                  Schnelle Verifizierung
                </p>
                <h2 className="mb-3 text-2xl font-bold text-[#0B3A63] md:text-3xl">
                  Verifizierung per QR-Code
                </h2>
                <p className="leading-relaxed text-gray-700">
                  Jede Certif-Scope-Bescheinigung kann einen QR-Code zur Verifizierung enthalten. Beim Scannen öffnet ein Dritter diese Seite mit den dokumentarischen Kontrollelementen.
                </p>
              </div>
            )}

            {qrState.status === "missing" && (
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#DDEAF0] bg-white font-bold text-[#0B3A63]">
                    QR
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-[#0B3A63]">
                      Keine Verifizierungsdaten erkannt
                    </h3>
                    <p className="leading-relaxed text-gray-700">
                      Scannen Sie den QR-Code auf einer Certif-Scope-Bescheinigung, um die schnelle Prüfung zu starten. Wenn kein QR-Code verfügbar ist, nutzen Sie die technische Prüfung des signierten Original-PDF weiter unten.
                    </p>
                    <p className="mt-4 text-sm text-gray-600">
                      Erwartetes QR-Code-Format: <code className="rounded bg-white px-2 py-1 text-[#0B3A63]">/de/verify/?v=...</code>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {qrState.status === "detected" && (
              <>
                <div className="bg-[#0B3A63] px-5 py-5 md:px-7 md:py-6">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#BFE8EA]">
                    Certif-Scope Dokumentenprüfung
                  </p>
                  <h1 className="text-2xl font-extrabold leading-tight text-white md:text-3xl">
                    Bescheinigung erkannt und lesbar
                  </h1>
                  <p className="mt-3 text-sm leading-relaxed text-[#EAF6F8] md:text-base">
                    Der QR-Code entspricht einer Certif-Scope-Bescheinigung mit nutzbaren Verifizierungselementen.
                  </p>
                </div>

                <div className="p-5 md:p-7">
                  <div
                    className={`mb-6 rounded-2xl border p-5 ${
                      attestationExpired
                        ? "border-[#F5C2C7] bg-[#FFF5F5]"
                        : "border-[#BFE8EA] bg-[#F1FBFC]"
                    }`}
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="mb-1 text-xs uppercase tracking-[0.16em] text-gray-500">Status</p>
                        <p className={`text-2xl font-extrabold ${attestationExpired ? "text-[#8A1F2D]" : "text-[#0B3A63]"}`}>
                          {attestationExpired ? "Bescheinigung abgelaufen" : "Bescheinigung innerhalb der Gültigkeitsdauer"}
                        </p>
                      </div>
                      <div className="rounded-xl border border-[#DDEAF0] bg-white px-4 py-3">
                        <p className="mb-1 text-xs uppercase tracking-wide text-gray-500">Gültig bis</p>
                        <p className="text-base font-bold text-[#0B3A63]">{formatValue(qrState.data.validUntil)}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-gray-700">
                      {attestationExpired
                        ? "Das Dokument bleibt technisch lesbar, aber seine Gültigkeitsdauer ist überschritten. Es sollte für den laufenden Gebrauch als abgelaufen betrachtet werden."
                        : "Das im Dokument angegebene Gültigkeitsdatum ist nicht überschritten. Die Bescheinigung bleibt eine indikative CO₂e-Bescheinigung innerhalb der im PDF genannten Grenzen."}
                    </p>
                  </div>

                  <div className="mb-6 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.16em] text-gray-500">Verifizierungsergebnis</p>
                    <p className="text-base font-semibold leading-relaxed text-[#0B3A63]">
                      Die vom QR-Code übermittelten Elemente sind kohärent, lesbar und mit einer Bescheinigung im Certif-Scope-Format verknüpft.
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-700">
                      Diese Prüfung bestätigt dokumentarische Kontrollelemente. Sie macht aus der Bescheinigung kein CO₂-Audit, keine regulatorische Treibhausgasbilanz, keine offizielle Zertifizierung und keine CSRD-/ESRS-Konformität.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      ["Bescheinigungs-ID", qrState.data.certificateId],
                      ["Aussteller", qrState.data.issuer || "Certif-Scope"],
                      ["Ausstellungsdatum", qrState.data.issuedAt],
                      ["Gültigkeit", qrState.data.validUntil],
                      ["Methodik", qrState.data.methodVersion],
                      ["Faktorversion", qrState.data.factorVersion],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-xl border border-[#DDEAF0] bg-white p-4">
                        <p className="mb-1 text-xs uppercase tracking-wide text-gray-500">{label}</p>
                        <p className="break-words text-base font-bold text-[#0B3A63]">{formatValue(value)}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    <div className="rounded-xl border border-[#DDEAF0] bg-[#F8FAFC] p-4">
                      <p className="mb-2 text-sm font-bold text-[#0B3A63]">QR-Verifizierung</p>
                      <p className="text-sm leading-relaxed text-gray-700">Der QR-Code enthält lesbare Kontrollelemente.</p>
                    </div>
                    <div className="rounded-xl border border-[#DDEAF0] bg-[#F8FAFC] p-4">
                      <p className="mb-2 text-sm font-bold text-[#0B3A63]">Original-PDF</p>
                      <p className="text-sm leading-relaxed text-gray-700">Die erweiterte Prüfung sollte mit dem signierten Original-PDF erfolgen.</p>
                    </div>
                    <div className="rounded-xl border border-[#DDEAF0] bg-[#F8FAFC] p-4">
                      <p className="mb-2 text-sm font-bold text-[#0B3A63]">Private Daten</p>
                      <p className="text-sm leading-relaxed text-gray-700">Detaillierte Ausgabendaten werden auf dieser Seite nicht angezeigt.</p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#E2E8F0] bg-white p-4">
                    <p className="text-sm leading-relaxed text-gray-700">
                      <strong>Wichtig:</strong> Certif-Scope speichert nicht dauerhaft das vollständige PDF der Bescheinigung. Die Verifizierung stützt sich auf die QR-Code-Daten und, falls nötig, auf die Prüfung des Original-PDF durch dessen Inhaber.
                    </p>
                  </div>
                </div>
              </>
            )}

            {qrState.status === "invalid" && (
              <div className="rounded-2xl border border-[#F5C2C7] bg-[#FFF5F5] p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#F5C2C7] bg-white font-bold text-[#8A1F2D]">!</div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-[#8A1F2D]">Verifizierung nicht möglich</h3>
                    <p className="leading-relaxed text-gray-700">{qrState.error}</p>
                    <p className="mt-4 text-sm leading-relaxed text-gray-600">
                      Dies kann durch einen unvollständigen Link, einen beschädigten QR-Code oder ein nicht erkanntes Verifizierungsformat verursacht werden. Nutzen Sie bei Bedarf das Original-PDF und die technische Prüfung.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mb-12">
          <div className="grid gap-4 md:grid-cols-3">
            <TrustCard title="Kein öffentliches Dokumentenregister" text="Certif-Scope veröffentlicht kein vollständiges Register der ausgestellten Bescheinigungen." />
            <TrustCard title="Keine PDF-Speicherung" text="Die Verifizierung beruht nicht auf dem Abruf eines von Certif-Scope gespeicherten PDFs." />
            <TrustCard title="Begrenzte Daten" text="Die für die Schätzung verwendeten detaillierten Finanzdaten werden auf dieser Seite nicht angezeigt." />
          </div>
        </section>

        <section className="mb-12">
          <div className="border-l-4 border-[#0B3A63] bg-[#F8FAFC] p-4">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong>Gültigkeit der Bescheinigung:</strong> Eine Certif-Scope-Bescheinigung ist <strong>12 Monate ab Ausstellungsdatum</strong> gültig, wie im Dokument angegeben. Danach kann sie technisch weiterhin prüfbar sein, sollte aber für den laufenden Gebrauch als abgelaufen betrachtet werden.
            </p>
          </div>
        </section>

        <section className="mb-12 rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm md:p-8">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#64748B]">Methode beibehalten</p>
          <h2 className="mb-4 text-2xl font-bold text-[#0B3A63] md:text-3xl">Technische Verifizierung</h2>
          <p className="mb-5 leading-relaxed text-gray-700">
            Die QR-Code-Verifizierung vereinfacht den Zugang zu den Kontrollelementen. Für eine vollständigere Dokumentenprüfung bleibt die technische Prüfung des signierten PDF verfügbar.
          </p>
          <p className="mb-8 text-sm text-gray-600">
            Technische Details finden Sie in der <Link href="/fr/verify/technical" className="text-[#0B3A63] underline underline-offset-4 hover:no-underline">technischen Verifizierungsdokumentation</Link>.
          </p>

          <div className="space-y-10">
            <section>
              <h3 className="mb-3 text-xl font-bold text-[#0B3A63]">1. Original-PDF verwenden</h3>
              <p className="leading-relaxed text-gray-700">
                Verwenden Sie die originale PDF-Datei, die die Bescheinigung enthält. Screenshots, Ausdrucke oder veränderte Dateien können nicht mit demselben Kontrollniveau authentifiziert werden.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-bold text-[#0B3A63]">2. Mit Standard-PDF-Werkzeugen prüfen</h3>
              <p className="mb-4 leading-relaxed text-gray-700">
                Zur Prüfung der integrierten digitalen Signatur können PDF-Reader verwendet werden, die digitale Signaturen unterstützen, zum Beispiel Adobe Acrobat, Foxit oder ein gleichwertiges Werkzeug.
              </p>
              <div className="border-l-4 border-[#0B3A63] bg-[#F8FAFC] p-4">
                <p className="text-sm text-gray-700">
                  Diese Prüfung bestätigt die <strong>dokumentarische Authentizität</strong> des Signierenden und die <strong>Integrität</strong> des signierten Inhalts.
                </p>
              </div>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-bold text-[#0B3A63]">3. Manuelle kryptografische Prüfung</h3>
              <p className="mb-4 leading-relaxed text-gray-700">
                Für eine erweiterte Prüfung oder eine Integration in automatisierte Compliance-Workflows kann die Ed25519-Signatur mit dem folgenden öffentlichen Schlüssel geprüft werden.
              </p>
              <ul className="mb-6 list-disc space-y-1 pl-6 text-gray-700">
                <li>Signierte Nutzlast und Signatur aus dem PDF extrahieren.</li>
                <li>Signatur mit dem öffentlichen Schlüssel prüfen.</li>
                <li>Bestätigen, dass die Bescheinigungs-ID mit den signierten Daten übereinstimmt.</li>
              </ul>
              <p className="mb-2 text-sm font-semibold text-gray-800">Öffentlicher Certif-Scope Prüfschlüssel — Ed25519</p>
              <pre className="overflow-x-auto break-all whitespace-pre-wrap rounded-md border border-gray-300 bg-white p-4 font-mono text-sm text-gray-600">
                {CERTIFSCOPE_PUBLIC_KEY_BASE64}
              </pre>
              <p className="mt-2 text-xs text-gray-500">Dieser Schlüssel ist öffentlich, dauerhaft und unverändert.</p>
            </section>
          </div>
        </section>

        <section className="mb-12 rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-[#0B3A63]">Was die Verifizierung bestätigt — und was nicht</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
              <h3 className="mb-2 text-base font-bold text-[#0B3A63]">Die Verifizierung kann bestätigen</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                <li>das Vorhandensein lesbarer Verifizierungselemente;</li>
                <li>die dokumentarische Kohärenz des signierten PDF;</li>
                <li>die Integrität des signierten Dokuments je nach Prüfmodus;</li>
                <li>die deklarierte Ausstelleridentität Certif-Scope.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
              <h3 className="mb-2 text-base font-bold text-[#0B3A63]">Die Verifizierung bestätigt nicht</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                <li>ein vollständiges CO₂-Audit;</li>
                <li>eine regulatorische Treibhausgasbilanz;</li>
                <li>eine offizielle Umweltzertifizierung;</li>
                <li>eine CSRD- oder ESRS-Konformität;</li>
                <li>eine externe Prüfung oder Assurance-Mission.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-[#0B3A63]">Häufige Fragen</h2>
          <div className="space-y-4">
            <FAQ question="Speichert Certif-Scope das PDF der Bescheinigung?" answer="Nein. Certif-Scope folgt einer Datensparsamkeitslogik. Die Verifizierung ist nicht als Abruf eines von Certif-Scope gespeicherten PDFs zu verstehen." />
            <FAQ question="Ersetzt der QR-Code die Prüfung des signierten PDF?" answer="Nein. Der QR-Code erleichtert den Zugriff auf Kontrollelemente. Die technische Prüfung des signierten Original-PDF bleibt für weitergehende Dokumentenkontrollen verfügbar." />
            <FAQ question="Wird eine verifizierte Bescheinigung dadurch zu einem CO₂-Audit?" answer="Nein. Certif-Scope-Bescheinigungen sind indikative CO₂e-Schätzungen auf Ausgabenbasis. Sie sind weder Audit noch Zertifizierung noch regulatorischer CSRD-/ESRS-Bericht." />
          </div>
        </section>

        <div className="border-t border-gray-200 pt-8 text-sm leading-relaxed text-gray-600">
          <p className="mb-3">
            <strong>Wichtige Information:</strong> Certif-Scope führt kein öffentliches Dokumentenregister der ausgestellten Bescheinigungen. Die Verifizierung beruht auf den QR-Code-Elementen und auf dem vom Inhaber bereitgestellten signierten PDF.
          </p>
          <p className="mb-4">
            Anfragen zur Neuausstellung einer verlorenen Bescheinigung müssen an den Support gerichtet werden. Eine Wiederherstellung eines bereits ausgestellten Dokuments aus Certif-Scope-Systemen ist nicht möglich, wenn das PDF nicht vom Nutzer gespeichert wurde.
          </p>
          <p className="text-xs">
            Technische und kryptografische Details sind <Link href="/fr/verify/technical" className="text-[#0B3A63] underline underline-offset-4 hover:no-underline">hier</Link> verfügbar.
          </p>
        </div>
      </div>
    </section>
  );
}

function TrustCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
      <h3 className="mb-2 text-base font-bold text-[#0B3A63]">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-700">{text}</p>
    </div>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-2xl border border-[#E2E8F0] bg-white p-5">
      <summary className="cursor-pointer list-none font-semibold text-[#0B3A63]">{question}</summary>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">{answer}</p>
    </details>
  );
}
