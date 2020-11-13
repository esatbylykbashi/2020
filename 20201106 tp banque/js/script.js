/**
 * Fonction qui récupère les données nécessaires
 * au calcul des revenus.
 * 
 * @returns {Array} Tableau des informations [total, salaire, duree]
 */
function getCalculInfos(cible) {
    var total = document.querySelector(
        "main>article#" + cible + ">section:first-of-type>h3>span"
    ).innerHTML;
    // parse float transforme une chaine de caractère en number
    // si la chaine a une "virgule" (nombre décimal)
    total = parseFloat(total);

    var salaire = document.querySelector(
        "article#" + cible + " form.calcul>input#salaire"
    ).value;
    salaire = parseFloat(salaire);

    var duree = document.querySelector(
        "article#" + cible + " form.calcul>input#duree"
    ).value;
    duree = parseInt(duree);

    return [total, salaire, duree];
}

/**
 * Fonction qui affiche le montant prévisionnel
 * dans le code html
 * 
 * @param {number} montantPrevisionnel 
 */
function affichePrevision(montantPrevisionnel, cible) {
    champResultat = document.querySelector(
        "article#" + cible + " form.calcul+h3>span"
    ).innerHTML = montantPrevisionnel;
}

/**
 * Ajoute le salaire donné sur le compte donné.
 * 
 * @param {number} compte 
 * @param {number} salaire 
 * @returns {number}
 */
function paieSalaire(compte, salaire) {
    return compte + salaire;
}

/**
 * Paie le salaire donné sur le compte donné, 
 * durant "duree" mois.
 * 
 * @param {number} compte Montant sur le compte
 * @param {number} salaire 
 * @param {number} duree Nombre, en mois, où le salaire est versé
 */
function paieSalairePendantDuree(compte, salaire, duree) {
    for (t = 0; t < duree; t++) {
        compte = paieSalaire(compte, salaire);
    }
    return compte;
}

/**
 * Fonction qui calcule le montant prévisionnel
 * disponible sur le compte, en fonction des
 * informations entrées par l'utilisateur dans le
 * formulaire.
 */
function calculePrevision(event, cible) {
    if (event) event.preventDefault();

    var infos = getCalculInfos(cible);
    var total = infos[0];
    var salaire = infos[1];
    var duree = infos[2];

    var compte = paieSalairePendantDuree(total, salaire, duree);

    affichePrevision(compte, cible);
}