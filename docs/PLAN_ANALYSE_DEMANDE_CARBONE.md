# Plan directeur - Analyse d'une demande carbone

- Statut : **approuve pour implementation, non commence**
- Date de cadrage : **16 aout 2026**
- Depot : **BACOUL/certif-scopev01**
- Produit concerne : **Certif-Scope France**

---

## 1. Decision produit

Certif-Scope conserve son attestation CO2e indicative a 89 EUR, son calcul, Stripe, son PDF et son mecanisme de verification.

L'evolution ajoute une nouvelle porte d'entree :

> Votre client vous demande un bilan carbone ? Collez la demande recue. Certif-Scope identifie ce qu'il faut fournir et propose l'attestation uniquement lorsqu'elle semble adaptee.

L'analyse gratuite doit produire l'un des trois resultats suivants :

1. `compatible` : l'attestation actuelle semble adaptee au texte fourni ;
2. `a_clarifier` : le niveau de preuve attendu n'est pas suffisamment precis ;
3. `incompatible` : le texte exige explicitement un document hors du perimetre de Certif-Scope.

L'analyse est un outil d'orientation, pas une garantie d'acceptation ni un avis juridique ou reglementaire.

---

## 2. Objectif de la V1

Permettre a une PME de coller une demande carbone recue et d'obtenir immediatement :

- un resume des exigences detectees ;
- les expressions qui justifient le resultat ;
- le niveau de compatibilite avec l'attestation ;
- la prochaine action a effectuer ;
- un acces a l'attestation a 89 EUR uniquement si la demande semble compatible ;
- un message de clarification pret a copier si la demande est ambigue.

La V1 doit etre livrable en un lot court et reversible, sans refonte du moteur payant.

---

## 3. Hors perimetre de la V1

Ne pas construire dans cette version :

- import de fichiers PDF, Word ou Excel ;
- reconnaissance optique de caracteres ;
- appel a un modele d'IA externe ;
- compte utilisateur ou tableau de bord ;
- stockage des demandes ;
- historique des analyses ;
- generateur VSME complet ;
- nouveau produit payant ;
- modification du tarif de 89 EUR ;
- nouvelle langue ;
- reseau de partenaires ;
- refonte complete des pages existantes ;
- nouvelle serie de pages SEO.

Toute proposition concernant ces sujets doit etre placee dans la section `Apres la V1`, sans etre implementee dans la PR initiale.

---

## 4. Invariants a proteger

Les elements suivants doivent rester fonctionnellement identiques :

- `src/app/fr/generate/AssessmentForm.tsx` ;
- `src/app/api/checkout/route.ts` ;
- `src/app/api/stripe/webhook/route.ts` ;
- `src/app/api/attestation/issue/route.ts` ;
- les facteurs d'emission ;
- le calcul spend-based ;
- le prix Stripe ;
- les packs et cles d'acces ;
- les modeles du PDF payant ;
- la signature et la verification ;
- toutes les routes allemandes.

Si une modification de l'un de ces elements devient indispensable, interrompre le lot, documenter la raison dans le journal de decisions et demander une validation distincte.

---

## 5. Source de verite Git et production

### Constat au 16 aout 2026

- le contenu public de la page francaise correspond a la famille de branches issue de `fr-clean` ;
- `certif-scope-international` correspond actuellement le mieux au site visible ;
- `main` a diverge et ne contient pas exactement la page d'accueil publique actuelle ;
- les anciennes branches de diagnostic contiennent une page statique, mais pas l'analyseur interactif retenu.

### Procedure obligatoire

- [x] Ouvrir le projet Vercel lie a `certif-scope.com`.
- [x] Relever la branche de production.
- [x] Relever le SHA exact du dernier deploiement de production.
- [x] Comparer ce SHA avec les branches GitHub.
- [x] Noter le resultat dans le journal d'execution.
- [x] Creer `feat/fr-request-analyzer` depuis ce SHA exact.
- [x] Ne pas partir de `main` par defaut.
- [ ] Ne pas changer la branche de production Vercel pendant cette fonctionnalite.

### Verification realisee le 17 aout 2026

