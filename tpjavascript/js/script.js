/**
 * Fonction qui attache 2 mots séparés
 * par un espace
 * 
 * @param {string} mot1 le premier argument
 * @param {string} mot2 
 * @returns {string} La chaine de caractère concaténée
 */
function attache(mot1, mot2) {
    var texte = mot1 + " " + mot2;
    var texte2 = texte + " !";

    return texte2;
}

/**
 * Attache les 2 textes puis les affiche dans
 * une "alert".
 * 
 * @param {string} texte1 
 * @param {string} texte2 
 */
function attacheEtAffiche(texte1, texte2) {
    var message = attache(texte1, texte2);
    alert(message);
    var ok = "ok c'est bon";
    return ok;
}

/**
 * Multiplie 2 chiffres
 * 
 * @param {number} a Premier chiffre 
 * @param {number} b Deuxieme chiffre (l'ordre n'importe pas)
 * @returns {number} La multiplication de a et b: a * b
 */
function multiplie(a, b) {
    return a * b;
}

/**
 * Cette fonction est polie et salue l'utilisateur "prenom"
 * 
 * @param {string} prenom 
 * @returns {string} Bonjour "prénom"
 */
function bonjour(prenom) {
    var message = attache("Bonjour", prenom);
    return message;
}

/**
 * Fonction bien élevée qui dit au revoir à l'utilisateur.
 * 
 * @param {string} prenom 
 * @returns {string} Au revoir "prenom"
 */
function aurevoir(prenom) {
    var message = attache("Au revoir", prenom);
    return message;
}

/**
 * Fonction interactive qui demande à l'utilisateur son 
 * prénom et qui renvoie le résultat de bonjour(prenom).
 * 
 * @returns {string} la chaine en sortie de bonjour(prenom)
 */
function interactifBonjour() {
    var prenom = prompt("Quel est votre prénom ?");
    var message = bonjour(prenom);
    return message;
}

/**
 * Change le bouton dont l'id est "direbonjour", 
 * pour mettre le résultat d'interactifBonjour.
 */
function changeButton() {
    var message = interactifBonjour();
    var button = document.querySelector("main.select>button#direbonjour");
    button.innerText = message;
}