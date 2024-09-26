let numero = Math.round(Math.random());
console.log(numero);

console.log(Math.round(Math.PI));
/// Math

let string = "abcama";

console.log(string.replace(/a/g, "o"))
///

function acastring(palabra) {
    if (palabra.startsWith("aca")){
        return true;
    }
    else{
        return false;
    }
}

console.log(acastring("academia"));
console.log(acastring("escuela"));
///

function repeat (palabra) {
    console.log(palabra.repeat(3));
}


repeat("Hola")