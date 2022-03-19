document.getElementById("startProcess1").addEventListener("click", function() {
    calculateNumber1()
});

document.getElementById("startProcess2").addEventListener("click", function() {
    calculateNumber2()
});

let pointreached1 = false;


function calculateNumber1() {
    let value1 = document.getElementById("value1").value;
    if (value1 == '') {
        alert('Please, specify the starting value!')
    }
    let processnumber = 0;
    let pointtoreach1 = document.getElementById("pointtoreach1").value;
    if (pointtoreach1 == '') {
        alert('Please, specify the ending value!')
    }
    let slope1 = document.getElementById("slope1").value;
    if (slope1 == '') {
        alert('Please, specify the value of the slope!')
    }

    while (!pointreached1) {
        let propability = Math.random() * 100;
        console.log("Current value1: " + value1)
        console.log("Number of rounds: " + processnumber)
        console.log("Propability-rate: " + propability)

        if (propability < 55 && value1 > pointtoreach1) {
            value1 = value1 * (1 - (slope1 / 100))
            processnumber = processnumber + 1;
        } else if (propability > 55 && value1 > pointtoreach1) {
            value1 = value1 * (1 + (slope1 / 100))
        } else if (value1 <= pointtoreach1) {
            pointreached1 = true;
            console.log("The endpoint was reached!")
        }

    }
}