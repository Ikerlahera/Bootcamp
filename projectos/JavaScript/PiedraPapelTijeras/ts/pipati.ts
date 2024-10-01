const movimientos = ["🥌","🧻","✂"];

let puntuacioncom = 0;
let puntuacionj1 = 0;

const piedra = document.getElementById("piedra")!;
const papel = document.getElementById("papel")!;
const tijera = document.getElementById("tijera")!;

function juego () {
    
    const p = document.getElementById("resultado")!;
    let opcioncom = movimientos[Math.random()*2];
    let opcionj1 = "";
    piedra.addEventListener("click", () => {
    let opcionj1 = "🥌";
    alert(opcionj1);    
    });

    papel.addEventListener("click", () => {
    opcionj1 = "🧻";    
    });
    
    tijera.addEventListener("click", () => {
    opcionj1 = "✂";    
    });

    if(opcioncom == opcionj1){
        p.textContent = "Es un empate";
    }
    else if( (opcionj1 === "🥌" && opcioncom === "✂") ||
    (opcionj1 === "🧻" && opcioncom === "🥌") || 
    (opcionj1 === "✂" && opcioncom === "🧻") ){
        p.textContent = "Ganaste";
        puntuacionj1++;
    } else {
        p.textContent = "Perdiste";
        puntuacioncom++;
    }
    

}

function crearjuego () {

    if( puntuacioncom || puntuacionj1 < 3){
        juego();
    }
    else{
        const div = document.getElementById("juego")!;
        div.innerHTML = "";
        const p = document.getElementById("resultado")!;
        p.textContent = "Ordenador: "+puntuacioncom+" Jugador:"+puntuacionj1;
        if(puntuacioncom>puntuacionj1){
            const p2 = document.createElement("p");
        p.textContent = "Ha ganado la maquina";
        } else {
            const p2 = document.createElement("p");
        p.textContent = "Ha ganado el jugador";
        }
    }

}

crearjuego();