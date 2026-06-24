# QA post-activation de la version allemande

## 1. Perimetre audite

- SHA audite : `1f5ae925f2cf288a6497ebb7b262531aa521f9c3`
- Branche auditee : `certif-scope-international`
- Date de controle : 2026-06-24
- Deploiement HTTP controle : `https://certif-scopev01-git-certif-scope-international-jeason1.vercel.app`
- Objet : confirmer l'accessibilite publique et la coherence SEO de `/de/*` apres le merge de la PR #79, sans modifier le runtime ni les pages.

## 2. Resume executif

L'activation des routes allemandes est fonctionnelle sur le deploiement de la branche `certif-scope-international` : les routes principales repondent en HTTP 200, sans redirection vers `/fr/`, et les anciennes routes non validees repondent en HTTP 404.

Les metadonnees applicatives sont coherentes avec l'activation : 37 pages declarent `index, follow`, les trois exceptions attendues restent en `noindex, follow`, les canonicals DE sont corrects et les alternates FR/DE sont presents. Le sitemap publie exactement 37 URLs DE uniques et exclut les pages noindex.

**Verdict : pret pour preparer une PR de passage vers `main`, avec une verification post-deploiement obligatoire sur le domaine de production.**

Le deploiement Vercel de preview ajoute automatiquement l'en-tete `X-Robots-Tag: noindex` a toutes les pages. Cet en-tete ne provient plus de `middleware.ts` et n'est pas le precedent en-tete applicatif global `noindex, follow`. L'absence de cet en-tete de plateforme devra etre confirmee sur `https://www.certif-scope.com/de/*` apres un eventuel passage vers `main`.

## 3. Statut des routes publiques

Toutes les routes suivantes repondent en HTTP 200, sans en-tete `Location` et sans redirection vers `/fr/` :

| Route | Statut | Redirection `/fr/` |
| --- | ---: | --- |
| `/de/` | 200 | non |
| `/de/preise/` | 200 | non |
| `/de/erstellen/` | 200 | non |
| `/de/erfolg/` | 200 | non |
| `/de/pruefen/` | 200 | non |
| `/de/technische-pruefung/` | 200 | non |
| `/de/pruefen/demo/` | 200 | non |
| `/de/produkt/` | 200 | non |
| `/de/kontakt/` | 200 | non |
| `/de/datenschutz/` | 200 | non |
| `/de/agb/` | 200 | non |
| `/de/impressum/` | 200 | non |
| `/de/datenverarbeitung/` | 200 | non |
| `/de/cookies/` | 200 | non |
| `/de/warum-unternehmen-co2-angaben-anfordern/` | 200 | non |

Routes interdites :

| Route | Statut | Conclusion |
| --- | ---: | --- |
| `/de/pricing/` | 404 | non reintroduite |
| `/de/why-companies-ask/` | 404 | non reintroduite |

## 4. Statut des en-tetes robots

Le controle du code confirme :

- aucune redirection `source: "/de"` ou `source: "/de/:path*"` dans `next.config.js` ;
- aucune application de `X-Robots-Tag` aux routes DE dans `middleware.ts` ;
- l'ancien en-tete applicatif global `X-Robots-Tag: noindex, follow` n'est plus present.

Le deploiement Vercel de preview renvoie toutefois `X-Robots-Tag: noindex` sur l'ensemble des routes, y compris les pages dont la meta HTML est `index, follow`. Il s'agit de la protection d'indexation des deploiements de preview Vercel. Cette protection de plateforme ne remet pas en cause l'activation du routage, mais elle empeche de valider l'indexabilite de production avant le deploiement sur `main`.

## 5. Exceptions noindex

Les trois exceptions attendues rendent bien une meta HTML `robots: noindex, follow` :

- `/de/erfolg/` ;
- `/de/abbruch/` ;
- `/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten/`.

Le scan de `src/app/de/**/page.tsx` confirme :

- 40 pages DE au total ;
- 37 pages `index, follow` ;
- exactement 3 pages `noindex, follow`, correspondant a la liste ci-dessus.

