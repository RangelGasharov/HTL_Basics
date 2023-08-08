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

const unitsInUSD = {
    "yen": 0.0070,
    "indian rupee": 0.012,
    "mexican peso": 0.059,
    "renminbi yuan": 0.14,
    "australian dollar": 0.65,
    "canadian dollar": 0.74,
    "us-dollar": 1,
    "euro": 1.1,
    "swiss franc": 1.14,
    "poung sterling": 1.27
}

function getConstant(unitString) {
    let constant = unitsInUSD[unitString] ?? "Not found"
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