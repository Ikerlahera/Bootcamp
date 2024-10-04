"use strict";
let audioW = document.getElementById("audioW");
let audioA = document.getElementById("audioA");
let audioS = document.getElementById("audioS");
let audioD = document.getElementById("audioD");
let audioE = document.getElementById("audioE");
window.addEventListener("keydown", function (event) {
    if (event.key === "w" || event.key === "W") {
        audioW.play();
        // this.alert("se esta reproduciendo el audio: "+event.key)
    }
    if (event.key === "a" || event.key === "A") {
        audioA.play();
        // this.alert("se esta reproduciendo el audio: "+event.key)
    }
    if (event.key === "s" || event.key === "S") {
        audioS.play();
        // this.alert("se esta reproduciendo el audio: "+event.key)
    }
    if (event.key === "d" || event.key === "D") {
        audioD.play();
        // this.alert("se esta reproduciendo el audio: "+event.key)
    }
    if (event.key === "e" || event.key === "E") {
        audioE.play();
        // this.alert("se esta reproduciendo el audio: "+event.key)
    }
});
