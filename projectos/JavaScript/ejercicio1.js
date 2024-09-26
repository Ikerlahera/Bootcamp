var texto = "var";
const numero = 12;
let textonumero = "let2";

console.log(texto+" "+numero+" "+textonumero);

console.log(typeof(texto)+" "+typeof(numero)+" "+typeof(textonumero));

function sum(){
    let num1 = 1;
    var num2 = 2;
    const num3 = 3;

    console.log(num1+num2+num3);
}

sum();