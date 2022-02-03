document.getElementById("generatebutton").addEventListener("click", function() {
    calculate();
});

function calculate() {
    let number = document.getElementById("inputfield").value;
    let numberRounded = Math.round(number);
    execute(numberRounded)
}

function execute(numberRounded) {
    if (numberRounded > 0) {
        let j = ""
        for (i = 0; i <= numberRounded; i++) {
            if (i == 0) {
                seperator = ""
            } else {
                seperator = ", "
            }
            j += seperator + i;
            document.getElementById("outputs").innerHTML = j;
        }

    } else if (numberRounded < 0) {
        let j = ""
        for (i = 0; i >= numberRounded; i--) {
            if (i == 0) {
                seperator = ""
            } else {
                seperator = ", "
            }
            j += seperator + i;

            document.getElementById("outputs").innerHTML = j;
        } {

        }
    } else {
        document.getElementById("outputs").innerHTML = 0;
    }
}