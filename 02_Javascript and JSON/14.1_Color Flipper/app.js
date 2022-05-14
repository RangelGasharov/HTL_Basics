const colors = ["red", "green", "blue", "purple", "yellow", "orange", "brown", "black", "white", "rgba(133,122,200)", "rgba(15,20,75)", "#f150235", "#a68a45"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

//https://www.youtube.com/watch?v=3PHXvlpOkf4