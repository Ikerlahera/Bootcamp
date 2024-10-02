"use strict";
const movimientos = ["🥌", "🧻", "✂"];
let puntuacioncom = 0;
let puntuacionj1 = 0;
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
piedra.addEventListener("click", () => juego("🥌"));
papel.addEventListener("click", () => juego("🧻"));
tijera.addEventListener("click", () => juego("✂"));
function juego(opcionj1) {
    const p = document.getElementById("resultado");
    let opcioncom = movimientos[Math.floor(Math.random() * 3)];
    if (opcioncom == opcionj1) {
        p.textContent = "Es un empate";
    }
    else if ((opcionj1 === "🥌" && opcioncom === "✂") ||
        (opcionj1 === "🧻" && opcioncom === "🥌") ||
        (opcionj1 === "✂" && opcioncom === "🧻")) {
        p.textContent = "Ganaste";
        puntuacionj1++;
    }
    else {
        p.textContent = "Perdiste";
        puntuacioncom++;
    }
    crearjuego();
}
function crearjuego() {
    const p = document.getElementById("resultado");
    if (puntuacioncom >= 3 || puntuacionj1 >= 3) {
        const div = document.getElementById("juego");
        div.innerHTML = "";
        if (puntuacioncom > puntuacionj1) {
            p.textContent = "Ha ganado la maquina " + puntuacioncom + " a " + puntuacionj1;
        }
        else {
            p.textContent = "Ha ganado el jugador " + puntuacionj1 + " a " + puntuacioncom;
        }
    }
    else {
        alert("j1: " + puntuacionj1 + " Com:" + puntuacioncom);
    }
}
crearjuego();
