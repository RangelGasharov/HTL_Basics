import U, { printName as printUserName, printAge as printUserAge } from "./user.js"

const user1 = new U("Bob", 11)
console.log(user1)
printUserName(user1)
printUserAge(user1)

const user2 = new U("Alex", 10)
console.log(user2)
printUserName(user2)
printUserAge(user2)