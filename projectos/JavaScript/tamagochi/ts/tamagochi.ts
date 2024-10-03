
let tamagochi = document.getElementById("tamagochi") as HTMLImageElement;

let tamagochivivo = "vivo.webp";
let tamagochimuerto = "muerto.webp";

let progresoeat = 10;
let porcentajeeat = document.getElementById("porcentajeeat") as HTMLImageElement;
const barraProgresoeat = document.getElementById("barraeat")!;
const helados = document.getElementById("helado")!;
const zanahorias = document.getElementById("zanahoria")!;
const pollos = document.getElementById("pollo")!;


function tiempobarraeat() {
    porcentajeeat.innerText = progresoeat + "%";
    if(progresoeat > 0) {
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
    if(progresoeat + 2 <= 100){
        progresoeat += 2;
        barraProgresoeat.style.width = progresoeat + "%";
    } else {
        progresoeat = 100;
        barraProgresoeat.style.width = progresoeat + "%";
    }
}

function zanahoria() {
    if(progresoeat + 5 <= 100){
        progresoeat += 5;
        barraProgresoeat.style.width = progresoeat + "%";
    } else {
        progresoeat = 100;
        barraProgresoeat.style.width = progresoeat + "%";
    }
}

function pollo() {
    if(progresoeat + 10 <= 100){
        progresoeat += 10;
        barraProgresoeat.style.width = progresoeat + "%";
    } else {
        progresoeat = 100;
        barraProgresoeat.style.width = progresoeat + "%";
    }
}

setInterval(tiempobarraeat,1000);

helados.addEventListener("click",helado);
zanahorias.addEventListener("click", zanahoria);
pollos.addEventListener("click",pollo);



let progresoplay = 15;
let porcentajeplay = document.getElementById("porcentajeplay") as HTMLImageElement;



const barraProgresoplay = document.getElementById("barraplay")!;
const consolas = document.getElementById("consola")!;
const rugbys = document.getElementById("rugby")!;
const ajedrezs = document.getElementById("ajedrez")!;


function tiempobarraplay() {
    porcentajeplay.innerText = progresoplay + "%";
    if(progresoplay > 0) {
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
    if(progresoplay + 2 <= 100){
        progresoplay += 2;
        barraProgresoplay.style.width = progresoplay + "%";
    } else {
        progresoplay = 100;
        barraProgresoplay.style.width = progresoplay + "%";
    }
}

function rugby() {
    if(progresoplay + 5 <= 100){
        progresoplay += 5;
        barraProgresoplay.style.width = progresoplay + "%";
    } else {
        progresoplay = 100;
        barraProgresoplay.style.width = progresoplay + "%";
    }
}

function ajedrez() {
    if(progresoplay + 10 <= 100){
        progresoplay += 10;
        barraProgresoplay.style.width = progresoplay + "%";
    } else {
        progresoplay = 100;
        barraProgresoplay.style.width = progresoplay + "%";
    }
}

setInterval(tiempobarraplay,1000);

consolas.addEventListener("click",consola);
rugbys.addEventListener("click", rugby);
ajedrezs.addEventListener("click",ajedrez);




let progresohappiness = progresoeat / progresoplay;
let porcentajehappiness = document.getElementById("porcentajehappiness") as HTMLElement;
const barraProgresohappiness = document.getElementById("barrahappiness")!;

function tiempobarrahappiness() {
    progresohappiness = (progresoeat + progresoplay)/2;
    porcentajehappiness.innerText = progresohappiness + "%";
    if(progresohappiness > 0) {      
        barraProgresohappiness.style.width = progresohappiness + "%";
    }

    const tamagochisrc = tamagochi.src.split("/").pop();

    if(progresohappiness == 0 && tamagochisrc != tamagochimuerto) {
        tamagochi.src = "img/" + tamagochimuerto;
    } 
    if (progresohappiness > 0 && tamagochisrc != tamagochivivo) {
        tamagochi.src = "img/" + tamagochivivo;
    }
}

setInterval(tiempobarrahappiness,1000);