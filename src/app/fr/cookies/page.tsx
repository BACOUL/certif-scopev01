import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique relative aux cookies — Certif-Scope",
  description:
    "Politique relative aux cookies expliquant l’utilisation limitée de cookies strictement nécessaires par Certif-Scope, conformément au RGPD et aux exigences ePrivacy européennes.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/cookies/",
  },
  openGraph: {
    title: "Politique relative aux cookies — Certif-Scope",
    description:
      "Politique relative aux cookies expliquant l’utilisation limitée de cookies strictement nécessaires par Certif-Scope, conformément au RGPD et aux exigences ePrivacy européennes.",
    url: "https://www.certif-scope.com/fr/cookies/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <section
      id="cookie-policy"
      data-section="cookie-policy"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
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
                name: "Politique cookies",
                item: "https://www.certif-scope.com/fr/cookies/",
              },
            ],
          }),
        }}
      />

      {/* EN-TÊTE PAGE — ALIGNEMENT CANONIQUE */}
      <header className="mb-14">
        <p
          className="uppercase text-xs tracking-wider text-[#64748B] mb-3"
        >
          Protection des données & ePrivacy
        </p>

        <h1
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6"
        >
          Politique relative aux cookies
        </h1>

        <p
          className="text-lg text-gray-700 leading-relaxed max-w-3xl"
        >
          Cette politique relative aux cookies explique comment Certif-Scope
          utilise les cookies et technologies similaires. Certif-Scope applique
          une approche stricte de minimisation des données et respecte le
          Règlement Général sur la Protection des Données (RGPD) ainsi que les
          exigences ePrivacy européennes.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENU — LARGEUR CANONIQUE */}
      <div className="max-w-4xl mx-auto space-y-14">
        {/* SECTION 1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Que sont les cookies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Les cookies sont de petits fichiers texte enregistrés sur votre
            appareil lors de la visite d’un site internet. Ils sont généralement
            utilisés pour permettre le fonctionnement essentiel du site, les
            mécanismes de sécurité et certaines préférences techniques de base.
          </p>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Utilisation des cookies par Certif-Scope
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope utilise un nombre très limité de cookies strictement
            nécessaires au fonctionnement technique et à la sécurité du site.
            Aucun cookie publicitaire, de profilage, de suivi inter-sites,
            d’analytics comportemental ou de marketing n’est utilisé.
          </p>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Catégories de cookies
          </h2>

          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Cookies strictement nécessaires
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ces cookies sont indispensables au bon fonctionnement du site. Ils
            permettent notamment les fonctions de sécurité, la navigation et
            certaines opérations techniques essentielles. Leur désactivation
            peut affecter le fonctionnement normal du site.
          </p>

          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Cookies d’analyse et de suivi
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope n’utilise pas de cookies d’analyse, de mesure
            d’audience ou de suivi permettant d’identifier les utilisateurs ou
            d’analyser leur comportement entre différents sites.
          </p>
        </section>

        {/* SECTION 4 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Services tiers
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope n’intègre aucun service tiers publicitaire ou de suivi.
            Les services tiers utilisés le sont uniquement lorsqu’ils sont
            nécessaires au fonctionnement du service : hébergement et
            déploiement, paiement via Stripe, emails transactionnels via Resend,
            état technique des clés d’accès et crédits de packs via Cloudflare
            KV, et conversion technique du PDF via PDFShift.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Les paiements sont traités par Stripe sur sa propre infrastructure ;
            Certif-Scope ne stocke pas les données de paiement. PDFShift ne reçoit
            que les informations nécessaires à la production technique de
            l’attestation PDF lorsque cette conversion est requise. Ces services
            ne sont pas utilisés par Certif-Scope à des fins de marketing, de
            publicité ou d’analyse comportementale.
          </p>
        </section>

        {/* SECTION 5 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Durée de conservation des cookies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Les cookies utilisés par Certif-Scope sont principalement des
            cookies de session, supprimés automatiquement à la fermeture du
            navigateur. Les cookies techniques nécessaires ont une durée de vie
            limitée et ne sont pas conservés au-delà de ce qui est strictement
            nécessaire.
          </p>
        </section>

        {/* SECTION 6 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Gestion des cookies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Vous pouvez contrôler ou désactiver les cookies via les paramètres
            de votre navigateur. La désactivation des cookies strictement
            nécessaires peut toutefois affecter la disponibilité ou le
            fonctionnement de certaines parties du site.
          </p>
        </section>

        {/* SECTION 7 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Mise à jour de cette politique
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Cette politique relative aux cookies peut être mise à jour afin de
            refléter des évolutions juridiques, techniques ou opérationnelles.
            Toute modification importante sera publiée sur cette page.
          </p>
        </section>

        {/* SECTION 8 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Contact
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Pour toute question relative à cette politique, vous pouvez
            contacter :
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>
      </div>
    </section>
  );
}
