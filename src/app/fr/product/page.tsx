import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import OfferDetails from "@/components/fr/OfferDetails";

export const metadata: Metadata = {
  title: "Attestation CO₂e PME : produit, PDF et limites | Certif-Scope",
  description:
    "Découvrez l’attestation CO₂e Certif-Scope : un document carbone indicatif à 89€, basé sur les dépenses, avec ID vérifiable, utile pour clients, banques, assurances et appels d’offres. Non audit, non CSRD/ESRS.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/product/",
    languages: {
      en: "https://www.certif-scope.com/product/",
      fr: "https://www.certif-scope.com/fr/product/",
    },
  },
  openGraph: {
    title: "Attestation CO₂e PME : produit, PDF et limites | Certif-Scope",
    description:
      "Attestation CO₂e indicative basée sur les dépenses : document standardisé, ID vérifiable, usage client, banque, assurance ou appel d’offres. Non réglementaire.",
    url: "https://www.certif-scope.com/fr/product/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};


export default function ProductPageFR() {
  return (
    <section id="product" className="mx-auto max-w-7xl px-6 py-8 md:px-8 md:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service", name: "Attestation CO₂e indicative Certif-Scope",
        offers: { "@type": "Offer", priceCurrency: "EUR", price: "89", url: "https://www.certif-scope.com/fr/pricing/" }
      }) }} />
      <header className="max-w-3xl">
        <h1 className="text-3xl font-extrabold text-[#0B3A63] md:text-4xl">Votre attestation CO₂e : contenu, exemple et limites</h1>
        <p className="mt-4 text-lg leading-relaxed text-[#475569]">Un PDF personnalisé à partir de vos dépenses annuelles, à utiliser lorsque votre destinataire accepte cette estimation indicative.</p>
      </header>
      <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
        <div className="rounded-[26px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-5">
          <Image src="/attestation-example-fr.webp" alt="Première page du PDF exemple Certif-Scope, document de démonstration" width={778} height={1100} sizes="(max-width: 1024px) 100vw, 50vw" className="h-auto w-full" />
          <a href="/api/sample" className="mt-4 inline-block font-semibold text-[#0B3A63] underline">Ouvrir l’exemple PDF complet</a>
        </div>
        <div className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 md:p-8">
          <OfferDetails />
          <Link href="/fr/generate/" className="mt-6 inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#0B3A63] px-6 py-3 font-semibold text-white hover:bg-[#082C4B]">Préparer mon attestation — 89 €</Link>
        </div>
      </div>
      <section className="mt-10 max-w-4xl">
        <h2 className="text-2xl font-bold text-[#0B3A63]">Dans quel cas l’utiliser ?</h2>
        <p className="mt-4 leading-relaxed text-[#475569]">Pour une demande documentaire simple d’un client, fournisseur, acheteur ou partenaire qui accepte une estimation fondée sur les dépenses. Envoyez-lui l’exemple avant achat. Si une méthode, un périmètre détaillé ou une validation externe sont imposés, cette attestation peut ne pas convenir.</p>
      </section>
      <section className="mt-8 max-w-4xl rounded-[26px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6">
        <h2 className="text-2xl font-bold text-[#0B3A63]">Ce que l’estimation couvre</h2>
        <p className="mt-4 leading-relaxed text-[#475569]">Sept catégories de dépenses externes annuelles hors taxes sont converties avec des coefficients internes publiés. Le résultat ne représente pas l’ensemble des émissions de l’entreprise : il ne couvre ni les émissions directes de Scope 1, ni l’électricité de Scope 2, ni un inventaire exhaustif de Scope 3.</p>
        <p className="mt-4 leading-relaxed text-[#475569]">L’année de référence décrit les dépenses utilisées. La période documentaire de 12 mois à compter de l’émission ne transforme pas ces données en mesures actualisées et ne garantit pas leur acceptation.</p>
        <Link href="/fr/product/methodology/" className="mt-4 inline-block font-semibold text-[#0B3A63] underline">Voir les coefficients et un exemple de calcul</Link>
      </section>
      <section className="mt-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-[#0B3A63]">Lire et contrôler le document</h2>
        <p className="mt-4 leading-relaxed text-[#475569]">Le QR code permet de lire les données documentaires transmises. Leur affichage ne constitue pas à lui seul une authentification du PDF. Les éléments de signature nécessitent un contrôle technique distinct ; ils ne valident pas les dépenses ou les émissions réelles.</p>
        <div className="mt-4 flex flex-wrap gap-5"><Link href="/fr/verify/" className="font-semibold text-[#0B3A63] underline">Comprendre la vérification</Link><Link href="/fr/pricing/#packs" className="font-semibold text-[#0B3A63] underline">Voir les packs</Link><Link href="/fr/contact/" className="font-semibold text-[#0B3A63] underline">Poser une question</Link></div>
      </section>
    </section>
  );
}
