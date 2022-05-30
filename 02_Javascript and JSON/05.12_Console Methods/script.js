console.profile("Programm")

console.log("Log")
console.debug("Debug")
console.info("Info")
console.warn("Warn")
console.error("Error")

console.log("")

const person = { name: "Kyle", friends: ["Joey"] }
console.log(JSON.parse(JSON.stringify(person)))
person.name = "Sally"
person.friends.push("John")
console.log(person)

console.log("")

console.log("Normal, %cGreen, %cRed", "color: green", "background-color: red")

console.log("")

console.log(document.body)
console.dir(document.body)

console.log("")

const people = [
    { name: "Kyle", age: 27, programmer: true },
    { name: "Sally", age: 15, programmer: false },
    { name: "John", age: 34, programmer: false },
    { name: "Beth", age: 72, programmer: true },
    { name: "Martin", age: 24, programmer: true }
]
console.table(people)

console.log("")

console.log("Outside Group")
console.group("Stats")
console.log("Inside Group")
console.log("Still Inside Group")
console.group("Second")
console.log("Inside Group 2")
console.groupEnd()
console.groupEnd()

console.log("")

console.time()
console.time("Count")
for (let i = 0; i < 1000000; i++);
console.timeLog("Count")
for (let i = 0; i < 1000000; i++);
console.timeEnd("Count")

console.log("")

console.profile("Count")
for (let i = 0; i < 1000000; i++);
console.timeStamp("Count")
for (let i = 0; i < 1000000; i++);
console.profileEnd("Count")

console.log("")

console.assert(true, "If true, it won't print out")
console.assert(false, "Error, because the boolean is false")

//console.clear() --> clears the console

console.log("")

console.count("Name")
console.count("Name")
console.count("Name")
console.countReset("Name")
console.count("Name")

console.log("")

function main(){
    console.trace()  
}
main()

console.profileEnd("Programm")

//https://www.youtube.com/watch?v=UUoZ_U2_4tA