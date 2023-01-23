let companies = `[
    {
        "name": "Small Bakery",
        "numberOfEmployees": 3,
        "ceo": null,
        "rating": 4.4
    },
    {
        "name": "City Library",
        "numberOfEmployees": 10,
        "ceo": null,
        "rating": 4.6
    },
    {
        "name": "Big Corporation",
        "numberOfEmployees": 5500,
        "ceo": "Nicole",
        "rating": 3.9
    }
]`

console.log(companies)
console.log(JSON.parse(companies))
console.log(JSON.parse(companies)[0].name)
console.log(JSON.parse(companies)[0].numberOfEmployees)
console.log(JSON.parse(companies)[0].ceo)
console.log(JSON.parse(companies)[0].rating)