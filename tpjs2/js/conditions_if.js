/**
 * conditions if 
 * 
    if (condition) {
        action
    }
 */

var a = 5; //int
var b = "10"; //string
var c = 20;
var d = 30;


/**
 * if
 * else if
 * else
 * 
 * == comapre la valeur
 * === compare la valeure et le type (string ou int) 
 *
 * > superieur
 * < inferieur
 * 
 * >= superieur ou egale
 * <= inferieur ou egale
 * 
 * != different de
 * 
 * && et
 * 
 * || ou
 * */


// si vrais (true)
if (a == b) {
    alert("vrais a == b");
} else if (c === d) {
    alert("vrais c == d");
} else {
    alert("faux");
}

// si vrais (true)
if (a) {
    alert("vrais");
} else {
    alert("faux");
}

// si different 
if (!a) {
    alert("faux");
} else {
    alert("vrais");
}


// == egale
if (a == b) {
    alert("vrais");
} else {
    alert("faux");
}

// > superieur
if (a > b) {
    alert("a est superieur à b car a=" + a + " et b =" + b);
} else {
    alert("a est inferieur à b car a=" + a + " et b =" + b);

}

// < inferieur
if (a < b) {
    alert("a est superieur à b car a=" + a + " et b =" + b);
} else {
    alert("a est inferieur à b car a=" + a + " et b =" + b);

}

// >= superieur ou egale
if (a >= b) {
    alert("a est superieur ou egale à b car a=" + a + " et b =" + b);
} else {
    alert("a est inferieur à b car a=" + a + " et b =" + b);

}

// <= inferieur ou egale
if (a <= b) {
    alert("a est inferieur ou egale à b car a=" + a + " et b =" + b);
} else {
    alert("a est superieur   à b car a=" + a + " et b =" + b);
}

// != different de
if (a != b) {
    alert("a est different du b car a=" + a + " et b =" + b);
} else {
    alert("a est identique à b car a=" + a + " et b =" + b);
}

// && et
if (a == b && c == d) {
    alert("vrais condition ET");
} else {
    alert("faux condition ET");
}

// || ou
if (a == b || c == d) {
    alert("vrais condition OU");
} else {
    alert("faux condition OU");
}
// == && || >= 
if ((a == b && c == d) || (d >= b)) {
    alert("vrais condition OU");
} else {
    alert("faux condition OU");
}


/**
 * contiditon ternary
 * (condition) ? = if
 * : = else
 */
var resultat = (a == 10) ? "la valeur est 10" : "la valeur est autre que 10";
alert(resultat);