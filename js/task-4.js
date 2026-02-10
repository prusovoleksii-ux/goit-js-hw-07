const form = document.querySelector("form.login-form");

const User = {
    email: "",
    password: ""
};

form.addEventListener("submit", event => {
    event.preventDefault();
    const passwordInput = event.target.elements.password.value.trim();
    const emailInput = event.target.elements.email.value.trim();
    if (emailInput.length !== 0 
    && passwordInput.length !== 0) {
        User.email = emailInput;
        User.password = passwordInput;
    } else console.log("All form fields must be filled in.");
    console.log(User);
    event.target.elements.password.value = "";
    event.target.elements.email.value = "";
});

