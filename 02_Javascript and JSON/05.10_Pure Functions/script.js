const array = [1, 2, 3]

addElementToArray(array, 4)

function addElementToArray(a, element) {
    return [...a, element]
}

console.log(array)
console.log(addElementToArray(array, 4))
console.log("-------------------------------------------------")