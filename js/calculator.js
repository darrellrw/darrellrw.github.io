const display = document.getElementById('display');
const adder = document.getElementById('adder');
const opperant = document.getElementById('opperant');

var previousOperator = null;

function clearAll() {
    display.value = 0;
    adder.value = '';
    opperant.value = '';
    previousOperator = null;
}

function clearEntry() {
    display.value = 0;
}

function delNumber() {
    var inputValue = display.value;
    if (inputValue.length > 1 && inputValue.length != 1 && display.value != 'Infinity' && display.value != 'NaN') {
        var newValue = inputValue.substring(0, inputValue.length - 1);
        display.value = newValue;
    }
    else if (inputValue.length == 1 || display.value == 'Infinity' || display.value == 'NaN') {
        display.value = 0;
    }
}

function addNumber(value) {
    if(display.value == 0 || display.value == 'Infinity' || display.value == 'NaN') {
        display.value = value;
    }
    else {
        display.value += value;
    }
}

function addKoma() {
    if(!display.value.includes('.')) {
        display.value += '.';
    }
}

function operation(operate) {
    if(operate === '+' && previousOperator === null) {
        adder.value = display.value;
        display.value = 0;
        previousOperator = '+';
        opperant.value = '+';
    }
    if(operate === '-' && previousOperator === null) {
        adder.value = display.value;
        display.value = 0;
        previousOperator = '-';
        opperant.value = '-';
    }
    if(operate === 'X' && previousOperator === null) {
        adder.value = display.value;
        display.value = 0;
        previousOperator = 'X';
        opperant.value = '×';
    }
    if(operate === '/' && previousOperator === null) {
        adder.value = display.value;
        display.value = 0;
        previousOperator = '/';
        opperant.value = '/';
    }
    if(operate === '1/x' && display.value != 0) {
        display.value = parseFloat(1) / parseFloat(display.value);
    }
    if(operate === 'x^2' && display.value != 0) {
        display.value = Math.pow(parseFloat(display.value), 2);
    }
    if(operate === 'x^(1/2)' && display.value != 0) {
        display.value = Math.pow(parseFloat(display.value), 1/2);
    }
    if(operate === '+/-' && display.value != 0) {
        display.value = parseFloat(display.value) * parseFloat(-1);
    }
    if(operate === '%' && display.value != 0) {
        adder.value = display.value;
        display.value = 0;
        previousOperator = '%';
        opperant.value = '% of';
    }
}

function calculate() {
    if(previousOperator === null) {
        return
    }
    if(previousOperator === '+') {
        display.value = parseFloat(adder.value) + parseFloat(display.value);
        adder.value = ''
        previousOperator = null;
        opperant.value = '';
    }
    if(previousOperator === '-') {
        display.value = parseFloat(adder.value) - parseFloat(display.value);
        adder.value = ''
        previousOperator = null;
        opperant.value = '';
    }
    if(previousOperator === 'X') {
        display.value = parseFloat(adder.value) * parseFloat(display.value);
        adder.value = ''
        previousOperator = null;
        opperant.value = '';
    }
    if(previousOperator === '/') {
        display.value = parseFloat(adder.value) / parseFloat(display.value);
        adder.value = ''
        previousOperator = null;
        opperant.value = '';
    }
    if(previousOperator === '%') {
        display.value = parseFloat(adder.value / 100) * parseFloat(display.value);
        adder.value = ''
        previousOperator = null;
        opperant.value = '';
    }
}