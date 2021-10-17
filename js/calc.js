let firstValue = prompt("Enter the first value", "");
let operation = prompt("Enter the operation", "");
let secondValue = prompt("Enter the second value", "");

if (operation == "+") {
    alert(+firstValue + +secondValue)
} else if (operation == "-") {
    alert(firstValue - secondValue)
} else if (operation == "*") {
    alert(firstValue * secondValue)
} else {
    alert(firstValue / secondValue)
}