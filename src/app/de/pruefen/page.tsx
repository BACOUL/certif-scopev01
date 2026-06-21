import type { Metadata } from "next";
import Link from "next/link";

/**
 * Public Certif-Scope verification key (Ed25519).
 * This key is public and mirrors the French verification page.
 */
const CERTIFSCOPE_PUBLIC_KEY_BASE64 =
  "MCowBQYDK2VwAyEAbKp2pg4wmzE5Kqo9tEwv7JJjxQyT2cBmwiLLHp4cSac=";

export const metadata: Metadata = {
  title: "CO₂e-Bescheinigung prüfen | Certif-Scope Deutschland",
  description:
    "Prüfen Sie eine Certif-Scope CO₂e-Bescheinigung per QR-Code oder über die technische Prüfung der signierten PDF-Elemente.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/pruefen/",
    languages: {
      de: "https://www.certif-scope.com/de/pruefen/",
    },
  },
  openGraph: {
    title: "CO₂e-Bescheinigung prüfen | Certif-Scope Deutschland",
    description:
      "Dokumentarische Prüfung von Certif-Scope CO₂e-Bescheinigungen per QR-Code, signiertem PDF und öffentlichem Prüfschlüssel.",
    url: "https://www.certif-scope.com/de/pruefen/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
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
  | {
      status: "missing";
      rawValue: null;
      data: null;
      error: null;
    }
  | {
      status: "detected";
      rawValue: string;
      data: ParsedVerificationData;
      error: null;
    }
  | {
      status: "invalid";
      rawValue: string;
      data: null;
      error: string;
    };

async function resolveSearchParams(searchParams: SearchParamsInput) {
  if (!searchParams) return {};
  return await searchParams;
}

function getSingleParam(
  params: Record<string, string | string[] | undefined>,
  key: string
): string | undefined {
  const value = params[key];

  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
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
    return {
      status: "missing",
      rawValue: null,
      data: null,
      error: null,
    };
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
        error: "Die Prüfdaten sind nicht lesbar.",
      };
    }

    return {
      status: "detected",
      rawValue,
      data: parsed,
      error: null,
    };
  } catch {
    return {
      status: "invalid",
      rawValue,
      data: null,
      error:
        "Der vom QR-Code übermittelte Prüfparameter fehlt, ist unvollständig oder hat ein nicht erkanntes Format.",
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

  return (
    <section
      id="pruefen"
      data-section="verify"
      className={`max-w-7xl mx-auto px-6 pb-24 ${
        hasQrVerification ? "pt-6 md:pt-8" : "pt-12"
      }`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "CO₂e-Bescheinigung prüfen",
            url: "https://www.certif-scope.com/de/pruefen/",
            description:
              "Dokumentarische Prüfung von Certif-Scope CO₂e-Bescheinigungen per QR-Code, signiertem PDF und öffentlichem Prüfschlüssel.",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
            inLanguage: "de-DE",
          }),
        }}
      />

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
        <header className="mb-14 rounded-3xl border border-[#E2E8F0] bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF8FA] px-6 py-10 md:px-10 md:py-14 shadow-sm">
          <p className="uppercase text-xs tracking-[0.22em] text-[#64748B] mb-4">
            CO₂e-Bescheinigung — Prüfung
          </p>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B3A63] leading-tight mb-6">
                Certif-Scope CO₂e-Bescheinigung prüfen
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                Scannen Sie den QR-Code auf einer Certif-Scope-Bescheinigung,
                um diese Seite mit den Prüfelementen des Dokuments zu öffnen.
                Die technische Prüfung der signierten PDF-Elemente bleibt
                weiter unten verfügbar. Der QR-Code ermöglicht einen schnellen
                dokumentarischen Kontrollschritt. Er ersetzt allein nicht die
                technische Prüfung des signierten PDF, wenn diese erforderlich
                ist.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full border border-[#D7E7EC] bg-white px-4 py-2 text-sm font-medium text-[#0B3A63]">
                  QR-Code zur Prüfung
                </span>
                <span className="inline-flex items-center rounded-full border border-[#D7E7EC] bg-white px-4 py-2 text-sm font-medium text-[#0B3A63]">
                  Signiertes PDF
                </span>
                <span className="inline-flex items-center rounded-full border border-[#D7E7EC] bg-white px-4 py-2 text-sm font-medium text-[#0B3A63]">
                  Keine Speicherung des PDF
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-[#DDEAF0] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#0B3A63] mb-3">
                Prinzip der Prüfung
              </p>

              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E9F8FA] text-xs font-bold text-[#0B3A63]">
                    1
                  </span>
                  <p>Der QR-Code öffnet eine Certif-Scope-Prüf-URL.</p>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E9F8FA] text-xs font-bold text-[#0B3A63]">
                    2
                  </span>
                  <p>
                    Die Seite liest die vom Dokument übermittelten technischen
                    Elemente.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E9F8FA] text-xs font-bold text-[#0B3A63]">
                    3
                  </span>
                  <p>
                    Die technische Prüfung kann zusätzlich das signierte PDF
                    kontrollieren.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}

      <div className="max-w-4xl mx-auto">
        <section id="verification-qr" className="mb-12 scroll-mt-4 md:scroll-mt-6">
          <div
            className={
              hasQrVerification
                ? "rounded-3xl border-2 border-[#0B3A63] bg-white shadow-xl overflow-hidden"
                : "rounded-3xl border border-[#DDEAF0] bg-white p-6 md:p-8 shadow-sm"
            }
          >
            {!hasQrVerification && (
              <div className="mb-6">
                <p className="uppercase text-xs tracking-[0.18em] text-[#64748B] mb-3">
                  Schnelle Dokumentenkontrolle
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-[#0B3A63] mb-3">
                  Prüfung per QR-Code
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Jede Certif-Scope-Bescheinigung kann einen QR-Code zur
                  Prüfung enthalten. Beim Scannen öffnet ein Dritter diese Seite
                  mit den Elementen für den schnellen dokumentarischen
                  Kontrollschritt und die Lesbarkeit des Prüf-Payloads.
                </p>
              </div>
            )}

            {qrState.status === "missing" && (
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white border border-[#DDEAF0] text-[#0B3A63] font-bold">
                    QR
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#0B3A63] mb-2">
                      Keine Prüfdaten erkannt
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                      Scannen Sie den QR-Code auf einer Certif-Scope-
                      Bescheinigung, um die schnelle Prüfung zu starten. Wenn
                      Sie keinen QR-Code haben, nutzen Sie weiter unten die
                      technische Prüfung des signierten PDF.
                    </p>

                    <p className="mt-4 text-sm text-gray-600">
                      Erwartetes Format für den QR-Code:{" "}
                      <code className="rounded bg-white px-2 py-1 text-[#0B3A63]">
                        /de/pruefen/?v=...
                      </code>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {qrState.status === "detected" && (
              <>
                <div className="bg-[#0B3A63] px-5 py-5 md:px-7 md:py-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#BFE8EA] mb-2">
                    Dokumentarische Certif-Scope-Prüfung
                  </p>

                  <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    Bescheinigung erkannt und lesbar
                  </h1>

                  <p className="mt-3 text-sm md:text-base text-[#EAF6F8] leading-relaxed">
                    Der QR-Code entspricht einer Certif-Scope-Bescheinigung mit
                    auswertbaren Prüfelementen.
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
                        <p className="text-xs uppercase tracking-[0.16em] text-gray-500 mb-1">
                          Status
                        </p>

                        <p
                          className={`text-2xl font-extrabold ${
                            attestationExpired
                              ? "text-[#8A1F2D]"
                              : "text-[#0B3A63]"
                          }`}
                        >
                          {attestationExpired
                            ? "Bescheinigung abgelaufen"
                            : "Bescheinigung innerhalb des Gültigkeitszeitraums"}
                        </p>
                      </div>

                      <div className="rounded-xl bg-white border border-[#DDEAF0] px-4 py-3">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                          Gültig bis
                        </p>
                        <p className="text-base font-bold text-[#0B3A63]">
                          {formatValue(qrState.data.validUntil)}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                      {attestationExpired
                        ? "Das Dokument bleibt technisch lesbar, aber das angegebene Gültigkeitsdatum ist überschritten. Für die übliche Verwendung sollte es als abgelaufen betrachtet werden."
                        : "Das in der Bescheinigung angegebene Gültigkeitsdatum ist nicht überschritten. Das Dokument bleibt eine indikative CO₂e-Bescheinigung innerhalb der im PDF genannten Grenzen."}
                    </p>
                  </div>

                  <div className="mb-6 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-gray-500 mb-2">
                      Ergebnis der Prüfung
                    </p>

                    <p className="text-base font-semibold text-[#0B3A63] leading-relaxed">
                      Die vom QR-Code übermittelten Elemente sind kohärent,
                      lesbar und einer im Certif-Scope-Format ausgestellten
                      Bescheinigung zugeordnet.
                    </p>

                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      Diese Prüfung bestätigt das Vorhandensein
                      dokumentarischer Kontrollelemente. Sie macht aus der
                      Bescheinigung keine vollständige fachliche CO₂e-Erhebung,
                      kein vollständiges Treibhausgasinventar, keine
                      umweltbezogene Bescheinigung einer Drittstelle und keine
                      CSRD-/ESRS-Berichterstattung. Wenn erforderlich, sollte
                      sie durch die technische Prüfung des signierten PDF
                      ergänzt werden.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-[#DDEAF0] bg-white p-4">
                      <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                        Bescheinigungs-ID
                      </p>
                      <p className="text-base font-extrabold text-[#0B3A63] break-words">
                        {formatValue(qrState.data.certificateId)}
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#DDEAF0] bg-white p-4">
                      <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                        Aussteller
                      </p>
                      <p className="text-base font-bold text-[#0B3A63] break-words">
                        {formatValue(qrState.data.issuer || "Certif-Scope")}
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#DDEAF0] bg-white p-4">
                      <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                        Ausstellungsdatum
                      </p>
                      <p className="text-base font-bold text-[#0B3A63] break-words">
                        {formatValue(qrState.data.issuedAt)}
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#DDEAF0] bg-white p-4">
                      <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                        Gültigkeit
                      </p>
                      <p className="text-base font-bold text-[#0B3A63] break-words">
                        {formatValue(qrState.data.validUntil)}
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#DDEAF0] bg-white p-4">
                      <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                        Methodik
                      </p>
                      <p className="text-sm font-semibold text-[#0B3A63] break-words">
                        {formatValue(qrState.data.methodVersion)}
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#DDEAF0] bg-white p-4">
                      <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                        Faktorversion
                      </p>
                      <p className="text-sm font-semibold text-[#0B3A63] break-words">
                        {formatValue(qrState.data.factorVersion)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    <div className="rounded-xl border border-[#DDEAF0] bg-[#F8FAFC] p-4">
                      <p className="text-sm font-bold text-[#0B3A63] mb-2">
                        QR-Prüfung
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Der QR-Code enthält lesbare Kontrollinformationen.
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#DDEAF0] bg-[#F8FAFC] p-4">
                      <p className="text-sm font-bold text-[#0B3A63] mb-2">
                        Original-PDF
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Die technische Prüfung sollte mit dem originalen
                        signierten PDF durchgeführt werden.
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#DDEAF0] bg-[#F8FAFC] p-4">
                      <p className="text-sm font-bold text-[#0B3A63] mb-2">
                        Private Daten
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Detaillierte Ausgaben werden auf dieser Seite nicht
                        angezeigt.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#E2E8F0] bg-white p-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong>Wichtig:</strong> Certif-Scope speichert das
                      vollständige PDF der Bescheinigung nicht dauerhaft. Die
                      Prüfung stützt sich auf die vom QR-Code übermittelten
                      Elemente und, falls erforderlich, auf die Kontrolle des
                      originalen PDF-Dokuments, das vom Inhaber bereitgestellt
                      wird.
                    </p>
                  </div>
                </div>
              </>
            )}

            {qrState.status === "invalid" && (
              <div className="rounded-2xl border border-[#F5C2C7] bg-[#FFF5F5] p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white border border-[#F5C2C7] text-[#8A1F2D] font-bold">
                    !
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#8A1F2D] mb-2">
                      Prüfung nicht möglich
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                      {qrState.error}
                    </p>

                    <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                      Dies kann an einem unvollständigen Link, einem
                      beschädigten QR-Code oder einem nicht erkannten
                      Prüf-Format liegen. Nutzen Sie bei Bedarf das originale
                      PDF und die technische Prüfung der signierten
                      PDF-Elemente.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mb-12">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
              <h3 className="text-base font-bold text-[#0B3A63] mb-2">
                Ohne öffentliches Dokumentenregister
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Certif-Scope veröffentlicht kein vollständiges Register der
                ausgestellten Bescheinigungen.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
              <h3 className="text-base font-bold text-[#0B3A63] mb-2">
                Ohne Speicherung des PDF
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Die Prüfung basiert nicht darauf, dass ein von Certif-Scope
                gespeichertes PDF abgerufen wird.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
              <h3 className="text-base font-bold text-[#0B3A63] mb-2">
                Begrenzte Daten
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Die für die Schätzung verwendeten detaillierten Finanzdaten
                werden auf dieser Seite nicht angezeigt.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Gültigkeit der Bescheinigung:</strong> Eine
              Certif-Scope-Bescheinigung ist, wie im Dokument angegeben,{" "}
              <strong>12 Monate ab Ausstellungsdatum</strong> gültig. Nach
              diesem Zeitraum kann das Dokument technisch weiterhin prüfbar
              sein, sollte für die übliche Verwendung aber als abgelaufen
              betrachtet werden.
            </p>
          </div>
        </section>

        <section className="mb-12 rounded-3xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm">
          <p className="uppercase text-xs tracking-[0.18em] text-[#64748B] mb-3">
            Methode beibehalten
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3A63] mb-4">
            Technische Prüfung der signierten PDF-Elemente
          </h2>

          <p className="text-gray-700 leading-relaxed mb-5">
            Die QR-Prüfung vereinfacht den Zugriff auf Kontrollinformationen.
            Für eine weitergehende technische Analyse bleibt die Prüfung des
            signierten PDF verfügbar.
          </p>

          <p className="text-sm text-gray-600 mb-8">
            Sie suchen die technischen Details?{" "}
            <Link
              href="/de/technische-pruefung/"
              className="text-[#0B3A63] underline underline-offset-4 hover:no-underline"
            >
              Technische Prüfdokumentation
            </Link>
          </p>

          <div className="space-y-10">
            <section>
              <h3 className="text-xl font-bold text-[#0B3A63] mb-3">
                1. Das originale PDF verwenden
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Verwenden Sie die originale PDF-Datei mit der Bescheinigung.
                Nur das originale PDF-Dokument kann kontrolliert werden.
                Screenshots, Ausdrucke oder veränderte Dateien können nicht mit
                demselben Kontrollniveau eingeordnet werden.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[#0B3A63] mb-3">
                2. Mit Standard-PDF-Werkzeugen prüfen
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Zur Kontrolle der integrierten digitalen Signatur können Sie
                einen PDF-Reader verwenden, der digitale Signaturen unterstützt,
                etwa Adobe Acrobat, Foxit oder ein vergleichbares Werkzeug.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Öffnen Sie das signierte PDF, rufen Sie den Signaturbereich auf
                und wählen Sie die Signaturvalidierung, um zu kontrollieren,
                dass das Dokument nicht verändert wurde und die Signatur
                technisch gültig ist.
              </p>

              <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4">
                <p className="text-sm text-gray-700">
                  Diese Prüfung betrifft die{" "}
                  <strong>dokumentarische Echtheit</strong> des Signierenden
                  und die <strong>Integrität</strong> des signierten Inhalts.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[#0B3A63] mb-3">
                3. Manuelle kryptografische Prüfung
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Für eine weitergehende technische Kontrolle oder für eine
                Einbindung in automatisierte interne Workflows kann die
                Ed25519-Signatur direkt mit dem untenstehenden öffentlichen
                Schlüssel kontrolliert werden.
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
                <li>Signierten Payload und Signatur aus dem PDF auslesen.</li>
                <li>Die Signatur mit dem öffentlichen Schlüssel prüfen.</li>
                <li>
                  Kontrollieren, dass die Bescheinigungs-ID zu den signierten
                  Daten passt.
                </li>
              </ul>

              <p className="text-sm font-semibold text-gray-800 mb-2">
                Öffentlicher Certif-Scope-Prüfschlüssel — Ed25519
              </p>

              <pre className="text-sm bg-white border border-gray-300 rounded-md p-4 overflow-x-auto break-all whitespace-pre-wrap text-gray-600 font-mono">
                {CERTIFSCOPE_PUBLIC_KEY_BASE64}
              </pre>

              <p className="mt-2 text-xs text-gray-500">
                Dieser Schlüssel ist öffentlich, dauerhaft und unverändert.
              </p>
            </section>
          </div>
        </section>

        <section className="mb-12 rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            Was die Prüfung bestätigt — und was nicht
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5">
              <h3 className="text-base font-bold text-[#0B3A63] mb-2">
                Die Prüfung kann bestätigen
              </h3>

              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                <li>das Vorhandensein lesbarer Prüfelemente;</li>
                <li>die dokumentarische Kohärenz des signierten PDF;</li>
                <li>die Integrität des signierten Dokuments je nach Verfahren;</li>
                <li>die angegebene Identität des Ausstellers Certif-Scope.</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5">
              <h3 className="text-base font-bold text-[#0B3A63] mb-2">
                Die Prüfung bestätigt nicht
              </h3>

              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                <li>eine vollständige fachliche CO₂e-Erhebung;</li>
                <li>ein regulatorisches Treibhausgasinventar;</li>
                <li>eine umweltbezogene Bescheinigung einer Drittstelle;</li>
                <li>eine CSRD- oder ESRS-Berichterstattung;</li>
                <li>eine externe Assurance- oder Drittprüfungsmission.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-6">
            Häufige Fragen
          </h2>

          <div className="space-y-4">
            <details className="group rounded-2xl border border-[#E2E8F0] bg-white p-5">
              <summary className="cursor-pointer list-none font-semibold text-[#0B3A63]">
                Speichert Certif-Scope das PDF der Bescheinigung?
              </summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                Nein. Das Certif-Scope-Modell folgt dem Prinzip der
                Datensparsamkeit. Die Prüfung ist nicht als Abruf eines bei
                Certif-Scope gespeicherten PDF zu verstehen.
              </p>
            </details>

            <details className="group rounded-2xl border border-[#E2E8F0] bg-white p-5">
              <summary className="cursor-pointer list-none font-semibold text-[#0B3A63]">
                Ersetzt der QR-Code die Prüfung des signierten PDF?
              </summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                Nein. Der QR-Code erleichtert den Zugriff auf
                Kontrollinformationen. Die technische Prüfung der signierten
                PDF-Elemente bleibt für Fälle verfügbar, in denen eine
                weitergehende Dokumentenkontrolle erforderlich ist.
              </p>
            </details>

            <details className="group rounded-2xl border border-[#E2E8F0] bg-white p-5">
              <summary className="cursor-pointer list-none font-semibold text-[#0B3A63]">
                Wird eine kontrollierte Bescheinigung zu einer vollständigen CO₂e-Erhebung?
              </summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                Nein. Certif-Scope-Bescheinigungen sind indikative
                CO₂e-Schätzungen auf Ausgabenbasis. Sie sind keine
                umweltbezogene Bescheinigung einer Drittstelle und keine
                regulatorische CSRD- oder ESRS-Berichterstattung.
              </p>
            </details>
          </div>
        </section>

        <div className="text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-8">
          <p className="mb-3">
            <strong>Wichtiger Hinweis:</strong> Certif-Scope führt kein
            öffentliches Dokumentenregister der ausgestellten Bescheinigungen.
            Die Prüfung stützt sich auf die vom QR-Code übermittelten Elemente
            und auf das signierte PDF, das vom Inhaber der Bescheinigung
            bereitgestellt wird.
          </p>

          <p className="mb-4">
            Anfragen zur erneuten Ausstellung einer verlorenen Bescheinigung
            sind an den Support zu richten. Eine Wiederherstellung eines bereits
            ausgestellten Dokuments aus den Certif-Scope-Systemen ist nicht
            möglich, wenn das PDF nicht vom Nutzer gespeichert wurde.
          </p>

          <p className="text-xs">
            Die technischen und kryptografischen Details sind{" "}
            <Link
              href="/de/technische-pruefung/"
              className="text-[#0B3A63] underline underline-offset-4 hover:no-underline"
            >
              hier
            </Link>{" "}
            verfügbar.
          </p>
        </div>
      </div>
    </section>
  );
}
