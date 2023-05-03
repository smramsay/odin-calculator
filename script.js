function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operation, a, b) {
    switch (operation) {
        case "add":
            break;
        case "subtract":
            break;
        case "multiply":
            break;
        case "divide":
            break;
        default:
            console.error("Uhh, how did that happen?");
            break;
    }
}

const display = document.querySelector("#display");
document.querySelector('#clear').addEventListener('click', (event) => {
    display.textContent = "";
});

document.querySelectorAll('.digit-container .button').forEach((button) => {
    button.addEventListener('click', (event) => {
        const entry = event.target.textContent;
        if (entry === '.' && display.textContent.includes('.')) {
            return;
        }
        display.textContent += event.target.textContent;
    });
})