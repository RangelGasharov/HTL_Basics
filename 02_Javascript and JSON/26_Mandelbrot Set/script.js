function Complex(re, im) {
    this.re = re;
    this.im = im;
}

Complex.prototype.add = function (other) {
    return new Complex(this.re + other.re, this.im + other.im)
}

Complex.prototype.mul = function (other) {
    return new Complex(this.re * other.re - this.im * other.im, this.re * other.im + this.im * other.re)
}

Complex.prototype.abs = function () {
    return Math.sqrt(this.re * this.re + this.im * this.im)
}

function belongs(re, im, iterations) {
    let z = new Complex(0, 0)
    let c = new Complex(re, im)
    let i = 0
    while (z.abs() < 2 && i < iterations) {
        z = z.mul(z).add(c)
        i++
    }
    return i
}

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

function pixel(x, y, color) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, 1, 1)
}

function draw(width, height, maxIterations) {
    let minRe = -2, maxRe = 1, minIm = -1, maxIm = 1
    let reStep = (maxRe - minRe) / width, imStep = (maxIm - minIm) / height
    let re = minRe
    while (re < maxRe) {
        let im = minIm
        while (im < maxIm) {
            let result = belongs(re, im, maxIterations)
            let x = (re - minRe) / reStep
            let y = (im - minIm) / imStep
            if (result == maxIterations) {
                pixel(x, y, "black")
            } else {
                let h = 30 + Math.round(120 * result * 1.0 / maxIterations)
                let color = "hsl(" + h + ", 100%, 50%"
                pixel(x, y, color)
            }
            im += imStep
        }
        re += reStep
    }
}


let iterations = [5, 10, 15, 25, 35, 50, 75, 100, 150, 200, 500]
let i = 0
let interval = setInterval(function () {
    draw(900, 600, iterations[i])
    i++
    if (i >= iterations.length) {
        clearInterval(interval)
    }
}, 1000)