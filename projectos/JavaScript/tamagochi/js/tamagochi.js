"use strict";
let tamagochi = document.getElementById("tamagochi");
let tamagochivivo = "vivo.webp";
let tamagochimuerto = "muerto.webp";
let progresoeat = 100;
let porcentajeeat = document.getElementById("porcentajeeat");
const barraProgresoeat = document.getElementById("barraeat");
const helados = document.getElementById("helado");
const zanahorias = document.getElementById("zanahoria");
const pollos = document.getElementById("pollo");
function tiempobarraeat() {
    porcentajeeat.innerText = progresoeat + "%";
    if (progresoeat > 0) {
        progresoeat -= 1;
        barraProgresoeat.style.width = progresoeat + "%";
    }
    // const tamagochisrc = tamagochi.src.split("/").pop();
    // if(progresoeat == 0 && tamagochisrc != tamagochimuerto) {
    //     tamagochi.src = "img/" + tamagochimuerto;
    // } 
    // if (progresoeat > 0 && tamagochisrc != tamagochivivo) {
    //     tamagochi.src = "img/" + tamagochivivo;
    // }
}
function helado() {
    if (progresoeat + 2 <= 100) {
        progresoeat += 2;
        barraProgresoeat.style.width = progresoeat + "%";
    }
    else {
        progresoeat = 100;
        barraProgresoeat.style.width = progresoeat + "%";
    }
}
function zanahoria() {
    if (progresoeat + 5 <= 100) {
        progresoeat += 5;
        barraProgresoeat.style.width = progresoeat + "%";
    }
    else {
        progresoeat = 100;
        barraProgresoeat.style.width = progresoeat + "%";
    }
}
function pollo() {
    if (progresoeat + 10 <= 100) {
        progresoeat += 10;
        barraProgresoeat.style.width = progresoeat + "%";
    }
    else {
        progresoeat = 100;
        barraProgresoeat.style.width = progresoeat + "%";
    }
}
setInterval(tiempobarraeat, 100);
helados.addEventListener("click", helado);
zanahorias.addEventListener("click", zanahoria);
pollos.addEventListener("click", pollo);
let progresoplay = 100;
let porcentajeplay = document.getElementById("porcentajeplay");
const barraProgresoplay = document.getElementById("barraplay");
const consolas = document.getElementById("consola");
const rugbys = document.getElementById("rugby");
const ajedrezs = document.getElementById("ajedrez");
function tiempobarraplay() {
    porcentajeplay.innerText = progresoplay + "%";
    if (progresoplay > 0) {
        progresoplay -= 1;
        barraProgresoplay.style.width = progresoplay + "%";
    }
    // const tamagochisrc = tamagochi.src.split("/").pop();
    // if(progresoplay == 0 && tamagochisrc != tamagochimuerto) {
    //     tamagochi.src = "img/" + tamagochimuerto;
    // } 
    // if (progresoplay > 0 && tamagochisrc != tamagochivivo) {
    //     tamagochi.src = "img/" + tamagochivivo;
    // }
}
function consola() {
    if (progresoplay + 2 <= 100) {
        progresoplay += 2;
        barraProgresoplay.style.width = progresoplay + "%";
    }
    else {
        progresoplay = 100;
        barraProgresoplay.style.width = progresoplay + "%";
    }
}
function rugby() {
    if (progresoplay + 5 <= 100) {
        progresoplay += 5;
        barraProgresoplay.style.width = progresoplay + "%";
    }
    else {
        progresoplay = 100;
        barraProgresoplay.style.width = progresoplay + "%";
    }
}
function ajedrez() {
    if (progresoplay + 10 <= 100) {
        progresoplay += 10;
        barraProgresoplay.style.width = progresoplay + "%";
    }
    else {
        progresoplay = 100;
        barraProgresoplay.style.width = progresoplay + "%";
    }
}
setInterval(tiempobarraplay, 100);
consolas.addEventListener("click", consola);
rugbys.addEventListener("click", rugby);
ajedrezs.addEventListener("click", ajedrez);
let progresosleep = 100;
let porcentajesleep = document.getElementById("porcentajesleep");
const barraProgresosleep = document.getElementById("barrasleep");
const siestas = document.getElementById("siesta");
const dormidas = document.getElementById("dormir");
function tiempobarrasleep() {
    porcentajesleep.innerText = progresosleep + "%";
    if (progresosleep > 0) {
        progresosleep -= 1;
        barraProgresosleep.style.width = progresosleep + "%";
    }
    // const tamagochisrc = tamagochi.src.split("/").pop();
    // if(progresosleep == 0 && tamagochisrc != tamagochimuerto) {
    //     tamagochi.src = "img/" + tamagochimuerto;
    // } 
    // if (progresosleep > 0 && tamagochisrc != tamagochivivo) {
    //     tamagochi.src = "img/" + tamagochivivo;
    // }
}
function siesta() {
    if (progresosleep + 25 <= 100) {
        progresosleep += 25;
        barraProgresosleep.style.width = progresosleep + "%";
    }
    else {
        progresosleep = 100;
        barraProgresosleep.style.width = progresosleep + "%";
    }
}
function dormir() {
    if (progresosleep + 50 <= 100) {
        progresosleep += 50;
        barraProgresosleep.style.width = progresosleep + "%";
    }
    else {
        progresosleep = 100;
        barraProgresosleep.style.width = progresosleep + "%";
    }
}
setInterval(tiempobarrasleep, 200);
siestas.addEventListener("click", siesta);
dormidas.addEventListener("click", dormir);
let progresofight = 100;
let porcentajefight = document.getElementById("porcentajefight");
const barraProgresofight = document.getElementById("barrafight");
const peleas = document.getElementById("pelea");
const entrenamientos = document.getElementById("entrenamiento");
function tiempobarrafight() {
    porcentajefight.innerText = progresofight + "%";
    if (progresofight > 0) {
        progresofight -= 1;
        barraProgresofight.style.width = progresofight + "%";
    }
    // const tamagochisrc = tamagochi.src.split("/").pop();
    // if(progresofight == 0 && tamagochisrc != tamagochimuerto) {
    //     tamagochi.src = "img/" + tamagochimuerto;
    // } 
    // if (progresofight > 0 && tamagochisrc != tamagochivivo) {
    //     tamagochi.src = "img/" + tamagochivivo;
    // }
}
function pelea() {
    if (progresofight + 25 <= 100) {
        progresofight += 25;
        barraProgresofight.style.width = progresofight + "%";
    }
    else {
        progresofight = 100;
        barraProgresofight.style.width = progresofight + "%";
    }
}
function entrenamiento() {
    if (progresofight + 25 <= 100) {
        progresofight += 25;
        barraProgresofight.style.width = progresofight + "%";
    }
    else {
        progresofight = 100;
        barraProgresofight.style.width = progresofight + "%";
    }
}
setInterval(tiempobarrafight, 250);
peleas.addEventListener("click", pelea);
entrenamientos.addEventListener("click", entrenamiento);
let progresohappiness = progresoeat / progresoplay;
let porcentajehappiness = document.getElementById("porcentajehappiness");
const barraProgresohappiness = document.getElementById("barrahappiness");
function tiempobarrahappiness() {
    progresohappiness = (progresoeat / 2 + progresoplay / 2 + progresosleep / 2 + progresofight / 2) / 2;
    if (progresohappiness <= 100) {
        barraProgresohappiness.style.width = progresohappiness + "%";
        porcentajehappiness.innerText = "Happiness: " + progresohappiness + "%";
    }
    else {
        progresohappiness = 100;
        barraProgresohappiness.style.width = progresohappiness + "%";
        porcentajehappiness.innerText = "Happiness: " + progresohappiness + "%";
    }
    if (progresohappiness > 0) {
        barraProgresohappiness.style.width = progresohappiness + "%";
    }
    const tamagochisrc = tamagochi.src.split("/").pop();
    if (progresohappiness == 0 && tamagochisrc != tamagochimuerto) {
        tamagochi.src = "img/" + tamagochimuerto;
    }
    if (progresohappiness > 0 && tamagochisrc != tamagochivivo) {
        tamagochi.src = "img/" + tamagochivivo;
    }
}
setInterval(tiempobarrahappiness, 1000);
