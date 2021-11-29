let buttonSave = document.getElementById("save-button");
let buttonCheck = document.getElementById("check-button");

buttonSave.addEventListener("click", saveFirstBlock);
buttonCheck.addEventListener("click", showPlans);

buttonCheck.disabled = true;

function saveFirstBlock() {
    let enteredDay = document.getElementById("valueOfEntered").value;
    let info = document.getElementById("textarea").value;
    if (enteredDay != "" && info != "") {
        buttonCheck.disabled = false;
    }
    return arrayOfDayAndInfo = [enteredDay, info];
}

function showPlans() {
    let showedDay = document.getElementById("valueOfChecked").value;
    if (showedDay === arrayOfDayAndInfo[0]) {
        console.log(arrayOfDayAndInfo[1])
    } else {
        console.log("No plans")
    }
}
