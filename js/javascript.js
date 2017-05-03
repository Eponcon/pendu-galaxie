

//liste de mot qui s'affiche aléatoirement

var tableauMot = ["etoile", "lune", "galaxie", "planete", "nebuleuse", "univers", "comete", "astre", "lactee", "cosmos"];
console.log(tableauMot);

var motAleatoire = tableauMot[Math.floor(Math.random()*tableauMot.length)];
console.log(motAleatoire);

//afficher le nombre de case/input en fonction du nombre de lettres choisies



//clique sur les lettres - vérifie si dans le mot choisi

//var btnLettre = document.querySelectorAll(".touche");
console.log(btnLettre);

btnLettre.addEventListener("click", enclencheUneLettre);

function enclencheUneLettre () {
    
}


// generation du clavier 

var clavier = document.querySelector(".clavier");

console.log(clavier);

for( char of "abcdefghijklmnopqrstuvwxyz" ){
                clavier.innerHTML += "<div class='touche'>" + char + "</div>";
            
            }



/* bouton rejouer - retour au début
var btnRejouer = document.querySelector(".rejouer");

btnRejouer.addEventListener("click", EcranAccueil);

function EcranAccueil (){
    
}*/
