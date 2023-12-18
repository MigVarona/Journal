function validateForm() {
    validateName();
    validateEmail();
    validatePassword();
}

function validateName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)?$/;

    if (!nameRegex.test(nameInput.value) || nameInput.value.length > 20) {
        nameError.textContent = "Only valid letters and characters from A to Z upper and lower case.";
    } else {
        nameError.textContent = "";
    }
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Invalid e-mail, must be in lower case and contain an @.";
    } else {
        emailError.textContent = "";
    }
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.textContent = "The password is not valid, it must contain at least one symbol and one capital letter.";
    } else {
        passwordError.textContent = "";
    }
}