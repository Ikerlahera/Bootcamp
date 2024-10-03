"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const url = "https://api.chucknorris.io/jokes/random";
    function getJoke() {
        fetch(url)
            .then(response => response.json())
            .then(json => saveResult(json));
    }
    function saveResult(json) {
        const chuck = document.getElementById("chuck");
        chuck.innerText = json.value;
    }
    let next = document.getElementById("next");
    if (next) {
        next.addEventListener("click", getJoke);
    }
    getJoke();
});
