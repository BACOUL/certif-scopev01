// PATH: src/components/fr/OfficialReferences.tsx

"use client";

import Link from "next/link";

type OfficialReference = {
  label: string;
  title: string;
  description: string;
  source: string;
  href: string;
  secondarySource?: string;
  secondaryHref?: string;
};

type OfficialText = {
  category: string;
  title: string;
  description: string;
  href: string;
};

const officialTexts: OfficialText[] = [
  {
    category: "Standard PME volontaire",
    title: "EFRAG — Voluntary Sustainability Reporting Standard for non-listed SMEs",
    description:
      "Standard volontaire conçu pour aider les PME non cotées à structurer des informations de durabilité proportionnées.",
    href: "https://www.efrag.org/en/smes-and-sustainability-reporting",
  },
  {
    category: "Commission européenne",
    title: "Voluntary sustainability reporting standard for SMEs",
    description:
      "Communication officielle sur le standard volontaire PME et la réduction de la charge liée aux demandes de durabilité.",
    href: "https://finance.ec.europa.eu/publications/commission-presents-voluntary-sustainability-reporting-standard-ease-burden-smes_en",
  },
  {
    category: "Méthode carbone",
    title: "GHG Protocol — Scope 3 Calculation Guidance",
    description:
      "Guide méthodologique international pour le calcul des émissions indirectes Scope 3.",
    href: "https://ghgprotocol.org/scope-3-calculation-guidance-2",
  },
  {
    category: "Méthode spend-based",
    title: "GHG Protocol — Category 1: Purchased Goods and Services",
    description:
      "Chapitre présentant les méthodes de calcul applicables aux biens et services achetés, dont l’approche spend-based.",
    href: "https://ghgprotocol.org/sites/default/files/2022-12/Chapter1.pdf",
  },
  {
    category: "Contexte européen",
    title: "Directive (UE) 2022/2464 — Corporate Sustainability Reporting Directive",
    description:
      "Directive européenne renforçant le reporting de durabilité des entreprises concernées.",
    href: "https://eur-lex.europa.eu/eli/dir/2022/2464/oj",
  },
  {
    category: "Normes européennes",
    title: "Règlement délégué (UE) 2023/2772 — ESRS",
    description:
      "Règlement délégué établissant les European Sustainability Reporting Standards.",
    href: "https://eur-lex.europa.eu/eli/reg_del/2023/2772/oj",
  },
];

const officialReferences: OfficialReference[] = [
  {
    label: "PME < 250 salariés",
    title: "VSME — Standard volontaire PME",
    description:
      "Référence européenne volontaire destinée aux micro, petites et moyennes entreprises non cotées, pour structurer des informations de durabilité plus simples et proportionnées.",
    source: "EFRAG — VSME",
    href: "https://www.efrag.org/en/smes-and-sustainability-reporting",
  },
  {
    label: "Demandes clients & banques",
    title: "Commission européenne — demandes de durabilité",
    description:
      "La Commission européenne reconnaît que les PME peuvent recevoir des demandes d’informations de durabilité de grandes entreprises ou d’institutions financières, et soutient un standard volontaire pour réduire cette charge.",
    source: "European Commission — VSME",
    href: "https://finance.ec.europa.eu/publications/commission-presents-voluntary-sustainability-reporting-standard-ease-burden-smes_en",
  },
  {
    label: "Méthode carbone",
    title: "GHG Protocol — méthode spend-based",
    description:
      "Le GHG Protocol Scope 3 Calculation Guidance présente l’approche spend-based parmi les méthodes possibles pour estimer certaines émissions indirectes à partir de données économiques.",
    source: "GHG Protocol — Scope 3 Guidance",
    href: "https://ghgprotocol.org/scope-3-calculation-guidance-2",
    secondarySource: "Purchased Goods and Services — Chapter 1",
    secondaryHref:
      "https://ghgprotocol.org/sites/default/files/2022-12/Chapter1.pdf",
  },
];

