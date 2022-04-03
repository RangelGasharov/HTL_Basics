const a = { name: 'Tim', age: 30, nervous: false }
const b = { name: 'Levin', age: 25, nervous: false }
const c = { name: 'Benjamin', age: 17, nervous: true }

console.log('%c My friends', 'color: red;  font-weight: bold;')
console.table({ a, b, c })

console.log("--------------------------------------------------")

console.time("Timer1")
let i = 0;
while (i < 1000000) { i++ }

console.timeEnd("Timer1")

console.log("--------------------------------------------------")

const deleteMe = () => console.trace("bye bye database")

deleteMe()
deleteMe()
console.log("--------------------------------------------------")

const turtle = {
    name: 'bob 🐢',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}

console.table(turtle)

function feed({ name, meal, diet }) {
    return `Feed ${name} ${meal} "kilos of" ${diet}`;
}

console.log(feed(turtle))

console.log("--------------------------------------------------")

const horse = {
    name: 'Topher 🐴',
    size: 'large',
    skills: ['jousting', 'racing'],
    age: 7
}

const { name, size, skills } = horse;

bio = `${name} is a ${size} skilled in ${skills.join(' & ')}`

console.log(bio);

function horseAge(str, age) {
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`
}

const bio2 = horseAge `This horse is ${horse.age}`;
console.log(bio2)


console.log("--------------------------------------------------")

//https://www.youtube.com/watch?v=Mus_vwhTCq0
//6:08