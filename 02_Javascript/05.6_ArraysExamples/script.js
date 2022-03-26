const products = [
    { name: "Vase", price: 15 },
    { name: "Toothbrush", price: 1 },
    { name: "Lamp", price: 35 },
    { name: "Mirror", price: 7 },
    { name: "Bagpack", price: 40 },
    { name: "Book", price: 5 }
]

console.log(products)

//Method 1 - filters

const filteredProductsByPriceLimit = products.filter((products) => {
    return products.price <= 20
})

console.log(filteredProductsByPriceLimit)

//Method 2 - map

const PriceOfProducts = products.map((products) => {
    return products.price
})

console.log(PriceOfProducts)

//Method 3 - find

const FindProducts = products.find((products) => {
    return products.name == "Bagpack"
})

console.log(FindProducts)

//Method 4 - foreach

products.forEach((products) => {
    console.log(products.name, products.price)
})


//Method 5 - some

const HasCheapProductsAvailable1 = products.some((products) => {
    return products.price <= 30
})

console.log(HasCheapProductsAvailable1)

//Method 6 - every

const HasCheapProductsAvailable2 = products.every((products) => {
    return products.price <= 30
})

console.log(HasCheapProductsAvailable2)

//Method 7 - reduce

const totalPrices = products.reduce((currentTotal, products) => {
    return products.price + currentTotal
}, 0)

console.log(totalPrices)

const numbers = [1, 2, 3, 4, 8]
const IncludesOne = numbers.includes(1)
console.log(IncludesOne)
const IncludesFive = numbers.includes(5)
console.log(IncludesFive)