# Audit indexation SEO France

## Résumé de l’objectif

Cette passe nettoie l’indexation SEO pour une stratégie France uniquement. L’objectif est que Google identifie les pages françaises sous `/fr/` comme les pages importantes du site Certif-Scope, sans lancer l’international, sans créer de nouvelles pages SEO, et sans toucher au paiement, aux API, à Stripe, à la génération PDF ou à la logique produit.

## URLs FR conservées dans le sitemap

Le fichier `public/sitemap.xml` contient désormais uniquement les URLs françaises stratégiques suivantes, toutes vérifiées comme routes réelles sous `src/app/fr` :

- `https://www.certif-scope.com/fr/`
- `https://www.certif-scope.com/fr/bilan-carbone-pme/`
- `https://www.certif-scope.com/fr/bilan-carbone-appel-offres/`
- `https://www.certif-scope.com/fr/scope-1-2-3-explication/`
- `https://www.certif-scope.com/fr/product/`
- `https://www.certif-scope.com/fr/product/methodology/`
- `https://www.certif-scope.com/fr/product/compliance/`
- `https://www.certif-scope.com/fr/pricing/`
- `https://www.certif-scope.com/fr/generate/`
- `https://www.certif-scope.com/fr/verify/`
- `https://www.certif-scope.com/fr/why-companies-ask/`
- `https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-pme/`
- `https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-appel-offres/`
- `https://www.certif-scope.com/fr/why-companies-ask/exigences-co2-banques-assurances/`
- `https://www.certif-scope.com/fr/contact/`
- `https://www.certif-scope.com/fr/legal/`
- `https://www.certif-scope.com/fr/privacy/`
- `https://www.certif-scope.com/fr/terms/`
- `https://www.certif-scope.com/fr/cookies/`
- `https://www.certif-scope.com/fr/data-processing/`

## URLs retirées du sitemap

Les URLs suivantes étaient présentes ou représentées dans l’ancien sitemap et ont été retirées car non françaises, non prioritaires, incohérentes ou hors stratégie France :

- `https://www.certif-scope.com/`
- `https://www.certif-scope.com/pricing/`
- `https://www.certif-scope.com/product/`
- `https://www.certif-scope.com/product/methodology/`
- `https://www.certif-scope.com/product/methodology/compliance/`
- `https://www.certif-scope.com/why-companies-ask/`
- `https://www.certif-scope.com/partners/`
- `https://www.certif-scope.com/contact/`
- `https://www.certif-scope.com/faq/`
- `https://www.certif-scope.com/legal/`
- `https://www.certif-scope.com/privacy/`
- `https://www.certif-scope.com/terms/`
- `https://www.certif-scope.com/cookies/`
- `https://www.certif-scope.com/data-processing/`
- `https://www.certif-scope.com/fr/product/methodology/compliance/`
- `https://www.certif-scope.com/fr/partners/`
- `https://www.certif-scope.com/fr/about/`
- `https://www.certif-scope.com/fr/faq/`

## URLs non-FR exclues

Les routes root/EN restent physiquement présentes mais ne sont plus promues par le sitemap. Les routes DE restent également présentes mais exclues du sitemap dans cette passe. Les groupes exclus sont :

- root/EN : `/`, `/pricing/`, `/product/`, `/product/methodology/`, `/product/methodology/compliance/`, `/why-companies-ask/`, `/partners/`, `/contact/`, `/legal/`, `/privacy/`, `/terms/`, `/cookies/`, `/data-processing/`, etc.
- DE : `/de/`, `/de/pricing/`, `/de/why-companies-ask/`, et composants de navigation DE associés.
- technique/API : `/api/**`, `/success/`, `/cancel/`, `/error/`, `/test/`, routes Stripe et routes de vérification/génération root.

## URLs inexistantes ou incohérentes détectées

- Le sitemap pointait vers `/fr/product/methodology/compliance/`, mais la vraie route française est `/fr/product/compliance/`. Le sitemap a été corrigé.
- `/fr/product/methodology/compliance/` n’existe pas sous `src/app/fr`.
- `/fr/about/` et `/fr/faq/` étaient dans le sitemap mais ne font pas partie des routes françaises présentes dans l’arbre audité.
- Des pages FR existent mais restent volontairement exclues de cette passe car elles ne figurent pas dans la liste stratégique demandée : `/fr/bilan-carbone-entreprise/`, `/fr/bilan-carbone-fournisseur/`, `/fr/attestation-carbone/`, `/fr/partners/`, les sous-pages `/fr/bilan-carbone-pme/*`, `/fr/why-companies-ask/guide/`, `/fr/why-companies-ask/preuve-carbone-entreprise/`, `/fr/why-companies-ask/attestation-carbone-fournisseur/`, `/fr/verify/technical/`.

