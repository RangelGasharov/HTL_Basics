function getCaffeine(type) {
    let caffeine;

    const map = {
        "Coffee": "95 mg",
        "Redbull": "147 mg",
        "Tea": "11 mg",
        "Soda": "21 mg"
    }
    caffeine = map[type] ?? "Not found"

    return caffeine
}

console.log(`Amount of coffeine in Coffee: ${getCaffeine("Coffee")}`)
console.log(`Amount of coffeine in Redbull: ${getCaffeine("Redbull")}`)
console.log(`Amount of coffeine in Tea: ${getCaffeine("Tea")}`) 
console.log(`Amount of coffeine in Soda: ${getCaffeine("Soda")}`)
console.log(`Amount of coffeine in Random: ${getCaffeine("Random")}`) 