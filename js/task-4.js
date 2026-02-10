const form = document.querySelector("form.login-form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const passwordInput = event.target.elements.password.value.trim();
    const emailInput = event.target.elements.email.value.trim();
    if (emailInput.length !== 0 
    && passwordInput.length !== 0) {
        const User = {
        email: emailInput,
        password: passwordInput};
        console.log(User);
        form.reset();
    } else alert("All form fields must be filled in.");
});