## Corrections faites dans `robots.txt`

- Ajout d’une autorisation explicite pour `/fr/`.
- Ajout d’autorisations explicites pour `/fr/generate/` et `/fr/verify/`, car ces pages sont conservées dans le sitemap FR.
- Conservation du blocage des routes techniques/sensibles : `/api/`, `/generate/`, `/verify/`, `/success/`, `/cancel/`, `/error/`, `/test/`.
- Conservation du blocage des URLs paramétrées avec `Disallow: /*?*` pour limiter les duplications.
- Conservation de la déclaration du sitemap : `https://www.certif-scope.com/sitemap.xml`.

## Corrections canonical / noindex

- `/fr/product/` : canonical normalisée avec slash final, Open Graph URL alignée, robots `index, follow` explicite.
- `/fr/product/methodology/` : ajout d’un layout metadata dédié avec canonical FR, Open Graph URL FR et robots `index, follow`.
- `/fr/product/compliance/` : ajout d’un layout metadata dédié avec canonical FR, Open Graph URL FR et robots `index, follow`.
- `/fr/generate/` : ajout d’une canonical FR, Open Graph URL FR et robots `index, follow`.
- `/fr/contact/` : ajout d’une canonical FR, Open Graph URL FR et robots `index, follow`.
- `/fr/cookies/` : ajout d’une canonical FR, Open Graph URL FR et robots `index, follow`.
- `/fr/data-processing/` : ajout d’une canonical FR, Open Graph URL FR et robots `index, follow`.
- `/fr/why-companies-ask/exigences-co2-banques-assurances/` : suppression du `noindex`, passage en `index, follow`, canonical propre vers sa propre URL FR, Open Graph URL alignée.

## Corrections header / footer

- Header FR : les routes principales pointent désormais vers les URLs finales françaises avec slash final, en cohérence avec `trailingSlash: true` dans `next.config.js`.
- Header FR : la détection d’état actif normalise les chemins avec ou sans slash pour éviter une régression visuelle.
- Footer FR : audit rapide effectué ; les liens principaux pointaient déjà vers des URLs `/fr/.../` avec slash final. Aucune modification nécessaire.

## Pages FR stratégiques manquantes à créer plus tard

Aucune page manquante dans la liste stratégique demandée. Toutes les URLs conservées dans le sitemap correspondent à une route réelle sous `src/app/fr`.

Pages existantes à réévaluer plus tard avant ajout éventuel au sitemap :

- `/fr/bilan-carbone-entreprise/`
- `/fr/bilan-carbone-fournisseur/`
- `/fr/attestation-carbone/`
- `/fr/bilan-carbone-pme/obligation/`
- `/fr/bilan-carbone-pme/cout/`
- `/fr/bilan-carbone-pme/exemple/`
- `/fr/bilan-carbone-pme/modele-pdf/`
- `/fr/why-companies-ask/guide/`
- `/fr/why-companies-ask/preuve-carbone-entreprise/`
- `/fr/why-companies-ask/attestation-carbone-fournisseur/`

## Prochaines recommandations SEO

- Normaliser dans une passe dédiée les anciennes canonicals FR sans slash final restantes sur certains gros fichiers déjà existants, notamment `/fr/scope-1-2-3-explication/`, `/fr/verify/`, `/fr/why-companies-ask/`, `/fr/legal/`, `/fr/privacy/`, `/fr/terms/` et certaines sous-pages éditoriales.
- Ajouter une stratégie claire `noindex` pour les pages root/EN et DE si l’international doit rester gelé durablement, sans les bloquer dans `robots.txt`.
- Décider si les pages FR existantes mais exclues doivent devenir un vrai cluster SEO France plus tard ; ne pas les ajouter au sitemap avant validation du contenu, des canonicals et du maillage interne.
- Garder le sitemap court et stratégique tant que le marché cible est uniquement la France.
- Relancer le build après correction du blocker TypeScript existant sur `src/app/success/page.ts`, qui est hors périmètre de cette passe.

## Vérification effectuée

- Audit local de l’arbre `src/app` sur la branche `i18n-fr-en`.
- Vérification que les 20 URLs du sitemap sont toutes sous `/fr/`.
- Vérification que les 20 URLs du sitemap correspondent toutes à une vraie route `src/app/fr/**/page.tsx`.
- Tentative de build avec Next.js 16 en mode webpack. La compilation passe, puis TypeScript échoue sur `src/app/success/page.ts`, une route success explicitement hors périmètre de cette passe.
