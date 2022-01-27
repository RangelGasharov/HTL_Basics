document.getElementById("executecalculation").addEventListener("click", calculate)

function calculate() {
    let value1 = document.getElementById("size").value;
    let value2 = document.getElementById("weight").value;
    let result = (value1 / value2) - 3.4;
    let resultRounded = Math.round(result);

    printValues(resultRounded)
}

function printValues(resultRounded) {

    if (resultRounded > 0) {
        let j = "Positiv ";
        for (let i = 0; i <= resultRounded; i++) {
            j += i + "<br>";
            document.getElementById("output").innerHTML = j;
            console.log(i)
            console.log(resultRounded);
        }
    } else if (resultRounded < 0) {
        let j = "Negativ ";
        for (i = 0; i >= resultRounded; i--) {
            j += i + "<br>";
            document.getElementById("output").innerHTML = j;
            console.log(i);
            console.log(resultRounded);
        }
    } else {
        let j = "NULL ";
        document.getElementById("output").innerHTML = j + 0;
    }
}