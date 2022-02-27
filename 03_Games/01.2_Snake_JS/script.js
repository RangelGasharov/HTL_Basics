document.getElementById("button1").addEventListener("click", function() {

});

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let rows = 30; //20
let cols = 60; //30
let snake = [{ x: 59, y: 0 }];
let food = { x: 4, y: 5 };
canvas.widht = 1200; //720
canvas.height = 600; //480
let cellWidht = canvas.widht / cols;
let cellHeight = canvas.height / rows;
let direction = 'LEFT';
let foodCollected = false;
let speedsnake = 75;

placeFood();

setInterval(gameLoop, speedsnake);
document.addEventListener('keydown', keyDown);

draw();


function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.widht, canvas.height)
    ctx.fillStyle = 'red';

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
        placeFood();
        snake = [{ x: 59, y: 0 }];
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

    if (direction == 'LEFT') { snake[0].x--; }
    if (direction == 'RIGHT') { snake[0].x++; }
    if (direction == 'UP') { snake[0].y--; }
    if (direction == 'DOWN') { snake[0].y++; }
    if (direction == 'STOP') {
        snake[1].x++ && snake[1].y++;
    }
    if (snake[0].x == food.x && snake[0].y == food.y) {
        foodCollected = true;

        placeFood();
    }
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