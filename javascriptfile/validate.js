const inputName = document.querySelector('#name').value;
const inputEmail = document.querySelector('#email').value;
const inputMessage = document.querySelector('#text_message').value;

const values = {
  inputName,
  inputEmail,
  inputMessage,
}

const validateInputsOnChange = (value) => {
  const errors = {};
  if(value.inputName === ""){
    errors.name = "Name is required"
  }
  if(value.inputEmail === ""){
    errors.email = "Email is required"
  }
  if(value.inputMessage === ""){
    errors.message = "Message is required"
  }
}

validateInputsOnChange(values)