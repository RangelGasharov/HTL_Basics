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