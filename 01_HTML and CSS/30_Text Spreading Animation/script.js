const enhance = id => {
    const element = document.getElementById(id),
        text = element.innerHTML.split("");

    element.innerText = "";

    text.forEach(letter => {
        const span = document.createElement("span");
        span.className = "letter";
        span.innerText = letter;
        element.appendChild(span);
    });
}

enhance("special-word-1")
enhance("special-word-2")
enhance("special-word-3")
enhance("special-word-4")

const specialLetters = document.querySelectorAll(".letter")
console.log(specialLetters)
specialLetters.forEach(specialLetter => {
    specialLetter.addEventListener("mouseover", () => {
        specialLetter.style.color = "red"
        let randomNumber = Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
        specialLetter.style.transform = `translate(${100 * randomNumber}%, ${100 * randomNumber}%) rotate(${360 * randomNumber}deg)`
    })
    specialLetter.addEventListener("mouseout", () => {
        specialLetter.style.color = "white"
        specialLetter.style.transform = `translate(0%, 0%) rotate(0deg)`
    })
})