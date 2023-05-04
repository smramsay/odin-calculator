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

function appendToDisplay(input) {
    if (input === '.' && display.textContent.includes('.')) {
        return;
    }
    display.textContent += input;
}

function setOperator(operator) {
    if (first !== null || display.textContent == "") {
        return;
    }
    operation = operator;
    first = parseFloat(display.textContent);
    clearDisplay();
}

function equals() {
    second = parseFloat(display.textContent);
    if (first !== null && second !== null && !isNaN(second)) {
        display.textContent = operate(operation, first, second);
        clearMemory();
    }
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1);
}

document.querySelector('#clear').addEventListener('click', clearAll);

document.querySelector('#negate').addEventListener('click', (event) => {
    display.textContent = parseFloat(display.textContent) * -1;
});

document.querySelectorAll('.numbers .button').forEach((button) => {
    button.addEventListener('click', (event) => appendToDisplay(event.target.textContent));
});

document.addEventListener('keydown', (event) => {
    const operatorMap = {'*': 'multiply', '/': 'divide', '-': 'subtract', '+': 'add'};
    if (parseInt(event.key) || event.key === "0"|| event.key === '.') {
        appendToDisplay(event.key);
    } else if (event.key in operatorMap) {
        setOperator(operatorMap[event.key]);
    } else if (event.key === 'Enter') {
        equals();
    } else if (event.key === 'Backspace') {
        backspace();
    } else if (event.key === 'c') {
        clearAll();
    }
})

document.querySelectorAll('.operator-container .button:not(#equals)').forEach((button) => {
    button.addEventListener('click', (event) => setOperator(event.target.id))
});

document.querySelector('#equals').addEventListener('click', equals);