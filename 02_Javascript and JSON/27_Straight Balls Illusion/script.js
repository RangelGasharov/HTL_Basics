let canvas = document.getElementById("canvas")
let context = canvas.getContext("2d")

let canvasWidth = canvas.width
let canvasHeight = canvas.height
let circles = []
let bigRadius = 0.8 * canvas.width / 2;
let amountOfCircles = 16;
let centerX = canvasWidth / 2;
let centerY = canvasHeight / 2;

class Circle {
    constructor(radius, color) {
        this.id
        this.x
        this.y
        this.radius = radius
        this.color = color
        this.travelingAngle
        this.displacementX;
        this.displacementY;
        this.isGoingForward;
        this.timeShift
        this.isVisible
        this.isMoving = false;
    }

    moveAfterDelay() {
        setTimeout(() => {
            this.isMoving = true;
        }, this.timeShift);
    }

    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        if (this.isVisible) {
            context.fillStyle = this.color;
        }
        context.fill();
        context.closePath();
    }

    update() {
        if (this.isMoving) {
            if (Math.sqrt((this.x - canvas.width / 2) ** 2 + (this.y - canvas.height / 2) ** 2) > bigRadius) {
                this.isGoingForward = !this.isGoingForward;
            }

            if (this.isGoingForward) {
                this.x -= Math.cos(this.travelingAngle)
                this.y -= Math.sin(this.travelingAngle)
            } else {
                this.x += Math.cos(this.travelingAngle)
                this.y += Math.sin(this.travelingAngle)
            }
        }
        this.draw()
    }
}


function createButtons() {
    let buttonContainer = document.getElementById("buttons-container")
    for (i = 1; i <= amountOfCircles; i++) {
        let currentButton = document.createElement("button")
        currentButton.classList.add("btn-balls-toggle")
        currentButton.id = `btn-${i}`
        currentButton.textContent = `Ball ${i}`
        buttonContainer.append(currentButton)
    }
}

function createCircles() {
    for (i = 1; i <= amountOfCircles; i++) {
        let circleRadius = 20;
        currentCircle = new Circle(circleRadius, "rgb(255, 150, 20)");
        currentCircle.id = i;
        currentCircle.timeShift = i * 835;
        currentCircle.isVisible = true;
        currentCircle.travelingAngle = 2 * Math.PI / amountOfCircles * (i - 1);
        currentCircle.displacementX = Math.cos(currentCircle.travelingAngle) * bigRadius;
        currentCircle.displacementY = Math.sin(currentCircle.travelingAngle) * bigRadius;
        currentCircle.x = centerX + currentCircle.displacementX;
        currentCircle.y = centerY + currentCircle.displacementY;
        currentCircle.draw();
        circles.push(currentCircle)
    }
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    window.requestAnimationFrame(animate)
    circles.forEach(circle => {
        circle.update()
        circle.moveAfterDelay()
    });
}



animate()
createButtons()
createCircles()

/* 20.05.2023, 16:00 - 18:15 */
/* 20.05.2023, 19:00 - 19:15 */
/* 02.06.2023, 21:20 - 22:40 */
/* 03.06.2023, 12:20 - 13:30 */
/* 03.06.2023, 14:10 - 15:00 */