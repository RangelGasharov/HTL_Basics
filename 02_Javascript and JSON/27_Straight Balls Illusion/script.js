const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
let circles = []
let bigRadius = 0.8 * canvas.width / 2;
let amountOfCircles = 16;
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;
const startTime = Date.now()

class Circle {
    constructor(radius, color) {
        this.id
        this.x
        this.y
        this.radius = radius
        this.color = color
        this.travelingAngle
        this.timeShift
        this.isVisible
    }

    draw() {
        if (this.isVisible) {
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            context.fillStyle = this.color;
            context.fill();
            context.closePath();

            context.globalCompositeOperation = 'destination-over';
            context.beginPath();
            context.strokeStyle = "white";
            context.lineWidth = 2
            context.moveTo(bigRadius * (Math.cos(0)) * Math.cos(this.travelingAngle) + centerX, bigRadius * (Math.cos(0)) * Math.sin(this.travelingAngle) + centerY);
            context.lineTo(bigRadius * (Math.cos(0 + Math.PI)) * Math.cos(this.travelingAngle) + centerX, bigRadius * (-Math.cos(0)) * Math.sin(this.travelingAngle) + centerY);
            context.stroke();
            context.globalCompositeOperation = 'source-over';
        }
    }

    update() {
        let currentTime = Date.now()
        let time = (currentTime - startTime) / 1000
        let angleVelocity = 1
        this.x = bigRadius * (- Math.cos(angleVelocity * time + this.timeShift)) * Math.cos(this.travelingAngle) + centerX
        this.y = bigRadius * (- Math.cos(angleVelocity * time + this.timeShift)) * Math.sin(this.travelingAngle) + centerY
        this.draw()
    }
}

function createButtons() {
    let buttonContainer = document.getElementById("buttons-container")
    for (i = 1; i <= amountOfCircles; i++) {
        let currentButton = document.createElement("button")
        currentButton.classList.add("btn-balls-toggle")
        currentButton.value = i;
        currentButton.id = `btn-${i}`
        currentButton.textContent = `Ball ${i}`
        buttonContainer.append(currentButton)
    }
}

function createCircles() {
    for (i = 1; i <= amountOfCircles; i++) {
        let circleRadius = 20;
        currentCircle = new Circle(circleRadius, `rgb(${i / amountOfCircles * 200 + 100}, ${i / amountOfCircles * 50}, ${i / amountOfCircles * 10})`);
        currentCircle.id = i;
        currentCircle.timeShift = i * Math.PI / amountOfCircles;
        currentCircle.isVisible = true;
        currentCircle.travelingAngle = Math.PI / amountOfCircles * (i - 1);
        currentCircle.x = centerX;
        currentCircle.y = centerY;
        currentCircle.draw();
        circles.push(currentCircle)
    }
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    window.requestAnimationFrame(animate)
    circles.forEach(circle => {
        circle.update()
    });
}

function toggleCircle(circleNumber) {
    let circle = circles[circleNumber - 1]
    circle.isVisible = !circle.isVisible
}

animate()
createCircles()
createButtons()

const buttonsOfCircles = document.querySelectorAll(".btn-balls-toggle")
buttonsOfCircles.forEach(button => {
    button.addEventListener("click", () => {
        let buttonValue = button.value
        button.classList.toggle('clicked');
        toggleCircle(buttonValue)
    })
})

/* 
 20.05.2023, 16:00 - 18:15 --> 2.25 h
 20.05.2023, 19:00 - 19:15 --> 0.25 h
 02.06.2023, 21:20 - 22:40 --> 1.33 h
 03.06.2023, 12:20 - 13:30 --> 1.16 h
 03.06.2023, 14:10 - 15:00 --> 0.83 h
 04.06.2023, 20:00 - 21:20 --> 1.33 h
 Total: 7.15 h
*/