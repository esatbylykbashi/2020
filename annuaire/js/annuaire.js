function fermerFenetre(cible) {
    $(cible).hide();
}


//document.forms["nomDuFormulaire"]['nom'].value; //js
//$("nom").val(); //jquery


document.querySelector(".fenetre").style.display = "none"; // javascript
$(".fenetre").hide(); // jquery

document.querySelector(".fenetre").style.display = "block";
$(".fenetre").show();

document.querySelector("p").innerHTML; // javascript GET
$("p").html(); // jquery GET

document.querySelector("p").innerHTML = "hello"; // javascript SET
$("p").html("hello"); // jquery SET


document.querySelector("p").innerHTML = ""; // javascript SET vide
$("p").html(""); // jquery SET vide