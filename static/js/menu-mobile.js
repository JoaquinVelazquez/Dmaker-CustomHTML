let flechaElectronica = document.querySelector(".electronica-flecha");
let flechaElectrodomesticos = document.querySelector(".electrodomesticos-flecha");
let flechaComputacion = document.querySelector(".computacion-flecha");
let flechaHerramientas = document.querySelector(".herramientas-flecha");
let flechaOtros = document.querySelector(".otros-flecha");

let submenuElectronica = document.querySelector(".electronica-mobile");
let submenuElectrodomesticos = document.querySelector(".electrodomesticos-mobile");
let submenuComputacion = document.querySelector(".computacion-mobile");
let submenuHerramientas = document.querySelector(".herramientas-mobile");
let submenuOtros = document.querySelector(".otros-mobile");

flechaElectronica.addEventListener("click", function(){
    submenuElectronica.classList.toggle("invisible");
    flechaElectronica.classList.toggle("rotacion");
});

flechaElectrodomesticos.addEventListener("click", function(){
    submenuElectrodomesticos.classList.toggle("invisible");
    flechaElectrodomesticos.classList.toggle("rotacion");
});

flechaComputacion.addEventListener("click", function(){
    submenuComputacion.classList.toggle("invisible");
    flechaComputacion.classList.toggle("rotacion");
});

flechaHerramientas.addEventListener("click", function(){
    submenuHerramientas.classList.toggle("invisible");
    flechaHerramientas.classList.toggle("rotacion");
});

flechaOtros.addEventListener("click", function(){
    submenuOtros.classList.toggle("invisible");
    flechaOtros.classList.toggle("rotacion");
});