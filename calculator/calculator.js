let plus = document.getElementById("button-plus");
let minus = document.getElementById("button-minus");
let multiply = document.getElementById("button-multiply");
let divide = document.getElementById("button-divide");

let inputOne = document.getElementById("numberOne");
let inputTwo = document.getElementById("numberTwo");


function onButtonPlusClick() {
    let sum = +getNumberOne() + +getNumberTwo();
    console.log(sum);
}

function onButtonMinusClick() {
    let difference = getNumberOne() - getNumberTwo();
    console.log(difference);
}

function onButtonMultiplyClick() {
    let mult = getNumberOne() * getNumberTwo();
    console.log(mult);
}

function onButtonDivideClick() {
    let quotient = getNumberOne() / getNumberTwo();
    console.log(quotient);
}

function getNumberOne() {
    return inputOne.value;
}

function getNumberTwo() {
    return inputTwo.value;
}

plus.addEventListener("click", onButtonPlusClick);
minus.addEventListener("click", onButtonMinusClick);
multiply.addEventListener("click", onButtonMultiplyClick);
divide.addEventListener("click", onButtonDivideClick);