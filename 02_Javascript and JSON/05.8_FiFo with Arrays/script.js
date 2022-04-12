let array = []

for (i = 0; i < 21; i++) {
    array = [...array, i]
    document.getElementById('outputs1').innerHTML += array + "</br>"
}

console.table(array)

for (i = 0; i < 21; i++) {
    let arrayshift = array.shift()
    document.getElementById('outputs2').innerHTML += array + "</br>"
    console.table(array)
    console.table(arrayshift)
}