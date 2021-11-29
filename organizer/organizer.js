let buttonSave = document.getElementById("save-button");
let buttonCheck = document.getElementById("check-button");

buttonSave.addEventListener("click", saveSomeShit);
buttonCheck.addEventListener("click", checkSomeShit);

buttonCheck.disabled = true;

function saveSomeShit() {
    let enteredDay = document.getElementById("inputOfSaved").value;
    let info = document.getElementById("textarea").value;
    if (enteredDay != "" && info != "") {
        buttonCheck.disabled = false;
    }
    return arrayOfDayAndInfo = [enteredDay, info];
}

function checkSomeShit() {
    let showedDay = document.getElementById("inputOfShowed").value;
    if (showedDay === arrayOfDayAndInfo[0]) {
        console.log(arrayOfDayAndInfo[1])
    } else {
        console.log("No plans")
    }
}