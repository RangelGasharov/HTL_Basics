console.log("Function with for loop:")

function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i)
    }
    console.log("Hooray")
}

countDown(5);
console.log("-------------------------------------------------")
console.log("Recursive function:")

function countDownRecursive(n) {
    if (n <= 0) {
        console.log("Hooray")
        return
    }
    console.log(n)
    countDownRecursive(n - 1)
}

countDownRecursive(5)

console.log("-------------------------------------------------")

function sumRange(n) {
    let total = 0;
    for (let i = n; i > 0; i--) {
        total += i
        console.log(i)
    }
    return total
}

console.log(sumRange(5))

console.log("-------------------------------------------------")

function sumRangeRecursive(n, total = 0) {
    if (n <= 0) {
        return total
    }
    console.log(n)
    return sumRangeRecursive(n - 1, total + n)
}

console.log(sumRangeRecursive(5))

console.log("-------------------------------------------------")

function printChildrenRecursive(t) {
    if (t.children.length === 0) {
        return
    }
    t.children.forEach(child => {
      console.log(child.name)
      printChildrenRecursive(child)  
    })
}

const tree = {
    name: "John",
    children: [{
        name: "Jim",
        children: []
    },
    {
        name: "Zoe",
        children: [
            { name: "Kyle", children: [] },
            { name: "Sophia", children: [] }
        ]
    }
    ]
}

console.log(printChildrenRecursive(tree))

//https://www.youtube.com/watch?v=6oDQaB2one8