// Task #1

let value_1 = prompt("Enter the value:", "");
if (value_1 > 0) {
    alert("+")
} else if (value_1 < 0) {
    alert("-")
} else {
    alert(0)
}


// Task #2

let result = prompt("Enter the number:", "");
if (result < 100) {
    result = "Few";
} else {
    result = "A lot of"
}
alert(result)


// Task #3

let value_3 = prompt("Какое «официальное» название JavaScript?", "")

if (value_3 == "ECMAScript", "ecmascript", "Ecmascript") {
    alert("Right!")
} else {
    alert("Do not know? ECMPAScript!")
}
