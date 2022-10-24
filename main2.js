
const dropmenu = document.querySelector(".menu-drop");
const prueba = document.querySelector(".prueba2");

dropmenu.addEventListener('mouseenter', toggleprueba);

function toggleprueba() {
    prueba.classList.remove("inactive");
}

prueba.addEventListener('pointerout', desplegar);
function desplegar(){
prueba.classList.toggle('inactive')
}