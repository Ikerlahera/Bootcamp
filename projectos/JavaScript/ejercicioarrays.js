let array1 = ["🍔","🌯","🥐","🍕","🍙","🥟","🧈","🍣","🥘"];
let position = array1.findIndex(element => element === "🍕")
console.log(position);
console.log(array1.fill("🍺",position,array1.length));
///

let array2 = ["🍕","🍕","🍍","🍕","🍕"];

console.log(array2.some(element => element === "🍍"));
///
let position2 = array2.findIndex(element => element === "🍍")

//console.log(array2.splice(position2,));