- projet Vercel : `certif-scopev01` (`prj_66F0ETsFfNuBQ81rpPZZVl66OScL`) ;
- domaines de production : `certif-scope.com` et `www.certif-scope.com` ;
- deploiement de production : `dpl_AnZ7jKTeA9uT6HeQXAAKjS89fg6b`, etat `READY` ;
- branche Git source : `certif-scope-international` ;
- SHA applicatif deploye : `037bf479c5880e231c99af29353c3389a37a97f0` ;
- date du deploiement source : `2026-07-11 19:00:38 UTC` ;
- la fusion documentaire `d098aa8d71d41835e61eba05bc56d7281711aa51` a genere une preview `READY`, sans cible `production` ;
- la branche `feat/fr-request-analyzer` a ete creee depuis le SHA applicatif deploye, avant toute modification applicative.

### Critere d'acceptation

Avant toute modification applicative, la branche de travail doit rendre une page `/fr/` visuellement et fonctionnellement identique a la production.

---

## 6. Architecture retenue

### Nouveaux fichiers

```text
src/app/fr/analyser-demande-carbone/page.tsx
src/components/fr/RequestAnalyzer.tsx
src/lib/request-analysis/types.ts
src/lib/request-analysis/rules.ts
src/lib/request-analysis/analyze.ts
src/lib/request-analysis/analyze.test.ts
```

### Fichiers existants a modifier

```text
src/app/fr/page.tsx
src/components/fr/Hero.tsx
src/components/fr/Header.tsx
src/components/fr/Footer.tsx
src/app/layout.tsx
public/sitemap.xml
package.json
package-lock.json
```

Modifier une page de confidentialite uniquement si l'outil de mesure finalement active l'exige. Aucun autre fichier n'est prevu.

### Choix technique

L'analyse V1 est executee cote navigateur :

1. normalisation du texte ;
2. detection de motifs explicites ;
3. extraction des exigences ;
4. application de la politique de decision ;
5. generation d'une explication lisible.

Aucune route API d'analyse n'est creee en V1.

---

## 7. Modele de donnees

### Type du resultat

```ts
type AnalysisStatus = "compatible" | "a_clarifier" | "incompatible";

type RequestContext =
  | "client"
  | "fournisseur"
  | "appel_offres"
  | "banque"
  | "assurance"
  | "autre"
  | "inconnu";

type RequirementMatch = {
  code: string;
  label: string;
  excerpt: string;
  severity: "positive" | "ambiguous" | "blocking";
};

type RequestAnalysis = {
  status: AnalysisStatus;
  context: RequestContext;
  reportingYear?: string;
  requestedScopes: Array<"scope_1" | "scope_2" | "scope_3">;
  standards: string[];
  externalVerificationRequired: boolean;
  matches: RequirementMatch[];
  summary: string;
  nextAction: string;
};
```

### Donnees interdites

Le texte brut ne doit jamais etre place dans :

- `localStorage` ;
- `sessionStorage` ;
- un cookie ;
- une URL ou ses parametres ;
- un evenement d'analytics ;
- un log navigateur ou serveur ;
- Stripe ;
- un email ;
- une base de donnees.

Le texte reste uniquement dans l'etat React du composant jusqu'a la fermeture ou au rechargement de la page.

---

## 8. Regles de detection

### Normalisation

Le moteur doit :

- convertir en minuscules ;
- supprimer les diacritiques uniquement pour la comparaison ;
- normaliser les apostrophes et espaces ;
- conserver le texte original uniquement en memoire pour afficher de courts extraits ;
- limiter l'entree a 12 000 caracteres ;
- refuser une entree de moins de 30 caracteres avec un message explicite.

### Signaux incompatibles

Une correspondance explicite avec l'un des elements suivants produit `incompatible` :

- BEGES reglementaire ;
- audit carbone complet ;
- certification officielle ;
- organisme accredite ;
- verification ou assurance externe obligatoire ;
- ISO 14064 imposee ;
- GHG Protocol complet impose ;
- inventaire detaille des Scopes 1, 2 et 3 ;
- reporting CSRD ou ESRS exige ;
- empreinte carbone produit, PCF ou analyse de cycle de vie ;
- methode physique detaillee imposee ;
- facteur d'emission ou format obligatoire incompatible avec la methode Certif-Scope.

### Signaux ambigus

Sans precision supplementaire, les expressions suivantes produisent `a_clarifier` :

- bilan carbone ;
- document RSE ;
- preuve carbone ;
- justificatif CO2 ;
- information ESG ;
- empreinte environnementale ;
- document environnemental ;
- bilan GES.

### Signaux compatibles

