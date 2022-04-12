for (let x = -10; x <= 10; x = x + 0.5) {

    document.getElementById("xValue1").innerHTML += "<div class='xValueBars1'>" + x + "</div>";

    y = x + 2;
    document.getElementById("yValue1.1").innerHTML += "<div class='yValueBars1_1'>" + y + "</br>";

    y = Math.pow(x, 2);
    document.getElementById("yValue1.2").innerHTML += "<div class='yValueBars1_2'>" + y + "</br>";

    y = Math.pow(2, x);
    y = +y.toFixed(5);
    document.getElementById("yValue1.3").innerHTML += "<div class='yValueBars1_3'>" + y + "</br>";

    y = Math.pow(x, 0.5);
    if (Number.isNaN(y)) {
        y = "-"
        document.getElementById("yValue1.4").innerHTML += "<div class='yValueBars1_4'>" + y + "</br>";
    } else {
        y = +y.toFixed(5);
        document.getElementById("yValue1.4").innerHTML += "<div class='yValueBars1_4'>" + y + "</br>";
    }


}