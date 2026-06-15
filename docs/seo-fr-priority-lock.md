# Verrouillage priorité SEO France

## Décision prise pour `/`

Décision appliquée : redirection permanente de la racine `/` vers `/fr/`.

La redirection est définie dans `next.config.js` avec :

- source : `/`
- destination : `/fr/`
- permanent : `true`

Cette redirection est limitée à la racine exacte. Elle ne redirige pas automatiquement les routes root comme `/api/*`, `/success/`, `/cancel/`, `/verify/`, `/generate/`, les assets, `robots.txt` ou `sitemap.xml`.

La page root `src/app/page.tsx` reste physiquement présente, mais elle est désormais un garde-fou SEO :

- `robots: { index: false, follow: true }`
- canonical vers `https://www.certif-scope.com/fr/`
- suppression des alternates EN/FR/DE historiques sur cette page

## Décision prise pour les pages EN/root

Les pages root/EN restent présentes physiquement pour ne pas casser l’application ni supprimer de contenu.

Mesures appliquées :

- le layout global ne déclare plus de canonical globale vers `/` ;
- le layout global ne déclare plus d’alternates EN/FR ;
- les signaux globaux ont été francisés pour éviter que les pages root se présentent comme version prioritaire ;
- les redirections `/en/*` existantes sont conservées et continuent de pointer vers `/`, qui redirige ensuite vers `/fr/`.

Aucune redirection large des routes root n’a été ajoutée. Les routes techniques et transactionnelles restent accessibles.

## Décision prise pour `/de/`

Les pages DE ne sont pas supprimées et restent physiquement présentes.

Mesures appliquées :

- `src/app/de/layout.tsx` passe en `robots: { index: false, follow: true }` ;
- `middleware.ts` ajoute un header HTTP `X-Robots-Tag: noindex, follow` pour `/de` et `/de/*` ;
- `/de/` reste hors sitemap, conformément à la passe sitemap France uniquement.

Cette solution évite de développer ou supprimer l’allemand tout en empêchant `/de/` de concurrencer `/fr/`.

## Modifications canonical / noindex

- `src/app/layout.tsx`
  - suppression de la canonical globale vers `https://www.certif-scope.com/` ;
  - suppression des alternates globaux EN/FR ;
  - Open Graph global aligné sur `/fr/` ;
  - JSON-LD global aligné sur `/fr/` et `fr-FR` ;
  - `html lang` passé à `fr` pour refléter la priorité actuelle.

- `src/app/page.tsx`
  - root en `noindex, follow` ;
  - canonical vers `https://www.certif-scope.com/fr/` ;
  - suppression des alternates EN/FR/DE ;
  - Open Graph aligné sur `/fr/`.

- `src/app/de/layout.tsx`
  - DE en `noindex, follow`.

## Modifications dans `middleware.ts`

- Ajout du header `X-Robots-Tag: noindex, follow` pour `/de` et `/de/*`.
- Aucun changement sur les routes `/fr/`.
- Aucun changement sur les routes `/api/*` et `/verify/*`, qui gardent le traitement `no-store` existant.
- Aucun changement sur les bypass assets/fichiers publics.
- Aucune redirection nouvelle dans le middleware.

## Modifications dans `next.config.js`

- Ajout d’une redirection permanente exacte : `/` -> `/fr/`.
- Conservation de la redirection domaine nu -> domaine `www`.
- Conservation des redirections `/en/*` existantes.
- Pas de redirection de `/fr/` vers une autre route.
- Pas de redirection globale des routes root.

## Risques évités

- Pas de redirection large des routes root vers `/fr/`, donc pas de casse sur `/api/*`, `/success/`, `/cancel/`, `/verify/`, `/generate/`, assets ou fichiers publics.
- Pas de canonical globale qui pourrait écraser les canonicals FR spécifiques.
- Pas de suppression physique des pages EN/root ou DE.
- Pas de modification de Stripe, webhook, génération PDF, vérification, sitemap ou robots.txt.
- Pas de boucle de redirection `/fr/`.

## Recommandations pour la relance internationale

Quand l’international sera réellement lancé :

- retirer la redirection `/` -> `/fr/` si la racine redevient une vraie page EN ou une page de choix de langue ;
- restaurer des `hreflang` complets seulement quand les pages EN/DE seront finalisées, indexables et alignées page à page ;
- remettre `/de/` en `index, follow` uniquement après audit éditorial et ajout contrôlé au sitemap ;
- éviter les hreflang vers des pages non finalisées, redirigées ou noindex ;
- décider si `/` doit devenir la home EN, une redirection géographique, ou une page neutre de sélection de langue.

## Vérification

- Audit effectué sur `src/app/layout.tsx`, `src/app/page.tsx`, `middleware.ts`, `next.config.js`, `src/app/de/layout.tsx` et les metadata DE principales.
- Redirection retenue : `/` -> `/fr/`, permanente et limitée à la racine exacte.
- DE retenu : pages conservées mais non indexables.
- EN/root retenu : pages conservées, mais la racine ne porte plus la priorité SEO.
