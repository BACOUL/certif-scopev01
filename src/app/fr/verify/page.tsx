// PATH: src/app/fr/verify/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/**
 * Clé publique de vérification Certif-Scope (Ed25519)
 * Cette clé est immuable et utilisée pour vérifier toutes les attestations.
 */
const CERTIFSCOPE_PUBLIC_KEY_BASE64 =
  "MCowBQYDK2VwAyEAbKp2pg4wmzE5Kqo9tEwv7JJjxQyT2cBmwiLLHp4cSac=";

/* ======================================================
   SEO METADATA — PAGE VERIFY (FR)
====================================================== */

export const metadata: Metadata = {
  title: "Vérifier une attestation CO₂e — Certif-Scope",
  description:
    "Vérifiez une attestation CO₂e Certif-Scope par QR code ou à l’aide de la vérification technique avancée du PDF signé.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/verify",
    languages: {
      en: "https://www.certif-scope.com/verify",
      fr: "https://www.certif-scope.com/fr/verify",
    },
  },
  openGraph: {
    title: "Vérifier une attestation CO₂e — Certif-Scope",
    description:
      "Vérification documentaire des attestations CO₂e Certif-Scope par QR code, PDF signé et clé publique de vérification.",
    url: "https://www.certif-scope.com/fr/verify",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
};

/* ======================================================
   TYPES
====================================================== */

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

/* ======================================================
   HELPERS
====================================================== */

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
        error: "Les données de vérification ne sont pas lisibles.",
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
        "Le paramètre de vérification transmis par le QR code est absent, incomplet ou invalide.",
    };
  }
}

function formatValue(value?: string) {
  if (!value || value.trim().length === 0) return "Non renseigné";
  return value;
}

function isExpired(validUntil?: string) {
  if (!validUntil) return false;

  const validUntilDate = new Date(`${validUntil}T23:59:59`);
  if (Number.isNaN(validUntilDate.getTime())) return false;

  return validUntilDate.getTime() < Date.now();
}

/* ======================================================
   PAGE
====================================================== */

