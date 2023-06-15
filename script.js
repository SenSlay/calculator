let firstTerm = "";
let operator = "";
let secondTerm = "";

// Stores the number that was clicked. If an operator exists, store the number to the second term of expression
function storeNum(el) {
    if (operator) {
        secondTerm += el.innerHTML;
        document.getElementById("currExp").innerHTML = `${secondTerm}`;
    } else {
        firstTerm += el.innerHTML;
        document.getElementById("currExp").innerHTML = `${firstTerm}`;
    }
};

// Stores the operator that was clicked. If an operator exists, operate() is called
function storeOperator(el) {
    if (secondTerm) {
        let result = operate();
        operator = el.dataset.operator;

        document.getElementById("prevExp").innerHTML = `${result} ${operator}`;
        firstTerm = result;
        secondTerm = "";
    } else {
        operator = el.dataset.operator;
    
        document.getElementById("prevExp").innerHTML = `${firstTerm} ${operator}`;
    }
};

// Computes the expression
function operate(el) {
    if (secondTerm) {
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
    
        // Shows the most recent equation if equals button is pressed
        if (el) {
            document.getElementById("prevExp").innerHTML = `${firstTerm} ${operator} ${secondTerm} =`;
            document.getElementById("currExp").innerHTML = `${result}`;
        } else {
            document.getElementById("prevExp").innerHTML = `${result} ${operator}`;
            document.getElementById("currExp").innerHTML = `${result}`;
        }
    
        return result;
    }
};

// Clears all terms and operator
function clearDisplay() {
    firstTerm = "";
    operator = "";
    secondTerm = "";

    document.getElementById("currExp").innerHTML = "0";
    document.getElementById("prevExp").innerHTML = "";
};

// Deletes the last number
function del() {
    if (operator && firstTerm) {
        secondTerm = secondTerm.slice(0, -1);

        document.getElementById("currExp").innerHTML = `${secondTerm}`;
    } else {
        firstTerm = firstTerm.slice(0, -1);
    
        document.getElementById("currExp").innerHTML = `${firstTerm}`;
    }
};