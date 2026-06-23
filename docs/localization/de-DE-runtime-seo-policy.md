# Politique runtime/SEO temporaire de la version allemande

## 1. Etat actuel

Les routes allemandes `/de/*` sont en cours de creation progressive dans le code. Elles servent a preparer la localisation allemande de Certif-Scope, mais elles ne constituent pas encore une version allemande finale, complete et publiable.

A ce stade, la protection globale reste volontairement active :

- `next.config.js` redirige encore `/de` vers `/fr/`.
- `next.config.js` redirige encore `/de/:path*` vers `/fr/`.
- `middleware.ts` applique encore `X-Robots-Tag: noindex, follow` sur toute route dont le chemin est `/de` ou commence par `/de/`.

Ces regles signifient que les pages allemandes peuvent exister dans le code sans etre considerees comme publiees ni indexables en production.

## 2. Raison de la protection temporaire

La version allemande n'est pas encore complete. Plusieurs chantiers doivent rester termines et controles avant toute activation publique :

- pages legales allemandes non finalisees ;
- sitemap et hreflang non finalises ;
- audit de parite FR vers DE non finalise ;
- audit wording reglementaire non finalise ;
- QA finale non realisee ;
- certaines pages du cluster allemand restent a localiser.

Lever l'indexation trop tot exposerait une version allemande partielle, avec un risque SEO, juridique et produit.

## 3. Regle temporaire

Tant que la protection globale `/de/*` existe, les pages allemandes ne doivent pas declarer `robots: index` de maniere contradictoire avec la politique runtime effective.

Les pages DE peuvent continuer a etre creees dans le code comme localisations en cours, mais elles doivent rester coherentes avec l'etat temporaire suivant :

- construction ;
- staging ;
- noindex ;
- pas encore publication publique finale.

Toute nouvelle PR de localisation allemande doit donc verifier la coherence entre ses metadata SEO locales et la protection globale runtime encore active.

## 4. Impact sur la PR #70

La PR #70, `Localize German why companies ask hub`, est conforme cote contenu : elle cree le hub allemand `/de/warum-unternehmen-co2-angaben-anfordern/` comme miroir structurel de `/fr/why-companies-ask/`.

Elle ne doit toutefois pas etre mergee en l'etat, car la page declare `robots: index` alors que la politique globale actuelle maintient `/de/*` derriere une redirection et un header `X-Robots-Tag: noindex, follow`.

Apres cette PR de documentation, l'action recommandee pour #70 est :

- soit corriger #70 en `noindex, follow` temporaire ;
- soit attendre la future PR finale d'activation publique de `/de/*`.

## 5. Activation finale future

Une PR finale dediee devra activer explicitement la version allemande publique. Elle devra notamment :

- supprimer ou adapter la redirection `/de/:path*` vers `/fr/` ;
- retirer ou adapter le `X-Robots-Tag: noindex, follow` global de `/de/*` ;
- verifier les canonical DE ;
- generer ou verifier sitemap et hreflang ;
- verifier les pages legales DE ;
- lancer un audit des liens internes ;
- lancer un audit JSON-LD ;
- lancer un audit wording reglementaire ;
- lancer un audit de parite FR vers DE ;
- lancer le build final ;
- confirmer que `/fr/`, `fr-clean` et `main` restent intacts.

Jusqu'a cette PR finale, `/de/*` reste une zone de localisation en construction, non destinee a l'indexation publique.
