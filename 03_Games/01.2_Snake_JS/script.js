let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let rows = 20; //10 15 20 30 60   (//20)
let cols = 40; //20 30 40 60 120  (//30)
let snake = [{ x: cols - 1, y: 0 }];
let food = { x: 4, y: 5 };
canvas.widht = 1200; //720
canvas.height = 600; //480
let cellWidht = canvas.widht / cols;
let cellHeight = canvas.height / rows;
let direction = 'LEFT';
let foodCollected = false;
let score = 0;
const scorepoints = 10;
let speedsnake = 75;


document.getElementById("button1").addEventListener("click", function () {
    let speedsnake = document.getElementById("speedsnake").value;
    console.log("Current snakespeed: " + speedsnake);
});


placeFood();
setInterval(gameLoop, speedsnake);
document.addEventListener('keydown', keyDown);

draw();


function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.widht, canvas.height)
    ctx.fillStyle = 'rgb(255,0,0)'; //'red'

    if (score >= 3 * scorepoints && score < 6 * scorepoints) {
        ctx.fillStyle = 'rgb(255,42,0)';
    } else if (score >= 6 * scorepoints && score < 9 * scorepoints) {
        ctx.fillStyle = 'rgb(255,85,0)';
    } else if (score >= 9 * scorepoints && score < 12 * scorepoints) {
        ctx.fillStyle = 'rgb(255,85,0)';
    } else if (score >= 12 * scorepoints && score < 15 * scorepoints) {
        ctx.fillStyle = 'rgb(255,128,0)';
    } else if (score >= 15 * scorepoints && score < 18 * scorepoints) {
        ctx.fillStyle = 'rgb(255,170,0)';
    } else if (score >= 18 * scorepoints && score < 21 * scorepoints) {
        ctx.fillStyle = 'rgb(255,213,0)';
    } else if (score >= 21 * scorepoints && score < 24 * scorepoints) {
        ctx.fillStyle = 'rgb(255,255,0)';
    } else if (score >= 24 * scorepoints && score < 27 * scorepoints) {
        ctx.fillStyle = 'rgb(212,255,0)';
    } else if (score >= 27 * scorepoints && score < 30 * scorepoints) {
        ctx.fillStyle = 'rgb(170,255,0)';
    } else if (score >= 30 * scorepoints && score < 33 * scorepoints) {
        ctx.fillStyle = 'rgb(128,255,0)';
    } else if (score >= 33 * scorepoints && score < 36 * scorepoints) {
        ctx.fillStyle = 'rgb(85,255,0)';
    } else if (score >= 36 * scorepoints && score < 39 * scorepoints) {
        ctx.fillStyle = 'rgb(43,255,0)';
    }

    snake.forEach(part => add(part.x, part.y));

    ctx.fillStyle = 'yellow';
    add(food.x, food.y);

    requestAnimationFrame(draw);
}

function testGameOver() {

    let firstPart = snake[0];
    let otherParts = snake.slice(1);
    let duplicatePart = otherParts.find(part => part.x == firstPart.x && part.y == firstPart.y);

    if (snake[0].x < 0 ||
        snake[0].x > cols - 1 ||
        snake[0].y < 0 ||
        snake[0].y > rows - 1 ||
        duplicatePart) {
        score = 0;
        console.log(score);
        printScore(score);
        placeFood();
        snake = [{ x: cols - 1, y: 0 }];
        direction = 'LEFT'
    }
}

function placeFood() {
    let randomX = Math.floor(Math.random() * cols);
    let randomY = Math.floor(Math.random() * rows);

    food = {
        x: randomX,
        y: randomY
    };
}

function add(x, y) {
    ctx.fillRect(x * cellWidht, y * cellHeight, cellWidht - 1, cellHeight - 1)
}

function shiftSnake() {
    for (let i = snake.length - 1; i > 0; i--) {
        const part = snake[i];
        const lastPart = snake[i - 1];
        part.x = lastPart.x;
        part.y = lastPart.y;
    }
}

function gameLoop() {

    testGameOver();

    if (foodCollected) {
        snake = [{ x: snake[0].x, y: snake[0].y }, ...snake];
        foodCollected = false;
    }

    shiftSnake();
    if (direction == 'STOP') {
        snake[1].x++
        snake[1].y++
    }
    if (direction == 'LEFT') { snake[0].x--; }
    if (direction == 'RIGHT') { snake[0].x++; }
    if (direction == 'UP') { snake[0].y--; }
    if (direction == 'DOWN') { snake[0].y++; }

    if (snake[0].x == food.x && snake[0].y == food.y) {
        foodCollected = true;
        placeFood();
        score += scorepoints;
        if (score == rows * cols * scorepoints) {
            alert("Congrats, you have won!")
        }
        console.log("Current-score: " + score);
        printScore(score);
    }
}

function printScore(score) {
    document.getElementById("score").innerHTML = "Score: " + score;
}


function keyDown(e) {
    if (e.keyCode == 37 ||
        e.keyCode == 65) { //A
        direction = 'LEFT';
    }

    if (e.keyCode == 38 ||
        e.keyCode == 87) { //W
        direction = 'UP';
    }
    if (e.keyCode == 39 ||
        e.keyCode == 68) { //D
        direction = 'RIGHT';
    }
    if (e.keyCode == 40 ||
        e.keyCode == 83) { //S
        direction = 'DOWN';
    }
    if (e.keyCode == 80) { //P
        direction = 'STOP';
    }

};




//https://www.youtube.com/watch?v=niD3gx4BI9A&t=3004s