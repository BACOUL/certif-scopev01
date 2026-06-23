# Audit pre-activation de-DE

SHA audite : `2914b64bec284dc2ad18e54c52803794989f3f31`

Date de l'audit : 2026-06-23

Branche d'audit : `audit-de-pre-activation`

## 1. Resume executif

Pret pour activation publique : non.

La version allemande est largement presente dans le code et couvre presque tout l'inventaire FR -> DE attendu, mais elle ne doit pas encore etre activee publiquement. Les protections runtime/staging sont encore en place, ce qui est volontaire a cette etape. L'audit identifie aussi plusieurs points a corriger avant une future PR d'activation `/de/*`.

Conditions restantes avant activation publique :

- creer ou arbitrer la route attendue `/de/erfolg/`, equivalente au parcours `/success` ;
- supprimer, rediriger ou documenter les routes DE hors route map : `/de/pricing/` et `/de/why-companies-ask/` ;
- remplacer les liens internes restants vers `/de/pricing` et `/de/why-companies-ask` par les routes DE principales validees ;
- harmoniser les declarations robots page-level DE : plusieurs pages declarent encore `robots: { index: true, follow: true }` alors que la politique temporaire impose `noindex, follow` ;
- preparer une PR finale separee pour adapter les redirections `/de` et `/de/:path*`, retirer le header global `X-Robots-Tag: noindex, follow`, verifier les canonicals, sitemap et hreflang DE, puis lancer une QA finale.

Risques restants :

- risque d'activation incomplete si `/de/erfolg/` reste absent ;
- risque de duplication ou de confusion SEO avec les routes historiques `/de/pricing/` et `/de/why-companies-ask/` ;
- risque de contradiction metadata si des pages conservent `robots: index` pendant que `/de/*` reste en staging/noindex ;
- risque de parcours utilisateur moins propre si la page d'accueil DE continue de pointer vers les anciennes routes.

## 2. Inventaire FR -> DE

Sources comparees :

- `docs/localization/localization-inventory-fr-source.md`
- `docs/localization/de-DE-route-map.md`
- routes reelles `src/app/de/**/page.tsx`

| Source FR | Route DE attendue | Etat reel |
| --- | --- | --- |
| `/fr/` | `/de/` | presente |
| `/fr/generate/` | `/de/erstellen/` | presente |
| `/success` | `/de/erfolg/` | manquante |
| `/fr/cancel/` | `/de/abbruch/` | presente |
| `/fr/pricing/` | `/de/preise/` | presente |
| `/fr/contact/` | `/de/kontakt/` | presente |
| `/fr/product/` | `/de/produkt/` | presente |
| `/fr/product/compliance/` | `/de/grenzen-und-compliance/` | presente |
| `/fr/product/methodology/` | `/de/methodik/` | presente |
| `/fr/verify/` | `/de/pruefen/` | presente |
| `/fr/verify/demo/` | `/de/pruefen/demo/` | presente |
| `/fr/verify/technical/` | `/de/technische-pruefung/` | presente |
| `/fr/bilan-carbone-pme/` | `/de/co2-bilanz-kmu/` | presente |
| `/fr/bilan-carbone-pme/cout/` | `/de/co2-bilanz-kmu/kosten/` | presente |
| `/fr/bilan-carbone-pme/exemple/` | `/de/co2-bilanz-kmu/beispiel/` | presente |
| `/fr/bilan-carbone-pme/modele-pdf/` | `/de/co2-bilanz-kmu/pdf-vorlage/` | presente |
| `/fr/bilan-carbone-pme/obligation/` | `/de/co2-bilanz-kmu/pflicht/` | presente |
| `/fr/bilan-carbone-appel-offres/` | `/de/co2-angaben-ausschreibung/` | presente |
| `/fr/bilan-carbone-fournisseur/` | `/de/co2-nachweis-lieferanten/` | presente |
| `/fr/bilan-carbone-entreprise/` | `/de/co2-fussabdruck-unternehmen/` | presente |
| `/fr/attestation-carbone/` | `/de/co2-bescheinigung/` | presente |
| `/fr/attestation-co2-pme/` | `/de/co2-bescheinigung-kmu/` | presente |
| `/fr/scope-1-2-3-explication/` | `/de/scope-1-2-3-erklaert/` | presente |
| `/fr/bilan-carbone-banque-pme/` | `/de/bank-esg-unterlagen-kmu/` | presente |
| `/fr/bilan-carbone-assurance-pme/` | `/de/versicherung-esg-unterlagen-kmu/` | presente |
| `/fr/document-carbone-fournisseur/` | `/de/co2-dokument-lieferanten/` | presente |
| `/fr/difference-bilan-carbone-attestation-co2e/` | `/de/co2-bilanz-vs-co2-bescheinigung/` | presente |
| `/fr/why-companies-ask/` | `/de/warum-unternehmen-co2-angaben-anfordern/` | presente |
| `/fr/why-companies-ask/guide/` | `/de/warum-unternehmen-co2-angaben-anfordern/leitfaden/` | presente |
| `/fr/why-companies-ask/attestation-carbone-fournisseur/` | `/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten/` | presente |
| `/fr/why-companies-ask/attestation-carbone-appel-offres/` | `/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-ausschreibung/` | presente |
| `/fr/why-companies-ask/attestation-carbone-pme/` | `/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-kmu/` | presente |
| `/fr/why-companies-ask/exigences-co2-banques-assurances/` | `/de/warum-unternehmen-co2-angaben-anfordern/banken-versicherungen/` | presente |
| `/fr/why-companies-ask/preuve-carbone-entreprise/` | `/de/warum-unternehmen-co2-angaben-anfordern/co2-nachweis-unternehmen/` | presente |
| `/fr/partners/` | `/de/partner/` | presente |
| `/fr/privacy/` | `/de/datenschutz/` | presente |
| `/fr/terms/` | `/de/agb/` | presente |
| `/fr/cookies/` | `/de/cookies/` | presente |
| `/fr/legal/` | `/de/impressum/` | presente |
| `/fr/data-processing/` | `/de/datenverarbeitung/` | presente |

