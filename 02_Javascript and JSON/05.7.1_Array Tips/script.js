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

console.table(horse)

const { name, size, skills } = horse;

const bio = `${name} is a ${size} skilled in ${skills.join(' & ')}`

console.log(bio);

function horseAge(str, age) {
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`
}

const bio2 = horseAge `This horse is ${horse.age}`;
console.log(bio2)


console.log("--------------------------------------------------")

const pikachu = { name: 'Pikachu' };
const stats = { hp: 40, attack: 60, defense: 45 }

const lvl0 = {...pikachu, ...stats }
const lvl1 = {...pikachu, ...stats, hp: 45 }

console.log(lvl0)
console.log(lvl1)

console.table(pikachu)

let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle']

console.table(pokemon)

console.log("--------------------------------------------------")

const orders = [500, 30, 99, 15, 223];

console.table(orders)

const total = orders.reduce((acc, cur) => acc + cur)

const withTax = orders.map(v => v * 1.1)

const highValue = orders.filter(v => v > 100)


console.table({ total, withTax, highValue })

console.log("-------------------------------------------------")

const random = () => {
    return Promise.resolve(Math.random())

}

const sumRandomAsyncNums = async() => {

    const first = await random();
    const second = await random();
    const third = await random();

    console.log(`Result ${first + second + third}`)

}





//https://www.youtube.com/watch?v=Mus_vwhTCq0
//6:08