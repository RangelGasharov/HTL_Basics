

let banana = "Banane"

console.log(""+ banana)



let apple = "Apple"

console.log(""+ apple)



let bananaPricePerKilo = 2.14

console.log("Preis pro Kilogramm Bananen:" + bananaPricePerKilo)



let applePricePerKilo = 3.43

console.log("Preis pro Killogramm Äpfeln:" + applePricePerKilo)



bananaweight = 0.22

console.log("Durchschnittliches Gewicht der Bananen:" + bananaweight)



appleweight = 0.34

console.log("Durchschnittliches Gewicht der Äpfeln :" + appleweight)



numberapples = 8

Priceappleslong = appleweight * applePricePerKilo * numberapples

Priceapples = Priceappleslong.toFixed(2)

console.log("Der Preis der Äpfeln ist:" + Priceapples)



numberbananas = 17

Pricebananaslong = bananaweight * bananaPricePerKilo * numberbananas

Pricebananas = Pricebananaslong.toFixed(2)

console.log("Der Preis der Bananen ist:" + Pricebananas)



bananapPricePerTon = 1000 * bananaPricePerKilo

console.log("Preis pro Tonne Bananen:" + bananapPricePerTon)



applePricePerTon = 1000 * applePricePerKilo

console.log("Preis pro Tonne Äpfeln:" + applePricePerTon)
