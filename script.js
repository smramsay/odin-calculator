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
    if (b === 0) {
        alert("Dividing by zero?! That's illegal!");
        return 0;
    }
    return a / b;
}

function operate(operation, a, b) {
    // Get the operation's function reference from it's name
    return window[operation](a, b);
}


const display = document.querySelector("#display");
let [operation, first, second] = [null, null, null];

function clearDisplay() {
    display.textContent = "";
}
function clearMemory() {
    [operation, first, second] = [null, null, null];
}
function clearAll() {
    clearDisplay();
    clearMemory();
}

document.querySelector('#clear').addEventListener('click', clearAll);

document.querySelectorAll('.digit-container .button').forEach((button) => {
    button.addEventListener('click', (event) => {
        const entry = event.target.textContent;
        if (entry === '.' && display.textContent.includes('.')) {
            return;
        }
        display.textContent += event.target.textContent;
    });
});

document.querySelectorAll('.operator-container .button:not(#equals)').forEach((button) => {
    button.addEventListener('click', (event) => {
        if (first !== null || display.textContent == "") {
            return;
        }
        operation = event.target.id;
        first = parseFloat(display.textContent);
        clearDisplay();
    })
});

document.querySelector('#equals').addEventListener('click', (event) => {
    second = parseFloat(display.textContent);
    if (first !== null && second !== null && !isNaN(second)) {
        display.textContent = operate(operation, first, second);
        clearMemory();
    }
});