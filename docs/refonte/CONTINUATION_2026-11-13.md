# Certif-Scope — continuation autonome du 13 novembre 2026

**Statut : PR brouillon n°107 uniquement ; pas de fusion, pas de mise en production, pas de paiement réel.**

Cette note complète `docs/refonte/RAPPORT.md` (rapport initial du 12 novembre). Elle reflète une revue du code et des corrections enregistrées directement dans la branche de la PR.

## Deux produits constatés dans le code

- **Attestation indicative spend-based** : `src/lib/spend/{calculate,factors,document,copy}.ts*`, formulaire `src/components/SpendAssessment.tsx`, calcul sur le serveur, PDF de deux pages structuré autour du logo historique, CSV et JSON signé, aperçu public `/api/spend/preview`. Ratios ADEME monétaires HT aux prix de 2023, incertitude annoncée de 80 %. Il ne s'agit ni du PDF original inchangé, ni d'un bilan GES réglementaire.
- **Fiche fournisseur énergie scopes 1/2** : `src/lib/carbon/{calculate,document,service}.ts*`, formulaire, PDF/CSV/JSON, limitations et facteurs historiques documentés.
- Les deux offres sont visibles via `src/components/Offers.tsx` sur les pages FR/EN/DE. Les paiements restent désactivés par défaut.

## Correction effectuée après revue

**Webhook Stripe** — `src/app/api/stripe/webhook/route.ts` traitait uniquement les événements de paiement du produit `supplier-carbon-v1`. Les paiements `spend-indicative-v2` étaient ignorés lors de la notification asynchrone. La garde reconnaît maintenant les deux produits, à travers `isSupportedProduct`, avant de déléguer au contrôle strict `fulfill()` (montant, devise, session, produit, hash des données, état payé). Les autres produits restent exclus.

**Tests de non-régression ajoutés** — `tests/spend.test.ts` vérifie notamment :
- Conversion dépenses euros → k€ → kgCO2e → tonnes, y compris le risque d'erreur ×1 000.
- Validation stricte des entrées, refus de facteurs/totaux fournis par le client.
- Avertissement explicite lorsque des ratios 2023 sont utilisés pour 2026.
- Contrôle de l'origine HTTP sur l'aperçu.
- Distinction des deux produits dans le contrôle du paiement Stripe.
- Vérification Ed25519 après altération d'une donnée.
- Génération de fichiers PDF et CSV pour FR/EN/DE.
- Parcours spend complet **simulé** avec base PostgreSQL embarquée (PGlite) et faux Stripe : refus avant paiement, confirmation et délivrance d'un document signé.

**CI sans déploiement** — `.github/workflows/two-product-validation.yml` a été ajouté pour exécuter `npm ci`, `npm run typecheck`, `npm test` et `npm run build` lors des modifications de la branche. Il ne contient aucun secret et n'effectue aucun déploiement.

### Nature de la vérification

Les modifications et fichiers ont été vérifiés dans GitHub. **Les nouveaux tests n'ont pas été exécutés depuis cette conversation.** Aucun statut GitHub Actions n'était encore disponible lors de la dernière consultation. Ne pas présenter ces tests comme réussis tant que la CI n'a pas produit un résultat vérifiable. Les 50 anciens tests annoncés dans le rapport du 12 novembre sont antérieurs aux dernières modifications de l'attestation spend-based.

## Blocages inchangés avant commercialisation

1. Comparaison visuelle du nouveau PDF spend-based avec l'ancien PDF de deux pages ; contrôle des sauts de page et du logo pour les neuf catégories possibles.
2. Actualisation et validation externe des facteurs d'émission, notamment leurs millésimes et leur pertinence.
3. Migration et rapprochement des anciens packs de crédits, commandes et remboursements ; droits historiques non validés dans la nouvelle version.
4. Recette Stripe **réelle en mode test**, webhook compris, dans un environnement isolé ; vérification des chemins de récupération de commande et des remboursements.
5. Recette navigateur et accessibilité, versions mobiles, traductions restantes et routes/SEO historiques.
6. Validation juridique et commerciale (TVA, CGV, confidentialité, affirmations réglementaires) et tests de sauvegarde/restauration/purge.

**Aucune autorisation de fusion ou de déploiement.** Le rapport n'atteste pas que les produits sont prêts à vendre.
