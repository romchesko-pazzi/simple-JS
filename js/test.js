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