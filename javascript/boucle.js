document.addEventListener('DOMContentLoaded', function() {

    var text = "";
    var i;

    var cars = ["BMW", "mercedes", "renault", "citroen", "laborgini"];
    var url = ["https://www.bmw.fr", "https://www.mercedes-benz.fr", "https://www.renault.fr", "https://www.citroen.fr/", "https://google.fr"];

    cars.push("Lemon");
    url.push("http://yahoo.fr");
    console.log(cars);
    var c = cars.length;

    text = "<ul >";

    for (i = 0; i < c; i++) {
        text += "<li><a href='" + url[i] + "' target='_blanc'>" + cars[i] + "</a></li>";
    }

    text += "</ul>";
    //alert(text);
    document.getElementById("menu").innerHTML = text;

}, false);