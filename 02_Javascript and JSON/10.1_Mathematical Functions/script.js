document.getElementById("commitXValues1").addEventListener("click", function() {

})

let startValueX1 = -10
let endValueX1 = 10
let stepValueX1 = 1

for (let x = startValueX1; x <= endValueX1; x += stepValueX1) {

    document.getElementById("xValue1").innerHTML += "<div class='xValueBars1'>" + x;

    y = x + 2;
    document.getElementById("yValue1.1").innerHTML += "<div class='yValueBars1_1'>" + y;

    y = Math.pow(x, 2);
    document.getElementById("yValue1.2").innerHTML += "<div class='yValueBars1_2'>" + y;

    y = Math.pow(2, x);
    y = +y.toFixed(5);
    document.getElementById("yValue1.3").innerHTML += "<div class='yValueBars1_3'>" + y;

    y = Math.pow(x, 0.5);
    if (Number.isNaN(y)) {
        y = "-"
        document.getElementById("yValue1.4").innerHTML += "<div class='yValueBars1_4'>" + y;
    } else {
        y = +y.toFixed(5);
        document.getElementById("yValue1.4").innerHTML += "<div class='yValueBars1_4'>" + y;
    }

    console.log(x)

}