# Audit post-nettoyage de-DE

SHA audite : `1ebc149cb59dacb6c44052c21ad8a0203cae8355`

Date de l'audit : 2026-06-23

Branche d'audit : `audit-de-post-cleanup`

## 1. Resume executif

Blocages #76 corriges : oui.

Pret pour preparer une PR finale d'activation publique `/de/*` : oui, sous reserve que cette future PR reste dediee a l'activation et traite explicitement les couches runtime, sitemap, hreflang, canonical et QA finale.

Pret pour activation publique immediate sans PR dediee : non.

Conditions restantes :

- adapter ou supprimer les redirections globales `/de` et `/de/:path*` vers `/fr/` dans une PR finale separee ;
- retirer ou adapter le header global `X-Robots-Tag: noindex, follow` pour `/de` et `/de/*` dans cette meme PR finale ;
- verifier les canonical allemandes finales ;
- generer ou verifier sitemap et hreflang allemands ;
- lancer une QA finale liens, JSON-LD, wording reglementaire et parcours utilisateur avant publication.

La PR #77 a corrige les blocages pre-activation documentes par l'audit #76 sans ouvrir l'indexation publique allemande.

## 2. Resolution des blocages #76

### `/de/erfolg/`

Etat : corrige.

- `src/app/de/erfolg/page.tsx` existe.
- `src/app/de/erfolg/SuccessClientDE.tsx` existe.
- La page reprend le parcours source partage `/success` et conserve le comportement de session, type de paiement, telechargement PDF et messages d'etat.
- La page applique `robots: { index: false, follow: true }`.
- Aucun runtime checkout, Stripe, PDF, signature, verification, generation ou calcul carbone n'a ete modifie.

### `/de/pricing/`

Etat : corrige.

- `src/app/de/pricing/page.tsx` n'existe plus.
- La route principale prix reste `/de/preise/`.
- Aucun lien interne actif dans `src/app/de` ne pointe encore vers `/de/pricing` ou `/de/pricing/`.

### `/de/why-companies-ask/`

Etat : corrige.

- `src/app/de/why-companies-ask/page.tsx` n'existe plus.
- La route principale du cluster reste `/de/warum-unternehmen-co2-angaben-anfordern/`.
- Aucun lien interne actif dans `src/app/de` ne pointe encore vers `/de/why-companies-ask` ou `/de/why-companies-ask/`.

### Anciens liens internes

Etat : corrige.

Scan effectue sur `src/app/de`.

Anciens chemins recherches :

- `/de/pricing`
- `/de/why-companies-ask`
- `/de/verify`
- `/de/generate`
- `/de/product`
- `/de/contact`
- `/de/privacy`
- `/de/terms`
- `/de/legal`
- `href="/fr/"`
- `https://www.certif-scope.com/fr/`

Resultat : aucune occurrence active detectee dans `src/app/de`.

Les routes allemandes validees sont utilisees :

- `/de/preise/`
- `/de/warum-unternehmen-co2-angaben-anfordern/`
- `/de/pruefen/`
- `/de/erstellen/`
- `/de/produkt/`
- `/de/kontakt/`
- `/de/datenschutz/`
- `/de/agb/`
- `/de/impressum/`
- `/de/erfolg/`

Exceptions observees hors `src/app/de` :

- les anciens chemins restent mentionnes dans des documents d'audit ou de decision, ce qui est normal pour l'historique ;
- aucune exception active de navigation, CTA, hreflang ou redirect DE n'a ete detectee dans les pages allemandes.

### Robots page-level

Etat : corrige.

- Aucune page `src/app/de/**/page.tsx` ne contient `robots: { index: true, follow: true }`.
- Aucune page `src/app/de/**/page.tsx` ne contient `index: true, follow: true`.
- Aucune page `src/app/de/**/page.tsx` ne contient `index: true`.
- Les pages DE sont protegees en `noindex, follow` au niveau page ou via le layout allemand.

Note technique :

- `src/app/de/pruefen/page.tsx` ne redeclare pas de metadata `robots` au niveau page ;
- elle herite de `src/app/de/layout.tsx`, qui declare `robots: { index: false, follow: true }` ;
- elle ne contredit donc pas la politique temporaire.

## 3. Politique staging actuelle

### Etat de `next.config.js`

La protection globale n'a pas ete modifiee.

Regles observees :

