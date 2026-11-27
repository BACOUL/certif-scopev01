# A03 — Référence visuelle et fonctionnelle de production
Date : 27 novembre 2026. **Statut : en cours, non validé.**

## Référence immuable
Domaine https://www.certif-scope.com, déploiement identifié en A01, [source historique](https://github.com/BACOUL/certif-scopev01/tree/71e6cd87a8c04041ff58be4db99a6fa49cb8c40a). [A02](A02_INVENTAIRE_PRODUCTION.md) fournit 120 fichiers page, 16 API et 108 URL de sitemaps. La PR 108 conserve sa base 71e6cd87a8c04041ff58be4db99a6fa49cb8c40a.

## Observations textuelles (cache public, non recette live)
- /fr/ : proposition de valeur, prix 89 €, CTA générer/exemple gratuit, critères d'adéquation et limites, navigation, PDF vérifiable.
- /fr/pricing/ : offre individuelle, packs, inclusions/limites.
- /fr/product/ : présentation, bénéfices, contenu PDF, intégrité, usages et limites.
- /fr/generate/ : entreprise/contexte -> sept dépenses -> résultat/attestation, clé ou pack, prix 89 €, langue du document, avertissement sur PDF perdus. Ne pas modifier le parcours historique sans tests.
- /de/ : accueil localisé, offre 89 €, CTA exemple, critères d'adéquation.
- /en/, /es/ et /fr/verify/demo/ : outil web sans résultat exploitable ; cela ne prouve pas une panne.
- Test direct depuis l'environnement de travail : résolution DNS du domaine impossible, aucun statut HTTP live obtenu. Les pages récupérées par l'index web étaient datées de cinq mois ; ni captures actuelles ni fonctionnement interactif ne sont déduits de ces observations.

