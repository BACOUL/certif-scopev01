# Migration des anciens packs Certif-Scope (plan de recette, sans production)

Statut : **préparation et tests uniquement**. Cette documentation ne permet pas de conclure que les commandes ou les packs réels ont été migrés.

## Situation historique vérifiée dans le code

- L'ancien `/api/checkout-pack` proposait 5, 10 ou 50 attestations.
- Le webhook Stripe fabriquait **une clé distincte pour chaque crédit** (chaque clé enregistrée dans Cloudflare KV avec `credits: 1`, `usedCredits: 0`, `expiresAt` en principe à 365 jours).
- Des clés administrateur ont également pu être générées, parfois **sans date d'expiration ni `usedCredits`**.
- Le nouveau stockage PostgreSQL exige un solde non négatif, une date d'expiration et un type de produit.
- Les anciennes attestations basées sur les dépenses sont un produit distinct de la fiche fournisseur scopes 1/2. Les clés historiques sont affectées **à `spend-indicative-v2` uniquement**. Cette politique d'équivalence doit être validée commercialement et contractuellement.
- L'ancienne application n'est pas conçue pour basculer en direct sur la nouvelle base. Une exportation pendant qu'elle continue à consommer des crédits peut devenir périmée.

## 1. Reconstruire les droits réels (à effectuer avant toute migration)

Pour chaque clé, rapprocher **sans exception** :

1. Clé Cloudflare KV (format `CS-XXXX-XXXX-XXXX-XXXX-SIGNATURE`), `credits`, `usedCredits`, `used`, `expiresAt`, `stripeSessionId` ou source administrateur.
2. Statut réel du paiement Stripe, devise, montant, produit et montant du pack initial, remboursement total/partiel, contestation, paiement contesté et commande éventuellement délivrée en double.
3. Émission des clés par le webhook et courriel d'envoi, date de livraison, et confirmation de la politique de durée de validité applicable.
4. Référence de preuve privée, contrôleur nominatif et date de revue, sans enregistrer les secrets dans les journaux.
5. Historique des clés administrateur, des soldes nuls et des expirations. **Ne jamais attribuer une nouvelle validité lorsqu'une expiration manque** : décision manuelle à documenter d'abord.

Le script n'interroge PAS Stripe ni Cloudflare. Un opérateur doit réellement vérifier ces informations avec les outils autorisés avant de produire un manifeste validé.

## 2. Préparer le manifeste privé (jamais dans GitHub)

Créer localement `.private/legacy-credits.private.json` :

```json
{
  "version": 1,
  "entries": [
    {
      "key": "CS-<cle-historique-complete>",
      "credits": 1,
      "usedCredits": 0,
      "expiresAt": "2027-01-01T00:00:00.000Z",
      "stripeSessionId": "cs_test_reference-fictive123",
      "reconciliation": {
        "payment": "paid_non_refunded",
        "evidenceRef": "référence privée de rapprochement Stripe",
        "reviewedBy": "contrôleur identifié",
        "reviewedAt": "2026-11-13T10:00:00.000Z"
      }
    }
  ]
}
```

Ce bloc montre la **forme des données, pas une clé utilisable ni un vrai paiement**. Un pack de cinq crédits contient normalement **cinq entrées distinctes** (une par clé). Le fichier doit contenir les clés réelles uniquement dans l'environnement privé de recette, avec accès limité et durée de conservation maîtrisée.

Pour une clé gratuite de l'administration, renseigner `source: "admin"`, ne pas renseigner `stripeSessionId`, et utiliser `payment: "approved_complimentary"` avec une pièce d'autorisation interne.

Les clés historiques sont des **identifiants de droit d'accès**. Elles ne doivent jamais être publiées, copiées dans un rapport, un ticket, un commit ou envoyées dans une conversation.

## 3. Examiner sans écrire en base

En environnement local sécurisé, fournir `KEY_SECRET` via le gestionnaire de secrets, puis :

```bash
npm run legacy:inspect -- .private/legacy-credits.private.json --dry-run
```

Le programme vérifie la structure et la signature des clés, l'expiration, la justification de chaque droit et les doublons. Il ne montre que des **totaux agrégés** et l'empreinte du plan : aucun code de clé en clair. **Ce résultat ne prouve pas à lui seul l'exactitude de la situation Stripe**.

Toute clé dont la signature, la date d'expiration, l'état d'utilisation ou la provenance ne peut pas être établie bloque le manifeste jusqu'à résolution.

## 4. Tester une migration transactionnelle en base de recette isolée

Configurer une base PostgreSQL **dédiée aux tests** ; installer préalablement `migrations/001_carbon.sql`. Ne jamais réutiliser l'URL ou les identifiants de production.

Un opérateur autorisé peut ensuite activer explicitement le mode de test, **uniquement pour cet environnement isolé** :

- `CARBON_MIGRATION_TARGET=isolated-staging`
- `CARBON_LEGACY_MIGRATION_APPROVED=YES_ISOLATED_STAGING_ONLY`
- `CARBON_TEST_CHECKOUT=true`
- `CARBON_DATABASE_URL` pointant vers la base de test
- `KEY_SECRET` chargé depuis son stockage sécurisé

```bash
npm run legacy:inspect -- .private/legacy-credits.private.json --apply
```

L'import se fait dans une transaction SQL. Les nouveaux enregistrements comportent l'empreinte SHA-256 de chaque clé, jamais la clé elle-même ; ils conservent le solde et l'expiration revus. Les réimportations identiques n'augmentent **jamais** le solde déjà consommé. Une divergence ou une collision annule la transaction. Aucun appel réseau externe à Stripe/Cloudflare n'est exécuté par ce script.

## 5. Tests et critères bloquants du changement de version

- Jeux de clés à zéro, utilisées, expirées, admin, remboursées, soldes partiels et doublons.
- 5 / 10 / 50 clés vendues, consommation unique et en parallèle sur PostgreSQL **distant**, récupération de commande et remboursement.
- Confirmation que le client voit son solde et obtient le PDF de **l'ancienne attestation** avec une clé historique, selon la politique des achats initiaux ; pas de réaffectation silencieuse au nouveau produit.
- Test du webhook Stripe en mode test **réel**, notamment paiement confirmé, retardé, duplication, litige et remboursement.
- Comparaison **avant / après migration** des crédits encore valables et des dossiers non résolus ; export d'un procès-verbal anonymisé et signé par le propriétaire.
- Plan de bascule **sans écart** : geler les consommations de crédits anciennes pendant le relevé final, ou implémenter une synchronisation vérifiée et réconciliée. Sans cette étape, l'ancien site pourrait utiliser un crédit après la photographie et le crédit serait accordé à nouveau.
- Sauvegarde PostgreSQL et Cloudflare, contrôle de restauration, procédure de retour arrière et support des anciennes commandes.

**Il n'existe ici aucune commande de migration en production.** Une procédure de production doit être conçue séparément, approuvée et exécutée seulement après la validation de l'ensemble des contrôles.

## 6. Limites connues

Les tests du module de migration sont réalisés sur PostgreSQL embarqué PGlite, pas sur une copie réelle de l'historique client. Les décisions sur les expirations manquantes, les remboursements, les garanties d'usage des anciennes clés et la TVA demandent une vérification juridique/comptable. Il ne faut pas commercialiser le nouveau site comme compatible avec tous les anciens packs tant que les scénarios sont non validés.