export default async function VerifyPageFR({ searchParams }: VerifyPageProps) {
  const params = await resolveSearchParams(searchParams);
  const verificationParam = getSingleParam(params, "v");
  const qrState = parseVerificationParam(verificationParam);

  const attestationExpired =
    qrState.status === "detected" ? isExpired(qrState.data.validUntil) : false;

  return (
    <section
      id="verify"
      data-section="verify"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Vérifier une attestation CO₂e",
            url: "https://www.certif-scope.com/fr/verify",
            description:
              "Page de vérification documentaire des attestations CO₂e Certif-Scope par QR code, PDF signé et clé publique de vérification.",
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
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* HERO */}
      <header className="mb-14 rounded-3xl border border-[#E2E8F0] bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF8FA] px-6 py-10 md:px-10 md:py-14 shadow-sm">
        <p className="uppercase text-xs tracking-[0.22em] text-[#64748B] mb-4">
          Attestation CO₂e — Vérification
        </p>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B3A63] leading-tight mb-6">
              Vérifier une attestation CO₂e Certif-Scope
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Scannez le QR code présent sur une attestation Certif-Scope pour
              ouvrir cette page avec les éléments de vérification du document.
              La vérification avancée du PDF signé reste disponible plus bas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full border border-[#D7E7EC] bg-white px-4 py-2 text-sm font-medium text-[#0B3A63]">
                QR code de vérification
              </span>
              <span className="inline-flex items-center rounded-full border border-[#D7E7EC] bg-white px-4 py-2 text-sm font-medium text-[#0B3A63]">
                PDF signé
              </span>
              <span className="inline-flex items-center rounded-full border border-[#D7E7EC] bg-white px-4 py-2 text-sm font-medium text-[#0B3A63]">
                Aucune conservation du PDF
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-[#DDEAF0] bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#0B3A63] mb-3">
              Principe de vérification
            </p>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E9F8FA] text-xs font-bold text-[#0B3A63]">
                  1
                </span>
                <p>Le QR code ouvre une URL de vérification Certif-Scope.</p>
              </div>

              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E9F8FA] text-xs font-bold text-[#0B3A63]">
                  2
                </span>
                <p>
                  La page lit les éléments techniques transmis par le document.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E9F8FA] text-xs font-bold text-[#0B3A63]">
                  3
                </span>
                <p>
                  La vérification avancée permet aussi de contrôler le PDF signé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto">
        {/* VERIFICATION QR */}
        <section id="verification-qr" className="mb-12 scroll-mt-8">
          <div className="rounded-3xl border border-[#DDEAF0] bg-white p-6 md:p-8 shadow-sm">
            <div className="mb-6">
              <p className="uppercase text-xs tracking-[0.18em] text-[#64748B] mb-3">
                Vérification rapide
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B3A63] mb-3">
                Vérification par QR code
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Chaque attestation Certif-Scope peut contenir un QR code de
                vérification. En le scannant, un tiers ouvre cette page avec les
                éléments nécessaires au contrôle documentaire.
              </p>
            </div>

            {qrState.status === "missing" && (
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white border border-[#DDEAF0] text-[#0B3A63] font-bold">
                    QR
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#0B3A63] mb-2">
                      Aucune donnée de vérification détectée
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                      Scannez le QR code présent sur une attestation
                      Certif-Scope pour lancer la vérification rapide. Si vous
                      ne disposez pas du QR code, utilisez la vérification
                      technique avancée du PDF signé plus bas sur cette page.
                    </p>

                    <p className="mt-4 text-sm text-gray-600">
                      Format attendu pour le QR code :{" "}
                      <code className="rounded bg-white px-2 py-1 text-[#0B3A63]">
                        /fr/verify/?v=...
                      </code>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {qrState.status === "detected" && (
              <div className="rounded-3xl border border-[#BFE8EA] bg-[#F1FBFC] p-5 md:p-6">
                <div className="flex flex-col gap-5 md:flex-row md:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white border border-[#BFE8EA] text-[#0B3A63] text-xl font-extrabold shadow-sm">
                    ✓
                  </div>

                  <div className="w-full">
                    <div className="mb-5">
                      <p className="inline-flex rounded-full border border-[#BFE8EA] bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#0B3A63]">
                        QR code reconnu
                      </p>

                      <h3 className="mt-4 text-2xl font-extrabold text-[#0B3A63] leading-tight">
                        Attestation Certif-Scope détectée
                      </h3>

                      <p className="mt-3 text-gray-700 leading-relaxed">
                        Les éléments transmis par le QR code ont été lus
                        correctement. Cette page permet de contrôler les
                        informations principales de l’attestation et de vérifier
                        que le document correspond bien à un format
                        Certif-Scope.
                      </p>
                    </div>

                    <div
                      className={`mb-5 rounded-2xl border p-4 ${
                        attestationExpired
                          ? "border-[#F5C2C7] bg-white"
                          : "border-[#BFE8EA] bg-white"
                      }`}
                    >
                      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.16em] text-gray-500 mb-1">
                            Statut de lecture
                          </p>

                          <p
                            className={`text-lg font-extrabold ${
                              attestationExpired
                                ? "text-[#8A1F2D]"
                                : "text-[#0B3A63]"
                            }`}
                          >
                            {attestationExpired
                              ? "Attestation expirée"
                              : "Attestation lisible"}
                          </p>
                        </div>

                        <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-3">
                          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                            Valable jusqu’au
                          </p>
                          <p className="text-sm font-bold text-[#0B3A63]">
                            {formatValue(qrState.data.validUntil)}
                          </p>
                        </div>
                      </div>

                      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                        {attestationExpired
                          ? "Le QR code reste lisible, mais la date de validité indiquée dans l’attestation est dépassée. Le document doit être considéré comme expiré pour un usage courant."
                          : "La date de validité indiquée dans le QR code n’est pas dépassée. Le document reste une attestation CO₂e indicative, selon les limites précisées dans le PDF."}
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-[#DDEAF0] bg-white p-4">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                          ID attestation
                        </p>
                        <p className="text-sm font-semibold text-[#0B3A63] break-words">
                          {formatValue(qrState.data.certificateId)}
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#DDEAF0] bg-white p-4">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                          Émetteur
                        </p>
                        <p className="text-sm font-semibold text-[#0B3A63] break-words">
                          {formatValue(qrState.data.issuer || "Certif-Scope")}
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#DDEAF0] bg-white p-4">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                          Date d’émission
                        </p>
                        <p className="text-sm font-semibold text-[#0B3A63] break-words">
                          {formatValue(qrState.data.issuedAt)}
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#DDEAF0] bg-white p-4">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                          Validité
                        </p>
                        <p className="text-sm font-semibold text-[#0B3A63] break-words">
                          {formatValue(qrState.data.validUntil)}
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#DDEAF0] bg-white p-4">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                          Version méthodologique
                        </p>
                        <p className="text-sm font-semibold text-[#0B3A63] break-words">
                          {formatValue(qrState.data.methodVersion)}
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#DDEAF0] bg-white p-4">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                          Version facteurs
                        </p>
                        <p className="text-sm font-semibold text-[#0B3A63] break-words">
                          {formatValue(qrState.data.factorVersion)}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3 md:grid-cols-3">
                      <div className="rounded-xl border border-[#DDEAF0] bg-white p-4">
                        <p className="text-sm font-bold text-[#0B3A63] mb-2">
                          Ce QR confirme
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          La présence d’éléments de vérification lisibles dans
                          un format Certif-Scope.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#DDEAF0] bg-white p-4">
                        <p className="text-sm font-bold text-[#0B3A63] mb-2">
                          Ce QR ne remplace pas
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Le contrôle du PDF original signé en cas de
                          vérification documentaire avancée.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#DDEAF0] bg-white p-4">
                        <p className="text-sm font-bold text-[#0B3A63] mb-2">
                          Données protégées
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Les dépenses détaillées et le PDF complet ne sont pas
                          affichés ni récupérés depuis cette page.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-xl border border-[#DDEAF0] bg-white p-4">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <strong>Important :</strong> cette lecture ne signifie
                        pas qu’un PDF est stocké par Certif-Scope. La
                        vérification repose sur les éléments transmis par le QR
                        code et sur la vérification avancée du document signé si
                        un contrôle plus complet est nécessaire.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {qrState.status === "invalid" && (
              <div className="rounded-2xl border border-[#F5C2C7] bg-[#FFF5F5] p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white border border-[#F5C2C7] text-[#8A1F2D] font-bold">
                    !
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#8A1F2D] mb-2">
                      Vérification impossible
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                      {qrState.error}
                    </p>

                    <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                      Cela peut venir d’un lien incomplet, d’un QR code altéré
                      ou d’un format de vérification non reconnu. Utilisez le
                      PDF original et la vérification technique avancée si
                      nécessaire.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* TRUST BLOCK */}
        <section className="mb-12">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
              <h3 className="text-base font-bold text-[#0B3A63] mb-2">
                Sans base documentaire publique
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Certif-Scope ne publie pas de registre complet des attestations
                émises.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
              <h3 className="text-base font-bold text-[#0B3A63] mb-2">
                Sans stockage du PDF
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                La vérification ne repose pas sur la récupération d’un PDF
                conservé par Certif-Scope.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
              <h3 className="text-base font-bold text-[#0B3A63] mb-2">
                Données limitées
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Les données financières détaillées utilisées pour l’estimation
                ne sont pas affichées sur cette page.
              </p>
            </div>
          </div>
        </section>

        {/* VALIDITÉ */}
        <section className="mb-12">
          <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Validité de l’attestation :</strong> une attestation
              Certif-Scope est valable pendant{" "}
              <strong>12 mois à compter de sa date d’émission</strong>, comme
              indiqué dans le document. Au-delà de cette période, le document
              peut rester techniquement vérifiable mais doit être considéré
              comme expiré pour un usage courant.
            </p>
          </div>
        </section>

        {/* VERIFICATION TECHNIQUE AVANCEE */}
        <section className="mb-12 rounded-3xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm">
          <p className="uppercase text-xs tracking-[0.18em] text-[#64748B] mb-3">
            Méthode conservée
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3A63] mb-4">
            Vérification technique avancée
          </h2>

          <p className="text-gray-700 leading-relaxed mb-5">
            La vérification par QR code simplifie l’accès aux éléments de
            contrôle. Pour une analyse plus complète, la vérification technique
            du PDF signé reste disponible.
          </p>

          <p className="text-sm text-gray-600 mb-8">
            Vous recherchez les détails techniques de vérification ?{" "}
            <Link
              href="/fr/verify/technical"
              className="text-[#0B3A63] underline underline-offset-4 hover:no-underline"
            >
              Documentation technique de vérification
            </Link>
          </p>

          <div className="space-y-10">
            <section>
              <h3 className="text-xl font-bold text-[#0B3A63] mb-3">
                1. Utiliser le PDF original
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Obtenez le fichier PDF original contenant l’attestation. Seul le
                document PDF original peut être vérifié. Les captures d’écran,
                impressions ou fichiers modifiés ne peuvent pas être
                authentifiés avec le même niveau de contrôle.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[#0B3A63] mb-3">
                2. Vérifier avec des outils PDF standards
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Pour vérifier la signature numérique intégrée, vous pouvez
                utiliser un lecteur PDF prenant en charge les signatures
                numériques, comme Adobe Acrobat, Foxit ou un outil équivalent.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Ouvrez le PDF signé, localisez le panneau de signature et
                sélectionnez « Valider la signature » afin de confirmer que le
                document n’a pas été modifié et que la signature est valide.
              </p>

              <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4">
                <p className="text-sm text-gray-700">
                  Cette vérification confirme l’{" "}
                  <strong>authenticité documentaire</strong> du signataire et
                  l’<strong>intégrité</strong> du contenu signé.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[#0B3A63] mb-3">
                3. Vérification cryptographique manuelle
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Pour une vérification avancée ou une intégration dans des
                workflows de conformité automatisés, la signature Ed25519 peut
                être vérifiée directement à l’aide de la clé publique ci-dessous.
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
                <li>Extraire la charge signée et la signature du PDF.</li>
                <li>Vérifier la signature avec la clé publique ci-dessous.</li>
                <li>
                  Vérifier que l’identifiant d’attestation correspond aux
                  données signées.
                </li>
              </ul>

              <p className="text-sm font-semibold text-gray-800 mb-2">
                Clé publique de vérification Certif-Scope — Ed25519
              </p>

              <pre className="text-sm bg-white border border-gray-300 rounded-md p-4 overflow-x-auto break-all whitespace-pre-wrap text-gray-600 font-mono">
                {CERTIFSCOPE_PUBLIC_KEY_BASE64}
              </pre>

              <p className="mt-2 text-xs text-gray-500">
                Cette clé est publique, permanente et ne change pas.
              </p>
            </section>
          </div>
        </section>

        {/* LIMITES JURIDIQUES */}
        <section className="mb-12 rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            Ce que la vérification confirme — et ne confirme pas
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5">
              <h3 className="text-base font-bold text-[#0B3A63] mb-2">
                La vérification peut confirmer
              </h3>

              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                <li>la présence d’éléments de vérification lisibles ;</li>
                <li>la cohérence documentaire du PDF signé ;</li>
                <li>l’intégrité du document signé, selon le mode utilisé ;</li>
                <li>l’identité déclarée de l’émetteur Certif-Scope.</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5">
              <h3 className="text-base font-bold text-[#0B3A63] mb-2">
                La vérification ne confirme pas
              </h3>

              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                <li>un audit carbone complet ;</li>
                <li>un bilan GES réglementaire ;</li>
                <li>une certification environnementale officielle ;</li>
                <li>une conformité CSRD ou ESRS ;</li>
                <li>une mission d’assurance ou de vérification tierce.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-6">
            Questions fréquentes
          </h2>

          <div className="space-y-4">
            <details className="group rounded-2xl border border-[#E2E8F0] bg-white p-5">
              <summary className="cursor-pointer list-none font-semibold text-[#0B3A63]">
                Certif-Scope conserve-t-il le PDF de l’attestation ?
              </summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                Non. Le modèle Certif-Scope repose sur une logique de
                minimisation des données. La vérification ne doit pas être
                comprise comme une consultation d’un PDF stocké par
                Certif-Scope.
              </p>
            </details>

            <details className="group rounded-2xl border border-[#E2E8F0] bg-white p-5">
              <summary className="cursor-pointer list-none font-semibold text-[#0B3A63]">
                Le QR code remplace-t-il la vérification du PDF signé ?
              </summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                Non. Le QR code facilite l’accès aux éléments de contrôle. La
                vérification technique avancée du PDF signé reste disponible
                pour les cas où un contrôle documentaire plus poussé est
                nécessaire.
              </p>
            </details>

            <details className="group rounded-2xl border border-[#E2E8F0] bg-white p-5">
              <summary className="cursor-pointer list-none font-semibold text-[#0B3A63]">
                Une attestation vérifiée devient-elle un audit carbone ?
              </summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                Non. Les attestations Certif-Scope sont des estimations CO₂e
                indicatives, basées sur les dépenses. Elles ne constituent ni un
                audit, ni une certification, ni un rapport réglementaire CSRD ou
                ESRS.
              </p>
            </details>
          </div>
        </section>

        {/* NOTE FINALE */}
        <div className="text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-8">
          <p className="mb-3">
            <strong>Information importante :</strong> Certif-Scope ne maintient
            pas de registre documentaire public des attestations émises. La
            vérification repose sur les éléments transmis par le QR code et sur
            le PDF signé fourni par le détenteur de l’attestation.
          </p>

          <p className="mb-4">
            Les demandes de réémission d’une attestation perdue doivent être
            adressées au support. La récupération d’un document déjà émis depuis
            les systèmes Certif-Scope n’est pas possible lorsque le PDF n’a pas
            été conservé par l’utilisateur.
          </p>

          <p className="text-xs">
            Les détails techniques et cryptographiques sont disponibles{" "}
            <Link
              href="/fr/verify/technical"
              className="text-[#0B3A63] underline underline-offset-4 hover:no-underline"
            >
              ici
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
      }
