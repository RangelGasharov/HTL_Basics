function amountOfBoomerangs(array) {
    let amountOfBoomerangs = 0;
    for (let i = 0; i < array.length - 2; i++) {
        let start = array[i];
        let middle = array[i + 1];
        let end = array[i + 2];

        if (start === end && start !== middle) {
            amountOfBoomerangs += 1;
        }
    }
    return amountOfBoomerangs;
}

console.log(amountOfBoomerangs([1, 3, 1, 3, 2, 1, -8, 1, -8, 6, -5, 6]))

function possibleBonus(a, b) {
    if (a >= b) { return false; }
    if (b - a > 6) { return false; }
    return true;
}

console.log(possibleBonus(4, 10));
console.log(possibleBonus(1, 10));
console.log(possibleBonus(10, 10));


function getGeneration(x, y) {
    const generations = {
        "-3": { "m": "great grandfather", "f": "great grandmother" },
        "-2": { "m": "grandfather", "f": "grandmother" },
        "-1": { "m": "father", "f": "mother" },
        "0": { "m": "me!", "f": "me!" },
        "1": { "m": "son", "f": "daughter" },
        "2": { "m": "grandson", "f": "granddaughter" },
        "3": { "m": "great grandson", "f": "great granddaughter" }
    };
    return generations[x][y];
}

console.log(getGeneration(-3, "m"))
console.log(getGeneration(-2, "f"))
console.log(getGeneration(1, "f"))
console.log(getGeneration(0, "m"))