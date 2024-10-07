
interface pregunta {
    pregunta: string;
    opciones: string[];
    respuesta: string;
}

let preguntas: pregunta[] = [
    { pregunta: "Cual no es editor de codigo?", opciones: ["vim",  "vscode", "emacs", "word"], respuesta: "word"},
    { pregunta: "cuanto es 2+2?", opciones: ["4", "1", "2"], respuesta: "4"},
    { pregunta: "que dia es?", opciones: ["lunes",  "martes", "miercoles", "jueves", "viernes", "1"], respuesta: "martes"}
];

let preguntaactual = 0;
let puntuacion = 0;

const preguntahtml = document.getElementById("pregunta")!;
const opcioneshtml = document.getElementById("botones")!;


function mostrarpregunta() {
    const actual = preguntas[preguntaactual];
    
    preguntahtml.textContent = actual.pregunta;
    opcioneshtml.innerHTML = "";

    actual.opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.textContent = opcion;
        boton.onclick = () => respuestaelejida(opcion);
        opcioneshtml?.appendChild(boton);
        
    });

}

function respuestaelejida(elegida: string) {
    const pregunta = preguntas[preguntaactual];

    if (elegida === pregunta.respuesta) {
        puntuacion++;
    }

    preguntaactual++;
    if(preguntaactual < preguntas.length) {
        mostrarpregunta();
    } else {
        preguntahtml.textContent = "Resultado";
        opcioneshtml.textContent = String(puntuacion);
    }

}

mostrarpregunta();