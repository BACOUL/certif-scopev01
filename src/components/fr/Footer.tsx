// PATH: src/components/fr/Footer.tsx
"use client";

import Link from "next/link";

export default function FooterFR() {
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
      className="relative overflow-hidden border-t border-[#0B3A63]/8 bg-[#F8FAFC] pt-20 pb-10"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#F8FAFC_0%,#ffffff_100%)]" />
      <div className="absolute left-[-8%] top-10 -z-10 h-56 w-56 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] bottom-0 -z-10 h-72 w-72 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.15fr_0.95fr_0.95fr_0.95fr]">
          <div className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-7 shadow-[0_18px_40px_rgba(11,58,99,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Certif-Scope
            </p>

            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-[#0B3A63]">
              Attestation CO₂e indicative
              <br />
              prête à transmettre
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-[#475569]">
              Un document carbone spend-based conçu pour les contextes où un
              acheteur, un client, une banque ou un assureur demande une réponse
              lisible, standardisée et vérifiable rapidement.
            </p>

            <div className="mt-5 rounded-2xl border border-[#1FB6C1]/16 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Guide principal
              </p>
              <Link
                href="/fr/bilan-carbone-pme/"
                className="mt-2 inline-flex text-sm font-semibold text-[#0B3A63] underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                aria-label="PME : on vous demande un bilan carbone"
              >
                PME : on vous demande un bilan carbone →
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/fr/generate/"
                className={`${footerButtonBase} bg-[#1FB6C1] text-white shadow-[0_12px_30px_rgba(31,182,193,0.20)] hover:-translate-y-0.5 hover:bg-[#19AAB4]`}
              >
                Générer →
              </Link>

              <Link
                href="/fr/pricing/"
                className={`${footerButtonBase} border border-[#0B3A63] bg-white text-[#0B3A63] hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white`}
              >
                Prix
              </Link>

              <Link
                href="/fr/verify/"
                className={`${footerButtonBase} border border-[#0B3A63]/14 bg-white text-[#0B3A63] hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white`}
              >
                Vérifier
              </Link>
            </div>
          </div>

          <nav aria-label="Navigation produit" className={footerCardClass}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Produit
            </p>

            <h3 className="mt-3 text-lg font-extrabold text-[#0B3A63]">
              Accès rapides
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link className={navLinkClass} href="/fr/product/">
                  Présentation
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/fr/pricing/">
                  Prix
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/fr/generate/">
                  Générer une attestation
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/fr/verify/">
                  Vérifier un document
                </Link>
              </li>
              <li className="pt-2">
                <Link className={navLinkClass} href="/fr/product/compliance/">
                  Conformité &amp; périmètre
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/fr/product/methodology/">
                  Méthodologie (spend-based)
                </Link>
              </li>
            </ul>
          </nav>

          <nav
            aria-label="Cas concrets bilan carbone et exigences CO₂e"
            className={footerCardClass}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Cas concrets
            </p>

            <h3 className="mt-3 text-lg font-extrabold text-[#0B3A63]">
              Guides France
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link className={navLinkClass} href="/fr/bilan-carbone-pme/">
                  PME : on vous demande un bilan carbone
                </Link>
              </li>
              <li>
                <Link
                  className={navLinkClass}
                  href="/fr/bilan-carbone-appel-offres/"
                >
                  Appel d’offres : quoi fournir
                </Link>
              </li>
              <li className="pt-2">
                <Link className={navLinkClass} href="/fr/why-companies-ask/">
                  Pourquoi on vous le demande
                </Link>
              </li>
              <li>
                <Link
                  className={navLinkClass}
                  href="/fr/why-companies-ask/attestation-carbone-appel-offres/"
                >
                  Exemple appel d’offres
                </Link>
              </li>
            </ul>
          </nav>

          <nav
            aria-label="Navigation entreprise et légal"
            className={footerCardClass}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Entreprise &amp; légal
            </p>

            <h3 className="mt-3 text-lg font-extrabold text-[#0B3A63]">
              Informations
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link className={navLinkClass} href="/fr/partners/">
                  Partenariats
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/fr/contact/">
                  Contact
                </Link>
              </li>
              <li className="pt-2">
                <Link className={navLinkClass} href="/fr/legal/">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/fr/privacy/">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/fr/terms/">
                  Conditions d’utilisation
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/fr/cookies/">
                  Politique cookies
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/fr/data-processing/">
                  Traitement des données
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 rounded-[24px] border border-[#0B3A63]/10 bg-white/90 p-5 shadow-sm">
          <p className="text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Estimation CO₂e indicative en spend-based (dépenses × facteurs
            d’émission). Non auditée, non CSRD/ESRS, sans calcul des Scopes 1–2,
            et ne remplace pas un inventaire complet des émissions de GES. Les
            résultats dépendent des données fournies par l’utilisateur.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-5 border-t border-[#0B3A63]/8 pt-8 md:flex-row md:justify-between">
          <p className="text-sm text-[#64748B]">
            © {year} Certif-Scope. Tous droits réservés.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] px-4 py-2.5 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
            aria-label="Revenir en haut de page"
          >
            ↑ Revenir en haut
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
