const fieldWithLightColoredNumber = [1, 3, 4, 5, 6, 8, 13, 15, 16, 19, 20, 24]
function createButtons() {
    let calendarFieldsContainer = document.getElementById("calendarfields")
    for (i = 1; i <= 24; i++) {
        const btn = document.createElement("button")
        btn.innerHTML = i
        btn.classList.add("calendarfield", `calendarfield${i}`)
        btn.id = `calendarfield${i}`
        btn.value = i
        btn.style.backgroundImage = `url(./img/present_${i}.jpg)`
        if (fieldWithLightColoredNumber.includes(i)) {
            btn.style.color = "white"
        }
        calendarFieldsContainer.appendChild(btn)
    }
}
createButtons()

let currentDate = new Date("2022-12-23")
let currentYear = new Date(currentDate).getFullYear()
let month = 12;
const startingDate = new Date(`${currentYear}-${month}-01`)
if (currentDate < startingDate) {
    console.log("Not yet time of the year.")
}

const wrapper = document.getElementById("wrapper")
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
    closePopUp()
})
const backgroundGif = document.getElementById("gif")
function openPopUp(buttonValue) {
    let openDateOfField = new Date(`${currentYear}-${month}-${buttonValue}`)
    let openDateOfFieldDay = openDateOfField.getDate()
    if ((currentDate >= openDateOfField) && (currentDate >= startingDate)) {
        popupWindow.classList.add("active")
        overlay.classList.add("active")
        backgroundGif.src = `gif/gif_${buttonValue}.gif`
    } else {
        alert(`It is not yet the ${openDateOfFieldDay}.${month}.${currentYear}`)
    }
}

function closePopUp() {
    popupWindow.classList.remove("active")
    overlay.classList.remove("active")
    backgroundGif.src = ""
}



