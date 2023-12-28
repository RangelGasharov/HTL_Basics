const people = [
    { name: "Tom", age: 30 },
    { name: "Emely", age: 12 },
    { name: "Luke", age: 25 },
    { name: "Theresia", age: 47 },
    { name: "Tamara", age: 67 }
]

console.log("%cInitial Array", "font-size: 2em;");
console.log(people)

console.log("%cGroupBy", "font-size: 2em;");
const a = Object.groupBy(people, person => person.name);
const b = Object.groupBy(people, person => person.name[0]);
console.log(a);
console.log(b);

console.log("%cShift and Unshift", "font-size: 2em;");
const c = people.shift();
console.log(c, people);
const d = people.unshift({ name: "Tom", age: 30 });
console.log(people);

console.log("%cWith", "font-size: 2em;");
const e = people.with(-1, 7);
console.log(e, people);

console.log("%cAt", "font-size: 2em;");
const f = people.at(-1);
console.log(f, people);

console.log("%cFill", "font-size: 2em;");
const g = e.fill(1, 1, 3);
console.log(g, e);

console.log("%cToSorted", "font-size: 2em;");
const h = people.toSorted();
console.log(h);

console.log("%cToReversed", "font-size: 2em;");
const i = people.toReversed();
console.log(i);

console.log("%cToSpliced", "font-size: 2em;");
const j = people.toSpliced();
console.log(j);

console.log("%cFlat", "font-size: 2em;");
let numbers = [
    [1, 2], [3, 4], [[5, 6], [7, 8]]
]
console.log("%cInitial Array", "font-size: 1.5em;");
console.log(numbers);

const k = numbers.flat(Number.POSITIVE_INFINITY);
console.log(k);

numbers = [1, 2, 3, 0]
console.log("%cInitial Array", "font-size: 1.5em;");
console.log(numbers);

console.log("%cFind Last", "font-size: 2em;");
const l = numbers.findLast(n => n < 2);
console.log(l);

console.log("%cReduce Right", "font-size: 2em;");
const m = numbers.reduceRight(n => n < 2);
console.log(m);

console.log("%cIs Array", "font-size: 2em;");
console.log(Array.isArray(numbers));