Routes DE manquantes :

- `/de/erfolg/`

Routes DE presentes hors route map :

- `/de/pricing/` : page de redirection vers `/de/preise/`. Elle existe techniquement, mais la route principale validee est `/de/preise/`.
- `/de/why-companies-ask/` : ancienne route anglaise sous prefixe DE. Elle coexiste avec le hub valide `/de/warum-unternehmen-co2-angaben-anfordern/`.

Routes DE redondantes ou anciennes :

- `/de/pricing/` est redondante avec `/de/preise/`.
- `/de/why-companies-ask/` est redondante avec `/de/warum-unternehmen-co2-angaben-anfordern/` et doit etre arbitree avant activation.

## 3. Politique staging/noindex actuelle

Document de politique :

- `docs/localization/de-DE-runtime-seo-policy.md` indique que `/de/*` reste une zone de localisation en construction, non destinee a l'indexation publique.

Etat de `next.config.js` :

- `/de` redirige encore vers `/fr/`.
- `/de/:path*` redirige encore vers `/fr/`.
- Ces redirections n'ont pas ete modifiees dans cette PR d'audit.

Etat de `middleware.ts` :

- le middleware applique encore `X-Robots-Tag: noindex, follow` si le chemin est `/de` ou commence par `/de/`.
- le matcher inclut encore `/de/:path*`.
- Le header global n'a pas ete modifie dans cette PR d'audit.

Etat robots page-level DE :

- `src/app/de/layout.tsx` declare un metadata global `robots: { index: false, follow: true }`.
- Les pages creees dans les dernieres PRs declarent majoritairement `robots: { index: false, follow: true }`.
- Blocage avant activation/stabilisation : 19 pages DE declarent encore `robots: { index: true, follow: true }` au niveau page, ce qui contredit la politique temporaire documentee tant que `/de/*` reste staging/noindex.

Pages DE avec `robots: index` detecte :

- `/de/`
- `/de/bank-esg-unterlagen-kmu/`
- `/de/co2-angaben-ausschreibung/`
- `/de/co2-bescheinigung/`
- `/de/co2-bescheinigung-kmu/`
- `/de/co2-bilanz-kmu/`
- `/de/co2-bilanz-kmu/beispiel/`
- `/de/co2-bilanz-kmu/kosten/`
- `/de/co2-bilanz-kmu/pdf-vorlage/`
- `/de/co2-bilanz-kmu/pflicht/`
- `/de/co2-bilanz-vs-co2-bescheinigung/`
- `/de/co2-dokument-lieferanten/`
- `/de/co2-nachweis-lieferanten/`
- `/de/erstellen/`
- `/de/grenzen-und-compliance/`
- `/de/methodik/`
- `/de/pruefen/demo/`
- `/de/scope-1-2-3-erklaert/`
- `/de/technische-pruefung/`
- `/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten/`

Note : le header runtime `X-Robots-Tag: noindex, follow` protege encore ces routes en production, mais les declarations page-level doivent etre harmonisees avant une activation propre.

## 4. Audit liens internes

Scan effectue sur `src/app/de/**/*.tsx` et `src/app/de/**/*.ts`.

Liens `/fr/` involontaires :

