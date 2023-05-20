let canvas = document.getElementById("canvas")
let context = canvas.getContext("2d")

let canvasWidth = canvas.width
let canvasHeight = canvas.height

let centerX = canvasWidth / 2;
let centerY = canvasHeight / 2;
let radius = 20;

context.fillStyle = "red";
context.beginPath()
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, true)
context.stroke()
context.fill()

function createButtons() {
    let buttonContainer = document.getElementById("buttons-container")
    for (i = 1; i <= 8; i++) {
        let currentButton = document.createElement("button")
        currentButton.classList.add("btn-balls-toggle")
        currentButton.id = `btn-${i}`
        currentButton.textContent = `Ball ${i}`
        buttonContainer.append(currentButton)
    }
}

createButtons()