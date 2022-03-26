document.getElementById("send").addEventListener("click", function() {
    let result = getResultOfCalculation();
    printResult(result);
});

function getResultOfCalculation() {
    let size = document.getElementById("size").value;
    let weight = document.getElementById("weight").value;

    let result = (size * 1.43) / weight - 3.4;
    let resultRounded = Math.round(result);

    return resultRounded;
}


function printResult(result) {
    if (result < 0) {
        console.log("kleiner");
    } else if (result == 0) {
        console.log("==");
    } else {
        let output = "Positiv ";
        for (let index = 0; index < result; index++) {
            let splitSign = ", ";
            if (index == 0) {
                splitSign = "";
            }
            output = output + splitSign + index;

        }
        document.getElementById("output").innerHTML = output;
    }

}