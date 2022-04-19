let n = 0
class House {
    constructor(color, gardenAvailability, price, postalCode, city, street) {
        this.color = color
        this.price = price
        this.gardenAvailability = gardenAvailability

        /*this.postalCode = postalCode
        this.city = city
        this.street = street*/
        this.location = `${postalCode} ${city} ${street}`

        if (gardenAvailability) {
            n += 1
            console.log(`Total amount of houses with gardens: ${n}`)
        }

    }

    getFurniture() {
        return `sofa, table`
    }
}

class HouseOwner {
    constructor(firstName, familyName, age, gender) {
        this.firstName = firstName
        this.familyName = familyName
        this.age = age
        this.gender = gender
    }
}

const houseObject1 = new House("green", false, 270000, "6700", "Bludenz", "Sägeweg 3")
const houseObject2 = new House("yellow", true, 450000, "6844", "Altach", "Mühlhofstatt 20")
const houseObject3 = new House("red", true, 330000, "6890", "Lustenau", "Bahngasse 43")

const houseOwner1 = new HouseOwner("Tobias", "Blaumeister", 35, "M")
const houseOwner2 = new HouseOwner("Maria", "Gruber", 40, "F")
const houseOwner3 = new HouseOwner("Elias", "Mayer", 33, "M")

console.log("-------------------------------------------------")
console.table(houseObject1)
console.log(houseObject1.getFurniture())
console.table(houseOwner1)
console.log("-------------------------------------------------")
console.table(houseObject2)
console.log(houseObject2.getFurniture())
console.table(houseOwner2)
console.log("-------------------------------------------------")
console.table(houseObject3)
console.log(houseObject3.getFurniture())
console.table(houseOwner3)
console.log("-------------------------------------------------")

class Mammal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Cat extends Mammal {
    meow() {
    }
}

class Dog extends Mammal {
    bark() {
    }
}

let pet1 = new Cat("Felix", 3)
let pet2 = new Dog("Max", 4)

console.log(pet1)
console.log(pet2)
