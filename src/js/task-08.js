const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    if (event.currentTarget.elements[0].value && event.currentTarget.elements[1].value !== "") {
    const dataObject = {};
    dataObject.Email = event.currentTarget.elements[0].value;
    dataObject.Password = event.currentTarget.elements[1].value; 

    console.log(dataObject);

        formEl.reset();
        
    } else {alert("Please fill all these fields")}
      
 
}
