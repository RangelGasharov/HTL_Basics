const names = ["Ben", "Adam", "Jai", "Ivan"]
console.log(`Unsorted String Array: [${names}]`);

names.sort();
console.log(`String Array sorted by alphabetical order: [${names}]`);

console.log("--------------------------------------------")

const numbers = [42, 12, 145, 14, 18]
console.log(`Unsorted Integer Array: [${numbers}]`)

numbers.sort()
console.log(`"Falsely" Sorted Integer Array by JS sort: [${numbers}]`);

numbers.sort((a, b) => a - b);
console.log(`Sorter Integer Array by JS sort:[${numbers}]`)

compareInteger(numbers)
function compareInteger(a, b) {
    return a - b;
}
console.log(`Sorted Integer Array by own Function:[${numbers}]`)

console.log("--------------------------------------------")

let s = "It was a dark and stormy night.";
let words = s.split(/\W+/).filter(word => word.length > 0);

console.log(`Sorted words by chronological order:[${words}]`)

words.sort();
console.log(`Sorted words by alphabetical order:[${words}]`)
console.log("%cCapital letters have priority!", "color: red")

words.sort((a,b) => a.length - b.length);
console.log(`Words sorted by word length:[${words}]`)

