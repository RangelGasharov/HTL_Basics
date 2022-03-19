let pitch = 0.10;
let value = 100;
let processnumber = 0;
let pointtoreach = 0.9;
let pointreached = false;


while (!pointreached) {
    let propability = Math.random() * 100;
    console.log("Current value: " + value)
    console.log("Number of rounds: " + processnumber)
    console.log("Propability-rate: " + propability)

    if (propability < 60 && value > pointtoreach) {
        value = value * (1 - pitch)
        processnumber = processnumber + 1;
    } else if (propability > 60 && value > pointtoreach) {
        value = value * (1 + pitch)
    } else if (value <= pointtoreach) {
        pointreached = true;
        console.log("The endpoint was reached!")
    }
}