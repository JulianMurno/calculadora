let displayValue = '';
let history = [];
let historyIndex = -1;

function updateHistory(result) {
    if (historyIndex === history.length - 1) {
        history.push(result);
        historyIndex++;
    } else {
        history.splice(historyIndex + 1);
        history.push(result);
        historyIndex = history.length - 1;
    }
}

function navigateBack() {
    if (historyIndex > 0) {
        historyIndex--;
        displayValue = history[historyIndex];
        document.getElementById('display').value = displayValue;
    }
}

function navigateForward() {
    if (historyIndex < history.length - 1) {
        historyIndex++;
        displayValue = history[historyIndex];
        document.getElementById('display').value = displayValue;
    }
}


function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculatePercent() {
    try {
        displayValue = eval(displayValue) / 100;
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function togglePlusMinus() {
    if (displayValue !== '') {
        if (displayValue[0] === '-') {
            displayValue = displayValue.slice(1);
        } else {
            displayValue = '-' + displayValue;
        }
        document.getElementById('display').value = displayValue;
    }
}

function calculateSqrt() {
    try {
        displayValue = Math.sqrt(eval(displayValue));
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function deleteLastDigit() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function calculatePower() {
    try {
        const powerIndex = displayValue.indexOf('**');
        if (powerIndex !== -1) {
            const base = parseFloat(displayValue.substring(0, powerIndex));
            const exponent = parseFloat(displayValue.substring(powerIndex + 2));
            const result = Math.pow(base, exponent);
            displayValue = `${base}^${exponent} = ${result}`; // Agregar "^" y el resultado al display
            document.getElementById('display').value = displayValue;
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

