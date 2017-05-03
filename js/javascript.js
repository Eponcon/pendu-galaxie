

//liste de mot qui s'affiche aléatoirement

var tableauMot = ["etoile", "lune", "galaxie", "planete", "nebuleuse", "univers", "comete", "astre", "lactee", "cosmos"];
console.log(tableauMot);

var motAleatoire = tableauMot[Math.floor(Math.random()*tableauMot.length)];
console.log(motAleatoire);

//afficher le nombre de case/input en fonction du nombre de lettres choisies

// generation du clavier 

var clavier = document.querySelector(".clavier");

console.log(clavier);

for( char of "abcdefghijklmnopqrstuvwxyz" ){
                clavier.innerHTML += "<div class='touche'>" + char + "</div>";
            
            }



//clique sur les lettres - vérifie si dans le mot choisi

var btnLettre = document.querySelectorAll(".touche");
console.log(btnLettre);


for (var i = 0; i < btnLettre.lenght; i++) {
btnLettre[i].addEventListener("click", compareLettreMot);
}

function compareLettreMot() {
    var lettrePresse = this.innerHtml;
    for (var i = 0; i < motsAleatoires.lenght; i++)
    if ( lettrePresse == motsAleatoire[i] ){
        console.log(lettrePresse);
        }
}




/* bouton rejouer - retour au début
var btnRejouer = document.querySelector(".rejouer");

btnRejouer.addEventListener("click", EcranAccueil);

function EcranAccueil (){
    
}*/
