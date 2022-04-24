const inputEl = document.querySelector('#validation-input');


const valideteInput = () => {
  
  inputEl.addEventListener('blur', () => {
  
  if (inputEl.value.length === Number(inputEl.attributes["data-length"].value)) {
      inputEl.classList.add('valid');
      inputEl.classList.remove('invalid');
  } else {inputEl.classList.add('invalid');
         inputEl.classList.remove('valid');
}
  });
}
 valideteInput();
 
