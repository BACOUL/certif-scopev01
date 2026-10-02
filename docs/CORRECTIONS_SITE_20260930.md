# Corrections du site — 30 septembre 2026

Branche : `fix/conversion-readability-20260930`.
Base confirmée dans Vercel : production `037bf479c5880e231c99af29353c3389a37a97f0`.

## Livré dans ce lot

- Navigation : l'effet ScrollUp ne renvoie plus la Promise de scrollTo, responsable de l'exception React au changement de page.
- Apparence : thème clair explicite, indépendant de la préférence sombre du téléphone ; contraste et focus visibles ; animations limitées en mode mouvement réduit.
- Accueil : titre plus court, moins de sections répétitives, méthode et limites plus visibles, aperçu provenant du PDF exemple réel.
- Formulaire : trois étapes, labels associés, validation des montants français et des données manquantes, récapitulatif avant paiement, distinction crédit/prix et montant non renseigné/résultat.
- Contenu : méthodologie alignée sur les coefficients existants, limites de l'acceptation explicites, contacts et assistance visibles, prix unitaire du pack de cinq corrigé à 69,80 €.
- Téléchargement : vérification du statut HTTP et du type PDF, retour d'erreur et nouvelle tentative possible.
- Installation : lockfile synchronisé pour permettre npm ci sans GitHub Actions.

## Vérifications

- TypeScript : `npx tsc --noEmit` réussi.
- Régression : `node scripts/check-ui-regressions.cjs` réussi, incluant le cas où scrollTo retourne une Promise et les montants avec virgule française.
- Build de production : `npm run build` réussi.
- PDF exemple : téléchargement et rendu de la première page, image fidèle utilisée pour l'aperçu.

## À valider avant production

- Preview : navigation accueil → formulaire, erreurs, progression et récapitulatif ; page produit et téléchargement de l'exemple.
- Contrôle mobile sur Android avec préférence sombre, clavier et appareil réel.
- Tunnel existant Stripe ou crédit jusqu'au PDF signé : ne pas déclarer une commande de test payée sans l'avoir réellement exécutée.
- AGENTS.md impose une preview validée avant fusion et un contrôle manuel du tunnel jusqu'au PDF avant production.

## Prochain lot éditorial et acquisition

- Relecture des guides longs et suppression des affirmations statistiques non sourcées (« majorité des cas »).
- Validation des facteurs et de leur provenance avec une personne compétente ; ne pas prétendre à une validation scientifique inexistante.
- Preuves clients et exemples d'usage avec autorisation ; aucune référence ni témoignage inventé.
- Mesure du parcours visite → formulaire → paiement → téléchargement, après choix des outils et traitement des obligations de confidentialité.
- Contrôle Search Console, indexation, liens, métadonnées et performances sur mobile réel.

Aucune modification des routes API sensibles, coefficients, prix Stripe, signature ou génération des PDF dans ce lot. Les pages allemandes n'ont pas été éditées.

## Lot complémentaire — 30 septembre 2026

- Un seul aperçu visible sur l’accueil ; les caractéristiques distinguent résultat, méthode, entreprise/année et lecture documentaire.
- Boutons principaux bleu foncé/texte blanc ; fonctionnement en trois étapes sans second schéma répétitif.
- Bloc partagé du prix à 89 € sur accueil, tarifs et produit ; assistance et conditions de réémission décrites sans gratuité promise.
- FAQ centrée sur la commande et alignée sur les coefficients internes et l’acceptation à confirmer.
- Tarifs et produit raccourcis ; réutilisation du PDF, clés à usage unique et délai de 365 jours expliqués selon le webhook existant.
- Après-achat : email de livraison unitaire prévu par le webhook, archivage et recours au support ; aucun nouvel achat recommandé pour un incident.
- Vérification : lecture du QR explicitement distinguée de la validation de signature. Exemple textuel identifié comme explicatif ; détails techniques renvoyés vers la documentation.
- Méthode : absence de provenance externe documentée signalée ; aucune source ni validation inventée.
- Calcul, coefficients, émission PDF, signature et routes API restent inchangés.
- Revue React : pas de nouvel effet ni requête ; composants statiques sans hydratation ajoutée ; boutons FAQ typés et état mis à jour fonctionnellement.
- Contrôles locaux : TypeScript PASS, build de production PASS, régression existante PASS, diff sans erreur d’espacement. Les boutons des composants communs FR et des pages guides sont également corrigés.
- Restent à vérifier : rendu mobile/desktop, tunnel unitaire et pack jusqu’au PDF, fonctionnement réel des emails et compatibilité du contrôle technique. La provenance des facteurs doit encore être établie.
