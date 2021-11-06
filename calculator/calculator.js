let firstInput = document.getElementById("numberOne");
let secondInput = document.getElementById("numberTwo");

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");

plus.addEventListener("click", getSum);
minus.addEventListener("click", getDifference);
multiply.addEventListener("click", getMultiply);
divide.addEventListener("click", getQuotient);

function getFirstUnputValue() {
    return firstInput.value;
}

function getSecondUnputValue() {
    return secondInput.value;
}

function getSum() {
    let sum = +getFirstUnputValue() + +getSecondUnputValue();
    console.log(sum.toFixed(1));
}

function getDifference() {
    let diff = getFirstUnputValue() - getSecondUnputValue();
    console.log(diff);
}

function getMultiply() {
    let mult = getFirstUnputValue() * getSecondUnputValue();
    console.log(mult.toFixed(2));
}

function getQuotient() {
    let quot = getFirstUnputValue() / getSecondUnputValue();
    console.log(quot);
}


