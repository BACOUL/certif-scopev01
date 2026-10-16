# Certif-Scope — Search Console correction plan (16 October 2026)

## Evidence and correct production baseline

- Eight uploaded Search Console indexing exports: 39 noindex, 33 robots-blocked, 20 HTTP 4xx, 18 redirect pages, 8 404, 2 redirect errors, 19 crawled-but-not-indexed, 6 discovered-but-not-indexed (145 exclusions).
- Vercel certif-scopev01 production deployment dpl_Bpp71WaRoGxQscWWf5nnRoRWtUym uses GitHub commit 49048af9a42a3b252ebfcbe4327e399835de59c8 on fix/multilingual-fr-en-de-20261001, NOT main.
- This remediation branch is independent; no production change or GitHub Actions run is needed for the edits.

## Proven source-level defect #1: blocked Next.js render resources

- Search Console lists 12 JS and 3 CSS /_next/static/chunks URLs containing ?dpl= as blocked by robots.txt.
- The deployed robots.txt explicitly contains Disallow: /*?*, matching those URLs.
- Fix: Allow: /_next/ is a more specific Googlebot allow than the wildcard query block. Keep Disallow: /api/, checkout-related exclusions, and the other existing restrictions.
- This also allows Next.js image resources such as /_next/image?url=... when applicable.

## Proven source-level defect #2: missing legacy DE redirects

- Search Console 404 examples: /de/pricing/, /de/generate/, /de/product/methodology, /de/why-companies-ask.
- The production Next.js config lacked these old URL mappings.
- Added permanent redirects to existing native German routes: /de/preise/, /de/erstellen/, /de/methodik/, /de/warum-unternehmen-co2-angaben-anfordern/.
- Also included /de/verify/ -> /de/pruefen/ as a consistent legacy-flow compatibility redirect.

## Exclusions deliberately not changed

- Current production src/app/fr/layout.tsx already says robots index:true, unlike outdated main which says noindex. Editing main would have been wrong.
- European non-core generate/verify pages intentionally declare noindex and are not meant to become landing pages.
- Legacy duplicate article noindex directives should not be removed automatically.
- /it and /pl redirect errors from October 1 require live Googlebot testing; existing trailingSlash:true may already normalize these paths.
- The 20 other 4xx examples include old or currently present pages and obsolete static chunks. Exported crawl history is not proof of a current live 4xx.
- Do not invent a destination for /$, /&, /faq/, /fr/faq/ without checking their incoming links and intent.
- Not-indexed informational pages require URL inspection and content/link evaluation; a robots or sitemap change cannot guarantee Google indexation.

## Validation and controlled release

1. Run locally without external packages: node --test tests/seo-search-console.test.cjs
2. Confirm Vercel preview build passes, and manually check 301/308 results for legacy DE URLs.
3. Confirm Googlebot can retrieve /_next/static/chunks/*.js?dpl=... and /_next/static/chunks/*.css?dpl=..., while /api/ stays blocked.
4. After approval, merge into the actual Vercel production branch, not main. Do not merge without review.
5. Only then use Google Search Console URL Inspection and Validate Fix, and monitor clicks/impressions after recrawl.

Rollback: revert only the robots.txt and next.config.js edits; no product or database migrations.