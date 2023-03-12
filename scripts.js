form = document.querySelector('.form');
input = document.querySelector('.form__input');
errorLabel = document.querySelector('.form__error-message');

// Returns true if the email matches the valid regex
const emailValid = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};

const setInvalid = (message) => {
    errorLabel.textContent = message;
    input.classList.add('invalid');
};

const setValid = () => {
  errorLabel.textContent = '';
  input.classList.remove("invalid");
  // submit form in a real project
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const value = input.value.trim();

    if (value === '') {
        setInvalid('An email address is required');
    }
    else if (!emailValid(value)) {
        setInvalid('Please enter a valid email');
    }
    else {
        setValid();
    }

})