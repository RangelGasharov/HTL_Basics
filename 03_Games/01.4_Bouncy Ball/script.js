const FPS = 60;
let wallHits = 0;

const canvas = document.getElementById("gameCanvas")
const context = canvas.getContext("2d")

class Ball {
    constructor({ ballSize, ballPosition = { x: 0, y: 0 }, ballVelocity = { x: 0, y: 0 }, ballColor }) {
        this.ballSize = ballSize
        this.ballPosition = ballPosition
        this.ballVelocity = ballVelocity
        this.ballColor = ballColor
    }
    randomDirection() {
        if (Math.floor(Math.random() * 2) == 0) {
            this.ballVelocity.x = - this.ballVelocity.x
        }

        if (Math.floor(Math.random() * 2) == 0) {
            this.ballVelocity.y = - this.ballVelocity.y
        }
    }


    collisionDetector() {
        this.ballPosition.x += this.ballVelocity.x
        this.ballPosition.y += this.ballVelocity.y

        if (this.ballPosition.x - this.ballSize / 2 < 0 && this.ballVelocity.x < 0) {
            this.ballVelocity.x = - this.ballVelocity.x
            wallHits += 1;
        }

        if (this.ballPosition.x + this.ballSize / 2 > canvas.width && this.ballVelocity.x > 0) {
            this.ballVelocity.x = - this.ballVelocity.x
            wallHits += 1;
        }

        if (this.ballPosition.y - this.ballSize / 2 < 0 && this.ballVelocity.y < 0) {
            this.ballVelocity.y = - this.ballVelocity.y
            wallHits += 1;
        }

        if (this.ballPosition.y + this.ballSize / 2 > canvas.height && this.ballVelocity.y > 0) {
            this.ballVelocity.y = - this.ballVelocity.y
            wallHits += 1;
        }

        document.getElementById("totalWallHits").innerHTML = "Total amount of wall hits: " + wallHits;
    }

    draw() {
        context.fillStyle = "black";
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = ball_1.ballColor
        context.fillRect(
            ball_1.ballPosition.x - ball_1.ballSize / 2,
            ball_1.ballPosition.y - ball_1.ballSize / 2,
            ball_1.ballSize, ball_1.ballSize)

        context.fillStyle = ball_2.ballColor
        context.fillRect(
            ball_2.ballPosition.x - ball_2.ballSize / 2,
            ball_2.ballPosition.y - ball_2.ballSize / 2,
            ball_2.ballSize, ball_2.ballSize)

        context.fillStyle = ball_3.ballColor
        context.fillRect(
            ball_3.ballPosition.x - ball_3.ballSize / 2,
            ball_3.ballPosition.y - ball_3.ballSize / 2,
            ball_3.ballSize, ball_3.ballSize)
    }

    update() {
        this.draw()
        this.collisionDetector()
    }
}

const ball_1 = new Ball({
    ballSize: 30,
    ballPosition: {
        x: canvas.width / 2,
        y: canvas.height / 2
    },
    ballVelocity: {
        x: Math.floor(Math.random() * 251 + 100) / FPS,
        y: Math.floor(Math.random() * 251 + 100) / FPS
    },
    ballColor: "green"
})

ball_1.randomDirection()

const ball_2 = new Ball({
    ballSize: 20,
    ballPosition: {
        x: canvas.width / 2,
        y: canvas.height / 2
    },
    ballVelocity: {
        x: Math.floor(Math.random() * 151 + 100) / FPS,
        y: Math.floor(Math.random() * 151 + 100) / FPS
    },
    ballColor: "red"
})

ball_2.randomDirection()

const ball_3 = new Ball({
    ballSize: 35,
    ballPosition: {
        x: canvas.width / 2,
        y: canvas.height / 2
    },
    ballVelocity: {
        x: Math.floor(Math.random() * 251 + 100) / FPS,
        y: Math.floor(Math.random() * 251 + 100) / FPS
    },
    ballColor: "yellow"
})

ball_3.randomDirection()

console.log(ball_1)
console.log(ball_2)
console.log(ball_3)

function animate() {
    window.requestAnimationFrame(animate)
    ball_1.update()
    ball_2.update()
    ball_3.update()
}

animate()

//https://www.youtube.com/watch?v=DeqE2yn3v6Q