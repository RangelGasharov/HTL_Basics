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

function possibleBonus(a, b) {
    if (a >= b) { return false; }
    if (b - a > 6) { return false; }
    return true;
}

console.log(amountOfBoomerangs([1, 3, 1, 3, 2, 1, -8, 1, -8, 6, -5, 6]))

console.log(possibleBonus(4, 10));
console.log(possibleBonus(1, 10));
console.log(possibleBonus(10, 10));