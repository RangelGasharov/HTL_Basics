let createBox = document.querySelectorAll(".createBox")[0];
let notes = document.querySelectorAll(".notes")[0];
let input = document.querySelector("#userInput");

createBox.addEventListener("keydown", content);

document.querySelector("#create").addEventListener("click", () => {
    createBox.style.display = "block";
});

function content(e) {
    if (e.keyCode == "13") {
        divStyle(input.value);
        input.value = "";
        createBox.style.display = "none";
    }
}

function divStyle(text) {
    let div = document.createElement("div");
    div.className = "note";
    div.textContent = text;
    notes.appendChild(div);
    div.style.backgroundColor = color();

    div.addEventListener("dblclick", () => {
        div.remove();
    })
}

function color() {
    let randomColors = ["#c3fa2f", "#11f22a", "#f1f22a", "#f1125f", "#1f3df1", "#b7bc15", "#006196",
        "#b1cfbb", "#4c9d70", "#3e373c", "#d56d3e", "#b02e7b", "#d64d3b", "#bfd2a3", "#97edc8", "#6b8815"];
    i = Math.round(Math.random() * randomColors.length);
    return randomColors[i];
}