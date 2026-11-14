# Certif-Scope — supplier carbon data sheet (review branch)

Development only. **Do not merge or deploy to production.** Current sales are disabled; live Stripe keys are rejected. Historical packs require migration.

See [the status, evidence and launch blockers](docs/refonte/RAPPORT.md).

## Local verification

Node >=20; `npm ci`, `npm test`, `npm run build`, `npm run typecheck`, `npm audit`.
`npm run dev` serves the review UI. FR/EN/DE implemented; other locales are availability notices.

## Isolated test environment only

- `CARBON_DATABASE_URL`: dedicated disposable PostgreSQL database. Never reuse production.
- `CARBON_BASE_URL`: exact test origin.
- `CARBON_STRIPE_KEY`: Stripe test key only, `CARBON_WEBHOOK_SECRET`: test endpoint signing secret.
- `CARBON_SIGNING_KEY`: Ed25519 private PEM, never commit. The verifier derives its current public key from this configured private key.
- `CARBON_VERIFY_PUBLIC_KEYS_JSON`: optional JSON array of up to 12 previously trusted Ed25519 public PEM keys. Keep old verification keys available across signing-key rotations; never take verification keys from uploaded files or user input. Publishing, archiving, backing up and independently authenticating the keys remains an operational release blocker.
- `CARBON_TEST_CHECKOUT=true`: enables test checkout only after the isolated dependencies are prepared.

`npm run db:migrate` applies `migrations/001_carbon.sql` to a dedicated database. `npm run db:purge` manually removes expired delivery records. **Neither command has been run against a remote environment.**

## Protected expiry cleanup (not deployed)
- The review branch contains a **daily 04:00 UTC** Vercel Cron declaration in `vercel.json`. Vercel Cron runs only after an explicitly approved production deployment; this repository currently disables deployments.
- Configure `CRON_SECRET` as a randomly generated secret of at least 32 UTF-8 bytes in the Vercel project **before** deployment. Do not commit or paste this secret into chat/logs.
- `GET /api/internal/purge` requires the exact `Authorization: Bearer <CRON_SECRET>` header, otherwise returns 401 (or 503 when unconfigured). It deletes only expired delivery reports and associated redemption rows plus old webhook dedupe/rate limit rows inside one transaction.
- Monitor cron execution failures and alert the operator; configure backup/restore validation, delete-policy checks and vendor data retention separately. **Scheduling code does not prove a purge has run**.
- Report expiry does not delete historical Stripe invoices or statutory accounting records. Retention obligations and backup policies require legal review.

## Checkout orphan recovery (test mode only)
If Stripe created a test checkout but the database write of `session_id` failed, `fulfill` can attach an already-paid, server-retrieved session to its pre-existing report **only** if the full immutable hash, product, report ID, client reference, amount, currency and test mode match. No report is created from incoming webhook metadata. This improves technical recovery. Before redirecting to Stripe, the user can now securely copy a **private 256-bit recovery capability** (`CS1.<report_uuid>.<base64url_token>`). A separate confirmation is required before redirect. After payment, a customer can paste that code on the download page in another tab or device; the API validates the report ID and token before returning a file. The code never appears in a checkout URL or Stripe metadata and is not emailed. A customer who loses **both** the browser session and this private code still needs a separately verified support procedure. Independent end-to-end Stripe sandbox and browser/device tests remain required.

Tests use PGlite and simulated Stripe responses. They do not prove a live Stripe or distributed PostgreSQL workflow. Example signed JSON files use an ephemeral test key, whose public half is included with the specimens; no private key is persisted.

## Enhanced payment integrity (simulated; not a live transaction)
The server now requires the Checkout session reference to match the existing report and independently checks the test-mode PaymentIntent and expanded captured Charge, including payment IDs, status, EUR currency, exactly 8,900 euro cents collected, and the absence of refunds or disputes. Pending/unexpanded Stripe responses do **not** revoke a customer order. Only a confirmed refund or dispute does. Cached report JSON envelopes are rechecked against the stored snapshot hash and operator-trusted Ed25519 public keys on every download. These controls are covered by automated tests, not a live Stripe sandbox run.

## Protection des remboursements et litiges Stripe (mode test)

- Une notification Stripe signée `charge.refunded` ou `charge.dispute.created` écrit atomiquement un veto durable sur le PaymentIntent dans `carbon_payment_blocks`, révoque tout document déjà lié et enregistre l'identifiant d'événement. Cela couvre aussi un remboursement arrivé avant `checkout.session.completed`.
- `PAID_SQL` refuse toute confirmation dont le PaymentIntent est bloqué, et la livraison recontrôle le paiement à chaque accès. Relecture idempotente, blocages et rollback sont testés sur PostgreSQL embarqué ; **une recette réelle en environnement Stripe test reste obligatoire**.
- **Migration de schéma obligatoire dans la base de recette avant toute activation** : rejouer `npm run db:migrate` avec `CARBON_DATABASE_URL` explicitement pointée vers une base PostgreSQL de recette isolée ; une base historique ne contient pas `carbon_payment_blocks` tant que cette migration n'a pas été exécutée. Ne pas lancer sur la production sans procédure de sauvegarde et autorisation.
- Politique de durée de conservation des veto PaymentIntent et contrôle des courses multi-processus restent à valider avant publication.
