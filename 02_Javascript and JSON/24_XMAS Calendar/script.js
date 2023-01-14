let currentDate = new Date()
console.log(currentDate)
let currentYear = new Date(currentDate).getFullYear()
let month = 12;
const startingDate = new Date(`${currentYear}/${month}/01`)
const calendarFieldsContainer = document.getElementById("calendarfields")

const fieldWithLightColoredNumber = [1, 3, 4, 5, 6, 8, 13, 15, 16, 19, 20, 24]
function createButtons() {
    for (i = 1; i <= 24; i++) {
        const btn = document.createElement("button")
        btn.innerHTML = i
        btn.classList.add("calendarfield", `calendarfield${i}`)
        btn.id = `calendarfield${i}`
        btn.value = i
        btn.style.backgroundColor = "green"
        if (i % 2 == 0) {
            btn.style.backgroundColor = "red"
        }
        btn.style.backgroundImage = `url(./img/present_${i}.jpg)`
        if (fieldWithLightColoredNumber.includes(i)) {
            btn.style.color = "white"
        }
        let openDateOfField = new Date(`${currentYear}/${month}/${btn.value}`)
        if (currentDate < openDateOfField) {
            btn.classList.add("cannot-open")
        }
        calendarFieldsContainer.appendChild(btn)
    }
}
createButtons()

const wrapper = document.getElementById("wrapper")
const calendarTitle = document.getElementById("calendartitle")
const buttonsOfCalendar = document.querySelectorAll(".calendarfield")
const popupWindow = document.getElementById("popup")

const overlay = document.getElementById("overlay")
const closingButton = document.getElementById("close-button")

buttonsOfCalendar.forEach(button => {
    button.addEventListener("click", () => {
        let buttonValue = button.value
        openPopUp(buttonValue)
    })
})

closingButton.addEventListener("click", () => {
    if (popupWindow.classList.contains("credits")) {
        closeCredits()
    }
    closePopUp()
})

const backgroundGif = document.createElement("img")
backgroundGif.id = "gif"

function openPopUp(buttonValue) {
    let openDateOfField = new Date(`${currentYear}/${month}/${buttonValue}`)
    if ((currentDate >= openDateOfField)) {
        popupWindow.appendChild(backgroundGif)
        backgroundGif.src = `gif/gif_${buttonValue}.gif`
        popupWindow.classList.add("active")
        overlay.classList.add("active")
    } else {
      
    }
}

function closePopUp() {
    popupWindow.classList.remove("active")
    overlay.classList.remove("active")
    backgroundGif.src = ""
    if (popupWindow.querySelector("#gif")) {
        popupWindow.removeChild(backgroundGif)
    }
}


const creditDivButton = document.createElement("button")
creditDivButton.id = "credits"
creditDivButton.innerHTML = "Credits"
const creditsText = document.createElement("div")
creditsText.classList.add("credits-text")
creditsText.innerHTML = `<div><strong>Project name:</strong> XMAS-Calendar</div>
<div><strong>Group name:</strong> Rodel</div>
<div><strong>Made by:</strong> <ul><li>Rangel Gasharov</li> <li>Santiago Scheffknecht</li> <li>Fabian Argast</li> </ul> </div>`
calendarTitle.appendChild(creditDivButton)

creditDivButton.addEventListener("click", () => {
    openCredits();
})

function openCredits() {
    popupWindow.classList.add("active")
    popupWindow.classList.add("credits")
    popupWindow.append(creditsText)
    overlay.classList.add("active")
}

function closeCredits() {
    popupWindow.classList.remove("credits")
    popupWindow.removeChild(creditsText)
}

const canvas = document.getElementById("canvas");
canvas.width = wrapper.offsetWidth
canvas.height = wrapper.offsetHeight
const ctx = canvas.getContext("2d")

ctx.fillStyle = "#fff";
class Snowflake {
    constructor() {
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        this.x = Math.random() * canvas.clientWidth * plusOrMinus;
        this.y = Math.random() * canvas.clientHeight;
        this.offset = 1;
        this.radius = Math.random() * 3;
        this.velocity = this.radius;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill();
        ctx.closePath();

        this.y += this.velocity;
        this.x += this.offset;
        if (this.y > canvas.height || this.x > canvas.width) {
            let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
            this.x = Math.random() * canvas.clientWidth * plusOrMinus;
            this.y = 0;
        }
    }
}

let snowFlakes = [];
for (let i = 0; i < canvas.width / 2; i++) {
    snowFlakes.push(new Snowflake())
}

window.onresize = function () {
    resizeCanvas();
}

function resizeCanvas() {
    canvas.width = wrapper.offsetWidth
    canvas.height = wrapper.offsetHeight
    ctx.fillStyle = "#fff";
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    snowFlakes.forEach((snowFlake) => { snowFlake.draw() })
}

function animation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    snowFlakes.forEach((snowFlake) => { snowFlake.draw() })
    requestAnimationFrame(animation)
}
animation();