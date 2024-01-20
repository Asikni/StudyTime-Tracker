let saveEl = document.getElementById("save-el")
let wastedEl = document.getElementById("wasted-el")
let countEl = document.getElementById("count-el")
let isWastedMessageDisplayed = false;
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    isWastedMessageDisplayed = false
    wastedEl.textContent = "";
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    isWastedMessageDisplayed = false
    wastedEl.textContent = "";
}
function wasted() {
    if (!isWastedMessageDisplayed) {
                wastedEl.textContent = "WE DON'T STUDY, WE CHILL!!!!";
                isWastedMessageDisplayed = true;
}
}