- `/de` redirige encore vers `/fr/`.
- `/de/:path*` redirige encore vers `/fr/`.

Lignes observees :

- `next.config.js` contient encore `{ source: "/de", destination: "/fr/", permanent: true }`.
- `next.config.js` contient encore `{ source: "/de/:path*", destination: "/fr/", permanent: true }`.

### Etat de `middleware.ts`

La protection noindex globale n'a pas ete modifiee.

Regles observees :

- si `pathname === "/de"` ou `pathname.startsWith("/de/")`, le middleware applique `X-Robots-Tag: noindex, follow` ;
- le matcher inclut encore `/de/:path*`.

### Etat robots page-level

Les pages allemandes ne declarent plus de `robots: index`.

La strategie reste coherente avec `docs/localization/de-DE-runtime-seo-policy.md` : tant que `/de/*` reste en staging, les pages DE ne doivent pas se declarer indexables.

## 4. Audit liens

Scan effectue sur toutes les pages et composants sous `src/app/de`.

Liens anciens restants : aucun.

Liens `/fr/` involontaires : aucun dans `src/app/de`.

Routes DE hors route map actives : aucune des deux routes signalees par #76 ne reste active comme page :

- `/de/pricing/` : supprimee ;
- `/de/why-companies-ask/` : supprimee.

Routes DE validees utilisees :

- prix : `/de/preise/` ;
- cluster explicatif : `/de/warum-unternehmen-co2-angaben-anfordern/` ;
- verification : `/de/pruefen/` ;
- creation : `/de/erstellen/` ;
- produit : `/de/produkt/` ;
- contact : `/de/kontakt/` ;
- confidentialite : `/de/datenschutz/` ;
- conditions : `/de/agb/` ;
- mentions legales : `/de/impressum/` ;
- succes : `/de/erfolg/`.

Corrections necessaires : aucune correction de liens identifiee avant la PR finale d'activation.

## 5. Audit wording rapide

Scan effectue sur la nouvelle page `/de/erfolg/` et sur les pages DE modifiees par #77.

Formulations dangereuses recherchees :

- `garantiert akzeptiert`
- `automatisch akzeptiert`
- `offiziell anerkannt`
- `gesetzlich anerkannt`
- `rechtssicher`
- `rechtsgültig`
- `zertifiziert`
- `Zertifizierung`
- `Audit`
- `CSRD-konform`
- `ESRS-konform`
- `garantiert`
- `anerkannt`
- `konform`

Resultat :

- aucune promesse d'acceptation automatique detectee ;
- aucune reconnaissance officielle promise ;
- aucune conformite reglementaire promise ;
- aucune certification ou audit ajoute ;
- aucune garantie de decision client, banque, assureur, acheteur ou donneur d'ordre ajoutee.

Occurrences surveillees dans les pages DE existantes :

- `anerkannt` apparait dans des formulations prudentes ou negatives, par exemple des references methodiques reconnues ou l'absence de reconnaissance reglementaire ;
- ces occurrences ne constituent pas une promesse absolue.

Corrections necessaires : aucune correction wording identifiee dans le perimetre post-nettoyage.

## 6. Build

Commande utilisee :

```bash
next build --webpack
```

Resultat :

- exit code 0 ;
- compilation OK ;
- TypeScript OK ;
- collecte des pages OK ;
- generation statique OK.

Warnings :

- seuls warnings observes : `baseline-browser-mapping` stale data warnings.

La sortie de build liste `/de/erfolg` et ne liste plus `/de/pricing` ni `/de/why-companies-ask`.

## 7. Recommandation finale

Les blocages pre-activation #76 sont corriges.

Recommandation : preparer une PR finale separee d'activation publique `/de/*`.

Cette PR finale devra :

- adapter ou supprimer les redirections `/de` et `/de/:path*` vers `/fr/` ;
- retirer ou adapter le header global `X-Robots-Tag: noindex, follow` sur `/de` et `/de/*` ;
- verifier les canonical DE finales ;
- generer ou verifier sitemap et hreflang DE ;
- relancer un audit liens ;
- relancer un audit JSON-LD ;
- relancer un audit wording reglementaire ;
- lancer une QA finale du parcours utilisateur ;
- lancer un build final ;
- confirmer que `/fr/`, `fr-clean` et `main` restent intacts.

Ne pas activer publiquement `/de/*` sans cette PR finale dediee.
