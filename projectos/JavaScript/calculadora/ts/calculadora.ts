function operacion(boton: string): void {
    const imprimir = document.getElementById("imprimir") as HTMLInputElement;
    imprimir.value += boton;
}


function calcular() {
    const imprimir = document.getElementById("imprimir") as HTMLInputElement;
    const resultado = eval(imprimir.value);
    imprimir.value = resultado % 1 === 0 ? resultado.toString() : resultado.toFixed(2);
}

function reset(){
    const imprimir = document.getElementById("imprimir") as HTMLInputElement;
    imprimir.value = "";
}

function borrar() {
    const imprimir = document.getElementById("imprimir") as HTMLInputElement;
    imprimir.value = imprimir.value.slice(0, -1);
}