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

function tetra(n) {
    let sum = 0;
    let i = 0;
    while (i <= n) {
        sum += i * (n - i + 1);
        i++;
    }
    return sum;
}

/*console.log(tetra(6));
console.log(tetra(45));*/


function triangle(n) {
    return n * (n + 1) / 2;
}

function changeEnough(change, amountDue) {
    let sumOfChange = 0;
    let values = [0.25, 0.1, 0.05, 0.01];
    for (let i = 0; i < change.length; i++) {
        sumOfChange += change[i] * values[i];
    }
    return amountDue > sumOfChange ? false : true;
}

/* console.log(changeEnough([2, 100, 0, 0], 14.11));
console.log(changeEnough([0, 0, 20, 5], 0.75));
console.log(changeEnough([10, 0, 0, 50], 3.85));
console.log(changeEnough([30, 40, 20, 5], 12.55));*/

function intWithinBounds(n, low, high) {
    if (n < high && n > low) {
        return n % 1 == 0 ? true : false;
    }
    return false;
}

/* console.log(intWithinBounds(3, 1, 9));
console.log(intWithinBounds(6, 1, 6));
console.log(intWithinBounds(4.5, 3, 8));*/

function countTrue(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            sum += 1;
        }
    }
    return sum;
}

/* console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, true, false, false]));
console.log(countTrue([]));*/

function areaOfCountry(countryName, countryArea) {
    const worldArea = 148_940_000;
    console.log(`${countryName} is ${Math.round(countryArea * 10000 / worldArea) / 100}% of the total world's landmass.`);
}

/* areaOfCountry("Russia", 17_098_242);
areaOfCountry("USA", 9_372_610);
areaOfCountry("Iran", 1_648_195);*/

function getTotalPrice(purchases) {
    let totalPrice = purchases.reduce(function (accumulator, currentPurchase) {
        return accumulator + currentPurchase.price * currentPurchase.quantity;
    }, 0)
    return totalPrice;
}

/* console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
]));

console.log(getTotalPrice([
    { product: "Milk", quantity: 3, price: 1.50 }
]))*/

function doesBrickFit(a, b, c, w, h) {
    let dimensionsBrick = [a, b, c];
    dimensionsBrick.sort((a, b) => a - b);
    if ((dimensionsBrick[0] <= w && dimensionsBrick[1] <= h)
        || (dimensionsBrick[0] <= h && dimensionsBrick[1] <= w)) {
        return true;
    }
    return false;
}

/* console.log(doesBrickFit(40, 40, 30, 100, 30));
console.log(doesBrickFit(1, 2, 1, 1, 1));
console.log(doesBrickFit(3, 1, 2, 1, 1));*/

function sevenBoom(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].toString().includes("7")) {
            console.log("Boom");
            return;
        }
    }
    console.log("there is no 7 in the array")
}

/* sevenBoom([1, 2, 3, 4, 5, 6, 7]);
sevenBoom([8, 6, 33, 100]);
sevenBoom([2, 55, 60, 97, 86]);*/

function getPrimeFactorization(a) {
    let primeFactors = [];
    if (a == 1) { return [1]; }
    for (let i = 2; i <= Math.ceil(Math.sqrt(a)); i++) {
        while (a % i == 0) {
            primeFactors.push(i);
            a /= i;
        }
    }
    return primeFactors;
}

/* console.log(getPrimeFactorization(1));*/