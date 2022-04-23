const inputEl = document.querySelector('#validation-input');


const valideteInput = () => {
  
  inputEl.addEventListener('blur', () => {
    //   console.log(inputEl.value.length);
    inputEl.value.length === 6
      ? inputEl.classList.add('valid')
      : inputEl.classList.add('invalid');
  });
}

valideteInput();
// if (inputEl.value.length === 6) {
//     inputEl.classList.add('valid')
//   } else {
//     inputEl.classList.add('invalid');
//   }