Les expressions suivantes peuvent contribuer a `compatible` si aucun signal incompatible ou ambigu non resolu n'est present :

- estimation indicative ;
- indication CO2e agregee ;
- information carbone simplifiee ;
- screening fournisseur ;
- document declaratif ;
- premiere information carbone ;
- aucun format impose ;
- aucune verification externe exigee ;
- resultat agrege et methode indiquee.

### Precedence

```text
incompatible > a_clarifier > compatible
```

Regles imperatives :

- un signal bloquant explicite suffit pour `incompatible` ;
- une demande simplement nommee "bilan carbone" n'est jamais classee compatible ;
- le statut par defaut est `a_clarifier` ;
- `compatible` exige au moins un signal positif explicite et aucun signal bloquant ;
- le moteur affiche les expressions detectees qui justifient sa decision.

---

## 9. Interface et textes valides

### Hero de l'accueil

Sur `src/components/fr/Hero.tsx` :

**H1**

> Votre client vous demande un bilan carbone ?

**Description**

> Collez gratuitement la demande recue. Certif-Scope identifie ce qu'il faut fournir et vous propose l'attestation CO2e uniquement lorsqu'elle semble adaptee.

**CTA principal**

> Analyser ma demande gratuitement

Destination : `/fr/analyser-demande-carbone/`

**CTA secondaire**

> Voir un exemple d'attestation

Destination : `/api/sample`

Le CTA direct d'achat reste present dans les sections produit et prix, mais n'est plus le CTA principal du Hero.

### Page d'analyse

**H1**

> Votre client vous demande un bilan carbone ?

**Introduction**

> Collez le texte du mail, du questionnaire ou de l'appel d'offres recu. Certif-Scope identifie ce qui est demande et vous indique si l'attestation CO2e peut convenir.

**Libelle du champ**

> Demande recue

**Placeholder**

> Collez ici le texte transmis par votre client, votre donneur d'ordre, une banque, une assurance ou un appel d'offres.

**Bouton**

> Analyser gratuitement

**Confidentialite**

> L'analyse est realisee dans votre navigateur. Le texte saisi n'est ni envoye ni conserve.

### Resultat compatible

**Titre**

> Cette demande semble compatible avec l'attestation Certif-Scope.

**Mention obligatoire**

> Cette orientation repose uniquement sur le texte fourni et ne garantit pas l'acceptation du document par son destinataire.

**CTA**

> Generer mon attestation - 89 EUR

Destination : `/fr/generate/`

### Resultat a clarifier

**Titre**

> Le niveau de document attendu doit etre precise.

**Message a copier**

> Bonjour, pouvez-vous me confirmer si une estimation CO2e indicative, accompagnee de sa methodologie et de ses limites, suffit pour votre demande, ou si vous exigez un bilan GES complet couvrant des scopes precis ?

**CTA**

> Copier le message de clarification

### Resultat incompatible

**Titre**

> Cette demande parait exiger un document plus complet que l'attestation Certif-Scope.

Afficher les raisons detectees. Ne pas afficher de CTA d'achat principal.

### Charte graphique obligatoire

L'analyseur est une extension de Certif-Scope, pas une refonte. Il doit sembler appartenir au site actuel des sa premiere version.

Avant d'ecrire le premier composant applicatif :

- [ ] confirmer le SHA de production selon la section 5 ;
- [ ] inventorier les styles effectivement utilises dans `src/styles/index.css` et `tailwind.config.js` ;
- [ ] relever les motifs visuels de `Header.tsx`, `Hero.tsx`, `Footer.tsx`, des cartes, formulaires et CTA francais existants ;
- [ ] noter dans le journal d'execution les polices, couleurs, espacements, rayons, ombres, largeurs de conteneur et points de rupture a reutiliser ;
- [ ] joindre a la PR des captures de reference de la production avant modification.

Regles de conception imperatives :

- reutiliser les typographies, couleurs, espacements, rayons, ombres, conteneurs et composants deja presents ;
- conserver la hierarchie visuelle et la densite des pages francaises ;
- reprendre les styles existants des boutons principal et secondaire, des champs, des cartes et des messages ;
- ne pas ajouter de police, palette, gradient, jeu d'icones ou nouvelle echelle de design ;
- ne pas creer de styles globaux lorsqu'une classe ou un motif local existant suffit ;
- ne pas refactoriser le design system ou les pages non concernees dans cette fonctionnalite ;
- afficher une icone ou un libelle en plus de la couleur pour distinguer les trois resultats ;
- conserver les sections existantes de l'accueil, sauf les changements de texte et de CTA explicitement prevus ;
- documenter toute exception dans le journal de decisions avant de l'implementer.