export default function OfficialReferencesFR() {
  return (
    <section
      id="references-officielles"
      data-section="official-references"
      className="relative overflow-hidden bg-white py-20 md:py-28"
      aria-labelledby="official-references-title"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_58%,#ffffff_100%)]" />
      <div className="absolute left-[-8%] top-20 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] bottom-16 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="or-reveal text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
            Cadre officiel et méthode
          </p>

          <h2
            id="official-references-title"
            className="or-reveal mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] [animation-delay:120ms] md:text-4xl"
          >
            Une méthode pensée pour les PME de moins de 250 salariés
          </h2>

          <p className="or-reveal mt-6 text-base leading-relaxed text-[#475569] [animation-delay:220ms] md:text-lg">
            Certif-Scope s’appuie sur des références officielles qui
            reconnaissent deux réalités : les PME non cotées peuvent recevoir
            des demandes d’informations ESG ou carbone, et ces réponses doivent
            rester proportionnées à leurs moyens.
          </p>

          <p className="or-reveal mt-4 text-sm leading-relaxed text-[#64748B] [animation-delay:300ms] md:text-base">
            Le standard volontaire VSME, présenté par l’EFRAG et soutenu par la
            Commission européenne, va dans ce sens : faciliter la production
            d’informations de durabilité adaptées aux PME. Pour la partie
            carbone, Certif-Scope utilise une approche spend-based inspirée du
            GHG Protocol Scope 3.
          </p>

          <div className="or-reveal mt-8 flex flex-wrap justify-center gap-3 [animation-delay:380ms]">
            <a
              href="#sources-officielles"
              className="inline-flex items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4] hover:shadow-[0_18px_36px_rgba(31,182,193,0.34)] md:px-7 md:py-4 md:text-base"
            >
              Voir les textes officiels
            </a>

            <Link
              href="/fr/generate"
              className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white md:px-7 md:py-4 md:text-base"
            >
              Générer mon document CO₂e
            </Link>
          </div>
        </div>

        <div
          id="sources-officielles"
          className="or-reveal mx-auto mt-14 max-w-5xl rounded-[30px] border border-[#0B3A63]/10 bg-white p-6 shadow-[0_22px_55px_rgba(11,58,99,0.08)] [animation-delay:460ms] md:p-8"
        >
          <div className="flex flex-col gap-4 border-b border-[#0B3A63]/10 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
                Textes et standards officiels cités
              </p>

              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-[#0B3A63] md:text-3xl">
                Sources réglementaires et méthodologiques
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-[#64748B]">
              Ces liens renvoient vers les organismes ou textes officiels
              utilisés comme cadre de contexte et de méthode pour Certif-Scope.
            </p>
          </div>

          <div className="mt-6 divide-y divide-[#0B3A63]/8">
            {officialTexts.map((text) => (
              <div
                key={text.title}
                className="grid gap-4 py-5 md:grid-cols-[190px_1fr_auto] md:items-center"
              >
                <div>
                  <span className="inline-flex rounded-full border border-[#0B3A63]/10 bg-[#F8FAFC] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                    {text.category}
                  </span>
                </div>

                <div>
                  <p className="text-sm font-semibold leading-snug text-[#0B3A63] md:text-base">
                    {text.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
                    {text.description}
                  </p>
                </div>

                <a
                  href={text.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/15 px-4 py-2 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1FB6C1]/50 hover:bg-[#F8FAFC] hover:text-[#1FB6C1]"
                  aria-label={`${text.title} — ouvrir le texte officiel dans un nouvel onglet`}
                >
                  Texte officiel →
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {officialReferences.map((reference, index) => (
            <article
              key={reference.title}
              className="or-card group relative overflow-hidden rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-7"
              style={{ animationDelay: `${560 + index * 120}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(31,182,193,0.4),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="rounded-full bg-[#F8FAFC] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                  {reference.label}
                </span>

                <span
                  className="flex h-9 w-9 items-center justify-center rounded-2xl border border-[#1FB6C1]/20 bg-[#1FB6C1]/8 text-sm font-bold text-[#1FB6C1] transition-colors duration-300 group-hover:bg-[#1FB6C1]/12"
                  aria-hidden="true"
                >
                  ✓
                </span>
              </div>

              <h3 className="text-lg font-semibold leading-snug text-[#0B3A63]">
                {reference.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#64748B] md:text-[15px]">
                {reference.description}
              </p>

              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={reference.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center text-sm font-semibold text-[#0B3A63] underline decoration-[#1FB6C1]/50 underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                  aria-label={`${reference.source} — ouvrir la référence officielle dans un nouvel onglet`}
                >
                  {reference.source} →
                </a>

                {reference.secondarySource && reference.secondaryHref ? (
                  <a
                    href={reference.secondaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center text-xs font-medium text-[#64748B] underline decoration-[#1FB6C1]/40 underline-offset-4 transition-colors hover:text-[#0B3A63]"
                    aria-label={`${reference.secondarySource} — ouvrir la référence officielle dans un nouvel onglet`}
                  >
                    {reference.secondarySource} →
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div
          className="or-flow mx-auto mt-12 max-w-5xl"
          style={{ animationDelay: "720ms" }}
        >
          <div className="relative overflow-hidden rounded-[30px] border border-[#0B3A63]/10 bg-white p-6 shadow-[0_22px_55px_rgba(11,58,99,0.08)] md:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(31,182,193,0.52),transparent)]" />
            <div className="absolute left-1/2 top-[18%] -z-10 h-40 w-40 -translate-x-1/2 rounded-full bg-[#1FB6C1]/8 blur-3xl md:h-56 md:w-56" />

            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
                Ce que ces références permettent d’établir
              </p>

              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-[#0B3A63] md:text-3xl">
                PME sollicitée → réponse proportionnée → attestation exploitable
              </h3>

              <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
                Certif-Scope répond à un besoin concret : fournir une première
                information carbone claire lorsqu’une PME doit répondre
                rapidement à un client, un acheteur, une banque, une assurance
                ou un appel d’offres.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
              <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                  01 · PME concernée
                </p>
                <p className="mt-2 text-base font-semibold text-[#0B3A63]">
                  Une entreprise de moins de 250 salariés reçoit une demande
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  Le besoin vient souvent d’un client, d’un donneur d’ordre,
                  d’une banque, d’une assurance ou d’un dossier commercial.
                </p>
              </div>

              <div className="hidden items-center justify-center md:flex">
                <div className="or-arrow">
                  <span className="or-line" />
                  <span className="or-dot" />
                </div>
              </div>

              <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                  02 · Format adapté
                </p>
                <p className="mt-2 text-base font-semibold text-[#0B3A63]">
                  La réponse attendue n’est pas toujours un audit complet
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  Les références européennes reconnaissent l’intérêt de formats
                  plus simples et proportionnés pour les PME non cotées.
                </p>
              </div>

              <div className="hidden items-center justify-center md:flex">
                <div className="or-arrow">
                  <span className="or-line" />
                  <span className="or-dot [animation-delay:1.2s]" />
                </div>
              </div>

              <div className="rounded-2xl border border-[#1FB6C1]/30 bg-[linear-gradient(180deg,rgba(31,182,193,0.12)_0%,rgba(31,182,193,0.04)_100%)] p-5 shadow-[0_10px_30px_rgba(31,182,193,0.15)] transition-transform duration-300 hover:scale-[1.02]">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1FB6C1]">
                  Réponse Certif-Scope
                </p>
                <p className="mt-2 text-base font-semibold text-[#0B3A63]">
                  Une attestation CO₂e indicative, claire et vérifiable
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  Un document standardisé fondé sur une estimation agrégée en
                  spend-based, prêt à transmettre.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="rounded-full border border-[#0B3A63]/10 bg-[#F8FAFC] px-4 py-2 text-center text-xs font-medium text-[#0B3A63] shadow-sm md:text-sm">
                Une logique simple : adapter la réponse carbone au niveau réel
                de la demande PME.
              </div>
            </div>
          </div>
        </div>

        <div className="or-reveal mx-auto mt-12 max-w-4xl rounded-3xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-7 text-center [animation-delay:840ms] md:p-10">
          <h3 className="text-xl font-extrabold leading-tight text-[#0B3A63] md:text-2xl">
            Certif-Scope transforme cette logique en document professionnel
          </h3>

          <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
            Les dépenses déclarées sont associées à des facteurs d’émission
            monétaires afin de produire une estimation CO₂e agrégée. Le résultat
            est présenté dans une attestation claire, standardisée et vérifiable,
            pensée pour les demandes fournisseurs, appels d’offres, banques,
            assurances et screenings ESG.
          </p>

          <div className="mt-8 grid gap-4 text-left md:grid-cols-3">
            <div className="rounded-2xl border border-[#0B3A63]/8 bg-white p-4">
              <p className="text-sm font-semibold text-[#0B3A63]">
                Adapté aux PME
              </p>
              <p className="mt-2 text-sm text-[#64748B]">
                Un format proportionné pour les entreprises qui n’ont pas besoin
                d’un dispositif lourd pour une première réponse.
              </p>
            </div>

            <div className="rounded-2xl border border-[#0B3A63]/8 bg-white p-4">
              <p className="text-sm font-semibold text-[#0B3A63]">
                Méthode lisible
              </p>
              <p className="mt-2 text-sm text-[#64748B]">
                Une estimation spend-based déclarée, fondée sur les dépenses et
                des facteurs d’émission monétaires.
              </p>
            </div>

            <div className="rounded-2xl border border-[#0B3A63]/8 bg-white p-4">
              <p className="text-sm font-semibold text-[#0B3A63]">
                Document transmissible
              </p>
              <p className="mt-2 text-sm text-[#64748B]">
                Une attestation CO₂e agrégée, standardisée et vérifiable pour
                répondre rapidement à un tiers.
              </p>
            </div>
          </div>
        </div>

        <div className="or-reveal mx-auto mt-8 max-w-4xl rounded-2xl border border-[#0B3A63]/10 bg-white p-5 text-center [animation-delay:920ms]">
          <p className="text-sm leading-relaxed text-[#64748B]">
            Périmètre : Certif-Scope fournit une attestation CO₂e indicative. Ce
            document ne constitue pas un reporting CSRD/ESRS complet, un audit
            carbone ou un bilan GES réglementaire.
          </p>
        </div>

        <div className="or-reveal mt-12 flex flex-wrap justify-center gap-3 [animation-delay:1040ms]">
          <Link
            href="/fr/generate"
            className="inline-flex items-center justify-center rounded-xl bg-[#1FB6C1] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4] hover:shadow-[0_18px_36px_rgba(31,182,193,0.34)]"
          >
            Générer mon document CO₂e
          </Link>

          <a
            href="#sources-officielles"
            className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] px-8 py-4 text-base font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
          >
            Revoir les textes officiels
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes revealUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes revealScale {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.988);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes flowPulse {
          0% {
            transform: translateX(-6px);
            opacity: 0.35;
          }
          50% {
            transform: translateX(6px);
            opacity: 1;
          }
          100% {
            transform: translateX(-6px);
            opacity: 0.35;
          }
        }

        .or-reveal {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .or-card {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          transition:
            transform 300ms ease,
            box-shadow 300ms ease,
            border-color 300ms ease;
        }

        .or-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(11, 58, 99, 0.08);
          border-color: rgba(11, 58, 99, 0.14);
        }

        .or-flow {
          opacity: 0;
          animation: revealScale 0.95s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .or-arrow {
          position: relative;
          width: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .or-line {
          display: block;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(11, 58, 99, 0.12) 0%,
            rgba(31, 182, 193, 0.45) 50%,
            rgba(11, 58, 99, 0.12) 100%
          );
        }

        .or-dot {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 8px;
          height: 8px;
          margin-left: -4px;
          margin-top: -4px;
          border-radius: 9999px;
          background: #1fb6c1;
          box-shadow: 0 0 0 6px rgba(31, 182, 193, 0.12);
          animation: flowPulse 2.6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .or-reveal,
          .or-card,
          .or-flow,
          .or-dot {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
          }
