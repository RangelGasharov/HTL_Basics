function outerFunction(outerVariable) {
    const outer2 = "Hi"
    return function innerFunction(innerVariable) {
        console.log("Outer Variable: " + outerVariable)
        console.log("Inner Variable " + innerVariable)
        console.log(outer2)
    }
}

const newFunction = outerFunction("outside")
newFunction()