### Etats d'interface obligatoires

Les etats suivants doivent etre concus, implementes et testes :

- [ ] etat initial, champ vide et bouton desactive ;
- [ ] saisie valide avec compteur ou indication de limite si necessaire ;
- [ ] texte de moins de 30 caracteres avec message accessible ;
- [ ] texte atteignant la limite de 12 000 caracteres sans debordement ;
- [ ] resultat `compatible` ;
- [ ] resultat `a_clarifier` ;
- [ ] resultat `incompatible` ;
- [ ] copie du message reussie avec confirmation visible et annoncee aux technologies d'assistance ;
- [ ] echec de l'API Clipboard avec solution de copie manuelle ;
- [ ] modification ou reinitialisation apres un resultat ;
- [ ] analytics indisponible sans blocage de l'analyse ;
- [ ] etats hover, focus visible, active et disabled de chaque controle ;
- [ ] menu mobile ouvert et ferme apres l'ajout du nouveau lien.

L'analyse etant synchrone dans le navigateur, ne pas afficher un faux chargement prolonge. Si un etat transitoire est necessaire pour eviter un double clic, il doit rester bref et ne pas bloquer la navigation clavier.

### Validation visuelle obligatoire

Comparer la production de reference et la preview Vercel aux formats suivants :

- [ ] mobile etroit : `360 x 800` ;
- [ ] mobile courant : `390 x 844` ;
- [ ] tablette : `768 x 1024` ;
- [ ] desktop : `1440 x 900`.

Pour chaque format, verifier :

- absence de defilement horizontal et de texte coupe ;
- alignement avec les conteneurs, la grille et les espacements existants ;
- coherence du Header, du Hero, des CTA, des cartes de resultat et du Footer ;
- lisibilite du champ pour les textes longs ;
- contraste WCAG AA, focus visible et information non transmise par la couleur seule ;
- absence de saut de mise en page notable lors de l'affichage du resultat ;
- conservation visuelle des pages existantes hors changements autorises.

Les captures avant/apres et la liste des differences intentionnelles doivent figurer dans la PR. Une difference non expliquee bloque la fusion.

---

## 10. Integration dans le site

### Accueil

- [ ] Mettre a jour le Hero sans refaire les autres sections.
- [ ] Ajouter un acces visible a l'analyseur.
- [ ] Conserver les sections produit, methode, exemple, tarif et FAQ.
- [ ] Conserver l'attestation a 89 EUR comme produit payant.
- [ ] Mettre a jour le CTA final pour proposer l'analyse avant l'achat.

### Navigation

- [ ] Ajouter `Analyser une demande` au Header francais.
- [ ] Ajouter le meme lien au Footer francais.
- [ ] Verifier le menu mobile et le focus clavier.

### Liens internes

Ajouter un lien contextuel vers l'analyseur depuis :

- [ ] `/fr/` ;
- [ ] `/fr/bilan-carbone-pme/` ;
- [ ] `/fr/bilan-carbone-fournisseur/` ;
- [ ] `/fr/bilan-carbone-appel-offres/`.

Ne pas reecrire integralement ces pages.

---

## 11. SEO

### Metadonnees de la nouvelle page

**Title**

> Demande de bilan carbone client : verifiez quoi fournir

**Description**

> Collez la demande carbone recue d'un client ou d'un appel d'offres. Verifiez gratuitement si une attestation CO2e indicative peut suffire ou si un bilan complet est necessaire.

### Exigences

- [ ] canonical : `https://www.certif-scope.com/fr/analyser-demande-carbone/` ;
- [ ] `robots`: `index, follow` ;
- [ ] langue : `fr-FR` ;
- [ ] hreflang : `fr` et `x-default` vers la meme page tant qu'aucune version DE n'existe ;
- [ ] ajouter la route finale a `public/sitemap.xml` ;
- [ ] ne supprimer aucune URL indexee dans cette PR ;
- [ ] ne pas ajouter d'autre page SEO.

---

## 12. Mesure minimale

### Decision V1

Activer Vercel Web Analytics pour les pages vues. Ne jamais transmettre le texte saisi.

