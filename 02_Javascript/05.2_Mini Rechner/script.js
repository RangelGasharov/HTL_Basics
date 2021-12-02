
function buttonClicked(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    
    let result = parseFloat (num1) + parseFloat(num2);
    console.log(result);

    let element = document.getElementById("result");
    element.innerHTML = "Result: " + result;
}



function buttonClicked2() {
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    
    let result = parseFloat (num1) - parseFloat(num2);
    console.log(result);

    let element = document.getElementById("result");
    element.innerHTML = "Result: " + result;

}



function buttonClicked3() {
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    
    let result = parseFloat (num1) * parseFloat(num2);
    console.log(result);

    let element = document.getElementById("result");
    element.innerHTML = "Result: " + result;

}

function buttonClicked4() {
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    
    let result = parseFloat (num1) / parseFloat(num2);
    console.log(result);

    let element = document.getElementById("result");
    element.innerHTML = "Result: " + result;

}
