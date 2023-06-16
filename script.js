let expression = Boolean;
let firstTerm = "";
let operator = "";
let secondTerm = "";

// Store the number that was clicked. If an operator exists, store the number to the second term of expression
function storeNum(el, char) {
    if (operator) {
        el ? secondTerm += el.innerHTML : secondTerm += char.key;
        document.getElementById("currExp").innerHTML = `${secondTerm}`;
    } else {
        document.getElementById("prevExp").innerHTML = "";
        el ? firstTerm += el.innerHTML : firstTerm += char.key;
        document.getElementById("currExp").innerHTML = `${firstTerm}`;
    }
};

// Store the operator that was clicked. If an operator exists, operate() is called
function storeOperator(el, char) {
    if (secondTerm) {
        let result = operate();

        // Check if the expression is valid
        if (result != "Invalid") {
            el ? operator = el.dataset.operator : operator = char.key;
    
            document.getElementById("prevExp").innerHTML = `${result} ${operator}`;
            firstTerm = result;
            secondTerm = "";
        }
    } else {
        el ? operator = el.dataset.operator : operator = char.key;
        document.getElementById("prevExp").innerHTML = `${firstTerm} ${operator}`;
    }
};

// Compute the expression
function operate(el) {
    if (secondTerm) {
        // Show an error msg when a user tries to divide by 0
        if ((operator == "%" || operator == "/") && secondTerm == 0) {
            alert("You can't divide by 0!");
            return "Invalid";
        }
        let result = 0;
    
        switch (operator) {
            case '+':
                result = Number(firstTerm) + Number(secondTerm);
                break;
            case '-':
                result = Number(firstTerm) - Number(secondTerm);
                break;
            case '*':
                result = Number(firstTerm) * Number(secondTerm);
                break;
            case '/':
                result = Number(firstTerm) / Number(secondTerm);
                break;
            case '%':
                result = Number(firstTerm) % Number(secondTerm);
                break;
            default:
                console.log('Invalid operator');
        }
    
        // Show the most recent equation if equals button is pressed
        if (el) {
            document.getElementById("prevExp").innerHTML = `${firstTerm} ${operator} ${secondTerm} =`;
            document.getElementById("currExp").innerHTML = `${result}`;

            firstTerm = result;
            secondTerm = "";
            expression = true;
        } else {
            document.getElementById("prevExp").innerHTML = `${result} ${operator}`;
            document.getElementById("currExp").innerHTML = `${result}`;

            firstTerm = result;
            secondTerm = "";
            expression = false;
        }
        return result;
    }
};

// Keyboard support for number, operator, and backspace keys
document.addEventListener("keydown", (char) => {
    // Check if key pressed is a number
    if (/^\d$/.test(char.key)) {
        storeNum(false, char);
    }
    // Check if key pressed is backspace
    if (char.key === "Backspace") {
        del();
    }
    // Check if key pressed is an operator
    if (/^[+\-*%/]$/.test(char.key)) {
        storeOperator(false, char);
    }
    // Check if key pressed is equal or enter
    if (char.key === "Enter" || char.key === "=") {
        operate(true);
    }

});

// Clear current entry
function clearEntry() {
    // If an expression exists, clear all
    if (expression == true) {
        clearAll();
    }

    if (operator && firstTerm) {
        secondTerm = "";
        document.getElementById("currExp").innerHTML = 0;
    }  else {
        firstTerm = "";
        document.getElementById("currExp").innerHTML = 0;
    }
};

// Clear all 
function clearAll() {
    firstTerm = "";
    operator = "";
    secondTerm = "";
    expression = false;

    document.getElementById("currExp").innerHTML = 0;
    document.getElementById("prevExp").innerHTML = "";
};

// Delete number
function del() {
    if (operator && secondTerm) {
        secondTerm = secondTerm.slice(0, -1);
        document.getElementById("currExp").innerHTML = `${secondTerm}`;

        if (secondTerm.length == 0) {
            document.getElementById("currExp").innerHTML = 0;
        }
    } else if (expression == true) {
        document.getElementById("prevExp").innerHTML = "";
        expression = false;

    } else if (firstTerm && !operator) {
        firstTerm = firstTerm.slice(0, -1);
        document.getElementById("currExp").innerHTML = `${firstTerm}`;

        if (firstTerm.length == 0) {
            document.getElementById("currExp").innerHTML = 0;
        }
    }
};