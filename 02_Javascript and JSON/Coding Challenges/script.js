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
    let b = a;
    let primeFactors = [];
    if (a == 1) { return [1]; }
    for (let i = 2; i <= a; i++) {
        while (a % i == 0) {
            primeFactors.push(i);
            a /= i;
        }
    }
    return primeFactors;
}

function lcm(a, b) {
    let arrayA = getPrimeFactorization(a);
    let arrayB = getPrimeFactorization(b);
    let combinedArray = combineArrays(arrayA, arrayB);
    let result = 1;
    for (let i = 0; i < combinedArray.length; i++) {
        result *= combinedArray[i];
    }
    return result;
}

/* console.log(getPrimeFactorization(124));*/

function combineArrays(arr1, arr2) {
    const count1 = {};
    const count2 = {};
    arr1.forEach(element => {
        count1[element] = (count1[element] || 0) + 1;
    });
    arr2.forEach(element => {
        count2[element] = (count2[element] || 0) + 1;
    });
    const combined = arr1.slice();
    for (let element in count2) {
        const countInArr1 = count1[element] || 0;
        const countInArr2 = count2[element];
        const difference = countInArr2 - countInArr1;
        if (difference > 0) {
            for (let i = 0; i < difference; i++) {
                combined.push(Number(element));
            }
        }
    }
    return combined;
}

function lcm2(a, b) {
    let lar = Math.max(a, b);
    let small = Math.min(a, b);
    for (i = lar; ; i += lar) {
        if (i % small == 0)
            return i;
    }
};

function checkTimeLCM(lcmFunction, a, b) {
    let startAt = performance.now();
    lcmFunction(a, b);
    let endAt = performance.now();
    return endAt - startAt;
}

/* console.log(lcm(15485863, 524287));
console.log(`LCM function 1 time: ${checkTimeLCM(lcm, 15485863, 524287)} ms`);
console.log(lcm2(15485863, 524287));
console.log(`LCM function 2 time: ${checkTimeLCM(lcm2, 15485863, 524287)} ms`);*/

function lcmExecutionTimes(lcmFunction, end) {
    let executionTimes = [];
    for (let i = 1; i < end; i++) {
        let time = checkTimeLCM(lcmFunction, i, 524287)
        executionTimes.push(time);
    }
    return executionTimes;
}

/* console.log("LCM function 1 times:");
console.log(lcmExecutionTimes(lcm, 1000));
console.log("LCM function 2 times:");
console.log(lcmExecutionTimes(lcm2, 1000));*/

function isPositiveDominant(array) {
    let amountOfPositive = 0;
    let amountOfNegative = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] > 0 ? amountOfPositive += 1 : (array[i] == 0 ? null : amountOfNegative += 1);
    }
    return amountOfPositive > amountOfNegative ? true : false;
}

/* console.log(isPositiveDominant([5, 99, 832, -3, -4]));
console.log(isPositiveDominant([5, 0]));
console.log(isPositiveDominant([0, -4, -1]));*/

function isPandigital(number) {
    let digits = number.toString().split('').map(Number);
    let digitAvailable = Array(10).fill(false);

    for (let i = 0; i < digits.length; i++) {
        let currentNum = digits[i];
        digitAvailable[currentNum] = true;
    }

    for (let i = 0; i < digitAvailable.length; i++) {
        if (!digitAvailable[i]) { return false; }
    }
    return true;
}

/*console.log(isPandigital(1234))
console.log(isPandigital(984072356890))
console.log(isPandigital(1234567890));*/

function compact(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i]) { newArray.push(array[i]); }
    }
    return newArray;
}

/* console.log(compact([0, 1, false, 2, "", 3]));
console.log(compact([null, 1, undefined, 2, NaN, 3, null])); */

function countDigitsWithoutString(num) {
    num = Math.abs(num);
    let count = Math.floor(Math.log10(num)) + 1;
    return count;
}

/* console.log(countDigitsWithoutString(1));
console.log(countDigitsWithoutString(-123456));*/

function addUp(num) {
    return num / 2 * (num + 1);
}

function millionsRounding(array) {
    return array.map(([cityName, population]) => [cityName, Math.round(population / 1_000_000) * 1_000_000]);
}

/* console.log(millionsRounding([
    ["Nice", 942208],
    ["Abu Dhabi", 1482816],
    ["Naples", 2186853],
    ["Vatican City", 572]
])) */

