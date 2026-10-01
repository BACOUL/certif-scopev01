# Certif-Scope — parcours européen, 1er octobre 2026

Branche : `fix/multilingual-fr-en-de-20261001`. Reprise depuis `d4bd1bec9126559952168196e72b52317ece7102`.

## Périmètre

Les 24 accueils disposent de leur langue HTML, titre, description, canonical et 25 alternates (24 langues + x-default). Le sitemap européen contient les accueils localisés. Les 21 langues supplémentaires disposent d'un formulaire en trois étapes, d'un retour de paiement, d'un téléchargement PDF, d'un exemple PDF, d'une page de lecture QR et d'un email de livraison traduit.

Les 24 langues utilisent désormais le même gabarit PDF sur deux pages, extrait du modèle français. Les dix rubriques, le logo, les blocs et l’annexe technique sont communs ; seuls les textes traduits, les valeurs et les formats locaux changent. Les guides, pages commerciales secondaires et pages légales ne sont pas tous traduits en 24 langues. Ce périmètre ne constitue donc pas un site intégralement traduit dans chaque langue.

Stripe reçoit explicitement la langue du site pour les 23 langues prises en charge dans la version installée du SDK. La page de paiement irlandaise utilise l'anglais ; le site, le PDF et l'email restent en irlandais. Les prix, coefficients et arrondis existants sont conservés.

## Harmonisation PDF sur deux pages

- Un renderer HTML/CSS commun est utilisé par les attestations FR/EN/DE et par les attestations européennes, y compris les exemples.
- Les 21 nouvelles traductions reprennent aussi les rubriques absentes du modèle court : nature, périmètre, lecture par un tiers, confidentialité, références, exclusions, annexe et synthèse.
- La référence ISO 14083 présente en français est également rétablie dans les dictionnaires EN/DE.
- Les signatures des fixtures ont une longueur Ed25519 réaliste.
- `scripts/check-pdf-parity.cjs` vérifie la complétude des traductions, l’identité de la structure DOM et des styles avec FR, les dix rubriques, le logo et le QR, les débordements/chevauchements et le nombre réel de pages par `pdfinfo`. Les 24 rendus ont deux pages et aucune coupure détectée. Une revue visuelle des rendus FR/ES/DE/FI/EL/BG/GA/PL a été effectuée.

## Corrections de cette reprise

- Le téléchargement utilise la langue enregistrée dans la commande, même après un changement de langue de la page de succès.
- Les URL de téléchargement par clé portent une autorisation HMAC liée aux paramètres et valable 30 minutes, créée après la consommation du crédit. Un simple préfixe `key_` n'autorise plus l'émission. Les anciens liens non signés sont refusés.
- Les noms et l'ordre des pays sont calculés côté serveur et transmis au formulaire. Cela corrige les erreurs d'hydratation constatées en irlandais et en maltais dues aux différences entre les versions d'Intl du serveur et du navigateur.
- La valeur d'une dépense est lue immédiatement avant la mise à jour fonctionnelle de l'état React.
- Les derniers libellés anglais fixes du modèle PDF européen sont remplacés par les libellés traduits.

## Vérifications reproductibles

```sh
npm ci
npm run build
node scripts/check-ui-regressions.cjs
node scripts/check-multilingual.cjs
node scripts/check-eu-contracts.cjs
CHROMIUM_EXECUTABLE_PATH=/chemin/vers/chromium node scripts/check-pdf-parity.cjs
CHROMIUM_EXECUTABLE_PATH=/chemin/vers/chromium node scripts/check-eu-browser.cjs
CHROMIUM_EXECUTABLE_PATH=/chemin/vers/chromium node scripts/check-multilingual-browser.cjs
```

Les tests API simulent Stripe, PDFShift, Resend et Cloudflare. Les QR sont réellement encodés. Aucun paiement, email externe, crédit PDFShift ou clé client réelle n'est utilisé.

La suite européenne vérifie les 576 combinaisons de langues site/document, 21 contrats de PDF traduits, 24 contrats d'email avec pièce jointe et le refus des paiements non confirmés et des téléchargements par clé non autorisés, altérés ou expirés.

La recette navigateur contrôle 96 routes, les 24 accueils sur 360/390/768/1440 px, les 21 formulaires supplémentaires jusqu'à la requête de paiement simulée, sept dépenses de 1 000 € donnant 1,9 tCO₂e, la conservation de la session lors du changement de langue et les erreurs React. Les rendus Chromium couvrent les 24 modèles. La suite FR/EN/DE contrôle aussi leurs parcours existants sur bureau et mobile, dont le choix indépendant de la langue du document.

La recette locale bloque les requêtes externes, dont Google Fonts ; elle utilise les polices disponibles dans le navigateur de test. Le paquet agent-browser n'étant pas disponible, Puppeteer/Chromium assure ces contrôles. Des bibliothèques graphiques et polices ont été extraites dans `/tmp` pour le runtime de cette session ; ces dépendances temporaires ne sont pas une dépendance applicative.

## Limites et déploiement

La validation par un locuteur natif des 21 nouvelles traductions n'est pas réalisée. Les rendus locaux ne constituent pas une preuve de conversion effective par PDFShift en préversion. La lecture du QR reste distincte d'une validation cryptographique autonome du document.

Un paiement réel ou un parcours Stripe de test connecté, la conversion réelle PDFShift et la réception effective du mail restent à vérifier. Les tests de contrat ne prouvent pas ces interactions externes.

Le domaine public utilise encore le commit `a2b2bf783cf3998f4e52c29272536f4595d2d79f` (déploiement `dpl_W92HrwfaZRR4gu8UUPKPHzA8ys4P` constaté au début de cette reprise). Cette reprise ne promeut pas la version en production. Le contrôle SEO des 24 langues sur le domaine public doit suivre cette promotion.
