// I think logic is every time a button is clicked, the number will be added to respective term
let firstTerm = "";
let operator = "";
let secondTerm = "";

function storeNum(el) {
    firstTerm += el.innerHTML
    document.getElementById("currExp").innerHTML = `${firstTerm}`;
};

function storeOperator(el) {
    if (operator) {
        operate()
        operator = el.dataset.operator
    
        document.getElementById("prevExp").innerHTML = `${secondTerm} ${operator}`

    } else {
        secondTerm = firstTerm;
        firstTerm = "";
        operator = el.dataset.operator
    
        document.getElementById("prevExp").innerHTML = `${secondTerm} ${operator}`
    }
};


// 
function operate() {
    console.log(operator)
    if (operator == "+") {
        let sum = Number(firstTerm) + Number(secondTerm);

        document.getElementById("prevExp").innerHTML = `${sum} ${operator}`;
        document.getElementById("currExp").innerHTML = `${sum}`;
        firstTerm = "";
        
    } else if (operator == "-") {
        let diff = Number(firstTerm) - Number(secondTerm);

        document.getElementById("prevExp").innerHTML = `${diff} ${operator}`;
        document.getElementById("currExp").innerHTML = `${diff}`;
        firstTerm = "";

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
    firstTerm = firstTerm.slice(0, -1);

    document.getElementById("currExp").innerHTML = `${firstTerm}`;
};