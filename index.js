let countText = document.getElementById("count-el")
let saveCount = document.getElementById("save-el")
let counter = 0

function increment() {
    console.log("The button was clicked")
    counter += 1
    countText.textContent = counter
}

function save() {
    let oldCount = counter + " - "
    saveCount.textContent += oldCount
    counter = 0
    countText.textContent = counter
}

function resetcount() {
    countText.textContent = 0
    oldCount = 0
    saveCount.textContent = "Previous count: "
}