Si le projet Vercel permet les Custom Events, enregistrer uniquement :

```text
diagnostic_started
diagnostic_completed
diagnostic_compatible
diagnostic_clarification
diagnostic_incompatible
diagnostic_to_generate
```

Proprietes autorisees :

- `location`: `home` ou `diagnostic_page` ;
- `result`: l'un des trois statuts.

Aucune autre propriete n'est autorisee.

Si les Custom Events ne sont pas disponibles dans le plan Vercel actuel :

- activer quand meme les pages vues ;
- ne pas ajouter un second service d'analytics dans cette PR ;
- utiliser Stripe pour compter les achats ;
- inscrire cette limite dans le journal d'execution ;
- ne pas retarder la mise en ligne.

Fichiers potentiellement concernes :

- `package.json` et `package-lock.json` ;
- `src/app/layout.tsx` ;
- `src/components/fr/RequestAnalyzer.tsx`.

---

## 13. Tests

### Tests unitaires du moteur

Ajouter au moins 40 fixtures :

- [ ] 15 demandes compatibles ;
- [ ] 15 demandes a clarifier ;
- [ ] 10 demandes incompatibles.

Inclure obligatoirement :

- [ ] texte vide ;
- [ ] texte inferieur a 30 caracteres ;
- [ ] texte superieur a 12 000 caracteres ;
- [ ] accents et majuscules ;
- [ ] apostrophes typographiques ;
- [ ] texte copie depuis un email ;
- [ ] exigences contradictoires ;
- [ ] plusieurs standards dans le meme texte ;
- [ ] HTML colle ;
- [ ] texte sans rapport avec le carbone ;
- [ ] ambiguite simple autour de "bilan carbone" ;
- [ ] signal positif accompagne d'un signal bloquant.

### Tests fonctionnels

- [ ] saisie et reinitialisation ;
- [ ] etat initial et bouton desactive ;
- [ ] validation des seuils de 30 et 12 000 caracteres ;
- [ ] resultat compatible et CTA vers `/fr/generate/` ;
- [ ] resultat ambigu et copie du message ;
- [ ] resultat incompatible sans CTA d'achat principal ;
- [ ] confirmation apres copie du message ;
- [ ] solution manuelle si l'API Clipboard echoue ;
- [ ] analytics indisponible sans blocage ;
- [ ] aucun texte brut dans l'URL ;
- [ ] aucun texte brut dans le stockage navigateur ;
- [ ] aucun texte brut dans les requetes reseau ;
- [ ] navigation clavier ;
- [ ] affichage mobile Android ;
- [ ] affichage desktop ;
- [ ] contraste et libelles accessibles.

### Regression du produit existant

- [ ] `npm run test` ;
- [ ] `npm run build` ;
- [ ] accueil FR ;
- [ ] formulaire de generation ;
- [ ] calcul CO2e ;
- [ ] checkout Stripe en mode test ;
- [ ] retour success/cancel ;
- [ ] generation du PDF ;
- [ ] verification d'une attestation ;
- [ ] exemple PDF ;
- [ ] pages allemandes principales ;
- [ ] `robots.txt` ;
- [ ] `sitemap.xml` ;
- [ ] canonical et hreflang.

### Matrice de couverture anti-oubli

Avant la fusion, chaque exigence des sections 5 a 15 doit etre reliee a une implementation et a une preuve. Completer cette matrice dans la description de la PR ou dans son commentaire de validation final :

| ID / section | Exigence | Fichier ou commit | Test automatise ou manuel | Preuve | Statut |
|---|---|---|---|---|---|
| A completer | A completer | A completer | A completer | capture, log ou URL de preview | non commence |

Regles :

- aucune ligne ne peut etre marquee terminee sans preuve consultable ;
- toute exigence non implementee doit etre declaree explicitement, jamais omise ;
- toute nouvelle exigence decouverte est ajoutee au plan et a la matrice avant le code ;
- la revue finale compare la matrice, le diff Git et la preview Vercel ;
- une ligne manquante, ambigue ou sans preuve bloque la fusion.

---

## 14. Definition of Done

La V1 est terminee uniquement si :

