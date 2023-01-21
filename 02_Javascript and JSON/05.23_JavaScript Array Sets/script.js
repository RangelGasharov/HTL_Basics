const testArray = [1, 2, 5, 6, 7, 8, 8, 9, 19, 19, 20]
console.log(`%ctestArray: ${testArray}`, "font-size: 2em")
const testArrayUnique = new Set(testArray)
console.log(`%cUnique Test Array:`, "font-size: 2em")
console.log(testArrayUnique)
console.log(`%cSet has 1?: ${testArrayUnique.has(1)}`, "font-size: 1.5em")
console.log(`%cSet has 12?: ${testArrayUnique.has(12)}`, "font-size: 1.5em")
console.log(`%cEntries:`, "font-size: 1.5em")
console.log(testArrayUnique.entries())