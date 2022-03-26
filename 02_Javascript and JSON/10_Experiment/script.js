document.getElementById("startProcess1").addEventListener("click", function() {
    pointreached1 = false;
    calculateNumber1()
});

document.getElementById("startProcess2").addEventListener("click", function() {
    pointreached1 = false;
    calculateNumber1()
});

let pointreached1 = false;

function calculateNumber1() {
    let beginingvalue1 = document.getElementById("beginingvalue1").value;
    if (beginingvalue1 == '') {
        alert('Please, specify the starting value!')
    }
    let pointtoreach1 = document.getElementById("pointtoreach1").value;
    if (pointtoreach1 == '') {
        alert('Please, specify the ending value!')
    }
    let slope1 = document.getElementById("slope1").value;
    if (slope1 == '') {
        alert('Please, specify the value of the slope!')
    }
    let propabilitypoint1 = document.getElementById("propabilitypoint1").value;
    if (propabilitypoint1 == '') {
        alert('Please, specify range of propability!')
    }
    let processnumber = 0;

    while (!pointreached1) {
        let propability = Math.random() * 100;
        console.log("Current value: " + beginingvalue1)
        console.log("Number of rounds: " + processnumber)
        console.log("Propability-rate: " + propability)

        if (propability < propabilitypoint1 && beginingvalue1 > pointtoreach1) {
            beginingvalue1 = beginingvalue1 * (1 - (slope1 / 100))
            processnumber = processnumber + 1;
        } else if (propability > propabilitypoint1 && beginingvalue1 > pointtoreach1) {
            beginingvalue1 = beginingvalue1 * (1 + (slope1 / 100))
            processnumber = processnumber + 1;
        } else if (beginingvalue1 <= pointtoreach1) {
            pointreached1 = true;
            console.log("The endpoint was reached!")
        }

    }
    document.getElementById('outputs1').innerHTML += processnumber + ' ';

}