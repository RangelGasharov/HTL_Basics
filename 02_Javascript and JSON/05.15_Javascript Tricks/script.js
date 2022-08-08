console.log("%cAlternative to if-statement", "font-weight: bold; font-size: 1.5rem")

const age = 30;
age > 50 ? console.log("You are older than 50") : console.log("You are younger than 50")

console.log("--------------------------------------------------")

console.log("%cNumber to String", "font-weight: bold; font-size: 1.5rem")

const number1 = 20;
const number2 = 30 + "";

console.log(`Constant number1 has a value of ${number1} and is ${typeof number1}`)
console.log(`Constant number2 has a value of ${number2} and is ${typeof number2}`)

console.log("--------------------------------------------------")

console.log("%cFill an Array", "font-weight: bold; font-size: 1.5rem")

const filledArray = Array(5).fill(3)
console.log(filledArray)

const numbersArray1 = ["1", "1", "5", "3", "3", "2", "9", "8", "7", "3"];
console.log(numbersArray1)

const uniqueNumbersArray = Array.from(new Set(numbersArray1))
console.log(uniqueNumbersArray)

console.log("--------------------------------------------------")

console.log("%cDynamic Array Properties", "font-weight: bold; font-size: 1.5rem")

const dynamic = "hobbies";

const user = {
    name: "Bob",
    email: "bob@gmail.com",
    [dynamic]: "bowling"
}

console.log(user)

console.log("--------------------------------------------------")

console.log("%cShortening Arrays", "font-weight: bold; font-size: 1.5rem")

const numbersArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbersArray2)
console.log(numbersArray2.slice(-4));
numbersArray2.length = 5;
console.log(numbersArray2)
console.log(numbersArray2.slice(-4));

console.log("--------------------------------------------------")

console.log("%cArray to Object", "font-weight: bold; font-size: 1.5rem")

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers1Object = { ...numbers1 };

console.log(numbers1)
console.log(numbers1Object)

console.log("--------------------------------------------------")

console.log("%cObject to Array", "font-weight: bold; font-size: 1.5rem")

const users = {
    name: "Bob",
    email: "bob@gmail.com",
    hobbies: "bowling"
};

const usersArrayKeys = Object.keys(users);
const usersArrayValues = Object.values(users);

console.log(usersArrayKeys)
console.log(usersArrayValues)

console.log("--------------------------------------------------")

console.log("%cCheck Performance", "font-weight: bold; font-size: 1.5rem")

let startAt = performance.now()

for (let i = 0; i < 10928; i++) { }

let endAt = performance.now()

console.log(`It took ${endAt - startAt} milliseconds to execute.`)

//https://www.youtube.com/watch?v=mNJ06S60B9k