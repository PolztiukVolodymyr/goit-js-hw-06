const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");


textEl.style.fontSize = inputEl.value + "px";

const changeText = () => {

    inputEl.addEventListener('input', event => {
    textEl.style.fontSize = event.currentTarget.value + "px";
 
    });
}

changeText();