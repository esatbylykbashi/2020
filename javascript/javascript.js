var mavariable = "mon site";
//alert(mavariable);


/** je declare ma fonction */
function mafonction(a, b) {
    var c = a + b;
    alert(c);
}


function condition(a, b) {
    var c = 10;
    a = a + c + 30;

    if (a > b) {
        alert("a est superieur à b car a=" + a + " b=" + b);
        mafonction(a, b);
    } else if (a == b) {
        alert("a est egale à b car a=" + a + " b=" + b);
    } else {
        alert("a est inferieur à b car a=" + a + " b=" + b);
    }

}

function conditionInterne() {
    var a = 10;
    var b = 20;

    a += 1;
    a = a + 1;

    if (a > b) {
        alert("condition 2 a est superieur à b car a=" + a + " b=" + b);
    } else if (a == b) {
        alert("condition 2 a est egale à b car a=" + a + " b=" + b);
    } else if (a < b) {
        alert("condition 2 a est egale à b car a=" + a + " b=" + b);
    } else if (a != b) {
        alert("condition 2 a est egale à b car a=" + a + " b=" + b);
    } else {
        alert("condition 2 a est inferieur à b car a=" + a + " b=" + b);
    }

}


function texte() {
    document.getElementById("titre").innerHTML = "test de changement du titre";
}



/** comptage des clicks */
var clicks = 0;

function modification(clicks) {

    document.getElementById("clicks").innerHTML = clicks;

    if ((clicks == 5 || clicks == 6) || clicks > 9) {
        document.getElementById("titre").innerHTML = "egal de 5 click";
        document.body.style.backgroundColor = "red";
    } else if (clicks > 6) {

        document.getElementById("titre").innerHTML = "plus de 5 click";
        document.body.style.backgroundColor = "green";
    } else {
        document.getElementById("titre").innerHTML = "moins de 5 click";
        document.body.style.backgroundColor = "white";
    }

}


function comptPlus() {
    clicks += 1;
    // clicks++;
    // clicks = clicks + 1;

    modificationSwitch(clicks);

}

function comptMinus() {
    clicks -= 1;
    modificationSwitch(clicks);
}


function modificationSwitch(clicks) {

    document.getElementById("clicks").innerHTML = clicks;


    switch (clicks) {
        case 5:
        case 6:

            document.getElementById("titre").innerHTML = "egal de 5 click";
            document.body.style.backgroundColor = "red";
            break;
        case 7:

            document.getElementById("titre").innerHTML = "egal de 7 click";
            document.body.style.backgroundColor = "green";
            break;

        default:
            document.getElementById("titre").innerHTML = "moins de 5 click";
            document.body.style.backgroundColor = "white";
    }


}

/** j'execute ma fonction */
//mafonction(50, b);

//conditionInterne();


/*
if (a > b) superieur
if (a >= b) superieur ou egale
if (a == b) egale
if (a == b || c == d) egale ou egale
if (a == b && c == d) egale et egale
if ((a == b && c == d) || e >= f) (egale et egale) ou  superieur ou egale
if (a <= b) inferieur ou egale
if (a < b) inferieur 
if (a != b) different

|| = ou
&& = et


*/