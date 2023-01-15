const array_1 = [1, 2, 3]
console.log(`%cArray 1: ${array_1}`, "font-size: 2em")
console.log("%cForeach", "font-size: 2.5em; font-weight: bolder")
console.log("Index : Item")
array_1.forEach(function (item, index) {
    console.log(`${index} : ${item}`)
})

console.log("%cMap", "font-size: 2.5em; font-weight: bolder")
const array_1_doubled = array_1.map(function (item) {
    return item * 2;
})
console.log(`Array 1 doubled with map: ${array_1_doubled}`)

console.log("%cFilter", "font-size: 2.5em; font-weight: bolder")
const array_1_evenNumbers = array_1.filter(function (item) {
    return item % 2 === 0;
})
console.log(`Even number from array: ${array_1_evenNumbers}`)

console.log("%cReduce", "font-size: 2.5em; font-weight: bolder")
const array_1_sum = array_1.reduce(function (result, item) {
    return result + item;
}, 0)
console.log(`Sum of all item in the array: ${array_1_sum}`)

const array_2 = [-1, -50, 100, 1, 2, 3]
console.log(`%cArray 2: ${array_2}`, "font-size: 2em")

console.log("%cSome", "font-size: 2.5em; font-weight: bolder")
const array_2_hasNegativeNumber = array_2.some(function (item) {
    return item < 0;
})
console.log(`Array 2 has negative numbers: ${array_2_hasNegativeNumber}`)

console.log("%cEvery", "font-size: 2.5em; font-weight: bolder")
const array_2_allPositiveNumbers = array_2.every(function (item) {
    return item > 0;
})
console.log(`All numbers from Array 2 are positive: ${array_2_allPositiveNumbers}`)

const objects_1 = [{ id: "a" }, { id: "b" }, { id: "c" }]
console.log("%cObjects 1:", "font-size: 2em")
console.log(objects_1)

console.log("%cFind", "font-size: 2em; font-weight: bolder")
const objects_1_found = objects_1.find(function (item) {
    return item.id === "b";
})
console.log('Object that has the id "b":')
console.log(objects_1_found)

console.log("%cFind Index", "font-size: 2.5em; font-weight: bolder")

const objects_1_foundIndex = objects_1.findIndex(function (item) {
    return item.id === "a";
})
console.log(`Index of the object with id "a": ${objects_1_foundIndex}`)