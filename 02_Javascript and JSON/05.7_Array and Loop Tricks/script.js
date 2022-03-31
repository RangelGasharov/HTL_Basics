console.log("--------------------------------------------------")

console.time("Timer 1")
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {

        console.log(
            `%ci=%c${i}%c, j = %c${j}`,
            "color: #555",
            "font-weight: blod",
            "color: #55",
            "font-weight: bold"
        )

    }

}
console.timeEnd("Timer 1")

console.log("--------------------------------------------------")

console.time("Timer 2")

loop1: for (let i = 0; i < 4; i++) {
    loop2: for (let j = 0; j < 3; j++) {
        console.log("before")
        if (i == 1) {
            continue loop1
        }
        console.log(
            `%ci=%c${i}%c, j = %c${j}`,
            "color: #555",
            "font-weight: blod",
            "color: #55",
            "font-weight: bold"
        )

    }

}
console.timeEnd("Timer 2")

console.log("--------------------------------------------------")

const person = Object.freeze({
    name: "Robert",
    age: 30,
    job: "Software Engineering",
    address: Object.freeze({
        street: "Reutergasse 45",
        city: "Dornbirn",
        postcode: "6850"
    }),
    hobbies: Object.freeze(["Tennis", "Skiing", "Hiking"]),
})

console.log(person)
console.table(person)

console.log("--------------------------------------------------")

const CURRENCY_MAP = new Map([])
const usa = { name: "United States of America" }
CURRENCY_MAP.set(usa, "USD")
console.log(CURRENCY_MAP.get(usa))

console.log("--------------------------------------------------")

const uniqueNumbers = [1, 99, 234, 234, 99, 45, 3, 7, 5, 7]

const set = new Set(uniqueNumbers)
console.log(set)
console.log("Hat 1: " + set.has(1))
console.log("Hat 2: " + set.has(2))

console.log("--------------------------------------------------")

console.log("Typical problem when calculating with a computer: ")
console.log(0.1 + 0.2)
console.log("Translation of binary values to decimal -> reason of errors")

console.log("--------------------------------------------------")

console.time("Timer 3")
for (let i = 0; i < 100; i++) {
    //short loop
}
console.timeEnd("Timer 3")

console.time("Timer 4")
for (let i = 0; i < 100000; i++) {
    // longer loop
}
console.timeEnd("Timer 4")

console.time("Timer 5")
for (let i = 0; i < 10000000; i++) {
    // longest loop
}
console.timeEnd("Timer 5")

console.log("--------------------------------------------------")

const x = 2;
console.assert(x == 1, "X is not 1")

console.log("--------------------------------------------------")

const people = [
    { name: "Ben", age: 15 },
    { name: "Amily", age: 24 },
    { name: "Tom", age: 33 },
]

console.log(people)
console.log("")
console.table(people)

//debugger

console.log("--------------------------------------------------")

//https://www.youtube.com/watch?v=yJDofSGTSPQ