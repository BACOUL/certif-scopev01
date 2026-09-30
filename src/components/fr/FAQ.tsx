// PATH: src/components/fr/FAQFR.tsx
"use client";

import { useId, useState } from "react";

export default function FAQFR() {
  const uid = useId();
  const [open, setOpen] = useState<number | null>(0);
  const toggle = (i: number) => setOpen(current => current === i ? null : i);

  const items = [
  {
    "q": "Est-ce adapté à ma demande ?",
    "a": "Certif-Scope fournit une estimation indicative fondée sur sept catégories de dépenses externes. Envoyez l’exemple à votre destinataire pour confirmer qu’il accepte cette méthode et ce périmètre. L’absence de norme imposée ne garantit pas son acceptation. Le document ne remplace pas un audit, un inventaire GES complet ou un reporting réglementaire."
  },
  {
    "q": "Quelles données dois-je préparer ?",
    "a": "Préparez le nom de l’entreprise, l’année de référence et vos dépenses externes annuelles hors taxes en euros : numérique, services professionnels, biens, logistique, déplacements, hébergement et événements, autres achats externes. Chaque dépense doit être comptée une seule fois. Renseignez 0 uniquement pour une catégorie réellement nulle ; une donnée inconnue doit être complétée."
  },
  {
    "q": "Que reçois-je pour 89 € ?",
    "a": "Un PDF personnalisé indiquant votre entreprise, l’année, la date d’émission, l’estimation CO₂e agrégée, la méthode et ses limites, ainsi que les éléments de vérification documentaire. Le prix est par document, sans abonnement. Le support peut être contacté pour une question sur la commande ou un incident de téléchargement ; un audit et une validation externe des émissions ne sont pas inclus."
  },
  {
    "q": "Quelle méthode et quels coefficients sont utilisés ?",
    "a": "Le calcul multiplie les dépenses de chaque catégorie par un coefficient interne, puis additionne les résultats. La page Méthodologie publie les valeurs, unités, version, exemple de calcul et limites. Ces coefficients ne sont pas présentés comme certifiés ou validés par un organisme externe. Le secteur déclaré ne modifie pas les coefficients."
  },
  {
    "q": "Puis-je envoyer le même PDF à plusieurs destinataires ?",
    "a": "Oui, pour la même entreprise, la même année de référence et les mêmes données, si chaque destinataire accepte son périmètre. Les packs servent à créer plusieurs documents distincts, pas à multiplier les exemplaires d’un même PDF."
  },
  {
    "q": "Comment fonctionnent les packs ?",
    "a": "Après confirmation du paiement, les clés sont envoyées à l’adresse email utilisée pour la commande. Chaque clé permet de générer une attestation et doit être utilisée dans les 365 jours suivant sa création. Saisissez et vérifiez une clé dans le formulaire avant de générer le document. Si l’email n’arrive pas, vérifiez les courriers indésirables puis contactez le support sans racheter le pack."
  },
  {
    "q": "Puis-je corriger une erreur après émission ?",
    "a": "Vérifiez vos données dans le récapitulatif avant de payer. Après émission, contactez le support avec la référence de commande et la correction demandée. Une réémission peut nécessiter un nouveau document ; elle n’est pas automatiquement gratuite. Les conditions vous seront précisées avant toute nouvelle commande."
  },
  {
    "q": "Que faire si le téléchargement échoue ou si je perds mon PDF ?",
    "a": "En cas d’échec, réessayez depuis la page de retour et contactez le support si nécessaire, sans repasser commande. Pour un paiement unitaire, vérifiez aussi l’email de livraison prévu par le service et les courriers indésirables. Archivez votre PDF dès réception : Certif-Scope ne conserve pas de copie récupérable. Une réémission d’un document perdu doit être examinée par le support."
  },
  {
    "q": "Que confirme la vérification documentaire ?",
    "a": "Le QR code donne accès aux données documentaires transmises. Leur lecture ne prouve pas, à elle seule, l’authenticité du PDF. Les éléments de signature nécessitent un contrôle technique distinct. Aucune de ces opérations ne valide les dépenses déclarées ou les émissions réelles."
  }
];


  return (
    <section
      id="faq"
      data-section="faq"
      className="relative w-full py-12 md:py-16 bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F3FBFC] -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        <p className="inline-flex items-center rounded-full border border-[#0B3A63]/10 bg-white/90 px-4 py-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] text-[#0B3A63]/75 shadow-sm mx-auto mb-5">
          Avant et après votre commande
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] text-center mb-5 tracking-tight">
          Vos questions avant de commander
        </h2>

        <p className="text-center text-[#475569] max-w-3xl mx-auto text-lg leading-relaxed mb-8">
          Données à préparer, contenu du document, packs et assistance : les informations utiles pour décider et recevoir votre PDF.
        </p>

        <div className="space-y-4" role="list">
          {items.map((item, i) => {
            const btnId = `faq-fr-${uid}-btn-${i}`;
            const panelId = `faq-fr-${uid}-panel-${i}`;

            return (
              <div
                key={`faq-fr-${i}-${item.q}`}
                role="listitem"
                className="overflow-hidden rounded-[20px] border border-[#0B3A63]/10 bg-white shadow-sm"
              >
                <button
                  id={btnId}
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={open === i}
                  aria-controls={panelId}
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1FB6C1] focus-visible:outline-offset-2"
                >
                  <span className="font-semibold text-[#0B3A63] leading-relaxed">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-xl font-semibold text-[#1FB6C1]"
                  >
                    {open === i ? "−" : "+"}
                  </span>
                </button>

                {open === i && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="px-6 pb-6 text-[#475569] text-sm md:text-[15px] leading-relaxed"
                  >
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/fr/bilan-carbone-pme/"
            className="inline-flex items-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-sm font-semibold text-[#0B3A63] shadow-sm transition-colors hover:text-[#1FB6C1] hover:border-[#1FB6C1]/30"
            aria-label="Lire le guide complet sur le bilan carbone PME"
          >
            Lire le guide complet sur le bilan carbone PME →
          </a>
        </div>

        <div className="mt-10 max-w-3xl mx-auto rounded-[20px] border border-[#0B3A63]/10 bg-white/90 p-5 md:p-6 shadow-sm">
          <p className="text-center text-xs md:text-sm text-[#64748B] leading-relaxed">
            Estimation indicative basée sur les dépenses. Non auditée, non conforme
            CSRD/ESRS, sans couverture complète des scopes 1, 2 et 3, et ne remplace
            pas un inventaire complet des émissions. Les résultats dépendent des
            informations fournies par l’utilisateur.
          </p>
        </div>
      </div>
    </section>
  );
}
