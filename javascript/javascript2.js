const fruits = ["pomme", "fraise", "banane"];
var i;
var fruit;

const mesFruits = (f) => {
    for (i = 0; i < f.length; i++) {
        fruit = (f[i] == "fraise") ? 'je suis une ' + f[i] : 'je ne suis pas une fraise, je suis une ' + f[i];
        alert(fruit);
    }
}

mesFruits(fruits);

const fl = [{
    nom: "fraise",
    type: "fruit"
}, {
    nom: "pomme",
    type: "fruit"
}, {
    nom: "carotte",
    type: "legume"
}];


for (const ff of fl) {
    alert("c'est une " + ff.nom + " et c'est un " + ff.type);
}

for (i = 0; i < fl.length; i++) {
    alert("c'est une " + fl[i].nom + " et c'est un " + fl[i].type);
}



const fruits=["pomme","fraise","banane"];var i,fruit;const mesFruits=e=>{for(i=0;i<e.length;i++)fruit="fraise"==e[i]?"je suis une "+e[i]:"je ne suis pas une fraise, je suis une "+e[i],alert(fruit)};mesFruits(fruits);const fl=[{nom:"fraise",type:"fruit"},{nom:"pomme",type:"fruit"},{nom:"carotte",type:"legume"}];for(const e of fl)alert("c'est une "+e.nom+" et c'est un "+e.type);for(i=0;i<fl.length;i++)alert("c'est une "+fl[i].nom+" et c'est un "+fl[i].type);