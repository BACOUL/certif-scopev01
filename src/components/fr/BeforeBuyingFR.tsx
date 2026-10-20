import Link from "next/link";

const emailSubject = "Validation du périmètre d'un document CO₂e indicatif";
const emailBody = [
  "Bonjour,",
  "",
  "Avant de commander le document, pouvez-vous confirmer que votre demande accepte une estimation CO₂e indicative fondée sur sept catégories de dépenses externes annuelles ?",
  "Ce document ne constitue ni un bilan GES exhaustif (Scopes 1, 2 et 3), ni un audit, ni une certification ou une vérification externe.",
  "",
  "Voici un exemple gratuit du PDF envisagé : https://www.certif-scope.com/api/sample",
  "",
  "Pouvez-vous confirmer que ce format et ce périmètre répondent à votre demande ?",
  "",
  "Merci.",
].join("\n");

const mailto = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

export default function BeforeBuyingFR() {
  return (
    <section
      aria-labelledby="avant-achat-titre"
      className="mt-8 rounded-[26px] border border-[#0B3A63]/15 bg-[#F8FAFC] p-5 md:p-8"
    >
      <p className="text-xs font-bold uppercase tracking-wider text-[#0B3A63]/70">
        Avant de payer 89 €
      </p>
      <h2 id="avant-achat-titre" className="mt-2 text-2xl font-bold text-[#0B3A63]">
        Votre destinataire acceptera-t-il ce document ?
      </h2>
      <p className="mt-3 max-w-4xl leading-relaxed text-[#475569]">
        Certif-Scope produit un document CO₂e indicatif à partir de vos dépenses externes,
        et non un bilan carbone complet. L’acceptation dépend des exigences de la personne
        ou de l’organisme qui vous demande un justificatif.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-[#0B3A63]/10 bg-white p-5">
          <h3 className="font-bold text-[#0B3A63]">Adapté à envisager</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#475569]">
            Une information CO₂e indicative, fondée sur les dépenses, est demandée et
            le destinataire accepte explicitement cette méthode et ses limites.
          </p>
        </article>
        <article className="rounded-xl border border-[#0B3A63]/10 bg-white p-5">
          <h3 className="font-bold text-[#0B3A63]">À confirmer avant commande</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#475569]">
            La demande indique seulement « bilan carbone », « document fournisseur »
            ou « justificatif CO₂ ». Transmettez l’exemple PDF pour faire valider son périmètre.
          </p>
        </article>
        <article className="rounded-xl border border-[#0B3A63]/10 bg-white p-5">
          <h3 className="font-bold text-[#0B3A63]">Non adapté</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#475569]">
            Un inventaire GES complet, des Scopes 1/2/3 détaillés, une certification,
            une vérification externe ou un reporting CSRD/ESRS sont obligatoires.
          </p>
        </article>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <a href="/api/sample" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0B3A63] underline">
          Voir le PDF exemple gratuit
        </a>
        <a href={mailto} className="font-semibold text-[#0B3A63] underline">
          Demander l’accord du destinataire par e-mail
        </a>
        <Link href="/fr/product/methodology/" className="font-semibold text-[#0B3A63] underline">
          Vérifier les catégories et la méthode
        </Link>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[#475569]">
        En cas de doute, attendez la confirmation du destinataire avant de payer.
      </p>
    </section>
  );
}
