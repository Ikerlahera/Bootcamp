function operacion(boton: string): void {
    const imprimir = document.getElementById("imprimir") as HTMLInputElement;
    imprimir.value += boton;
}


function calcular() {
    const imprimir = document.getElementById("imprimir") as HTMLInputElement;
    imprimir.value = eval(imprimir.value);
}

function reset(){
    const imprimir = document.getElementById("imprimir") as HTMLInputElement;
    imprimir.value = "";
}

function borrar() {
    const imprimir = document.getElementById("imprimir") as HTMLInputElement;
    imprimir.value = imprimir.value.slice(0,-1);
}