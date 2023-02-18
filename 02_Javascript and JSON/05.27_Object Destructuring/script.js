console.log(`%cArray Destructuring`, "font-size: 2em")
const letters = ["A", "B", "C", "D", "E", "F", "G", "H"]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"]

const [a, b, ...rest] = letters
console.log(a)
console.log(b)
console.log(rest)

const newArray = [...letters, ...numbers]
const newArray2 = letters.concat(numbers)
console.log(newArray)
console.log(newArray2)

function sumAndMultiply(a, b) {
    return [a + b, a * b]
}

const [sum, multiply = "No multiply", division = "No division"] = sumAndMultiply(2, 4)
console.log(sum)
console.log(multiply)
console.log(division)

console.log(`%cObject Destructuring`, "font-size: 2em")

const personOne = {
    name: "Tom",
    age: 14,
    address: {
        city: "Dortmund",
        street: "Hauptstraße 40"
    }
}

const personTwo = {
    name: "Margareth",
    age: 20,
    address: {
        city: "Zürich",
        street: "Bahnhofstraße 32"
    }
}

const { name: firstName, age, favoriteFood = "not known", address: { city, street } } = personTwo

console.log(firstName)
console.log(age)
console.log(favoriteFood)
console.log(street)
console.log(city)

const personThree = { ...personTwo, ...personOne }
console.log(personThree)

function printUser({ name, age }) {
    console.log(`Name is: ${name}. Age is ${age}`)
}
printUser(personOne)