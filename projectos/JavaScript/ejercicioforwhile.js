for (let index = 0; index < 10; index++) {
    console.log("I love code")
    
}

i = 1;

while (i <= 10) {
    console.log("I love code " +i);
    i++;
}
///

let array = ["a","b","c","d","e"];

array.forEach(element => {
    console.log(element);
});

///

let cinco = 5;

for (cinco > 0; cinco--;) {
    console.log(cinco);
    
}

///

let numero = 1;
let x = 0;
console.log("Empieza aqui")
do {
    if (x === 0) {
        x++;
        numero--;
        console.log(numero);
    } else{
        numero++;
        console.log(numero);
    }
} while (numero < 5);