## 6. Sitemap

Le sitemap deploye repond en HTTP 200.

- URLs DE presentes : 37 ;
- URLs DE uniques : 37 ;
- doublons : aucun ;
- pages noindex presentes : aucune ;
- `/de/pricing/` : absent ;
- `/de/why-companies-ask/` : absent.

Les 37 pages DE indexables detectees dans le code correspondent exactement aux 37 URLs DE du sitemap : aucune URL manquante et aucune URL supplementaire.

## 7. Canonical et hreflang

Pour les 37 URLs DE publiees dans le sitemap :

- le canonical correspond exactement a l'URL DE de la route ;
- l'alternate `de` correspond a la meme URL DE ;
- un alternate `fr` est present ;
- aucun canonical ou hreflang ne pointe vers `/de/pricing/` ;
- aucun canonical ou hreflang ne pointe vers `/de/why-companies-ask/` ;
- le hub allemand utilise `/de/warum-unternehmen-co2-angaben-anfordern/`.

Aucune anomalie canonical/hreflang n'a ete detectee sur le deploiement controle.

## 8. Liens internes DE

Le scan de `src/app/de` ne detecte aucun lien interne vers les anciennes routes suivantes :

- `/de/pricing` ;
- `/de/why-companies-ask` ;
- `/de/verify` ;
- `/de/generate` ;
- `/de/product` ;
- `/de/contact` ;
- `/de/privacy` ;
- `/de/terms` ;
- `/de/legal`.

Aucun lien visible `href="/fr/` n'est present dans les pages DE. Les URLs FR restantes sont limitees aux alternates/hreflang techniques.

## 9. Perimetre et integrite

Cette QA ne modifie ni les pages ni le runtime. Le seul fichier ajoute par la branche de QA est le present document.

- aucun contenu editorial `/fr/` modifie ;
- aucune page `/de/` modifiee ;
- `next.config.js`, `middleware.ts` et `public/sitemap.xml` inchanges ;
- API, Stripe, checkout, prix runtime, packs, calcul carbone, facteurs d'emission, PDF runtime, signatures, cles, verification et generation inchanges ;
- `fr-clean` intacte : `d2f7f361a66c4ee3614d50e36a231868e2cb52b8` ;
- `main` intacte : `4cb7e6764c12d7b9801977efcaba572640e3db2a`.

## 10. Build

- `npm run build` : non executable dans l'environnement, car la commande `npm` n'est pas disponible ;
- fallback utilise : `next build --webpack` avec le runtime Node fourni ;
- exit code : 0 ;
- compilation : OK ;
- TypeScript : OK ;
- collecte des pages : OK ;
- generation statique : OK ;
- warnings : uniquement `baseline-browser-mapping`.

## 11. Risques restants

1. Le header `X-Robots-Tag: noindex` injecte par Vercel sur les previews empeche de confirmer l'indexabilite finale avant un deploiement de production.
2. Le domaine de production `www.certif-scope.com` n'a pas encore recu l'activation DE tant que le passage vers `main` n'est pas effectue.
3. L'indexation effective dependra ensuite du crawl des moteurs et devra etre suivie dans Search Console.
4. Les parcours transactionnels ont ete controles au niveau routage et build, sans declencher de paiement ni modifier le runtime produit.

## 12. Recommandation finale

La branche `certif-scope-international` est **prete pour la preparation d'une PR separee vers `main`** sur les criteres de routage, metadata, sitemap, liens internes et build.

Avant de considerer l'activation production comme definitive, effectuer immediatement apres le deploiement sur `main` un smoke test sur `https://www.certif-scope.com/de/*` pour confirmer :

- HTTP 200 sans redirection vers `/fr/` ;
- absence de `X-Robots-Tag: noindex` sur les 37 pages indexables ;
- maintien des trois exceptions en meta `noindex, follow` ;
- disponibilite du sitemap et coherence des canonicals/hreflang ;
- fonctionnement des parcours prix, creation et verification sans regression FR.
