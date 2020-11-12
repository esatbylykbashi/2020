
/*
var btn = document.querySelector('.btn');
var a  = document.body;


function changerCouleur() {

    if (a.classList.contains('dark')) {

        a.classList.remove('dark');
       
       
    }
    else {
       a.classList.add('dark');
      
    }

}


btn.addEventListener('click', changerCouleur);

*/  






//Modale 

//AFFICHER DIV DELETE DIV
var mod = document.querySelector('.modale');
var divAffiche = document.querySelector('.afficher-message')
var disnoe = document.querySelector('.div-none');

/*
function messageModale(){

    
if(divAffiche.style.display === "block"){
    divAffiche.style.display = "none";
}

else {
    divAffiche.style.display ="block";
}

}

mod.addEventListener('click',messageModale);
disnoe.addEventListener('click',messageModale);

*/



function fermer() {
    divAffiche.style.transform = "translateY(-100vh)";
    document.body.style.backgroundColor = "white";


}

function ouvrir() {

    divAffiche.style.transform = "translateY(0vh)";
    document.body.style.backgroundColor = "rgba(192, 188, 181,0.5)";

}

mod.addEventListener('click', ouvrir);
disnoe.addEventListener('click', fermer);
