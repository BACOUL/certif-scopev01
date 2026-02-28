// PATH: src/app/fr/pricing/page.tsx

import type { Metadata } from "next";
import GenerateAttestationButton from "@/components/GenerateAttestationButton";

export const metadata: Metadata = {
  title: "Bilan carbone PME pas cher : prix fixe 89€ + packs — Certif-Scope",
  description:
    "Bilan carbone PME pas cher : alternative spend-based (dépenses × facteurs d’émission) à 89€. Attestation CO₂e indicative en PDF, standardisée, vérifiable, valable 1 an. Packs pour besoins récurrents.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/pricing/",
    languages: {
      fr: "https://www.certif-scope.com/fr/pricing/",
      en: "https://www.certif-scope.com/pricing/",
    },
  },
  openGraph: {
    type: "website",
    title: "Bilan carbone PME pas cher : prix fixe 89€ + packs — Certif-Scope",
    description:
      "Attestation CO₂e indicative spend-based pour PME : PDF standardisé, vérifiable, valable 1 an. Utile pour appel d’offres, référencement fournisseur, banque/assurance (screening).",
    url: "https://www.certif-scope.com/fr/pricing/",
    siteName: "Certif-Scope",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PricingPageFR() {
  const pageUrl = "https://www.certif-scope.com/fr/pricing/";

  const offers = [
    {
      name: "Attestation unique",
      price: "89€",
      sub: "Validité 1 an",
      badge: "Prix fixe",
      accent: true,
      desc: "Pour répondre vite à une demande “bilan carbone” de screening (appel d’offres, client, banque, assurance).",
      bullets: [
        "PDF CO₂e standardisé",
        "Identifiant unique (référence dossier)",
        "QR de vérification (contrôle tiers)",
        "Nom + version des facteurs",
        "Mentions de périmètre (indicatif / non audit)",
      ],
      cta: "Générer mon attestation",
      ctaNode: <GenerateAttestationButton />,
      foot: "Téléchargement immédiat après paiement. Pas d’abonnement.",
    },
    {
      name: "Pack de 5",
      price: "349€",
      sub: "69€ par attestation",
      badge: "Usage récurrent",
      desc: "Pour plusieurs réponses dans l’année (fournisseurs, appels d’offres, dossiers banque/assurance).",
      bullets: [
        "5 attestations CO₂e",
        "Même format standardisé",
        "Réutilisable sur plusieurs dossiers",
        "Vérification publique (sans compte)",
        "Prix unitaire réduit",
      ],
      cta: "Acheter le pack de 5",
      href: "/api/checkout-pack?pack=5",
      foot: "Convient aux PME avec plusieurs demandes par an.",
    },
    {
      name: "Pack de 10",
      price: "590€",
      sub: "59€ par attestation",
      badge: "Meilleur coût",
      desc: "Pour un flux régulier de demandes CO₂e (procurement, renouvellements, dossiers multiples).",
      bullets: [
        "10 attestations CO₂e",
        "Format unique, facile à archiver",
        "Versionning méthode + facteurs",
        "Vérification rapide via QR",
        "Prix unitaire optimisé",
      ],
      cta: "Acheter le pack de 10",
      href: "/api/checkout-pack?pack=10",
      foot: "Idéal quand la demande revient plusieurs fois.",
    },
    {
      name: "Pack de 50",
      price: "2 450€",
      sub: "49€ par attestation",
      badge: "Écosystèmes fournisseurs",
      desc: "Pour plateformes, réseaux de fournisseurs, grands volumes d’émission (usage interne B2B).",
      bullets: [
        "50 attestations CO₂e",
        "Adapté à des écosystèmes fournisseurs",
        "Format homogène pour comparaisons",
        "Vérification indépendante",
        "Prix unitaire très réduit",
      ],
      cta: "Acheter le pack de 50",
      href: "/api/checkout-pack?pack=50",
      wide: true,
      foot: "Pensé pour les volumes et la standardisation multi-dossiers.",
    },
  ];

  const faq = [
    {
      q: "Est-ce un bilan carbone réglementaire (CSRD/ESRS) ?",
      a: "Non. Certif-Scope produit une attestation CO₂e indicative (screening), basée sur un modèle spend-based (dépenses × facteurs d’émission). Ce document n’est ni un audit, ni un inventaire complet, ni un reporting CSRD/ESRS.",
    },
    {
      q: "Pourquoi “bilan carbone PME pas cher” : qu’est-ce qui change ?",
      a: "Le prix est bas parce que la démarche vise le screening : pas de collecte de données physiques (kWh, km, litres), pas de périmètre exhaustif par scopes, pas d’assurance externe. L’objectif est un document clair, archivable et réutilisable.",
    },
    {
      q: "Le document est-il acceptable en appel d’offres ?",
      a: "Souvent oui, lorsque la demande vise un indicateur CO₂e comparable (screening). Si le cahier des charges impose une norme, un périmètre détaillé ou une vérification tierce, il faut suivre ce cadre.",
    },
    {
      q: "Pourquoi la validité est-elle d’1 an ?",
      a: "Les demandes se font généralement par année de référence. Une validité annuelle facilite l’archivage et la comparaison. Il est recommandé de réémettre lorsque l’année couverte ou les données changent.",
    },
    {
      q: "Mes données de dépenses sont-elles envoyées ?",
      a: "Non. Les calculs sont réalisés localement dans le navigateur. Les dépenses détaillées ne sont pas envoyées. Seuls le résultat CO₂e agrégé et des métadonnées non sensibles servent à émettre l’attestation.",
    },
  ];

  return (
    <section
      id="pricing-fr"
      data-section="pricing-fr"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage + Service (pricing intent) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Bilan carbone PME pas cher : prix fixe 89€ + packs",
            url: pageUrl,
            description:
              "Page prix FR : attestation CO₂e indicative spend-based pour PME (screening) avec packs. Document PDF standardisé, vérifiable, valable 1 an. Non audit, non inventaire complet, non CSRD/ESRS.",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
          }),
        }}
      />

      {/* HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#0B3A63]/70 mb-3 font-semibold">
          Bilan carbone PME pas cher — Prix & packs
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B3A63] mb-6 leading-tight">
          Prix d’un bilan carbone PME simplifié : 89€{" "}
          <span className="text-[#0B3A63]">+</span>{" "}
          <span className="text-[#15B097]">packs</span>
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Un bilan carbone complet pour une PME peut coûter plusieurs milliers
          d’euros (collecte, périmètres, hypothèses, vérification). Certif-Scope
          cible un autre besoin : une{" "}
          <strong>attestation CO₂e indicative</strong> (spend-based) utile pour
          les demandes de <strong>screening</strong> et de{" "}
          <strong>preuve minimale</strong> (appel d’offres, référencement
          fournisseur, banque/assurance). Prix fixe, sans abonnement.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#offres"
            className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#15B097] text-white hover:opacity-90 transition-colors font-semibold"
          >
            Voir les offres
          </a>

          <a
            href="/fr/bilan-carbone-pme"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Guide : bilan carbone PME
          </a>

          <a
            href="/fr/verify"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Vérifier un document
          </a>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* WHY CHEAPER */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              Pourquoi 89€ au lieu de plusieurs milliers d’euros ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl">
              Le prix est bas car l’objectif est le{" "}
              <strong>screening documentaire</strong> : produire un indicateur
              CO₂e agrégé, lisible et archivable, avec méthode déclarée et limites
              visibles — sans engager une démarche d’inventaire complet.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• Pas d’audit terrain ni collecte de données physiques</li>
              <li>• Modèle spend-based (dépenses × facteurs d’émission)</li>
              <li>• Résultat CO₂e agrégé (document de screening)</li>
              <li>• Format PDF standardisé, réutilisable et archivable</li>
              <li>• Vérification indépendante (ID + QR)</li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Périmètre (important)
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Certif-Scope fournit une attestation CO₂e{" "}
                <strong>indicative</strong> destinée au screening (achats,
                banque/assurance, appels d’offres lorsque la demande est
                générique). Ce document n’est{" "}
                <strong>ni un audit</strong>,{" "}
                <strong>ni un inventaire complet</strong>,{" "}
                <strong>ni un reporting CSRD/ESRS</strong>. Les données d’entrée
                relèvent de la responsabilité de l’entreprise utilisatrice.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="/fr/product/methodology"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Méthodologie
                </a>
                <a
                  href="/fr/product/compliance"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Conformité & limites
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section id="offres" className="scroll-mt-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0B3A63]">
              Offres & packs
            </h2>
            <p className="text-gray-700 mt-2 max-w-2xl">
              Même document, même format, même mécanisme de vérification. Choisissez
              selon le volume de demandes.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#faq"
              className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              FAQ prix
            </a>
            <a
              href="/fr/generate"
              className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
            >
              Générer (accès)
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Cards 1..3 */}
          {offers.slice(0, 3).map((o) => (
            <div
              key={o.name}
              className={[
                "bg-white border rounded-2xl shadow-lg p-10 text-center flex flex-col",
                o.accent ? "border-[#15B097]/30" : "border-gray-200",
              ].join(" ")}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <h3 className="text-2xl font-bold text-[#0B3A63]">{o.name}</h3>
              </div>

              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border border-gray-200 text-gray-700 bg-white">
                  {o.badge}
                </span>
              </div>

              <p
                className={[
                  "font-extrabold mb-1 tracking-tight",
                  o.accent ? "text-5xl text-[#15B097]" : "text-4xl text-[#0B3A63]",
                ].join(" ")}
              >
                {o.price}
              </p>
              <p className="text-sm text-gray-500 mb-5">{o.sub}</p>

              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {o.desc}
              </p>

              <ul className="text-left mx-auto w-full max-w-sm space-y-2 text-gray-700 text-sm mb-8">
                {o.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>

              {o.ctaNode ? (
                <div className="mt-auto">{o.ctaNode}</div>
              ) : (
                <a
                  href={o.href}
                  className="bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-10 py-3 rounded-xl mt-auto text-center"
                >
                  {o.cta}
                </a>
              )}

              <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                {o.foot}
              </p>
            </div>
          ))}

          {/* Pack 50 (wide on desktop like EN intent) */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">
              {offers[3].name}
            </h3>

            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border border-gray-200 text-gray-700 bg-white">
                {offers[3].badge}
              </span>
            </div>

            <p className="text-4xl font-extrabold text-[#0B3A63] mb-1">
              {offers[3].price}
            </p>
            <p className="text-sm text-gray-500 mb-5">{offers[3].sub}</p>

            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {offers[3].desc}
            </p>

            <ul className="text-left mx-auto w-full max-w-sm space-y-2 text-gray-700 text-sm mb-8">
              {offers[3].bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>

            <a
              href={offers[3].href}
              className="bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-10 py-3 rounded-xl mt-auto text-center"
            >
              {offers[3].cta}
            </a>

            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              {offers[3].foot}
            </p>
          </div>

          {/* Enterprise / API */}
          <div className="bg-[#F8FAFC] border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center col-span-full flex flex-col">
            <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">
              Enterprise & API
            </h3>

            <p className="text-4xl font-extrabold text-gray-400 mb-3">
              Bientôt disponible
            </p>

            <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
              Émission automatisée et intégrations pour plateformes, cabinets, et
              grands volumes (workflows fournisseurs). Accès sur demande.
            </p>

            <button
              disabled
              className="px-10 py-3 rounded-xl font-semibold text-white bg-gray-400 cursor-not-allowed mx-auto"
            >
              Accès Enterprise — 2026
            </button>

            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              Objectif : standardiser l’émission à grande échelle, sans complexifier
              l’usage PME.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">
            Note importante sur l’usage “bilan carbone pas cher”
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Cette page est orientée “prix” car beaucoup de PME cherchent une
            réponse rapide à une demande. Le livrable Certif-Scope est une{" "}
            <strong>attestation CO₂e indicative</strong> (screening) : utile pour
            des dossiers et questionnaires, mais non substituable à un inventaire
            complet lorsque celui-ci est explicitement exigé.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-20 max-w-4xl scroll-mt-24">
        <h2 className="text-2xl font-bold text-[#0B3A63] mb-6">
          Questions fréquentes (prix)
        </h2>

        <div className="space-y-6 text-gray-700">
          {faq.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-gray-200 bg-white p-6"
            >
              <h3 className="font-semibold text-[#0B3A63] mb-2">{item.q}</h3>
              <p className="leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/fr/bilan-carbone-pme"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Guide : bilan carbone PME
          </a>
          <a
            href="/fr/bilan-carbone-appel-offres"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Appel d’offres : quoi fournir
          </a>
          <a
            href="/fr/why-companies-ask/exigences-co2-banques-assurances"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Banque / assurance : exigences
          </a>
          <a
            href="#top"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Haut de page
          </a>
        </div>
      </section>

      <p className="text-gray-600 text-center text-xs mt-16 leading-relaxed">
        Estimation CO₂e indicative basée sur les dépenses (spend-based). Non
        auditée. Non inventaire complet. Non reporting CSRD/ESRS.
      </p>
    </section>
  );
      }
