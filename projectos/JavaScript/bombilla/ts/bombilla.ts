const bombilla = document.getElementById("bombilla") as HTMLImageElement;
const interruptor = document.getElementById("boton") as HTMLImageElement;

const interruptor1 = "bon.jpg";
const interruptor2 = "boff.jpg";

const bombilla1 = "on.jpg";
const bombilla2 = "off.jpg";

let estado = false;

interruptor?.addEventListener("click", () => {
    if(estado) {
        bombilla.src = bombilla2;
        interruptor.src = interruptor2;
    } else {
        bombilla.src = bombilla1;
        interruptor.src = interruptor1;
    }

    estado = !estado;
    
});

