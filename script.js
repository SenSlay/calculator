// I think logic is every time a button is clicked, the number will be added to respective term
let firstTerm = "";
let operator = "";
let secondTerm = "";

function storeNum(el) {
    firstTerm += el.innerHTML
    console.log(el.innerHTML);
    document.getElementById("currExp").innerHTML = `${firstTerm}`;
};


// 
function operate() {

};

