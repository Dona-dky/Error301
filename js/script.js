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