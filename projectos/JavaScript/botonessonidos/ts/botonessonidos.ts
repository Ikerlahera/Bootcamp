let audioW = document.getElementById("audioW")as HTMLAudioElement;
let audioA = document.getElementById("audioA")as HTMLAudioElement;
let audioS = document.getElementById("audioS")as HTMLAudioElement;
let audioD = document.getElementById("audioD")as HTMLAudioElement;
let audioE = document.getElementById("audioE")as HTMLAudioElement;

function increaseSizeById(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
        const currentSize = window.getComputedStyle(element).fontSize;
        const newSize = (parseFloat(currentSize) + 10) + "px";
        element.style.width = newSize;
    }
}

window.addEventListener("keydown",function(event){
    if(event.key === "w" || event.key ==="W"){
        audioW.play();
        increaseSizeById("imagenW");
        // this.alert("se esta reproduciendo el audio: "+event.key)
    }

    if(event.key === "a" || event.key ==="A"){
        audioA.play();
        increaseSizeById("imagenA");
       // this.alert("se esta reproduciendo el audio: "+event.key)
    }

    if(event.key === "s" || event.key ==="S"){
        audioS.play();
        increaseSizeById("imagenS");
        // this.alert("se esta reproduciendo el audio: "+event.key)
    }

    if(event.key === "d" || event.key ==="D"){
        audioD.play();
        increaseSizeById("imagenD");
        // this.alert("se esta reproduciendo el audio: "+event.key)
    }

    if(event.key === "e" || event.key ==="E"){
        audioE.play();
        increaseSizeById("imagenE");
        // this.alert("se esta reproduciendo el audio: "+event.key)
    }

})