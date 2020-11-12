function validateForm(a) {
    //alert(a);
    var r = false;

    var monForm = document.forms[a];
    var nom = monForm["nom"];
    var prenom = monForm["prenom"].value;
    var mail = monForm["mail"].value;
    var tel = monForm["tel"].value;
    var mdp = monForm["mdp"].value;
    var mdpConfirm = monForm["mdpConfirm"].value;

    var mdpNC = mdp.length;
    var nomFormCN = nomForm.length;

    alert(nom.type);
    alert(nom.value);
    alert(nom.value.length);

    if (mdpNC < 6 || mdpNC > 8) {
        document.getElementById("message").innerHTML = "mdp faut en 6 et 8";
        document.getElementById("message").style.color = "red";
        mafonction(10, 2);

    }

    if (nom.value == "") {
        document.getElementById("message").innerHTML = "le nom est obligatoire";
        document.getElementById("message").style.color = "red";
    } else if (prenom == "") {
        document.getElementById("message").innerHTML = "le prenom est obligatoire";
        document.getElementById("message").style.color = "red";
    } else if (mail == "" || tel == "") {
        document.getElementById("message").innerHTML = "le mail et le tel sont obligatoire";
        document.getElementById("message").style.color = "red";
    } else if ((mdp != mdpConfirm) || (mdp == "" || mdpConfirm == "")) {
        document.getElementById("message").innerHTML = "le mdp ne pas identique";
        document.getElementById("message").style.color = "red";
    } else {
        r = true;
    }

    return r;
}