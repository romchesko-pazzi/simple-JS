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