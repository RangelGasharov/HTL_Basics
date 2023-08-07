let input = document.querySelector("#input");
let output = document.querySelector("#output");
let inputUnit = document.querySelector("#inputUnit");
let outputUnit = document.querySelector("#outputUnit");
let inputUnitValue, outputUnitValue;

input.addEventListener("keyup", calculateResult);
input.addEventListener("change", calculateResult);
inputUnit.addEventListener("change", calculateResult);
output.addEventListener("change", calculateInput);
outputUnit.addEventListener("change", calculateResult);


const unitsInGrams = {
    "nanogram": 10 ** -9,
    "microgram": 10 ** -6,
    "miligram": 10 ** -3,
    "gram": 1,
    "kilogram": 10 ** 3,
    "ton": 10 ** 6,
    "ounce": 28.3495,
    "pound": 453.592,
    "stone": 6350.29,
    "short ton": 907_185,
    "long ton": 1_016_000
}

function getConstant(unitString) {
    let constant = unitsInGrams[unitString] ?? "Not found"
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