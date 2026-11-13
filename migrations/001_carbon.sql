CREATE TABLE IF NOT EXISTS carbon_reports (
 id uuid PRIMARY KEY, secret_hash text NOT NULL, snapshot jsonb NOT NULL, snapshot_hash text NOT NULL,
 session_id text UNIQUE, payment_intent text UNIQUE, status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','paid','revoked')),
 created_at timestamptz NOT NULL DEFAULT now(), expires_at timestamptz NOT NULL DEFAULT now() + interval '30 days',
 paid_at timestamptz, document jsonb
);
CREATE TABLE IF NOT EXISTS carbon_events (id text PRIMARY KEY, created_at timestamptz NOT NULL DEFAULT now());
-- A signed Stripe refund/dispute can arrive before the Checkout completion event.
-- Persist a veto by PaymentIntent so a late success cannot issue the report.
CREATE TABLE IF NOT EXISTS carbon_payment_blocks (
 payment_intent text PRIMARY KEY,
 reason text NOT NULL CHECK (reason IN ('refund','dispute')),
 created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS carbon_credits (key_hash text PRIMARY KEY, remaining integer NOT NULL CHECK(remaining>=0), expires_at timestamptz NOT NULL);
CREATE TABLE IF NOT EXISTS carbon_redemptions (report_id uuid PRIMARY KEY REFERENCES carbon_reports(id), key_hash text NOT NULL);
CREATE TABLE IF NOT EXISTS carbon_limits (key text PRIMARY KEY, hits integer NOT NULL, expires_at timestamptz NOT NULL);

ALTER TABLE carbon_credits ADD COLUMN IF NOT EXISTS product text NOT NULL DEFAULT 'supplier-carbon-v1' CHECK(product IN ('supplier-carbon-v1','spend-indicative-v2'));
CREATE TABLE IF NOT EXISTS carbon_legacy_imports (source_id text PRIMARY KEY, manifest_hash text NOT NULL, key_hash text UNIQUE NOT NULL, imported_at timestamptz NOT NULL DEFAULT now());
