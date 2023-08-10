function generate() {
    let number1 = document.getElementById("field1").value;
    let number2 = document.getElementById("field2").value;

    let annountOfRandomNumbers = parseInt(number2) - parseInt(number1) + 1;
    console.log(number1 + ":" + number2);

    let randomNumber = Math.floor(Math.random() * annountOfRandomNumbers) + parseInt(number1);
    document.getElementById("randomnumber").innerHTML = randomNumber

}

//Minute 13:04