"use strict";
const array1 = [];
console.log(array1);
const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const array2 = document.getElementById("array");
function insertar() {
    if (array2) {
        array2.innerHTML = `[ ${array1.join(", ")} ]`;
    }
}
const push = document.getElementById("push");
if (push) {
    push.onclick = function () {
        //alert("Has pulsado push");
        array1.push("🍕");
        //alert(array1);
        insertar();
    };
}
const unshift = document.getElementById("unshift");
if (unshift) {
    unshift.onclick = function () {
        //alert("Has pulsado unshift");
        array1.unshift("🥙");
        insertar();
    };
}
const insert = document.getElementById("insert");
if (insert) {
    insert.onclick = function () {
        const valor = Number(num1 === null || num1 === void 0 ? void 0 : num1.value);
        //alert("Has pulsado insert")
        array1.splice(valor, 0, "🍛");
        insertar();
    };
}
const pop = document.getElementById("pop");
if (pop) {
    pop.onclick = function () {
        //alert("Has pulsado pop");
        array1.pop();
        insertar();
    };
}
const shift = document.getElementById("shift");
if (shift) {
    shift.onclick = function () {
        //alert("Has pulsado shift");
        array1.shift();
        insertar();
    };
}
const remove = document.getElementById("remove");
if (remove) {
    remove.onclick = function () {
        //alert("Has pulsado remove")
        const valor2 = Number(num2 === null || num2 === void 0 ? void 0 : num2.value);
        array1.splice(valor2, 1);
        insertar();
    };
}
