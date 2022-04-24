function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  input: document.querySelector("input"),
  divBoxes: document.querySelector("#boxes"),
}

refs.btnCreate.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", destroyBoxes);

function getInputValue() {
return Number(refs.input.value)
}


function createBoxes() {
  const arr = [];
  let amount = getInputValue();
   
 for (let i = 0; i < amount; i += 1) {
   arr.push(`<div background-color: ${getRandomHexColor()}; width: ${20 + i * 10}px; height: ${20 + i * 10}px></div>`)

 }
  
  refs.divBoxes.insertAdjacentHTML("beforeend", arr.join(""));
  console.log(refs.divBoxes);
 
}

function destroyBoxes() {
   refs.divBoxes.innerHTML = "";
   console.log(refs.divBoxes);
}

