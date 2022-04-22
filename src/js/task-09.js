function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  button: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

refs.button.addEventListener("click", () => {
 refs.span.textContent = getRandomHexColor();
 document.body.style.backgroundColor = getRandomHexColor();
});
