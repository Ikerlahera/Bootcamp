"use strict";
function operacion(boton) {
    const imprimir = document.getElementById("imprimir");
    imprimir.value += boton;
}
function calcular() {
    const imprimir = document.getElementById("imprimir");
    imprimir.value = eval(imprimir.value);
}
function reset() {
    const imprimir = document.getElementById("imprimir");
    imprimir.value = "";
}
function borrar() {
    const imprimir = document.getElementById("imprimir");
    imprimir.value = imprimir.value.slice(0, -1);
}
