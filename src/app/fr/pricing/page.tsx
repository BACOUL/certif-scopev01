import type { Metadata } from "next";
import Link from "next/link";
import OfferDetails from "@/components/fr/OfferDetails";

export const metadata: Metadata = {
  title: "Prix attestation CO₂e PME : 89€ sans abonnement | Certif-Scope",
  description:
    "Générez une attestation CO₂e indicative à 89€, sans abonnement. PDF vérifiable pour demandes fournisseurs, banques, assurances et appels d’offres. Non audit, non CSRD/ESRS.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/pricing/",
    languages: {
      fr: "https://www.certif-scope.com/fr/pricing/",
      en: "https://www.certif-scope.com/en/pricing/",
      de: "https://www.certif-scope.com/de/preise/",
      "x-default": "https://www.certif-scope.com/fr/pricing/",
    },
  },
  openGraph: {
    type: "website",
    title: "Prix attestation CO₂e PME : 89€ sans abonnement | Certif-Scope",
    description:
      "Attestation CO₂e indicative à 89€, sans abonnement. PDF standardisé, daté, archivable et vérifiable pour demandes fournisseurs, banques, assurances et appels d’offres.",
    url: "https://www.certif-scope.com/fr/pricing/",
    siteName: "Certif-Scope",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};


const packs = [
  {
    name: "Pack de 5",
    price: "349€",
    unit: "69,80€ par attestation",
    text: "Pour produire cinq documents distincts, selon vos entités ou années de référence.",
    href: "/api/checkout-pack?pack=5",
  },
  {
    name: "Pack de 10",
    price: "590€",
    unit: "59€ par attestation",
    text: "Pour produire dix documents distincts. Un même PDF peut être présenté à plusieurs destinataires.",
    href: "/api/checkout-pack?pack=10",
  },
  {
    name: "Pack de 50",
    price: "2 450€",
    unit: "49€ par attestation",
    text: "Pour réseaux, plateformes ou organisations avec un volume fournisseur important.",
    href: "/api/checkout-pack?pack=50",
  },
];


export default function PricingPageFR() {
  return (
    <main id="main-content" className="mx-auto max-w-7xl px-6 py-8 md:px-8 md:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service", name: "Attestation CO₂e indicative Certif-Scope",
        provider: { "@type": "Organization", name: "Certif-Scope", url: "https://www.certif-scope.com/fr/" },
        offers: { "@type": "Offer", price: "89", priceCurrency: "EUR", url: "https://www.certif-scope.com/fr/generate/" }
      }) }} />
      <header className="max-w-3xl">
        <h1 className="text-3xl font-extrabold text-[#0B3A63] md:text-4xl">Un document à 89 €, sans abonnement</h1>
        <p className="mt-4 text-lg leading-relaxed text-[#475569]">Pour une demande qui accepte une estimation indicative fondée sur vos dépenses. Confirmez le périmètre avec votre destinataire avant de commander.</p>
      </header>
      <section className="mt-8 grid gap-8 rounded-[30px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-xl font-bold text-[#0B3A63]">Attestation unitaire</h2>
          <p className="mt-4 text-5xl font-extrabold text-[#0B3A63]">89 €</p>
          <p className="mt-3 text-sm text-[#475569]">Prix total par document · paiement unique</p>
          <Link href="/fr/generate/" className="mt-6 inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#0B3A63] px-6 py-3 font-semibold text-white hover:bg-[#082C4B]">Préparer mon attestation</Link>
          <a href="/api/sample" className="mt-4 block font-semibold text-[#0B3A63] underline">Voir le PDF exemple</a>
        </div>
        <OfferDetails />
      </section>
      <section className="py-12 md:py-16">
        <h2 className="text-2xl font-bold text-[#0B3A63]">Avant et après votre achat</h2>
        <ul className="mt-5 max-w-4xl list-disc space-y-3 pl-5 text-[#475569]">
          <li>Avant paiement, vérifiez l’entreprise, l’année, les montants et le résultat dans le récapitulatif.</li>
          <li>Après confirmation du paiement unitaire, téléchargez le PDF depuis la page de retour. Le service prévoit également sa livraison par email : vérifiez les courriers indésirables si nécessaire.</li>
          <li>Si le téléchargement échoue, réessayez depuis cette page puis contactez le support avec la référence de commande. Ne repassez pas commande pour résoudre cet incident.</li>
          <li>Archivez votre PDF dès réception. Certif-Scope ne conserve pas de copie récupérable du document.</li>
          <li>Pour une correction ou un PDF perdu, le support examine la demande. Une réémission n’est pas automatiquement incluse ; les conditions et tout paiement éventuel doivent être précisés avant une nouvelle commande.</li>
        </ul>
        <Link href="/fr/contact/" className="mt-5 inline-block font-semibold text-[#0B3A63] underline">Contacter le support</Link>
      </section>
      <section id="packs" className="scroll-mt-24 rounded-[30px] bg-[#F8FAFC] p-6 md:p-8">
        <h2 className="text-2xl font-bold text-[#0B3A63]">Packs pour plusieurs documents distincts</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[#475569]">Un même PDF peut être envoyé à plusieurs destinataires pour la même entreprise, la même année et les mêmes données. Un pack est utile pour plusieurs entités ou années, pas pour envoyer plusieurs copies d’un document.</p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {packs.map(pack => (
            <article key={pack.name} className="flex flex-col rounded-[26px] border border-[#0B3A63]/10 bg-white p-6">
              <h3 className="text-xl font-bold text-[#0B3A63]">{pack.name}</h3>
              <p className="mt-4 text-3xl font-extrabold text-[#0B3A63]">{pack.price}</p>
              <p className="mt-2 text-sm font-semibold text-[#475569]">{pack.unit}</p>
              <p className="mt-4 grow text-sm leading-relaxed text-[#475569]">{pack.text}</p>
              <a href={pack.href} className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#0B3A63] px-5 py-3 font-semibold text-white hover:bg-[#082C4B]">Acheter le {pack.name.toLowerCase()}</a>
            </article>
          ))}
        </div>
        <h3 className="mt-8 text-xl font-bold text-[#0B3A63]">Comment utiliser vos clés</h3>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-[#475569]">
          <li>Après confirmation du paiement, les clés sont envoyées à l’email de la commande.</li>
          <li>Chaque clé permet de créer une attestation et doit être utilisée dans les 365 jours suivant sa création.</li>
          <li>Renseignez vos données, puis saisissez et vérifiez une clé dans le formulaire. Le récapitulatif indique l’utilisation du crédit avant génération.</li>
          <li>Si l’email ou une clé pose problème, vérifiez les courriers indésirables puis contactez le support, sans racheter le pack.</li>
        </ol>
        <p className="mt-4 text-sm text-[#475569]">La durée d’utilisation d’une clé et l’année de référence des dépenses sont deux notions distinctes.</p>
      </section>
      <section className="py-12 md:py-16">
        <h2 className="text-2xl font-bold text-[#0B3A63]">Vérifiez que le document convient</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[#475569]">Le document couvre les catégories de dépenses déclarées. Il ne constitue pas un audit, un inventaire GES complet ou un reporting CSRD/ESRS. Son acceptation dépend de la demande de votre destinataire.</p>
        <div className="mt-5 flex flex-wrap gap-5"><Link href="/fr/product/methodology/" className="font-semibold text-[#0B3A63] underline">Comprendre la méthode</Link><Link href="/fr/terms/" className="font-semibold text-[#0B3A63] underline">Conditions d’utilisation</Link></div>
      </section>
    </main>
  );
}