- aucun lien de navigation ou CTA vers `/fr/` detecte dans les pages DE actives ;
- exception detectee : `src/app/de/why-companies-ask/page.tsx` contient un `languages.fr` dans les alternates/hreflang. C'est une exception acceptable en soi, mais la page est une route ancienne hors route map.

Routes DE inexistantes :

- aucun lien interne `/de/...` ne pointe vers une route sans `page.tsx` correspondant.

Routes anciennes ou non principales :

- `src/app/de/_components/HomeSections.tsx` contient encore un lien vers `/de/pricing`, alors que la route principale validee est `/de/preise/`.
- `src/app/de/_components/HomeSections.tsx` contient encore des liens vers `/de/why-companies-ask`, alors que la route principale validee est `/de/warum-unternehmen-co2-angaben-anfordern/`.

Liens explicitement recherches :

- `href="/fr/"` : aucun lien de contenu detecte dans `src/app/de`.
- `https://www.certif-scope.com/fr/` : uniquement l'alternate `fr` de la route ancienne `/de/why-companies-ask/`.
- `/de/pricing` : detecte dans `HomeSections.tsx`; correction recommandee vers `/de/preise/`.
- `/de/verify`, `/de/generate`, `/de/product`, `/de/contact`, `/de/legal`, `/de/privacy`, `/de/terms` : pas de lien interne direct detecte ; les equivalents allemands principaux sont utilises ailleurs (`/de/pruefen/`, `/de/erstellen/`, `/de/produkt/`, `/de/kontakt/`, `/de/impressum/`, `/de/datenschutz/`, `/de/agb/`).

Corrections recommandees :

- remplacer les liens internes `/de/pricing` par `/de/preise/` ;
- remplacer les liens internes `/de/why-companies-ask` par `/de/warum-unternehmen-co2-angaben-anfordern/` ;
- supprimer ou rediriger explicitement les routes anciennes dans une PR dediee si elles doivent rester disponibles.

## 5. Audit SEO technique

Metadata :

- les routes DE principales disposent globalement de titres, descriptions, Open Graph et canonicals DE ;
- plusieurs pages utilisent `pageUrl`, ce qui reste correct si la constante pointe vers l'URL DE canonique ;
- la route ancienne `/de/why-companies-ask/` utilise encore un slug anglais dans canonical et alternates.

Canonical :

- les pages DE localisees recentes pointent vers des canonicals `/de/.../` ;
- les routes anciennes `/de/pricing/` et `/de/why-companies-ask/` doivent etre arbitrees avant activation pour eviter la coexistence de canonicals redondantes.

Hreflang / alternates :

- plusieurs pages DE declarent uniquement `de`, ce qui est coherent avec l'etat staging ;
- la route ancienne `/de/why-companies-ask/` declare aussi `en` et `fr`, mais elle n'est plus la route DE principale du cluster.

Sitemap :

- `public/sitemap.xml` reste volontairement FR-only ;
- aucune URL `/de/` n'est exposee dans le sitemap actuel ;
- une future PR d'activation devra generer ou verifier le sitemap DE et les hreflang.

JSON-LD :

- les pages DE localisees contiennent des JSON-LD WebPage, BreadcrumbList, Service, Organization ou FAQPage selon les sources FR ;
- aucun JSON-LD ne doit etre considere publiable tant que les routes restent globalement redirigees et noindexees ;
- la route ancienne `/de/why-companies-ask/` possede un JSON-LD WebPage avec l'ancien slug et doit etre arbitree.

FAQPage :

- les pages qui en ont besoin contiennent des FAQPage equivalents ;
- les pages sans FAQ cote FR n'ont pas toutes une FAQ ajoutee, ce qui est coherent avec la logique de miroir.

BreadcrumbList :

- les pages SEO et legales recentes ont des BreadcrumbList quand la structure source le justifie ;
- les pages utilitaires simples n'en ont pas toujours, ce qui correspond au comportement source.

Absence de promesses SEO contradictoires :

- le contenu et les JSON-LD restent en majorite prudents ;
- la contradiction principale reste technique : certaines pages declarent `robots: index` alors que la politique staging/noindex reste active.

## 6. Audit wording reglementaire

Scan effectue sur `src/app/de`.

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
- `vollständige CO2-Bilanz`
- `vollständige Treibhausgasbilanz`
- `garantiert`
- `anerkannt`
- `konform`

Resultat :

