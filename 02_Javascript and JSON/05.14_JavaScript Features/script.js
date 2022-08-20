console.log("%cNullish Coalescing and Styling console log", "font-weight: bold; font-size: 1.5rem")

function calculatePrice(price, taxes, description) {
    taxes = taxes ?? 0.05
    description = description ?? "Default item"
    const total = Math.floor((price * (1 + taxes)) * 100) / 100
    console.log(`%c${description} With stated Tax:%c $${total}`,
        "font-weight: bold; font-size: 1.2rem",
        "color: green; font-size: 1.2rem")
}

calculatePrice(100, 0.10, "My item")
calculatePrice(100, 0, "Untaxed Item")
calculatePrice(100, undefined, "")

console.log("--------------------------------------------------")
console.log("%cOptional Chaining", "font-weight: bold; font-size: 1.5rem")

class Person {
    constructor(name, address, hobbies) {
        this.name = name
        this.address = address
        this.hobbies = hobbies
    }

    print() {
        console.log(this)
    }
}

function printPersonStreet(person) {
    console.log(person?.address?.street)
}

const kyle = new Person("Kyle", { street: "Elm Street 17" }, ["Bowling", "Weight Lifting"])

kyle.print()
kyle.printName?.() //checks if function is available

printPersonStreet(kyle)

console.log("--------------------------------------------------")
console.log("%cObject Shorthand", "font-weight: bold; font-size: 1.5rem")


const name = "Mark"
const favoriteFood = "Pizza"

const mark = {
    name,
    favoriteFood
}

console.log(mark)

console.log("--------------------------------------------------")

const button = document.querySelector("button")
button.style.backgroundColor = "green"

console.log("%cBlock Statements (Scoping)", "font-weight: bold; font-size: 1.5rem")
const a = 1;

function main() {
    const a = 2;
    console.log(`In Main: ${a}`)
}

{
    const a = 3;
    console.log(`In Backsets: ${a}`)
}

main()
console.log(`In Global: ${a}`)

switch (a) {
    case 1: {
        const result = a * 2
        console.log(`Result: ${result}`)
        break
    }
    case 2: {
        const result = a * 2
        console.log(`Result: ${result}`)
        break
    }
    case 3: {
        const result = a + 2
        console.log(`Result: ${result}`)
        break
    }
}


console.log("--------------------------------------------------")
console.log("%cIn Keyword", "font-weight: bold; font-size: 1.5rem")

const person = {
    name: "Kyle",
    age: 25
}

//delete person.name
console.log(person)

if (person.name != null) {
    console.log("Has truthy name value")
}

if ("name" in person) {
    console.log("Has name property")
}


console.log("--------------------------------------------------")
console.log("%cTemplate Literal Functions", "font-weight: bold; font-size: 1.5rem")

function custom(strings, ...values) {
    console.log(strings, ...values)
    return values.reduce((finalString, value, index) => {
        return `${finalString}${value}${strings[index + 1]}`
    }, strings[0])
}

const firstName = "Drew"
const hobby = "tennis"
console.log(custom`My name is ${firstName} and I love ${hobby}`)

console.log("--------------------------------------------------")
console.log("%cGenerator Functions", "font-weight: bold; font-size: 1.5rem")

function* generatorFunction() {
    console.log("Before 1")
    yield 1
    console.log("After 1")
    console.log("Before 2")
    yield 2
    console.log("After 2")
    console.log("Before 3")
    yield 3
    console.log("After 3")
}

const generator = generatorFunction()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

console.log("--------------------------------------------------")
console.log("%cDynamic Module Imports", "font-weight: bold; font-size: 1.5rem")

document.addEventListener("click", async () => {
    const { default: printModule } = await import("./module.js")
    printModule()
})

console.log("In main file")

//https://www.youtube.com/watch?v=v2tJ3nzXh8I
//https://www.youtube.com/watch?v=WIP1czLm3CY&t=339s