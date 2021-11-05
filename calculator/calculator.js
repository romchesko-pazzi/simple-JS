let plus = document.getElementById("button-plus");
let minus = document.getElementById("button-minus");
let multiply = document.getElementById("button-multiply");
let divide = document.getElementById("button-divide");


function onButtonPlusClick() {
    let inputOne = document.getElementById("numberOne");
    let inputTwo = document.getElementById("numberTwo");

    let numberOne = inputOne.value;
    let numberTwo = inputTwo.value;

    let sum = +numberOne + +numberTwo;

    console.log(sum);
}

function onButtonMinusClick() {
    let inputOne = document.getElementById("numberOne");
    let inputTwo = document.getElementById("numberTwo");

    let numberOne = inputOne.value;
    let numberTwo = inputTwo.value;

    let difference = numberOne - numberTwo;

    console.log(difference);
}

function onButtonMultiplyClick() {
    let inputOne = document.getElementById("numberOne");
    let inputTwo = document.getElementById("numberTwo");

    let numberOne = inputOne.value;
    let numberTwo = inputTwo.value;

    let mult = numberOne * numberTwo;

    console.log(mult);
}

function onButtonDivideClick() {
    let inputOne = document.getElementById("numberOne")
    let inputTwo = document.getElementById("numberTwo")

    let numberOne = inputOne.value;
    let numberTwo = inputTwo.value;

    let quotient = numberOne / numberTwo;

    console.log(quotient);
}


plus.addEventListener("click", onButtonPlusClick);
minus.addEventListener("click", onButtonMinusClick);
multiply.addEventListener("click", onButtonMultiplyClick);
divide.addEventListener("click", onButtonDivideClick);


