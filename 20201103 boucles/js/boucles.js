/*
var a = 0;
while (a <= 5) {
    console.log("a = " + a)
    if (a == 3) {
        //  alert("a = " + a);

    }

    a++;
}*/


/** boucle FOR 
 * parametre 1  c=1 on commance la boucle par 1
 * parametre 2  tant que c <= 10 continue la boucle
 * c++ ancremente la variable c par 1  
 */

for (c = 1; c <= 10; c++) {
    console.log(c);
}

/** boucle WHILE 
 * je declare une variable var c=1 pour commance la boucle par 1
 * je met comme parametre tant que c <= 10 continue la boucle
 * c++ ancremente la variable c par 1  
 */

var c = 1;

while (c <= 10) {
    console.log(c);
    c++
}



var ligne = "",
    col = "",
    color = "";

for (c = 1; c <= 10; c++) {


    if (c == 5) {
        color = " style='color:green'";
    } else {
        color = "";
    }

    ligne += "<tr" + color + "><td style='color:red'> N° " + c + "</td>";

    for (d = 1; d <= 10; d++) {
        col += "<td>" + d + "</td>";
    }

    ligne += col + "</tr>";
    col = "";
}

//document.getElementById("maTable").innerHTML = ligne;

/*
for (c = 1; c <= 10; c++) {
    document.getElementById("maTable").innerHTML += "<tr><td>" + c + "</td><td>ligne " + c + "</td></tr>";
}


var c = 1;
while (c <= 10) {
    document.getElementById("maTable").innerHTML += "<tr><td>" + c + "</td><td>nous somme à la ligne " + c + "</td></tr>";
    c++
}


var b = 5;
while (b >= 0) {
    console.log("b = " + b)
    b--;
}
*/



var num = 0;

function ajout() {
    var prenom = prompt("entrer votre prénom");
    var nom = prompt("entrer votre nom");

    if (prenom && nom) {
        num = num + 1;
        document.getElementById("annuaire").innerHTML += "<tr><td>" + num + "</td><td>" + prenom + "</td><td>" + nom + "</td></tr>";
    } else {
        alert("la ligne n'est pas ajouter.");
    }

}

function ajoutLignes() {
    var ligne = prompt("nombre des lignes ?");
    /*
        for (i = 1; i <= ligne; i++) {
            ajout();
        }
    */

    var i = 1;
    while (i <= ligne) {
        ajout();
        i++
    }
}