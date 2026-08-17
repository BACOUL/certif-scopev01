# Direction visuelle - Analyse d'une demande carbone

- Statut : **approuvee avant implementation**
- Date : **17 aout 2026**
- Branche : **feat/fr-request-analyzer**
- Reference applicative : **037bf479c5880e231c99af29353c3389a37a97f0**
- Perimetre : **Hero FR, page d'analyse et trois resultats**

---

## 1. Intention

L'analyseur doit ressembler a un poste de controle documentaire Certif-Scope.

L'utilisateur apporte une demande recue. Le site la lit comme un dossier, releve les exigences, expose les indices trouves et rend un avis prudent. L'identite visuelle doit evoquer :

- un document examine ;
- une methode explicite ;
- une trace de verification ;
- une decision justifiee ;
- un outil professionnel destine aux PME.

Ce n'est ni une interface de chat, ni un assistant IA, ni un dashboard. Le moteur est deterministe et local au navigateur. L'interface ne doit jamais suggerer une intelligence magique ou une garantie automatique.

Test de reconnaissance : meme sans le logo, la page doit rester identifiable comme Certif-Scope par sa palette, sa hierarchie, sa precision documentaire et sa facon d'afficher les preuves.

---

## 2. Sources observees

La direction est fondee sur le site public et sur les fichiers du SHA de production :

- `src/styles/index.css` ;
- `tailwind.config.js` ;
- `src/components/fr/Header.tsx` ;
- `src/components/fr/Hero.tsx` ;
- `src/components/fr/Footer.tsx` ;
- `src/components/fr/UseCaseDecisionTable.tsx` ;
- `src/components/fr/RecipientView.tsx` ;
- `src/components/fr/Trust.tsx`.

Observation navigateur de l'accueil public : `1363 x 936`, le 17 aout 2026.

---

## 3. Tokens a reutiliser

### Couleurs

| Role | Valeur | Usage |
|---|---|---|
| Turquoise principal | `#1FB6C1` | action principale, accent de verification, reperes |
| Bleu nuit | `#0B3A63` | titres, structure, focus, bordures fortes |
| Fond froid | `#F8FAFC` | fond de page ou de zone de travail |
| Papier | `#FFFFFF` | textarea, rapport, surfaces de lecture |
| Texte principal | `#1E293B` | texte courant sombre |
| Texte secondaire | `#475569` | explications et libelles |
| Texte discret | `#64748B` | metadonnees et mentions |

Ne pas introduire une palette violet/bleu, neon ou arc-en-ciel. Ne pas attribuer le resultat uniquement par une couleur. Le statut doit toujours etre ecrit et accompagne d'un symbole simple.

### Typographie

- police unique : `Inter`, deja chargee par le site ;
- texte courant : `16px`, interligne proche de `24px` ;
- libelles documentaires : `11px` a `12px`, graisse `600`, capitales et espacement `0.14em` a `0.16em` ;
- titre de la page outil : `36px` mobile, `48px` desktop, graisse `800` ;
- titre d'un resultat : `24px` a `30px`, graisse `800` ;
- identifiants et compteurs : chiffres tabulaires avec la meme police, sans ajouter de monospace.

Le H1 de l'outil reste plus compact que le H1 marketing de l'accueil. La tache principale doit apparaitre dans le premier ecran sans mur de texte.

### Conteneurs et espacements

- conteneur principal : `max-w-7xl` avec `px-6`, puis `md:px-8` ;
- largeur utile du poste de controle : environ `max-w-6xl` ;
- espacement entre blocs principaux : `24px` a `40px` ;
- padding des surfaces de travail : `20px` mobile, `24px` a `32px` desktop ;
- bordure standard : `1px solid rgba(11, 58, 99, 0.12)` ;
- rayon principal : `8px` ; `12px` seulement pour les controles deja equivalents ;
- ombre : `shadow-sm` pour les surfaces ; l'ombre turquoise forte reste reservee au CTA principal.

Eviter l'usage systematique de `rounded-2xl`, `rounded-[24px]` et des ombres flottantes. Le poste de controle doit etre plus structure et plus plat que les sections marketing.

### Boutons

- action principale : fond `#1FB6C1`, texte blanc, rayon `8px`, hauteur minimale `54px` a `56px` ;
- action secondaire : fond blanc, bordure bleu nuit a 20 %, texte bleu nuit ;
- focus : anneau bleu nuit visible avec offset ;
- un seul CTA principal par etat ;
- les actions utilitaires comme `Copier` ou `Reinitialiser` restent secondaires.

---

## 4. Signature : le poste de controle documentaire

### En-tete de page

L'en-tete est aligne a gauche et compact :

1. libelle `ANALYSE DE DEMANDE` ;
2. H1 ;
3. explication en deux phrases maximum ;
4. mention de confidentialite visible avant la saisie.

Ne pas ajouter une illustration abstraite. Le contenu et la surface de travail constituent le visuel principal.

### Surface principale desktop

Utiliser une composition asymetrique en deux colonnes :

```text
┌────────────────────────────────────┬──────────────────────────┐
│ DEMANDE RECUE                      │ LECTURE DU DOSSIER       │
│                                    │                          │
│ Grand champ de texte               │ Statut explicite         │
│                                    │ Exigences relevees       │
│                                    │ Expressions detectees    │
│ Limite + confidentialite           │ Prochaine action         │
│ [Analyser gratuitement]            │ CTA conditionnel         │
└────────────────────────────────────┴──────────────────────────┘
```

- colonne de saisie : environ 58 % ;
- colonne de lecture : environ 42 % ;
- separation par une bordure verticale ou deux surfaces jointes ;
- aucune rangee de trois cartes ;
- le resultat se lit de haut en bas comme une fiche de controle.

