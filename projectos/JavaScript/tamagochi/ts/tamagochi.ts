let progresoeat = 5;
let porcentajeeat = document.getElementById("porcentajeeat") as HTMLImageElement;
let tamagochi = document.getElementById("tamagochi") as HTMLImageElement;

let tamagochivivo = "img/vivo.webp";
let tamagochimuerto = "img/muerto.webp";


const barraProgresoeat = document.getElementById("barraeat")!;
const helados = document.getElementById("helado")!;


function tiempobarraeat() {
    porcentajeeat.innerText = progresoeat + "%";
    if(progresoeat > 0) {
        progresoeat -= 1;
        barraProgresoeat.style.width = progresoeat + "%";
    }

    if(progresoeat == 0 && tamagochi.src != tamagochimuerto) {
        tamagochi.src = tamagochimuerto;
    } 
    if (progresoeat > 0 && tamagochi.src != tamagochivivo) {
        tamagochi.src = tamagochivivo;
    }
}

function helado() {
    if(progresoeat + 2 <= 100){
        progresoeat += 2;
        barraProgresoeat.style.width = progresoeat + "%";
    } else {
        progresoeat = 100;
        barraProgresoeat.style.width = progresoeat + "%";
    }
}

setInterval(tiempobarraeat,1000);

helados.addEventListener("click",helado);