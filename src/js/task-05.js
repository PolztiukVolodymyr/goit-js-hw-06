const inputEl = document.querySelector('#name-input');
const titlePartEl = document.querySelector('#name-output');

const showSpan = () => {

  inputEl.addEventListener('input', event => {
  inputEl.value !== ""
    ? titlePartEl.textContent = event.currentTarget.value
    : titlePartEl.textContent = "Anonymous" 
      
    });
};

showSpan();