### Surface principale mobile

- une seule colonne ;
- saisie en premier, resultat ensuite ;
- aucune largeur fixe ;
- CTA sur toute la largeur ;
- resultat place immediatement apres l'analyse ;
- aucun defilement horizontal ;
- le menu mobile existant reste intact, hormis le nouveau lien prevu.

### Champ de demande

Le champ doit ressembler a une feuille de travail :

- fond blanc ;
- bordure nette bleu nuit a 12 % ;
- rayon `8px` ;
- hauteur confortable, environ `360px` a `440px` desktop et `280px` minimum mobile ;
- libelle toujours visible ;
- compteur discret `0 / 12 000` ;
- message de confidentialite sous le champ ;
- aucune animation de frappe, aucun curseur artificiel et aucun effet de terminal.

### Rapport de resultat

Le rapport contient, dans cet ordre :

1. statut ecrit en toutes lettres ;
2. phrase de conclusion ;
3. exigences detectees ;
4. courts extraits justifiant la decision ;
5. limites de l'orientation ;
6. prochaine action ;
7. CTA autorise par le statut.

Chaque partie est separee par une ligne fine. Les extraits sont presentes comme des passages de dossier, pas comme des bulles de conversation.

---

## 5. Traitement des trois resultats

### Compatible

- libelle : `COMPATIBLE AVEC L'ATTESTATION` ;
- symbole simple de validation deja coherent avec le logo ;
- accent turquoise fin ;
- mention de non-garantie immediatement visible ;
- CTA principal unique vers `/fr/generate/`.

### A clarifier

- libelle : `A CLARIFIER AVEC LE DESTINATAIRE` ;
- symbole `?` ou icone de dialogue sobre en trait ;
- message pret a copier dans un bloc de texte selectionnable ;
- bouton secondaire de copie ;
- aucun CTA d'achat principal.

### Incompatible

- libelle : `HORS PERIMETRE CERTIF-SCOPE` ;
- symbole de blocage en trait, sans alarme visuelle excessive ;
- raisons detectees listees clairement ;
- aucune action d'achat ;
- orientation vers le type de document attendu, sans recommandation commerciale inventee.

Les trois resultats utilisent la meme structure. Leur difference vient du statut, du symbole, de l'accent de bordure et du contenu, jamais d'un changement complet de design.

---

## 6. Integration a l'accueil

Le Hero conserve :

- son logo, son Header et sa grille actuelle ;
- l'image reelle de l'attestation ;
- la palette et les boutons existants ;
- les reperes documentaires autour du PDF.

Les changements autorises sont limites au texte, au CTA principal vers l'analyseur et a l'ordre des actions prevu dans le plan.

Ne pas ajouter un nouveau visuel genere, une mascotte, une animation decorative ou une nouvelle serie de cartes au Hero.

---

## 7. Motifs interdits

L'implementation est refusee si elle introduit l'un des motifs suivants :

- gradient violet/bleu ou fond neon ;
- halo lumineux, globe, blob ou particules decoratives ;
- etincelles, baguette magique, cerveau ou robot ;
- interface de chat ou bulles de messages ;
- texte `propulse par l'IA` ou promesse de decision intelligente ;
- bento grid ;
- trois cartes identiques avec icone ronde ;
- pilules pour chaque information ;
- faux score, faux graphique ou faux indicateur de dashboard ;
- illustration abstraite generee ;
- empilement de grandes zones centrees sans fonction ;
- animation de frappe, parallax ou entree spectaculaire ;
- rayon de `24px` applique a tous les blocs ;
- ombre coloree sur plusieurs composants a la fois ;
- plusieurs CTA principaux concurrents.

---

## 8. Etats et interactions

Tous les etats listes dans le plan doivent conserver la meme structure pour eviter les sauts visuels :

- vide ;
- saisie en cours ;
- entree trop courte ;
- limite atteinte ;
- compatible ;
- a clarifier ;
- incompatible ;
- copie reussie ;
- copie impossible ;
- reinitialisation.

L'analyse est synchrone. Aucun faux chargement long n'est autorise. Les transitions restent discretes et respectent `prefers-reduced-motion`.

---

## 9. Criteres d'acceptation visuelle

- [ ] le premier ecran montre la tache et le champ, sans longue introduction ;
- [ ] l'interface est alignee a gauche et orientee document ;
- [ ] un seul CTA principal est visible par etat ;
- [ ] aucun motif interdit n'apparait ;
- [ ] les tokens de la section 3 sont reutilises ;
- [ ] aucune police ou palette supplementaire n'est chargee ;
- [ ] les trois resultats restent comprehensibles en niveaux de gris ;
- [ ] le resultat ne depend pas de la couleur seule ;
- [ ] les extraits detectes ressemblent a des preuves documentaires, pas a des messages de chat ;
- [ ] l'accueil reste reconnaissable et conserve son image d'attestation ;
- [ ] aucun composant marketing non necessaire n'est ajoute ;
- [ ] le mobile presente saisie puis resultat sans debordement ;
- [ ] le clavier, le focus et `prefers-reduced-motion` sont verifies ;
- [ ] les captures avant/apres sont comparees aux quatre formats du plan ;
- [ ] toute difference non prevue est corrigee ou documentee avant fusion.

---

## 10. Regle de revue

Avant de declarer l'interface terminee, effectuer deux revues distinctes :

1. **revue de continuite** : la page appartient-elle clairement a Certif-Scope ?
2. **revue anti-generique** : pourrait-on remplacer le logo par celui d'un autre SaaS IA sans que le design paraisse incoherent ?

Si la reponse a la seconde question est oui, l'interface doit etre retravaillee avant fusion.
