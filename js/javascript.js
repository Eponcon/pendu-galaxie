//liste de mots qui s'affichent aléatoirement

var tableauMot = ["etoile", "lune", "galaxie", "planete", "nebuleuse", "univers", "comete", "astre", "lactee", "cosmos"];
console.log(tableauMot);

var motAleatoire = tableauMot[Math.floor(Math.random()*tableauMot.length)];
console.log(motAleatoire);



// generation du clavier 

var clavier = document.querySelector(".clavier");
console.log(clavier);

for( char of "abcdefghijklmnopqrstuvwxyz" ){
                clavier.innerHTML += "<div class='touche'>" + char + "</div>";
            }


// générer des case input en fonction du nombre de lettre

var lesInputs = document.querySelector("#input");
for (var i=0; i<motAleatoire.length; i++){
    lesInputs.innerHTML += "<input class='input-lettre'>" + "" + "</input>";
}


//écouteurs évenements : clique sur les lettres - vérifie si dans le mot choisi

var btnLettre = document.querySelectorAll(".touche");
console.log(btnLettre);


for (var i = 0; i < btnLettre.length; i++) {
btnLettre[i].addEventListener("click", compareLettreMot);
}

var inputLettre = document.querySelectorAll(".input-lettre");
var coup = 0;
var nbCoups = 6;

//la comparaison entre  la valeurbtnlettre et le mot aléatoire
 
function compareLettreMot() {
    var lettrePresse = this.innerHTML;
    console.log(lettrePresse);
    for (var i = 0; i < motAleatoire.length; i++){
        
        if ( lettrePresse == motAleatoire[i] ){
        inputLettre[i].value = lettrePresse; 
        }
    }

    //reconsituer le mot avec les lettres dans le inputs
    
    var motReconstitue = "";
        for (var i = 0; i < inputLettre.length ; i++){
           motReconstitue += inputLettre[i].value;
       }
        
        if( motReconstitue == motAleatoire){
            console.log("gagné");
        }
    
        else {
            if (coup > 6) {
                console.log("perdu");      
           }
           else {
                coup++;
            }
  
       }
    
    
   }








//bouton rejouer 
var btnRejouer = document.querySelector(".rejouer");

btnRejouer.addEventListener("click", EcranAccueil);

function EcranAccueil (){
    
}
