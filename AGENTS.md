# Instructions de travail - Certif-Scope

## Portee

Ces instructions s'appliquent a tout le depot.

## Plan directeur actif

Avant toute modification liee a l'analyse d'une demande carbone, lire integralement :

`docs/PLAN_ANALYSE_DEMANDE_CARBONE.md`

Ce document est la source de verite fonctionnelle et technique de cette evolution. Les taches doivent etre executees dans l'ordre de sa checklist. Ne pas elargir le perimetre sans une decision explicite ajoutee au journal de decisions du plan.

## Regles imperatives

1. Partir du SHA reellement deploye sur `certif-scope.com`, jamais d'une branche supposee.
2. La branche `certif-scope-international` correspond actuellement le mieux au site public, mais cette hypothese doit etre confirmee dans Vercel avant le premier changement applicatif.
3. La V1 analyse uniquement du texte colle, cote navigateur, avec des regles deterministes et explicables.
4. Le texte brut de la demande ne doit jamais etre envoye, journalise, ajoute a une URL, stocke ou transmis a un outil d'analytics.
5. En cas de doute, classer la demande `a_clarifier`; ne jamais forcer un resultat compatible pour favoriser une vente.
6. Ne pas promettre d'acceptation, de conformite, de certification, d'audit ou de valeur reglementaire.
7. Ne pas modifier dans cette evolution :
   - le moteur de calcul CO2e ;
   - les facteurs d'emission ;
   - Stripe, ses prix ou ses webhooks ;
   - la generation, la signature ou la verification des attestations ;
   - les packs et les cles d'acces ;
   - les pages allemandes ;
   - les routes API sensibles existantes.
8. Ne pas fusionner les anciennes branches `codex/diagnostic-demande-carbone` ou `codex/fr-only-diagnostic-demande-carbone`. Elles peuvent seulement servir de reference textuelle.
9. Toute interface ajoutee doit prolonger strictement la charte graphique du SHA de production confirme. Utiliser comme references `src/styles/index.css`, `tailwind.config.js`, les composants FR existants et les captures de production realisees avant le code.
10. Ne pas introduire de nouvelle police, palette, echelle d'espacement, largeur de conteneur, style de bouton ou langage d'icone sans decision explicite inscrite dans le journal de decisions.
11. Une case du plan ne peut etre cochee que si son critere d'acceptation a ete verifie et si sa preuve figure dans la matrice de couverture.
12. Apres chaque lot, inscrire dans le journal d'execution : date, branche, commit, controles effectues, resultat et prochain point.

## Qualite requise

- TypeScript strict, aucune erreur de build.
- Analyse couverte par les cas de test prevus dans le plan.
- Accessibilite clavier et mobile verifiee.
- Comparaison visuelle documentee entre la production et la preview aux largeurs prevues dans le plan.
- Tous les etats de l'interface controles, y compris validation, copie, erreur, reinitialisation et les trois resultats.
- Aucun texte utilisateur dans la telemetrie.
- Preview Vercel validee avant fusion.
- Aucun deploiement de production sans controle manuel du tunnel existant jusqu'au PDF.
