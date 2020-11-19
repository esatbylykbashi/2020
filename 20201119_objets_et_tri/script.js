/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

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
  for (var i = 0; i < eleves.length; i++) {
    var eleve = eleves[i];
    document.querySelector("#tableauEleves").innerHTML +=
      "<tr><td>" +
      eleve.nom +
      "</td><td>" +
      eleve.prenom +
      "</td><td class='age'>" +
      eleve.age +
      "</td></tr>";
  }
}

var bascules = {"nom" : null, "prenom" : null, "age": null };

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
  console.log(eleves)
  // pour trier, je dois pouvoir comparer les éléments de la liste entre eux !
  // ex : [2, 5, 1]  : 1 < 2 < 5
  function comparerParPropriete (eleve1, eleve2) {
    return comparerEleve(eleve1, eleve2, propriete);
  }
  
  eleves.sort(comparerParPropriete);
  
  videTableau();
  afficheEleves(eleves);
}

/**
 * Fonction qui permet de comparer 2 objets "élève"
 *
 * @param {Object} eleve1
 * @param {Object} eleve2
 * @param 
 * @returns {number} 1 si eleve1 > eleve2, -1 sinon
 */
function comparerEleve(eleve1, eleve2, propriete) {
  if (bascules[propriete] === null || bascules[propriete] === true){
    var greater = eleve1[propriete] > eleve2[propriete] ? 1 : -1;
  }
  else {
    var greater = eleve1[propriete] < eleve2[propriete] ? 1 : -1;
  }
  return greater;
}
