document.getElementById("buttonBMI").addEventListener("click", function() {
    generatebmi();
});


function generatebmi() {

    let value1 = document.getElementById("size").value;
    let value2 = document.getElementById("weight").value;
    let result = (value1 / value2) - 3.4;
    console.log(result)
    printvalues(result)
}

function printvalues(result) {

    if (result > 0) {
        let j = "";
        for (let i = 0; i < result; i++) {
            j += i + "<br>";
            document.getElementById("output").innerHTML = "Positiv" + " " +
                j;
            console.log(i)
            console.log(result);
        }
    } else if (result < 0) {
        let j = "";
        for (i = 0; i > result; i--) {
            j += i + "<br>";
            document.getElementById("output").innerHTML = "Negativ" + " " + j;
            console.log(i);
            console.log(result);
        }
    } else {
        document.getElementById("output").innerHTML = "NULL" + " " + 0;
    }




}


/* https://www.w3schools.com/js/tryit.asp?filename=tryjs_loop_for_ex
function printvalues2(result) {

    if (result < 0) {

        for (abstand = result; abstand <= 0; abstand++) {
            console.log(abstand);

        }
        document.getElementById("Ausgabewert").innerHTML = "Negativ" + " " + abstand;
    } else if (result > 0) {

        for (abstand = result; abstand >= 0; abstand--) {
            console.log(abstand);

        }
        document.getElementById("Ausgabewert").innerHTML = "Positiv" + " " + abstand;
    } else {

        for (abstand = result; abstand = 0; abstand) {
            console.log(abstand);
        }
        document.getElementById("Ausgabewert").innerHTML = "NULL" + " " + abstand;
    }

} */