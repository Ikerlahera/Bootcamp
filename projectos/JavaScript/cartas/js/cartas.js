"use strict";
const imagen = document.getElementById("imagen");
const imagen1 = "card-back.png";
const imagen2 = "card-front.png";
imagen === null || imagen === void 0 ? void 0 : imagen.addEventListener("mouseover", () => {
    imagen.src = imagen2;
});
imagen === null || imagen === void 0 ? void 0 : imagen.addEventListener("mouseout", () => {
    imagen.src = imagen1;
});
