let countDownDate = new Date("Jan 1, 2024 00:00:00").getTime()
let x = setInterval(() => {
    let currentTime = new Date().getTime();

    let remainingTime = countDownDate - currentTime;

    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
    let hours = Math.floor(remainingTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let minutes = Math.floor(remainingTime % (1000 * 60 * 60) / (1000 * 60))
    let seconds = Math.floor(remainingTime % (1000 * 60) / 1000)

    let countDonwText = document.querySelector("#countdown");
    countDonwText.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`
    if (remainingTime < 0) {
        clearInterval(x);

        countDonwText.textContent = "Countdown has expired!"
    }
}, 1000)