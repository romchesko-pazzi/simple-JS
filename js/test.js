//Task 1 (value out of range)(with !)

let age = prompt("Enter the age", "");
if (!(age >= 14 && age <= 90)) {
    alert(age)
}

//Task 2 (value in range)
let age = prompt("Enter the age", "");
if (age >= 14 && age <= 90) {
    console.log(age)
}

//Task 3 (value out of range)(without !)
let age = prompt("Enter the age", "");
if (age < 14 || age > 90) {
    console.log(age)
}