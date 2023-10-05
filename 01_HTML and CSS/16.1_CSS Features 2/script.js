const toggleButton = document.querySelector("#toggle-btn");
const animationCard = document.querySelector("#animation-card");

toggleButton.addEventListener("click", () => {
    animationCard.classList.toggle("show");
})