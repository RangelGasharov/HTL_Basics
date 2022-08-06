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


//https://www.youtube.com/watch?v=v2tJ3nzXh8I