const number = 100

result = number >= 200 ? "Number is bigger than 200" : "Number is smaller than 200"
console.log(result)

result = number === 0 ? "The number is 0" : (
    number < 50 ? "The number is smaller than 50" : "The number is bigger than 50"
)
console.log(result)