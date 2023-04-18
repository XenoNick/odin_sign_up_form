const passwordFields = [...document.querySelectorAll('input[type="password"]')];
const submitButton = document.querySelector('button[form="signUpForm"]');

function comparePasswords() {
    if (passwordFields[0].value === passwordFields[1].value) return true;
    return false;
}


for (let input of passwordFields) {
    input.addEventListener('input', (e) => {
        const oppPassFieldIndex = (passwordFields.indexOf(input) === 0 ? 1 : 0);
        const oppPassField = passwordFields[oppPassFieldIndex]
        if (!comparePasswords() && input.value.length >= 8) {
            input.nextElementSibling.classList.add('misMatch')
            input.classList.add('invalidPassword')
            oppPassField.nextElementSibling.classList.add('misMatch')
            oppPassField.classList.add('invalidPassword')
        } else if (comparePasswords() && input.value.length >= 8) {
            input.nextElementSibling.classList.remove('misMatch')
            input.classList.remove('invalidPassword')
            oppPassField.nextElementSibling.classList.remove('misMatch')
            oppPassField.classList.remove('invalidPassword')
        }
    })
}


submitButton.addEventListener('click', (e) => {
    if(comparePasswords()) return true;
    e.preventDefault();
})