const URLactual = window.location.pathname;
const categorias = document.querySelector(".categorias-contenedor");
const beneficios = document.querySelector(".beneficios-contenedor");



if (URLactual == "/") {
    categorias.classList.toggle("invisible");
    beneficios.classList.toggle("invisible");
}