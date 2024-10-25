"use strict";
function operacion(boton) {
    const imprimir = document.getElementById("imprimir");
    imprimir.value += boton;
}
function calcular() {
    const imprimir = document.getElementById("imprimir");
    const resultado = eval(imprimir.value);
    imprimir.value = resultado % 1 === 0 ? resultado.toString() : resultado.toFixed(2);
}
function reset() {
    const imprimir = document.getElementById("imprimir");
    imprimir.value = "";
}
function borrar() {
    const imprimir = document.getElementById("imprimir");
    imprimir.value = imprimir.value.slice(0, -1);
}
