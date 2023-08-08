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

const unitsInSeconds = {
    "nanoseconds": 10 ** -9,
    "microseconds": 10 ** -6,
    "miliseconds": 10 ** -3,
    "seconds": 1,
    "minute": 60,
    "hour": 3_600,
    "day": 86_400,
    "year": 31_536_000,
    "decade": 315_360_000,
    "century": 3_153_600_000
}

function getConstant(unitString) {
    let constant = unitsInSeconds[unitString] ?? "Not found"
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