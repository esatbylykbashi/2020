var a = 5;
/**
 * la condition switch à pour parametre 
 * une valeur ou une variable entre les () 
 * et elle fonctionne par des case (cas)
 * le break; permet de stoper le cas si la
 * valeur ce trouve das se cas 
 */
switch (a) {
    case "admin":
        alert("switch votre role est admin");
        break;
    case 5:
    case 6:

        alert("switch la valeur est 5");
        break;
    default:
        alert("switch rien");
}

if (a === "admin") {
    alert("if la valeur est 3");
} else if (a === 5) {
    alert("if la valeur est 5");
} else {
    alert("if rien");
}