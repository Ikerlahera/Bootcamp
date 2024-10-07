"use strict";
const bombilla = document.getElementById("bombilla");
const interruptor = document.getElementById("boton");
const interruptor1 = "bon.jpg";
const interruptor2 = "boff.jpg";
const bombilla1 = "on.jpg";
const bombilla2 = "off.jpg";
let estado = false;
interruptor === null || interruptor === void 0 ? void 0 : interruptor.addEventListener("click", () => {
    if (estado) {
        bombilla.src = bombilla2;
        interruptor.src = interruptor2;
    }
    else {
        bombilla.src = bombilla1;
        interruptor.src = interruptor1;
    }
    estado = !estado;
});