- aucune promesse directe d'acceptation automatique, de reconnaissance officielle, de certification, d'audit, de conformite CSRD/ESRS ou de remplacement d'une CO2-Bilanz complete n'a ete detectee ;
- les occurrences detectees sont majoritairement negatives ou restrictives, par exemple `keine Zertifizierung`, `kein Audit`, ou des formulations indiquant qu'un document n'est pas reconnu/reglementaire ;
- une occurrence neutre de `anerkannten methodischen Bezugspunkte` apparait dans la page limites/compliance ; elle ne constitue pas une promesse d'acceptation ou de reconnaissance officielle du document.

Pages a surveiller avant activation :

- `/de/why-companies-ask/`, car elle est ancienne, hors route map et contient un wording plus ancien ;
- les pages qui declarent encore `robots: index`, afin de les aligner sur la politique staging ou de les basculer proprement lors de l'activation finale.

Correction recommandee :

- ne pas corriger le wording dans cette PR d'audit ;
- relire les pages hors route map et les pages `robots: index` dans une PR de nettoyage pre-activation ou dans la PR finale d'activation.

## 7. Audit parcours utilisateur DE

Routes controlees :

- `/de/`
- `/de/preise/`
- `/de/erstellen/`
- `/de/pruefen/`
- `/de/technische-pruefung/`
- `/de/pruefen/demo/`
- pages legales DE
- pages produit DE
- pages SEO DE

Creation :

- `/de/erstellen/` existe ;
- les CTA de generation pointent globalement vers `/de/erstellen/` ou vers les endpoints runtime existants ;
- aucun runtime de generation n'a ete modifie.

Prix :

- `/de/preise/` existe et correspond a la route principale validee ;
- `/de/pricing/` existe comme redirect local vers `/de/preise/`, mais reste hors route map ;
- un lien interne homepage pointe encore vers `/de/pricing`.

Verification :

- `/de/pruefen/`, `/de/technische-pruefung/` et `/de/pruefen/demo/` existent ;
- les liens internes controles pointent vers ces routes allemandes, pas vers `/de/verify`.

Pages legales :

- `/de/datenschutz/`, `/de/agb/`, `/de/impressum/`, `/de/datenverarbeitung/` et `/de/cookies/` existent ;
- elles sont en `noindex, follow` temporaire.

Pages produit :

- `/de/produkt/`, `/de/methodik/`, `/de/grenzen-und-compliance/`, `/de/co2-bescheinigung/`, `/de/co2-bescheinigung-kmu/` et pages associees existent ;
- les pages produit historiques doivent etre harmonisees sur la politique robots temporaire.

Pages SEO :

- la plupart des pages SEO DE attendues existent ;
- `/de/erfolg/` manque ;
- `/de/why-companies-ask/` est une ancienne page a arbitrer face au hub valide `/de/warum-unternehmen-co2-angaben-anfordern/`.

Absence de retour involontaire vers `/fr/` :

- aucun CTA ou lien de navigation DE vers `/fr/` n'a ete detecte ;
- l'unique trace `/fr/` dans `src/app/de` est un alternate/hreflang sur l'ancienne page `/de/why-companies-ask/`.

## 8. Build

Commande utilisee :

```bash
next build --webpack
```

Resultat :

- exit code 0 ;
- compilation OK ;
- TypeScript OK ;
- collecte des pages OK ;
- generation statique OK ;
- routes DE generees visibles dans la sortie, y compris les routes attendues et les anciennes routes `/de/pricing` et `/de/why-companies-ask`.

Warnings :

- seuls warnings observes : `baseline-browser-mapping` stale data warnings.

## 9. Recommandation finale

Ne pas activer publiquement `/de/*` maintenant.

Une future PR d'activation publique `/de/*` peut etre preparee seulement apres resolution des points suivants :

1. creer, rediriger ou arbitrer `/de/erfolg/` ;
2. remplacer les liens internes vers `/de/pricing` par `/de/preise/` ;
3. remplacer les liens internes vers `/de/why-companies-ask` par `/de/warum-unternehmen-co2-angaben-anfordern/` ;
4. supprimer, rediriger ou documenter les routes hors route map `/de/pricing/` et `/de/why-companies-ask/` ;
5. harmoniser toutes les pages DE avec `robots: { index: false, follow: true }` tant que le staging/noindex global reste actif, ou basculer proprement toutes les couches SEO dans la PR finale ;
6. verifier les canonicals DE finales ;
7. generer ou verifier sitemap/hreflang DE ;
8. relancer l'audit liens, l'audit JSON-LD, l'audit wording reglementaire et l'audit parite FR -> DE ;
9. lancer un build final ;
10. confirmer que `/fr/`, `fr-clean` et `main` restent intacts.

Si ces points sont corriges, recommander ensuite une PR separee d'activation publique `/de/*` qui modifie explicitement les redirections, le header global noindex, le sitemap/hreflang et les canonicals necessaires.
