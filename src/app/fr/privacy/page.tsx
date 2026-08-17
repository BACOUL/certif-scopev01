import type { Metadata } from "next";

/* ======================================================
   SEO METADATA — POLITIQUE DE CONFIDENTIALITÉ
====================================================== */

export const metadata: Metadata = {
  title: "Politique de confidentialité — Certif-Scope",
  description:
    "Politique de confidentialité et ePrivacy expliquant comment Certif-Scope traite les données selon une approche privacy-by-design et de minimisation stricte.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/privacy/",
  },
  openGraph: {
    title: "Politique de confidentialité — Certif-Scope",
    description:
      "Politique GDPR et ePrivacy décrivant le traitement des données par Certif-Scope, incluant le calcul CO₂e et les principes privacy-by-design.",
    url: "https://www.certif-scope.com/fr/privacy/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

/* ======================================================
   PAGE
====================================================== */

export default function PrivacyPageFR() {
  return (
    <section
      id="privacy"
      data-section="privacy"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (LEGAL / PRIVACY) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Politique de confidentialité",
            url: "https://www.certif-scope.com/fr/privacy/",
            description:
              "Politique de confidentialité et ePrivacy décrivant comment Certif-Scope traite les données personnelles conformément au RGPD et aux principes privacy-by-design.",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
          }),
        }}
      />

      {/* JSON-LD — BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item: "https://www.certif-scope.com/fr/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Politique de confidentialité",
                item: "https://www.certif-scope.com/fr/privacy/",
              },
            ],
          }),
        }}
      />

      {/* EN-TÊTE PAGE */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Protection des données & ePrivacy
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Politique de confidentialité
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Cette politique de confidentialité explique comment Certif-Scope traite
          des données personnelles et non personnelles conformément au RGPD et à
          la directive ePrivacy, selon une approche stricte de privacy-by-design
          et de minimisation des données.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENU */}
      <div className="max-w-4xl space-y-14">
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Principes de privacy-by-design
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope est conçu pour fonctionner sans comptes utilisateurs,
            sans tracking comportemental et sans collecte inutile. Les principes
            de protection des données dès la conception et par défaut sont
            appliqués à toutes les étapes.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>pas de comptes utilisateurs ni de profils persistants</li>
            <li>pas de publicité, de profilage ni de tracking comportemental</li>
            <li>
              mesure d’audience agrégée et sans cookie via Vercel Web Analytics
            </li>
            <li>pas de cookies nécessitant le consentement</li>
            <li>pas de stockage des données financières détaillées saisies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Données que vous fournissez volontairement
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Selon votre interaction avec Certif-Scope, vous pouvez fournir
            volontairement les informations suivantes :
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>adresse email lors d’une demande de support ou d’information</li>
            <li>informations d’identification d’organisation (facultatives)</li>
            <li>dépenses annuelles (€) saisies pour le calcul CO₂e</li>
            <li>contenu des messages envoyés via les formulaires</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Le texte collé dans l’outil d’analyse d’une demande carbone reste
            uniquement dans la mémoire du navigateur. Il n’est ni transmis à
            Certif-Scope ou à Vercel Web Analytics, ni conservé après la fermeture
            ou le rechargement de la page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Traitement du calcul CO₂e
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les calculs CO₂e sont effectués localement dans le navigateur de
            l’utilisateur. Les données financières détaillées sont traitées sur
            l’appareil de l’utilisateur et ne sont pas stockées sur les serveurs
            de Certif-Scope.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Les données financières détaillées ne sont pas stockées par
            Certif-Scope. Seules les informations strictement nécessaires à la
            génération de l’attestation PDF, telles que le résultat CO₂e agrégé,
            les métadonnées du document et les informations d’identification
            affichées dans l’attestation, peuvent être traitées pour produire le
            PDF. Aucun détail de répartition des dépenses n’est conservé ni
            journalisé par Certif-Scope.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            L’analyse d’une demande carbone est également réalisée localement dans
            le navigateur par des règles déterministes. Aucun texte saisi n’est
            envoyé vers une route d’analyse, un modèle externe ou un outil de
            mesure d’audience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Cookies, traceurs et ePrivacy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope n’utilise ni cookies publicitaires ni cookies de tracking.
            Vercel Web Analytics mesure les pages consultées et, lorsque le plan le
            permet, quelques événements techniques agrégés. Selon la documentation
            de Vercel, cette mesure n’utilise pas de cookie et ne permet pas de
            suivre une personne entre différents sites ou différents jours. Aucun
            texte saisi dans l’analyseur n’est inclus dans ces événements.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>pas de cookies marketing ou de mesure d’audience</li>
            <li>pas de tracking inter-sites ou comportemental</li>
            <li>statistiques de fréquentation agrégées uniquement</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            D’éventuels cookies strictement nécessaires, s’ils existent, sont
            limités au fonctionnement technique essentiel du site et ne stockent
            pas de données personnelles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Stockage et durées de conservation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope ne stocke pas de manière permanente les données d’entrée
            utilisées pour le calcul CO₂e. Les valeurs financières sont traitées
            transitoirement en mémoire et supprimées immédiatement après la
            génération de l’attestation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Les emails et échanges de support peuvent être conservés jusqu’à
            douze (12) mois à des fins opérationnelles et de support et peuvent
            être supprimés sur demande.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Partage des données et sous-traitants
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Certif-Scope ne vend pas, ne loue pas et ne monétise pas de données
            personnelles. Certains traitements limités peuvent impliquer des
            sous-traitants techniques strictement nécessaires au fonctionnement
            du service :
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              Vercel pour l’hébergement, le déploiement et la mesure d’audience
              agrégée sans cookie
            </li>
            <li>Stripe pour le traitement des paiements</li>
            <li>Resend pour la délivrance d’emails transactionnels ou de support</li>
            <li>
              Cloudflare KV pour l’état technique des clés d’accès et crédits de
              packs
            </li>
            <li>PDFShift pour la conversion technique nécessaire à la génération PDF</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Les données de paiement sont traitées par Stripe et ne sont pas
            stockées par Certif-Scope. Lorsque PDFShift est utilisé, seules les
            données nécessaires à la production technique de l’attestation PDF
            sont transmises ; les dépenses financières détaillées ne sont pas
            stockées par Certif-Scope. Les sous-traitants opèrent sous des
            garanties contractuelles alignées avec les exigences du RGPD.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Vos droits RGPD
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>droit d’accès</li>
            <li>droit de rectification</li>
            <li>droit à l’effacement</li>
            <li>droit à la limitation du traitement</li>
            <li>droit à la portabilité</li>
            <li>droit d’opposition</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Pour exercer vos droits, contactez :
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Mesures de sécurité
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope applique le chiffrement HTTPS et des mesures techniques
            et organisationnelles standard pour protéger les données contre tout
            accès non autorisé, altération ou divulgation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Mises à jour de la politique
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Cette politique peut être mise à jour afin de refléter des évolutions
            juridiques, techniques ou opérationnelles. La version la plus récente
            est toujours disponible sur cette page.
          </p>
        </section>
      </div>
    </section>
  );
}
