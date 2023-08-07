let input = document.querySelector("#input");
let output = document.querySelector("#output");
let inputUnit = document.querySelector("#inputUnit");
let outputUnit = document.querySelector("#outputUnit");
let inputUnitValue, outputUnitValue;

input.addEventListener("keyup", calculateResult);
input.addEventListener("change", calculateResult);
inputUnit.addEventListener("change", calculateResult);
output.addEventListener("change", calculateInput);
outputUnit.addEventListener("change", calculateInput);


const unitsInMeters = {
    "nanometer": 10 ** -9,
    "micrometer": 10 ** -6,
    "milimeter": 10 ** -3,
    "centimeter": 10 ** -2,
    "decimeter": 10 ** -1,
    "meter": 1,
    "kilometer": 10 ** 3
}

function getConstant(unitString) {
    let constant = unitsInMeters[unitString] ?? "Not found"
    return constant;
}

function calculateResult() {
    inputUnitValue = inputUnit.value;
    const constantInput = getConstant(inputUnitValue);
    outputUnitValue = outputUnit.value;
    const constantOutput = getConstant(outputUnitValue)
    output.value = input.value * constantInput / constantOutput;
}

function calculateInput() {
    inputUnitValue = inputUnit.value;
    const constantInput = getConstant(inputUnitValue);
    outputUnitValue = outputUnit.value;
    const constantOutput = getConstant(outputUnitValue)
    input.value = Math.round(10 ** 5 * (output.value / (constantInput / constantOutput))) / 10 ** 5;
}