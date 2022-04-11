let array = []

for (i = 0; i < 21; i++) {
    array = [...array, i]
    document.getElementById('outputs1').innerHTML = array
}
console.table(array)

for (i = 0; i < 4; i++) {
    let arrayshift = array.shift()
    console.table(array)
    console.table(arrayshift)
    document.getElementById('outputs2').innerHTML = array
}