function colorPatternTimes(listOfColors) {
    let totalTimeInSeconds = 0;
    for (let i = 0; i < listOfColors.length - 1; i++) {
        if (listOfColors[i] !== listOfColors[i + 1]) {
            totalTimeInSeconds += 1
        }
        totalTimeInSeconds += 2
    }
    totalTimeInSeconds += 2
    return totalTimeInSeconds
}

/* console.log(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"]));
console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"]));
console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]));
console.log(colorPatternTimes(["Red", "Green", "Blue", "Yellow", "Red", "Red", "Yellow", "Green", "Green", "Green", "Red", "Blue", "Yellow", "Blue", "Green", "Green", "Red", "Red", "Red", "Blue", "Green", "Red", "Blue", "Blue", "Red", "Blue"]));*/

function reverseOdd(text) {
    let separatedWords = separateWords(text);
    let reversedWords = reverseOddWords(separatedWords);
    let finalSentence = formSentence(reversedWords);
    return finalSentence;
}

function reverseOddWords(words) {
    let reversedWords = [];
    words.forEach(word => {
        word.length % 2 == 0 ? reversedWords.push(word) : reversedWords.push(word.split("").reverse().join(""));
    });
    return reversedWords;
}

function formSentence(words) {
    let sentence = "";
    for (let i = 0; i < words.length; i++) {
        sentence += words[i] + " ";
    }
    sentence.slice(0, -1)
    return sentence;
}

function separateWords(text) {
    let separatedWords = [];
    let currentWord = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] == " ") {
            separatedWords.push(currentWord);
            currentWord = "";
        }
        else if (i == text.length - 1) {
            if (text[i].match(/^[a-z0-9]+$/i)) {
                currentWord += text[i];
            }
            separatedWords.push(currentWord);
        }
        else {
            if (text[i].match(/^[a-z0-9]+$/i)) {
                currentWord += text[i];
            }
        }
    }
    return separatedWords;
}

/* console.log(reverseOdd("Bananas"));
console.log(reverseOdd("One two three four"));
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length")); */

function itemsPurchased(products, amountOfMoney) {
    let affordableProducts = [];
    for (const [productName, productPrice] of Object.entries(products)) {
        if (getPriceAsNumber(productPrice) <= getPriceAsNumber(amountOfMoney)) { affordableProducts.push(productName); }
    }
    if (affordableProducts.length === 0) {
        return "Nothing";
    }
    return affordableProducts.sort();
}

function getPriceAsNumber(price) {
    let priceAsString = "";
    for (const char of price) {
        if (!isNaN(parseInt(char))) { priceAsString += char };
    }
    return parseFloat(priceAsString);
}

/* console.log(itemsPurchased({ Water: "$1", Bread: "$3", TV: "$1,000", Fertilizer: "$20" }, "$300"));
console.log(itemsPurchased({ Apple: "$4", Honey: "$3", Fan: "$14", Bananas: "$4", Pan: "$100", Spoon: "$2" }, "$100"));
console.log(itemsPurchased({ Phone: "$999", Speakers: "$300", Laptop: "$5,000", PC: "$1200" }, "$1")); */

function isAutobiographical(number) {
    let numberDictionary = getNumberDictionary(number);
    let occuranceDictionary = getDigitOccuranceDictionary(number);

    for (const prop in numberDictionary) {
        if (numberDictionary[prop] == 0) { continue; }
        if (occuranceDictionary[prop] == null) {
            return false;
        } else if (occuranceDictionary[prop] != numberDictionary[prop]) {
            return false;
        }
    }
    return true;
}

function getNumberDictionary(number) {
    let numberDictionary = {};
    let numberAsString = String(number);
    for (let i = 0; i < numberAsString.length; i++) {
        numberDictionary[i] = parseInt(numberAsString[i]);
    }
    return numberDictionary;
}

function getDigitOccuranceDictionary(number) {
    let occuranceDictionary = {};
    let numberAsString = String(number);
    for (let i = 0; i < numberAsString.length; i++) {
        if (occuranceDictionary[parseInt(numberAsString[i])] == null) {
            occuranceDictionary[parseInt(numberAsString[i])] = 0;
        }
        occuranceDictionary[parseInt(numberAsString[i])] += 1;
    }
    return occuranceDictionary;
}

/* console.log(isAutobiographical(6210001000));
console.log(isAutobiographical(12345));
console.log(isAutobiographical(1210));
console.log(isAutobiographical(638));
console.log(isAutobiographical(3211000)); */

function getNotesDistribution(students) {
    let validNotes = students.map(student => student.notes.filter(isValidNote)).flat();
    let noteCounts = validNotes.reduce((acc, note) => {
        acc[note] = (acc[note] || 0) + 1;
        return acc;
    }, {})
    return noteCounts;
}

