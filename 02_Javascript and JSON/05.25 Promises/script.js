let wantedPrice = 200; console.log(wantedPrice)
let actualPrice = Math.random() * 400; console.log(actualPrice)

function priceIsLowerPromise() {
    return new Promise((resolve, reject) => {
        if (wantedPrice >= actualPrice) {
            resolve("Price is lower as big as the given limit!")
        }

        else {
            reject({
                name: "Price is higher!",
                message: "You need to ask for discount or increase the price limit."
            })
        }
    })
}

priceIsLowerPromise().then((message) => {
    console.log("Success: " + message)
}).catch((error) => {
    console.log(error.name + " " + error.message)
})

console.log()

const doTaskOne = new Promise((resolve, reject) => {
    resolve('Task 1 is done!')
})

const doTaskTwo = new Promise((resolve, reject) => {
    resolve('Task 2 is done!')
})

const doTaskThree = new Promise((resolve, reject) => {
    resolve('Task 3 is done!')
})


Promise.all([
    doTaskOne,
    doTaskTwo,
    doTaskThree
]).then((message) => {
    console.log(message)
})

Promise.race([
    doTaskOne,
    doTaskTwo,
    doTaskThree
]).then((message) => {
    console.log(message)
})