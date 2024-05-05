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

/*console.log(amountOfBoomerangs([1, 3, 1, 3, 2, 1, -8, 1, -8, 6, -5, 6]))*/

function possibleBonus(a, b) {
    if (a >= b) { return false; }
    if (b - a > 6) { return false; }
    return true;
}

/*console.log(possibleBonus(4, 10));
console.log(possibleBonus(1, 10));
console.log(possibleBonus(10, 10));*/


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

/*console.log(getGeneration(-3, "m"))
console.log(getGeneration(-2, "f"))
console.log(getGeneration(1, "f"))
console.log(getGeneration(0, "m"))*/

function bitwiseAND(n1, n2) {
    return n1 & n2;
}

function bitwiseOR(n1, n2) {
    return n1 | n2;
}

function bitwiseXOR(n1, n2) {
    return n1 ^ n2;
}

/*console.log(bitwiseAND(1, 6))
console.log(bitwiseOR(4, 5))
console.log(bitwiseXOR(3, 9))*/

function oddishOrEvenish(num) {
    let digit = [];
    let sum = 0;

    while (num > 0) {
        digit.unshift(num % 10);
        num = Math.floor(num / 10);
    }
    for (let i = 0; i < digit.length; i++) {
        sum += digit[i];
    }
    if (sum % 2 === 0) {
        return "Evenish";
    } else {
        return "Oddish";
    }
}

/*console.log(oddishOrEvenish(9201))*/

function combinations(...args) {
    const validArgs = args.filter(arg => arg !== 0);
    if (validArgs.length === 0) { return 0; }
    return validArgs.reduce((acc, val) => acc * val, 1);
}

/*console.log(combinations(2, 4, 5, 6, 6));
console.log(combinations(0, 1, 5));*/

function perimeter(l, num) {
    return (l === "s" && 4 * num) || (l === "c" && 6.28 * num);
}

/*console.log(perimeter("c", 3))
console.log(perimeter("s", 3))*/


function numOfDigits(num) {
    return Math.abs(num).toString().length;
}

/*console.log(numOfDigits(12345));
console.log(numOfDigits(0));*/

function getDerivative(b, m) {
    return b * m ** (b - 1);
}

/*console.log(getDerivative(2, 10));
console.log(getDerivative(4, Math.E));*/

function shiftToRight(x, y) {
    return Math.floor(x / 2 ** y);
}

/* shiftToRight(80, 3)
shiftToRight(-512,10)*/