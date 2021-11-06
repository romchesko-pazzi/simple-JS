let firstInput = document.getElementById("numberOne");
let secondInput = document.getElementById("numberTwo");

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");

plus.addEventListener("click", main);
minus.addEventListener("click", main);
multiply.addEventListener("click", main);
divide.addEventListener("click", main);

function getFirstUnputValue() {
    return firstInput.value;
}

function getSecondUnputValue() {
    return secondInput.value;
}

function main(operation) {
    let result;
    operation = operation.srcElement.innerHTML;
    if (operation === "+") {
        result = +getFirstUnputValue() + +getSecondUnputValue();
    } else if (operation === "-") {
        result = getFirstUnputValue() - getSecondUnputValue();
    } else if (operation === "*") {
        result = getFirstUnputValue() * getSecondUnputValue();
    } else if (operation === "/") {
        result = getFirstUnputValue() / getSecondUnputValue();
    } else {
        console.log("Unknown operation")
    }
    console.log(result.toFixed(2));
}