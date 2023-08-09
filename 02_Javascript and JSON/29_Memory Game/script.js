const emojis = ["😁", "😁", "😌", "😌", "🔴", "🔴", "🔵", "🔵", "🟢", "🟢", "😂", "😂", "🤫", "🤫", "😏", "😏"];
let shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);

emojis.forEach(emoji => {
    let box = document.createElement("div")
    box.className = "item"
    box.innerHTML = emoji

    box.onclick = function () {
        this.classList.add("boxOpen")
        setTimeout(function () {
            if (document.querySelectorAll(".boxOpen").length > 1) {
                if (document.querySelectorAll(".boxOpen")[0].innerHTML == document.querySelectorAll(".boxOpen")[1].innerHTML) {
                    document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
                    document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");
                    if (document.querySelectorAll(".boxMatch").length == emojis.length) {
                        alert("Congratulations, you won!")
                    }
                }
                document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
                document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
            }
        }, 500)
    }
    document.querySelector("#game").appendChild(box)
});

