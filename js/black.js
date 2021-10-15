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

function verif_win(){

    // on place les saisies dans des variables pour plus de commodité
    var verif = document.getElementById("passwordwin");
    code1 = verif.value;
    
    // si les deux saisies sont différentes :
    if ( code1 != "1468" ) {
    window.alert('Vous n\'avez pas saisi le bon code !');
    return false;
    }
    
    // si elles sont identiques
    else {
        document.getElementById('myPopup').style.display = "none";
        // var youwin = document.getElementById("winorloose");
        // youwin.style.display = "none";
        setTimeout(function(){
            window.alert('Félicitation, venez découvrir notre Escape game 301 (à 7 rue Auber 75009, PARIS) avec votre code promo : 5RF548. Votre identifiant exclusif : GLI301');
        },200) // stop après .10secondes
    
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
    
    }

}

function myPopUp() {
    var menu = document.getElementById("burgermenu");
    menu.classList.remove("showmenu");
    document.getElementById('myPopup').style.display = "block";
}
