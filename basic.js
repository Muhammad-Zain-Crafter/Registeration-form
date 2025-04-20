document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registeration-Form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password-2");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        validateInputs();
    });

    function setError(element, message) {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector(".error");

        errorDisplay.innerText = message;
        inputControl.classList.add("error");
        inputControl.classList.remove("success");
    }

    function setSuccess(element) {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector(".error");

        errorDisplay.innerText = "";
        inputControl.classList.add("success");
        inputControl.classList.remove("error");
    }

    function validateInputs() {
        const userVal = username.value.trim();
        const emailVal = email.value.trim();
        const passVal = password.value.trim();
        const pass2Val = password2.value.trim();

        if (userVal === "") {
            setError(username, "Username is required");
        } else {
            setSuccess(username);
        }

        if (emailVal === "") {
            setError(email, "Email is required");
        } else if (!isValidEmail(emailVal)) {
            setError(email, "Enter a valid email address");
        } else {
            setSuccess(email);
        }

        if (passVal === "") {
            setError(password, "Password is required");
        } else if (passVal.length < 8) {
            setError(password, "Password must be at least 8 characters");
        } else {
            setSuccess(password);
        }

        if (pass2Val === "") {
            setError(password2, "Confirm password is required");
        } else if (pass2Val !== passVal) {
            setError(password2, "Passwords don't match");
        } else {
            setSuccess(password2);
        }
    }

    function isValidEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});
