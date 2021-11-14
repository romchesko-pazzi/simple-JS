// Task 1 (value out of range)(with !)

let age = prompt("Enter the age", "")
if (!(age >= 14 && age <= 90)) {
    alert(age)
}

// Task 2 (value in range)
let age = prompt("Enter the age", "")
if (age >= 14 && age <= 90) {
    console.log(age)
}

// Task 3 (value out of range)(without !)
let age = prompt("Enter the age", "")
if (age < 14 || age > 90) {
    console.log(age)
}

// Task 4
let login = prompt("Login:", "")
if (login == "PAPICH" || login == "papich" || login == "Papich") {
    let password = prompt("Password:", "")
    if (password == "GACHIMUCHI") {
        alert("Welcome!")
    } else if (password == "Cancel") {
        alert("Canceled")
    } else {
        alert("Wrong password")
    }
} else if (login == "Cancel") {
    alert("Canceled")
} else {
    alert("Wrong login")
}

// Task 5 (numbers from 1 to 5)(with "while")
let number = 1
while (number <= 5) {
    console.log(number)
    number++
}

// Task 6 (numbers from 1 to 5)(with "for")
let number = 1
for (; number <= 5; number++) {
    console.log(number)
}

// Task 7 (numbers from 1 to 5)(with "«do…while»")
let num = 1
do {
    console.log(num)
    num++
} while (num <= 5)

// Task 8 (Print even numbers)
for (let num = 2; num <= 10; num++) {
    if (num % 2 == 0)
        console.log(num)
}

// Task 9 (codewars)
function greet(name) {
    return `Hello, ${name} how are you doing today?`
}
console.log((greet("Roma")));

// Task 10 (codewars)
function lovefunc(flower1, flower2) {
    if (flower1 % 2 == 0 && flower2 % 2 != 0) {
        return true;
    } else if (flower1 % 2 != 0 && flower2 % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// Task 11(simple calculator)
let operationButtons = document.getElementsByClassName("operation-button");

function main(operation) {
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);
    let result;
    if (operation === "+") {
        result = number1 + number2;
    } else if (operation === "-") {
        result = number1 - number2;
    } else if (operation === "*") {
        result = number1 * number2;
    } else if (operation === "/") {
        if (number1 === 0 || number2 == 0) {
            console.log("No");
            return;
        } else {
            result = number1 / number2;
        }
    } else {
        console.log("Unknown operation");
    }
    console.log(result.toFixed(1));
}

function commonOperation(eventObject) {
    let clickedElement = eventObject.currentTarget.innerHTML;
    main(clickedElement);
}

for (let i = 0; i < operationButtons.length; i++){
    operationButtons[i].addEventListener("click", commonOperation);
}