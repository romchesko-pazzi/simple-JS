let select = document.getElementById("select-id");
let el = document.getElementById("calc");

function main(selectedValue) {
    let num1 = Number(document.getElementById("numberOne").value);
    let num2 = Number(document.getElementById("numberTwo").value);
    selectedValue = select.options[select.selectedIndex].value;
    let result;

    if (selectedValue === "+") {
        result = num1 + num2;
    } else if (selectedValue === "-") {
        result = num1 - num2;
    } else if (selectedValue === "*") {
        result = num1 * num2;
    } else if (selectedValue === "/") {
        if (num1 === 0 || num2 === 0) {
            console.log("NO");
            return;
        } else
            result = num1 / num2;

    } else {
        console.log("Unknown operation");
    }
    console.log(result.toFixed(1));
}