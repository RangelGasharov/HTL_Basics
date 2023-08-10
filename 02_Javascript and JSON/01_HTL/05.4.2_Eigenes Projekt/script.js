function addWord() {
    generate();
    addunit();
    newElement();

    let word = document.getElementById("firstword").value + " -> " + randomNumber.innerHTML + " " + unit.value;
    console.log(word)
    document.getElementById("finalword").innerHTML = word;

}

function addunit() {
    let unit = document.getElementById("unit").value;
}

function generate() {
    let number1 = document.getElementById("figure1").value;
    let number2 = document.getElementById("figure2").value;

    if ((number1 == "") || (number2 == "")) {
        alert("Please make sure, that everything is filled in!")
        return
    }

    let amountOfRandomNumbers = parseInt(number2) - parseInt(number1) + 1;
    console.log(number1 + ":" + number2);

    let randomNumber = Math.floor(Math.random() * amountOfRandomNumbers) + parseInt(number1);
    document.getElementById("randomNumber").innerHTML = randomNumber;

}


function newElement() {

    var li = document.createElement("li");
    var inputValue = document.getElementById("firstword").value + " -> " + randomNumber.innerHTML + "  " + unit.value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("wordList").appendChild(li);
    document.getElementById("finalword").innerHTMl = "";

}



//https://www.w3schools.com/howto/howto_js_todolist.asp