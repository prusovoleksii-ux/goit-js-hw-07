const name = document.querySelector("input#name-input");

const output = document.querySelector("span#name-output");

name.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim().length !== 0){
        output.textContent = event.currentTarget.value.trim();
    } else output.textContent = "Anonymous";
});