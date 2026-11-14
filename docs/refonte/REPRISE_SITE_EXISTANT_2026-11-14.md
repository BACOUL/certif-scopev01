# Certif-Scope — reprise de la refonte SUR LE SITE EXISTANT

Décision corrigée le 14 novembre 2026 : **conserver le site existant et le mettre à jour**, au lieu de le remplacer par l'application simplifiée de la PR #107.

## Origine vérifiée
- Point de départ : déploiement de production du dépôt `BACOUL/certif-scopev01`, commit `71e6cd87a8c04041ff58be4db99a6fa49cb8c40a`.
- Branche de travail : `refonte/conserver-site-existant-20261114`.
- Ancienne tentative : PR #107, en brouillon, ne doit pas être fusionnée ni substituée au site actuel.
- `vercel.json` bloque les déploiements Git automatiques de cette branche ; aucun changement de production.
- Le contenu réglementaire de cette branche est informatif et ne modifie aucun parcours de paiement.

## Ce qui doit être préservé
1. Identité visuelle, en-tête, pied de page, navigation, versions linguistiques et design responsive.
2. Pages françaises et leurs URL, pages éditoriales SEO, contenu explicatif et liens existants ; revue URL par URL.
3. Formulaire actuel et son fonctionnement tant que sa migration n'est pas approuvée.
4. PDF historique d'attestation CO₂e indicative fondée sur les dépenses, génération, vérification, formats, commandes et service après-vente.
5. Droits des clients existants, soldes des packs et clés : aucune suppression ou conversion sans rapprochement et tests réels.
6. Hébergement, domaine et Stripe de production inchangés jusqu'au feu vert final.

## Travaux progressifs — ordre
**Étape A : mise à jour réglementaire visible sur le site existant.**
- Section sourcée FR sur le règlement délégué (UE) 2026/1560, la directive (UE) 2026/470 et l'indicateur B3 énergie / scopes 1 et 2.
- Distinguer le produit effectivement vendu aujourd'hui (spend-based) de la future fiche fondée sur consommations réelles.
- Ne jamais écrire que toutes les PME sont tenues d'acheter une attestation ou que la fiche actuelle satisfait B3.

**Étape B : évolution de l'offre SANS reconstruire le site.**
- Reprendre les calculs serveur et la méthodologie vérifiée de la PR #107 comme composants isolés, en les intégrant aux pages, navigation, styles et PDF historique existants.
- Ne pas importer le routeur simplifié `[[...path]]`, son nouveau shell ou ses suppressions massives.
- Mettre à jour le formulaire sous l'identité visuelle actuelle ; garder l'ancien produit et le PDF accessibles pour les clients historiques.
- Positionnement public cible à clarifier avant bascule : une fiche fournisseur énergie/scopes 1 et 2, l'ancien produit réservé aux clients ayant des droits antérieurs.

**Étape C : sécurisation des ventes et du patrimoine client.**
- Facteurs officiels récents ADEME et droits de réutilisation ; formats PDF ; couverture métier ; conformité des allégations.
- Migration réconciliée des commandes/crédits historiques ; base de recette isolée.
- Stripe test de bout en bout, y compris délivrance, remboursements, litiges et récupérations.
- CGV/TVA/RGPD, sécurité, purge et restauration.

**Étape D : recette de la version VISUELLEMENT CONFORME À L'ANCIEN SITE.**
- Preview isolée, sans paiement réel et sans connexion aux données clients de production.
- Vérifications desktop/mobile, anciennes URL, SEO, FR/EN/DE, PDF.
- Mise en production et ouverture des ventes uniquement sur autorisation expresse du propriétaire.

## Points bloquants
- **La PR #107 n'est pas un artefact publiable tel quel.** Les 421 fichiers modifiés prouvent la dérive de périmètre.
- La nouvelle section B3 est une information réglementaire, **pas** la preuve d'un moteur conforme B3.
- Aucun choix de commercialisation n'est implémenté par cette première étape.
- La branche est une base de travail conservatrice : elle protège le site, mais ne suffit pas encore pour vendre un nouveau document.