## Références visuelles historiques conservées (pas de nouvelles captures vérifiées)
- [EN bureau](https://github.com/BACOUL/certif-scopev01/blob/71e6cd87a8c04041ff58be4db99a6fa49cb8c40a/docs/multilingual/en-desktop.png) et [DE mobile](https://github.com/BACOUL/certif-scopev01/blob/71e6cd87a8c04041ff58be4db99a6fa49cb8c40a/docs/multilingual/de-mobile.png).
- Les 24 aperçus de documents `public/attestation-example-<locale>.webp` existent dans l'arbre de production ; ils ne sont pas des PDF nouvellement générés.
- [Rapport recette FR/EN/DE](https://github.com/BACOUL/certif-scopev01/blob/71e6cd87a8c04041ff58be4db99a6fa49cb8c40a/docs/multilingual/verification.md) et [rapport recette 24 langues](https://github.com/BACOUL/certif-scopev01/blob/71e6cd87a8c04041ff58be4db99a6fa49cb8c40a/docs/multilingual/eu24-verification.md) : résultats historiques non rejoués.

## Capture reproductible (nouvelle)
- [Script](https://github.com/BACOUL/certif-scopev01/blob/refonte/conserver-site-existant-20261114/scripts/a03-public-baseline.cjs) et [workflow](https://github.com/BACOUL/certif-scopev01/blob/refonte/conserver-site-existant-20261114/.github/workflows/a03-public-baseline.yml), commits 635c24bb6400f8fe9465f1b87590786afc2f0243 et 37aad89b37ab04aa8f4a51fec96a7b82d857e6a1.
- [Exécution Actions observée](https://github.com/BACOUL/certif-scopev01/actions/runs/46022869856) : in_progress lors de la lecture des métadonnées. **Aucun résultat de cette exécution n'a encore été inspecté.**
- Sitemaps au SHA de production, requêtes GET publiques avec liste autorisée, redirections non suivies par la collecte HTTP. Chromium : 24 accueils, 24 formulaires, 18 autres pages principales FR/EN/DE, 1440 et 390 px, titres, lang, débordements, canonical, hreflang, liens, erreurs JavaScript. Rapport JSON et PNG, artefact 30 jours.
- Interception navigateur : bloque requêtes non GET/HEAD, API, succès privés, checkout, authentification et domaines tiers ; aucun clic sur achat ou soumission. Les polices/ressources tierces bloquées peuvent modifier le rendu. Le workflow ne déploie rien, ne consulte aucune clé et n'accède à aucun compte client. Les artefacts sont publics et ne doivent contenir que les pages publiques.
- Vérifier le résultat effectif, examiner les captures FR/EN/DE et européennes, consigner les écarts et conserver des références durables non sensibles. Ne pas prendre une CI verte pour une validation visuelle humaine.

## Matrice de non-régression à exécuter sur référence puis candidat
| ID | Contrôle | Attendu |
|---|---|---|
| A03-T01 | 108 URL des sitemaps + routes non indexées utiles | statut, URL finale et redirections attendus ; comparer sans suivre vers un paiement |
| A03-T02 | Accueil, produit, tarifs, méthodologie, conformité, vérification, démonstration | navigation, CTA, limites, prix et lisibilité préservés |
| A03-T03 | 24 accueils + formulaires ; ordinateur 1440 et mobile 390 (compléter 360/768) | langue HTML, sélection langue, pas de débordements, aucune erreur critique |
| A03-T04 | Données fictives : société Exemple, 7 catégories de 1000 EUR, modèle historique inchangé | somme brute 1,92 tCO2e, affichage historique attendu 1,9 tCO2e ; vérifier arrondi et reprise des 3 étapes |
| A03-T05 | Saisie invalide, montant décimal, langue site distincte langue PDF, retour formulaire | règles et messages cohérents ; aucune soumission en production |
| A03-T06 | PDF fictifs des 24 langues, 2 pages historiques, 10 rubriques, logo, QR, accents, mise en page et limites | utiliser les mocks existants et générer hors production ; vérifier pdfinfo et inspecter visuellement |
| A03-T07 | Contrats historiques simulés Stripe/PDFShift/Resend/Cloudflare ; clés valides, expirées, falsifiées | mêmes droits, pas de double émission, rejet des accès non autorisés ; tests de concurrence à F |
| A03-T08 | Robots, sitemaps, canonical/hreflang, liens, indexation | conserver URL historiques et politique SEO ; preview noindex séparée |
| A03-T09 | Différence visuelle et fonctionnelle candidat / historique | aucun écart non expliqué ; améliorations approuvées documentées |

Pour T04–T07 utiliser les scripts historiques `check-ui-regressions.cjs`, `check-multilingual.cjs`, `check-eu-contracts.cjs`, `check-pdf-parity.cjs`, `check-multilingual-browser.cjs`, `check-eu-browser.cjs` en environnement isolé sans secrets ni données réelles ; inspecter l'isolation avant leur exécution. Le script de contrats multilingues produit les HTML fictifs FR/EN/DE, le script de contrats UE les autres HTML, puis le script de parité produit les PDF avec Chromium et pdfinfo. Aucun de ces tests PDF ou de saisie n'a été exécuté dans cette intervention.

## Critères de clôture A03
1. Rapport HTTP et captures effectives inspectés ; limites et écarts documentés.
2. PDF fictifs de référence régénérés et vérifiés ou preuve historique suffisante explicitement validée, sans appel commercial.
3. Matrice conservée pour les comparaisons futures et preuves pérennes.
4. Production intacte ; A03 reste non cochée jusque-là. Prochaine action : consulter l'exécution Actions ci-dessus, examiner les artefacts et compléter la référence PDF.

## Reprise — résultats de la capture publique (27 novembre 2026)
- [Exécution publique réussie](https://github.com/BACOUL/certif-scopev01/actions/runs/46022869856), job 140586694338 ; [archive](https://github.com/BACOUL/certif-scopev01/actions/runs/46022869856/artifacts/15210535195), 52 145 615 octets. Archive téléchargée et `report.json` effectivement analysé : 133 réponses HTTP 200, 132 captures (66 pages × 2 dimensions), aucune erreur JavaScript/débordement signalé, 108 URL des sitemaps incluses, H1 présent sur chaque capture, les 48 captures des 24 accueils ont 25 alternates. Aucun échec enregistré.
- Contrôle canonical : /en/verify/demo/ pointe vers /en/verify/ (deux captures), à conserver comme comportement historique sauf correction SEO justifiée.
- Revue visuelle par planches des accueils et pages principales, et inspection des premiers écrans accueil/formulaire/prix FR/EN/DE aux deux dimensions : identité, navigation, CTA, prix 89 €, formulaire et mise en page de référence présents. Plusieurs accueils capturés avant la fin des effets visuels (texte pâle, aperçu absent) ; la cause exacte n'a pas été établie. Les ressources tierces sont bloquées. Ne pas considérer ces images comme référence pixel à pixel définitive : stabiliser chargement/animations et vérifier les illustrations au lot E/G. Les captures n'ont pas toutes été examinées en résolution native.
- La référence publique est désormais disponible ; archive temporaire 30 jours. Rapport et résultats synthétiques consignés ici ; conserver durablement les preuves nécessaires avant expiration.
- Recette PDF : [workflow historique hors ligne](https://github.com/BACOUL/certif-scopev01/blob/refonte/conserver-site-existant-20261114/.github/workflows/a03-offline-pdf.yml) créé sur SHA 91d9ef8ed72964e34d1e8fbd3774f0f89ca90d82. Source de production épinglée, .env.local supprimé de la copie runner sans lecture, aucun secret injecté, mocks existants Stripe/Resend/PDFShift/KV, réseau isolé pendant les tests. Prévu : cas numérique, 576 combinaisons UI/PDF, contrats de livraison, 24 PDF, contrôle 2 pages/10 rubriques/chevauchements, empreintes.
- [Premier essai PDF](https://github.com/BACOUL/certif-scopev01/actions/runs/46025558529) échoué à la vérification des prérequis (pdfinfo absent), avant tout test. Correction 50f203b6044c8dbef18be4c3479c304e4b3aada4 : installation Poppler si nécessaire. Relance automatique sur ce commit ; résultat non encore confirmé.
- A03 reste ouverte jusqu'à vérification du résultat PDF, des cas de saisie hors production et de la référence visuelle suffisamment stable. Aucun déploiement, API commerciale appelée, paiement ou migration.