- [ ] la branche de base correspond au SHA de production confirme ;
- [ ] les trois resultats fonctionnent ;
- [ ] la precedence des regles est respectee ;
- [ ] les 40 fixtures passent ;
- [ ] l'inventaire de la charte du SHA de production est inscrit dans le journal d'execution ;
- [ ] aucune police, palette ou regle visuelle non autorisee n'a ete ajoutee ;
- [ ] tous les etats d'interface obligatoires ont ete verifies ;
- [ ] les captures avant/apres aux quatre formats sont jointes a la PR ;
- [ ] chaque difference visuelle est intentionnelle et documentee ;
- [ ] la matrice de couverture ne contient aucune ligne manquante ou sans preuve ;
- [ ] aucun texte utilisateur ne quitte le navigateur ;
- [ ] l'accueil conduit vers l'analyseur ;
- [ ] le resultat compatible conduit vers l'attestation actuelle ;
- [ ] aucun invariant protege n'a change ;
- [ ] le build de production reussit ;
- [ ] la preview Vercel est validee sur mobile et desktop ;
- [ ] Stripe et le PDF ont ete controles sans regression ;
- [ ] sitemap, canonical, hreflang et robots sont corrects ;
- [ ] le journal d'execution est a jour ;
- [ ] une PR unique contient seulement ce perimetre ;
- [ ] le controle post-deploiement est termine.

---

## 15. Procedure de deploiement

1. Pousser `feat/fr-request-analyzer`.
2. Ouvrir une PR vers la branche de production confirmee.
3. Attendre la preview Vercel.
4. Executer toute la checklist de regression.
5. Verifier le diff et l'absence de fichiers hors perimetre.
6. Fusionner seulement apres validation.
7. Verifier en production :
   - `/fr/` ;
   - `/fr/analyser-demande-carbone/` ;
   - `/fr/generate/` ;
   - `/api/sample` ;
   - Stripe ;
   - `robots.txt` ;
   - `sitemap.xml`.
8. Demander l'indexation de la nouvelle URL dans Search Console.
9. Inscrire le SHA deploye dans le journal d'execution.

---

## 16. Lecture des resultats apres lancement

Observer les 100 premieres analyses, sans modifier le produit pendant la collecte sauf bug critique.

### Decisions

- demandes compatibles frequentes : ameliorer le passage vers l'attestation ;
- demandes ambigues frequentes : enrichir les regles et les messages de clarification ;
- meme livrable absent demande plusieurs fois : etudier ce nouveau livrable payant ;
- demandes incompatibles frequentes : etudier des partenaires specialises ;
- traction francaise et ventes confirmees : reproduire l'analyseur en allemand ;
- aucune vente apres un trafic qualifie suffisant : ne pas ajouter de langues ou de fonctionnalites avant une nouvelle decision produit.

Ne jamais ajouter automatiquement une fonctionnalite a partir d'un seul cas.

---

## 17. Apres la V1 - non autorise dans la PR initiale

Backlog possible, uniquement apres observation :

- import PDF, Word et Excel ;
- analyse assistee par IA ;
- reponse carbone personnalisee payante ;
- questionnaires ESG ;
- correspondance VSME ;
- orientation remuneree vers des partenaires ;
- version allemande ;
- autres langues.

---

## 18. Journal de decisions

| Date | Decision | Raison | Valide par |
|---|---|---|---|
| 2026-08-16 | Conserver l'attestation a 89 EUR | Produit existant fonctionnel et premiere vente obtenue | Jeason |
| 2026-08-16 | Ajouter l'analyse comme porte d'entree | Repondre a la demande recue plutot que vendre un document abstrait | Jeason |
| 2026-08-16 | V1 texte uniquement, cote navigateur | Lancement rapide, confidentialite et absence de cout d'API | Jeason |
| 2026-08-16 | Trois statuts avec priorite au risque | Eviter de vendre une attestation inadaptee | Jeason |

---

## 19. Journal d'execution

Completer une ligne apres chaque lot.

| Date | Branche / commit | Lot realise | Verifications | Resultat | Prochaine action |
|---|---|---|---|---|---|
| 2026-08-17 | `feat/fr-request-analyzer` depuis `037bf479c5880e231c99af29353c3389a37a97f0` | Confirmation du SHA de production et creation de la branche fonctionnelle | Projet, domaines, deploiement, branche et SHA verifies dans Vercel ; comparaison avec GitHub | Production confirmee sur `certif-scope-international` ; branche fonctionnelle creee depuis le SHA exact | Inventorier la charte et produire les captures de reference |
