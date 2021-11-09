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

function main(operation) {
    let num1 = Number(firstInput.value);
    let num2 = Number(secondInput.value);

    let result;
    operation = operation.srcElement.innerHTML;
    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        result = num1 / num2;
    } else {
        console.log("Unknown operation");
    }
    console.log(result.toFixed(2));
}