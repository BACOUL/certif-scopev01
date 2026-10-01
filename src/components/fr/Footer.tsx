// PATH: src/components/fr/Footer.tsx
"use client";

import Link from "next/link";
import { FR_HOME_COPY, type HomeContent } from "@/lib/home-content-fr";
import { FR_HOME_NAV, type HomeNavigation } from "@/lib/home-navigation";

export default function FooterFR({
  copy = FR_HOME_COPY,
  navigation = FR_HOME_NAV,
}: {
  copy?: HomeContent;
  navigation?: HomeNavigation;
}) {
  const { routes, labels } = navigation;
  const t = (fr: string, translated: string) =>
    copy.locale === "fr" ? fr : translated;
  const year = new Date().getFullYear();

  const navLinkClass =
    "text-sm leading-relaxed text-[#64748B] transition-colors duration-300 hover:text-[#0B3A63]";
  const footerButtonBase =
    "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300";
  const footerCardClass =
    "rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      role="contentinfo"
      data-section="footer"
      className="border-[#0B3A63]/8 relative overflow-hidden border-t bg-[#F8FAFC] pb-10 pt-20"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#F8FAFC_0%,#ffffff_100%)]" />
      <div className="bg-[#1FB6C1]/6 absolute left-[-8%] top-10 -z-10 h-56 w-56 rounded-full blur-3xl" />
      <div className="bg-[#0B3A63]/6 absolute bottom-0 right-[-6%] -z-10 h-72 w-72 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.15fr_0.95fr_0.95fr_0.95fr]">
          <div className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-7 shadow-[0_18px_40px_rgba(11,58,99,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Certif-Scope
            </p>

            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-[#0B3A63]">
              {t("Attestation CO₂e indicative", copy.heroSecond)}
              <br />
              {t("prête à transmettre", copy.ready)}
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-[#475569]">
              {t(
                "Un document carbone spend-based conçu pour les contextes où un acheteur, un client, une banque ou un assureur demande une réponse lisible, standardisée et vérifiable rapidement.",
                copy.description,
              )}
            </p>

            <div className="border-[#1FB6C1]/16 mt-5 rounded-2xl border bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                {t("Guide principal", labels.guides)}
              </p>
              <Link
                href={routes.pillarBilanCarbonePME}
                className="mt-2 inline-flex text-sm font-semibold text-[#0B3A63] underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                aria-label={labels.guide}
              >
                {t("PME : on vous demande un bilan carbone →", copy.guideLink)}
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={routes.generate}
                className={`${footerButtonBase} bg-[#0B3A63] text-white shadow-[0_12px_30px_rgba(31,182,193,0.20)] hover:-translate-y-0.5 hover:bg-[#082C4B]`}
              >
                {t("Générer →", copy.finalGenerate)}
              </Link>

              <Link
                href={routes.pricing}
                className={`${footerButtonBase} border border-[#0B3A63] bg-white text-[#0B3A63] hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white`}
              >
                {t("Prix", labels.pricing)}
              </Link>

              <Link
                href={routes.verify}
                className={`${footerButtonBase} border-[#0B3A63]/14 border bg-white text-[#0B3A63] hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white`}
              >
                {t("Vérifier", labels.verify)}
              </Link>
            </div>
          </div>

          <nav aria-label={labels.product} className={footerCardClass}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              {t("Produit", labels.product)}
            </p>

            <h3 className="mt-3 text-lg font-extrabold text-[#0B3A63]">
              {t("Accès rapides", labels.quick)}
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link className={navLinkClass} href={routes.product}>
                  {t("Présentation", labels.presentation)}
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href={routes.pricing}>
                  {t("Prix", labels.pricing)}
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href={routes.generate}>
                  {t("Générer une attestation", labels.generate)}
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href={routes.verify}>
                  {t("Vérifier un document", labels.verify)}
                </Link>
              </li>
              <li className="pt-2">
                <Link className={navLinkClass} href={routes.compliance}>
                  {t("Conformité & périmètre", labels.compliance)}
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href={routes.methodology}>
                  {t("Méthodologie (spend-based)", labels.methodology)}
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label={labels.cases} className={footerCardClass}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              {t("Cas concrets", labels.cases)}
            </p>

            <h3 className="mt-3 text-lg font-extrabold text-[#0B3A63]">
              {t("Guides France", labels.guides)}
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  className={navLinkClass}
                  href={routes.pillarBilanCarbonePME}
                >
                  {t("PME : on vous demande un bilan carbone", labels.guide)}
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href={routes.tender}>
                  {t("Appel d’offres : quoi fournir", copy.suited)}
                </Link>
              </li>
              <li className="pt-2">
                <Link className={navLinkClass} href={routes.why}>
                  {t("Pourquoi on vous le demande", copy.contents)}
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href={routes.tenderExample}>
                  {t("Exemple appel d’offres", copy.sample)}
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label={labels.company} className={footerCardClass}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              {t("Entreprise & légal", labels.company)}
            </p>

            <h3 className="mt-3 text-lg font-extrabold text-[#0B3A63]">
              {t("Informations", labels.information)}
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link className={navLinkClass} href={routes.partners}>
                  {t("Partenariats", labels.partners)}
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href={routes.contact}>
                  {t("Contact", labels.contact)}
                </Link>
              </li>
              <li className="pt-2">
                <Link className={navLinkClass} href={routes.legal}>
                  {t("Mentions légales", labels.legal)}
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href={routes.privacy}>
                  {t("Politique de confidentialité", labels.privacy)}
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href={routes.terms}>
                  {t("Conditions d’utilisation", labels.terms)}
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href={routes.cookies}>
                  {t("Politique cookies", labels.cookies)}
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href={routes.data}>
                  {t("Traitement des données", labels.data)}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 rounded-[24px] border border-[#0B3A63]/10 bg-white/90 p-5 shadow-sm">
          <p className="text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            {t(
              "Estimation CO₂e indicative en spend-based (dépenses × facteurs d’émission). Non auditée, non CSRD/ESRS, sans calcul des Scopes 1–2, et ne remplace pas un inventaire complet des émissions de GES. Les résultats dépendent des données fournies par l’utilisateur.",
              copy.faqLimits,
            )}
          </p>
        </div>

        <div className="border-[#0B3A63]/8 mt-8 flex flex-col items-center justify-center gap-5 border-t pt-8 md:flex-row md:justify-between">
          <p className="text-sm text-[#64748B]">
            © {year} Certif-Scope. {labels.rights}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] px-4 py-2.5 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
            aria-label={copy.backTop}
          >
            {t("↑ Revenir en haut", "↑ " + copy.backTop)}
          </button>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
              logo: "https://www.certif-scope.com/logo.png",
            }),
          }}
        />
      </div>
    </footer>
  );
}
