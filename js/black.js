// MENU BURGER
function myAnimation(x) {
    x.classList.toggle("animate");
}
// prompt('Avez-vous obtenu un code sur le jeu ? Si oui, lequel ?');

function myBurgerFunction() {
    var menu = document.getElementById("burgermenu");
    menu.classList.toggle("showmenu");
}

// POPUP

function myPopUp() {
    document.getElementById('myPopup').style.display = "block";
}


// REDIRECTION MENU BURGER

function redirection(){
    // setTimeout(location.reload.bind(location), 600);
    setTimeout(function(){
        window.location.reload(); // you can pass true to reload function to ignore the client cache and reload from the server
    },0); //delayTime should be written in milliseconds e.g. 1000 which equals 1 second
}



// WIN OR LOOSE

function endgame() {
    // var wiin = document.getElementById('winorloose');
        // wiin.classList = "maybewin";
        // document.getElementById('textmenu').style.display = "none";
        prompt("Entrez le code");
        window.alert('Félicitation ! Venez découvrir Escape game 301 (à 7 rue Auber 75009, PARIS) avec votre code promo : 5RF548. Votre identifiant exclusif : GLI301');

        // document.getElementById('winorloose').style.visibility = "visible";
}
    // document.getElementsByClassName('popupwin').style.display = "block";
//}

// function verif_win(){

//     // on place les saisies dans des variables pour plus de commodité
//     var verif = document.getElementById("passwordwin");
//     code1 = verif.value;
//     code2 = "1468";
    
//     // si les deux saisies sont différentes :
//     if ( code1 != "1468" ) {
//     window.alert('Vous n\'avez pas saisi le bon mot de passe !');
//     return false;
//     }
    
//     // si elles sont identiques
//     else {
//         var youwin = document.getElementById("winorloose");
//         youwin.style.display = "none";
//         window.alert('Félicitation, venez découvrir notre escape game 301 à Paris en plus de votre nouveau code promo : 5RF548');
    
    // Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     const uluru = { lat: -25.344, lng: 131.036 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//       position: uluru,
//       map: map,
//     });
//   }
    
  //  }

    


//}
