/**
 * la declaration de ma premiere fonction "maFonction()" sans parametres
 */

function maFonction() {
    var a = 2;
    var b = 3;
    var c = a + b;

    alert(c);
}

/**
 * j'execute ma fonction "maFonction()" dans le fichier javascript.js
 */
//maFonction();


/**
 * ma fonction avec un "a" parametre
 */
function maF1(a) {
    var b = 10
    alert(a + b);
}

/**
 * ma fonction avec 2 parametres "a" et "b"
 */

function maF2(a, b) {
    alert(a + b);
}

/**
 * ma fonction avec 2 parametres "a" et "b" definis par defaut
 */
function maF3(a = 5, b = 10) {
    alert(a + b);
}