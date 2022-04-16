let sum = (a, b) => a + b

console.log(sum(1, 5))

let isPositive = number => number >= 0
console.log(isPositive(1))
console.log(isPositive(-1))

let randomNumber = () => Math.random()
console.log(randomNumber())
console.log(isPositive(randomNumber()))

document.addEventListener('click', () => console.log("Click"))

console.log("-------------------------------------------------")

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }


    printNameArrow() {
        setTimeout(() => {
            console.log(`Arrow: ${this.name} ${this.age}`)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log(`Function: ${this.name} ${this.age}`)
        }, 100)
    }
}

let person1 = new Person('Bob', 30)
person1.printNameArrow()
person1.printNameFunction()
console.log(this.name, this.age)

console.log("-------------------------------------------------")