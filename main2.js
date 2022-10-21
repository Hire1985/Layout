
const dropmenu = document.querySelector(".menu-drop");
const prueba = document.querySelector(".prueba2");

dropmenu.addEventListener('mousemove', toggleprueba);

function toggleprueba() {
    console.log("hola");
    prueba.classList.toggle("inactive");
}