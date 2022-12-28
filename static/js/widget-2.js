const URLactual = window.location.pathname;
const categorias = document.querySelector(".categorias-contenedor");
const beneficios = document.querySelector(".beneficios-contenedor");
// const promos = document.querySelector(".promociones-contenedor");
// const newsletter = document.querySelector(".banner-newsletter");

if (URLactual == "/") {
    categorias.classList.toggle("invisible");
    beneficios.classList.toggle("invisible");
}
