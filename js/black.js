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
    },10); //delayTime should be written in milliseconds e.g. 1000 which equals 1 second
}
