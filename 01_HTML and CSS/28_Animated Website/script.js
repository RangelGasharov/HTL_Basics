let moon = document.getElementById("moon")

window.addEventListener("scroll", () => {
    scrollValue = window.scrollY;
    moon.style.marginLeft = `${scrollValue * 3}px`;
    moon.style.marginBottom = `${scrollValue * -0.75}px`;
})

