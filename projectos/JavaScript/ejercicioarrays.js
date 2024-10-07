let array1 = ["🍔","🌯","🥐","🍕","🍙","🥟","🧈","🍣","🥘"];
let position = array1.findIndex(element => element === "🍕")
console.log(position);
console.log(array1.fill("🍺",position,array1.length));
///

let array2 = ["🍕","🍕","🍍","🍕","🍕"];

console.log(array2.some(element => element === "🍍"));

///
console.log(array2);
let nuevoarray2 = array2.filter(fruta => fruta !== "🍍");
console.log(nuevoarray2);
//const nuevasFrutas = frutas.filter(function(fruta) {return fruta !== 'manzana'; });   
///

let array3 = ["🍓","🍋","🍓","🍋","🍓"];

console.log(array3);

//let array32 = array3.map(fruta => fruta === "🍓" ? "🍄" : fruta);

let array32 =array3.map(function(fruta) {
    if (fruta === "🍓") {
        return "🍄";
    } else {
        return fruta;
    }
});

console.log(array32);
//

let array4 = ["🌶","🥛","🌶","🥛","🌶","🥛"];
console.log(array4);

for (let i = 0; i < array4.length; i++) {
    if (array4[i] == "🌶"){
        array4.splice(i + 1, 0, "🥵");
    }   
}
console.log(array4);
///

let arrayfinal = ["🎴","🎴","🎴","🎴","🎴"];

for (let i = 0; i < arrayfinal.length; i++) {
    if (arrayfinal[i-1] == "🎴" && arrayfinal[i] == "🎴") {
        arrayfinal.splice(i,0, "🃏");
    }
    
}
console.log(arrayfinal);

let arrayfinalprueba = ["🎴","🎴","🎴","🎴","🎴","🎴","🎴","🎴","🎴","🎴","🎴","🎴"];

let media = arrayfinalprueba.length/2;

arrayfinalprueba.splice(media,0,"🃏");

console.log(arrayfinalprueba);