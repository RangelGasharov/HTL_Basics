const hideBtns = document.querySelectorAll("[data-hide-btn]")

hideBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest("tr").classList.add("hidden");
    })
})