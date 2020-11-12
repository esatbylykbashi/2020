/**
 * je decrale une variable "cars" et j'alimente par une tableau 
 * la difference entre une variable avec une seule valeur, et une variable
 * avec un tableau, cest que le la variable contiens plusieurs valeurs
 * les taleau fonction par "position" autrement appeler "clé", la premiere position c'est 0 puis 1,2...
 */

var cars = ["Saab", "Volvo", "BMW", "citroen", "renault", "peugeot"];


//var cars = new Array("Saab", "Volvo", "BMW");
//alert(cars[2]);
//document.querySelector("#voitures").innerHTML = "<li>" + cars[1] + "</li>";

//alert(cars.length);

for (i = 0; i < cars.length; i++) {
    document.querySelector("#voitures").innerHTML += "<li>position(clé) : " + i + " valeur: " + cars[i] + "</li>";
}


var google = ["google", "http://google.fr"];
var yahoo = ["yahoo", "http://yahoo.fr"];

var menu = ["accueil", google[0], yahoo[0], "w3schools", "youtube", "amazone"];
var menuLien = ["#accueil", google[1], yahoo[1], "http://youtube.com", "http://w3schools.com"];
//alert("menu : " + menu.length + " menuLien : " + menuLien.length);


var lignes = 0;
if (menu.length <= menuLien.length) {
    lignes = menu.length;
} else {
    lignes = menuLien.length;
}

for (i = 0; i < lignes; i++) {
    document.querySelector("#menu").innerHTML += "<li><a href='" + menu[i] + "' target='_blank'>" + i + " : " + menu[i] + "</a></li>";
}


var menu2 = [
    ["google", "http://google.fr"], // 0 [0,1]
    ["yahoo", "http://yahoo.fr"], // 1 [0,1]
    ["youtube", "http://youtube.fr"], // 2 [0,1]
];


for (i = 0; i < menu2.length; i++) {
    document.querySelector("#menu2").innerHTML += "<li><a href='" + menu2[i][1] + "' target='_blank'>" + i + " : " + menu2[i][0] + "</a></li>";
}