function isValidNote(note) {
    return note > 0 && note < 6;
}

/* console.log(getNotesDistribution([
    { "name": "Steve", "notes": [5, 5, 3, -1, 6] },
    { "name": "John", "notes": [3, 2, 5, 0, -3] },
    { "name": "Emma", "notes": [1, 4, 5, 4, 1, -7] }
])); */

function getHashTags(sentence) {
    let separatedWords = separateWords(sentence);
    let longestWords = getLongestWords(separatedWords);
    let hashtagWords = getHashTagOfWords(longestWords);
    return hashtagWords;
}

function getLongestWords(words) {
    let amountOfLongestWords = words.length >= 3 ? 3 : words.length;
    let sortedWords = words.sort((a, b) => b.length - a.length);
    let longestWords = sortedWords.slice(0, amountOfLongestWords);
    return longestWords;
}

function getHashTagOfWords(words) {
    let modifiedWords = words.map(word => "#" + word.toLowerCase()).flat();
    return modifiedWords;
}

/* console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"));
console.log(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year"));
console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));
console.log(getHashTags("Visualizing Science")); */

function invert(rgbArray) {
    let modifiedRGBArray = rgbArray.map(rgbRow => rgbRow.map(rgbValues => rgbValues.map(rgbValue => invertRGBValue(rgbValue))));
    return modifiedRGBArray;
}

function invertRGBValue(value) {
    let result = 255 - value;
    if (result > 255) {
        return 255;
    } else if (result < 0) {
        return 0;
    }
    return result;
}

/* console.log(invert([[[0, 255, 255], [256, 255, 255]], [[255, -1, 255], [255, 255, 255]]]));
console.log(invert([[[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 0, 0], [0, 0, 0], [0, 0, 0]]])); */

function grayscale(rgbArray) {
    let modifiedRGBArray = rgbArray.map(rgbRow => rgbRow.map(rgbValues => grayscaleRGBValues(rgbValues)));
    return modifiedRGBArray;
}

function grayscaleRGBValues(values) {
    let sumRGBValues = values.reduce((acc, current) => acc + getValidRGBValue(current), 0);
    let avgRGBValue = Math.round(sumRGBValues / 3);

    return [avgRGBValue, avgRGBValue, avgRGBValue];
}

function getValidRGBValue(current) {
    if (current > 255) {
        return 255;
    } else if (current < 0) {
        return 0;
    }
    return current;
}

/* console.log(grayscale([[[0, 0, 0], [0, 0, 157]], [[1, 100, 0], [0, 10, 0]]]));
console.log(grayscale([[[0, -1, -120], [300, 0, 157]], [[1, 100, 0], [256, 10, 0]]]));
console.log(grayscale([
    [[0, 0, 255], [0, 0, 0], [0, 0, 157], [100, 229, 4]],
    [[100, 0, 3], [1, 100, 0], [0, 10, 0], [0, 168, 0]],
    [[16, 30, 0], [0, 125, 0], [15, 0, 9], [0, 139, 0]],
    [[200, 2, 0], [0, 125, 0], [0, 0, 9], [0, 200, 0]]
]), [
    [[85, 85, 85], [0, 0, 0], [52, 52, 52], [111, 111, 111]],
    [[34, 34, 34], [34, 34, 34], [3, 3, 3], [56, 56, 56]],
    [[15, 15, 15], [42, 42, 42], [8, 8, 8], [46, 46, 46]],
    [[67, 67, 67], [42, 42, 42], [3, 3, 3], [67, 67, 67]]
]); */

function convertTime(time) {
    let timeType = time.slice(-2);
    let hours = parseInt(time.slice(0, 2)) + 12 * (timeType == "PM");
    hours -= 12 * (timeType == "AM" && hours >= 12) + 12 * (timeType == "PM" && hours >= 24);
    let minutes = parseInt(time.slice(3, 5));
    let seconds = parseInt(time.slice(6, 8));
    let hoursAsString = `${(hours < 10) ? "0" : ""}${hours}`;
    let minutesAsString = `${(minutes < 10) ? "0" : ""}${minutes}`;
    let secondsAsString = `${(seconds < 10) ? "0" : ""}${seconds}`;
    return `${hoursAsString}:${minutesAsString}:${secondsAsString}`;
}

/* console.log(convertTime("07:05:45PM"));
console.log(convertTime("12:40:22AM"));
console.log(convertTime("12:45:54PM"));
console.log(convertTime("11:59:59AM"));
console.log(convertTime("11:59:59PM"));
console.log(convertTime("12:40:22AM")); */