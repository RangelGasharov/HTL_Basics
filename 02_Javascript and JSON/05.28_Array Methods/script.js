console.log("%cWith Method", "font-weight: bold; font-size: 1.5rem")
const fruits = ["blueberry", "apple", "mango", "orange"]
const newFruits = fruits.with(2, "strawberry")
console.log("Original", fruits)
console.log("New", newFruits)

console.log("%cSort and Reverse Method", "font-weight: bold; font-size: 1.5rem")
const sortedFruits = fruits.toSorted()
const reversedFruits = fruits.toReversed()

console.log("Original", fruits)
console.log("Sorted", sortedFruits)
console.log("Reversed", reversedFruits)

console.log("%cTo Spliced", "font-weight: bold; font-size: 1.5rem")
splicedFruits = fruits.toSpliced(0, 2, "banana")
console.log("Original", fruits)
console.log("Spliced", splicedFruits)