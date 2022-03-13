const isValidFirstName = (name) => {
    if (name.length < 2 || name.length > 20) {
        return false;
    }
    for (const character of name) {
        if (!character.match(/[a-z]/i)) {
            return false;   
        }
    }
    return true;
}

const isValidEmail = (email) => {
    if (email.match(/.+\@.+\..+/)) {
        return true;
    }
    return false;
}

const enableSubmitButton = () => {
    document.getElementById("form-submit").disabled = false;
}

const disableSubmitButton = () => {
    document.getElementById("form-submit").disabled = true;
}

const getCurrentEmail = () => document.getElementById("email-input").value;
const getCurrentFirstName = () => document.getElementById("first-name-input").value;

document.getElementById("first-name-input").addEventListener('keyup', (e) => {
    if (isValidFirstName(e.target.value) && isValidEmail(getCurrentEmail())) {
        enableSubmitButton();
    } else {
        disableSubmitButton();
    }
})

document.getElementById("email-input").addEventListener('keyup', (e) => {
    if (isValidEmail(e.target.value) && isValidFirstName(getCurrentFirstName())) {
        enableSubmitButton();
    } else {
        disableSubmitButton();
    }
})

document.getElementById("first-name-input").addEventListener('blur', (e) => {
    if (!isValidFirstName(e.target.value)) {
        document.getElementById("first-name-input").style.backgroundColor = 'red';
    }
})

document.getElementById("email-input").addEventListener('blur', (e) => {
    if (!isValidEmail(e.target.value)) {
        document.getElementById("email-input").style.backgroundColor = 'red';
    } 
})

document.getElementById("first-name-input").addEventListener('focus', () => {
    document.getElementById("first-name-input").style.backgroundColor = 'white';
})

document.getElementById("email-input").addEventListener('focus', () => {
    document.getElementById("email-input").style.backgroundColor = 'white';
})

disableSubmitButton();
