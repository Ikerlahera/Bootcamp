const imagen = document.getElementById("imagen") as HTMLImageElement;

const imagen1 = "card-back.png";
const imagen2 = "card-front.png";

imagen?.addEventListener("mouseover", () => {
    imagen.src = imagen2;
});

imagen?.addEventListener("mouseout", () => {
    imagen.src = imagen1;
});