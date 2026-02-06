import type { Metadata } from "next";

/* ======================================================
   SEO METADATA — MENTIONS LÉGALES
====================================================== */

export const metadata: Metadata = {
  title: "Mentions légales — Certif-Scope",
  description:
    "Informations légales obligatoires concernant l’éditeur, l’hébergeur, les limitations de responsabilité et le cadre juridique applicable à Certif-Scope.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/legal",
  },
  openGraph: {
    title: "Mentions légales — Certif-Scope",
    description:
      "Informations légales obligatoires concernant l’éditeur, l’hébergeur, les limitations de responsabilité et les principes de traitement des données de Certif-Scope.",
    url: "https://www.certif-scope.com/fr/legal",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function LegalPage() {
  return (
    <section
      id="legal"
      data-section="legal"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Mentions légales",
            url: "https://www.certif-scope.com/fr/legal",
            description:
              "Mentions légales et informations obligatoires concernant l’éditeur et le cadre juridique de Certif-Scope.",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
          }),
        }}
      />

      {/* EN-TÊTE PAGE */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Informations légales
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Mentions légales
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Informations légales obligatoires concernant l’éditeur du site,
          l’hébergeur, la propriété intellectuelle, les limitations de
          responsabilité et les principes de traitement des données applicables
          à Certif-Scope.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENU */}
      <div className="max-w-4xl mx-auto space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Informations sur l’éditeur
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Le présent site est exploité par l’entrepreneur individuel suivant :
          </p>

          <ul className="text-gray-700 space-y-2 text-sm leading-relaxed">
            <li><strong>Nom :</strong> Jeason Alexandre Bacoul</li>
            <li><strong>Nom commercial :</strong> TimeProofs</li>
            <li><strong>Statut juridique :</strong> Entrepreneur individuel (France)</li>
            <li><strong>SIREN :</strong> 999356439</li>
            <li>
              <strong>Adresse :</strong> 3 rue de l’Église de Louppy,
              55000 Les Hauts-de-Chée, France
            </li>
            <li>
              <strong>Régime TVA :</strong> Franchise en base de TVA (TVA non applicable)
            </li>
            <li><strong>Email de contact :</strong> contact@certif-scope.com</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Responsable de la publication
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Le responsable de la publication et représentant légal du site est
            Jeason Alexandre Bacoul.
            <br />
            Contact : <strong>contact@certif-scope.com</strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Hébergement
          </h2>

          <p className="text-gray-700 leading-relaxed mb-2">
            Le site est hébergé par :
          </p>

          <p className="text-gray-700 leading-relaxed">
            Vercel Inc.<br />
            440 N Barranca Ave #4133<br />
            Covina, CA 91723<br />
            États-Unis
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Propriété intellectuelle
          </h2>

          <p className="text-gray-700 leading-relaxed">
            L’ensemble des contenus présents sur ce site, incluant les textes,
            la structure, le design, l’identité visuelle et le code, est protégé
            par les lois applicables en matière de propriété intellectuelle.
            Toute reproduction, modification ou redistribution sans autorisation
            écrite préalable est interdite.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Limitation de responsabilité
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope fournit des calculs CO₂e déterministes basés sur des
            dépenses déclarées par l’utilisateur. L’exploitant ne peut être tenu
            responsable :
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2 text-sm">
            <li>d’informations incorrectes, incomplètes ou trompeuses fournies par les utilisateurs</li>
            <li>de l’interprétation ou de l’utilisation des attestations par des tiers</li>
            <li>de décisions prises par des entités de procurement, financières ou réglementaires</li>
            <li>de toute utilisation en dehors du périmètre indicatif et non réglementaire</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-4">
            Les attestations Certif-Scope constituent des estimations indicatives
            basées sur une méthode spend-based. Elles ne constituent ni un
            rapport CSRD ou ESRS, ni un audit carbone, ni un inventaire
            réglementaire des émissions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Stockage et traitement des données
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Certif-Scope applique un modèle privacy-by-design et un traitement
            sans stockage persistant. Les données financières saisies par
            l’utilisateur sont traitées temporairement en mémoire à des fins de
            calcul et ne sont pas conservées dans des bases de données.
            Les mécanismes de vérification ne reposent sur aucun stockage de
            documents ni sur des comptes utilisateurs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Signalement d’abus ou problèmes techniques
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Pour signaler un contenu illicite, un usage abusif du service ou un
            problème technique, veuillez contacter :
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>
      </div>
    </section>
  );
}
