function changeTitre() {
    document.getElementById("titre").innerHTML = "<button>HELLO</button>";



}





var monClick = 0;

function resultat(c) {

    if ((c <= 5) || (c >= 7 && c < 10)) {
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";
    } else if (c >= 10) {
        document.body.style.backgroundColor = "green";
        document.body.style.color = "blue";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "red";
    }

    document.getElementById("compte").innerHTML = c;
}



function comptPlus() {
    monClick++;
    // monClick = monClick + 1;
    // monClick += 1;
    //document.getElementById("compte").innerHTML = monClick;    
    resultat(monClick);
}

function comptMinus() {
    if (monClick > 0) {
        monClick--;
    }
    // monClick = monClick - 1;
    // monClick -= 1;
    // document.getElementById("compte").innerHTML = monClick;
    resultat(monClick);
}