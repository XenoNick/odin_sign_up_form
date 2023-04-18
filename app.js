const formInputs = [...document.querySelectorAll('input')];
const submitButton = document.querySelector('button[form="signUpForm"]');

function inputValidityCheck() {
    for (let input of formInputs) {
        if (!input.checkValidity()) {
            return false;
        }
    }
    return true;
}

function comparePasswords() {
    const passwordFields = document.querySelectorAll('input[type="password"]');
    if (passwordFields[0].textContent !== passwordFields[1].textContent) return false;
    return true;
}

function addErrorMessage(input, type) {
    const span = input.parentElement.nextElementSibling
    if (type === 'text') {
        span.textContent = '* Required Field!'
    }else if(type === 'email'){
        span.textContent = '* Invalid email format!'
    }else{
        if(input.value === ""){
            span.textContent = '* Required Field'
        }else{

        }
    }
}

submitButton.addEventListener('click', (e) => {
    if (inputValidityCheck() && comparePasswords()) return true;
    e.preventDefault();
    for (let input of formInputs) {
        input.classList.add('validate')
        if (!input.checkValidity()) {
            addErrorMessage(input, input.getAttribute('type'))
        }
    }
})