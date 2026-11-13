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

`npm run db:migrate` applies `migrations/001_carbon.sql` to the configured dedicated database. `npm run db:purge` removes expired delivery records. Neither has been run against a remote environment; scheduling and recovery are not configured.

Tests use PGlite and simulated Stripe responses. They do not prove a live Stripe or distributed PostgreSQL workflow. Example signed JSON files use an ephemeral test key, whose public half is included with the specimens; no private key is persisted.
