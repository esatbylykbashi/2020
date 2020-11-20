/**
 * Au début on a appris les listes simples !
 */
var produits = ["velo", "casserole", "ordinateur", "telephone"]; // etc.
var prix = [130, 12, 3000, 150];
var descriptions = []; // vous m'avez compris !

console.log(produits[0], prix[0], descriptions[0]);

// cela nous permet d'afficher une liste de produits !
// mais les infos sont décorrelées, un problème dans une des listes casse tout !!

/**
 * Solution "des listes dans la liste" !!
 *
 */
var infos = [
  ["velo", 130, "bleu", "super vélo bleu avec suspensions"],
  ["casserole", 12, "", "un peu abimée"],
  ["ordinateur", 3000, "", "c'est un mac !!!"],
  ["telephone", 150, "", "neuf et doré "]
];

var element = infos[0];
console.log(element[0], element[1], element[2], element[3]);

// element[0] => nom
// element[1] => prix
// element[2] => description

/**
 * On peut utiliser des "index" autres que des chiffres dans les listes !
 * par ex : element[0] => index "0"
 *          element["nom"] => index "nom" (on peut aussi l'écrire element.nom )
 */

var infos_objet = [
  {
    nom: "velo",
    prix: 130,
    description: "super vélo bleu avec suspensions",
    couleur: "bleu"
  }, // c'est un objet !!
  {
    nom: "casserole",
    prix: 12,
    description: "un peu abimée"
  },
  {
    nom: "ordinateur",
    prix: 3000,
    description: "c'est un mac !!!",
    marque: "apple"
  },
  {
    nom: "telephone",
    prix: 150,
    description: "neuf et doré "
  }
];

var element_objet = infos_objet[0];
console.log(
  element_objet.nom,
  element_objet["prix"],
  element_objet.description,
  element_objet.couleur
);

/**
 * Exercice : créer une liste d'objets élèves et l'afficher en html
 *
 * ex: {nom: "durant", prenom: "jean michel"}
 * et j'ai la liste eleves qui va en contenir plusieurs
 */
var eleves = [
  {
    nom: "vador",
    prenom: "dark",
    age: "55"
  },
  {
    nom: "kim",
    prenom: "goku",
    age: "40"
  },
  {
    nom: "luffy",
    prenom: "monkey d.",
    age: "17"
  },
  {
    nom: "uzumaki",
    prenom: "naruto",
    age: "18"
  },
  {
    nom: "baggins",
    prenom: "frodo",
    age: "50"
  }
];

/**
 * Affiche un tableau d'élèves
 */
function afficheEleves(eleves) {
  // On commence par vider le tableau :
  videTableau(); 
  
  // Puis on le remplit :
  for (var i = 0; i < eleves.length; i++) {
    var eleve = eleves[i];
    document.querySelector("#tableauEleves").innerHTML +=
      "<tr><td>" +
      eleve.nom +
      "</td><td>" +
      eleve.prenom +
      "</td><td class='age'>" +
      eleve.age +
      "</td><td>" +
      noter(eleve, votreFonction )+
      "</td></tr>";
  }
}

var ascendant = {"nom" : undefined, "prenom" : undefined, "age": undefined };

// On vide le "table"
function videTableau() {
    document.querySelector("#tableauEleves").innerHTML = ""
}

// Execute le premier affichage du tableau d'élèves
afficheEleves(eleves);

/**
 * Fonction qui trie la listes des élèves, en fonction de la propriété donnée
 * @param {Array} eleves liste des elèves
 * @param {string} propriete Propriété à comparer
 */
function trieEleve(eleves, propriete) {
  // Est-ce que le tri est ascendant (du plus petit au plus grand) ou descendant ?
  if (ascendant[propriete] === undefined || ascendant[propriete] === true){
    var order = "ASC";
    ascendant[propriete] = false;
  }
  else {
    var order = "DESC";
    ascendant[propriete] = true;
  }
  // pour trier, je dois pouvoir comparer les éléments de la liste entre eux !
  // ex : [2, 5, 1]  : 1 < 2 < 5  
  eleves.sort(comparerEleve.bind(null, propriete, order));
  
  // Puis je remplis le tableau avec 
  afficheEleves(eleves);
}

/**
 * Fonction qui permet de comparer 2 objets "élève"
 *
 * @param {Object} eleve1
 * @param {Object} eleve2
 * @param {string} propriete Propriété sur laquelle on trie
 * @returns {number} 1 si eleve1 > eleve2, -1 sinon
 */
function comparerEleve(propriete, order, eleve1, eleve2 ) {
  if (order === "ASC"){
    var greater = eleve1[propriete] > eleve2[propriete] ? 1 : -1;
  }
  else {
    var greater = eleve1[propriete] < eleve2[propriete] ? 1 : -1;
  }
  return greater;
}

/**
 * Pour apprendre à utiliser les fonctions en paramètre :
 *
 * Sans toucher à la fonction "noter", créez une fonction "calculeNote(eleve)"
 * à passer en deuxième argument à "noter" (l.128) pour influencer le calcul.
 * Le but est qu'à la fin Naruto ait 20/20 et les autres 0.
 *
 * @param {Object} eleve L'eleve à noter
 * @param {func} calcul La fonction qui permet de calculer la note de l'élève sinon "random"
 */
function noter(eleve, calcul = undefined){
  if (calcul === undefined){
    calcul = function() { return Math.round(Math.random() * 20); };
  }
  return calcul(eleve);
}

// Plus haut on appelle : noter(eleve, votreFonction) 
/**
 * Fonction qui prend un objet élève et qui renvoie sa note !
 *
 * @param {Object} eleve Eleve dont on veut la note
 */
function votreFonction (eleve)  {
  var resultat = (eleve.prenom === "naruto") ? 20 : 0;
  return resultat;
}
