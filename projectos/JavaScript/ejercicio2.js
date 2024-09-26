
const nombreapellido = (nombre, apellido) => {

    return nombre + " "+ apellido;
    
};

console.log(nombreapellido("Iker","Lahera"));
///

function bool (booleano) {
  console.log(booleano);
}

bool(false)
///


const infinito = function(...valor){
    valor.forEach(inf => {
        console.log(inf);
    })
}

infinito(1,2,3,4,5)
///

const numerobinario = Math.round(Math.random());

function random (valor) {
    if (valor == 1){
        return "Cara";
    }
    else if (valor == 0) {
        return "Cruz";
    }
}
console.log(random(numerobinario));
///

function suma (num1,num2,num3){
    return num1+num2+num3;
}

console.log(suma(1,2,3));
///

function nombre(nombre,apellido1,apellido2){
    return nombre + " "+ apellido1 + " "+ apellido2;
}

console.log(nombre("Iker","Lahera", "Gonzalez"));
///

function mayor (num1, num2) {
    if (num1 > num2){
        return num1+ " Es mas grande";
    }
    else if (num2 > num1){
        return num2+ " Es mas grande";
    }
}

console.log(mayor(30,8))
///

let numero = 10;

switch (numero) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8:
        console.log("Agosto");
        break; 
    case 9:
        console.log("Septiembre");
        break;
    case 10:
        console.log("Octubre");
        break;
    case 11:
        console.log("Noviembre");
        break;
    case 12:
        console.log("Diciembre");
        break;
        
}

///

let numerostring = "5";

switch(numerostring){
    case "1":
        console.log("El numero es 1");
        break;
    case "2":
        console.log("El numero es 2");
        break;
    case "3":
        console.log("El numero es 3");
        break;
    case "4":
        console.log("El numero es 4");
        break;
    case "5":
        console.log("El numero es 5");
        break;
}

