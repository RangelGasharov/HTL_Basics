function generatebmi() {

    let value1 = document.getElementById("Größe").value;
    let value2 = document.getElementById("Gewicht").value;
    let result = (value1 / value2) - 3.4;
    console.log(result);
    sort()
}

function sort() {
    if (result < 0) {
        console.log("Neagativ");
    } else if (result > 0) {
        console.log("Positiv)");
    } else {
        console.log("NULL");
    }
}