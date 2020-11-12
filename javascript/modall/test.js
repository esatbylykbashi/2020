function ouvrir_fenetre() {
    var modull = document.querySelector('.fenetre');
    modull.style.display = 'block';
    modull.style.backgroundColor = 'red';
}

function ferme_fenetre() {
    var ferme_modall = document.querySelector('.fenetre');
    ferme_modall.style.display = 'none';
}


function oFJquery() {
    $('.fenetre').show().css("background-color", "red");
}

function fFJquery() {
    $('.fenetre').hide();
}

function oShow(selecteur) {
    $(selecteur).show();

    $(selecteur).css("background-color", "red");
}

function fShow(selecteur) {
    $(selecteur).hide();
}