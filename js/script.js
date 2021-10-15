// MENU BURGER
function myAnimation(x) {
    x.classList.toggle("animate");
}

function myBurgerFunction() {
    var menu = document.getElementById("burgermenu");
    menu.classList.toggle("showmenu");
}

// POPUP

function myPopUp() {
    document.getElementById('myPopup').style.display = "block";
}

//BUG

function showBug() {
    document.getElementById('myPopup').style.visibility = "hidden";
}

function myBug() {
    let bg = document.getElementById('container');
    bg.style.display = 'block';
    let count = 20;
    let sndcount = 10;

    // On crée 20 div qui portent la class box
    for (let i =0; i < count; i++){
        let glitchBox = document.createElement('div')
        glitchBox.className = 'box';
        // element.appendChild pour indiquer que ce soit à la suite ou dans un élément
        // ici dans le container 
        bg.appendChild(glitchBox);
    }

    for (let e =0; e < sndcount; e++){
        let blocBox = document.createElement('div')
        blocBox.className = 'sndbox';
        // element.appendChild pour indiquer que ce soit à la suite ou dans un élément
        // ici dans le container 
        bg.appendChild(blocBox);
    }

    // setInterval pour déclencher des action après un intervalle de temps donné, ou de la répéter après un intervalle de temps.
    // ici pour faire apparaitre des blocs toutes les 0.08 secondes (valeur en millisecondes)
    var refreshIntervalId = setInterval(function(){
        let glitch = document.getElementsByClassName('box');
        for (let i = 0; i < glitch.length; i++){
            glitch[i].style.left = Math.floor(Math.random()*100)+ 'vw';
            glitch[i].style.top = Math.floor(Math.random()*100)+ 'vh';
            glitch[i].style.width = Math.floor(Math.random()*400)+ 'px';
            glitch[i].style.height = Math.floor(Math.random()*100)+ 'px';
        }
    },80)

    setTimeout(function(){
        clearInterval(refreshIntervalId);
        bg.style.backgroundColor = 'black';

        // Faire disparaitre les blocs noirs
        let elemsbox = document.getElementsByClassName('box');
        for (let i=0;i<elemsbox.length;i+=1){
        elemsbox[i].style.display = 'none';
        }
        
        var refreshSndIntervalId = setInterval(function(){
            let bloc = document.getElementsByClassName('sndbox');
            for (let e = 0; e < bloc.length; e++){
                bloc[e].style.left = Math.floor(Math.random()*100)+ 'vw';
                bloc[e].style.top = Math.floor(Math.random()*100)+ 'vh';
                bloc[e].style.width = Math.floor(Math.random()*300)+ 'px';
                bloc[e].style.height = Math.floor(Math.random()*300)+ 'px';
            }
        },300)

        setTimeout(function(){
            clearInterval(refreshSndIntervalId);
            // document.body.style.backgroundColor = 'white';

            // Faire disparaitre les blocs blancs
            let elemsndbox = document.getElementsByClassName('sndbox');
            for (let i=0;i<elemsndbox.length;i+=1){
            elemsndbox[i].style.display = 'none';
            }
        },1000) // stop après .10secondes
    },1500) // stop après .15secondes

    setTimeout(function(){
            document.location.href="./test.html"; 
    }, 3500);

}

// REDIRECTION MENU BURGER

function redirection(){
    // var refreshmenu = document.getElementsByClassName("mainMenu");
    
    // setTimeout(location.reload.bind(location), 600);
    setTimeout(function(){
        // refreshmenu.classList.appendChild("animate");
            var refreshmenu = document.getElementById("bar1");
            refreshmenu.classList = "closebar1";

            
            var refreshmenu = document.getElementById("bar2");
            refreshmenu.classList = "closebar2";

            
            var refreshmenu = document.getElementById("bar3");
            refreshmenu.classList = "closebar3";

            var refreshburger = document.getElementById("burgermenu");

            refreshburger.classList += "close";
        // you can pass true to reload function to ignore the client cache and reload from the server
    },0); //delayTime should be written in milliseconds e.g. 1000 which equals 1 second
}

function verif_pass(){

    // on place les saisies dans des variables pour plus de commodité
    var verif = document.getElementById("password");
    code1 = verif.value;
    code2 = "3rr0r Eoi";
    
    // si les deux saisies sont différentes :
    if ( code1 != "3rr0r Eoi" ) {
    window.alert('Vous n\'avez pas saisi le même mot de passe !');
    return false;
    }
    
    // si elles sont identiques
    else {
        var byepass = document.getElementById("cadenas_site");
        byepass.style.display = "none";
    }
}