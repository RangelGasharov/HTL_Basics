console.log(window.getComputedStyle(document.documentElement)
    .getPropertyValue("--div-background-color"))

console.log(window.getComputedStyle(document.documentElement)
    .getPropertyValue("--text-color"))

document.getElementById("dark-theme-btn").addEventListener("click", () => {
document.documentElement.style.setProperty("--background-color", "#333")
})

document.getElementById("light-theme-btn").addEventListener("click", () => {
    document.documentElement.style.setProperty("--background-color", "white")
    })
    
