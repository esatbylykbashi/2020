# Cours TP DWWM

## Mardi 2020/10/06

* création des répertoires "Code/greta" pour stocker correctement son code

* présentation formation:

  * objectifs de la formation
  * front / back
  * langages de programmation

* présentation vscode

  * notamment Emmet (avec "lorem" etc. pour l'aide au développement) qui est intégré à vscode

* présentation html / css / javascript

### 1er projet rapide

* index.html => choisi parce que c'est la norme des pages d'accueil
* balises standard : html, head, body, main, article, section, h1, h2, h3 ...
* tests du style en changeant dynamiquement le style dans la console développeur du navigateur

En live j'ai fait un `Code/greta/first/index.html` aussi, de qualité médiocre pour jouer avec ce qu'il est possible de faire.

### Présentation projet du formateur

J'ai montré vite fait ma page de mariage, mais surtout j'ai codé devant eux en une trentaine de minutes la page "trombi.html" dans le dossier "Code/greta/first", avec bootstrap / material design / des placeholder / du javascript etc.

Ressources :
* [placeholder photos](picsum.photos)
* [placeholder avatars](http://avatars.adorable.io)
* [bootstrap4 + material design](https://mdbootstrap.github.io/bootstrap-material-design/docs/4.0/bootstrap-components/alerts/)

## Lundi 2020/10/12

### Selecteurs CSS

Ecrire un menu en haut de sa page : probleme avec les block et les inline. (on ne s'apesantit pas sur le sujet, on laisse juste galérer suffisamment pour qu'ils comprennent que ça marche pas top)

NB : Si on veut que le lien en haut de la page prenne tout l'élément il faut jouer avec ["line-height"](https://stackoverflow.com/questions/40755950/make-a-tag-to-take-100-height-of-inline-block-parent)

### flexbox

Introduction à flexbox, [resource ici](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), qui permet de la mise en page (sur 1 dimension) de façon très très simple.

On a repris l'exemple précédent, et à la fin on se rend compte qu'il suffit que le parent soir `display: flex;` pour que directement les enfants s'alignent sur une même ligne de manière propre.

On a vu comment on les aligne sur l'axe principal (ici horizontal) et sur l'axe secondaire (donc l'axe vertical), avec les propriétés qui se terminent par "-content" (pour l'axe principal) et "-items" pour l'axe secondaire. Tout marche pareil si mon axe principal devient l'axe vertical. (ie `flex-direction:column;`)

On l'a appliqué sur un TP2 qui consiste à écrire une page d'un journal, avec un bandeau de navigation, une section centrale qui contient 3 articles en colonne côte à côte, puis une section "contact" qui contient du texte et un formulaire, et enfin un footer.

## Mardi 2020/10/13

Poursuite du TP2 avec révision de flexbox, et des balises les plus courantes (ex: input avec placeholder).

Notamment on appuyé sur comment faire des liens dans la page (et le rôle des "id").

### flexbox

Attention : un élément flexbox ne peut gérer que ses enfants directs, pas ses petits enfants ou arrière petits enfants. On a insisté sur ce point.

Quitte, pour plus de mise en page, à ce que les enfants deviennent eux mêmes des éléments flexbox et qu'ils gèrent leurs propres enfants.

### selecteurs CSS

Révision de comment fonctionnent les selecteurs CSS, comment on les manipule, qu'il faut être le plus précis possible pour ne pas modifier des éléments qu'on ne veut pas modifier, et qu'il faut limiter le nombre d'id et de class, qui ne doivent servir qu'en dernier recours.

En effet, il vaut mieux éviter d'avoir à changer le code html quand on veut changer un style, il vaut mieux changer juste le css. (exemple: rajouter un élément dans ma barre de nav, sans avoir à lui donner la bonne classe ! mon selecteur CSS est fait de manière à le prendre de toute façon ! au pire on met juste l'id sur le parent "nav")

En + : découverte des selecteurs 
* `:hover`
* `:last-child`

## Jeudi 2020/10/15

Poursuite du Flexbox et decouvert du responsive @media
* découverte de la balise DIV et SPAN
  * <div> est une balise du type BLOCK et elle est fermante </div>
  * <span> est une balise du type INLINE et elle est fermante </span>

### flexbox
travail sur TPFlex, utilisation des display, flex-wrap, flex-direction.

### @media
Changement du style CSS en au chamgement du taille de l'ecran
* @media (max-width: 600px) {
*    h1 {
*        display: none;
*    }
* }

## Vendredi 2020/10/16

Découverte des parametres 
* `display`
* `padding`
* `margin` 
* `border` 

### @media
Poursuite du TPFlex en responsive
### Positions
Découverte du parametre position et urilisation dasn le fichier position.html et position.css
* `static`
* `relative`
* `fixed` 
* `absolute` 
* `sticky`  

## Lundi 2020/10/19

Creation d'un CV à partir d'un model, en utilisent le html et CSS.
Tous le code demandé pour créee le CV est déjà expliquer dans les cours precedent.
Le CV doit etre responsive.
Le model du CV est ajouter sur SLACK en IMAGE
A la fin de journé le code est aussi envoyé sur SLACK

## Mardi 2020/10/20

Le matin, on continue sur le CV, explication du code du model.
Hierarchie des balises.

### Macquetter une application 

Nous avons devouvert le maquettage et disquter des 4 etapes de maquettage
Photo mis sur SLACK

* Zonning
* Wireframe
* Mockup
* Prototype

## Mercredi 2020/10/21

On reprend zoning / wireframe , et on apprend la distinction UX (plutot zoning/wireframe) / UI (plutôt mockup/prototype).

TP zoning / wireframe pour leur CV, sur diagrams.net.

Les questions portent sur les choix effectués en terme d'UX (pourquoi tel élément est là,pourquoi il fait cette taille ...) et sur les adaptations responsive.

Présentation d'éléments de design "standards", comme les règles proposées par le material design.

On a vu également quelques exemples de sites avec un bon UX/UI et d'autres catastrophiques.

## Jeudi 2020/10/22

Retour sur les wireframes et réalisation des mockups.

### Print CSS

Faire une version du css adaptée à l'impression pour générer un CV imprimé.

* [explication macro sur le site de mozilla](https://developer.mozilla.org/fr/docs/CSS/Premiers_pas/M%C3%A9dias#Impression)

### TODO

* [web design in 4 minutes](https://jgthms.com/web-design-in-4-minutes/)
* [interneting is hard](https://www.internetingishard.com/html-and-css/)

## Lundi 2020/10/26

Réalisation du site web pour le cv dont on avait fait le zoning, le wireframe et le mockup.

Obligation d'utiliser un positionnement fixed ou sticky pour le menu, et obligation de faire un site responsive.

Ceux qui ont eu le temps on essayé de faire une media query "print" que l'on peut voir en utilisant l'impression par chrome.

### Sélecteurs CSS

exo "inversé": à partir du sélecteur CSS proposer une arborescence HTML qui convient.

La subtilité s'est trouvée notamment dans le fait d'utiliser l'espace dans le sélecteur, et donc tous les enfants, petits enfants etc. se retrouvaient sélectionnés. Il fallait penser à ce cas là.

## Mardi 2020/10/27

### Javascript

* définition vs exécution
* définition de :
  * variables : `var maVariable = 2`
  * fonctions : `function maFonction (argument1) {var resultat = traitement(); return resultat;}`
* utilisation de la console du navigateur pour tester son code javascript

#### Fonction

C'est une boîte noire avec des entrées et une sortie.

### Typage variables

* string
* number
* array

On n'a pas vu les objets !! et c'est fait exprès :-)

### Commenter son code !

Indispensable ! surtout pour les fonctions javascript.

### Modification du html

1. on sélectionne l'élément à modifier grâce à un sélecteur CSS _qu'on connaît déjà_, et grâce aux fonctions `document.querySelector("selecteur>css.complique:first-child")`(pour récupérer le premier élément trouvé) et  `document.querySelectorAll("selecteur>css.complique:first-child")` (pour récupérer tous les éléments qui correspondent)
2. une fois récupéré dans une variable "elementHtml" (par exemple) on modifie `elementHtml.innerText = "TOTOTATATITI"` ou `elementHtml.InnerHTML = "<h2>Un nouveau H2</h2>"`

