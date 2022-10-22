
const dropmenu = document.querySelector(".menu-drop");
const prueba = document.querySelector(".prueba2");

dropmenu.addEventListener('mousemove', toggleprueba);

function toggleprueba() {
    prueba.classList.remove("inactive");
}

prueba.addEventListener('mouseout', desplegar);
function desplegar(){
prueba.classList.add('inactive')
}